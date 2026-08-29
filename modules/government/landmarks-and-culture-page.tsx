import { LandmarksContentSection } from "./components/landmarks-content-section"
import { LandmarksHeroSection } from "./components/landmarks-hero-section"
import { FadeIn } from "@/components/fade-in"
import { landmarksApi, withFallback } from "@/lib/api"

export async function LandmarksAndCulturePage() {
  const landmarks = await withFallback(
    () => landmarksApi.list({ limit: 60 }),
    { items: [], meta: { page: 1, limit: 60, total: 0, totalPages: 0 } },
    "landmarks list"
  )

  return (
    <main className="min-h-screen">
      <FadeIn>
        <LandmarksHeroSection />
      </FadeIn>
      <FadeIn>
        <LandmarksContentSection landmarks={landmarks.items} />
      </FadeIn>
    </main>
  )
}
