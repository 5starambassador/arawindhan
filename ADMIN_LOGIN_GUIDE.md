# Dr. J. Arawindhan — Zero-Code Admin Login Guide

We have integrated **Decap CMS** directly into your website at `/admin`. This provides a visual web dashboard where you or your team can log in from any browser, upload photos via drag-and-drop, and edit content without writing any code.

---

## 🚀 How to Access the Admin Panel

### 1. In Local Development:
1. Open your browser and go to:
   `http://localhost:3000/admin`
2. In your terminal, run the local proxy:
   ```bash
   npx decap-server
   ```
   *(This connects the visual browser dashboard directly to your project files on disk.)*
3. You can now upload images and edit text directly with instant local live-reload!

---

### 2. In Production (When Live on the Web):
Once your website is deployed (e.g., Netlify, Vercel, or custom server connected to GitHub):
1. Navigate to:
   `https://www.arawindhan.com/admin`
2. Log in using your email and password (via Netlify Identity or GitHub OAuth).
3. Any photo uploaded or text edited in the visual editor will be automatically committed and published to the live website!

---

## 🎛️ What You Can Manage in the Admin Panel

### 1. Website Images & Photography (`site_imagery`)
- **Executive Portrait**: Replace the hero portrait of Dr. J. Arawindhan.
- **Spiritual Portrait**: Replace the Divya Yogam portrait.
- **World Records Banner**: Upload new student world record photography.
- **Whole-Brain Classroom Banner**: Upload updated classroom and robotics photos.
- **Global Keynote Stage Banner**: Update keynote speech photos.
- **National Awards Trophy Banner**: Update national awards and honours images.
- **Heguru Learning Centre**: Update Heguru right-brain centre photos.
- **28-Year Odyssey & Campus Banner**: Update campus architectural visuals.

### 2. Published Books Catalogue (`books`)
- Upload high-resolution 3D book covers.
- Edit bilingual book titles, taglines, summaries, and key themes (English & Tamil).
- Update editions and availability status.

### 3. Speeches & Media Archive (`speeches`)
- Add new keynote addresses or conference speeches.
- Edit dates, categories, and full speeches in English and Tamil.

---

## 🔒 Security & User Management
- Only invited administrators can log in.
- You can invite additional team members, photographers, or content writers by adding their emails to your Netlify Identity or GitHub collaborators list.
