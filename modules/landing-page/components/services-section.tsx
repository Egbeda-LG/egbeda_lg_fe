import React from "react"
import Link from "next/link"
import {
  RiFileTextLine,
  RiBriefcaseLine,
  RiFilePaperLine,
  RiHeartPulseLine,
  RiGraduationCapLine,
  RiDeleteBin6Line,
  RiAlarmWarningLine,
  RiDownloadLine,
  RiArrowRightLine,
} from "@remixicon/react"

export function ServicesSection() {
  const services = [
    {
      icon: RiFileTextLine,
      title: "Birth Certificate",
      description: "Register and obtain certified birth records.",
      href: "/services",
    },
    {
      icon: RiBriefcaseLine,
      title: "Business Registration",
      description: "Formalise your business within the LGA.",
      href: "/services",
    },
    {
      icon: RiFilePaperLine,
      title: "Marriage Registration",
      description: "Book, register and collect marriage certificates.",
      href: "/services/marriage-registration",
    },
    {
      icon: RiHeartPulseLine,
      title: "Primary Healthcare",
      description: "Primary healthcare and public health support.",
      href: "/services",
    },
    {
      icon: RiGraduationCapLine,
      title: "Education & Social Services",
      description: "Public schools, scholarships and programmes.",
      href: "/services",
    },
    {
      icon: RiDeleteBin6Line,
      title: "Waste Management",
      description: "Collection schedule and reporting tools.",
      href: "/services",
    },
    {
      icon: RiAlarmWarningLine,
      title: "Emergency Contacts",
      description: "24/7 security, fire and medical lines.",
      href: "/contact",
    },
    {
      icon: RiDownloadLine,
      title: "Downloads",
      description: "Official forms, gazettes and publications.",
      href: "/services",
    },
  ]

  return (
    <section
      id="services"
      className="border-t border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                QUICK ACCESS
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
              Citizen services, one click away.
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-base leading-relaxed text-[#6A7181]">
              Everything residents need most, organized for speed: apply,
              register, and pay without a trip to the office.
            </p>
          </div>

          {/* View All Services Link */}
          <div className="shrink-0 pb-1">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7A1F33] transition-colors hover:text-[#5d1625] hover:underline"
            >
              <span>View all services</span>
              <RiArrowRightLine size={16} />
            </Link>
          </div>
        </div>

        {/* 4x2 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF0E6] transition-transform group-hover:scale-105">
                    <IconComponent size={20} className="text-[#7A1F33]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="mb-2 font-heading text-base leading-snug font-bold text-[#131313]">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181]">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-2"
                  >
                    <span>Get started</span>
                    <RiArrowRightLine size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
