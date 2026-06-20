import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ioconsults.com.ng"),
  title: {
    default: "IOCONSULTS — Strategic HR Consulting, Lagos",
    template: "%s | IOCONSULTS",
  },
  description:
    "A strong culture is not a slogan. It is a performance engine. IOCONSULTS is a strategic HR consulting firm helping organizations build the people systems and cultures that fuel lasting success.",
  openGraph: {
    title: "IOCONSULTS — Strategic HR Consulting",
    description: "A strong culture is not a slogan. It is a performance engine.",
    url: "https://ioconsults.com.ng",
    siteName: "IOCONSULTS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IOCONSULTS — Strategic HR Consulting",
    description: "A strong culture is not a slogan. It is a performance engine.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${plexMono.variable}`}>
      <body className="font-body bg-bone text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
