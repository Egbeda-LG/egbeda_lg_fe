import { ServicesCatalogSection } from "./components/services-catalog-section"
import { ServicesHeroSection } from "./components/services-hero-section"
import { FadeIn } from "@/components/fade-in"

export function ServicesPage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <ServicesHeroSection />
      </FadeIn>
      <FadeIn>
        <ServicesCatalogSection />
      </FadeIn>
    </main>
  )
}
