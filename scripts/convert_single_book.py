#!/usr/bin/env python3
"""
Interactive Single Book Ingestion Engine
Handles all characters safely: ampersands (&), brackets, spaces, unicode, middle dots.
"""

import os
import sys
from pathlib import Path

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stdin, 'reconfigure'):
    sys.stdin.reconfigure(encoding='utf-8')

# Import core processing engine
sys.path.insert(0, str(Path(__file__).resolve().parent))
from batch_convert_all_books import process_pdf, determine_slug, INCOMING_DIR, BASE_DIR

def clean_path(raw):
    if not raw:
        return ""
    # Strip quotes, whitespace, and leading/trailing markers
    p = raw.strip().strip('"').strip("'").strip('&').strip()
    return os.path.expanduser(p)

def main():
    print("=" * 68)
    print("   DR. J. ARAWINDHAN PLATFORM - SINGLE BOOK 3D FLIPBOOK CONVERTER")
    print("=" * 68)
    print()

    pdf_path_str = None
    explicit_slug = None

    # 1. Check CLI arguments (e.g. from drag-and-drop onto .bat)
    if len(sys.argv) > 1:
        # Join arguments in case Windows split on spaces/unquoted &
        arg_str = " ".join(sys.argv[1:])
        pdf_path_str = clean_path(arg_str)
        if len(sys.argv) > 2 and not os.path.exists(pdf_path_str):
            # Maybe second argument was slug
            first = clean_path(sys.argv[1])
            if os.path.exists(first):
                pdf_path_str = first
                explicit_slug = sys.argv[2]

    # 2. If no valid file from args, offer interactive prompt or incoming_books picker
    if not pdf_path_str or not os.path.exists(pdf_path_str):
        incoming_files = list(INCOMING_DIR.glob("*.pdf")) if INCOMING_DIR.exists() else []

        if incoming_files:
            print("Found PDFs in incoming_books folder:")
            for i, f in enumerate(incoming_files, 1):
                print(f"  [{i}] {f.name}")
            print()

        print("Options:")
        print(" - Enter the number (1, 2, ...) to choose from the list above")
        print(" - Or drag & drop ANY PDF file directly into this window and press Enter:")
        print()
        
        try:
            user_input = input("> ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\nCancelled.")
            return

        if not user_input:
            print("No input provided. Exiting.")
            return

        # Check if user entered a number
        if user_input.isdigit() and incoming_files:
            idx = int(user_input) - 1
            if 0 <= idx < len(incoming_files):
                pdf_path_str = str(incoming_files[idx])
            else:
                print("Invalid number choice.")
                return
        else:
            pdf_path_str = clean_path(user_input)

    # 3. Verify file exists
    if not pdf_path_str or not os.path.exists(pdf_path_str):
        print(f"\n❌ [ERROR] File not found: '{pdf_path_str}'")
        print("Please check the path and try again.\n")
        return

    # 4. Slug determination
    filename = os.path.basename(pdf_path_str)
    suggested_slug = explicit_slug or determine_slug(filename)
    
    if explicit_slug:
        final_slug = explicit_slug
    else:
        print()
        print("-" * 68)
        print(f"Selected PDF: {filename}")
        print(f"Auto-detected Slug: '{suggested_slug}'")
        print("-" * 68)
        print("Press Enter to accept this slug, or type a custom slug name:")
        try:
            custom_slug = input(f"[{suggested_slug}] > ").strip()
        except (EOFError, KeyboardInterrupt):
            custom_slug = ""
        final_slug = custom_slug if custom_slug else suggested_slug

    # 5. Process the book
    try:
        process_pdf(pdf_path_str, final_slug)
        print("=" * 68)
        print("   SUCCESS! 3D FLIPBOOK CONVERTED SUCCESSFULLY!")
        print(f"   - Retina WebP pages in: public/books/{final_slug}/pages/")
        print(f"   - Cover image saved to: public/images/books/{final_slug}.jpg")
        print(f"   - PDF file saved to: public/books/{final_slug}.pdf")
        print("=" * 68)
    except Exception as e:
        print(f"\n❌ Error during conversion: {e}\n")

if __name__ == "__main__":
    main()
