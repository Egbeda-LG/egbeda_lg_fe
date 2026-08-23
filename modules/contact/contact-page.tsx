import { ContactContentSection } from "./components/contact-content-section"
import { ContactHeroSection } from "./components/contact-hero-section"

export function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHeroSection />
      <ContactContentSection />
    </main>
  )
}
