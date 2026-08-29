import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RiMapPinLine, RiArrowRightLine } from "@remixicon/react"

import { projectsApi, withFallback } from "@/lib/api"
import { toProjectCards } from "@/modules/projects/projects.utils"

export async function ProjectsSection() {
  const response = await withFallback(
    () => projectsApi.list({ limit: 6 }),
    { items: [], meta: { page: 1, limit: 6, total: 0, totalPages: 0 } },
    "landing projects"
  )

  const projects = toProjectCards(response.items)

  if (projects.length === 0) return null

  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                DEVELOPMENT PROJECT
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
              Project Infrastructure
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-base leading-relaxed text-[#6A7181]">
              Real-time status on the infrastructure and community projects
              underway across Egbeda&apos;s wards.
            </p>
          </div>

          {/* View All Projects Link */}
          <div className="shrink-0 pb-1">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7A1F33] transition-colors hover:text-[#5d1625] hover:underline"
            >
              <span>View all projects</span>
              <RiArrowRightLine size={16} />
            </Link>
          </div>
        </div>

        {/* 3x2 Grid of Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Card Image with Status Overlay */}
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Title */}
                  <h3 className="mb-2 font-heading text-base leading-snug font-bold text-[#131313] sm:text-lg">
                    {project.title}
                  </h3>

                  {/* Location */}
                  <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-[#6A7181]">
                    <RiMapPinLine
                      size={14}
                      className="shrink-0 text-[#7A1F33]"
                    />
                    <span>{project.location}</span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
