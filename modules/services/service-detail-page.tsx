import { ServiceDetailHeroSection } from "./components/service-detail-hero-section"
import { ServiceDetailSection } from "./components/service-detail-section"

export function ServiceDetailPage() {
  return (
    <main className="min-h-screen">
      <ServiceDetailHeroSection
        title="Marriage Registration"
        subtitle="Book, register and collect marriage certificates"
      />
      <ServiceDetailSection />
    </main>
  )
}
