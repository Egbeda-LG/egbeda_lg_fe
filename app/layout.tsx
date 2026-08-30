import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { TopBar } from "@/components/layout/top-bar"
import { ReactotronProvider } from "@/components/reactotron-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { organizationSettingsApi, withFallback } from "@/lib/api"
import {
  DEFAULT_OG_IMAGE,
  JsonLd,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo"
import "./globals.css"

const DEFAULT_TITLE = `${SITE_NAME} | Official Website, Oyo State`
const DEFAULT_DESCRIPTION =
  "The official website of Egbeda Local Government, Oyo State — citizen services, development projects, council news, and the officials serving all eleven wards."

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    // Pages set a full title of their own; this catches any that only set a name.
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  publisher: SITE_NAME,
  keywords: [
    "Egbeda Local Government",
    "Egbeda LG Oyo State",
    "Egbeda local government area",
    "Oyo State local government",
    "citizen services Egbeda",
    "Egbeda council news",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_NG",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/svgs/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/svgs/logo.svg",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await withFallback(
    () => organizationSettingsApi.get(),
    {},
    "organization settings"
  )

  const organization = settings.organization
  const contact = settings.contact_and_support

  /*
   * Identifies the council to search engines as a real government body, using
   * the same contact details the site renders.
   */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: organization?.official_name ?? SITE_NAME,
    alternateName: organization?.lg_name ?? "Egbeda LG",
    url: SITE_URL,
    logo: absoluteUrl("/images/egbeda_logo.png"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description: organization?.about ?? DEFAULT_DESCRIPTION,
    ...(organization?.year_of_establishment
      ? { foundingDate: String(organization.year_of_establishment) }
      : {}),
    ...(contact?.official_email ? { email: contact.official_email } : {}),
    ...(contact?.emergency_line_1
      ? { telephone: contact.emergency_line_1 }
      : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress:
        contact?.headquater_address ?? "Egbeda Local Government Secretariat",
      addressLocality: organization?.lg_name ?? "Egbeda",
      addressRegion: organization?.state ?? "Oyo",
      addressCountry: "NG",
    },
    ...(contact?.latitude && contact?.longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: contact.latitude,
            longitude: contact.longitude,
          },
        }
      : {}),
    ...(contact?.weekdays && contact?.hours
      ? { openingHours: `${contact.weekdays} ${contact.hours}` }
      : {}),
    ...(settings.social_media?.length
      ? { sameAs: settings.social_media.map((link) => link.url) }
      : {}),
  }

  return (
    <html lang="en-NG" suppressHydrationWarning>
      <body className="bg-background font-sans text-[#6A7181] antialiased">
        <JsonLd data={organizationSchema} />
        <ReactotronProvider />
        <ThemeProvider>
          <TopBar />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
