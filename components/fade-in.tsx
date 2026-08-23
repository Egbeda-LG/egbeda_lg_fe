"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  /** Seconds to delay the start, for staggering neighbouring blocks. */
  delay?: number
  className?: string
}

/**
 * Fades a block in — with a small upward drift — the first time it scrolls
 * into view. Children stay server-rendered; only this wrapper is a client
 * component. Readers who ask for reduced motion get the fade without the
 * drift, via the `MotionConfig` in `components/theme-provider.tsx`.
 *
 * `amount: "some"` rather than a fraction on purpose: a section taller than a
 * few viewports can never show a given percentage of itself at once, so a
 * fractional threshold would leave it stuck at `opacity: 0` forever.
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
