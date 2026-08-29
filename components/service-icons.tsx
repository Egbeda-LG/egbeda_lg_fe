import React from "react"

export interface ServiceIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number
  className?: string
  strokeWidth?: number
}

/**
 * Marriage Registry & Civil Union Icon
 * Intersecting wedding rings with civic seal ribbon.
 */
export function ServiceMarriageIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Certificate / Registry Scroll background */}
      <path
        d="M5 3.5h14a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 5 3.5z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      {/* Registry Certificate Lines */}
      <path d="M7 7.5h10" />
      <path d="M7 10.5h6" />
      {/* Interlinked Marriage Rings */}
      <circle
        cx="9.5"
        cy="15"
        r="2.75"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <circle cx="9.5" cy="15" r="2.75" />
      <circle cx="14" cy="15" r="2.75" />
    </svg>
  )
}

/**
 * Business Premises, Permits & SME Trade Icon
 * Enterprise briefcase with verified commerce seal and upward growth.
 */
export function ServiceBusinessPermitIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Briefcase frame */}
      <rect
        x="3"
        y="6.5"
        width="18"
        height="14"
        rx="2.5"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <rect x="3" y="6.5" width="18" height="14" rx="2.5" />
      {/* Handle */}
      <path d="M8.5 6.5V4a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v2.5" />
      {/* Horizontal divider */}
      <path d="M3 12h18" />
      {/* Center permit lock */}
      <rect
        x="10.5"
        y="10.5"
        width="3"
        height="3"
        rx="0.75"
        fill="currentColor"
      />
      {/* Growth arrow badge */}
      <path d="M15 17.5l2.5-2.5m0 0h-2m2 0v2" />
    </svg>
  )
}

/**
 * Birth, Death & Age Attestation Certificates Icon
 * Official government certificate with civic star seal and attested stamp.
 */
export function ServiceCertificateIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Paper document with folded corner */}
      <path
        d="M14 2.5H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.5L14 2.5z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M14 2.5H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.5L14 2.5z" />
      <path d="M14 2.5V8.5h6" />
      {/* Document Text lines */}
      <path d="M8 11.5h8" />
      <path d="M8 14.5h5" />
      {/* Official Government Seal */}
      <circle
        cx="14.5"
        cy="16.5"
        r="2.25"
        fill="currentColor"
        fillOpacity="0.22"
      />
      <circle cx="14.5" cy="16.5" r="2.25" />
      <path
        d="M14.5 18.75l-1 2.25 1-.75 1 .75-1-2.25z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

/**
 * Waste Management & Refuse Sanitation Icon
 * Eco disposal receptacle with purification cycle and clean sparkle.
 */
export function ServiceWasteSanitationIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Bin Body */}
      <path
        d="M5 7.5l1.2 12.3a2 2 0 0 0 2 1.7h7.6a2 2 0 0 0 2-1.7L19 7.5"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path d="M5 7.5l1.2 12.3a2 2 0 0 0 2 1.7h7.6a2 2 0 0 0 2-1.7L19 7.5" />
      {/* Lid & Handle */}
      <path d="M3 7.5h18" />
      <path d="M9 7.5V4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
      {/* Clean leaf / recycle motif on bin */}
      <path d="M10 12v5" />
      <path d="M14 12v5" />
      {/* Hygiene Sparkle */}
      <path
        d="M18.5 3l.4.8.8.4-.8.4-.4.8-.4-.8-.8-.4.8-.4.4-.8z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

/**
 * Environmental & Health Inspection Icon
 * Verification shield with hygiene checkmark and magnifying loupe.
 */
export function ServiceHealthInspectionIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Shield frame */}
      <path
        d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z" />
      {/* Inspection checklist marks */}
      <path d="M8.5 9h3" />
      <path d="M8.5 12h2" />
      {/* Verified Checkmark Badge */}
      <circle cx="14" cy="13" r="3.25" fill="currentColor" fillOpacity="0.18" />
      <circle cx="14" cy="13" r="3.25" />
      <path d="M12.5 13l1 1 2-2" />
    </svg>
  )
}

/**
 * Education, Schools & Scholarships Icon
 * Knowledge mortarboard and open literacy book.
 */
export function ServiceEducationIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Mortarboard Diamond */}
      <polygon
        points="12 3 2.5 7.5 12 12 21.5 7.5"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M12 3L2.5 7.5l9.5 4.5 9.5-4.5L12 3z" />
      <path d="M6 10v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" />
      <path d="M19.5 8.5v5a1 1 0 1 1-2 0v-5" />
      {/* Open book at bottom */}
      <path d="M5 19c2-1 4.5-1 7 1 2.5-2 5-2 7-1" />
    </svg>
  )
}

/**
 * Healthcare, Clinics & Maternal Immunization Icon
 * Medical pulse heartbeat with public health cross and protective shield.
 */
export function ServiceHealthcareIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Protective Heart */}
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      {/* Heartbeat pulse */}
      <path d="M3.5 12h3.5l1.5-3.5 2.5 7 2-4.5 1.5 2h5.5" />
    </svg>
  )
}

