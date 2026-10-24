#!/usr/bin/env python3
"""
Automated 1-Click Batch Book Ingestion Engine
Converts PDF books into high-performance 3D FlipHTML5-style WebP pages,
generates covers, wires download URLs, and updates src/data/books.ts automatically.
"""

import os
import sys
import glob
import shutil
import re
from pathlib import Path

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

try:
    import pypdfium2 as pdfium
except ImportError:
    os.system(f"{sys.executable} -m pip install pypdfium2")
    import pypdfium2 as pdfium

BASE_DIR = Path(__file__).resolve().parent.parent
INCOMING_DIR = BASE_DIR / "incoming_books"
PUBLIC_BOOKS_DIR = BASE_DIR / "public" / "books"
PUBLIC_IMAGES_DIR = BASE_DIR / "public" / "images" / "books"
DATA_BOOKS_TS = BASE_DIR / "src" / "data" / "books.ts"

KNOWN_MAPPINGS = {
    "andava": "andava-the-victory-mode",
    "victory": "andava-the-victory-mode",
    "dictionary": "wow-dictionary",
    "shambala": "shambala-book",
    "parenting": "wow-parenting-book",
    "financial": "financial-intelligence",
    "master": "master-stroke",
    "stroke": "master-stroke",
    "scientist": "young-scientist",
    "emotional": "emotional-intelligence",
    "dasavadani": "dasavadani-pedagogy",
    "twenty": "twenty-five-years-legacy",
    "future": "future-of-schooling",
    "heguru": "heguru-genius-development",
    "spirituality": "mind-body-spirituality",
    "corporate": "corporate-governance",
    "ayngara": "ayngara",
    "iqqi": "iqqi",
    "luminous": "the-luminous-legacy",
    "personality": "the-yoga-of-personality",
    "yoga": "the-yoga-of-personality",
}

def slugify(text):
    text = re.sub(r'[^\w\s-]', '', text.lower())
    clean = re.sub(r'[-\s]+', '-', text).strip('-')
    if "dictionary" in clean:
        return "wow-dictionary"
    return clean

def determine_slug(pdf_filename):
    lower = pdf_filename.lower()
    for key, slug in KNOWN_MAPPINGS.items():
        if key in lower:
            return slug
    clean_name = os.path.splitext(pdf_filename)[0]
    return slugify(clean_name)

def process_pdf(pdf_path, explicit_slug=None):
    pdf_filename = os.path.basename(pdf_path)
    slug = slugify(explicit_slug) if explicit_slug else determine_slug(pdf_filename)
    print(f"\n==========================================")
    print(f"📖 Processing Book: {pdf_filename}")
    print(f"🎯 Target Slug: {slug}")
    print(f"==========================================")

    out_pages_dir = PUBLIC_BOOKS_DIR / slug / "pages"
    out_pages_dir.mkdir(parents=True, exist_ok=True)
    PUBLIC_IMAGES_DIR.mkdir(parents=True, exist_ok=True)

    dest_pdf = PUBLIC_BOOKS_DIR / f"{slug}.pdf"
    print(f"📦 Copying official PDF to: {dest_pdf.relative_to(BASE_DIR)}")
    shutil.copy2(pdf_path, dest_pdf)

    print("🖼️  Rendering pages with Google PDFium Engine...")
    doc = pdfium.PdfDocument(str(pdf_path))
    total_pages = len(doc)
    print(f"📄 Total Pages: {total_pages}")

    for idx, page in enumerate(doc):
        page_num = idx + 1
        out_file = out_pages_dir / f"page_{page_num}.webp"
        
        # Render at 1.5x scale for razor-sharp retina quality
        pil_image = page.render(scale=1.5).to_pil()
        pil_image.save(out_file, "WEBP", quality=88)

        # Save Cover image from Page 1
        if page_num == 1:
            cover_file = PUBLIC_IMAGES_DIR / f"{slug}.jpg"
            pil_image.save(cover_file, "JPEG", quality=90)
            print(f"🌟 Saved Book Cover: {cover_file.relative_to(BASE_DIR)}")

        if page_num % 10 == 0 or page_num == total_pages:
            print(f"   ✓ Rendered page {page_num}/{total_pages} (WebP)")

    update_books_data(slug, total_pages)
    print(f"✅ Successfully converted '{slug}' with {total_pages} pages!\n")
    return slug, total_pages

