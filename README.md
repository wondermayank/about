# About Wondermayank (about.wondermayank.in)

Official interactive 3D portfolio and profile of **Wondermayank** (Mayank | [@wondermayankx](https://x.com/wondermayankx)), accessible live at [about.wondermayank.in](https://about.wondermayank.in/) and hosted on **Cloudflare**.

## Overview
A high-performance, visually rich portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**, showcasing the creative engineering journey, platforms, and projects crafted by Wondermayank.

## Ecosystem Platforms
- **Portfolio / About**: [about.wondermayank.in](https://about.wondermayank.in/) (Hosted on Cloudflare)
- **Main Portal**: [wondermayank.in](https://wondermayank.in/)
- **Contact**: [wondermayank.in/contact.html](https://wondermayank.in/contact.html)
- **ThunderStudy**: [thunderstudy.indevs.in](https://thunderstudy.indevs.in/) — Open educational repository, study notes, and revision tools for students in India.
- **ThunderTest**: [thundertest.indevs.in](https://thundertest.indevs.in/) — High-fidelity Computer-Based Test (CBT) mock exam engine replicating the official NTA candidate interface.
- **Projects Hub**: [project.wondermayank.in](https://project.wondermayank.in/) — Directory of 100+ public tools, anime discovery modules, and creative web utilities.
- **Paletteify**: [project.wondermayank.in/paletteify/](https://project.wondermayank.in/paletteify/) — Color palette engine and WCAG contrast analyzer.
- **Periodic Table 3D**: [project.wondermayank.in/Periodic-Table/](https://project.wondermayank.in/Periodic-Table/) — Interactive 3D element orbitals and chemical data.

## Social Handles
- **X (Twitter)**: [@wondermayankx](https://x.com/wondermayankx)
- **GitHub**: [@wondermayank](https://github.com/wondermayank)
- **Instagram**: [@wondermayank](https://instagram.com/wondermayank)

## Cloudflare & Heavy SEO / AEO / GEO Architecture
- **Cloudflare Hosting**:
  - `public/_headers`: Security headers (HSTS, nosniff, frame-options, referrer-policy), CORS, immutable 1-year cache for Vite assets, and stale-while-revalidate for SEO context endpoints.
  - `public/_redirects`: Canonical subdomain enforcement and SPA routing fallback (`/* /index.html 200`).
- **Heavy SEO**:
  - Full keyword targeting, Googlebot and Bingbot directives, canonical tags pointing to `https://about.wondermayank.in/`.
  - Comprehensive Open Graph protocol and Twitter summary cards.
  - Sitemaps with Google Image Schema extensions (`public/sitemap.xml`) and extensive bot allowances (`public/robots.txt`).
  - Semantic `<noscript>` crawler fallback for instant indexing without client JS rendering.
- **AEO (Answer Engine Optimization)**:
  - Rich `FAQPage` schema in JSON-LD directly answering queries for Perplexity, SearchGPT, and Google AI Overviews.
  - Contextual markdown documents (`public/llms.txt` and `public/llms-full.txt`).
- **GEO (Generative Engine Optimization)**:
  - Comprehensive multi-entity Linked Data Schema Graph (`@graph`) connecting `Person`, `WebSite`, `ProfilePage`, `BreadcrumbList`, and `SoftwareApplication` entries.
  - Verified `sameAs` entity links across GitHub, X, Instagram, and web platforms.

## Development & Deployment
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production (output to dist/)
npm run build
```
Hosted on **Cloudflare Pages** (Build command: `npm run build`, Output directory: `dist`).
