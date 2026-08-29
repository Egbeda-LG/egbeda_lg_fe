import React from "react"

/**
 * The Oyo State anthem, reproduced exactly as the council supplied it.
 *
 * Left without Yoruba tone marks on purpose: the text was given in plain
 * spelling, and adding diacritics to an official anthem would mean guessing at
 * words the council has not written that way. If the marked-up version is
 * wanted, it should come from the council rather than be inferred here.
 */
const STANZAS: string[][] = [
  [
    "Asiwaju ni wa, Asiwaju ni wa",
    "Asiwaju ni wa, Asiwaju ni wa",
    "Ipo Asiwaju leledumare fun wa ni ipinle Oyo",
  ],
  [
    "Ipinle Oyo e je ka segiri",
    "Omo Oyo ka te pa wa mo se",
    "Ka ba 'ra wa soro",
    "Ka so ododo",
    "Ka sohun to to, to dara nigba gbogbo",
    "nibi gbogbo fun ipinle Oyo",
  ],
  [
    "Ko ni rehin o loju mi ko ni rehin o",
    "Ko ni rehin o nigba temi ko ni rehin o",
    "Emi a sohun to to, to dara nigba gbogbo",
    "Nibi gbogbo fun ipinle Oyo",
  ],
  ["Asiwaju ni wa, Asiwaju ni wa", "Asiwaju ni wa", "A ... Siwaju ni waaaa."],
]

export function AnthemSection() {
  return (
    <section
      id="anthem"
      className="relative overflow-hidden border-t border-b border-gray-100 bg-white py-16 md:py-24"
    >
      {/* Warm wash behind the verses, so the block reads as ceremonial */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,163,0,0.10),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
        {/* Pill Badge */}
        <div>
          <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
            OYO STATE
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-4 font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
          Oyo State Anthem
        </h2>

        {/* Gold rule */}
        <div className="mx-auto mt-5 h-0.5 w-16 rounded-full bg-[#D9A300]" />

        {/*
          Marked as Yoruba so screen readers and translation tools do not read
          the verses as English.
        */}
        <div
          lang="yo"
          className="mt-10 space-y-8 font-heading text-base leading-loose font-bold text-[#131313] sm:text-lg"
        >
          {STANZAS.map((stanza, index) => (
            <p key={index}>
              {stanza.map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  {lineIndex < stanza.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
