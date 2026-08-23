import { ContactContentSection } from "./components/contact-content-section"
import { ContactHeroSection } from "./components/contact-hero-section"
import { FadeIn } from "@/components/fade-in"

export function ContactPage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <ContactHeroSection />
      </FadeIn>
      <FadeIn>
        <ContactContentSection />
      </FadeIn>
    </main>
  )
}
