import type { Metadata } from "next"

import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo"
import { NulgePage } from "@/modules/government/nulge-page"

export const metadata: Metadata = pageMetadata({
  title: "NULGE Team | Egbeda Local Government",
  description:
    "Meet the Egbeda branch executives of the Nigeria Union of Local Government Employees — the union representing council staff welfare and conditions of service.",
  path: "/government/nulge",
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Government", path: "/government/executive-council" },
          { name: "NULGE Team", path: "/government/nulge" },
        ])}
      />
      <NulgePage />
    </>
  )
}
