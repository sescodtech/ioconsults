# IOCONSULTS — Website Rebuild

A from-scratch, custom-coded rebuild of the IOCONSULTS marketing site,
replacing a previous WordPress installation that was compromised (spam links
injected into the footer and an internal page, pointing to gambling sites —
a classic sign of a hacked WP install, likely via an outdated
plugin/theme or leaked admin credentials).

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

## Outstanding item: the logo

The original logo file (`WEBSITE-LOGO-1.png`) could not be retrieved — my
sandbox doesn't have outbound internet access to download binary files
directly, and the old site wasn't loading reliably. I built a text-based
wordmark placeholder (`components/Logo.tsx`) styled to the brand palette so
the site isn't blocked on this.

To swap in the real logo once you have the file:
1. Drop the image into `/public/` (e.g. `/public/logo.png`)
2. Replace the contents of `components/Logo.tsx` with a Next.js `<Image>`
   tag pointing at it (ask me and I'll wire this up for you in a minute).

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
  sitemap.ts            /sitemap.xml
  robots.ts             /robots.txt
  our-story/page.tsx    Our Story page (placeholder copy — see note below)
  api/contact/route.ts  Contact form handler (Resend)
components/
  Header.tsx, Hero.tsx, Services.tsx, About.tsx, Process.tsx,
  Contact.tsx, ContactForm.tsx, Footer.tsx, WhatsAppButton.tsx, Logo.tsx
```

## Note on "Our Story" page content

The old site's "Our Story" page was still showing generic Elementor
placeholder text ("Welcome to our website. We are dedicated to providing
quality content and services...") — it appears this page was never actually
written, and it also had a spam link injected. So nothing real was lost in
the rebuild; the new page has clearly-marked placeholder copy for you to
replace with your actual founding story.
