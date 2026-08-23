import { LandmarksContentSection } from "./components/landmarks-content-section"
import { LandmarksHeroSection } from "./components/landmarks-hero-section"

export function LandmarksAndCulturePage() {
  return (
    <main className="min-h-screen">
      <LandmarksHeroSection />
      <LandmarksContentSection />
    </main>
  )
}
