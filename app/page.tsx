import type { Metadata } from "next"

import { JsonLd, SITE_URL, absoluteUrl, pageMetadata } from "@/lib/seo"
import { LandingPage } from "@/modules/landing-page/landing-page"

export const metadata: Metadata = pageMetadata({
  title: "Egbeda Local Government | Official Website, Oyo State",
  description:
    "Official website of Egbeda Local Government, Oyo State — apply for citizen services, follow development projects across the eleven wards, and read council news.",
  path: "/",
})

/** Lets Google surface a search box for the site in the results page. */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Egbeda Local Government",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: absoluteUrl("/newsroom?category={search_term_string}"),
    },
    "query-input": "required name=search_term_string",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <LandingPage />
    </>
  )
}
