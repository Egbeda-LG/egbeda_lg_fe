import { ServicesCatalogSection } from "./components/services-catalog-section"
import { ServicesHeroSection } from "./components/services-hero-section"
import { FadeIn } from "@/components/fade-in"
import { organizationSettingsApi, servicesApi, withFallback } from "@/lib/api"
import { toServiceCards } from "@/modules/services/services.utils"

export async function ServicesPage() {
  const [services, settings] = await Promise.all([
    withFallback(
      () => servicesApi.list({ limit: 60 }),
      { items: [], meta: { page: 1, limit: 60, total: 0, totalPages: 0 } },
      "services catalog"
    ),
    withFallback(
      () => organizationSettingsApi.get(),
      {},
      "organization settings"
    ),
  ])

  const cards = toServiceCards(services.items)

  return (
    <main className="min-h-screen">
      <FadeIn>
        <ServicesHeroSection
          count={services.meta.total || cards.length}
          departments={new Set(cards.map((card) => card.department)).size}
        />
      </FadeIn>
      <FadeIn>
        <ServicesCatalogSection
          services={cards}
          directionsHref={settings.contact_and_support?.google_map_link}
        />
      </FadeIn>
    </main>
  )
}
