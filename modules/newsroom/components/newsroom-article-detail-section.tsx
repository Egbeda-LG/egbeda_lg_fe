import React from "react"
import Image from "next/image"
import { RiArrowRightLine } from "@remixicon/react"

export function NewsroomArticleDetailSection() {
  const article = {
    date: "JAN 30, 2026",
    category: "EVENT AND CEREMONIES",
    title:
      "Egbeda LG Chairman, Sanda Sikiru, Leads Vibrant Carnival Procession As Oyo State Celebrates 50th Anniversary",
    image: "/images/news-featured-carnival.jpg",
    content: [
      "The streets of Ibadan came alive with color and music as the Executive Chairman of Egbeda Local Government and Chairman of the Association of Local Government of Nigeria (ALGON) Oyo State chapter, Hon. Sanda Sikiru Oyedele LAJUE, led a vibrant carnival procession to commemorate Oyo State's 50th anniversary. The event showcased the rich heritage, diversity, and resilience of Oyo State, solidifying its reputation as the true Pacesetter. The carnival parade, which featured Egbeda Local Government, highlighted the local government's commitment to progress and development, aligning with the vision of Governor Seyi Makinde's administration. Under Makinde's purposeful leadership, Oyo State continues to set benchmarks in governance, development, and inclusivity.",
      "Hon. Sanda Sikiru's leadership in the carnival procession demonstrated Egbeda Local Government's dedication to advancing the state government's vision and fostering unity, peace, and collective prosperity. The event was a testament to the local government's unwavering commitment to contributing meaningfully to Oyo State's sustained growth and greatness. The Oyo State government, led by Governor Seyi Makinde, has been instrumental in driving development and progress in the state. The 50th anniversary celebrations, which kicked off on January 26, feature a range of activities, including a symposium, cultural exhibitions, and a public lecture.",
    ],
  }

  const relatedNews = [
    {
      category: "PROJECT",
      date: "MAR 11, 2026",
      title: "Renovated Multipurpose Hall in Egbeda",
      excerpt:
        "Oyo ALGON Chairman, Sanda Sikiru, Commissions Renovated Multipurpose Hall, Renames Facility After Oyo First Lady",
      image: "/images/landmark-marriage-registry.jpg",
      href: "#news-1",
    },
    {
      category: "EDUCATION",
      date: "MAR 18, 2026",
      title: "Sanda Oyedele support education with ₦2m equipment for TESCOM",
      excerpt:
        "In a renewed commitment educational advancement, the Chairman of Egbeda Local Government, Hon. Sanda Sikiru, has once again...",
      image: "/images/news-school-campaign.jpg",
      href: "#news-2",
    },
    {
      category: "EVENTS & CEREMONIES",
      date: "DEC 25, 2025",
      title: "Hon Sanda Presents official Vehicles to Egbeda LG Staff",
      excerpt:
        "The Executive Chairman of Egbeda Local Government, Hon. Sanda, has presented official vehicles to key management staff of the council.",
      image: "/images/project-security.jpg",
      href: "#news-3",
    },
  ]

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Main Article Container */}
          <div className="space-y-6 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-sm sm:p-10 lg:col-span-7">
            {/* Category & Date Header */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.category}</span>
            </div>

            {/* Article Title */}
            <h1 className="font-heading text-2xl leading-tight font-extrabold text-[#131313] sm:text-3xl">
              {article.title}
            </h1>

            {/* Featured Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-100 shadow-2xs sm:h-96">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Paragraphs Content */}
            <div className="space-y-4 pt-2 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Related News */}
          <div className="space-y-6 lg:col-span-5">
            <h2 className="font-heading text-xl font-extrabold text-[#131313]">
              Related News
            </h2>

            <div className="space-y-5">
              {relatedNews.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-start gap-4 rounded-2xl border border-gray-100/90 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center"
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:w-36">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 150px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2 text-xs">
                      <span className="text-[10px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                        {item.category}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-[10px] font-medium text-[#6A7181]">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="mb-1.5 line-clamp-2 font-heading text-sm leading-snug font-bold text-[#131313] transition-colors group-hover:text-[#7A1F33]">
                      {item.title}
                    </h3>

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
        </div>
      </div>
    </section>
  )
}
