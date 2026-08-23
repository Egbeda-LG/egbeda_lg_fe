import React from "react"
import Image from "next/image"
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiTiktokFill,
} from "@remixicon/react"

export function ManagementTeamSection() {
  const teamMembers = [
    {
      name: "Dr. (Alhaja) Ayo Monsurat Alaga",
      title: "Head of Local Government Administration",
      description:
        "Provides strategic leadership and coordinates the administrative of the local government.",
      photo: "/images/team-alaga.jpg",
    },
    {
      name: "Mr. Hammed Lateef Gbolagade",
      title: "Director Finance & Supplies",
      description:
        "Oversees financial management, budgeting, procurement, and accountability.",
    },
    {
      name: "Mrs Adekunle Oladipupo",
      title: "Director of Admin and General Services",
      description:
        "Manages personnel, office administration, and general support services.",
    },
    {
      name: "Mr. Abiola Adebayo",
      title: "Director Budget, Planning Research and Statistics",
      description:
        "Leads budgeting, planning, research, and data-driven policy development.",
    },
    {
      name: "Mrs. Baale Victoria Adekunbi",
      title: "Director of Agriculture and Natural Resources",
      description:
        "Promotes sustainable agriculture and the effective management of natural resources.",
    },
    {
      name: "Mr. Omolewo A.G.",
      title: "Director Finance & Budget",
      description:
        "Ensures sound budgeting, financial reporting, and fiscal compliance.",
    },
    {
      name: "Engineer Clement Ayoade",
      title: "Director of Works and Housing",
      description:
        "Supervises public works, infrastructure maintenance, and housing development.",
      isPlaceholder: true,
    },
    {
      name: "Dr, Oyedare Elizabeth",
      title: "Director of Primary Healthcare",
      description:
        "Coordinates quality primary healthcare services and community health programs.",
      isPlaceholder: true,
    },
    {
      name: "Mrs Ilugbaro Bosede Kehinde",
      title: "Director Education and Social Services",
      description:
        "Supports education, social welfare, and community development initiatives.",
    },
    {
      name: "Mr Wasiu Oladapo Olufemi",
      title: "Internal Auditor",
      description:
        "Ensures transparency through independent audits and effective internal controls.",
    },
    {
      name: "Mrs Carew Sherifat Jumoke",
      title: "Information Officer",
      description:
        "Oversees public information, media relations, and government communications.",
    },
  ]

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Team Members 3-Column Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white shadow-xs transition-all duration-300 hover:shadow-md"
            >
              {/* Photo Area */}
              <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-[#E5ECEE] sm:h-72">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Standard Silhouette Avatar matching screenshot */
                  <div className="flex h-full w-full items-end justify-center bg-[#D4DFE2] pt-8">
                    <div className="flex h-44 w-44 flex-col items-center justify-end">
                      {/* Head Circle */}
                      <div className="mb-2 h-20 w-20 rounded-full bg-white shadow-2xs" />
                      {/* Shoulders Dome */}
                      <div className="h-20 w-36 rounded-t-full bg-white shadow-2xs" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content Box */}
              <div className="flex flex-1 flex-col items-center justify-between space-y-2.5 p-6 text-center">
                <div className="w-full space-y-1.5">
                  {/* Name */}
                  <h3 className="font-heading text-base leading-snug font-extrabold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-lg">
                    {member.name}
                  </h3>

                  {/* Title / Role */}
                  <div className="font-heading text-[11px] font-extrabold tracking-wider text-[#D9A300] uppercase">
                    {member.title}
                  </div>

                  {/* Bio / Description */}
                  <p className="mx-auto max-w-xs pt-1 font-sans text-xs leading-relaxed text-[#6A7181]">
                    {member.description}
                  </p>
                </div>

                {/* Social Icons Row */}
                <div className="flex items-center justify-center gap-2 pt-3">
                  <a
                    href="#facebook"
                    aria-label="Facebook"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF7E6] text-[#D9A300] transition-colors hover:bg-[#D9A300] hover:text-white"
                  >
                    <RiFacebookFill size={12} />
                  </a>
                  <a
                    href="#twitter"
                    aria-label="Twitter X"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF7E6] text-[#D9A300] transition-colors hover:bg-[#D9A300] hover:text-white"
                  >
                    <RiTwitterXFill size={12} />
                  </a>
                  <a
                    href="#instagram"
                    aria-label="Instagram"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF7E6] text-[#D9A300] transition-colors hover:bg-[#D9A300] hover:text-white"
                  >
                    <RiInstagramLine size={12} />
                  </a>
                  <a
                    href="#tiktok"
                    aria-label="TikTok"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF7E6] text-[#D9A300] transition-colors hover:bg-[#D9A300] hover:text-white"
                  >
                    <RiTiktokFill size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
