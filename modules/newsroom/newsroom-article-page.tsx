import { NewsroomArticleDetailSection } from "./components/newsroom-article-detail-section"
import { NewsroomHeroSection } from "./components/newsroom-hero-section"

export function NewsroomArticlePage() {
  return (
    <main className="min-h-screen">
      <NewsroomHeroSection showBackButton />
      <NewsroomArticleDetailSection />
    </main>
  )
}
