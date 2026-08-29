"use client"

import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"
import {
  RiMapPinLine,
  RiMailLine,
  RiTimeLine,
  RiArrowRightLine,
  RiCheckLine,
  RiErrorWarningLine,
} from "@remixicon/react"
import { ContactMapIllustration } from "./contact-map-illustration"
import type { ContactAndSupport } from "@/lib/api"
import {
  submitContactMessage,
  type ContactFormValues,
} from "@/modules/contact/contact.actions"

export type ContactFormData = ContactFormValues

interface ContactContentSectionProps {
  /** The council's published contact details, when settings have been saved. */
  contact?: Partial<ContactAndSupport>
}

export function ContactContentSection({ contact }: ContactContentSectionProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const address =
    contact?.headquater_address ?? "Egbeda Local Government Secretariat"
  const email = contact?.official_email ?? "egbedalocalgovernment@gmail.com"
  const openingHours = [contact?.weekdays, contact?.hours]
    .filter(Boolean)
    .join(" · ")

  /* National emergency numbers are fixed; the council's own lines come from settings. */
  const emergencyLines = [
    { label: "Oyo Emergency", value: "112" },
    { label: "LASEMA Rapid Response", value: "767" },
    { label: "Council Emergency Line", value: contact?.emergency_line_1 },
    { label: "Alternate Council Line", value: contact?.emergency_line_2 },
  ].filter((line) => Boolean(line.value))

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

    // Posts through a Server Action, so the browser never calls the API host.
    const result = await submitContactMessage(data)

    if (!result.ok) {
      for (const [field, message] of Object.entries(result.fieldErrors ?? {})) {
        setError(field as keyof ContactFormData, { type: "server", message })
      }

      setSubmitError(result.message)

      return
    }

    setSubmitted(true)
    reset()

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

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#7A1F33] px-6 py-3.5 text-sm font-bold text-white shadow-xs transition-all hover:bg-[#621727] disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <RiArrowRightLine size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Emergency Lines & Council Secretariat Map */}
          <div className="space-y-6 lg:col-span-5">
            {/* Emergency Line Card */}
            <div className="space-y-5 rounded-3xl bg-[#7A1F33] p-6 text-white shadow-sm sm:p-8">
              <span className="block font-heading text-xs font-extrabold tracking-wider text-[#D9A300] uppercase">
                EMERGENCY LINE
              </span>

              <div className="space-y-4 divide-y divide-white/10 font-sans text-xs sm:text-sm">
                {emergencyLines.map((line, index) => (
                  <div
                    key={line.label}
                    className={`flex items-center justify-between gap-3 ${
                      index === 0 ? "pt-1" : "pt-3"
                    }`}
                  >
                    <span className="font-medium">{line.label}</span>
                    <a
                      href={`tel:${line.value}`}
                      className="text-sm font-bold text-[#D9A300] hover:underline sm:text-base"
                    >
                      {line.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

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
