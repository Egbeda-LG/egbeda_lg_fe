"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  RiMapPinLine,
  RiMailLine,
  RiTimeLine,
  RiUpload2Line,
  RiArrowRightLine,
  RiCheckLine,
} from "@remixicon/react"
import { ContactMapIllustration } from "./contact-map-illustration"

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactContentSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
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
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log("Contact form submitted:", data)
    setSubmitted(true)
    reset()

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
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
                Egbeda, Oyo State
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
                egbedalocalgovernment@gmail.com
              </h3>
              <p className="mt-0.5 font-sans text-xs text-[#6A7181]">
                Send us an email through this address
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
                Mon–Fri · 8am–4pm
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
                    Our citizen service desk will respond within 24 hours.
                  </p>
                </div>
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
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs transition-colors focus:border-[#7A1F33] focus:outline-none sm:text-sm"
                  />
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

              {/* Attachment Dropzone */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#6A7181]">
                  Attachment (optional)
                </label>
                <div className="cursor-pointer space-y-1 rounded-2xl border-2 border-dashed border-gray-200 bg-[#FAF8F9]/50 p-6 text-center transition-colors hover:border-[#7A1F33]">
                  <RiUpload2Line size={24} className="mx-auto text-[#7A1F33]" />
                  <p className="text-xs font-bold text-[#131313]">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-[11px] text-[#6A7181]">
                    PDF, DOC, DOCX, or Images (Max 5MB per file, up to 5 files)
                  </p>
                </div>
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
                <div className="flex items-center justify-between pt-1">
                  <span className="font-medium">Oyo Emergency</span>
                  <span className="text-sm font-bold text-[#D9A300] sm:text-base">
                    112
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="font-medium">LASEMA Rapid Response</span>
                  <span className="text-sm font-bold text-[#D9A300] sm:text-base">
                    767
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="font-medium">Council Security Desk</span>
                  <span className="text-sm font-bold text-[#D9A300] sm:text-base">
                    +234 801 000 5678
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="font-medium">Fire Service (Ibadan)</span>
                  <span className="text-sm font-bold text-[#D9A300] sm:text-base">
                    +234 807 111 4200
                  </span>
                </div>
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
                <p className="font-sans text-xs text-[#6A7181]">
                  Iwo Road, Egbeda, Ibadan, Oyo State.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
