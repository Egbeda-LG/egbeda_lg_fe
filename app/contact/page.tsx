import type { Metadata } from "next"

import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo"
import { ContactPage } from "@/modules/contact/contact-page"

export const metadata: Metadata = pageMetadata({
  title: "Get In Touch | Egbeda Local Government",
  description:
    "Write to the council, book a meeting, or reach an individual department at Egbeda Local Government Secretariat, Oyo State.",
  path: "/contact",
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Get In Touch", path: "/contact" },
        ])}
      />
      <ContactPage />
    </>
  )
}
