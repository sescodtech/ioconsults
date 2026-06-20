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

const fieldClass =
  "w-full rounded-lg border hairline bg-mist px-4 py-3 text-[14px] text-ink placeholder:text-slate-light/70 outline-none transition-colors focus:border-brass focus:bg-white focus:ring-4 focus:ring-brass/10";

const labelClass =
  "block text-[11px] font-bold uppercase tracking-widest2 text-slate-light mb-2";

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
      <div className="rounded-2xl border hairline bg-mist p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-button text-2xl text-white">
          ✓
        </div>
        <p className="mt-5 font-display text-2xl text-ink">Message sent.</p>
        <p className="mt-2 text-sm text-slate">
          Thank you — we&rsquo;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brass underline decoration-brass/40 underline-offset-4 hover:decoration-brass"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot field — hidden from real users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Chukwuemeka"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Obi"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Meridian Group Ltd"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="hello@company.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%234A4560%22%20stroke-width%3D%222.5%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10`}
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
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your organization and what you're looking to achieve…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand-button text-white text-[15px] font-bold px-7 py-3.5 shadow-[0_6px_22px_rgba(45,27,105,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(45,27,105,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
