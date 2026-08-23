import React from "react"
import Link from "next/link"
import {
  RiMoneyDollarCircleLine,
  RiHome4Line,
  RiGraduationCapLine,
  RiHeartLine,
  RiMapPinLine,
  RiDeleteBin6Line,
  RiHashtag,
  RiBriefcaseLine,
  RiArrowRightLine,
} from "@remixicon/react"

export function DepartmentsSection() {
  const departments = [
    {
      icon: RiMoneyDollarCircleLine,
      title: "Finance & Supplies",
      description:
        "Manages LG revenue, budgeting, procurement, and financial reporting.",
      actionText: "Learn more",
      href: "/government/management-team",
    },
    {
      icon: RiHome4Line,
      title: "Works & Housing",
      description:
        "Oversees road maintenance, drainage, and public building construction.",
      actionText: "Learn more",
      href: "/government/management-team",
    },
    {
      icon: RiGraduationCapLine,
      title: "Education & Social Services",
      description:
        "Supports public primary schools, adult literacy, and youth programmes.",
      actionText: "Learn more",
      href: "/government/management-team",
    },
    {
      icon: RiHeartLine,
      title: "Primary Healthcare",
      description:
        "Runs primary health centres, immunisation drives, and disease control.",
      actionText: "Get started",
      href: "/services",
    },
    {
      icon: RiMapPinLine,
      title: "Agriculture & Natural Resources",
      description:
        "Promotes urban farming, extension services, and market gardener support.",
      actionText: "Learn more",
      href: "/government/management-team",
    },
    {
      icon: RiDeleteBin6Line,
      title: "Environment & Health Services",
      description:
        "Coordinates waste collection, sanitation inspections, and greening.",
      actionText: "Get started",
      href: "/services",
    },
    {
      icon: RiHashtag,
      title: "Budget Planning, Research & Statistics",
      description:
        "Approves building plans and guides sustainable land use across wards.",
      actionText: "Learn more",
      href: "/government/management-team",
    },
    {
      icon: RiBriefcaseLine,
      title: "Admin & General Services",
      description:
        "Administers tenement rates, permits, and local levy collection.",
      actionText: "Learn more",
      href: "/government/management-team",
    },
  ]

  return (
    <section
      id="departments"
      className="border-t border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl space-y-4">
          {/* Pill Badge */}
          <div>
            <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
              LOCAL GOVERNMENT STRUCTURE
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
            Departments serving Egbeda
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-base leading-relaxed text-[#6A7181]">
            Eight departments coordinate day-to-day governance, from revenue
            collection to environmental protection.
          </p>
        </div>

        {/* 4x2 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon
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
                    {dept.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181]">
                    {dept.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div>
                  <Link
                    href={dept.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-2"
                  >
                    <span>{dept.actionText}</span>
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
