import { NewsroomContentSection } from "./components/newsroom-content-section"
import { NewsroomHeroSection } from "./components/newsroom-hero-section"
import { FadeIn } from "@/components/fade-in"
import { newsApi, withFallback } from "@/lib/api"
import { toNewsCards } from "@/modules/newsroom/newsroom.utils"

interface NewsroomPageProps {
  category?: string
}

export async function NewsroomPage({ category = "all" }: NewsroomPageProps) {
  const news = await withFallback(
    () => newsApi.list({ limit: 30, category }),
    { items: [], meta: { page: 1, limit: 30, total: 0, totalPages: 0 } },
    "newsroom list"
  )

  return (
    <main className="min-h-screen">
      <FadeIn>
        <NewsroomHeroSection />
      </FadeIn>
      <FadeIn>
        <NewsroomContentSection
          articles={toNewsCards(news.items)}
          activeCategory={category}
        />
      </FadeIn>
    </main>
  )
}
