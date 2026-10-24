import os
import zipfile
import json
import uuid
import datetime

def create_epub():
    output_path = 'public/books/wow_parenting.epub'
    cover_image_path = 'public/images/books/wow_parenting.jpg'
    
    with open('wow_parenting_extracted.json', 'r', encoding='utf-8') as f:
        pages = json.load(f)

    # Organize sections based on book pages
    # Pages 1-3: Intro, Dedication, Manifesto
    # Pages 4-5, 10-12, 27: Parenting Archetypes & WOW Levels
    # Pages 6-9, 13: The Call for WOW Parenting
    # Pages 14-26: The 5H Framework (Head, Hand, Heart, Health, Happiness)
    # Pages 28-35: Personalized Parenting with BMIT & The Intelligence Spectrum
    # Pages 36-38: The Future of WOW Parenting & Free Courses

    def get_text_range(start, end):
        txts = []
        for p in pages:
            if start <= p['page'] <= end:
                txt = p['text'].strip()
                if txt:
                    txts.append(txt)
        return "\n\n".join(txts)

    book_uuid = str(uuid.uuid4())
    pub_date = datetime.datetime.now().strftime("%Y-%m-%d")

    # Clean text to HTML paragraphs
    def text_to_html(raw_text):
        paragraphs = raw_text.split('\n\n')
        html_out = []
        for p in paragraphs:
            clean = p.strip().replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
            if clean:
                # detect headings or bullet points
                lines = [l.strip() for l in clean.split('\n') if l.strip()]
                if len(lines) == 1 and (lines[0].isupper() or len(lines[0]) < 50 and ('Parent' in lines[0] or 'PART' in lines[0] or 'Chapter' in lines[0] or 'Framework' in lines[0])):
                    html_out.append(f'<h3>{lines[0]}</h3>')
                else:
                    para_text = '<br/>'.join(lines)
                    html_out.append(f'<p>{para_text}</p>')
        return '\n'.join(html_out)

    chapters = [
        {
            'id': 'dedication',
            'title': 'Dedication & Manifesto',
            'content': text_to_html(get_text_range(1, 3))
        },
        {
            'id': 'chapter1',
            'title': 'Part 1: The Call for WOW Parenting',
            'content': text_to_html(get_text_range(6, 13))
        },
        {
            'id': 'chapter2',
            'title': 'Part 2: The 5H Framework (Head, Hand, Heart, Health, Happiness)',
            'content': text_to_html(get_text_range(14, 26))
        },
        {
            'id': 'chapter3',
            'title': 'Part 3: The WOW Levels & Parenting Archetypes',
            'content': text_to_html(get_text_range(4, 5) + "\n\n" + get_text_range(27, 27))
        },
        {
            'id': 'chapter4',
            'title': 'Part 4: Personalized Parenting with BMIT & Natural Talents',
            'content': text_to_html(get_text_range(28, 35))
        },
        {
            'id': 'chapter5',
            'title': 'Part 5: The Future of WOW Parenting & Free Courses',
            'content': text_to_html(get_text_range(36, 38))
        }
    ]

    stylesheet = """
    body {
        font-family: Georgia, 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
        line-height: 1.65;
        color: #1a1a1a;
        margin: 5% 8%;
        background-color: #faf9f6;
    }
    h1, h2, h3, h4 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        color: #8c6b2d;
        font-weight: 700;
        margin-top: 1.8em;
        margin-bottom: 0.6em;
        line-height: 1.25;
    }
    h1 { font-size: 2em; border-bottom: 2px solid #8c6b2d; padding-bottom: 0.3em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.2em; color: #2d3748; }
    p {
        margin: 0 0 1.2em 0;
        text-align: justify;
        text-justify: inter-word;
    }
    .author-badge {
        font-size: 0.95em;
        color: #718096;
        margin-bottom: 2em;
        font-style: italic;
    }
    .cover-wrapper {
        text-align: center;
        padding: 40px 0;
    }
    .cover-img {
        max-width: 90%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
    """

    container_xml = """<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <rootfiles>
        <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
    </rootfiles>
</container>"""

    # Build content.opf
    manifest_items = [
        '<item id="style" href="stylesheet.css" media-type="text/css"/>',
        '<item id="cover_img" href="images/cover.jpg" media-type="image/jpeg" properties="cover-image"/>',
        '<item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>',
        '<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>',
        '<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>'
    ]
    spine_items = [
        '<itemref idref="cover"/>',
        '<itemref idref="nav"/>'
    ]

    for ch in chapters:
        manifest_items.append(f'<item id="{ch["id"]}" href="{ch["id"]}.xhtml" media-type="application/xhtml+xml"/>')
        spine_items.append(f'<itemref idref="{ch["id"]}"/>')

    content_opf = f"""<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="pub-id">
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
        <dc:identifier id="pub-id">urn:uuid:{book_uuid}</dc:identifier>
        <dc:title>WOW Parenting: Raising Supera Children with the 5H Framework</dc:title>
        <dc:creator>Dr. J. Arawindhan</dc:creator>
        <dc:publisher>Achariya Educational Public Trust &amp; WOW Academy</dc:publisher>
        <dc:language>en</dc:language>
        <dc:date>{pub_date}</dc:date>
        <dc:description>The authentic, revolutionary parenting guidebook by Chief Mentor Dr. J. Arawindhan, unlocking children's boundless potential through Head, Hand, Heart, Health, and Happiness.</dc:description>
        <meta name="cover" content="cover_img"/>
    </metadata>
    <manifest>
        {chr(10).join(manifest_items)}
    </manifest>
    <spine toc="ncx">
        {chr(10).join(spine_items)}
    </spine>
</package>"""

    cover_xhtml = """<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
    <title>Cover - WOW Parenting</title>
    <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
</head>
<body>
    <div class="cover-wrapper">
        <img src="images/cover.jpg" alt="WOW Parenting Cover" class="cover-img"/>
        <h1>WOW Parenting</h1>
        <h2>Raising Supera Children with the 5H Framework</h2>
        <p class="author-badge">By Chief Mentor Dr. J. Arawindhan (Tr. J. Arawindhan)</p>
    </div>
</body>
</html>"""

    # nav.xhtml (EPUB3)
    nav_li = []
    for ch in chapters:
        nav_li.append(f'<li><a href="{ch["id"]}.xhtml">{ch["title"]}</a></li>')
    nav_xhtml = f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
    <title>Table of Contents</title>
    <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
