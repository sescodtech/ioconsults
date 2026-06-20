export default function CTA() {
  return (
    <section className="border-t hairline bg-white">
      <div className="mx-auto max-w-[680px] px-6 lg:px-10 py-24 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-medium text-ink tracking-tight leading-tight">
          Ready to Build a
          <br />
          <span className="italic text-brass">High-Performance Culture?</span>
        </h2>
        <p className="mt-5 text-[15.5px] text-slate-light leading-relaxed font-light">
          Your people are your most powerful asset. Let&rsquo;s design the
          systems and culture that unlock their full potential.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#ioc-contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-button text-white text-sm font-bold px-7 py-3.5 shadow-[0_6px_22px_rgba(61,36,144,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(61,36,144,0.45)] transition-all"
          >
            Book a Consultation
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#ioc-services"
            className="inline-flex items-center gap-2 rounded-lg border hairline text-ink text-sm font-semibold px-7 py-3.5 hover:border-brass hover:text-brass hover:bg-mist transition-all"
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
