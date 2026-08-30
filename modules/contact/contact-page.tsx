import { ContactContentSection } from "./components/contact-content-section"
import { ContactHeroSection } from "./components/contact-hero-section"
import { FadeIn } from "@/components/fade-in"
import { organizationSettingsApi, withFallback } from "@/lib/api"
import { uploadsEnabled } from "@/modules/contact/contact.actions"

export async function ContactPage() {
  const [settings, attachmentsEnabled] = await Promise.all([
    withFallback(
      () => organizationSettingsApi.get(),
      {},
      "organization settings"
    ),
    uploadsEnabled(),
  ])

  return (
    <main className="min-h-screen">
      <FadeIn>
        <ContactHeroSection />
      </FadeIn>
      <FadeIn>
        <ContactContentSection
          contact={settings.contact_and_support}
          attachmentsEnabled={attachmentsEnabled}
        />
      </FadeIn>
    </main>
  )
}
