import { ManagementTeamHeroSection } from "./components/management-team-hero-section"
import { ManagementTeamSection } from "./components/management-team-section"
import { FadeIn } from "@/components/fade-in"

export function ManagementTeamPage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <ManagementTeamHeroSection />
      </FadeIn>
      <FadeIn>
        <ManagementTeamSection />
      </FadeIn>
    </main>
  )
}
