import ContactForm from "./ContactForm";

const WHATSAPP_NUMBER = "2348029641714";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello IOCONSULTS, I'd like to discuss your HR services."
);

export default function Contact() {
  return (
    <section id="ioc-contact" className="border-t hairline bg-mist">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-24 md:py-28">
        <div className="max-w-xl">
          <span className="section-mark">Contact Us</span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl text-ink tracking-tight leading-tight">
            Let&rsquo;s Start the{" "}
            <span className="italic text-brass">Conversation</span>
          </h2>
          <p className="mt-5 text-slate leading-relaxed text-[15.5px]">
            Whether you&rsquo;re looking to transform your culture, strengthen
            your team, or enhance your people processes, we&rsquo;d love to hear
            from you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] border border-brass/15 bg-white text-lg">
                📞
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest2 text-brass mb-1">
                  Phone
                </p>
                <a href="tel:+2348029641714" className="text-[15px] font-medium text-ink hover:text-brass transition-colors">
                  +234 802 964 1714
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] border border-brass/15 bg-white text-lg">
                📧
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest2 text-brass mb-1">
                  Email
                </p>
                <a
                  href="mailto:contact@ioconsults.com.ng"
                  className="text-[15px] font-medium text-ink hover:text-brass transition-colors break-all"
                >
                  contact@ioconsults.com.ng
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] border border-brass/15 bg-white text-lg">
                🌍
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest2 text-brass mb-1">
                  Location
                </p>
                <p className="text-[15px] font-medium text-ink">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] border border-whatsapp/20 bg-[#E8FAF0]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest2 text-brass mb-1">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-bold text-whatsapp hover:underline"
                >
                  +234 802 964 1714 — Chat Now
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 rounded-2xl border hairline bg-white p-7 md:p-10 shadow-[0_8px_40px_rgba(45,27,105,0.07)]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
