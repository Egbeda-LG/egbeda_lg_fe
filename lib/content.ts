/**
 * Framework-free helpers for turning API records into the shapes the public
 * pages render: pretty URLs, readable dates, and plain text pulled out of the
 * rich-text the newsroom editor produces.
 */

const OBJECT_ID = /^[0-9a-f]{24}$/i
const TRAILING_OBJECT_ID = /-([0-9a-f]{24})$/i

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

/**
 * Records are addressed by Mongo id, but a government site should not have
 * opaque URLs - so the id rides along at the end of a readable slug and is
 * peeled back off when the page loads.
 */
export function toDetailSlug(title: string, id: string) {
  const base = slugify(title)

  return base ? `${base}-${id}` : id
}

export function idFromSlug(slug: string) {
  const match = slug.match(TRAILING_OBJECT_ID)

  if (match) return match[1]

  return OBJECT_ID.test(slug) ? slug : null
}

const DATE_FORMAT = new Intl.DateTimeFormat("en-NG", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
})

/** "30 Jan 2026" - the long form used in article headers. */
export function formatDate(value?: string | null) {
  if (!value) return ""

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return ""

  return DATE_FORMAT.format(date)
}

/** "JAN 30, 2026" - the uppercase eyebrow used on cards. */
export function formatCardDate(value?: string | null) {
  const formatted = formatDate(value)

  if (!formatted) return ""

  const [day, month, year] = formatted.split(" ")

  return `${month.toUpperCase()} ${day}, ${year}`
}

export function formatDateRange(start?: string | null, end?: string | null) {
  const from = formatDate(start)
  const to = formatDate(end)

  if (from && to) return `${from} — ${to}`

  return from || to
}

export function formatNumber(value?: number | null) {
  if (typeof value !== "number" || Number.isNaN(value)) return ""

  return new Intl.NumberFormat("en-NG").format(value)
}

const ENTITIES: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
}

/** Strips markup so rich text can be measured, truncated and used as meta. */
export function htmlToPlainText(html?: string | null) {
  if (!html) return ""

  return html
    .replace(/<figure[\s\S]*?<\/figure>/gi, " ")
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(
      /&[a-z#0-9]+;/gi,
      (entity) => ENTITIES[entity.toLowerCase()] ?? " "
    )
    .replace(/\s+/g, " ")
    .trim()
}

export function excerpt(value?: string | null, maxLength = 180) {
  const text = htmlToPlainText(value)

  if (text.length <= maxLength) return text

  const clipped = text.slice(0, maxLength)
  const lastSpace = clipped.lastIndexOf(" ")

  return `${clipped.slice(0, lastSpace > 0 ? lastSpace : maxLength).trimEnd()}…`
}

/**
 * The admin editor marks the cover image with `data-featured-image`; anything
 * older simply uses whichever image comes first.
 */
export function coverImageFromHtml(html?: string | null) {
  if (!html) return undefined

  const featured = html.match(
    /<figure[^>]*data-featured-image[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"/i
  )

  if (featured) return featured[1]

  return html.match(/<img[^>]*src="([^"]+)"/i)?.[1]
}

type PlacementCandidate = {
  photo_url: string
  is_in_homepage: boolean
  is_in_government: boolean
  is_in_about: boolean
  is_in_lower_home: boolean
}

/**
 * The images an admin flagged for a page, in upload order.
 *
 * The flags are authoritative: an image with `is_in_homepage: false` must never
 * reach the homepage, so an empty result stays empty rather than falling back
 * to whatever else was uploaded. Callers supply their own static fallback.
 */
export function placementImages(
  images: PlacementCandidate[] | undefined,
  placement: "homepage" | "government" | "about" | "lower_home"
): string[] {
  if (!images?.length) return []

  const key = `is_in_${placement}` as const

  return images
    .filter((image) => image[key] === true && Boolean(image.photo_url))
    .map((image) => image.photo_url)
}

/**
 * One flagged image for a page, or `undefined` when the admin has not flagged
 * any. `index` only disambiguates when a page has more than one slot and more
 * than one image was flagged for it; otherwise every slot shares the one image.
 */
export function placementImage(
  images: PlacementCandidate[] | undefined,
  placement: "homepage" | "government" | "about" | "lower_home",
  index = 0
) {
  const available = placementImages(images, placement)

  return available[index] ?? available[0]
}

/** Shown wherever a record has no image of its own. */
export const PLACEHOLDER_IMAGE = "/images/hero_egbeda_image.jpg"
