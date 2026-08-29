import type { MetadataRoute } from "next"

import { absoluteUrl } from "@/lib/seo"

/*
 * Everything is crawlable. Filtered listings such as /newsroom?category=health
 * are deduplicated by their canonical tag rather than blocked here — blocking
 * them would stop crawlers reading that tag in the first place.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  }
}
