import React from "react"
import Image from "next/image"
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiTiktokFill,
} from "@remixicon/react"

export function ExecutiveCouncilContentSection() {
  const councillors = [
    {
      name: "Hon. Alaba Abdullahi",
      role: "Councillor",
      ward: "Ward 1",
      area: "Erunmu",
    },
    {
      name: "Hon. Ajao Noah",
      role: "Councillor",
      ward: "Ward 2",
      area: "Ayede/Koloko",
    },
    {
      name: "Hon. Adedeji Saheed",
      role: "Councillor",
      ward: "Ward 3",
      area: "Owobaale",
    },
    {
      name: "Hon. Salawu Sarafadeen",
      role: "Councillor",
      ward: "Ward 4",
      area: "Ajiwogbo/Olodan",
    },
    {
      name: "Hon. Olaoye Adijat",
      role: "Councillor",
      ward: "Ward 5",
      area: "Olodo",
    },
    {
      name: "Hon Rafiu Ibrahim",
      role: "Councillor",
      ward: "Ward 6",
      area: "Monatan",
    },
    { name: "No Name", role: "Councillor", ward: "Ward 7", area: "Wakajaiye" },
    {
      name: "Hon. Raji Teslim",
      role: "Councillor",
      ward: "Ward 8",
      area: "Osegere/Awaye",
    },
    {
      name: "Hon. Arowolo Kolawole",
      role: "Councillor",
      ward: "Ward 9",
      area: "Egbeda",
    },
    {
      name: "Hon. Oluniyi Abiodun",
      role: "Councillor",
      ward: "Ward 10",
      area: "Alakia/Adegbai",
    },
    {
      name: "Hon. Olakanmi Olushola",
      role: "Councillor",
      ward: "Ward 11",
      area: "Olubadan",
    },
  ]

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Top 2 Leadership Cards */}
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Executive Chairman Card */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white shadow-xs transition-all duration-300 hover:shadow-md">
            <div className="relative flex h-72 w-full items-center justify-center overflow-hidden bg-[#131313] sm:h-80">
              <Image
                src="/images/executive-chairman.png"
                alt="Hon. Sanda Sikiru Oyedele - Executive Chairman"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <div className="flex flex-col items-center space-y-2 p-6 text-center">
              <h3 className="font-heading text-lg leading-snug font-extrabold text-[#131313] sm:text-xl">
                Hon. Sanda Sikiru Oyedele
              </h3>
              <div className="font-heading text-xs font-bold tracking-wider text-[#D9A300] uppercase">
                Executive Chairman Egbeda L/G
              </div>

              {/* Socials */}
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

          {/* Vice Chairman Card */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white shadow-xs transition-all duration-300 hover:shadow-md">
            <div className="relative flex h-72 w-full items-center justify-center overflow-hidden bg-[#1A2530] sm:h-80">
              {/* Silhouette / Portrait Photo placeholder */}
              <div className="flex h-full w-full items-end justify-center bg-[#D4DFE2] pt-8">
                <div className="flex h-48 w-48 flex-col items-center justify-end">
                  <div className="mb-2 h-24 w-24 rounded-full bg-white shadow-2xs" />
                  <div className="h-20 w-40 rounded-t-full bg-white shadow-2xs" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 p-6 text-center">
              <h3 className="font-heading text-lg leading-snug font-extrabold text-[#131313] sm:text-xl">
                Hon. Oladebo Ibrahim
              </h3>
              <div className="font-heading text-xs font-bold tracking-wider text-[#D9A300] uppercase">
                Vice Chairman
              </div>

              {/* Socials */}
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
        </div>

        {/* Councillors Table Container */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
          {/* Header Bar */}
          <div className="grid grid-cols-12 gap-4 bg-[#7A1F33] px-6 py-4.5 font-heading text-xs font-extrabold tracking-wider text-white uppercase sm:px-8">
            <div className="col-span-4 sm:col-span-3">Councillor</div>
            <div className="col-span-3 sm:col-span-3">Role</div>
            <div className="col-span-2 sm:col-span-3">Ward</div>
            <div className="col-span-3 sm:col-span-3">Area</div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-gray-100 bg-white font-sans text-xs sm:text-sm">
            {councillors.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 items-center gap-4 px-6 py-4 transition-colors hover:bg-[#FFF7F8]/60 sm:px-8"
              >
                <div className="col-span-4 font-heading font-bold text-[#131313] sm:col-span-3">
                  {item.name}
                </div>
                <div className="col-span-3 text-[#6A7181] sm:col-span-3">
                  {item.role}
                </div>
                <div className="col-span-2 font-bold text-[#7A1F33] sm:col-span-3">
                  {item.ward}
                </div>
                <div className="col-span-3 font-medium text-[#7A1F33] sm:col-span-3">
                  {item.area}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
