import type { Metadata } from "next"
import { NewsroomArticlePage } from "@/modules/newsroom/newsroom-article-page"

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
    title: `${formattedTitle} | Egbeda Local Government News`,
    description: `Read full story and official council announcement on ${formattedTitle} at Egbeda Local Government, Oyo State.`,
  }
}

export default async function Page({ params }: PageProps) {
  await params

  return <NewsroomArticlePage />
}
