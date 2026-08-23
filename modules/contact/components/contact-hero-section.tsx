import React from "react"
import Link from "next/link"

export function ContactHeroSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          {/* Left Hero Content */}
          <div className="max-w-2xl space-y-3">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                CONTACT
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl lg:text-5xl">
              Get In Touch
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-sm leading-relaxed text-[#6A7181] sm:text-base">
              Write to the council, book a meeting, or reach an individual
              department. Our citizen service desk responds within 24 hours.
            </p>

            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 pt-2 font-sans text-xs font-medium text-[#6A7181]">
              <Link href="/" className="transition-colors hover:text-[#7A1F33]">
                Home
              </Link>
              <span>/</span>
              <a
                href="#government"
                className="transition-colors hover:text-[#7A1F33]"
              >
                Government
              </a>
              <span>/</span>
              <span className="font-bold text-[#D9A300]">
                Legislative Members
              </span>
            </div>
          </div>

          {/* Right Meta Tag */}
          <div className="shrink-0 pb-1 text-left md:text-right">
            <span className="mb-1 block text-[11px] font-extrabold tracking-widest text-[#6A7181] uppercase">
              EGBEDA LG
            </span>
            <div className="relative inline-block pb-1">
              <span className="font-heading text-sm font-bold text-[#131313] sm:text-base">
                Oyo State, Nigeria
              </span>
              <div className="absolute bottom-0 left-0 h-0.5 w-16 bg-[#D9A300] md:right-0 md:left-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
