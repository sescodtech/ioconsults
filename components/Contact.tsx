import ContactForm from "./ContactForm";

const WHATSAPP_NUMBER = "2348029641714";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello IOCONSULTS, I'd like to discuss your HR services."
);

export default function Contact() {
  return (
    <section id="ioc-contact" className="border-t hairline">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="section-mark mb-5">Contact Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest tracking-tight">
            Let&rsquo;s start the{" "}
            <span className="italic text-brass">conversation</span>
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            Whether you&rsquo;re looking to transform your culture, strengthen
            your team, or enhance your people processes, we&rsquo;d love to hear
            from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-8">
            <div className="border-t hairline pt-6">
              <p className="text-xs font-mono uppercase tracking-widest2 text-slate mb-1">
                Phone
              </p>
              <a href="tel:+2348029641714" className="text-lg text-forest hover:text-brass transition-colors">
                +234 802 964 1714
              </a>
            </div>
            <div className="border-t hairline pt-6">
              <p className="text-xs font-mono uppercase tracking-widest2 text-slate mb-1">
                Email
              </p>
              <a
                href="mailto:contact@ioconsults.com.ng"
                className="text-lg text-forest hover:text-brass transition-colors break-all"
              >
                contact@ioconsults.com.ng
              </a>
            </div>
            <div className="border-t hairline pt-6">
              <p className="text-xs font-mono uppercase tracking-widest2 text-slate mb-1">
                Location
              </p>
              <p className="text-lg text-forest">Lagos, Nigeria</p>
            </div>
            <div className="border-t hairline pt-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-forest underline decoration-brass/40 underline-offset-4 hover:decoration-brass"
              >
                +234 802 964 1714 — Chat on WhatsApp →
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 border hairline p-7 md:p-10 bg-bone">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
