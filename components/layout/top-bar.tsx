import React from "react"
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

export async function TopBar() {
  const settings = await withFallback(
    () => organizationSettingsApi.get(),
    {},
    "organization settings"
  )

  const contact = settings.contact_and_support
  const address =
    contact?.headquater_address ?? "Egbeda local government secretariat"
  const email = contact?.official_email ?? "egbedalocalgovernment@gmail.com"
  const officeHours =
    [contact?.weekdays, contact?.hours].filter(Boolean).join(": ") ||
    "Mon - Fri: 8:00 AM - 4:00 PM"

  const socials = (settings.social_media ?? []).filter(
    (link) => link.url && SOCIAL_ICONS[link.platform?.toLowerCase()]
  )

  return (
    <div className="bg-[#7A1F33] px-4 py-2 text-xs text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row">
        {/* Left Info */}
        <div className="flex flex-wrap items-center gap-4 text-white/90 md:gap-6">
          <div className="flex items-center gap-1.5">
            <RiMapPinLine size={14} className="text-[#D9A300]" />
            <span className="max-w-[22rem] truncate">{address}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RiMailLine size={14} className="text-[#D9A300]" />
            <a
              href={`mailto:${email}`}
              className="transition-all hover:underline"
            >
              {email}
            </a>
          </div>
        </div>

        {/* Right Info & Socials */}
        <div className="flex items-center gap-6 text-white/90">
          <div className="flex items-center gap-1.5">
            <RiTimeLine size={14} className="text-[#D9A300]" />
            <span>{officeHours}</span>
          </div>
          {socials.length > 0 && (
            <div className="flex items-center gap-3">
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
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    <SocialIcon size={14} />
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
