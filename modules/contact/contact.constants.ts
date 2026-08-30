/**
 * Shared between the form and its Server Actions.
 *
 * These live outside `contact.actions.ts` because a `"use server"` module may
 * only export async functions — a constant there fails the build.
 */

/** Attachments are photographs of the problem being reported. */
export const ATTACHMENT_CONTENT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const

export const ATTACHMENT_MAX_BYTES = 5 * 1024 * 1024

/** S3 bucket the council's own uploads land in. */
export const UPLOAD_HOST = "egbeda-lg-uploads.s3.eu-north-1.amazonaws.com"
