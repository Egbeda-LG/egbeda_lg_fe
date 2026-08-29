import React from "react"
import Image from "next/image"

import { SocialLinks } from "@/components/social-links"
import { organizationSettingsApi, withFallback } from "@/lib/api"
import { formatNumber, placementImage } from "@/lib/content"

export async function AboutChairmanSection() {
  const settings = await withFallback(
    () => organizationSettingsApi.get(),
    {},
    "organization settings"
  )

  const chairman = settings.chairman_info
  const photo =
    placementImage(chairman?.images, "about") ??
    "/images/about-chairman-mic.jpg"

  const metrics = [
    { value: chairman?.years_in_service, label: "YEARS IN OFFICE" },
    { value: chairman?.projects_delivered, label: "PROJECTS DELIVERED" },
    { value: chairman?.town_halls_hosted, label: "TOWN HALLS HOSTED" },
  ].filter((metric) => typeof metric.value === "number")

  /* The biography is a single free-text field; blank lines become paragraphs. */
  const paragraphs = (chairman?.biography ?? "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <section className="border-b border-gray-100 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Chairman Photograph */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-xl lg:max-w-none">
              <Image
                src={photo}
                alt={`${chairman?.official_name ?? "The Executive Chairman"} — Executive Chairman, Egbeda Local Government`}
                width={675}
                height={906}
                className="h-auto max-h-[560px] w-full object-cover transition-transform duration-500 hover:scale-102"
                priority
              />
            </div>
          </div>

          {/* Right Column: Bio & Track Record Metrics */}
          <div className="space-y-6 lg:col-span-7">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                EXECUTIVE CHAIRMAN
              </span>
            </div>

            {/* Name & Title Subhead */}
            <div>
              <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
                {chairman?.official_name ?? "Executive Chairman"}
              </h2>
              <span className="mt-1 block font-heading text-xs font-bold text-[#7A1F33] sm:text-sm">
                Executive Chairman ·{" "}
                {settings.organization?.official_name ??
                  "Egbeda Local Government"}
              </span>
            </div>

            {/* Bio Paragraphs */}
            {paragraphs.length > 0 && (
              <div className="space-y-4 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            <SocialLinks links={chairman?.social_media} />

            {/* Track Record Metric Cards */}
            {metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3 pt-4 sm:gap-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-gray-100/90 bg-[#FAF8F9] p-4 text-left shadow-2xs sm:p-5"
                  >
                    <div className="font-heading text-xl font-extrabold tracking-tight text-[#131313] sm:text-2xl">
                      {formatNumber(metric.value)}
                    </div>
                    <div className="mt-1 text-[10px] font-extrabold tracking-wider text-[#6A7181] uppercase">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
