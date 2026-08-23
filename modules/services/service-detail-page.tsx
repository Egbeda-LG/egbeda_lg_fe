import { ServiceDetailHeroSection } from "./components/service-detail-hero-section"
import { ServiceDetailSection } from "./components/service-detail-section"
import { FadeIn } from "@/components/fade-in"

export function ServiceDetailPage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <ServiceDetailHeroSection
          title="Marriage Registration"
          subtitle="Book, register and collect marriage certificates"
        />
      </FadeIn>
      <FadeIn>
        <ServiceDetailSection />
      </FadeIn>
    </main>
  )
}
