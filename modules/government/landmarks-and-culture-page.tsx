import { LandmarksContentSection } from "./components/landmarks-content-section"
import { LandmarksHeroSection } from "./components/landmarks-hero-section"
import { FadeIn } from "@/components/fade-in"

export function LandmarksAndCulturePage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <LandmarksHeroSection />
      </FadeIn>
      <FadeIn>
        <LandmarksContentSection />
      </FadeIn>
    </main>
  )
}
