"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@/components/icon"
import { RiArrowDownSLine, RiMenuLine, RiCloseLine } from "@remixicon/react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileGovOpen, setMobileGovOpen] = useState(false)
  const [govOpen, setGovOpen] = useState(false)
  const govMenuRef = useRef<HTMLDivElement>(null)
  const govHoverRef = useRef(false)
  const pathname = usePathname()

  // Escape, or a click anywhere outside, closes the desktop Government menu.
  useEffect(() => {
    if (!govOpen) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setGovOpen(false)
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (!govMenuRef.current?.contains(event.target as Node)) {
        setGovOpen(false)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [govOpen])

  const isHome = pathname === "/"
  const isAbout = pathname === "/about" || pathname?.startsWith("/about")
  const isGovernment = pathname?.startsWith("/government")
  const isProjects =
    pathname === "/projects" || pathname?.startsWith("/projects")
  const isServices =
    pathname === "/services" || pathname?.startsWith("/services")
  const isNewsroom =
    pathname === "/newsroom" || pathname?.startsWith("/newsroom")

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
          <div
            ref={govMenuRef}
            className="group relative py-1"
            onMouseEnter={() => {
              govHoverRef.current = true
              setGovOpen(true)
            }}
            onMouseLeave={() => {
              govHoverRef.current = false
              setGovOpen(false)
            }}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={govOpen}
              aria-controls="government-menu"
              onClick={() => {
                // A hovering pointer has already opened the menu, so a click
                // must not toggle it straight back shut. Keyboard activation
                // brings no hover with it, so there it still toggles.
                if (govHoverRef.current) {
                  setGovOpen(true)
                  return
                }

                setGovOpen((open) => !open)
              }}
              className={`flex cursor-pointer items-center gap-1 transition-colors hover:text-[#7A1F33] ${
                isGovernment
                  ? "font-semibold text-[#7A1F33] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#D9A300] after:content-['']"
                  : ""
              }`}
            >
              <span>Government</span>
              <RiArrowDownSLine
                size={16}
                className={`text-gray-500 transition-transform duration-200 ${
                  govOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/*
              The gap under the trigger is pt-2 on this positioned wrapper
              rather than mt-2 on the card, so it stays inside the hoverable
              subtree — otherwise the pointer crosses dead space on its way
              down and the menu closes before it can be reached.
            */}
            <div
              className={`absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2 transition-opacity duration-200 ${
                govOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div
                id="government-menu"
                className="w-80 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl"
              >
                {/* Burgundy Header Bar */}
                <div className="bg-[#7A1F33] px-5 py-3.5 text-white">
                  <span className="font-heading text-sm font-bold tracking-tight">
                    Government
                  </span>
                </div>

                {/* Options List */}
                <div className="space-y-4 p-4 text-left">
                  <Link
                    href="/government/executive-council"
                    onClick={() => setGovOpen(false)}
                    className="group/item flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A300]" />
                    <div>
                      <span className="block font-heading text-sm leading-snug font-extrabold text-[#131313] transition-colors group-hover/item:text-[#7A1F33]">
                        Executive Councils and Members
                      </span>
                      <span className="mt-0.5 block font-sans text-xs leading-tight text-[#6A7181]">
                        Overview of governance structure
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/government/management-team"
                    onClick={() => setGovOpen(false)}
                    className="group/item flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A300]" />
                    <div>
                      <span className="block font-heading text-sm leading-snug font-extrabold text-[#131313] transition-colors group-hover/item:text-[#7A1F33]">
                        Management Team
                      </span>
                      <span className="mt-0.5 block font-sans text-xs leading-tight text-[#6A7181]">
                        Head of Admin and Directors
                      </span>
                    </div>
                  </Link>

                  <a
                    href="#nulge"
                    onClick={() => setGovOpen(false)}
                    className="group/item flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A300]" />
                    <div>
                      <span className="block font-heading text-sm leading-snug font-extrabold text-[#131313] transition-colors group-hover/item:text-[#7A1F33]">
                        NULGE Team
                      </span>
                      <span className="mt-0.5 block font-sans text-xs leading-tight text-[#6A7181]">
                        Local Government Workers Union
                      </span>
                    </div>
                  </a>

                  <Link
                    href="/government/landmarks-and-culture"
                    onClick={() => setGovOpen(false)}
                    className="group/item flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A300]" />
                    <div>
                      <span className="block font-heading text-sm leading-snug font-extrabold text-[#131313] transition-colors group-hover/item:text-[#7A1F33]">
                        Landmark and Culture
                      </span>
                      <span className="mt-0.5 block font-sans text-xs leading-tight text-[#6A7181]">
                        Local Government Workers Union
                      </span>
                    </div>
                  </Link>
                </div>
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
                isGovernment
                  ? "font-bold text-[#7A1F33]"
                  : "hover:text-[#7A1F33]"
              }`}
            >
              <span>Government</span>
              <RiArrowDownSLine
                size={18}
                className={`transition-transform duration-200 ${mobileGovOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileGovOpen && (
              <div className="mt-2 ml-2 space-y-3 rounded-r-xl border-l-2 border-[#7A1F33]/20 bg-[#FAF8F9] py-2 pl-4">
                <Link
                  href="/government/executive-council"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-start gap-2"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A300]" />
                  <div>
                    <span className="block font-heading text-xs font-bold text-[#131313]">
                      Executive Councils and Members
                    </span>
                    <span className="block text-[11px] text-[#6A7181]">
                      Overview of governance structure
                    </span>
                  </div>
                </Link>

                <Link
                  href="/government/management-team"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-start gap-2"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A300]" />
                  <div>
                    <span className="block font-heading text-xs font-bold text-[#131313]">
                      Management Team
                    </span>
                    <span className="block text-[11px] text-[#6A7181]">
                      Head of Admin and Directors
                    </span>
                  </div>
                </Link>

                <a
                  href="#nulge"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-start gap-2"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A300]" />
                  <div>
                    <span className="block font-heading text-xs font-bold text-[#131313]">
                      NULGE Team
                    </span>
                    <span className="block text-[11px] text-[#6A7181]">
                      Local Government Workers Union
                    </span>
                  </div>
                </a>

                <Link
                  href="/government/landmarks-and-culture"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-start gap-2"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A300]" />
                  <div>
                    <span className="block font-heading text-xs font-bold text-[#131313]">
                      Landmark and Culture
                    </span>
                    <span className="block text-[11px] text-[#6A7181]">
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
