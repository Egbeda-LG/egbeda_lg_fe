import React from "react"
import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

import { OfficialGrid } from "@/modules/government/components/official-grid"
import type { OfficialCard } from "@/modules/government/government.utils"

interface ManagementTeamSectionProps {
  /** Career directors who run the council's departments. */
  officials: OfficialCard[]
}

export function ManagementTeamSection({
  officials,
}: ManagementTeamSectionProps) {
  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 md:px-8">
        {officials.length === 0 ? (
          <p className="rounded-2xl border border-gray-100/90 bg-white p-10 text-center font-sans text-sm text-[#6A7181]">
            The management directory is being updated.
          </p>
        ) : (
          <OfficialGrid officials={officials} />
        )}

        {/* Cross-link to the staff union */}
        <div className="flex flex-col justify-between gap-4 rounded-3xl border border-gray-100/90 bg-white p-8 shadow-xs sm:flex-row sm:items-center sm:p-10">
          <div className="space-y-1">
            <h2 className="font-heading text-base font-extrabold text-[#131313] sm:text-lg">
              Looking for the staff union?
            </h2>
            <p className="font-sans text-xs text-[#6A7181] sm:text-sm">
              NULGE represents council employees on welfare and conditions of
              service.
            </p>
          </div>
          <Link
            href="/government/nulge"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#7A1F33] transition-all hover:gap-2 hover:text-[#5d1625]"
          >
            <span>View NULGE Team</span>
            <RiArrowRightLine size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
