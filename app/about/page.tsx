import type { Metadata } from "next"
import { AboutPage } from "@/modules/about-page/about-page"

export const metadata: Metadata = {
  title: "About Us | Egbeda Local Government",
  description:
    "Learn about Egbeda Local Government Development Area — our 11 wards, 14 major markets, history, leadership, past chairmen lineage, land use, mission, and vision in Oyo State.",
}

export default function Page() {
  return <AboutPage />
}
