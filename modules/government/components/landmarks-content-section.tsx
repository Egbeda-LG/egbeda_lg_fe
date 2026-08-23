import React from "react"
import Image from "next/image"

export function LandmarksContentSection() {
  const landmarks = [
    {
      category: "Industry",
      title: "Nigeria Bottling Company",
      description:
        "Nigerian Breweries operates a landmark brewing facility within Egbeda LG. The plant is one of Nigeria's largest, producing internationally recognised beverage brands and providing thousands of direct and indirect jobs to residents. Its logistics and distribution network anchors much of the industrial commerce along the Iwo Road corridor.",
      image: "/images/landmark-cocacola.jpg",
      tags: [
        "Founded 1946 (Nigeria)",
        "Major employer in Egbeda",
        "Anchor tenant of the Iwo Rd. industrial belt",
      ],
      imageLeft: true,
    },
    {
      category: "Marriage registry at SDP, WEMA",
      title: "Marriage Registry",
      description:
        "The marriage registry offers a suitable location for couples seeking to formalize their union. Marriage is an essential institution that strengthens both families and society as a whole.",
      image: "/images/landmark-marriage-registry.jpg",
      tags: [
        "Ministry of interior",
        "Marriage registration",
        "Event and ceremonies",
      ],
      imageLeft: false,
    },
    {
      category: "E-commerce",
      title: "Temidire Plank Market",
      description:
        "The Temidire Plank Market in Ibadan, Nigeria, developed into a premier regional timber hub along the Old Ife Road but faced over a decade of legal battles and forced relocation threats due to urban expansion, ultimately resolving in 2022 through a government settlement to redevelop the site into a modern business complex.",
      image: "/images/landmark-temidire.jpg",
      tags: [
        "Construction building materials",
        "Scenic rock formations",
        "Boost to local tourism",
      ],
      imageLeft: true,
    },
    {
      category: "Transportation",
      title: "Iwo Road Terminal",
      description:
        "Iwo Road Bus Interchange (Ibadan Central Bus Terminals 1 and 2) is a modern, ultra-modern twin transport hub commissioned in November 2025. Designed to reduce heavy traffic and organize transit, the facility serves as a major gateway for interstate and intrastate commuters traveling through Ibadan.",
      image: "/images/landmark-iwo-terminal.jpg",
      tags: [
        "Twin Terminal",
        "Community Amenities",
        "Boost to road transportation",
      ],
      imageLeft: false,
    },
  ]

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 md:space-y-16 md:px-8">
        {landmarks.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 items-center overflow-hidden rounded-3xl border border-gray-100/90 bg-white shadow-xs transition-all duration-300 hover:shadow-md lg:grid-cols-12"
          >
            {/* Image (If Left) */}
            {item.imageLeft && (
              <div className="relative h-64 min-h-[320px] bg-gray-100 sm:h-80 lg:col-span-6 lg:h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>
            )}

            {/* Text Content */}
            <div className="flex h-full flex-col justify-between space-y-4 p-8 sm:p-10 lg:col-span-6 lg:p-12">
              <div>
                {/* Category tag */}
                <span className="mb-2 block font-heading text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                  {item.category}
                </span>

                {/* Title */}
                <h2 className="mb-3 font-heading text-2xl leading-snug font-extrabold text-[#131313] sm:text-3xl">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                  {item.description}
                </p>
              </div>

              {/* Pill Tags */}
              <div className="flex flex-wrap items-center gap-2 border-t border-gray-100/80 pt-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-full border border-[#7A1F331A] bg-[#FAF0E6] px-3 py-1.5 text-[11px] font-semibold text-[#7A1F33]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image (If Right) */}
            {!item.imageLeft && (
              <div className="relative h-64 min-h-[320px] bg-gray-100 sm:h-80 lg:col-span-6 lg:h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
