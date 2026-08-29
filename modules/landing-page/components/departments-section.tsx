import React from "react"
import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

import { departmentsApi, withFallback, type DepartmentItem } from "@/lib/api"
import { getDepartmentIcon } from "./department-icons"

const DEFAULT_DEPARTMENTS: DepartmentItem[] = [
  {
    _id: "dept-1",
    name: "Finance & Supplies",
    description:
      "Manages LG revenue, budgeting, procurement, and financial reporting.",
    head_of_department: "Director of Finance & Supplies",
    staff_no: 0,
    status: "active",
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "dept-2",
    name: "Works & Housing",
    description:
      "Oversees road maintenance, drainage, and public building construction.",
    head_of_department: "Director of Works & Housing",
    staff_no: 0,
    status: "active",
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "dept-3",
    name: "Education & Social Services",
    description:
      "Supports public primary schools, adult literacy, and youth programmes.",
    head_of_department: "Director of Education & Social Services",
    staff_no: 0,
    status: "active",
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "dept-4",
    name: "Primary Healthcare",
    description:
      "Runs primary health centres, immunisation drives, and disease control.",
    head_of_department: "Director of Primary Healthcare",
    staff_no: 0,
    status: "active",
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "dept-5",
    name: "Agriculture & Natural Resources",
    description:
      "Promotes urban farming, extension services, and market gardener support.",
    head_of_department: "Director of Agriculture & Natural Resources",
    staff_no: 0,
    status: "active",
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "dept-6",
    name: "Environment & Health Services",
    description:
      "Coordinates waste collection, sanitation inspections, and greening.",
    head_of_department: "Director of Environmental Health",
    staff_no: 0,
    status: "active",
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "dept-7",
    name: "Budget Planning, Research & Statistics",
    description:
      "Approves development plans and guides sustainable data-driven governance.",
    head_of_department: "Director of Planning, Research & Statistics",
    staff_no: 0,
    status: "active",
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "dept-8",
    name: "Admin & General Services",
    description:
      "Administers personnel management, council secretariat, and official records.",
    head_of_department: "Director of Admin & General Services",
    staff_no: 0,
    status: "active",
    createdAt: "",
    updatedAt: "",
  },
]

export async function DepartmentsSection() {
  const response = await withFallback(
    () => departmentsApi.list({ limit: 12 }),
    {
      items: DEFAULT_DEPARTMENTS,
      meta: { page: 1, limit: 12, total: 8, totalPages: 1 },
    },
    "landing departments"
  )

  const items = response.items.length > 0 ? response.items : DEFAULT_DEPARTMENTS

  const departments = items.map((department) => ({
    id: department._id,
    title: department.name,
    description: department.description,
    head: department.head_of_department,
    Icon: getDepartmentIcon(department.name),
  }))

  if (departments.length === 0) return null

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
            {`${departments.length} ${
              departments.length === 1
                ? "department coordinates"
                : "departments coordinate"
            } day-to-day governance, from revenue collection to environmental protection.`}
          </p>
        </div>

        {/* 4x2 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => {
            const IconComponent = dept.Icon
            return (
              <div
                key={dept.id}
                className="group flex flex-col justify-between rounded-2xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#7A1F33]/10 bg-[#FAF0E6] text-[#7A1F33] shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:bg-[#7A1F33] group-hover:text-[#FAF0E6] group-hover:shadow-sm">
                    <IconComponent
                      size={22}
                      className="transition-colors duration-200"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="mb-2 font-heading text-base leading-snug font-bold text-[#131313]">
                    {dept.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mb-4 font-sans text-xs leading-relaxed text-[#6A7181]">
                    {dept.description}
                  </p>

                  {/* Head of Department */}
                  {dept.head && (
                    <p className="mb-6 font-sans text-[11px] font-semibold text-[#7A1F33]">
                      Led by {dept.head}
                    </p>
                  )}
                </div>

                {/* Card Action Link */}
                <div>
                  <Link
                    href="/government/management-team"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-2"
                  >
                    <span>Learn more</span>
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
