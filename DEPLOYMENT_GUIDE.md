# DEPLOYMENT GUIDE: ZERO-COST HOSTING & PRODUCTION PIPELINE

**Platform:** Dr. J. Arawindhan Ji — Global Digital Authority Platform  
**Target Delivery:** 100% Free-Tier / Zero Additional Recurring Expenditure  
**Supported Providers:** Vercel, Netlify, Cloudflare Pages, GitHub Pages  

---

## 1. Option A: Vercel Free Hobby Tier (Recommended)

1. **Connect Git Repository:**
   - Push this workspace to your private or public GitHub/GitLab repository.
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Import the repository `MD website`.
2. **Build Settings:**
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Environment Variables:**
   - Add `NEXT_PUBLIC_SITE_URL` = `https://arawindhan.org`
4. **Deploy:** Click **Deploy**. Vercel automatically creates SSL, global CDN edge caching, and preview URLs.

---

## 2. Option B: Cloudflare Pages (Completely Free & Unlimited Bandwidth)

1. In Cloudflare Dashboard, navigate to **Compute (Workers & Pages)** → **Pages** → **Connect to Git**.
2. Select your repository.
3. Build Configuration:
   - Framework preset: `Next.js`
   - Build command: `npx @cloudflare/next-on-pages` or `npm run build`
   - Output directory: `.vercel/output/static` or `out` (if static export configured).
4. Connect custom domain `arawindhan.org` with free universal SSL and DDoS protection.

---

## 3. Option C: Netlify Free Tier

1. Link repository in [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Netlify automatically installs the `@netlify/plugin-nextjs` adapter.

---

## 4. Search Engine Verification Setup (Post-Deployment)

1. **Google Search Console:**
   - Log into [search.google.com/search-console](https://search.google.com/search-console).
   - Add Property: `https://arawindhan.org`.
   - Method 1 (Recommended): Add DNS TXT record at domain registrar.
   - Method 2: HTML tag meta in `src/app/[lang]/layout.tsx`.
   - Submit Sitemap: Enter `https://arawindhan.org/sitemap.xml`.
2. **Bing Webmaster Tools:**
   - Log into [bing.com/webmasters](https://www.bing.com/webmasters).
   - Import verification directly from Google Search Console or add meta tag.
   - Submit Sitemap: `https://arawindhan.org/sitemap.xml`.
3. **IndexNow Instant Discovery:**
   - Submit URL list using the `INDEXNOW_KEY` whenever new articles or books are updated.
