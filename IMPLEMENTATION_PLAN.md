# IMPLEMENTATION PLAN: Dr. J. Arawindhan Ji Digital Authority Platform

## 1. Architectural Strategy

We are building a production-grade, bilingual Digital Authority and Knowledge Platform.
- **Tech Stack:** Next.js 15 (App Router) + TypeScript + Vanilla CSS Modules & Design System + Lucide Icons.
- **Static Export / Zero Cost:** Configured for standalone static export (`output: 'export'`) or node serverless deployment, ensuring 100% free hosting eligibility (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
- **Internationalization (i18n):** Subpath routing `/en` and `/ta` with synchronous locale resolution, zero hydration flash, and language toggling.
- **Structured Content Models:** JSON-based typed data structures for:
  - 10 Educational Methodologies (Dasavadani, MiWay, Brain Activity, Q-Math, TRACK, Power Teaching, LABS, Supplements, Heguru, WOW Parenting).
  - 7 Published & Ecosystem Books (The Shambala Book, Iravadh, WOW Parenting, Financial Intelligence, Emotional Intelligence, Master Stroke, Young Scientist).
  - 61+ Institutions & Companies directory with sector filtering.
  - Honours & Accolades (Personal awards, Institutional accolades, World records).
  - Divya Yogam & Inner Journey (7-Step Journey, 5 Pillars, 11 Words, Avadhani Program).
- **Technical SEO & AI Discovery:**
  - Automated JSON-LD generation for `Person`, `ProfilePage`, `Book`, `EducationalOrganization`, `BreadcrumbList`.
  - Open Graph tags, Twitter cards, dynamic canonicals, and `hreflang` alternate links.
  - `sitemap.xml` and `robots.txt` dynamic generation.
  - Evidence claim citations on each page linking to `MASTER_CLAIMS_REGISTER.csv`.

---

## 2. Platform Directory Structure

```
e:/App/MD website/
├── public/
│   ├── images/
│   │   ├── portrait.png (Approved portrait)
│   │   ├── books/ (Book covers)
│   │   └── icons/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── [lang]/
│   │   │   ├── layout.tsx (Root layout with fonts, header, footer, SEO tags)
│   │   │   ├── page.tsx (Home page)
│   │   │   ├── biography/
│   │   │   │   └── page.tsx (Detailed Biography & 10 Avatar Transformation)
│   │   │   ├── education/
│   │   │   │   ├── page.tsx (10 Educational Innovations overview)
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx (Deep-dive methodology pages)
│   │   │   ├── books/
│   │   │   │   ├── page.tsx (Books Catalogue)
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx (Individual Book details)
│   │   │   ├── institutions/
│   │   │   │   └── page.tsx (Colleges, 101 Schools & 61+ Enterprises directory)
│   │   │   ├── recognition/
│   │   │   │   └── page.tsx (Honours, Accolades & 600+ World Records)
│   │   │   ├── inner-journey/
│   │   │   │   └── page.tsx (Divya Yogam, Shambala & Spiritual Path)
│   │   │   ├── governance/
│   │   │   │   └── page.tsx (CoE, Rope-In, 5-Step System & Leadership)
│   │   │   ├── media/
│   │   │   │   └── page.tsx (Speeches, Thought Leadership, AI & Articles)
│   │   │   └── contact/
│   │   │       └── page.tsx (Official Verification & Verified Links)
│   │   ├── layout.tsx (Root html shell)
│   │   ├── page.tsx (Root redirect to /en)
│   │   └── globals.css (Design tokens, typography, dark/light themes, animations)
│   ├── components/
│   │   ├── Navbar.tsx (Bilingual header with active route tracking)
│   │   ├── Footer.tsx (Comprehensive footer with institution links)
│   │   ├── LanguageSwitcher.tsx (Seamless EN / TA toggle)
│   │   ├── ClaimBadge.tsx (Factual verification status indicator)
│   │   ├── StructuredData.tsx (JSON-LD schema generator)
│   │   ├── SectionHeader.tsx
│   │   └── SearchFilter.tsx (Interactive directory filter)
│   ├── data/
│   │   ├── biography.ts
│   │   ├── education.ts
│   │   ├── books.ts
│   │   ├── institutions.ts
│   │   ├── recognition.ts
│   │   ├── innerJourney.ts
│   │   ├── governance.ts
│   │   └── media.ts
│   ├── lib/
│   │   └── i18n.ts (Localization dictionaries & helpers)
│   └── types/
│       └── index.ts (TypeScript interfaces)
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 3. Milestones & Phased Execution

- **Milestone 1:** Initialize Next.js project with TypeScript, configure dependencies (`lucide-react`, Tailwind/vanilla design tokens).
- **Milestone 2:** Implement core design system in `globals.css` (Gold, Royal Navy, Ochre, Pearl Ivory themes, Tamil font stack).
- **Milestone 3:** Create comprehensive structured data registers in `src/data/` for all 4 source documents.
- **Milestone 4:** Build responsive layout components (`Navbar`, `Footer`, `LanguageSwitcher`, `ClaimBadge`, `StructuredData`).
- **Milestone 5:** Build all primary English and Tamil pages:
  - Homepage (`/en`, `/ta`)
  - Biography (`/en/biography`, `/ta/biography`)
  - Educational Innovations (`/en/education`, `/ta/education` + 10 dynamic methodologies)
  - Book Showcase (`/en/books`, `/ta/books` + individual book pages)
  - Institutions & Enterprises directory (`/en/institutions`, `/ta/institutions`)
  - Recognition & World Records (`/en/recognition`, `/ta/recognition`)
  - Inner Journey & Divya Yogam (`/en/inner-journey`, `/ta/inner-journey`)
  - Governance & Systems (`/en/governance`, `/ta/governance`)
  - Media & AI Leadership (`/en/media`, `/ta/media`)
  - Contact & Evidence Links (`/en/contact`, `/ta/contact`)
- **Milestone 6:** Automated build verification, SEO sitemap/robots, and `QA_REPORT.md`.
