"use client";

import { useState, FormEvent } from "react";

const SERVICES = [
  "People and Culture Transformation",
  "Recruitment",
  "Performance Management",
  "Compensation and Benefit Management",
  "General HR Advisory and Support",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot check — bots fill every field, humans never see this one
    if (data.website) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border hairline bg-forest/5 p-8 text-center">
        <p className="font-display text-2xl text-forest">Message sent.</p>
        <p className="mt-2 text-sm text-ink/70">
          Thank you — we&rsquo;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-forest underline decoration-brass/40 underline-offset-4 hover:decoration-brass"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field — hidden from real users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-xs font-mono uppercase tracking-widest2 text-slate mb-2">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full border-0 border-b hairline bg-transparent py-2.5 text-ink focus:outline-none focus:border-brass transition-colors"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-mono uppercase tracking-widest2 text-slate mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full border-0 border-b hairline bg-transparent py-2.5 text-ink focus:outline-none focus:border-brass transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-xs font-mono uppercase tracking-widest2 text-slate mb-2">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full border-0 border-b hairline bg-transparent py-2.5 text-ink focus:outline-none focus:border-brass transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest2 text-slate mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border-0 border-b hairline bg-transparent py-2.5 text-ink focus:outline-none focus:border-brass transition-colors"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-mono uppercase tracking-widest2 text-slate mb-2">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full border-0 border-b hairline bg-transparent py-2.5 text-ink focus:outline-none focus:border-brass transition-colors"
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest2 text-slate mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full border-0 border-b hairline bg-transparent py-2.5 text-ink focus:outline-none focus:border-brass transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-lg bg-brand-button text-white text-sm font-bold px-7 py-3.5 shadow-[0_6px_22px_rgba(45,27,105,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(45,27,105,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
        {status !== "loading" && <span aria-hidden="true">→</span>}
      </button>
    </form>
  );
}
