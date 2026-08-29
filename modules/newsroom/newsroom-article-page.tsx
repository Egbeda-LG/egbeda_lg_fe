import { NewsroomArticleDetailSection } from "./components/newsroom-article-detail-section"
import { NewsroomHeroSection } from "./components/newsroom-hero-section"
import { FadeIn } from "@/components/fade-in"
import type { NewsItem } from "@/lib/api"
import { newsApi, withFallback } from "@/lib/api"
import { toNewsCards } from "@/modules/newsroom/newsroom.utils"

interface NewsroomArticlePageProps {
  article: NewsItem
}

export async function NewsroomArticlePage({
  article,
}: NewsroomArticlePageProps) {
  const related = await withFallback(
    () => newsApi.list({ limit: 4, category: article.category }),
    { items: [], meta: { page: 1, limit: 4, total: 0, totalPages: 0 } },
    "related news"
  )

  const relatedCards = toNewsCards(
    related.items.filter((item) => item._id !== article._id)
  ).slice(0, 3)

  return (
    <main className="min-h-screen">
      <FadeIn>
        <NewsroomHeroSection showBackButton />
      </FadeIn>
      <FadeIn>
        <NewsroomArticleDetailSection
          article={article}
          related={relatedCards}
        />
      </FadeIn>
    </main>
  )
}
