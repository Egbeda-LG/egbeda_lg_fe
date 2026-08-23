import { ManagementTeamHeroSection } from "./components/management-team-hero-section"
import { ManagementTeamSection } from "./components/management-team-section"

export function ManagementTeamPage() {
  return (
    <main className="min-h-screen">
      <ManagementTeamHeroSection />
      <ManagementTeamSection />
    </main>
  )
}
