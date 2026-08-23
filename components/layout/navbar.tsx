"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@/components/icon"
import { RiArrowDownSLine, RiMenuLine, RiCloseLine } from "@remixicon/react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileGovOpen, setMobileGovOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === "/"
  const isAbout = pathname === "/about" || pathname?.startsWith("/about")
  const isGovernment = pathname?.startsWith("/government")
  const isProjects = pathname === "/projects" || pathname?.startsWith("/projects")
  const isServices = pathname === "/services" || pathname?.startsWith("/services")
  const isNewsroom = pathname === "/newsroom" || pathname?.startsWith("/newsroom")

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Icon
            size={46}
            className="transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-heading text-lg leading-none font-extrabold tracking-tight text-[#131313]">
              EGBEDA
            </span>
            <span className="mt-0.5 text-xs font-medium text-[#6A7181]">
              Local government
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 text-sm font-medium text-[#131313] lg:flex">
          <Link
            href="/"
            className={`relative py-1 transition-colors hover:text-[#7A1F33] ${
              isHome
                ? "font-semibold text-[#7A1F33] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#D9A300] after:content-['']"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`relative py-1 transition-colors hover:text-[#7A1F33] ${
              isAbout
                ? "font-semibold text-[#7A1F33] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#D9A300] after:content-['']"
                : ""
            }`}
          >
            About
          </Link>

          {/* Government Dropdown */}
          <div className="group relative cursor-pointer py-1">
            <button
              className={`flex items-center gap-1 transition-colors hover:text-[#7A1F33] ${
                isGovernment
                  ? "font-semibold text-[#7A1F33] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#D9A300] after:content-['']"
                  : ""
              }`}
            >
              <span>Government</span>
              <RiArrowDownSLine
                size={16}
                className="text-gray-500 transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            {/* Styled Government Dropdown Card */}
            <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl border border-gray-100 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 overflow-hidden z-50">
              {/* Burgundy Header Bar */}
              <div className="bg-[#7A1F33] px-5 py-3.5 text-white">
                <span className="font-heading font-bold text-sm tracking-tight">
                  Government
                </span>
              </div>

              {/* Options List */}
              <div className="p-4 space-y-4 text-left">
                {/* 1. Executive Councils and Members */}
                <Link
                  href="/government/executive-council"
                  className="flex items-start gap-3 group/item"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D9A300] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-heading font-extrabold text-sm text-[#131313] group-hover/item:text-[#7A1F33] transition-colors block leading-snug">
                      Executive Councils and Members
                    </span>
                    <span className="text-xs text-[#6A7181] font-sans leading-tight block mt-0.5">
                      Overview of governance structure
                    </span>
                  </div>
                </Link>

                {/* 2. Management Team */}
                <Link
                  href="/government/management-team"
                  className="flex items-start gap-3 group/item"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D9A300] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-heading font-extrabold text-sm text-[#131313] group-hover/item:text-[#7A1F33] transition-colors block leading-snug">
                      Management Team
                    </span>
                    <span className="text-xs text-[#6A7181] font-sans leading-tight block mt-0.5">
                      Head of Admin and Directors
                    </span>
                  </div>
                </Link>

                {/* 3. NULGE Team */}
                <a href="#nulge" className="flex items-start gap-3 group/item">
                  <span className="w-2 h-2 rounded-full bg-[#D9A300] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-heading font-extrabold text-sm text-[#131313] group-hover/item:text-[#7A1F33] transition-colors block leading-snug">
                      NULGE Team
                    </span>
                    <span className="text-xs text-[#6A7181] font-sans leading-tight block mt-0.5">
                      Local Government Workers Union
                    </span>
                  </div>
                </a>

                {/* 4. Landmark and Culture */}
                <Link
                  href="/government/landmarks-and-culture"
                  className="flex items-start gap-3 group/item"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D9A300] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-heading font-extrabold text-sm text-[#131313] group-hover/item:text-[#7A1F33] transition-colors block leading-snug">
                      Landmark and Culture
                    </span>
                    <span className="text-xs text-[#6A7181] font-sans leading-tight block mt-0.5">
                      Local Government Workers Union
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/projects"
            className={`relative py-1 transition-colors hover:text-[#7A1F33] ${
              isProjects
                ? "font-semibold text-[#7A1F33] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#D9A300] after:content-['']"
                : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/services"
            className={`relative py-1 transition-colors hover:text-[#7A1F33] ${
              isServices
                ? "font-semibold text-[#7A1F33] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#D9A300] after:content-['']"
                : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/newsroom"
            className={`relative py-1 transition-colors hover:text-[#7A1F33] ${
              isNewsroom
                ? "font-semibold text-[#7A1F33] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#D9A300] after:content-['']"
                : ""
            }`}
          >
            Newsroom
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#7A1F33] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#621727]"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="p-1.5 text-[#131313] focus:outline-none lg:hidden"
        >
          {mobileMenuOpen ? (
            <RiCloseLine size={24} />
          ) : (
            <RiMenuLine size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="space-y-3 border-t border-gray-100 bg-white px-4 py-4 text-sm font-medium text-[#131313] lg:hidden">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-1 ${isHome ? "font-bold text-[#7A1F33]" : "hover:text-[#7A1F33]"}`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-1 ${isAbout ? "font-bold text-[#7A1F33]" : "hover:text-[#7A1F33]"}`}
          >
            About
          </Link>

          {/* Mobile Government Accordion */}
          <div>
            <button
              onClick={() => setMobileGovOpen(!mobileGovOpen)}
              className={`flex w-full items-center justify-between py-1 transition-colors ${
                isGovernment ? "font-bold text-[#7A1F33]" : "hover:text-[#7A1F33]"
              }`}
            >
              <span>Government</span>
              <RiArrowDownSLine
                size={18}
                className={`transition-transform duration-200 ${mobileGovOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileGovOpen && (
              <div className="mt-2 ml-2 space-y-3 border-l-2 border-[#7A1F33]/20 pl-4 py-2 bg-[#FAF8F9] rounded-r-xl">
                <Link
                  href="/government/executive-council"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-start gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A300] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-heading font-bold text-xs text-[#131313] block">
                      Executive Councils and Members
                    </span>
                    <span className="text-[11px] text-[#6A7181] block">
                      Overview of governance structure
                    </span>
                  </div>
                </Link>

                <Link
                  href="/government/management-team"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-start gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A300] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-heading font-bold text-xs text-[#131313] block">
                      Management Team
                    </span>
                    <span className="text-[11px] text-[#6A7181] block">
                      Head of Admin and Directors
                    </span>
                  </div>
                </Link>

                <a
                  href="#nulge"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-start gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A300] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-heading font-bold text-xs text-[#131313] block">
                      NULGE Team
                    </span>
                    <span className="text-[11px] text-[#6A7181] block">
                      Local Government Workers Union
                    </span>
                  </div>
                </a>

                <Link
                  href="/government/landmarks-and-culture"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-start gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A300] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-heading font-bold text-xs text-[#131313] block">
                      Landmark and Culture
                    </span>
                    <span className="text-[11px] text-[#6A7181] block">
                      Local Government Workers Union
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-1 ${isProjects ? "font-bold text-[#7A1F33]" : "hover:text-[#7A1F33]"}`}
          >
            Projects
          </Link>

          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-1 ${isServices ? "font-bold text-[#7A1F33]" : "hover:text-[#7A1F33]"}`}
          >
            Services
          </Link>

          <Link
            href="/newsroom"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-1 ${isNewsroom ? "font-bold text-[#7A1F33]" : "hover:text-[#7A1F33]"}`}
          >
            Newsroom
          </Link>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg bg-[#7A1F33] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-xs"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
