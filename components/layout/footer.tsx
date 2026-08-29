import React from "react"
import Link from "next/link"
import { Icon } from "@/components/icon"
import {
  RiFacebookFill,
  RiInstagramLine,
  RiMailLine,
  RiMapPinLine,
  RiTiktokFill,
  RiTimeLine,
  RiTwitterXFill,
  type RemixiconComponentType,
} from "@remixicon/react"

import { organizationSettingsApi, withFallback } from "@/lib/api"

const SOCIAL_ICONS: Record<
  string,
  { Icon: RemixiconComponentType; label: string }
> = {
  facebook: { Icon: RiFacebookFill, label: "Facebook" },
  twitter: { Icon: RiTwitterXFill, label: "Twitter X" },
  instagram: { Icon: RiInstagramLine, label: "Instagram" },
  tiktok: { Icon: RiTiktokFill, label: "TikTok" },
}

const footerColumns = [
  {
    heading: "QUICK LINKS",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Government", href: "/government/executive-council" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "News & Media", href: "/newsroom" },
    ],
  },
  {
    heading: "GOVERNMENT",
    links: [
      { label: "Executive Council", href: "/government/executive-council" },
      { label: "Management Team", href: "/government/management-team" },
      { label: "NULGE Team", href: "/government/nulge" },
      {
        label: "Landmark & Culture",
        href: "/government/landmarks-and-culture",
      },
    ],
  },
  {
    heading: "SUPPORT",
    links: [
      { label: "Contact Us", href: "/contact" },
      // These three pages are not built yet.
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Accessibility", href: "#accessibility" },
      { label: "Cookies Policy", href: "#cookies" },
    ],
  },
]

export async function Footer() {
  const settings = await withFallback(
    () => organizationSettingsApi.get(),
    {},
    "organization settings"
  )

  const organization = settings.organization
  const contact = settings.contact_and_support

  const councilName = organization?.official_name ?? "Egbeda Local Government"
  const address =
    contact?.headquater_address ??
    "Egbeda Local Government Secretariat, Egbeda, Ibadan, Oyo State"
  const email = contact?.official_email ?? "egbedalocalgovernment@gmail.com"
  const officeHours =
    [contact?.weekdays, contact?.hours].filter(Boolean).join(", ") ||
    "Monday — Friday, 8am - 4pm"

  const socials = (settings.social_media ?? []).filter(
    (link) => link.url && SOCIAL_ICONS[link.platform?.toLowerCase()]
  )

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#7A1F33] pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Top Footer 4-Column Links Layout */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 lg:grid-cols-12 lg:gap-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 lg:col-span-4">
            <Link href="/" className="group flex items-center gap-3">
              <Icon
                size={44}
                className="transition-transform group-hover:scale-105"
              />
              <span className="font-heading text-lg font-extrabold tracking-tight text-white sm:text-xl">
                {councilName}
              </span>
            </Link>

            <p className="max-w-md font-sans text-xs leading-relaxed text-white/80 sm:text-sm">
              The official website of Egbeda Local Government, Oyo State —
              committed to transparent, accessible, and people-first governance.
            </p>

            {/* Social Icons */}
            {socials.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {socials.map((link) => {
                  const { Icon: SocialIcon, label } =
                    SOCIAL_ICONS[link.platform.toLowerCase()]

                  return (
                    <a
                      key={`${link.platform}-${link.url}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9A300] hover:text-[#131313]"
                    >
                      <SocialIcon size={16} />
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* 3 Equal Width Link Columns Subgrid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerColumns.map((column) => (
              <div key={column.heading} className="space-y-4">
                <h3 className="font-heading text-xs font-bold tracking-widest text-white uppercase">
                  {column.heading}
                </h3>
                <ul className="space-y-2.5 font-sans text-xs text-white/80 sm:text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-[#D9A300]"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="transition-colors hover:text-[#D9A300]"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Footer 3 Contact Highlights */}
        <div className="grid grid-cols-1 gap-6 border-b border-white/10 py-8 md:grid-cols-3">
          {/* Main Office */}
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <RiMapPinLine size={20} className="text-[#D9A300]" />
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-wider text-white/60 uppercase">
                MAIN OFFICE
              </span>
              <p className="mt-0.5 text-xs leading-snug font-semibold text-white">
                {address}
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <RiTimeLine size={20} className="text-[#D9A300]" />
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-wider text-white/60 uppercase">
                OFFICE HOUR
              </span>
              <p className="mt-0.5 text-xs leading-snug font-semibold text-white">
                {officeHours}
              </p>
              <span className="block text-[10px] text-white/50">
                We are available
              </span>
            </div>
          </div>

          {/* Email Support */}
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <RiMailLine size={20} className="text-[#D9A300]" />
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-wider text-white/60 uppercase">
                EMAIL SUPPORT
              </span>
              <a
                href={`mailto:${contact?.support_email ?? email}`}
                className="mt-0.5 block text-xs leading-snug font-semibold text-white transition-colors hover:text-[#D9A300]"
              >
                {contact?.support_email ?? email}
              </a>
              <span className="block text-[10px] text-white/50">
                We usually respond within 24hrs
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 text-center font-sans text-xs text-white/60 md:text-left">
          <p>
            © {new Date().getFullYear()} {councilName}
            {organization?.state ? `, ${organization.state} State` : ""}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
