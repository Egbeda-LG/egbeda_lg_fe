import React from "react"
import Link from "next/link"
import { RiArrowRightLine, RiTeamLine } from "@remixicon/react"

import { OfficialGrid } from "@/modules/government/components/official-grid"
import type { OfficialCard } from "@/modules/government/government.utils"

interface NulgeContentSectionProps {
  officers: OfficialCard[]
}

export function NulgeContentSection({ officers }: NulgeContentSectionProps) {
  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 md:px-8">
        {/* What NULGE is */}
        <div className="flex flex-col gap-5 rounded-3xl border border-gray-100/90 bg-white p-8 shadow-xs sm:flex-row sm:items-start sm:p-10">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FAF0E6] text-[#7A1F33]">
            <RiTeamLine size={22} />
          </div>
          <div className="space-y-2">
            <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
              About the union
            </h2>
            <p className="font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
              The Nigeria Union of Local Government Employees (NULGE) is the
              recognised union for council staff. Its Egbeda branch negotiates
              on welfare, conditions of service and staff development, and
              represents members in dealings with the council&apos;s management
              team.
            </p>
          </div>
        </div>

        {/* Executives */}
        {officers.length === 0 ? (
          <p className="rounded-2xl border border-gray-100/90 bg-white p-10 text-center font-sans text-sm text-[#6A7181]">
            The NULGE executive list is being updated. Please check back
            shortly.
          </p>
        ) : (
          <div className="space-y-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-heading text-2xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-3xl">
                Branch executives
              </h2>
              <p className="font-sans text-sm leading-relaxed text-[#6A7181]">
                The officers elected to serve the union&apos;s membership across
                Egbeda Local Government.
              </p>
            </div>

            <OfficialGrid officials={officers} />
          </div>
        )}

        {/* Cross-link to the management team */}
        <div className="flex flex-col justify-between gap-4 rounded-3xl border border-gray-100/90 bg-white p-8 shadow-xs sm:flex-row sm:items-center sm:p-10">
          <div className="space-y-1">
            <h2 className="font-heading text-base font-extrabold text-[#131313] sm:text-lg">
              Looking for the council&apos;s directors?
            </h2>
            <p className="font-sans text-xs text-[#6A7181] sm:text-sm">
              The management team runs the council&apos;s departments and
              day-to-day service delivery.
            </p>
          </div>
          <Link
            href="/government/management-team"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#7A1F33] transition-all hover:gap-2 hover:text-[#5d1625]"
          >
            <span>View Management Team</span>
            <RiArrowRightLine size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
