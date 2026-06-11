"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2 } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-brand-light rounded-lg border border-brand">
        <CheckCircle2 className="text-brand mb-4" size={48} />
        <h3 className="font-heading font-bold text-2xl text-charcoal uppercase mb-2">
          Message Sent!
        </h3>
        <p className="text-charcoal-mid text-sm">
          Thank you for reaching out. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-1">
          Full Name <span className="text-brand">*</span>
        </label>
        <input
          type="text"
          placeholder="Your full name"
          {...register("name", { required: "Full name is required" })}
          className="w-full border border-gray-border rounded px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-brand transition-colors"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-1">
          Email Address <span className="text-brand">*</span>
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          className="w-full border border-gray-border rounded px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-brand transition-colors"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-1">Phone</label>
        <input
          type="tel"
          placeholder="+92 300 0000000"
          {...register("phone")}
          className="w-full border border-gray-border rounded px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-brand transition-colors"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-1">
          Subject <span className="text-brand">*</span>
        </label>
        <select
          {...register("subject", { required: "Please select a subject" })}
          className="w-full border border-gray-border rounded px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors bg-white"
        >
          <option value="">Select a subject...</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Spare Parts">Spare Parts</option>
          <option value="O&M">O&M</option>
          <option value="AMC">AMC</option>
          <option value="Overhauling">Overhauling</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-1">
          Message <span className="text-brand">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Describe your requirements..."
          {...register("message", { required: "Message is required" })}
          className="w-full border border-gray-border rounded px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-brand transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-semibold py-3 px-6 rounded transition-colors duration-200"
      >
        <Send size={16} />
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
