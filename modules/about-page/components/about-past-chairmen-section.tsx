import React from "react"

export function AboutPastChairmenSection() {
  const col1 = [
    { period: "1989", name: "HON. M.B FATUNBI (ELECTED)" },
    { period: "1989 - 1990", name: "MRS. S. O SARUMI (SOLE)" },
    { period: "1991 - 1993", name: "HON. ELDER C. WOLE OYELESE (ELECTED)" },
    { period: "1994 - 1996", name: "MAJOR MRS. MASAKU (RTD.) (CARETAKER)" },
    { period: "1997", name: "MR. ADEMOLA ADELAKUN (SOLE)" },
    { period: "1997 - 1999", name: "HON. LATE M. OYALEKE (ELECTED)" },
    { period: "1999", name: "MR. T. OJETUNDE (SOLE)" },
    { period: "1999 - 2002", name: "HON. AKINADE ALAMU (ELECTED)" },
  ]

  const col2 = [
    { period: "2002 - 2003", name: "MR. SEGUN OYEDIRAN (CARETAKER)" },
    { period: "2004 - 2006", name: "HON. CHIEF SUNBO OYEDIJO (CARETAKER)" },
    { period: "2006 - 2007", name: "HON. (ENGR.) KOLAWOLE OKE (ACT CHAIRMAN)" },
    { period: "2007", name: "HON. K.K OBISESAN (CARETAKER)" },
    { period: "2007", name: "HON. (ENGR.) KOLAWOLE OKE (CARETAKER)" },
    { period: "2007 - DEC. 2007", name: "HON. MR. WAHEED AMUZAT (CARETAKER)" },
    {
      period: "DEC. 2007 - DEC. 2010",
      name: "HON. (ENGR.) KOLAWOLE OKE (ELECTED)",
    },
    { period: "1999 - 2002", name: "HON. MUFUTAU A. OYEWO (CARETAKER)" },
  ]

  const col3 = [
    { period: "MAY 2014 - 30TH MAY 2015", name: "HON. K.K OBISESAN" },
    {
      period: "7TH MARCH 2016 - DEC. 2016",
      name: "HON. ADEMOLA ADEWUYI (CARETAKER)",
    },
    {
      period: "7TH APRIL 2017 - 14TH MAY 2018",
      name: "HON. SODIQ AKINTUNDE AKEEM (CARETAKER)",
    },
    {
      period: "14TH MAY 2018 - 29TH MAY 2019",
      name: "HON. SODIQ AKINTUNDE AKEEM (ELECTED)",
    },
    {
      period: "29TH MAY 2019 - 23RD DEC. 2019",
      name: "ALHAJA A.A ADEPOJU (H.L.G.A)",
    },
    {
      period: "23RD DEC. 2019 - 31ST JAN. 2020",
      name: "HON. SANDA SIKIRU OYEDELE (CARETAKER)",
    },
    {
      period: "31ST JAN 2020 - 17TH MARCH 2021",
      name: "HON. DOCTOR AMOS OLADELE O (CARETAKER)",
    },
    {
      period: "24TH MAY 2021 - TILL DATE",
      name: "HON. SANDA SIKIRU OYEDELE (ELECTED)",
    },
  ]

  const columns = [col1, col2, col3]

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl space-y-4">
          {/* Pill Badge */}
          <div>
            <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
              OUR PAST GOVERNMENT
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
            Past Chairmen in Egbeda Local Government
          </h2>
        </div>

        {/* 3 Columns Timeline Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="relative space-y-6">
              {col.map((item, itemIndex) => (
                <div key={itemIndex} className="group flex items-start gap-3.5">
                  {/* Timeline Dot */}
                  <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#7A1F33] transition-transform group-hover:scale-125" />

                  {/* Content */}
                  <div>
                    <span className="mb-0.5 block text-[11px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                      {item.period}
                    </span>
                    <h3 className="font-heading text-xs leading-snug font-extrabold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-sm">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
