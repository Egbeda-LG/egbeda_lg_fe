import { ContactContentSection } from "./components/contact-content-section"
import { ContactHeroSection } from "./components/contact-hero-section"
import { FadeIn } from "@/components/fade-in"
import { organizationSettingsApi, withFallback } from "@/lib/api"

export async function ContactPage() {
  const settings = await withFallback(
    () => organizationSettingsApi.get(),
    {},
    "organization settings"
  )

  return (
    <main className="min-h-screen">
      <FadeIn>
        <ContactHeroSection />
      </FadeIn>
      <FadeIn>
        <ContactContentSection contact={settings.contact_and_support} />
      </FadeIn>
    </main>
  )
}
