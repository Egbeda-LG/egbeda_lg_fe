import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { NEWS_CATEGORY_OPTIONS, newsApi, optionLabel } from "@/lib/api"
import {
  PLACEHOLDER_IMAGE,
  coverImageFromHtml,
  excerpt,
  idFromSlug,
} from "@/lib/content"
import {
  JsonLd,
  SITE_NAME,
  absoluteUrl,
  breadcrumbSchema,
  pageMetadata,
} from "@/lib/seo"
import { NewsroomArticlePage } from "@/modules/newsroom/newsroom-article-page"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

/**
 * Article URLs are `<title-slug>-<id>`, so the record is looked up by the id
 * riding on the end of the slug.
 */
async function loadArticle(slug: string) {
  const id = idFromSlug(slug)

  if (!id) return null

  return newsApi.findById(id)
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await loadArticle(slug)

  if (!article) {
    return {
      title: "Article not found | Egbeda Local Government",
      robots: { index: false, follow: true },
    }
  }

  return pageMetadata({
    title: `${article.title} | Egbeda Local Government News`,
    description:
      excerpt(article.content, 160) ||
      `An announcement from ${SITE_NAME}, Oyo State.`,
    path: `/newsroom/${slug}`,
    image: coverImageFromHtml(article.content) ?? PLACEHOLDER_IMAGE,
    type: "article",
    publishedTime: article.createdAt,
    modifiedTime: article.updatedAt,
  })
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const article = await loadArticle(slug)

  if (!article) notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: excerpt(article.content, 200),
    articleSection: optionLabel(NEWS_CATEGORY_OPTIONS, article.category),
    image: [
      coverImageFromHtml(article.content) ?? absoluteUrl(PLACEHOLDER_IMAGE),
    ],
    datePublished: article.createdAt,
    dateModified: article.updatedAt ?? article.createdAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/newsroom/${slug}`),
    },
    author: { "@type": "GovernmentOrganization", name: SITE_NAME },
    publisher: {
      "@type": "GovernmentOrganization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/egbeda_logo.png"),
      },
    },
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Newsroom", path: "/newsroom" },
          { name: article.title, path: `/newsroom/${slug}` },
        ])}
      />
      <NewsroomArticlePage article={article} />
    </>
  )
}
