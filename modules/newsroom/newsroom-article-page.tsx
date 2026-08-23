import { NewsroomArticleDetailSection } from "./components/newsroom-article-detail-section"
import { NewsroomHeroSection } from "./components/newsroom-hero-section"
import { FadeIn } from "@/components/fade-in"

export function NewsroomArticlePage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <NewsroomHeroSection showBackButton />
      </FadeIn>
      <FadeIn>
        <NewsroomArticleDetailSection />
      </FadeIn>
    </main>
  )
}
