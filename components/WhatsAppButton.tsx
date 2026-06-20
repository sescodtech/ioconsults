"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "2348029641714";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello IOCONSULTS, I visited your website and I'd like to learn more about your HR consulting services."
);

export default function WhatsAppButton() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      <div className="hidden sm:block max-w-[220px] rounded-xl rounded-br-sm bg-white text-ink text-sm px-4 py-3 shadow-lg relative border hairline">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-forest text-white text-xs rounded-full"
        >
          ✕
        </button>
        <p>
          <span className="font-bold text-forest">Hi there! 👋</span>
          <br />
          Chat with us on WhatsApp — we respond fast.
        </p>
      </div>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-lg hover:scale-105 transition-transform"
      >
        <span
          aria-hidden="true"
          className="absolute -inset-1 rounded-full bg-whatsapp/25 motion-safe:animate-ping"
        />
        <svg viewBox="0 0 24 24" fill="currentColor" className="relative z-10 w-7 h-7" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.04 0C5.408 0 .04 5.367.04 12c0 2.117.553 4.184 1.604 6.014L0 24l6.144-1.611A11.96 11.96 0 0 0 12.04 24c6.633 0 12-5.367 12-12s-5.367-12-12-12zm0 21.818a9.78 9.78 0 0 1-4.99-1.366l-.358-.213-3.65.957.974-3.56-.233-.366A9.78 9.78 0 0 1 2.182 12c0-5.434 4.424-9.818 9.858-9.818 5.434 0 9.818 4.384 9.818 9.818 0 5.434-4.384 9.818-9.818 9.818z" />
        </svg>
      </a>
    </div>
  );
}
