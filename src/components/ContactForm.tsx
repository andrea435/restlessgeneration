"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  services: string[];
};

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm({ services }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [error, setError] = useState("");

  function updateField(field: keyof FormData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.service ||
      !formData.message.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Website enquiry: ${formData.service}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Company: ${formData.company || "Not provided"}`,
        `Email: ${formData.email}`,
        `Telephone: ${formData.phone || "Not provided"}`,
        `Service: ${formData.service}`,
        "",
        "Message:",
        formData.message,
      ].join("\n")
    );

    window.location.href =
      `mailto:restlessgenearation20@gmail.com` +
      `?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "mt-2 w-full rounded-xl border border-[#26400f]/15 bg-[#faf9f4] px-4 py-3.5 text-sm text-[#26400f] outline-none transition placeholder:text-[#536347]/40 focus:border-[#759c42] focus:bg-white focus:ring-4 focus:ring-[#8bc63f]/10";

  const labelClasses =
    "text-sm font-semibold text-[#26400f]";

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClasses}>
          Full name <span className="text-[#759c42]">*</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClasses}
            placeholder="Enter your full name"
            autoComplete="name"
          />
        </label>

        <label className={labelClasses}>
          Company
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={inputClasses}
            placeholder="Enter your company name"
            autoComplete="organization"
          />
        </label>

        <label className={labelClasses}>
          Email address <span className="text-[#759c42]">*</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClasses}
            placeholder="name@company.com"
            autoComplete="email"
          />
        </label>

        <label className={labelClasses}>
          Telephone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClasses}
            placeholder="+27"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className={`mt-5 block ${labelClasses}`}>
        Service required <span className="text-[#759c42]">*</span>
        <select
          name="service"
          value={formData.service}
          onChange={(event) => updateField("service", event.target.value)}
          className={inputClasses}
        >
          <option value="">Select a service</option>

          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <label className={`mt-5 block ${labelClasses}`}>
        Enquiry details <span className="text-[#759c42]">*</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={`${inputClasses} min-h-[160px] resize-y`}
          placeholder="Tell us about the products, services or project requirements you need assistance with."
        />
      </label>

      {error && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </div>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-[#536347]/70">
          Required fields are marked with an asterisk. Submitting the form
          will open your default email application.
        </p>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#26400f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#36591a] focus:outline-none focus:ring-4 focus:ring-[#8bc63f]/25"
        >
          Send enquiry
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}