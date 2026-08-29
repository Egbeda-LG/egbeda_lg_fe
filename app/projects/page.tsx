import type { Metadata } from "next"

import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo"
import { ProjectsPage } from "@/modules/projects/projects-page"

export const metadata: Metadata = pageMetadata({
  title: "Project Infrastructure | Egbeda Local Government",
  description:
    "Track the infrastructure and community projects Egbeda Local Government is delivering across its wards — location, contractor, schedule and delivery stage.",
  path: "/projects",
})

interface PageProps {
  searchParams: Promise<{ ward?: string }>
}

export default async function Page({ searchParams }: PageProps) {
  const { ward } = await searchParams

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Project Infrastructure", path: "/projects" },
        ])}
      />
      <ProjectsPage ward={ward ?? "all"} />
    </>
  )
}
