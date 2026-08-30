import { ApiError } from "@/lib/api/errors"

const DEFAULT_API_BASE_URL = "https://egbeda-api-dev.jumpingcrab.com"

/**
 * Root of the Egbeda LG backend, without the global prefix - repository paths
 * carry `/api/v1` themselves, exactly as they do in the admin app.
 */
export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL
).replace(/\/$/, "")

/** How long a fetched resource stays fresh before Next.js revalidates it. */
export const DEFAULT_REVALIDATE_SECONDS = 300

export type FetchOptions = {
  /** Appended as a query string; empty and nullish values are dropped. */
  params?: Record<string, string | number | boolean | undefined | null>
  /** Seconds before the response is revalidated. `0` opts out of caching. */
  revalidate?: number
  /** Cache tags, so a resource can be revalidated on demand later. */
  tags?: string[]
  signal?: AbortSignal
}

/*
 * Reactotron is a dev dependency, so it is reached through a dynamic import
 * behind a NODE_ENV check — the production build never loads it. The promise is
 * cached so the import cost is paid once, not on every request.
 */
type ApiReporter = typeof import("@/lib/reactotron/server").reportApiCall

let reporterPromise: Promise<ApiReporter | null> | null = null

function apiReporter() {
  if (process.env.NODE_ENV === "production") return null

  reporterPromise ??= import("@/lib/reactotron/server")
    .then((module) => module.reportApiCall)
    .catch(() => null)

  return reporterPromise
}

async function report(call: Parameters<ApiReporter>[0]) {
  try {
    const reportApiCall = await apiReporter()
    reportApiCall?.(call)
  } catch {
    // Debugging must never break a render.
  }
}

function buildUrl(path: string, params: FetchOptions["params"]) {
  const url = new URL(`${API_BASE_URL}${path}`)

  for (const [key, value] of Object.entries(params ?? {})) {
    if (value === undefined || value === null) continue
    if (typeof value === "string" && value.trim() === "") continue

    url.searchParams.set(key, String(value))
  }

  return url.toString()
}

/**
 * Reads JSON from the API. Every endpoint the public site touches is
 * unauthenticated, so this runs on the server with no session attached and
 * leans on the Next.js data cache instead.
 */
export async function apiFetch<T>(
  path: string,
  { params, revalidate, tags, signal }: FetchOptions = {}
): Promise<T> {
  const url = buildUrl(path, params)
  const cacheSeconds = revalidate ?? DEFAULT_REVALIDATE_SECONDS
  const startedAt = Date.now()

  let response: Response

  try {
    response = await fetch(url, {
      headers: { Accept: "application/json" },
      signal,
      next: {
        revalidate: cacheSeconds,
        tags,
      },
    })
  } catch (cause) {
    void report({
      url,
      method: "GET",
      params: params ?? undefined,
      status: 0,
      body: {
        error: "Unable to reach the Egbeda LG API.",
        cause: String(cause),
      },
      duration: Date.now() - startedAt,
      cache: describeCache(cacheSeconds, tags),
    })

    throw new ApiError(
      "Unable to reach the Egbeda LG API.",
      undefined,
      undefined,
      { cause }
    )
  }

  const body = await response.text()
  const payload = body ? safeJsonParse(body) : undefined

  void report({
    url,
    method: "GET",
    params: params ?? undefined,
    status: response.status,
    body: payload,
    duration: Date.now() - startedAt,
    cache: describeCache(cacheSeconds, tags),
  })

  if (!response.ok) {
    throw new ApiError(
      readErrorMessage(payload) ?? `Request to ${path} failed.`,
      response.status,
      payload
    )
  }

  return payload as T
}

/** Human-readable cache policy, shown alongside the call in Reactotron. */
function describeCache(revalidate: number, tags?: string[]) {
  const policy = revalidate === 0 ? "no-store" : `revalidate ${revalidate}s`

  return tags?.length ? `${policy} · tags: ${tags.join(", ")}` : policy
}

function safeJsonParse(body: string): unknown {
  try {
    return JSON.parse(body)
  } catch {
    return body
  }
}

function readErrorMessage(payload: unknown) {
  if (typeof payload !== "object" || payload === null) return undefined

  const message = (payload as Record<string, unknown>).message

  if (typeof message === "string" && message.trim()) return message.trim()
  if (Array.isArray(message)) {
    return message.filter((item) => typeof item === "string").join(", ")
  }

  return undefined
}

/**
 * Sends JSON to the API. The public site writes in exactly one place - the
 * contact form - so this is deliberately narrow: never cached, and always
 * called from a Server Action rather than the browser, which keeps the request
 * same-origin and out of reach of CORS.
 */
export async function apiPost<T>(
  path: string,
  body: unknown,
  options: { signal?: AbortSignal; headers?: Record<string, string> } = {}
): Promise<T> {
  const url = `${API_BASE_URL}${path}`
  const startedAt = Date.now()

  let response: Response

  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(body),
      signal: options.signal,
      cache: "no-store",
    })
  } catch (cause) {
    void report({
      url,
      method: "POST",
      status: 0,
      body: {
        error: "Unable to reach the Egbeda LG API.",
        cause: String(cause),
      },
      duration: Date.now() - startedAt,
      cache: "no-store",
    })

    throw new ApiError(
      "Unable to reach the Egbeda LG API.",
      undefined,
      undefined,
      { cause }
    )
  }

  const text = await response.text()
  const payload = text ? safeJsonParse(text) : undefined

  void report({
    url,
    method: "POST",
    status: response.status,
    body: payload,
    duration: Date.now() - startedAt,
    cache: "no-store",
  })

  if (!response.ok) {
    throw new ApiError(
      readErrorMessage(payload) ?? `Request to ${path} failed.`,
      response.status,
      payload
    )
  }

  return payload as T
}
