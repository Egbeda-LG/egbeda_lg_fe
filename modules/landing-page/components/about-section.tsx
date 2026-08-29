import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

import { organizationSettingsApi, withFallback } from "@/lib/api"
import { excerpt, placementImage } from "@/lib/content"
import {
  MissionIcon,
  VisionIcon,
  CoreValuesIcon,
} from "@/components/about-icons"

export async function AboutSection() {
  const settings = await withFallback(
    () => organizationSettingsApi.get(),
    {},
    "organization settings"
  )

  const organization = settings.organization

  /*
   * Second homepage image from organisation settings: the chairman section
   * below already claims the first, so this keeps the two blocks distinct.
   */
  const photo =
    placementImage(settings.chairman_info?.images, "homepage", 1) ??
    "/images/about-us.png"

  const established = organization?.year_of_establishment
  const yearsServing = established
    ? String(new Date().getFullYear() - established)
    : "30+"

  const summary =
    excerpt(settings.organization?.about, 220) ||
    "Egbeda Local Government Development Area serves a diverse and fast-growing population, balancing rapid urban growth."

  return (
    <section id="about" className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Content Column */}
          <div className="space-y-6 lg:col-span-6">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                ABOUT US
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
              A council rooted in people, driven by progress.
            </h2>

            {/* Subtext */}
            <p className="font-sans text-base leading-relaxed text-[#6A7181]">
              {summary}
            </p>

            {/* Feature Items List */}
            <div className="space-y-6 pt-2">
              {/* Mission */}
              <div className="group flex items-start gap-4">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#7A1F33]/10 bg-[#FAF0E6] text-[#7A1F33] shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:bg-[#7A1F33] group-hover:text-[#FAF0E6]">
                  <MissionIcon
                    size={22}
                    className="transition-colors duration-200"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#131313]">
                    Our Mission
                  </h3>
                  <p className="mt-1 text-xs leading-normal text-[#6A7181] sm:text-sm">
                    To deliver transparent, efficient, and people-centred
                    governance that improves quality of life for every resident
                    of Egbeda.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group flex items-start gap-4">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#7A1F33]/10 bg-[#FAF0E6] text-[#7A1F33] shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:bg-[#7A1F33] group-hover:text-[#FAF0E6]">
                  <VisionIcon
                    size={22}
                    className="transition-colors duration-200"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#131313]">
                    Our Vision
                  </h3>
                  <p className="mt-1 text-xs leading-normal text-[#6A7181] sm:text-sm">
                    A well-planned, prosperous, and secure Egbeda recognised as
                    a model local government area in Oyo State.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="group flex items-start gap-4">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#7A1F33]/10 bg-[#FAF0E6] text-[#7A1F33] shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:bg-[#7A1F33] group-hover:text-[#FAF0E6]">
                  <CoreValuesIcon
                    size={22}
                    className="transition-colors duration-200"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#131313]">
                    Core Values
                  </h3>
                  <p className="mt-1 text-xs leading-normal text-[#6A7181] sm:text-sm">
                    Integrity, accountability, inclusiveness, and service — the
                    standards that guide every decision we make.
                  </p>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-[#7A1F33] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#621727]"
              >
                <span>Read More</span>
                <RiArrowRightLine size={18} />
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-xl">
                <Image
                  src={photo}
                  alt={`${organization?.official_name ?? "Egbeda Local Government"} leadership and community`}
                  width={600}
                  height={650}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-103"
                  priority
                />
              </div>

              {/* Floating 30+ Years Card */}
              <div className="absolute bottom-6 left-6 flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-md">
                <span className="shrink-0 font-heading text-2xl font-extrabold text-[#7A1F33] sm:text-3xl">
                  {yearsServing}
                </span>
                <div className="text-xs leading-snug font-medium whitespace-nowrap text-[#6A7181] sm:text-sm">
                  <div>Years serving</div>
                  <div>the {organization?.lg_name ?? "Egbeda"} community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
