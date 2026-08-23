import type { Metadata } from "next"
import { ManagementTeamPage } from "@/modules/government/management-team-page"

export const metadata: Metadata = {
  title: "Management Team | Egbeda Local Government",
  description:
    "Meet the career civil servants and departmental directors leading administrative and public service delivery at Egbeda Local Government, Oyo State.",
}

export default function Page() {
  return <ManagementTeamPage />
}