/**
 * Market Stalls, Shops & Commercial Allocation Icon
 * Traditional municipal trading stall awning and storefront.
 */
export function ServiceMarketStallIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Store roof canopy */}
      <polygon
        points="3 4 21 4 19.5 10 4.5 10"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M3 4h18l-1.5 6H4.5L3 4z" />
      {/* Canopy scalloped ridges */}
      <path d="M4.5 10c1 1.2 2.5 1.2 3.5 0 1 1.2 2.5 1.2 3.5 0 1 1.2 2.5 1.2 3.5 0 1 1.2 2.5 1.2 3.5 0" />
      {/* Storefront walls */}
      <path d="M5 11.5v8.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8.5" />
      {/* Counter door / shop window */}
      <rect
        x="8.5"
        y="14"
        width="7"
        height="7"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <rect x="8.5" y="14" width="7" height="7" />
    </svg>
  )
}

/**
 * Town Hall, Housing & Public Facilities Booking Icon
 * Community hall with civic entrance arches and roof pediment.
 */
export function ServiceTownHallIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Hall Structure */}
      <polygon
        points="12 2.5 2.5 9 2.5 21 21.5 21 21.5 9"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M2.5 9L12 2.5 21.5 9v12h-19V9z" />
      {/* Central Archway entrance */}
      <path
        d="M9 21v-5a3 3 0 0 1 6 0v5"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path d="M9 21v-5a3 3 0 0 1 6 0v5" />
      {/* Hall Window Rose */}
      <circle cx="12" cy="8.5" r="2" />
    </svg>
  )
}

/**
 * Heavy Equipment, Grading & Municipal Logistics Icon
 * Civil machinery loader with transport gear.
 */
export function ServiceTransportIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Truck Cab & Chassis */}
      <path
        d="M3 16V6a1 1 0 0 1 1-1h9v11H3z"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path d="M3 16V6a1 1 0 0 1 1-1h9v11H3z" />
      <path d="M13 9h4.5l2.5 3.5V16H13V9z" />
      {/* Wheels */}
      <circle cx="7" cy="18.5" r="2.5" fill="currentColor" fillOpacity="0.25" />
      <circle cx="7" cy="18.5" r="2.5" />
      <circle
        cx="17"
        cy="18.5"
        r="2.5"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <circle cx="17" cy="18.5" r="2.5" />
      {/* Connecting axis */}
      <path d="M9.5 18.5h5" />
      <path d="M19.5 18.5H21" />
      <path d="M3 18.5h1.5" />
    </svg>
  )
}

/**
 * Tenement Rates, Local Taxes & Fiscal Levies Icon
 * Official treasury coin ledger with receipt voucher and currency badge.
 */
export function ServiceRevenueTaxIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Card / Ledger Base */}
      <rect
        x="3"
        y="4.5"
        width="18"
        height="15"
        rx="3"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <rect x="3" y="4.5" width="18" height="15" rx="3" />
      {/* Currency Coin Medal */}
      <circle cx="12" cy="12" r="3.75" />
      <path d="M12 10v4" />
      <path d="M10.5 11.2h3" />
      <path d="M10.5 12.8h3" />
      {/* Receipt dots */}
      <path d="M6 8h1" />
      <path d="M17 8h1" />
    </svg>
  )
}

/**
 * Default / General Municipal Citizen Service Icon
 * Official council service seal with verified civic checkmark.
 */
export function ServiceDefaultIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Civic Crest Shield */}
      <path
        d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z" />
      {/* Service Star / Checkmark */}
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export type ServiceIconComponent = React.ComponentType<ServiceIconProps>

/**
 * Service rule mapping patterns
 */
export const SERVICE_ICON_RULES: [RegExp, ServiceIconComponent][] = [
  [/marriage|registry|civil|wedding/i, ServiceMarriageIcon],
  [
    /business|permit|trade|sme|commerce|licence|license/i,
    ServiceBusinessPermitIcon,
  ],
  [/birth|death|certificate|age|attestation/i, ServiceCertificateIcon],
  [/waste|sanitation|refuse|cleaning/i, ServiceWasteSanitationIcon],
  [
    /environment|health inspect|hygiene|inspection/i,
    ServiceHealthInspectionIcon,
  ],
  [/education|school|scholarship|student|bursary/i, ServiceEducationIcon],
  [
    /health|clinic|medical|hospital|immuniz|vaccin|maternal/i,
    ServiceHealthcareIcon,
  ],
  [/market|stall|shop|store|kiosk/i, ServiceMarketStallIcon],
  [/hall|housing|building|property|venue|facility/i, ServiceTownHallIcon],
  [
    /bulldozer|vehicle|equipment|truck|transport|logistics/i,
    ServiceTransportIcon,
  ],
  [/rate|levy|revenue|tax|finance|fee|tenement/i, ServiceRevenueTaxIcon],
]

export function resolveServiceIcon(
  name: string,
  department?: string
): ServiceIconComponent {
  const haystack = `${name} ${department ?? ""}`
  const match = SERVICE_ICON_RULES.find(([pattern]) => pattern.test(haystack))
  return match ? match[1] : ServiceDefaultIcon
}
