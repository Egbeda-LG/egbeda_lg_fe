import React from "react"

export interface SnapshotIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number
  className?: string
  strokeWidth?: number
}

/**
 * Community Population Icon
 * Diverse civic community members united with shared civic harmony arc.
 */
export function SnapshotPopulationIcon({
  size = 24,
  className = "",
  strokeWidth = 1.75,
  ...props
}: SnapshotIconProps) {
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
      {/* Central Figure Head & Body */}
      <circle cx="12" cy="7" r="3.25" fill="currentColor" fillOpacity="0.18" />
      <circle cx="12" cy="7" r="3.25" />
      <path
        d="M6.5 20.5v-1.75a4.75 4.75 0 0 1 4.75-4.75h1.5a4.75 4.75 0 0 1 4.75 4.75v1.75"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path d="M6.5 20.5v-1.75a4.75 4.75 0 0 1 4.75-4.75h1.5a4.75 4.75 0 0 1 4.75 4.75v1.75" />

      {/* Left Figure */}
      <circle cx="5" cy="9.5" r="2.25" />
      <path d="M2 20.5v-1.25a3.75 3.75 0 0 1 3.5-3.75" />

      {/* Right Figure */}
      <circle cx="19" cy="9.5" r="2.25" />
      <path d="M22 20.5v-1.25a3.75 3.75 0 0 0-3.5-3.75" />

      {/* Community Connection Base */}
      <path d="M2 20.5h20" />
    </svg>
  )
}

/**
 * Public Schools & Educational Institutions Icon
 * Schoolhouse academy with bell tower, knowledge apex flag, open book and pillars.
 */
export function SnapshotSchoolsIcon({
  size = 24,
  className = "",
  strokeWidth = 1.75,
  ...props
}: SnapshotIconProps) {
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
      {/* School Roof with fill */}
      <polygon
        points="12 4 2.5 9 21.5 9"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M12 4L2.5 9h19L12 4z" />

      {/* School Bell Tower & Flag */}
      <path d="M12 4V1.5" />
      <path d="M12 1.5l3 1-3 1" fill="currentColor" />

      {/* Pillars */}
      <path d="M5.5 9.5v8" />
      <path d="M9.5 9.5v8" />
      <path d="M14.5 9.5v8" />
      <path d="M18.5 9.5v8" />

      {/* Entrance Door / Open Book detail at center */}
      <path
        d="M10 17.5v-4.5c0-.8.6-1.5 1.5-1.5h1c.9 0 1.5.7 1.5 1.5v4.5"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path d="M10 17.5v-4.5c0-.8.6-1.5 1.5-1.5h1c.9 0 1.5.7 1.5 1.5v4.5" />

      {/* Steps foundation */}
      <path d="M3.5 17.5h17" />
      <path d="M2 20.5h20" />
    </svg>
  )
}

/**
 * Health Centres & Primary Healthcare Clinics Icon
 * Local clinic building with prominent medical cross and protective heartbeat pulse.
 */
export function SnapshotHealthCentresIcon({
  size = 24,
  className = "",
  strokeWidth = 1.75,
  ...props
}: SnapshotIconProps) {
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
      {/* Clinic Building Frame */}
      <rect
        x="3"
        y="4"
        width="18"
        height="16.5"
        rx="2.5"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <rect x="3" y="4" width="18" height="16.5" rx="2.5" />

      {/* Medical Cross in center with fill */}
      <path
        d="M10 7.5h4v3h3v4h-3v3h-4v-3H7v-4h3v-3z"
        fill="currentColor"
        fillOpacity="0.22"
      />
      <path d="M10 7.5h4v3h3v4h-3v3h-4v-3H7v-4h3v-3z" />

      {/* Baseline */}
      <path d="M1.5 20.5h21" />

      {/* Subtle heartbeat badge accent at bottom right */}
      <path d="M15 14.5l1.2-1.5 1.2 3 1.1-2 1.5 0.5" />
    </svg>
  )
}

/**
 * Electoral Wards & Administrative Districts Icon
 * Multi-directional district signpost with ward boundaries beacon and regional marker.
 */
export function SnapshotWardsIcon({
  size = 24,
  className = "",
  strokeWidth = 1.75,
  ...props
}: SnapshotIconProps) {
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
      {/* Signpost Central Pole */}
      <path d="M12 2v19" />

      {/* Top Finial / Civic Crest */}
      <circle cx="12" cy="2.5" r="1.25" fill="currentColor" />

      {/* Top Ward Signboard (pointing right) */}
      <polygon
        points="7 5 17 5 19.5 7.5 17 10 7 10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <polygon points="7 5 17 5 19.5 7.5 17 10 7 10" />

      {/* Middle Ward Signboard (pointing left) */}
      <polygon
        points="17 11 7 11 4.5 13.5 7 16 17 16"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <polygon points="17 11 7 11 4.5 13.5 7 16 17 16" />

      {/* Signpost Base */}
      <path d="M8 21h8" />
      <path d="M10 21l2-2 2 2" />
    </svg>
  )
}

/**
 * Square Kilometres & Geographic Landmass Icon
 * Topographical terrain boundaries with precision coordinate grid and land compass.
 */
export function SnapshotLandmassIcon({
  size = 24,
  className = "",
  strokeWidth = 1.75,
  ...props
}: SnapshotIconProps) {
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
      {/* Landmass Map / Territorial boundary polygon */}
      <polygon
        points="3 5.5 9 3 15 5.5 21 3 21 18.5 15 21 9 18.5 3 21"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <polygon points="3 5.5 9 3 15 5.5 21 3 21 18.5 15 21 9 18.5 3 21" />

      {/* Map Fold Lines */}
      <path d="M9 3v15.5" />
      <path d="M15 5.5V21" />

      {/* Location / Territory Pin on center fold */}
      <circle cx="12" cy="10" r="2.2" fill="currentColor" fillOpacity="0.25" />
      <circle cx="12" cy="10" r="2.2" />
      <path d="M12 12.2v2.3" />
    </svg>
  )
}

/**
 * Staff Strength & Civil Service Workforce Icon
 * Executive administration briefcase with civil service hierarchy and verified merit seal.
 */
export function SnapshotStaffStrengthIcon({
  size = 24,
  className = "",
  strokeWidth = 1.75,
  ...props
}: SnapshotIconProps) {
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
      {/* Briefcase Body with fill */}
      <rect
        x="3"
        y="7"
        width="18"
        height="13.5"
        rx="2.5"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <rect x="3" y="7" width="18" height="13.5" rx="2.5" />

      {/* Briefcase Handle */}
      <path d="M8 7V4.5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 4.5V7" />

      {/* Cross belt straps */}
      <path d="M8 7v13.5" />
      <path d="M16 7v13.5" />

      {/* Center Lock / Badge */}
      <rect
        x="10.5"
        y="11.5"
        width="3"
        height="2.5"
        rx="0.75"
        fill="currentColor"
      />
    </svg>
  )
}

export type SnapshotIconComponent = React.ComponentType<SnapshotIconProps>
