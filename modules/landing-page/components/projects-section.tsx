import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RiMapPinLine, RiArrowRightLine } from "@remixicon/react"

import { projectsApi, withFallback } from "@/lib/api"
import {
  toProjectCards,
  type ProjectCard,
} from "@/modules/projects/projects.utils"

export async function ProjectsSection() {
  const response = await withFallback(
    () => projectsApi.list({ limit: 6 }),
    { items: [], meta: { page: 1, limit: 6, total: 0, totalPages: 0 } },
    "landing projects"
  )

  const projects = toProjectCards(response.items)

  if (projects.length === 0) return null

  const featuredProject =
    projects.find((project) => project.isFeatured) ?? projects[0]
  const projectList = projects.filter(
    (project) => project.id !== featuredProject.id
  )

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

        {/* Featured project mirrors the news section layout. */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all hover:shadow-md lg:col-span-6">
            <div>
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl bg-gray-100 sm:h-72">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <h3 className="mb-2 font-heading text-lg leading-snug font-extrabold text-[#131313] sm:text-xl">
                {featuredProject.title}
              </h3>

              <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-[#6A7181]">
                <RiMapPinLine size={14} className="shrink-0 text-[#7A1F33]" />
                <span>{featuredProject.location}</span>
              </div>

              <p className="font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                {featuredProject.description}
              </p>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-6">
            {projectList.map((project) => (
              <ProjectListCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectListCard({ project }: { project: ProjectCard }) {
  return (
    <div className="group flex flex-col items-start gap-4 rounded-2xl border border-gray-100/90 bg-white p-4 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center sm:gap-5 sm:p-5">
      <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-24 sm:w-36">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 150px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="mb-1.5 line-clamp-2 font-heading text-sm leading-snug font-bold text-[#131313]">
          {project.title}
        </h4>
        <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-medium text-[#6A7181]">
          <RiMapPinLine size={13} className="shrink-0 text-[#7A1F33]" />
          <span>{project.location}</span>
        </div>
        <p className="line-clamp-2 font-sans text-xs leading-relaxed text-[#6A7181]">
          {project.description}
        </p>
      </div>
    </div>
  )
}
