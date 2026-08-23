import Image, { ImageProps } from "next/image"
import React from "react"

export interface IconProps extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  size?: number
  width?: number
  height?: number
  alt?: string
  src?: ImageProps["src"]
}

export function Logo({
  size = 60,
  width,
  height,
  className,
  alt = "Egbeda Local Government Logo",
  src = "/svgs/logo.svg",
  ...props
}: IconProps) {
  const w = Number(width ?? size)
  const h = Number(height ?? size)

  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      className={className}
      {...props}
    />
  )
}

export const Icon = Logo
export default Logo
