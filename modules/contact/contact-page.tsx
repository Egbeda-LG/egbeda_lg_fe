import { ContactContentSection } from "./components/contact-content-section"
import { ContactHeroSection } from "./components/contact-hero-section"
import { FadeIn } from "@/components/fade-in"
import { organizationSettingsApi, withFallback } from "@/lib/api"
import { uploadsEnabled } from "@/modules/contact/contact.actions"
import {
  ATTACHMENT_CONTENT_TYPES,
  ATTACHMENT_MAX_BYTES,
} from "@/modules/contact/contact.constants"

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
          attachmentContentTypes={ATTACHMENT_CONTENT_TYPES}
          attachmentMaxBytes={ATTACHMENT_MAX_BYTES}
        />
      </FadeIn>
    </main>
  )
}