</head>
<body>
    <nav epub:type="toc" id="toc">
        <h1>Table of Contents</h1>
        <ol>
            {chr(10).join(nav_li)}
        </ol>
    </nav>
</body>
</html>"""

    # toc.ncx (EPUB2 compatibility)
    ncx_nav = []
    for idx, ch in enumerate(chapters):
        ncx_nav.append(f"""
        <navPoint id="navPoint-{idx+1}" playOrder="{idx+1}">
            <navLabel><text>{ch['title']}</text></navLabel>
            <content src="{ch['id']}.xhtml"/>
        </navPoint>""")
    toc_ncx = f"""<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
    <head>
        <meta name="dtb:uid" content="urn:uuid:{book_uuid}"/>
        <meta name="dtb:depth" content="1"/>
        <meta name="dtb:totalPageCount" content="0"/>
        <meta name="dtb:maxPageNumber" content="0"/>
    </head>
    <docTitle><text>WOW Parenting</text></docTitle>
    <navMap>
        {''.join(ncx_nav)}
    </navMap>
</ncx>"""

    # Create ZIP archive (EPUB standard)
    if os.path.exists(output_path):
        os.remove(output_path)

    with zipfile.ZipFile(output_path, 'w') as epub:
        # 1. mimetype (MUST be first, uncompressed)
        epub.writestr('mimetype', 'application/epub+zip', compress_type=zipfile.ZIP_STORED)

        # 2. META-INF/container.xml
        epub.writestr('META-INF/container.xml', container_xml, compress_type=zipfile.ZIP_DEFLATED)

        # 3. OEBPS files
        epub.writestr('OEBPS/content.opf', content_opf, compress_type=zipfile.ZIP_DEFLATED)
        epub.writestr('OEBPS/nav.xhtml', nav_xhtml, compress_type=zipfile.ZIP_DEFLATED)
        epub.writestr('OEBPS/toc.ncx', toc_ncx, compress_type=zipfile.ZIP_DEFLATED)
        epub.writestr('OEBPS/stylesheet.css', stylesheet, compress_type=zipfile.ZIP_DEFLATED)
        epub.writestr('OEBPS/cover.xhtml', cover_xhtml, compress_type=zipfile.ZIP_DEFLATED)

        # Cover image
        if os.path.exists(cover_image_path):
            with open(cover_image_path, 'rb') as img_f:
                epub.writestr('OEBPS/images/cover.jpg', img_f.read(), compress_type=zipfile.ZIP_DEFLATED)

        # Chapters
        for ch in chapters:
            ch_html = f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
    <title>{ch['title']}</title>
    <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
</head>
<body>
    <h1>{ch['title']}</h1>
    <div class="chapter-content">
        {ch['content']}
    </div>
</body>
</html>"""
            epub.writestr(f'OEBPS/{ch["id"]}.xhtml', ch_html, compress_type=zipfile.ZIP_DEFLATED)

    print(f"Successfully generated EPUB at {output_path} (Size: {os.path.getsize(output_path):,} bytes)")

if __name__ == '__main__':
    create_epub()
