import React from "react"

export interface DepartmentIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number
  className?: string
  strokeWidth?: number
}

/**
 * Administration & General Services Icon
 * Classical civic council hall facade with pediment, pillars, and civic emblem.
 */
export function AdminDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Pediment roof accent fill */}
      <polygon
        points="12 3 3 8 21 8"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="none"
      />
      {/* Pediment outline */}
      <path d="M12 3L2.5 8.2h19L12 3z" />
      {/* Top council dome / finial */}
      <path d="M12 1.5v1.5" />
      {/* Pillars */}
      <path d="M5.5 8.5v8.5" />
      <path d="M9.5 8.5v8.5" />
      <path d="M14.5 8.5v8.5" />
      <path d="M18.5 8.5v8.5" />
      {/* Foundation steps */}
      <path d="M3.5 17h17" />
      <path d="M2 20.5h20" />
      {/* Central civic star medallion */}
      <circle cx="12" cy="6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Finance, Budget, Supplies & Treasury Icon
 * Vault safe, currency growth, stacked assets & fiscal security.
 */
export function FinanceDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Vault / Card base */}
      <rect
        x="3"
        y="5"
        width="18"
        height="15"
        rx="3"
        fill="currentColor"
        fillOpacity="0.14"
      />
      {/* Secure vault / coin medallion */}
      <circle cx="12" cy="12.5" r="3.75" />
      {/* Coin / Currency symbol lines */}
      <path d="M12 10.5v4" />
      <path d="M10.5 11.7h3" />
      <path d="M10.5 13.3h3" />
      {/* Growth arrow in top-right */}
      <path d="M16.5 8.5h2.5v2.5" />
      <path d="M14.5 10.5l4.5-4.5" />
      {/* Left clasp */}
      <path d="M3 10h2" />
      <path d="M3 15h2" />
    </svg>
  )
}

/**
 * Works, Housing & Infrastructure Icon
 * Architectural drafting compass, structural framework & building foundations.
 */
export function WorksDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* House / Building structure */}
      <polygon
        points="12 2.5 3 9.5 3 21 21 21 21 9.5"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M3 9.5L12 2.5l9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11z" />
      {/* Compass hinge & legs */}
      <circle cx="12" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M11 9.5L7.5 18" />
      <path d="M13 9.5L16.5 18" />
      {/* Measurement crossbeam / girder */}
      <path d="M6.5 14.5h11" />
      {/* Entrance doorway */}
      <path d="M10 21.5v-3a2 2 0 0 1 4 0v3" />
    </svg>
  )
}

/**
 * Primary Healthcare & Medical Services Icon
 * Protective heart with medical cross and rhythmic pulse waveform.
 */
export function HealthDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Heart backing fill */}
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
        fillOpacity="0.14"
      />
      {/* Heart border */}
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      {/* Heartbeat pulse waveform */}
      <path d="M3.5 12h3.5l1.5-3.5 2.5 7 2-4.5 1.5 2h5.5" />
      {/* Medical cross accent */}
      <path d="M12 5.5v2.5" />
      <path d="M10.75 6.75h2.5" />
    </svg>
  )
}

/**
 * Agriculture, Natural Resources & Food Security Icon
 * Thriving wheat ears, fertile sprouts, and sunbeam furrow rays.
 */
export function AgricultureDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Sun rays in sky */}
      <path d="M12 2v2" />
      <path d="M6 4.5l1.2 1.2" />
      <path d="M18 4.5l-1.2 1.2" />
      <path d="M8.5 6a5 5 0 0 1 7 0" />
      {/* Central plant stem */}
      <path d="M12 21.5V8" />
      {/* Top leaf pair */}
      <path
        d="M12 11c2.5-1.5 4-3.5 4-5.5 0 0-2 0-4 2.5"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d="M12 11c-2.5-1.5-4-3.5-4-5.5 0 0 2 0 4 2.5"
        fill="currentColor"
        fillOpacity="0.18"
      />
      {/* Lower leaf pair */}
      <path
        d="M12 16c3-1 5-3.5 5-6 0 0-2.5 0-5 3"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d="M12 16c-3-1-5-3.5-5-6 0 0 2.5 0 5 3"
        fill="currentColor"
        fillOpacity="0.18"
      />
      {/* Fertile soil furrows */}
      <path d="M3 21c3-1.5 6-1.5 9 0 3-1.5 6-1.5 9 0" />
    </svg>
  )
}

