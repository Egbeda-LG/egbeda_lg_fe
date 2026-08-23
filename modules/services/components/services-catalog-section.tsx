import React from "react"
import Link from "next/link"
import {
  RiFilePaperLine,
  RiBriefcaseLine,
  RiFileTextLine,
  RiDeleteBin6Line,
  RiGraduationCapLine,
  RiHeartPulseLine,
  RiStore2Line,
  RiHome4Line,
  RiTruckLine,
  RiWallet3Line,
  RiTimeLine,
  RiArrowRightLine,
} from "@remixicon/react"

export function ServicesCatalogSection() {
  const services = [
    {
      icon: RiFilePaperLine,
      title: "Marriage Registration",
      description: "Book, register and collect marriage certificates",
      fee: "*******",
      timeline: "3 working days",
    },
    {
      icon: RiBriefcaseLine,
      title: "Business Registration",
      description: "Formalise your business within the LGA.",
      fee: "*******",
      timeline: "3 working days",
    },
    {
      icon: RiFileTextLine,
      title: "Birth Certificate",
      description: "Certified birth registration for new-borns and adults.",
      fee: "*******",
      timeline: "3 working days",
    },
    {
      icon: RiDeleteBin6Line,
      title: "Environment Clearance",
      description: "Events, works and signage clearance.",
      fee: "*******",
      timeline: "3 working days",
    },
    {
      icon: RiGraduationCapLine,
      title: "Education & Social Services",
      description: "Public schools, scholarships and programmes.",
      fee: "*******",
      timeline: "3 working days",
    },
    {
      icon: RiDeleteBin6Line,
      title: "Waste Management",
      description: "Collection and picking schedule of household wastes",
      fee: "*******",
      timeline: "3 working days",
    },
    {
      icon: RiHeartPulseLine,
      title: "Primary Health Centre",
      description: "Free consultations at 22 health centres.",
      fee: "Free",
      timeline: "3 working days",
    },
    {
      icon: RiStore2Line,
      title: "Market Stall Allocation",
      description: "Apply for stalls in council-managed markets.",
      fee: "Varies",
      timeline: "3 working days",
    },
    {
      icon: RiHome4Line,
      title: "Rentage of Hall",
      description: "Hall rentage for events and meetings",
      fee: "******",
      timeline: "3 working days",
    },
    {
      icon: RiTruckLine,
      title: "Rentage of bulldozer",
      description: "Rentage of bulldozer for community use and personal use.",
      fee: "******",
      timeline: "3 working days",
    },
  ]

  const supportCards = [
    {
      badge: "SUPPORT",
      title: "Need help applying?",
      description:
        "Visit the citizen service desk at the Secretariat — Mon–Fri, 8am–4pm.",
      actionText: "Get direction",
      href: "#contact",
    },
    {
      badge: "SUPPORT",
      title: "Not sure which department?",
      description:
        "Meet the government team and directors leading service delivery.",
      actionText: "View Government",
      href: "#government",
    },
    {
      badge: "SUPPORT",
      title: "Business or SME?",
      description:
        "Speak to our customer desk about permits, stalls and support programmes.",
      actionText: "Speak to support",
      href: "#support",
    },
  ]

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group flex h-full flex-col justify-between rounded-2xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all duration-200 hover:shadow-md"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF0E6] text-[#7A1F33] transition-transform group-hover:scale-105">
                    <IconComponent size={20} />
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
                  <div className="flex items-center justify-between font-sans text-xs font-medium text-[#6A7181]">
                    <div className="flex items-center gap-1.5">
                      <RiWallet3Line size={14} className="text-gray-400" />
                      <span>{service.fee}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RiTimeLine size={14} className="text-gray-400" />
                      <span>{service.timeline}</span>
                    </div>
                  </div>

                  <Link
                    href="/services/marriage-registration"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#D9A300] px-4 py-3 text-xs font-bold text-white shadow-2xs transition-colors hover:bg-[#c29200] sm:text-sm"
                  >
                    <span>Apply now</span>
                    <RiArrowRightLine size={16} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

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
                <a
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-2 hover:text-[#5d1625] sm:text-sm"
                >
                  <span>{card.actionText}</span>
                  <RiArrowRightLine size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
