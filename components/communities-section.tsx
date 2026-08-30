import React from "react"

import {
  marketsApi,
  organizationSettingsApi,
  wardsApi,
  withFallback,
} from "@/lib/api"
import { formatNumber } from "@/lib/content"

/** Wards, markets and the population figure all come from the API. */
export async function CommunitiesSection() {
  const [wards, markets, settings] = await Promise.all([
    withFallback(() => wardsApi.list(), [], "wards list"),
    withFallback(() => marketsApi.list(), [], "markets list"),
    withFallback(
      () => organizationSettingsApi.get(),
      {},
      "organization settings"
    ),
  ])

  const population = formatNumber(settings.organization?.population)
  const servingCopy = population
    ? `Serving ${population}+ residents daily`
    : "Serving residents across the local government daily"

  return (
    <section className="border-b border-gray-100 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Part 1: 11 Wards */}
        <div className="mb-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl space-y-4">
              {/* Pill Badge */}
              <div>
                <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                  COMMUNITIES
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
                {wards.length || 11} Wards, One Egbeda
              </h2>
            </div>

            {/* Right Subtitle */}
            <div className="shrink-0 text-left md:text-right">
              <span className="font-sans text-xs font-medium text-[#6A7181]">
                {servingCopy}
              </span>
            </div>
          </div>

          {/* 11 Wards Grid */}
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
            {wards.map((ward) => (
              <div
                key={ward.ward_id}
                className="group flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white px-4 py-3 shadow-2xs transition-all hover:border-[#7A1F33]/30 hover:shadow-xs"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FAF0E6] text-xs font-extrabold text-[#7A1F33] transition-colors group-hover:bg-[#7A1F33] group-hover:text-white">
                  {ward.ward_number}
                </div>
                <span className="font-heading text-xs leading-tight font-bold text-[#131313] sm:text-sm">
                  {ward.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Markets in Egbeda */}
        {markets.length > 0 && (
          <div>
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-xl space-y-2">
                {/* Headline */}
                <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
                  Markets in Egbeda
                </h2>
              </div>

              {/* Right Subtitle */}
              <div className="shrink-0 text-left md:text-right">
                <span className="font-sans text-xs font-medium text-[#6A7181]">
                  {servingCopy}
                </span>
              </div>
            </div>

            {/* Markets Grid */}
            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
              {markets.map((market) => (
                <div
                  key={market.market_number}
                  className="group flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white px-4 py-3 shadow-2xs transition-all hover:border-[#7A1F33]/30 hover:shadow-xs"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FAF0E6] text-xs font-extrabold text-[#7A1F33] transition-colors group-hover:bg-[#7A1F33] group-hover:text-white">
                    {market.market_number}
                  </div>
                  <span className="font-heading text-xs leading-tight font-bold text-[#131313] sm:text-sm">
                    {market.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
