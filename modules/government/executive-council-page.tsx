import { CommunitiesSection } from "@/components/communities-section"
import { ExecutiveCouncilContentSection } from "./components/executive-council-content-section"
import { ExecutiveCouncilHeroSection } from "./components/executive-council-hero-section"
import { FadeIn } from "@/components/fade-in"

export function ExecutiveCouncilPage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <ExecutiveCouncilHeroSection />
      </FadeIn>
      <FadeIn>
        <ExecutiveCouncilContentSection />
      </FadeIn>
      <FadeIn>
        <CommunitiesSection />
      </FadeIn>
    </main>
  )
}
