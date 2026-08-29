import type { Metadata } from "next"

import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo"
import { ManagementTeamPage } from "@/modules/government/management-team-page"

export const metadata: Metadata = pageMetadata({
  title: "Management Team | Egbeda Local Government",
  description:
    "Meet the career civil servants and departmental directors leading administrative and public service delivery at Egbeda Local Government, Oyo State.",
  path: "/government/management-team",
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Government", path: "/government/executive-council" },
          { name: "Management Team", path: "/government/management-team" },
        ])}
      />
      <ManagementTeamPage />
    </>
  )
}
