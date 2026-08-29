import React from "react"
import {
  MissionIcon,
  VisionIcon,
  CoreValuesIcon,
} from "@/components/about-icons"

export function AboutValuesSection() {
  const cards = [
    {
      icon: MissionIcon,
      title: "Our Mission",
      description:
        "To deliver transparent, efficient, and people-centred governance that improves quality of life for every resident of Egbeda.",
    },
    {
      icon: VisionIcon,
      title: "Our Vision",
      description:
        "A well-planned, prosperous, and secure Egbeda recognized as a model local government area in Ibadan, Oyo State.",
    },
    {
      icon: CoreValuesIcon,
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
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#7A1F33]/10 bg-[#FAF0E6] text-[#7A1F33] shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:bg-[#7A1F33] group-hover:text-[#FAF0E6] group-hover:shadow-sm">
                    <IconComponent
                      size={22}
                      className="transition-colors duration-200"
                    />
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
