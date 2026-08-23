import { CommunitiesSection } from "@/components/communities-section"
import { ExecutiveCouncilContentSection } from "./components/executive-council-content-section"
import { ExecutiveCouncilHeroSection } from "./components/executive-council-hero-section"

export function ExecutiveCouncilPage() {
  return (
    <main className="min-h-screen">
      <ExecutiveCouncilHeroSection />
      <ExecutiveCouncilContentSection />
      <CommunitiesSection />
    </main>
  )
}
