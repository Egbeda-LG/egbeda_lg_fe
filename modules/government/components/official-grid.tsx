import React from "react"
import Image from "next/image"

import { SocialLinks } from "@/components/social-links"
import type { OfficialCard } from "@/modules/government/government.utils"

/**
 * The portrait grid shared by the management team and NULGE pages - both list
 * people in exactly the same card, so the markup lives here rather than in
 * either page.
 */
export function OfficialGrid({ officials }: { officials: OfficialCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {officials.map((member) => (
        <div
          key={member.id}
          className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white shadow-xs transition-all duration-300 hover:shadow-md"
        >
          {/* Photo Area */}
          <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-[#E5ECEE] sm:h-72">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              /* Silhouette stand-in until a portrait is uploaded */
              <div className="flex h-full w-full items-end justify-center bg-[#D4DFE2] pt-8">
                <div className="flex h-44 w-44 flex-col items-center justify-end">
                  <div className="mb-2 h-20 w-20 rounded-full bg-white shadow-2xs" />
                  <div className="h-20 w-36 rounded-t-full bg-white shadow-2xs" />
                </div>
              </div>
            )}

            {/* Vacancy Badge */}
            {member.isVacant && (
              <div className="absolute top-4 left-4 z-10">
                <span className="rounded-md bg-[#7A1F33] px-3 py-1 text-[10px] font-extrabold tracking-widest text-white uppercase shadow-xs">
                  Vacant
                </span>
              </div>
            )}
          </div>

          {/* Content Box */}
          <div className="flex flex-1 flex-col items-center justify-between space-y-2.5 p-6 text-center">
            <div className="w-full space-y-1.5">
              {/* Name */}
              <h3
                className={`font-heading text-base leading-snug font-extrabold transition-colors sm:text-lg ${
                  member.isVacant
                    ? "text-[#6A7181] italic"
                    : "text-[#131313] group-hover:text-[#7A1F33]"
                }`}
              >
                {member.isVacant ? "Seat vacant" : member.name}
              </h3>

              {/* Title / Role */}
              <div className="font-heading text-[11px] font-extrabold tracking-wider text-[#D9A300] uppercase">
                {member.role}
              </div>

              {/* Bio / Description */}
              {member.description && (
                <p className="mx-auto max-w-xs pt-1 font-sans text-xs leading-relaxed text-[#6A7181]">
                  {member.description}
                </p>
              )}
            </div>

            <SocialLinks
              links={member.social}
              className="justify-center pt-3"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
