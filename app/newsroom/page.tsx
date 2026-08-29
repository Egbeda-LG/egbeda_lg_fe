import type { Metadata } from "next"

import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo"
import { NewsroomPage } from "@/modules/newsroom/newsroom-page"

/*
 * Category views are subsets of the same list, so they all canonicalise to
 * /newsroom rather than competing with it in the index.
 */
export const metadata: Metadata = pageMetadata({
  title: "News & Events | Egbeda Local Government",
  description:
    "Latest announcements, project updates, educational initiatives, health outreaches, and community events straight from Egbeda Local Government, Oyo State.",
  path: "/newsroom",
})

interface PageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function Page({ searchParams }: PageProps) {
  const { category } = await searchParams

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Newsroom", path: "/newsroom" },
        ])}
      />
      <NewsroomPage category={category ?? "all"} />
    </>
  )
}
