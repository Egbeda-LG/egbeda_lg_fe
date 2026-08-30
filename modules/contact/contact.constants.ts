/**
 * The upload rules, enforced by the Server Action and handed to the form as
 * props by the contact page.
 *
 * Imported only by server modules. A `"use server"` file may export nothing but
 * async functions, and when the client imported these from here too, the
 * bundler folded this module into `contact.actions.ts` and re-exported them
 * from it - breaking that rule at runtime.
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