/**
 * Environmental Health & Sanitation Icon
 * Protective eco-shield with purification leaf, clean droplet and freshness sparkles.
 */
export function EnvironmentDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Shield shape */}
      <path
        d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z" />
      {/* Organic leaf in center */}
      <path
        d="M12 17.5c3.2 0 5-2.2 5-5.5 0 0-3 0-5 2.5v3z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path d="M12 17.5c-2.5-1.2-3.8-3.5-3.8-5.8 0 0 2.2-.4 3.8 1.8" />
      {/* Sparkle hygiene star */}
      <path
        d="M16 6.8l.4.9.9.4-.9.4-.4.9-.4-.9-.9-.4.9-.4.4-.9z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

/**
 * Education, Social Development & Youth Icon
 * Open illumination book with rising graduation cap and torch of progress.
 */
export function EducationDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Mortarboard cap top diamond */}
      <polygon
        points="12 2.5 2 7 12 11.5 22 7"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M12 2.5L2 7l10 4.5L22 7 12 2.5z" />
      {/* Mortarboard base skullcap */}
      <path d="M6 9v4c0 1.7 2.7 3 6 3s6-1.3 6-3V9" />
      {/* Tassel */}
      <path d="M20 8v5a1 1 0 1 1-2 0V8" />
      {/* Open book at bottom */}
      <path
        d="M4 17.5c2-1 5-1 8 1 3-2 6-2 8-1v4c-2-1-5-1-8 1-3-2-6-2-8-1v-4z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M4 17.5c2-1 5-1 8 1 3-2 6-2 8-1v4c-2-1-5-1-8 1-3-2-6-2-8-1v-4z" />
      <path d="M12 18.5v4" />
    </svg>
  )
}

/**
 * Budget, Planning, Research & Statistics Icon
 * Precision planning board with trending line chart, target node and statistical bars.
 */
export function PlanningDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Analytics clipboard / grid container */}
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Data trendline */}
      <path d="M6.5 14.5l3.5-4 3 3 4.5-5.5" />
      <path d="M14.5 8h3v3" />
      {/* Target marker */}
      <circle cx="17.5" cy="8" r="1.25" fill="currentColor" stroke="none" />
      {/* Vertical statistical bars */}
      <path d="M7 18v-2" />
      <path d="M10.5 18v-4" />
      <path d="M14 18v-3" />
      <path d="M17.5 18v-6" />
    </svg>
  )
}

/**
 * Internal Audit & Compliance Icon
 * Verified oversight shield with checkmark, audit checklist & balance scales.
 */
export function AuditDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Audit shield */}
      <path
        d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z" />
      {/* Checklist items */}
      <path d="M8 8h4.5" />
      <path d="M8 11.5h3.5" />
      {/* Verified checkmark badge inside magnifying circle */}
      <circle cx="14" cy="13" r="3.25" fill="currentColor" fillOpacity="0.16" />
      <circle cx="14" cy="13" r="3.25" />
      <path d="M12.5 13l1 1 2-2" />
      <path d="M16.5 15.5l2 2" />
    </svg>
  )
}

/**
 * Information, Media & Public Relations Icon
 * Megaphone broadcaster with expanding civic communication waves & news bulletin.
 */
export function InformationDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Megaphone body */}
      <polygon
        points="3 10 7 10 13 5.5 13 18.5 7 14 3 14"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path d="M3 10h4l6-4.5v13L7 14H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" />
      {/* Handle */}
      <path d="M7 14v4a1 1 0 0 0 1 1h1" />
      {/* Sound / Broadcast waves */}
      <path d="M16 9a4.5 4.5 0 0 1 0 6" />
      <path d="M19 6.5a8 8 0 0 1 0 11" />
      {/* Broadcast center dot */}
      <circle cx="13" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Legal, Security & Chieftaincy Affairs Icon
 * Scales of justice balanced over a civic star badge.
 */
