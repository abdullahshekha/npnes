"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function EnquiryForm({ productName }: { productName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, subject: `Enquiry: ${productName}` }),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-light border border-brand rounded-lg p-6 text-center">
        <p className="font-heading font-bold text-lg text-brand uppercase mb-2">Enquiry Sent!</p>
        <p className="text-charcoal-mid text-sm">Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wide mb-1">
          Full Name *
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full border border-gray-border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand transition-colors"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wide mb-1">
          Email *
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          className="w-full border border-gray-border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand transition-colors"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wide mb-1">
          Phone
        </label>
        <input
          {...register("phone")}
          className="w-full border border-gray-border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand transition-colors"
          placeholder="+92 xxx xxxxxxx"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wide mb-1">
          Message *
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={4}
          className="w-full border border-gray-border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand transition-colors resize-none"
          placeholder="Tell us about your requirements..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded transition-colors duration-200 disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
