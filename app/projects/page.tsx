import type { Metadata } from "next"
import { ProjectsPage } from "@/modules/projects/projects-page"

export const metadata: Metadata = {
  title: "Project Infrastructure | Egbeda Local Government",
  description:
    "Real-time status on the infrastructure and community projects underway across Egbeda Local Government, Oyo State.",
}

export default function Page() {
  return <ProjectsPage />
}
