import React from "react"
import Image from "next/image"
import { RiMapPinLine } from "@remixicon/react"

export function ProjectsContentSection() {
  const projects = [
    {
      title: "Food bank initiative",
      location: "Egbeda Central",
      description:
        "Food bank initiative to cushion effect of economic hardship and inflation in Egbeda local government",
      status: "COMPLETED",
      image: "/images/project-food-bank.jpg",
    },
    {
      title: "Egbeda Flood Control Channel",
      location: "Egbeda Main Road",
      description:
        "Dredging of stream to avoid flood water submerged in Egbeda local government",
      status: "COMPLETED",
      image: "/images/project-flood-control.jpg",
    },
    {
      title: "Cash Empowerment",
      location: "Egbeda Central",
      description:
        "Presentation of cheque to Egbeda community development council (CDC) members",
      status: "COMPLETED",
      image: "/images/project-cash-empowerment-1.jpg",
    },
    {
      title: "Egbeda Joint Security Network",
      location: "Egbeda Central",
      description:
        "Provision of operational motorcycles and security logistics to local joint security team.",
      status: "COMPLETED",
      image: "/images/project-security.jpg",
    },
    {
      title: "Agoro Junction–Nigerian Breweries Road Construction",
      location: "Agoro Junction",
      description:
        "Road widening, box culverts and asphalt paving along industrial belt.",
      status: "COMPLETED",
      image: "/images/project-road-construction.jpg",
    },
    {
      title: "Renovated Multipurpose Hall Commissioning",
      location: "Egbeda Secretariat",
      description:
        "Commissioning and dedication of renovated multipurpose hall by Oyo ALGON Chairman.",
      status: "COMPLETED",
      image: "/images/landmark-marriage-registry.jpg",
    },
  ]

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100/90 bg-white shadow-xs transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Image + Status Pill */}
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-md bg-[#059669] px-3 py-1 text-[10px] font-extrabold tracking-widest text-white uppercase shadow-xs">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="space-y-3 p-6">
                  <h3 className="font-heading text-lg leading-snug font-extrabold text-[#131313] transition-colors group-hover:text-[#7A1F33]">
                    {project.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7A1F33]">
                    <RiMapPinLine
                      size={14}
                      className="shrink-0 text-[#7A1F33]"
                    />
                    <span>{project.location}</span>
                  </div>

                  {/* Description */}
                  <p className="pt-1 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
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
