import os
import pypdfium2 as pdfium

def render_pages():
    pdf_path = 'Wow parenting book final.pdf'
    output_dir = 'public/books/wow_parenting/pages'
    os.makedirs(output_dir, exist_ok=True)

    print(f"Opening {pdf_path} with PDFium...")
    pdf = pdfium.PdfDocument(pdf_path)
    total = len(pdf)
    print(f"Total pages to render: {total}")

    # Scale 2.0 gives ~1400px - 1600px width, sharp and crystal clear for Retina / HD displays!
    for i in range(total):
        page = pdf[i]
        image = page.render(scale=1.75).to_pil()
        # Save as WebP for ultra-fast loading and compact footprint
        out_file = os.path.join(output_dir, f"page_{i+1}.webp")
        image.save(out_file, 'WEBP', quality=85)
        print(f"Rendered page {i+1}/{total} -> {out_file} ({image.size[0]}x{image.size[1]}, {os.path.getsize(out_file):,} bytes)")

    print("All pages rendered successfully!")

if __name__ == '__main__':
    render_pages()
