import type { Metadata } from "next"

import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo"
import { LandmarksAndCulturePage } from "@/modules/government/landmarks-and-culture-page"

export const metadata: Metadata = pageMetadata({
  title: "Landmarks and Culture | Egbeda Local Government",
  description:
    "Explore the industrial landmarks, markets, and cultural sites that define employment and community life across Egbeda Local Government, Oyo State.",
  path: "/government/landmarks-and-culture",
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Government", path: "/government/executive-council" },
          {
            name: "Landmarks and Culture",
            path: "/government/landmarks-and-culture",
          },
        ])}
      />
      <LandmarksAndCulturePage />
    </>
  )
}
