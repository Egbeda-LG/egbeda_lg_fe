import React from "react"
import {
  RiMapPinLine,
  RiMailLine,
  RiTimeLine,
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiYoutubeFill,
} from "@remixicon/react"

export function TopBar() {
  return (
    <div className="bg-[#7A1F33] px-4 py-2 text-xs text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row">
        {/* Left Info */}
        <div className="flex flex-wrap items-center gap-4 text-white/90 md:gap-6">
          <div className="flex items-center gap-1.5">
            <RiMapPinLine size={14} className="text-[#D9A300]" />
            <span>Egbeda local government secretariat</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RiMailLine size={14} className="text-[#D9A300]" />
            <a
              href="mailto:egbedalocalgovernment@gmail.com"
              className="transition-all hover:underline"
            >
              egbedalocalgovernment@gmail.com
            </a>
          </div>
        </div>

        {/* Right Info & Socials */}
        <div className="flex items-center gap-6 text-white/90">
          <div className="flex items-center gap-1.5">
            <RiTimeLine size={14} className="text-[#D9A300]" />
            <span>Mon - Fri: 8:00 AM - 4:00 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="transition-colors hover:text-[#D9A300]"
            >
              <RiFacebookFill size={14} />
            </a>
            <a
              href="#twitter"
              aria-label="Twitter X"
              className="transition-colors hover:text-[#D9A300]"
            >
              <RiTwitterXFill size={14} />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="transition-colors hover:text-[#D9A300]"
            >
              <RiInstagramLine size={14} />
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="transition-colors hover:text-[#D9A300]"
            >
              <RiYoutubeFill size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
