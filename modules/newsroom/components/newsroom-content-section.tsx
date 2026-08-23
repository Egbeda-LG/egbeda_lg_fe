"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

export function NewsroomContentSection() {
  const [activeCategory, setActiveCategory] = useState("All News")

  const categories = [
    "All News",
    "Infrastructure",
    "Health",
    "Education",
    "Environment",
    "Security",
    "Events & Ceremonies",
    "Government & Administration",
    "Community Development",
    "Arts, Culture & Tourism",
    "Public Notice",
    "Economy",
  ]

  const featuredArticle = {
    category: "EVENT AND CEREMONIES",
    date: "JAN 30, 2026",
    title:
      "Egbeda LG Chairman, Sanda Sikiru, Leads Vibrant Carnival Procession As Oyo State Celebrates 50th Anniversary",
    excerpt:
      "The streets of Ibadan came alive with color and music as the Executive Chairman of Egbeda Local Govt and Chairman of the Association of Local Government of Nigeria (ALGON) Oyo State chapter, Hon. Sanda Sikiru Oyedele LAJUE, led ....",
    image: "/images/news-featured-carnival.jpg",
    href: "/newsroom/egbeda-lg-chairman-sanda-sikiru-leads-vibrant-carnival-procession",
  }

  const topRightArticles = [
    {
      category: "PROJECT",
      date: "MAR 11, 2026",
      title: "Renovated Multipurpose Hall in Egbeda",
      excerpt:
        "Oyo ALGON Chairman, Sanda Sikiru, Commissions Renovated Multipurpose Hall, Renames Facility After Oyo First Lady",
      image: "/images/landmark-marriage-registry.jpg",
      href: "#news-top-1",
    },
    {
      category: "EDUCATION",
      date: "MAR 18, 2026",
      title: "Sanda Oyedele support education with ₦2m equipment for TESCOM",
      excerpt:
        "In a renewed commitment educational advancement, the Chairman of Egbeda Local Government, Hon. Sanda Sikiru, has once again...",
      image: "/images/news-school-campaign.jpg",
      href: "#news-top-2",
    },
    {
      category: "EMPOWERMENT",
      date: "MAR 27, 2026",
      title:
        "Sanda Sikiru, rewards party loyalty with electric motorcycles for PDP..",
      excerpt:
        "In a strategic move to strengthen grassroots mobilization and reward party loyalty, the Executive Chairman of Egbeda Local Government...",
      image: "/images/project-cash-empowerment-1.jpg",
      href: "#news-top-3",
    },
  ]

  const gridArticles = [
    {
      category: "EDUCATION",
      date: "FEB 18, 2026",
      title:
        "Anti-Cultism Campaign to Egbeda Schools, Free WAEC/JAMB Initiative",
      excerpt:
        "The administration of Hon. Sikiru Sanda, through Operation Campus Storm (O.C.S.), organized a comprehensive anti-cultism campaign.",
      image: "/images/news-school-campaign.jpg",
      href: "#news-1",
    },
    {
      category: "ROAD CONSTRUCTION",
      date: "FEB 16, 2026",
      title: "Agoro–Darinbo–Alalubosa Link Road Advances As Sanda Lajue...",
      excerpt:
        "The road construction project, handled by Messrs AB Bond and Habitat Limited under the leadership of Engr. Akinkunmi AbdulAfis Ajisafe FNSE, has m...",
      image: "/images/project-road-construction.jpg",
      href: "#news-2",
    },
    {
      category: "HEALTH",
      date: "JAN 29, 2026",
      title: "Hon. Sanda Leads Free Medical Outreach To Grassroots.",
      excerpt:
        "The Egbeda local govt organized a day free Medical Outreach to Grassroots held at Alakia/Olode Primary Health Care Centre and Alakia pr...",
      image: "/images/news-medical-outreach.jpg",
      href: "#news-3",
    },
    {
      category: "COMMUNITY DEVELOPMENT",
      date: "NOV 28, 2025",
      title: "Egbeda LG Boss Sanda Approves ₦500,000 For Replacement Of St...",
      excerpt:
        "The Executive Chairman of Egbeda Local Govt, Hon. Sikiru Oyedele Sanda, has approved the sum of ₦500,000 for the immediate replacement of...",
      image: "/images/project-security.jpg",
      href: "#news-4",
    },
    {
      category: "CASH EMPOWERMENT",
      date: "FEB 26, 2026",
      title: "Hon. Sanda Disburses Development Funds To CDA's,",
      excerpt:
        "The Executive Chairman of Egbeda Local Govt Hon Sikiru Oyedele has commenced the 2026...",
      image: "/images/news-cda-funds.jpg",
      href: "#news-5",
    },
    {
      category: "EVENTS & CEREMONIES",
      date: "DEC 25, 2025",
      title: "Hon Sanda Presents official Vehicles to Egbeda LG Staff",
      excerpt:
        "The Executive Chairman of Egbeda Local Government, Hon. Sanda, has presented official vehicles to key management staff of the council.",
      image: "/images/project-security.jpg",
      href: "#news-6",
    },
    {
      category: "GRASSROOTS INFRASTRUCTURE",
      date: "DEC 5, 2025",
      title: "Hon. Sanda Flags Off Agoro Junction–Nigerian Breweries Road",
      excerpt:
        "Development in Egbeda Local Government has received another boost as the Executive Chairman, Hon. Sanda Oyedele Sikiru officially b...",
      image: "/images/news-road-flagoff.jpg",
      href: "#news-7",
    },
    {
      category: "POLITICS",
      date: "DEC 31, 2025",
      title:
        "Egbeda's Sanda rated most performing council chairman in Oyo State",
      excerpt:
        "Hon. Sanda Sikiru Oyedele, the Chairman of Egbeda Local Govt, has been recognized as the most performing council chairman in Oyo State",
      image: "/images/news-featured-carnival.jpg",
      href: "#news-8",
    },
    {
      category: "COMMUNITY DEVELOPMENT",
      date: "DEC 14, 2026",
      title: "Hon. Sanda bags excellence award For community development.",
      excerpt:
        "Hon. Sanda express profound gratitude to the community development association and the royal group for the recognition. He reaffirmed...",
      image: "/images/news-school-campaign.jpg",
      href: "#news-9",
    },
    {
      category: "HEALTH",
      date: "FEB 13, 2026",
      title: "Mrs. Sanda Hosts Women's Health Outreach, Free Medical Test",
      excerpt:
        "The wife of the Executive Chairman of Egbeda Local Government, Mrs Monsurat Sanda, organized a comprehensive women health medical outreach.",
      image: "/images/news-medical-outreach.jpg",
      href: "#news-10",
    },
  ]

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-12 md:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-8">
        {/* Filter Categories Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#7A1F33] text-white shadow-xs"
                  : "border border-[#7A1F331A] bg-white text-[#7A1F33] hover:bg-[#FFF7F8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Section Grid: Left Main Featured + Right 3 List */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Featured Main Article Card */}
          <div className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all hover:shadow-md lg:col-span-6">
            <div>
              {/* Featured Image */}
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-80">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Category & Date */}
              <div className="mb-2 flex items-center gap-2 text-xs">
                <span className="text-[11px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                  {featuredArticle.category}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-[11px] font-medium text-[#6A7181]">
                  {featuredArticle.date}
                </span>
              </div>

              {/* Title */}
              <h2 className="mb-3 font-heading text-xl leading-snug font-extrabold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-2xl">
                {featuredArticle.title}
              </h2>

              {/* Excerpt */}
              <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                {featuredArticle.excerpt}
              </p>
            </div>

            {/* Read More Link */}
            <div>
              <Link
                href={featuredArticle.href}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-2 sm:text-sm"
              >
                <span>Read more</span>
                <RiArrowRightLine size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Top List Items */}
          <div className="space-y-6 lg:col-span-6">
            {topRightArticles.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-start gap-5 rounded-2xl border border-gray-100/90 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center"
              >
                {/* Thumbnail Image */}
                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-44">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 180px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  {/* Category & Date */}
                  <div className="mb-1 flex items-center gap-2 text-xs">
                    <span className="text-[10px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                      {item.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[10px] font-medium text-[#6A7181]">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-1.5 line-clamp-2 font-heading text-sm leading-snug font-bold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-base">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mb-2 line-clamp-2 font-sans text-xs leading-relaxed text-[#6A7181]">
                    {item.excerpt}
                  </p>

                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-1.5"
                  >
                    <span>Read more</span>
                    <RiArrowRightLine size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Grid of 10 Articles */}
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
          {gridArticles.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-start gap-5 rounded-2xl border border-gray-100/90 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center"
            >
              {/* Thumbnail Image */}
              <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-44">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 180px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                {/* Category & Date */}
                <div className="mb-1 flex items-center gap-2 text-xs">
                  <span className="text-[10px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                    {item.category}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[10px] font-medium text-[#6A7181]">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-1.5 line-clamp-2 font-heading text-sm leading-snug font-bold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-base">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-2 line-clamp-2 font-sans text-xs leading-relaxed text-[#6A7181]">
                  {item.excerpt}
                </p>

                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-1.5"
                >
                  <span>Read more</span>
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
