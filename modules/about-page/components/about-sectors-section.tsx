import React from "react"
import {
  RiBuilding2Line,
  RiBuilding3Line,
  RiBankLine,
  RiPlantLine,
  RiStore2Line,
  RiRouteLine,
  RiGraduationCapLine,
  RiHeartPulseLine,
} from "@remixicon/react"

import { organizationSettingsApi, withFallback } from "@/lib/api"
import { formatNumber } from "@/lib/content"

export async function AboutSectorsSection() {
  const settings = await withFallback(
    () => organizationSettingsApi.get(),
    {},
    "organization settings"
  )
  const primarySchools = settings.organization?.no_of_pry_schools ?? 130
  const secondarySchools = settings.organization?.no_of_sec_schools ?? 93
  const publicSchools = settings.organization?.no_of_schools ?? 39637
  const healthCentres = settings.organization?.no_of_health_centres ?? 57

  const upperSectors = [
    {
      icon: RiBuilding2Line,
      title: "Housing",
      description:
        "Shelter varies with density — highly dense core areas with older stock, and moderately dense, well-planned residential estates offering good quality housing.",
    },
    {
      icon: RiBuilding3Line,
      title: "Industry & Commerce",
      description:
        "Home to Nigerian Breweries Plc, BODE Foam, Coca-Cola Bottling Company and a growing industrial cluster around Ajoda New Town.",
    },
    {
      icon: RiBankLine,
      title: "Culture & Tourism",
      description:
        "Oke 'Badan (May) and Egungun (June) festivals anchor the cultural calendar. Attractions include Asejire Dam, Ajoda New Town, IYY Youth Village, Buso Rock Hotel and Segelu Hotel.",
    },
    {
      icon: RiPlantLine,
      title: "Agriculture",
      description:
        "Rich fertile land underpins production of oil palm, cassava, plantain, yam and cocoa — supported by Oyo State ADP, Ideal Fish Farm and Premier Oil.",
    },
    {
      icon: RiStore2Line,
      title: "Social Infrastructure",
      description:
        "The multi-million New Gbagi Shopping Complex has transformed commerce, complementing the LG-owned Idi-Iroko market and the planned permanent secretariat.",
    },
    {
      icon: RiRouteLine,
      title: "Road & Transportation",
      description:
        "Since DFRRI (1986), roads have been widened and rebuilt — 51 km of roads, 13 box culverts, 12 ring culverts and 2 bridges delivered across the LGA.",
    },
  ]

  return (
    <section
      id="economy"
      className="border-b border-gray-100 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                LAND USE & ECONOMY
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
              The sectors that shape Egbeda.
            </h2>
          </div>

          {/* Right Subtitle */}
          <div className="max-w-xs text-left md:max-w-sm md:text-right">
            <p className="font-sans text-xs leading-relaxed text-[#6A7181]">
              From industry and agriculture to culture and infrastructure — a
              snapshot of how the Local Government area lives and works.
            </p>
          </div>
        </div>

        {/* Upper 3x2 Grid of Sector Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upperSectors.map((sector, index) => {
            const IconComponent = sector.icon
            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A1F33] text-white shadow-xs transition-transform group-hover:scale-105">
                    <IconComponent size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 font-heading text-base leading-snug font-bold text-[#131313] sm:text-lg">
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                    {sector.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Lower 2 Feature Cards: Education & Health */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1: Education */}
          <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-[#7A1F331A] bg-[#FAF4F5] p-6 sm:p-8">
            <div>
              {/* Icon & Title */}
              <div className="mb-4 flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-2xs">
                  <RiGraduationCapLine size={20} className="text-[#7A1F33]" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-[#131313]">
                  Education
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                The LGA is served by{" "}
                <strong className="text-[#131313]">
                  {formatNumber(primarySchools)} primary schools
                </strong>{" "}
                and{" "}
                <strong className="text-[#131313]">
                  {formatNumber(secondarySchools)} secondary schools
                </strong>
                . Public primary enrolment reached 29,374 (pupil-teacher ratio
                27), while public secondary enrolment stood at 10,263
                (student-teacher ratio 34).
              </p>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl border border-gray-100/80 bg-white p-3.5 text-left shadow-2xs">
                <div className="font-heading text-base font-extrabold text-[#131313] sm:text-lg">
                  {formatNumber(primarySchools)}
                </div>
                <div className="mt-0.5 text-[9px] font-extrabold tracking-wider text-[#6A7181] uppercase">
                  PRIMARY SCHOOLS
                </div>
              </div>

              <div className="rounded-xl border border-gray-100/80 bg-white p-3.5 text-left shadow-2xs">
                <div className="font-heading text-base font-extrabold text-[#131313] sm:text-lg">
                  {formatNumber(secondarySchools)}
                </div>
                <div className="mt-0.5 text-[9px] font-extrabold tracking-wider text-[#6A7181] uppercase">
                  SECONDARY SCHOOLS
                </div>
              </div>

              <div className="rounded-xl border border-gray-100/80 bg-white p-3.5 text-left shadow-2xs">
                <div className="font-heading text-base font-extrabold text-[#131313] sm:text-lg">
                  {formatNumber(publicSchools)}
                </div>
                <div className="mt-0.5 text-[9px] font-extrabold tracking-wider text-[#6A7181] uppercase">
                  PUBLIC SCHOOLS
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Health */}
          <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-[#7A1F331A] bg-[#FAF4F5] p-6 sm:p-8">
            <div>
              {/* Icon & Title */}
              <div className="mb-4 flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-2xs">
                  <RiHeartPulseLine size={20} className="text-[#7A1F33]" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-[#131313]">
                  Health
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                <strong className="text-[#131313]">
                  {formatNumber(healthCentres)} health institutions
                </strong>{" "}
                serve the Local Government area. Infant and maternal mortality
                remain very low, and immunisation coverage against
                early-childhood diseases is consistently high across every ward.
              </p>
            </div>

            {/* Pill Tags Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="rounded-full border border-gray-100/80 bg-white px-3.5 py-1.5 text-[10px] font-medium text-[#6A7181] shadow-2xs sm:text-xs">
                Immunisation
              </span>
              <span className="rounded-full border border-gray-100/80 bg-white px-3.5 py-1.5 text-[10px] font-medium text-[#6A7181] shadow-2xs sm:text-xs">
                Maternal care
              </span>
              <span className="rounded-full border border-gray-100/80 bg-white px-3.5 py-1.5 text-[10px] font-medium text-[#6A7181] shadow-2xs sm:text-xs">
                Disease surveillance
              </span>
              <span className="rounded-full border border-gray-100/80 bg-white px-3.5 py-1.5 text-[10px] font-medium text-[#6A7181] shadow-2xs sm:text-xs">
                Primary healthcare
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
