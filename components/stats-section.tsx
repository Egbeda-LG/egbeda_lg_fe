import React from "react"
import {
  SnapshotPopulationIcon,
  SnapshotSchoolsIcon,
  SnapshotHealthCentresIcon,
  SnapshotWardsIcon,
  SnapshotLandmassIcon,
  SnapshotStaffStrengthIcon,
  type SnapshotIconComponent,
} from "@/components/snapshot-icons"

import {
  organizationSettingsApi,
  withFallback,
  type OrganizationDetails,
} from "@/lib/api"
import { formatNumber } from "@/lib/content"

type Stat = {
  icon: SnapshotIconComponent
  value?: number
  label: string
}

const DEFAULT_ORGANIZATION: Partial<OrganizationDetails> = {
  population: 385000,
  no_of_schools: 42,
  no_of_health_centres: 18,
  no_of_wards: 11,
  landmass_per_sq_km: 191,
  no_of_staffs: 520,
}

/**
 * Reads its own figures from the council's organisation settings — the section
 * appears on more than one page, and identical fetches are shared within a
 * render pass, so there is nothing to thread through as props.
 */
export async function StatsSection() {
  const settings = await withFallback(
    () => organizationSettingsApi.get(),
    { organization: DEFAULT_ORGANIZATION },
    "organization settings"
  )

  const organization = {
    ...DEFAULT_ORGANIZATION,
    ...settings.organization,
  }

  const stats: Stat[] = [
    {
      icon: SnapshotPopulationIcon,
      value: organization?.population,
      label: "Population",
    },
    {
      icon: SnapshotSchoolsIcon,
      value: organization?.no_of_schools,
      label: "Public Schools",
    },
    {
      icon: SnapshotHealthCentresIcon,
      value: organization?.no_of_health_centres,
      label: "Health Centres",
    },
    {
      icon: SnapshotWardsIcon,
      value: organization?.no_of_wards,
      label: "Wards",
    },
    {
      icon: SnapshotLandmassIcon,
      value: organization?.landmass_per_sq_km,
      label: "Square Kilometres",
    },
    {
      icon: SnapshotStaffStrengthIcon,
      value: organization?.no_of_staffs,
      label: "Staff Strength",
    },
  ]

  const available = stats.filter((stat) => typeof stat.value === "number")

  if (available.length === 0) return null

  return (
    <section
      id="snapshot"
      className="relative overflow-hidden bg-[#7A1F33] py-16 text-white md:py-24"
    >
      {/* Subtle Warm Gradient Accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,163,0,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl space-y-4">
          {/* Pill Badge */}
          <div>
            <span className="inline-block rounded-full border border-[#D9A300]/30 bg-black/25 px-5 py-2 text-xs font-bold tracking-widest text-[#D9A300] uppercase shadow-xs">
              EGBEDA IN NUMBER
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Snapshot of our Community
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          {available.map((stat) => {
            const IconComponent = stat.icon

            return (
              <div
                key={stat.label}
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-6 text-center backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-7"
              >
                {/* Icon Container */}
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-black/25 text-[#D9A300] ring-1 ring-[#D9A300]/25 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D9A300] group-hover:text-[#7A1F33] group-hover:ring-[#D9A300]">
                  <IconComponent
                    size={22}
                    className="transition-colors duration-300"
                  />
                </div>

                {/* Number Value */}
                <div className="my-1 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {formatNumber(stat.value)}
                </div>

                {/* Label */}
                <div className="mt-1 font-sans text-xs font-medium text-white/70">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
