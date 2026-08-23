import type { Metadata } from "next"
import { ExecutiveCouncilPage } from "@/modules/government/executive-council-page"

export const metadata: Metadata = {
  title:
    "Executive Council & Political Functionaries | Egbeda Local Government",
  description:
    "Meet the Executive Chairman, Vice Chairman, and 11 Ward Councillors leading the political administration of Egbeda Local Government, Oyo State.",
}

export default function Page() {
  return <ExecutiveCouncilPage />
}
