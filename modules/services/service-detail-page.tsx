import { ServiceDetailHeroSection } from "./components/service-detail-hero-section"
import { ServiceDetailSection } from "./components/service-detail-section"
import { FadeIn } from "@/components/fade-in"
import type { ServiceItem } from "@/lib/api"
import { organizationSettingsApi, withFallback } from "@/lib/api"

interface ServiceDetailPageProps {
  service: ServiceItem
}

export async function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const settings = await withFallback(
    () => organizationSettingsApi.get(),
    {},
    "organization settings"
  )

  return (
    <main className="min-h-screen">
      <FadeIn>
        <ServiceDetailHeroSection
          title={service.name}
          subtitle={service.short_description}
        />
      </FadeIn>
      <FadeIn>
        <ServiceDetailSection
          service={service}
          contact={settings.contact_and_support}
        />
      </FadeIn>
    </main>
  )
}
