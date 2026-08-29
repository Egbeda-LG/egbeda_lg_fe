import React from "react"
import Link from "next/link"
import { RiArrowRightLine, RiBuilding2Line, RiTimeLine } from "@remixicon/react"

import type { ServiceCard } from "@/modules/services/services.utils"

interface ServicesCatalogSectionProps {
  services: ServiceCard[]
  /** Directions link from the council's organisation settings, when set. */
  directionsHref?: string
}

export function ServicesCatalogSection({
  services,
  directionsHref,
}: ServicesCatalogSectionProps) {
  const supportCards = [
    {
      badge: "SUPPORT",
      title: "Need help applying?",
      description:
        "Visit the citizen service desk at the Secretariat — Mon–Fri, 8am–4pm.",
      actionText: "Get direction",
      href: directionsHref ?? "/contact",
    },
    {
      badge: "SUPPORT",
      title: "Not sure which department?",
      description:
        "Meet the government team and directors leading service delivery.",
      actionText: "View Government",
      href: "/government/management-team",
    },
    {
      badge: "SUPPORT",
      title: "Business or SME?",
      description:
        "Speak to our customer desk about permits, stalls and support programmes.",
      actionText: "Speak to support",
      href: "/contact",
    },
  ]

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Services Grid */}
        {services.length === 0 ? (
          <p className="rounded-2xl border border-gray-100/90 bg-white p-10 text-center font-sans text-sm text-[#6A7181]">
            The service catalog is being updated. Please check back shortly.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service) => {
              const IconComponent = service.Icon

              return (
                <div
                  key={service.id}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all duration-200 hover:shadow-md"
                >
                  <div>
                    {/* Icon */}
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#7A1F33]/10 bg-[#FAF0E6] text-[#7A1F33] shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:bg-[#7A1F33] group-hover:text-[#FAF0E6] group-hover:shadow-sm">
                      <IconComponent
                        size={22}
                        className="transition-colors duration-200"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mb-1.5 font-heading text-lg leading-snug font-extrabold text-[#131313]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Details & Action Button */}
                  <div className="space-y-4 border-t border-gray-100/80 pt-4">
                    <div className="flex items-center justify-between gap-3 font-sans text-xs font-medium text-[#6A7181]">
                      <div className="flex min-w-0 items-center gap-1.5">
                        <RiBuilding2Line
                          size={14}
                          className="shrink-0 text-gray-400"
                        />
                        <span className="truncate">{service.department}</span>
                      </div>
                      <div className="flex min-w-0 items-center gap-1.5">
                        <RiTimeLine
                          size={14}
                          className="shrink-0 text-gray-400"
                        />
                        <span className="truncate">{service.timeline}</span>
                      </div>
                    </div>

                    <Link
                      href={service.href}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D9A300] px-4 py-3 text-xs font-bold text-white shadow-2xs transition-colors hover:bg-[#c29200] sm:text-sm"
                    >
                      <span>Apply now</span>
                      <RiArrowRightLine size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* 3 Support Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-2xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all hover:shadow-md sm:p-8"
            >
              <div>
                {/* Pill Badge */}
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-[#7A1F33]/10 px-3 py-1 text-[10px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                    {card.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 font-heading text-base leading-snug font-extrabold text-[#131313] sm:text-lg">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                  {card.description}
                </p>
              </div>

              {/* Link */}
              <div>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-2 hover:text-[#5d1625] sm:text-sm"
                >
                  <span>{card.actionText}</span>
                  <RiArrowRightLine size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
