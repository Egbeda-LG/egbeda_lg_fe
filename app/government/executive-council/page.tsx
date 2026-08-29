import type { Metadata } from "next"

import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo"
import { ExecutiveCouncilPage } from "@/modules/government/executive-council-page"

export const metadata: Metadata = pageMetadata({
  title:
    "Executive Council & Political Functionaries | Egbeda Local Government",
  description:
    "Meet the Executive Chairman and the ward councillors leading the political administration of Egbeda Local Government, Oyo State.",
  path: "/government/executive-council",
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Government", path: "/government/executive-council" },
          {
            name: "Executive Council",
            path: "/government/executive-council",
          },
        ])}
      />
      <ExecutiveCouncilPage />
    </>
  )
}
