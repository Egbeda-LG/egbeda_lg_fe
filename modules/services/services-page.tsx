import { ServicesCatalogSection } from "./components/services-catalog-section"
import { ServicesHeroSection } from "./components/services-hero-section"

export function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHeroSection />
      <ServicesCatalogSection />
    </main>
  )
}
