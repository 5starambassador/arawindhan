# Dr. J. Arawindhan — Image Management & Zero-Code Update Guide

This website is architected with a **Fixed Semantic File System**. You do **not** need to touch any TypeScript, HTML, CSS, or React code to update or replace images on any page.

---

## ⚡ The Zero-Code "Drop-in Replacement" Rule

To update any image on the site:
1. Prepare your new photograph or graphic.
2. Rename your new file to match the **exact file name** listed in the table below.
3. Paste / drop it into the designated folder (`public/images/...`), replacing the old file.
4. **Done!** The website automatically reflects the new image immediately.

---

## 🗺️ Master Image Location Map

| Page / Section | What it Shows | Folder & File Name to Replace | Recommended Resolution |
| :--- | :--- | :--- | :--- |
| **Homepage** (Hero) | Executive Portrait of Dr. J. Arawindhan | `public/images/portrait.jpg` | `800 x 933 px` (Vertical 3:4) |
| **Inner Journey** | Spiritual Portrait (Divya Yogam) | `public/images/spiritual_portrait.jpg` | `800 x 933 px` (Vertical 3:4) |
| **Biography** | 28-Year Odyssey & Campus Vision | `public/images/biography_vision.jpg` | `1920 x 1080 px` (Widescreen 16:9) |
| **Education** | Whole-Brain Classroom & Innovation | `public/images/education_hero.jpg` | `1920 x 1080 px` (Widescreen 16:9) |
| **Recognition & Records** | 600+ Student World Records Showcase | `public/images/records_showcase.jpg` | `1920 x 1080 px` (Widescreen 16:9) |
| **Recognition & Honours** | 540+ National Educational Awards Trophy | `public/images/awards_trophy.jpg` | `1920 x 1080 px` (Widescreen 16:9) |
| **Media & Speeches** | Global Keynote Stage (AI & Education) | `public/images/media_hero.jpg` | `1920 x 1080 px` (Widescreen 16:9) |
| **Institutions** (Heguru) | Heguru Right-Brain Learning Architecture | `public/images/heguru_center.jpg` | `1920 x 1080 px` (Widescreen 16:9) |
| **Institutions** (Campus) | ACHARIYA Central Campus Architecture | `public/images/institutions/achariya_campus.jpg` | `1920 x 1080 px` (Widescreen 16:9) |

---

## 📚 Book Covers Catalogue (`public/images/books/`)

To change any book cover, simply replace the file inside `public/images/books/`:

| Book Title | File to Replace | Aspect Ratio |
| :--- | :--- | :--- |
| **The Shambala Book** | `public/images/books/shambala_book.jpg` | `600 x 900 px` (2:3 Vertical) |
| **WOW Parenting** | `public/images/books/wow_parenting.jpg` | `600 x 900 px` (2:3 Vertical) |
| **Financial Intelligence** | `public/images/books/financial_intelligence.jpg` | `600 x 900 px` (2:3 Vertical) |
| **Emotional Intelligence** | `public/images/books/emotional_intelligence.jpg` | `600 x 900 px` (2:3 Vertical) |
| **The Master Stroke** | `public/images/books/master_stroke.jpg` | `600 x 900 px` (2:3 Vertical) |
| **Young Scientist** | `public/images/books/young_scientist.jpg` | `600 x 900 px` (2:3 Vertical) |
| **Airavatha** | `public/images/books/airavatha.jpg` | `600 x 900 px` (2:3 Vertical) |

---

## 💡 Best Practices for Image Updates

1. **Keep the File Format as `.jpg`**:
   The website is pre-configured to look for `.jpg` files for maximum compression and lightning-fast load times.
2. **Compress Before Dropping In**:
   Use free tools like [TinyJPG / TinyPNG](https://tinypng.com) to ensure files are under `400 KB` each for instant global performance.
3. **Preserve Dimensions**:
   - For widescreen banners: Aim for standard `16:9` ratio (e.g., `1920 x 1080` or `1280 x 720`).
   - For book covers: Aim for `2:3` ratio (e.g., `600 x 900`).
   - For portraits: Aim for `3:4` or `4:5` ratio (e.g., `800 x 1000`).

---

## 🌐 Alternative: Future Online Drag-and-Drop Admin (Cloud Storage)

If you ever want an online dashboard where you or your staff can change photos from a web browser without accessing the folder:
- **Cloudinary / Supabase Storage**: Connect a free cloud media folder where images can be dragged and dropped through a simple browser login.
