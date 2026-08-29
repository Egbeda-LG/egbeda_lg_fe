import type { Metadata } from "next"

/**
 * Public origin of the site. Derived from the council's own `gov.ng` domain by
 * default; set `NEXT_PUBLIC_SITE_URL` for staging or a different production
 * host, since canonicals, Open Graph tags and the sitemap all resolve against it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://egbedalg.gov.ng"
).replace(/\/$/, "")

export const SITE_NAME = "Egbeda Local Government"

/** Fallback share image for pages with no image of their own. */
export const DEFAULT_OG_IMAGE = "/images/hero_egbeda_image.jpg"

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}

type PageMetadataInput = {
  title: string
  description: string
  /** Route path, used for the canonical URL and the Open Graph URL. */
  path: string
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
}

/**
 * Builds the per-page tags that the root layout cannot know: the canonical
 * URL, and Open Graph and Twitter cards pointing at this page specifically.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path)

  return {
    // Absolute: these titles already carry the council's name, so the root
    // layout's template must not append it a second time.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_NG",
      type,
      images: [{ url: image, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

/** Renders a JSON-LD block. Structured data is inert markup, never executed. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function breadcrumbSchema(
  crumbs: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}
