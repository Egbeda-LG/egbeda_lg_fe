import React from "react"
import Image from "next/image"
import { RiDoubleQuotesL } from "@remixicon/react"

import { SocialLinks } from "@/components/social-links"
import { organizationSettingsApi, withFallback } from "@/lib/api"
import { placementImage } from "@/lib/content"

export async function ChairmanSection() {
  const settings = await withFallback(
    () => organizationSettingsApi.get(),
    {},
    "organization settings"
  )

  const chairman = settings.chairman_info
  const photo =
    placementImage(chairman?.images, "lower_home") ??
    "/images/executive-chairman.png"

  /* The chairman's address to residents; blank lines become paragraphs. */
  const paragraphs = (chairman?.message ?? "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <section
      id="chairman"
      className="relative overflow-hidden bg-[#7A1F33] py-16 text-white md:py-24"
    >
      {/* Subtle Background Glow/Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#D9A300_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Circular Portrait Seal */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              <Image
                src={photo}
                alt={`${chairman?.official_name ?? "The Executive Chairman"} — Executive Chairman, Egbeda Local Government`}
                width={445}
                height={449}
                className="h-auto w-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-102"
                priority
              />
            </div>
          </div>

          {/* Right Column: Message & Details */}
          <div className="space-y-6 lg:col-span-7">
            {/* Quote Icon */}
            <div>
              <RiDoubleQuotesL size={48} className="text-[#D9A300]" />
            </div>

            {/* Subhead / Label */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#D9A300] uppercase">
              <span>— EXECUTIVE CHAIRMAN&apos;S MESSAGE</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A Personal Commitment to Every Resident
            </h2>

            {/* Paragraphs */}
            {paragraphs.length > 0 && (
              <div className="space-y-4 font-sans text-sm leading-relaxed text-white/85 sm:text-base">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* Author Signature Block */}
            <div className="border-t border-white/10 pt-4">
              <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                {chairman?.official_name ?? "Executive Chairman"}
              </h3>
              <p className="mt-0.5 font-sans text-xs text-white/70 sm:text-sm">
                Executive Chairman,{" "}
                {settings.organization?.official_name ??
                  "Egbeda Local Government"}
              </p>
              <SocialLinks links={chairman?.social_media} className="pt-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
