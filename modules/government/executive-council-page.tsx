import { CommunitiesSection } from "@/components/communities-section"
import { ExecutiveCouncilContentSection } from "./components/executive-council-content-section"
import { ExecutiveCouncilHeroSection } from "./components/executive-council-hero-section"
import { FadeIn } from "@/components/fade-in"
import {
  councillorsApi,
  organizationSettingsApi,
  withFallback,
} from "@/lib/api"
import { toCouncillorRows } from "@/modules/government/government.utils"

export async function ExecutiveCouncilPage() {
  const [councillors, settings] = await Promise.all([
    withFallback(
      () => councillorsApi.list({ limit: 60 }),
      { items: [], meta: { page: 1, limit: 60, total: 0, totalPages: 0 } },
      "councillors list"
    ),
    withFallback(
      () => organizationSettingsApi.get(),
      {},
      "organization settings"
    ),
  ])

  return (
    <main className="min-h-screen">
      <FadeIn>
        <ExecutiveCouncilHeroSection />
      </FadeIn>
      <FadeIn>
        <ExecutiveCouncilContentSection
          chairman={settings.chairman_info}
          viceChairman={settings.vice_chairman_info}
          councillors={toCouncillorRows(councillors.items)}
        />
      </FadeIn>
      <FadeIn>
        <CommunitiesSection />
      </FadeIn>
    </main>
  )
}
