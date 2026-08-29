import React from "react"

export interface AboutIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number
  className?: string
  strokeWidth?: number
}

/**
 * Our Mission Icon
 * Purposeful target compass with directional momentum arrow and focus beacon.
 */
export function MissionIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: AboutIconProps) {
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
      {/* Outer focus ring with subtle fill */}
      <circle cx="12" cy="12" r="8.75" fill="currentColor" fillOpacity="0.12" />
      <circle cx="12" cy="12" r="8.75" />

      {/* Axis crosshairs */}
      <path d="M12 2v2.5" />
      <path d="M12 19.5V22" />
      <path d="M2 12h2.5" />
      <path d="M19.5 12H22" />

      {/* Inner bullseye */}
      <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="12" cy="12" r="3.5" />

      {/* Directional mission arrow */}
      <path d="M12 12l4.5-4.5" />
      <path d="M13.5 7.5H16.5V10.5" />
    </svg>
  )
}

/**
 * Our Vision Icon
 * Forward-looking foresight aperture with illuminated beacon and radiant horizon rays.
 */
export function VisionIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: AboutIconProps) {
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
      {/* Vision Eye Contour with fill */}
      <path
        d="M2 12s3.8-6.5 10-6.5 10 6.5 10 6.5-3.8 6.5-10 6.5S2 12 2 12z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M2 12s3.8-6.5 10-6.5 10 6.5 10 6.5-3.8 6.5-10 6.5S2 12 2 12z" />

      {/* Iris ring */}
      <circle cx="12" cy="12" r="4.25" fill="currentColor" fillOpacity="0.22" />
      <circle cx="12" cy="12" r="4.25" />

      {/* Pupil & Light Glint */}
      <circle cx="12" cy="12" r="1.75" fill="currentColor" />

      {/* Radiant Foresight Rays atop */}
      <path d="M12 2.5v1.5" />
      <path d="M7 4.2l.9 1.2" />
      <path d="M17 4.2l-.9 1.2" />
    </svg>
  )
}

/**
 * Core Values Icon
 * Shield of ethical governance with radiant 5-pointed excellence star.
 */
export function CoreValuesIcon({
  size = 20,
  className = "",
  strokeWidth = 1.75,
  ...props
}: AboutIconProps) {
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
      {/* Shield frame with fill */}
      <path
        d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M12 2.5L4 6v5.8c0 5.4 3.4 10.3 8 11.7 4.6-1.4 8-6.3 8-11.7V6l-8-3.5z" />

      {/* Five-pointed integrity star inside */}
      <polygon
        points="12 6.5 13.5 10 17 10.5 14.5 13 15 16.5 12 14.8 9 16.5 9.5 13 7 10.5 10.5 10"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <polygon points="12 6.5 13.5 10 17 10.5 14.5 13 15 16.5 12 14.8 9 16.5 9.5 13 7 10.5 10.5 10" />
    </svg>
  )
}

export type AboutIconComponent = React.ComponentType<AboutIconProps>
