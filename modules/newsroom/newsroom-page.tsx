import { NewsroomContentSection } from "./components/newsroom-content-section"
import { NewsroomHeroSection } from "./components/newsroom-hero-section"

export function NewsroomPage() {
  return (
    <main className="min-h-screen">
      <NewsroomHeroSection />
      <NewsroomContentSection />
    </main>
  )
}
