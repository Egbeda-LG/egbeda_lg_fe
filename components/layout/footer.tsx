import React from "react"
import Link from "next/link"
import { Icon } from "@/components/icon"
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiYoutubeFill,
  RiMapPinLine,
  RiTimeLine,
  RiMailLine,
} from "@remixicon/react"

export function Footer() {
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
                Egbeda Local Government
              </span>
            </Link>

            <p className="max-w-md font-sans text-xs leading-relaxed text-white/80 sm:text-sm">
              The official website of Egbeda Local Government, Oyo State —
              committed to transparent, accessible, and people-first governance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9A300] hover:text-[#131313]"
              >
                <RiFacebookFill size={16} />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9A300] hover:text-[#131313]"
              >
                <RiTwitterXFill size={16} />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9A300] hover:text-[#131313]"
              >
                <RiInstagramLine size={16} />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9A300] hover:text-[#131313]"
              >
                <RiYoutubeFill size={16} />
              </a>
            </div>
          </div>

          {/* 3 Equal Width Link Columns Subgrid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:col-span-8">
            {/* Col 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="font-heading text-xs font-bold tracking-widest text-white uppercase">
                QUICK LINKS
              </h3>
              <ul className="space-y-2.5 font-sans text-xs text-white/80 sm:text-sm">
                <li>
                  <a
                    href="#about"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#government"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    Government
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#newsroom"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    News & Media
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Government */}
            <div className="space-y-4">
              <h3 className="font-heading text-xs font-bold tracking-widest text-white uppercase">
                GOVERNMENT
              </h3>
              <ul className="space-y-2.5 font-sans text-xs text-white/80 sm:text-sm">
                <li>
                  <a
                    href="#executive"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    Executive Council
                  </a>
                </li>
                <li>
                  <a
                    href="#management"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    Management Team
                  </a>
                </li>
                <li>
                  <a
                    href="#nulge"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    NULGE Team
                  </a>
                </li>
                <li>
                  <a
                    href="#culture"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    Landmark & Culture
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Support */}
            <div className="space-y-4">
              <h3 className="font-heading text-xs font-bold tracking-widest text-white uppercase">
                SUPPORT
              </h3>
              <ul className="space-y-2.5 font-sans text-xs text-white/80 sm:text-sm">
                <li>
                  <a
                    href="#contact"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#accessibility"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    Accessibility
                  </a>
                </li>
                <li>
                  <a
                    href="#cookies"
                    className="transition-colors hover:text-[#D9A300]"
                  >
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
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
                Egbeda Local Government Secretariat, Egbeda, Ibadan, Oyo State
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
                Monday — Friday, 8am - 4pm
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
                href="mailto:egbedalocalgovernment@gmail.com"
                className="mt-0.5 block text-xs leading-snug font-semibold text-white transition-colors hover:text-[#D9A300]"
              >
                egbedalocalgovernment@gmail.com
              </a>
              <span className="block text-[10px] text-white/50">
                We usually respond within 24hrs
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 text-center font-sans text-xs text-white/60 md:text-left">
          <p>© 2026 Egbeda Local Government, Oyo State. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
