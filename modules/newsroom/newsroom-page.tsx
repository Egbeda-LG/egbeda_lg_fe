import { NewsroomContentSection } from "./components/newsroom-content-section"
import { NewsroomHeroSection } from "./components/newsroom-hero-section"
import { FadeIn } from "@/components/fade-in"

export function NewsroomPage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <NewsroomHeroSection />
      </FadeIn>
      <FadeIn>
        <NewsroomContentSection />
      </FadeIn>
    </main>
  )
}
