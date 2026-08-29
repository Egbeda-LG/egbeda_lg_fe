import type { Metadata } from "next"

import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo"
import { ServicesPage } from "@/modules/services/services-page"

export const metadata: Metadata = pageMetadata({
  title: "Citizen Services | Egbeda Local Government",
  description:
    "Explore citizen services offered by Egbeda Local Government Area — eligibility, required documents, processing times, and how to apply for each one.",
  path: "/services",
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Citizen Services", path: "/services" },
        ])}
      />
      <ServicesPage />
    </>
  )
}