def update_books_data(slug, total_pages):
    if not DATA_BOOKS_TS.exists():
        print(f"⚠️  {DATA_BOOKS_TS} not found, skipping TS registration.")
        return

    content = DATA_BOOKS_TS.read_text(encoding="utf-8")
    slug_str = f"slug: '{slug}'"
    idx = content.find(slug_str)
    if idx == -1:
        print(f"✨ Book slug '{slug}' is new! Automatically registering in booksList...")
        title_words = [w.capitalize() for w in slug.replace("-", " ").split()]
        formatted_title = " ".join(title_words)
        
        ids = re.findall(r"id:\s*'BK-(\d+)'", content)
        next_num = max([int(n) for n in ids]) + 1 if ids else 1
        new_id = f"BK-{next_num:03d}"

        new_entry = f"""  {{
    id: '{new_id}',
    slug: '{slug}',
    coverImage: '/images/books/{slug}.jpg',
    title: {{
      en: '{formatted_title}',
      ta: '{formatted_title}',
    }},
    tagline: {{
      en: 'Official Monograph & Platform Edition',
      ta: 'அதிகாரப்பூர்வ சிறப்புப் பதிப்பு',
    }},
    author: {{
      en: 'Dr. J. Arawindhan',
      ta: 'முனைவர் ஜே. அரவிந்தன்',
    }},
    edition: 'Official Edition',
    language: 'English',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {{
      en: '{formatted_title} by Dr. J. Arawindhan.',
      ta: '{formatted_title} - முனைவர் ஜே. அரவிந்தன்.',
    }},
    keyThemes: {{
      en: ['Visionary Education', 'Self-Mastery', 'Leadership'],
      ta: ['கல்வி தொலைநோக்கு', 'சுய ஆளுமை', 'தலைமைத்துவம்'],
    }},
    targetAudience: {{
      en: 'Educators, leaders, students, and life-long learners.',
      ta: 'கல்வியாளர்கள், தலைவர்கள் மற்றும் மாணவர்கள்.',
    }},
    pdfUrl: '/books/{slug}.pdf',
    flipbookPages: Array.from({{ length: {total_pages} }}, (_, i) => `/books/{slug}/pages/page_${{i + 1}}.webp`),
  }},
"""
        end_list_idx = content.rfind("\n];")
        if end_list_idx != -1:
            content = content[:end_list_idx] + "\n" + new_entry + content[end_list_idx:]
            DATA_BOOKS_TS.write_text(content, encoding="utf-8")
            print(f"🎉 Successfully registered '{slug}' as {new_id} in {DATA_BOOKS_TS.relative_to(BASE_DIR)}!")
            return
        return

    # Find the closing "  }," of this book item
    next_item_idx = content.find("\n  },\n  {", idx)
    if next_item_idx == -1:
        next_item_idx = content.find("\n  },\n];", idx)
    
    if next_item_idx == -1:
        print("Could not locate end of book block.")
        return

    item_content = content[idx:next_item_idx]
    
    pdf_line = f"pdfUrl: '/books/{slug}.pdf',"
    pages_line = f"flipbookPages: Array.from({{ length: {total_pages} }}, (_, i) => `/books/{slug}/pages/page_${{i + 1}}.webp`),"

    if "pdfUrl:" in item_content:
        item_content = re.sub(r"pdfUrl:\s*'[^']*',", pdf_line, item_content)
    else:
        item_content += f"\n    {pdf_line}"

    if "flipbookPages:" in item_content:
        item_content = re.sub(r"flipbookPages:\s*Array\.from\([^)]*\),", pages_line, item_content)
    else:
        item_content += f"\n    {pages_line}"

    new_content = content[:idx] + item_content + content[next_item_idx:]
    DATA_BOOKS_TS.write_text(new_content, encoding="utf-8")
    print(f"💾 Updated {DATA_BOOKS_TS.relative_to(BASE_DIR)} with flipbookPages ({total_pages} pages) & pdfUrl!")

def main():
    INCOMING_DIR.mkdir(parents=True, exist_ok=True)

    # Check if specific PDF passed via CLI
    if len(sys.argv) > 1 and sys.argv[1] != "--all":
        pdf_file = sys.argv[1]
        explicit_slug = sys.argv[2] if len(sys.argv) > 2 else None
        if os.path.exists(pdf_file):
            process_pdf(pdf_file, explicit_slug)
            return
        else:
            print(f"❌ File not found: {pdf_file}")
            sys.exit(1)

    # Scan incoming_books directory
    incoming_pdfs = list(INCOMING_DIR.glob("*.pdf"))
    
    # Also check root directory for any loose book PDFs
    root_pdfs = [
        BASE_DIR / "Final Shambala 2022.pdf",
    ]
    all_pdfs = incoming_pdfs + [p for p in root_pdfs if p.exists()]

    if not all_pdfs:
        print("📁 No incoming PDFs found in 'incoming_books/' directory.")
        print("💡 Drop any book PDF into the 'incoming_books/' folder and run this script again!")
        print(f"   Folder path: {INCOMING_DIR}")
        return

    print(f"🚀 Found {len(all_pdfs)} book PDFs to convert!")
    for pdf_path in all_pdfs:
        try:
            process_pdf(pdf_path)
        except Exception as e:
            print(f"❌ Error processing {pdf_path.name}: {e}")

    print("🎉 All books processed successfully!")

if __name__ == "__main__":
    main()
