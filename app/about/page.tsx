import type { Metadata } from "next"

import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo"
import { AboutPage } from "@/modules/about-page/about-page"

export const metadata: Metadata = pageMetadata({
  title: "About Us | Egbeda Local Government",
  description:
    "Learn about Egbeda Local Government Development Area — our 11 wards, 14 major markets, history, leadership, past chairmen lineage, land use, mission, and vision in Oyo State.",
  path: "/about",
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <AboutPage />
    </>
  )
}