export function SecurityDepartmentIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Crest frame */}
      <path
        d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z" />
      {/* Scale balance beam & column */}
      <path d="M7.5 9h9" />
      <path d="M12 7.5v8.5" />
      <path d="M9.5 17h5" />
      {/* Left scale pan */}
      <path
        d="M6 13a1.5 1.5 0 0 0 3 0l-1.5-4L6 13z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Right scale pan */}
      <path
        d="M15 13a1.5 1.5 0 0 0 3 0l-1.5-4L15 13z"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </svg>
  )
}

/**
 * General Council / Default Municipal Department Icon
 * Egbeda Local Government civic council seal with dome, pillars and star finial.
 */
export function CouncilDefaultIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: DepartmentIconProps) {
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
      {/* Council dome */}
      <path
        d="M12 3a4.5 4.5 0 0 0-4.5 4.5h9A4.5 4.5 0 0 0 12 3z"
        fill="currentColor"
        fillOpacity="0.16"
      />
      <path d="M12 3a4.5 4.5 0 0 0-4.5 4.5h9A4.5 4.5 0 0 0 12 3z" />
      <path d="M12 1.5v1.5" />
      {/* Entablature */}
      <path d="M4.5 8.5h15" />
      {/* Columns */}
      <path d="M6.5 9.5v7" />
      <path d="M10 9.5v7" />
      <path d="M14 9.5v7" />
      <path d="M17.5 9.5v7" />
      {/* Steps */}
      <path d="M3.5 17.5h17" />
      <path d="M2 20.5h20" />
    </svg>
  )
}

export type DepartmentIconComponent = React.ComponentType<DepartmentIconProps>

/**
 * Custom rule matching for department names to their specialized custom SVG icon.
 * First match wins, with CouncilDefaultIcon as fallback.
 */
export const DEPARTMENT_ICON_RULES: [RegExp, DepartmentIconComponent][] = [
  [
    /finance|supplies|budget|treasur|revenue|account|tax|fiscal/i,
    FinanceDepartmentIcon,
  ],
  [
    /works|housing|infrastructure|transport|land|survey|engineering|building|civil/i,
    WorksDepartmentIcon,
  ],
  [
    /health|medical|primary care|phc|nursing|maternal|clinic|hospital/i,
    HealthDepartmentIcon,
  ],
  [
    /agricultur|natural resource|farm|crop|forestry|fisher|livestock|food/i,
    AgricultureDepartmentIcon,
  ],
  [
    /environment|sanitation|waste|refuse|hygiene|pollution|cleaning/i,
    EnvironmentDepartmentIcon,
  ],
  [
    /education|social|school|youth|sport|welfare|community dev|culture/i,
    EducationDepartmentIcon,
  ],
  [
    /planning|research|statistic|prs|monitoring|strategy|demograph/i,
    PlanningDepartmentIcon,
  ],
  [
    /audit|legal|compliance|inspector|justice|judiciary|due diligence/i,
    AuditDepartmentIcon,
  ],
  [
    /information|media|communication|press|public relation|pr\b|civic|broadcast/i,
    InformationDepartmentIcon,
  ],
  [
    /security|vigilante|chieftaincy|traditional|peace|boundary/i,
    SecurityDepartmentIcon,
  ],
  [
    /admin|general service|secretariat|executive|governance|management|council/i,
    AdminDepartmentIcon,
  ],
]

/**
 * Resolves a custom department icon based on the department name.
 */
export function getDepartmentIcon(name: string): DepartmentIconComponent {
  const match = DEPARTMENT_ICON_RULES.find(([pattern]) => pattern.test(name))
  return match ? match[1] : CouncilDefaultIcon
}
