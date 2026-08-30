"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"
import {
  RiMapPinLine,
  RiMailLine,
  RiTimeLine,
  RiArrowRightLine,
  RiCheckLine,
  RiCloseLine,
  RiErrorWarningLine,
  RiImageAddLine,
} from "@remixicon/react"
import { ContactMapIllustration } from "./contact-map-illustration"
import type { ContactAndSupport } from "@/lib/api"
import {
  createAttachmentUpload,
  submitContactMessage,
  type ContactFormValues,
} from "@/modules/contact/contact.actions"

export type ContactFormData = ContactFormValues

interface ContactContentSectionProps {
  /** The council's published contact details, when settings have been saved. */
  contact?: Partial<ContactAndSupport>
  /** False when the council has not enabled resident uploads. */
  attachmentsEnabled?: boolean
  /**
   * The upload rules, handed down by the server rather than imported here.
   *
   * The Server Action enforces the same two values, and a `"use server"` module
   * may only export async functions. When both sides imported them from one
   * module, the bundler folded that module into the action and re-exported the
   * constants from it, which fails that rule at runtime.
   */
  attachmentContentTypes: readonly string[]
  attachmentMaxBytes: number
}

export function ContactContentSection({
  contact,
  attachmentsEnabled = false,
  attachmentContentTypes,
  attachmentMaxBytes,
}: ContactContentSectionProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [attachment, setAttachment] = useState<File | null>(null)
  const [attachmentError, setAttachmentError] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  /*
   * Bumping this remounts the file input, which is how its value gets cleared.
   * A ref would be read during render via handleSubmit(onSubmit), which the
   * React Compiler rules disallow.
   */
  const [fileInputKey, setFileInputKey] = useState(0)

  const previewUrl = useMemo(
    () => (attachment ? URL.createObjectURL(attachment) : null),
    [attachment]
  )

  // Object URLs hold the file in memory until they are revoked.
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  function chooseAttachment(file: File | null) {
    setAttachmentError(null)

    if (!file) {
      setAttachment(null)
      return
    }

    if (!attachmentContentTypes.includes(file.type)) {
      setAttachmentError("Attach a JPG, PNG or WebP image.")
      return
    }

    if (file.size > attachmentMaxBytes) {
      setAttachmentError(
        `That image is larger than ${Math.round(attachmentMaxBytes / 1024 / 1024)}MB.`
      )
      return
    }

    setAttachment(file)
  }

  function clearAttachment() {
    setAttachment(null)
    setAttachmentError(null)
    setFileInputKey((key) => key + 1)
  }

  /**
   * Asks the server for a one-time URL, then puts the file straight to S3 so
   * the image never travels through this app.
   */
  async function uploadAttachment(file: File) {
    const presigned = await createAttachmentUpload(file.name, file.type)

    if (!presigned.ok) throw new Error(presigned.message)

    const response = await fetch(presigned.uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type },
      body: file,
    })

    if (!response.ok) {
      throw new Error("The image could not be uploaded. Please try again.")
    }

    return presigned.fileUrl
  }

  const address =
    contact?.headquater_address ?? "Egbeda Local Government Secretariat"
  const email = contact?.official_email ?? "egbedalocalgovernment@gmail.com"
  const openingHours = [contact?.weekdays, contact?.hours]
    .filter(Boolean)
    .join(" · ")

  const {
    register,
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null)

    let photoUrl: string | undefined

    if (attachment) {
      setUploading(true)

      try {
        photoUrl = await uploadAttachment(attachment)
      } catch (error) {
        setUploading(false)
        setAttachmentError(
          error instanceof Error ? error.message : "Upload failed."
        )
        return
      }

      setUploading(false)
    }

    // Posts through a Server Action, so the browser never calls the API host.
    const result = await submitContactMessage({ ...data, photoUrl })

    if (!result.ok) {
      for (const [field, message] of Object.entries(result.fieldErrors ?? {})) {
        setError(field as keyof ContactFormData, { type: "server", message })
      }

      setSubmitError(result.message)

      return
    }

    setSubmitted(true)
    reset()
    clearAttachment()

    setTimeout(() => {
      setSubmitted(false)
    }, 8000)
  }

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-12 md:py-20">
      <div className="mx-auto max-w-7xl space-y-12 px-4 md:px-8">
        {/* Top 3 Info Highlights Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Visit */}
          <div className="flex flex-col justify-between space-y-4 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FAF0E6] text-[#7A1F33]">
              <RiMapPinLine size={20} />
            </div>
            <div>
              <span className="mb-1 block text-[11px] font-extrabold tracking-widest text-[#6A7181] uppercase">
                VISIT
              </span>
              <h3 className="font-heading text-lg font-extrabold text-[#131313]">
                Local Govt Secretariat
              </h3>
              <p className="mt-0.5 font-sans text-xs text-[#6A7181]">
                {address}
              </p>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="flex flex-col justify-between space-y-4 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FAF0E6] text-[#7A1F33]">
              <RiMailLine size={20} />
            </div>
            <div>
              <span className="mb-1 block text-[11px] font-extrabold tracking-widest text-[#6A7181] uppercase">
                EMAIL
              </span>
              <h3 className="font-heading text-sm font-bold break-all text-[#131313] sm:text-base">
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </h3>
              <p className="mt-0.5 font-sans text-xs text-[#6A7181]">
                {contact?.support_email
                  ? `Support desk: ${contact.support_email}`
                  : "Send us an email through this address"}
              </p>
            </div>
          </div>

          {/* Card 3: Hours */}
          <div className="flex flex-col justify-between space-y-4 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FAF0E6] text-[#7A1F33]">
              <RiTimeLine size={20} />
            </div>
            <div>
              <span className="mb-1 block text-[11px] font-extrabold tracking-widest text-[#6A7181] uppercase">
                HOURS
              </span>
              <h3 className="font-heading text-lg font-extrabold text-[#131313]">
                {openingHours || "Mon–Fri · 8am–4pm"}
              </h3>
            </div>
          </div>
        </div>

        {/* Form & Side Cards Section */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: React Hook Form Container */}
          <div className="space-y-6 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-sm sm:p-10 lg:col-span-7">
            {/* Header Pill & Title */}
            <div className="space-y-2">
              <div>
                <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                  MESSAGE FORM
                </span>
              </div>
              <h2 className="font-heading text-2xl font-extrabold text-[#131313] sm:text-3xl">
                Send us a message.
              </h2>
              <p className="font-sans text-xs text-[#6A7181] sm:text-sm">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>

            {/* Success Toast Banner */}
            {submitted && (
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-800 sm:text-sm">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <RiCheckLine size={16} />
                </div>
                <div>
                  <p className="font-bold">
                    Thank you! Your message has been sent.
                  </p>
                  <p className="text-xs text-emerald-700">
                    Our citizen service desk has received it and will be in
                    touch.
                  </p>
                </div>
              </div>
            )}

            {/* Failure Banner */}
            {submitError && (
              <div
                role="alert"
                className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs text-red-800 sm:text-sm"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                  <RiErrorWarningLine size={16} />
                </div>
                <p className="font-medium">{submitError}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* First Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#131313]">
                    First Name<span className="text-[#7A1F33]">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="given-name"
                    placeholder="Enter your first name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs transition-colors focus:border-[#7A1F33] focus:outline-none sm:text-sm"
                  />
                  {errors.firstName && (
                    <p className="text-[11px] font-medium text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#131313]">
                    Last Name (Surname)<span className="text-[#7A1F33]">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="family-name"
                    placeholder="Enter your last name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs transition-colors focus:border-[#7A1F33] focus:outline-none sm:text-sm"
                  />
                  {errors.lastName && (
                    <p className="text-[11px] font-medium text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#131313]">
                    Email address<span className="text-[#7A1F33]">*</span>
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="johndoe@gmail.com"
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs transition-colors focus:border-[#7A1F33] focus:outline-none sm:text-sm"
                  />
                  {errors.email && (
                    <p className="text-[11px] font-medium text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#131313]">
                    Phone Number<span className="text-[#7A1F33]">*</span>
                  </label>
                  <div
                    className="phone-field"
                    data-invalid={errors.phone ? "true" : "false"}
                  >
                    <Controller
                      name="phone"
                      control={control}
                      rules={{
                        required: "Phone number is required",
                        validate: (value) =>
                          isValidPhoneNumber(value ?? "") ||
                          "Enter a valid phone number",
                      }}
                      render={({ field }) => (
                        <PhoneInput
                          {...field}
                          // Nigeria is preselected, and the field takes the
                          // national format residents actually type ("0801 234
                          // 5678") while handing the form back E.164.
                          defaultCountry="NG"
                          autoComplete="tel"
                          placeholder="801 234 5678"
                          value={field.value ?? ""}
                          onChange={(value) => field.onChange(value ?? "")}
                        />
                      )}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] font-medium text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#131313]">
                  Subject<span className="text-[#7A1F33]">*</span>
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder='Briefly describe the topic of your inquiry (e.g., "Service Request", "General Question")'
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs transition-colors focus:border-[#7A1F33] focus:outline-none sm:text-sm"
                />
                {errors.subject && (
                  <p className="text-[11px] font-medium text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#131313]">
                  Message<span className="text-[#7A1F33]">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide detailed information about your inquiry. Minimum 10 characters, maximum 2000 characters."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters required",
                    },
                  })}
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-xs transition-colors focus:border-[#7A1F33] focus:outline-none sm:text-sm"
                />
                {errors.message && (
                  <p className="text-[11px] font-medium text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Attachment — only when the council has enabled uploads */}
              {attachmentsEnabled && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#6A7181]">
                    Photo (optional)
                  </label>

                  {attachment && previewUrl ? (
                    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-[#FAF8F9]/60 p-3">
                      {/* Local preview; the file has not been uploaded yet */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={previewUrl}
                        alt={attachment.name}
                        className="h-16 w-16 shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold text-[#131313]">
                          {attachment.name}
                        </p>
                        <p className="text-[11px] text-[#6A7181]">
                          {(attachment.size / 1024 / 1024).toFixed(1)}MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={clearAttachment}
                        aria-label="Remove photo"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#6A7181] transition-colors hover:bg-[#7A1F33]/10 hover:text-[#7A1F33]"
                      >
                        <RiCloseLine size={18} />
                      </button>
                    </div>
                  ) : (
                    <label className="flex cursor-pointer flex-col items-center gap-1 rounded-2xl border-2 border-dashed border-gray-200 bg-[#FAF8F9]/50 p-6 text-center transition-colors hover:border-[#7A1F33]">
                      <RiImageAddLine size={24} className="text-[#7A1F33]" />
                      <span className="text-xs font-bold text-[#131313]">
                        Add a photo of the issue
                      </span>
                      <span className="text-[11px] text-[#6A7181]">
                        JPG, PNG or WebP · up to 5MB
                      </span>
                      <input
                        key={fileInputKey}
                        type="file"
                        accept={attachmentContentTypes.join(",")}
                        className="sr-only"
                        onChange={(event) =>
                          chooseAttachment(event.target.files?.[0] ?? null)
                        }
                      />
                    </label>
                  )}

                  {attachmentError && (
                    <p className="text-[11px] font-medium text-red-500">
                      {attachmentError}
                    </p>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || uploading}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#7A1F33] px-6 py-3.5 text-sm font-bold text-white shadow-xs transition-all hover:bg-[#621727] disabled:opacity-70"
                >
                  <span>
                    {uploading
                      ? "Uploading photo..."
                      : isSubmitting
                        ? "Sending..."
                        : "Send Message"}
                  </span>
                  <RiArrowRightLine size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Council Secretariat Map */}
          <div className="space-y-6 lg:col-span-5">
            {/* Council Secretariat Map Box */}
            <div className="space-y-0 overflow-hidden rounded-3xl border border-gray-100/90 bg-white shadow-sm">
              {/* Dark Map Vector Illustration */}
              <ContactMapIllustration />

              <div className="space-y-1 p-6">
                <h3 className="font-heading text-base font-extrabold text-[#131313]">
                  Council Secretariat
                </h3>
                <p className="font-sans text-xs text-[#6A7181]">{address}</p>
                {contact?.google_map_link && (
                  <a
                    href={contact.google_map_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 pt-1 text-xs font-bold text-[#7A1F33] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <RiArrowRightLine size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
