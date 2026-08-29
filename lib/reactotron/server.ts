import { createClient, type ReactotronCore } from "reactotron-core-client"

/**
 * Reactotron client for the Node side of the app.
 *
 * Almost everything this site does happens in server components, so the API
 * reads never appear in the browser's network tab. This puts them on
 * Reactotron's timeline instead.
 *
 * Development only, and deliberately unable to break the app: if the desktop
 * app is not running, the socket simply never opens and every call here is a
 * no-op.
 */

const HOST = process.env.REACTOTRON_HOST ?? "localhost"
const PORT = Number(process.env.REACTOTRON_PORT ?? 9090)

type ServerReactotron = ReactotronCore & {
  log: (...args: unknown[]) => void
  warn: (message: unknown) => void
  error: (message: unknown, stack: unknown) => void
  display: (config: Record<string, unknown>) => void
  apiResponse: (
    request: {
      data: unknown
      headers: Record<string, string>
      method: string
      params: unknown
      url: string
    },
    response: {
      body: string
      headers: Record<string, string>
      status: number
    },
    duration: number
  ) => void
}

/*
 * The dev server re-evaluates modules on every change, so the client is parked
 * on globalThis to keep one socket rather than one per reload.
 */
const globalForReactotron = globalThis as typeof globalThis & {
  __egbedaReactotron?: ServerReactotron | null
}

function create(): ServerReactotron | null {
  if (typeof WebSocket === "undefined") {
    console.warn(
      "[reactotron] No global WebSocket in this runtime — server logging is off."
    )
    return null
  }

  try {
    const client = createClient({
      name: "Egbeda Website · server",
      host: HOST,
      port: PORT,
      environment: process.env.NODE_ENV,
      createSocket: (path: string) => new WebSocket(path),
      onConnect: () => console.log(`[reactotron] server connected on ${PORT}`),
    }) as ServerReactotron

    client.connect()

    return client
  } catch (error) {
    console.warn("[reactotron] server client failed to start:", error)
    return null
  }
}

function reactotron(): ServerReactotron | null {
  if (process.env.NODE_ENV === "production") return null

  if (globalForReactotron.__egbedaReactotron === undefined) {
    globalForReactotron.__egbedaReactotron = create()
  }

  return globalForReactotron.__egbedaReactotron
}

/** Puts one API read on Reactotron's API timeline. */
export function reportApiCall(call: {
  url: string
  method: string
  params?: Record<string, unknown>
  status: number
  body: unknown
  duration: number
  cache?: string
}) {
  const client = reactotron()

  if (!client) return

  try {
    client.apiResponse(
      {
        url: call.url,
        method: call.method,
        params: call.params ?? {},
        data: null,
        headers: {},
      },
      {
        // Reactotron renders the body itself; it only needs it stringified.
        body: safeStringify(call.body),
        status: call.status,
        headers: call.cache ? { "x-cache-policy": call.cache } : {},
      },
      Math.round(call.duration)
    )
  } catch {
    // Never let debugging break a render.
  }
}

/** `console.log` for the server, but it lands in Reactotron. */
export function logServer(...args: unknown[]) {
  try {
    reactotron()?.log(...args)
  } catch {
    // ignored
  }
}

export function warnServer(message: unknown) {
  try {
    reactotron()?.warn(message)
  } catch {
    // ignored
  }
}

/** A titled, expandable panel — good for errors with context attached. */
export function displayServer(config: {
  name: string
  value: unknown
  preview?: string
  important?: boolean
}) {
  try {
    reactotron()?.display(config)
  } catch {
    // ignored
  }
}

function safeStringify(value: unknown) {
  if (typeof value === "string") return value

  try {
    return JSON.stringify(value, null, 2) ?? ""
  } catch {
    return String(value)
  }
}
