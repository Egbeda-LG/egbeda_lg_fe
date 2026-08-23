import React from "react"

export function ContactMapIllustration() {
  return (
    <div className="relative flex h-56 w-full items-center justify-center overflow-hidden bg-[#16212D]">
      {/* Map Grid / Streets Vector Background */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background dark fill */}
        <rect width="400" height="220" fill="#16212D" />

        {/* Road Network Lines */}
        <path
          d="M-20 40 Q 80 70, 180 30 T 420 50"
          stroke="#2A3B4C"
          strokeWidth="12"
          fill="none"
        />
        <path
          d="M 50 -10 Q 120 90, 160 230"
          stroke="#2A3B4C"
          strokeWidth="10"
          fill="none"
        />
        <path
          d="M 320 -10 Q 300 110, 360 230"
          stroke="#2E4357"
          strokeWidth="14"
          fill="none"
        />
        <path
          d="M 120 120 C 180 140, 240 180, 420 180"
          stroke="#243343"
          strokeWidth="8"
          fill="none"
        />

        {/* Street Name Labels */}
        <text
          x="125"
          y="150"
          fill="#526A80"
          fontSize="8"
          fontFamily="sans-serif"
          transform="rotate(35, 125, 150)"
        >
          Nakia Rd
        </text>
        <text
          x="330"
          y="100"
          fill="#526A80"
          fontSize="8"
          fontFamily="sans-serif"
          transform="rotate(-75, 330, 100)"
        >
          Airport Road
        </text>

        {/* Pins / Points of Interest */}
        {/* Marker 1: Femi Ezekiel */}
        <g transform="translate(180, 50)">
          <circle cx="0" cy="0" r="6" fill="#3B82F6" opacity="0.3" />
          <circle cx="0" cy="0" r="4" fill="#60A5FA" />
          <text
            x="-35"
            y="-8"
            fill="#94A3B8"
            fontSize="7"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Femi Ezekiel
          </text>
          <text
            x="-35"
            y="0"
            fill="#94A3B8"
            fontSize="6"
            fontFamily="sans-serif"
          >
            Photography
          </text>
        </g>

        {/* Marker 2: Main EGBEDA Secretariat */}
        <g transform="translate(200, 120)">
          <circle cx="0" cy="0" r="14" fill="#3B82F6" opacity="0.2" />
          <circle cx="0" cy="0" r="8" fill="#1D4ED8" />
          <rect x="-3" y="-3" width="6" height="6" fill="#FFFFFF" rx="1" />
        </g>

        {/* Marker 3: Wiggle Lounge */}
        <g transform="translate(340, 130)">
          <circle cx="0" cy="0" r="5" fill="#D97706" opacity="0.4" />
          <circle cx="0" cy="0" r="3" fill="#F59E0B" />
          <text
            x="8"
            y="2"
            fill="#FBBF24"
            fontSize="7"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Wiggle
          </text>
          <text x="8" y="9" fill="#FBBF24" fontSize="6" fontFamily="sans-serif">
            lounge
          </text>
        </g>
      </svg>

      {/* Center Highlight Overlay Badge */}
      <div className="absolute z-10 text-center">
        <span className="rounded-full border border-blue-500/30 bg-[#16212D]/80 px-3 py-1 font-heading text-sm font-extrabold tracking-widest text-white uppercase backdrop-blur-xs">
          EGBEDA
        </span>
      </div>
    </div>
  )
}
