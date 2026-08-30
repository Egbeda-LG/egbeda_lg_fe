import { ManagementTeamHeroSection } from "./components/management-team-hero-section"
import { ManagementTeamSection } from "./components/management-team-section"
import { FadeIn } from "@/components/fade-in"
import { managementApi, withFallback } from "@/lib/api"
import { toManagementCard } from "@/modules/government/government.utils"

export async function ManagementTeamPage() {
  const management = await withFallback(
    () => managementApi.list({ limit: 60 }),
    { items: [], meta: { page: 1, limit: 60, total: 0, totalPages: 0 } },
    "management list"
  )

  return (
    <main className="min-h-screen">
      <FadeIn>
        <ManagementTeamHeroSection />
      </FadeIn>
      <FadeIn>
        <ManagementTeamSection
          officials={management.items.map(toManagementCard)}
        />
      </FadeIn>
    </main>
  )
}
