# IOCONSULTS — Website

A custom-coded Next.js rebuild of the IOCONSULTS marketing site, replacing a
previous WordPress installation that was compromised (spam links injected
into the footer and an internal page, pointing to gambling sites — a classic
sign of a hacked WP install, likely via an outdated plugin/theme or leaked
admin credentials).

## Why this stack is safer

- **No admin panel, no login screen, no database.** The whole site is
  pre-rendered at build time (static pages) plus a single serverless
  function for the contact form. There is no `/wp-admin` for anyone to
  brute-force, no plugin ecosystem to exploit, no PHP to patch.
- **No file uploads, no user-generated content stored on the server.**
  Nothing for an attacker to write to.
- Security headers (`X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`) are set in `next.config.js`.
- The contact form has server-side validation, a honeypot field, and basic
  rate limiting, and never trusts client input.

## Brand

- Colors: deep purple/violet gradient (`#2D1B69` → `#3D2490` → `#6B3FCE`),
  accent purple `#5533B5`, lavender highlight `#C4A8FF`, ink text `#1A1530`.
  All defined as Tailwind tokens in `tailwind.config.ts`.
- Type: Playfair Display (headings), Plus Jakarta Sans (body), IBM Plex Mono
  (small labels/eyebrows).
- Logo: pulled live from Cloudinary in `components/Logo.tsx`. To change it,
  update the `LOGO_URL` constant in that file.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Resend for transactional email (contact form)
- Deploy target: Vercel (recommended) or any Node host

## Local setup

```bash
npm install
cp .env.example .env.local
# then edit .env.local and add your real RESEND_API_KEY
npm run dev
```

Visit http://localhost:3000

## Required: Resend setup (for the contact form to actually send email)

1. Create a free account at https://resend.com
2. Get an API key from https://resend.com/api-keys and put it in
   `RESEND_API_KEY` in `.env.local` (and later in your hosting provider's
   environment variables).
3. **Important — sender domain:** until you verify `ioconsults.com.ng` as a
   sending domain inside Resend (Resend → Domains → Add Domain → add the DNS
   records they give you to your registrar), you must keep
   `CONTACT_FROM_EMAIL=onboarding@resend.dev`. Once the domain is verified,
   switch it to something like `noreply@ioconsults.com.ng` for a fully
   branded sender address.
4. `CONTACT_TO_EMAIL` is where form submissions land — defaults to
   `contact@ioconsults.com.ng`.

## Deployment (recommended: Vercel)

1. Push this project to a **new, clean** GitHub repository — don't reuse
   anything from the old WordPress hosting.
2. Import the repo at https://vercel.com/new
3. Add the environment variables (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`,
   `CONTACT_FROM_EMAIL`) in Vercel's Project Settings → Environment Variables.
4. Deploy.
5. In Vercel → Project Settings → Domains, add `ioconsults.com.ng` and
   `www.ioconsults.com.ng`, then update your DNS at your domain registrar
   to point to Vercel (Vercel will show you the exact A/CNAME records).

## Cleaning up the old hosting

Since the previous WordPress install was compromised, before/alongside
pointing the domain elsewhere:

1. **Change your hosting/cPanel password and your domain registrar
   password** now — the breach may have come from leaked credentials, not
   just a plugin vulnerability.
2. **Do not just delete `wp-content`.** Malware can hide in `.htaccess`,
   cron jobs, or other unexpected files. The safest move is to wipe
   `public_html` entirely (after taking a backup if you want to forensically
   review it later) once you've confirmed the new site is live elsewhere.
3. Consider whether you still need the old hosting account at all once
   DNS points to Vercel — if not, cancel/close it to remove the attack
   surface completely.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Home page (assembles all sections)
  globals.css          Design tokens, base styles
  sitemap.ts           /sitemap.xml
  robots.ts            /robots.txt
  our-story/page.tsx   Our Story page
  api/contact/route.ts Contact form handler (Resend)
components/
  Header.tsx, Hero.tsx, Services.tsx, About.tsx, Process.tsx,
  Testimonial.tsx, CTA.tsx, Contact.tsx, ContactForm.tsx, Footer.tsx,
  WhatsAppButton.tsx, Logo.tsx
```

## Note on "Our Story" page content

The copy on `/our-story` is written to be publish-ready and consistent with
the rest of the site, but it was authored during this rebuild rather than
sourced from the founders directly — review it and adjust any specifics
(founding year, specific milestones, names) before treating it as final.
