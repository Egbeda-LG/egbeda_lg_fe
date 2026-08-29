import React from "react"
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTiktokFill,
  RiTwitterXFill,
  type RemixiconComponentType,
} from "@remixicon/react"

import type { SocialMediaLink } from "@/lib/api"

const PLATFORM_ICONS: Record<
  string,
  { Icon: RemixiconComponentType; label: string }
> = {
  facebook: { Icon: RiFacebookFill, label: "Facebook" },
  twitter: { Icon: RiTwitterXFill, label: "Twitter X" },
  instagram: { Icon: RiInstagramLine, label: "Instagram" },
  tiktok: { Icon: RiTiktokFill, label: "TikTok" },
}

interface SocialLinksProps {
  links?: SocialMediaLink[]
  size?: number
  className?: string
}

/**
 * Renders whichever social accounts the council has actually recorded for a
 * person or for the organisation — an unknown platform is skipped rather than
 * shown without an icon.
 */
export function SocialLinks({
  links,
  size = 12,
  className = "",
}: SocialLinksProps) {
  const known = (links ?? []).filter(
    (link) => link.url && PLATFORM_ICONS[link.platform?.toLowerCase()]
  )

  if (known.length === 0) return null

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {known.map((link) => {
        const { Icon, label } = PLATFORM_ICONS[link.platform.toLowerCase()]

        return (
          <a
            key={`${link.platform}-${link.url}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF7E6] text-[#D9A300] transition-colors hover:bg-[#D9A300] hover:text-white"
          >
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}
