import React from "react"
import Image from "next/image"
import { RiMapPinLine } from "@remixicon/react"

import {
  LANDMARK_CATEGORY_OPTIONS,
  optionLabel,
  type LandmarkItem,
} from "@/lib/api"
import { PLACEHOLDER_IMAGE } from "@/lib/content"

interface LandmarksContentSectionProps {
  landmarks: LandmarkItem[]
}

export function LandmarksContentSection({
  landmarks,
}: LandmarksContentSectionProps) {
  if (landmarks.length === 0) {
    return (
      <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="rounded-2xl border border-gray-100/90 bg-white p-10 text-center font-sans text-sm text-[#6A7181]">
            Landmarks are being catalogued. Please check back shortly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 md:space-y-16 md:px-8">
        {landmarks.map((item, index) => {
          {
            /* Alternate the image side down the page */
          }
          const imageLeft = index % 2 === 0

          const image = (
            <div className="relative h-64 min-h-[320px] bg-gray-100 sm:h-80 lg:col-span-6 lg:h-full">
              <Image
                src={item.photo_url || PLACEHOLDER_IMAGE}
                alt={item.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-102"
              />
            </div>
          )

          return (
            <article
              key={item._id}
              className="grid grid-cols-1 items-center overflow-hidden rounded-3xl border border-gray-100/90 bg-white shadow-xs transition-all duration-300 hover:shadow-md lg:grid-cols-12"
            >
              {imageLeft && image}

              {/* Text Content */}
              <div className="flex h-full flex-col justify-between space-y-4 p-8 sm:p-10 lg:col-span-6 lg:p-12">
                <div>
                  {/* Category tag */}
                  <span className="mb-2 block font-heading text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                    {optionLabel(LANDMARK_CATEGORY_OPTIONS, item.category)}
                  </span>

                  {/* Title */}
                  <h2 className="mb-3 font-heading text-2xl leading-snug font-extrabold text-[#131313] sm:text-3xl">
                    {item.name}
                  </h2>

                  {/* Description */}
                  <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Location */}
                {item.location && (
                  <div className="flex flex-wrap items-center gap-2 border-t border-gray-100/80 pt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7A1F331A] bg-[#FAF0E6] px-3 py-1.5 text-[11px] font-semibold text-[#7A1F33]">
                      <RiMapPinLine size={12} />
                      {item.location}
                    </span>
                  </div>
                )}
              </div>

              {!imageLeft && image}
            </article>
          )
        })}
      </div>
    </section>
  )
}
