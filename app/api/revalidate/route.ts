import { revalidateTag } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

/**
 * Cache tags the site actually uses. Anything outside this list is rejected so
 * a typo in the caller fails loudly instead of silently doing nothing.
 */
const KNOWN_TAGS = [
  "news",
  "projects",
  "services",
  "landmarks",
  "departments",
  "councillors",
  "management",
  "nulge",
  "messages",
  "wards",
  "markets",
  "organization-settings",
  "past-government",
] as const

type KnownTag = (typeof KNOWN_TAGS)[number]

function isKnownTag(tag: string): tag is KnownTag {
  return (KNOWN_TAGS as readonly string[]).includes(tag)
}

/** Constant-time compare, so a wrong secret leaks nothing by how fast it fails. */
function secretMatches(provided: string, expected: string) {
  if (provided.length !== expected.length) return false

  let difference = 0

  for (let index = 0; index < provided.length; index += 1) {
    difference |= provided.charCodeAt(index) ^ expected.charCodeAt(index)
  }

  return difference === 0
}

function readSecret(request: NextRequest) {
  const header = request.headers.get("x-revalidate-secret")

  if (header) return header

  const authorization = request.headers.get("authorization")

  return authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : null
}

/**
 * Clears the cache for one or more resources the moment the admin app publishes
 * something, so an edit is live immediately rather than at the end of that
 * resource's revalidation window.
 *
 * ```
 * curl -X POST https://<site>/api/revalidate \
 *   -H "x-revalidate-secret: $REVALIDATE_SECRET" \
 *   -H "content-type: application/json" \
 *   -d '{"tags":["news"]}'
 * ```
 *
 * `{"tags":["*"]}` clears everything — useful after a bulk import.
 */
export async function POST(request: NextRequest) {
  const expected = process.env.REVALIDATE_SECRET

  // Refuse rather than run unauthenticated: an open endpoint here lets anyone
  // stampede the API by clearing the cache in a loop.
  if (!expected) {
    return NextResponse.json(
      { revalidated: false, message: "REVALIDATE_SECRET is not configured." },
      { status: 503 }
    )
  }

  const provided = readSecret(request)

  if (!provided || !secretMatches(provided, expected)) {
    return NextResponse.json(
      { revalidated: false, message: "Invalid secret." },
      { status: 401 }
    )
  }

  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { revalidated: false, message: "Expected a JSON body." },
      { status: 400 }
    )
  }

  const payload = (body ?? {}) as { tag?: unknown; tags?: unknown }
  const requested = [
    ...(typeof payload.tag === "string" ? [payload.tag] : []),
    ...(Array.isArray(payload.tags)
      ? payload.tags.filter((tag): tag is string => typeof tag === "string")
      : []),
  ]

  if (requested.length === 0) {
    return NextResponse.json(
      {
        revalidated: false,
        message: "Pass `tag` or `tags`.",
        knownTags: KNOWN_TAGS,
      },
      { status: 400 }
    )
  }

  const tags = requested.includes("*")
    ? [...KNOWN_TAGS]
    : requested.filter(isKnownTag)

  const unknown = requested.filter((tag) => tag !== "*" && !isKnownTag(tag))

  if (tags.length === 0) {
    return NextResponse.json(
      { revalidated: false, unknown, knownTags: KNOWN_TAGS },
      { status: 400 }
    )
  }

  for (const tag of tags) {
    // `expire: 0` makes the next request wait for fresh data, rather than
    // serving one more stale response while it refetches in the background.
    revalidateTag(tag, { expire: 0 })
  }

  return NextResponse.json({
    revalidated: true,
    tags,
    ...(unknown.length > 0 ? { ignored: unknown } : {}),
    now: new Date().toISOString(),
  })
}

/** Lets an operator confirm the hook is deployed and configured. */
export async function GET() {
  return NextResponse.json({
    configured: Boolean(process.env.REVALIDATE_SECRET),
    knownTags: KNOWN_TAGS,
  })
}
