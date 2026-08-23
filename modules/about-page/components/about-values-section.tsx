import React from "react"
import { RiTimeLine, RiEyeLine, RiStarLine } from "@remixicon/react"

export function AboutValuesSection() {
  const cards = [
    {
      icon: RiTimeLine,
      title: "Our Mission",
      description:
        "To deliver transparent, efficient, and people-centred governance that improves quality of life for every resident of Egbeda.",
    },
    {
      icon: RiEyeLine,
      title: "Our Vision",
      description:
        "A well-planned, prosperous, and secure Egbeda recognized as a model local government area in Ibadan, Oyo State.",
    },
    {
      icon: RiStarLine,
      title: "Core Values",
      description:
        "Integrity, service, equity, accountability and community. The standards that guide every decision we make in Egbeda local government.",
    },
  ]

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl border border-gray-100/90 bg-white p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-9"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-[#7A1F331A] bg-[#7A1F33]/10 transition-transform group-hover:scale-105">
                    <IconComponent size={20} className="text-[#7A1F33]" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 font-heading text-lg leading-snug font-extrabold text-[#131313] sm:text-xl">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
