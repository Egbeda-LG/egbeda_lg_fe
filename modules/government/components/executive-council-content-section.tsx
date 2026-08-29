import React from "react"
import Image from "next/image"

import { SocialLinks } from "@/components/social-links"
import type { ChairmanInfo } from "@/lib/api"
import { placementImage } from "@/lib/content"
import type { toCouncillorRows } from "@/modules/government/government.utils"

type CouncillorRow = ReturnType<typeof toCouncillorRows>[number]

interface ExecutiveCouncilContentSectionProps {
  chairman?: Partial<ChairmanInfo>
  councillors: CouncillorRow[]
}

export function ExecutiveCouncilContentSection({
  chairman,
  councillors,
}: ExecutiveCouncilContentSectionProps) {
  const chairmanPhoto =
    placementImage(chairman?.images, "government") ??
    "/images/executive-chairman.png"

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Executive Chairman Card */}
        <div className="mx-auto mb-16 max-w-md">
          <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white shadow-xs transition-all duration-300 hover:shadow-md">
            <div className="relative flex h-72 w-full items-center justify-center overflow-hidden bg-[#131313] sm:h-80">
              <Image
                src={chairmanPhoto}
                alt={`${chairman?.official_name ?? "Executive Chairman"} — Executive Chairman, Egbeda Local Government`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <div className="flex flex-col items-center space-y-2 p-6 text-center">
              <h2 className="font-heading text-lg leading-snug font-extrabold text-[#131313] sm:text-xl">
                {chairman?.official_name ?? "Executive Chairman"}
              </h2>
              <div className="font-heading text-xs font-bold tracking-wider text-[#D9A300] uppercase">
                Executive Chairman Egbeda L/G
              </div>

              <SocialLinks links={chairman?.social_media} className="pt-3" />
            </div>
          </div>
        </div>

        {/* Councillors Table Container */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
          {/* Header Bar */}
          <div className="grid grid-cols-12 gap-4 bg-[#7A1F33] px-6 py-4.5 font-heading text-xs font-extrabold tracking-wider text-white uppercase sm:px-8">
            <div className="col-span-4 sm:col-span-3">Councillor</div>
            <div className="col-span-3 sm:col-span-3">Role</div>
            <div className="col-span-2 sm:col-span-3">Ward</div>
            <div className="col-span-3 sm:col-span-3">Area</div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-gray-100 bg-white font-sans text-xs sm:text-sm">
            {councillors.length === 0 ? (
              <p className="px-6 py-10 text-center text-[#6A7181] sm:px-8">
                The councillor register is being updated.
              </p>
            ) : (
              councillors.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 items-center gap-4 px-6 py-4 transition-colors hover:bg-[#FFF7F8]/60 sm:px-8"
                >
                  <div className="col-span-4 flex items-center gap-3 sm:col-span-3">
                    {item.photo && (
                      <span className="relative hidden h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-100 sm:block">
                        <Image
                          src={item.photo}
                          alt={item.name}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </span>
                    )}
                    <span
                      className={`font-heading font-bold ${
                        item.isVacant
                          ? "text-[#6A7181] italic"
                          : "text-[#131313]"
                      }`}
                    >
                      {item.isVacant ? "Vacant" : item.name}
                    </span>
                  </div>
                  <div className="col-span-3 text-[#6A7181] sm:col-span-3">
                    {item.role}
                  </div>
                  <div className="col-span-2 font-bold text-[#7A1F33] sm:col-span-3">
                    {item.ward}
                  </div>
                  <div className="col-span-3 font-medium text-[#7A1F33] sm:col-span-3">
                    {item.area}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
