import React from "react"
import { RiArrowRightLine } from "@remixicon/react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[580px] items-center justify-start overflow-hidden bg-gray-900 lg:min-h-[660px]">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url('/hero-bg.jpg')` }}
      />

      {/* Gradient Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl space-y-6">
          {/* Badge */}
          <div>
            <span className="inline-block rounded-full border border-[#D9A300]/50 bg-[#D9A300]/25 px-4 py-1.5 text-xs font-bold tracking-widest text-[#D9A300] uppercase shadow-sm backdrop-blur-xs">
              OFFICIAL WEBSITE OF EGBEDA LG
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building a Greater <span className="text-[#D9A300]">Egbeda</span>{" "}
            <br className="hidden sm:inline" />
            Through Service and Integrity
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl font-sans text-base leading-relaxed text-gray-200 sm:text-lg">
            A modern, transparent local government committed to excellent
            service delivery, sustainable development, and the wellbeing of
            every resident of our vibrant community.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D9A300] px-6 py-3.5 text-sm font-bold text-[#131313] shadow-md transition-all duration-200 hover:translate-x-0.5 hover:bg-[#c29200]"
            >
              <span>Get in Touch</span>
              <RiArrowRightLine size={18} />
            </a>

            <a
              href="#newsroom"
              className="inline-block rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[#131313] shadow-md transition-all duration-200 hover:bg-gray-100"
            >
              Latest News
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
