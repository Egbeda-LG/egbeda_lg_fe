import type { Metadata } from "next"
import { ServiceDetailPage } from "@/modules/services/service-detail-page"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${formattedTitle} | Egbeda Local Government Services`,
    description: `Official requirements, eligibility, required documents, and application process for ${formattedTitle} at Egbeda Local Government.`,
  }
}

export default function Page() {
  return <ServiceDetailPage />
}
