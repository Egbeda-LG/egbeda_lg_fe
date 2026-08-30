"use server"

import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js"

import {
  ApiError,
  getApiErrorMessage,
  messagesApi,
  uploadsApi,
  type ContactMessagePayload,
} from "@/lib/api"
import {
  ATTACHMENT_CONTENT_TYPES,
  UPLOAD_HOST,
} from "@/modules/contact/contact.constants"

/**
 * `POST /uploads/presigned-url` is admin-authenticated, so residents can only
 * attach a photo when the council has given this site a token to present.
 * Without one the form hides the control rather than offering an upload that
 * cannot succeed.
 */
export async function uploadsEnabled() {
  return Boolean(process.env.EGBEDA_API_TOKEN)
}

export type AttachmentUpload =
  | { ok: true; uploadUrl: string; fileUrl: string }
  | { ok: false; message: string }

/**
 * Hands the browser a one-time URL to PUT the photo straight to S3, plus the
 * public URL to store on the message.
 */
export async function createAttachmentUpload(
  fileName: string,
  contentType: string
): Promise<AttachmentUpload> {
  const token = process.env.EGBEDA_API_TOKEN

  if (!token) {
    return { ok: false, message: "Attachments are not available right now." }
  }

  if (!ATTACHMENT_CONTENT_TYPES.includes(contentType as never)) {
    return { ok: false, message: "Attach a JPG, PNG or WebP image." }
  }

  try {
    const presigned = await uploadsApi.createPresignedUrl(
      {
        file_name: fileName,
        content_type: contentType,
        folder: "messages",
      },
      token
    )

    return {
      ok: true,
      uploadUrl: presigned.upload_url,
      fileUrl: presigned.file_url,
    }
  } catch (error) {
    console.error(
      "[contact] presigned upload failed:",
      getApiErrorMessage(error)
    )

    return {
      ok: false,
      message: "We could not prepare the upload. Please try again.",
    }
  }
}

export type ContactFormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
  /** Public URL of an uploaded photo, when the resident attached one. */
  photoUrl?: string
}

export type ContactFormResult =
  | { ok: true }
  | {
      ok: false
      message: string
      /** Keyed by form field, so the UI can mark the offending inputs. */
      fieldErrors?: Partial<Record<keyof ContactFormValues, string>>
    }

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * The API validates types but not emptiness — `first_name: ""` is accepted — so
 * the rules residents actually care about are enforced here, where they cannot
 * be bypassed by disabling JavaScript.
 */
function validate(values: ContactFormValues) {
  const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {}

  if (!values.firstName?.trim())
    fieldErrors.firstName = "First name is required"
  if (!values.lastName?.trim()) fieldErrors.lastName = "Last name is required"
  if (!values.subject?.trim()) fieldErrors.subject = "Subject is required"

  const message = values.message?.trim() ?? ""

  if (!message) {
    fieldErrors.message = "Message is required"
  } else if (message.length < 10) {
    fieldErrors.message = "Please give us a little more detail"
  }

  const email = values.email?.trim() ?? ""

  if (!email) {
    fieldErrors.email = "Email address is required"
  } else if (!EMAIL.test(email)) {
    fieldErrors.email = "Enter a valid email address"
  }

  /*
   * The form's phone input hands back E.164 and defaults to Nigeria, but the
   * client is not the authority - a submission that skipped it is re-checked
   * here against the same rules.
   */
  const phone = values.phone?.trim() ?? ""

  if (!phone) {
    fieldErrors.phone = "Phone number is required"
  } else if (!isValidPhoneNumber(phone, "NG")) {
    fieldErrors.phone = "Enter a valid phone number"
  }

  /*
   * The API accepts any URL here, so the host is pinned to the council's own
   * bucket. Otherwise the form would let anyone put an arbitrary link in front
   * of staff reading the inbox.
   */
  const photoUrl = values.photoUrl?.trim()

  if (photoUrl) {
    let host: string | undefined

    try {
      host = new URL(photoUrl).host
    } catch {
      host = undefined
    }

    if (host !== UPLOAD_HOST) {
      fieldErrors.photoUrl = "That attachment could not be verified."
    }
  }

  return fieldErrors
}

/**
 * Sends a resident's enquiry to the council.
 *
 * Runs on the server so the browser never talks to the API host directly —
 * no CORS, no API origin in the client bundle, and the payload is validated
 * before it leaves.
 */
export async function submitContactMessage(
  values: ContactFormValues
): Promise<ContactFormResult> {
  const fieldErrors = validate(values)

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please correct the highlighted fields.",
      fieldErrors,
    }
  }

  // The API runs `forbidNonWhitelisted`, so only known keys may be sent, and
  // `phone` is omitted entirely rather than sent blank.
  const payload: ContactMessagePayload = {
    first_name: values.firstName.trim(),
    last_name: values.lastName.trim(),
    email: values.email.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  }

  // Stored in E.164 (+234…), so the council can dial it from anywhere.
  const phone = values.phone.trim()

  payload.phone = parsePhoneNumber(phone, "NG")?.number ?? phone

  const photoUrl = values.photoUrl?.trim()

  if (photoUrl) payload.photo_url = photoUrl

  try {
    await messagesApi.create(payload)

    return { ok: true }
  } catch (error) {
    if (error instanceof ApiError) {
      console.error("[contact] submission failed:", error.message)

      return {
        ok: false,
        message:
          error.status === 400
            ? error.message
            : "We could not send your message just now. Please try again, or call the council directly.",
      }
    }

    console.error("[contact] submission failed:", error)

    return {
      ok: false,
      message:
        "We could not send your message just now. Please try again, or call the council directly.",
    }
  }
}
