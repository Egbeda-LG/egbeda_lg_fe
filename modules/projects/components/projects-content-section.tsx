import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RiMapPinLine, RiTimeLine, RiUserSettingsLine } from "@remixicon/react"

import type { ProjectCard } from "@/modules/projects/projects.utils"

interface ProjectsContentSectionProps {
  projects: ProjectCard[]
  wards: { value: string; label: string }[]
  activeWard: string
}

export function ProjectsContentSection({
  projects,
  wards,
  activeWard,
}: ProjectsContentSectionProps) {
  const featuredProject =
    projects.find((project) => project.isFeatured) ?? projects[0]
  const projectList = featuredProject
    ? projects.filter((project) => project.id !== featuredProject.id)
    : []

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-8">
        {/* Ward Filter Pills */}
        {wards.length > 1 && (
          <div className="flex flex-wrap items-center gap-2">
            {[{ value: "all", label: "All wards" }, ...wards].map((ward) => (
              <Link
                key={ward.value}
                href={
                  ward.value === "all"
                    ? "/projects"
                    : `/projects?ward=${ward.value}`
                }
                scroll={false}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  activeWard === ward.value
                    ? "bg-[#7A1F33] text-white shadow-xs"
                    : "border border-[#7A1F331A] bg-white text-[#7A1F33] hover:bg-[#FFF7F8]"
                }`}
              >
                {ward.label}
              </Link>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <p className="rounded-2xl border border-gray-100/90 bg-white p-10 text-center font-sans text-sm text-[#6A7181]">
            No projects have been published for this ward yet.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <ProjectFeatureCard project={featuredProject} />

              <div className="space-y-6 lg:col-span-6">
                {projectList.slice(0, 3).map((project) => (
                  <ProjectListCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            {projectList.length > 3 && (
              <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
                {projectList.slice(3).map((project) => (
                  <ProjectListCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

function ProjectFeatureCard({ project }: { project: ProjectCard }) {
  return (
    <article className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all hover:shadow-md lg:col-span-6">
      <div>
        <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-80">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          {project.wardNumber && (
            <div className="absolute top-4 right-4 z-10">
              <span className="rounded-md bg-black/55 px-3 py-1 text-[10px] font-extrabold tracking-widest text-white uppercase backdrop-blur-xs">
                Ward {project.wardNumber}
              </span>
            </div>
          )}
        </div>

        <h2 className="mb-3 font-heading text-xl leading-snug font-extrabold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-2xl">
          {project.title}
        </h2>

        <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-[#7A1F33]">
          <RiMapPinLine size={14} className="shrink-0" />
          <span>
            {project.location}
            {project.wardName ? ` · ${project.wardName}` : ""}
          </span>
        </div>

        <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
          {project.description}
        </p>
      </div>

      <ProjectMeta project={project} />
    </article>
  )
}

function ProjectListCard({ project }: { project: ProjectCard }) {
  return (
    <article className="group flex flex-col items-start gap-5 rounded-2xl border border-gray-100/90 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center">
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-44">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 180px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="mb-1.5 line-clamp-2 font-heading text-sm leading-snug font-bold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-base">
          {project.title}
        </h3>
        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold text-[#7A1F33]">
          <RiMapPinLine size={13} className="shrink-0" />
          <span>
            {project.location}
            {project.wardName ? ` · ${project.wardName}` : ""}
          </span>
        </div>
        <p className="mb-3 line-clamp-2 font-sans text-xs leading-relaxed text-[#6A7181]">
          {project.description}
        </p>
        <ProjectMeta project={project} />
      </div>
    </article>
  )
}

function ProjectMeta({ project }: { project: ProjectCard }) {
  return (
    <div className="space-y-2 font-sans text-xs text-[#6A7181]">
      {project.schedule && (
        <div className="flex items-center gap-1.5">
          <RiTimeLine size={14} className="shrink-0 text-gray-400" />
          <span>{project.schedule}</span>
        </div>
      )}
      {project.contractor && (
        <div className="flex items-center gap-1.5">
          <RiUserSettingsLine size={14} className="shrink-0 text-gray-400" />
          <span className="truncate">{project.contractor}</span>
        </div>
      )}
    </div>
  )
}
