export default function Testimonial() {
  return (
    <section className="border-t hairline bg-mist">
      <div className="mx-auto max-w-[720px] px-6 lg:px-10 py-24 md:py-28 text-center">
        <div className="flex justify-center gap-1 text-brass text-xl" aria-hidden="true">
          ★★★★★
        </div>
        <p className="mt-7 font-display text-xl md:text-3xl font-normal italic text-ink leading-relaxed">
          &ldquo;Working with IOCONSULTS transformed not just our HR processes, but
          the way our entire leadership team thinks about people. The results
          were measurable and lasting.&rdquo;
        </p>
        <div className="mt-9 flex items-center justify-center gap-3.5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-button text-white font-display text-lg font-medium">
            CO
          </div>
          <div className="text-left">
            <div className="text-sm font-bold text-ink">Chukwuemeka Obi</div>
            <div className="mt-0.5 text-xs text-slate-light">CEO, Meridian Group Nigeria</div>
          </div>
        </div>
      </div>
    </section>
  );
}
