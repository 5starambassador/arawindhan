import os
from PIL import Image, ImageDraw, ImageFont

books_dir = os.path.join('public', 'images', 'books')
os.makedirs(books_dir, exist_ok=True)

# Also ensure out/images/books exists if out directory exists
out_books_dir = os.path.join('out', 'images', 'books')
if os.path.exists('out'):
    os.makedirs(out_books_dir, exist_ok=True)

new_books_meta = [
    {
        'file': 'andava_victory_mode.jpg',
        'badge': 'LIFE MASTERY & CONSCIOUSNESS',
        'title': 'ANDAVA',
        'tagline': 'THE VICTORY MODE',
        'sub': 'Switching from Victim to Creator of Your Life',
        'theme_color': (153, 27, 27),      # Regal Crimson
        'bg_top': (255, 245, 245),
        'bg_bot': (254, 226, 226),
        'accent': (217, 119, 6),           # Gold
    },
    {
        'file': 'yoga_of_personality.jpg',
        'badge': 'ORIGINAL RETREAT LECTURE SERIES',
        'title': 'THE YOGA OF\nPERSONALITY',
        'tagline': 'Becoming Who You Already Are',
        'sub': 'Based on the Teachings of the Original Speech',
        'theme_color': (30, 58, 138),      # Midnight Sapphire
        'bg_top': (240, 246, 255),
        'bg_bot': (219, 234, 254),
        'accent': (202, 138, 4),           # Amber Gold
    },
    {
        'file': 'from_knowing_to_doing.jpg',
        'badge': 'YOUTH EMPOWERMENT BHARAT',
        'title': 'FROM KNOWING\nTO DOING',
        'tagline': 'The Four Pillars of Youth Empowerment',
        'sub': 'Building Skill, Talent & Purpose for Gen Z',
        'theme_color': (6, 95, 70),        # Deep Emerald
        'bg_top': (236, 253, 245),
        'bg_bot': (209, 250, 229),
        'accent': (180, 83, 9),            # Gold
    },
    {
        'file': 'lions_bank_account.jpg',
        'badge': 'FINANCIAL SOVEREIGNTY MANIFESTO',
        'title': "THE LION'S\nBANK ACCOUNT",
        'tagline': 'Stop Chasing Rats, Start Hunting Deer',
        'sub': '"Your first salary is not a flex. It is a trap."',
        'theme_color': (15, 23, 42),       # Obsidian Slate
        'bg_top': (255, 251, 235),
        'bg_bot': (254, 243, 199),
        'accent': (217, 119, 6),           # Imperial Gold
    },
    {
        'file': 'science_of_divine_grace.jpg',
        'badge': 'VEDIC & TAMIL SACRED HERITAGE',
        'title': 'THE SCIENCE OF\nDIVINE GRACE',
        'tagline': 'Heavenly Glory via Tirukkuṟaḷ',
        'sub': 'திருக்குறள் வழி வான் புகழ் அடைதல்',
        'theme_color': (146, 64, 14),      # Temple Bronze / Ochre
        'bg_top': (255, 251, 235),
        'bg_bot': (253, 230, 138),
        'accent': (180, 83, 9),            # Sacred Gold
    },
]

W, H = 800, 1150

for b in new_books_meta:
    out_path = os.path.join(books_dir, b['file'])
    im = Image.new('RGB', (W, H), b['bg_top'])
    draw = ImageDraw.Draw(im)
    
    # 1. Subtle smooth vertical gradient
    for y in range(H):
        t = y / float(H)
        r = int(b['bg_top'][0] + (b['bg_bot'][0] - b['bg_top'][0]) * t)
        g = int(b['bg_top'][1] + (b['bg_bot'][1] - b['bg_top'][1]) * t)
        bl = int(b['bg_top'][2] + (b['bg_bot'][2] - b['bg_top'][2]) * t)
        draw.line([(0, y), (W, y)], fill=(r, g, bl))
    
    # 2. Luxury multi-tier borders
    draw.rectangle([35, 35, W-35, H-35], outline=b['accent'], width=4)
    draw.rectangle([45, 45, W-45, H-45], outline=b['accent'], width=1)
    draw.rectangle([55, 55, W-55, H-55], outline=b['accent'], width=1)
    
    # Corner ornamental accents
    corner_size = 28
    for (cx, cy) in [(55, 55), (W-55, 55), (55, H-55), (W-55, H-55)]:
        draw.rectangle([cx-8, cy-8, cx+8, cy+8], fill=b['accent'])
    
    # 3. Spine 3D simulation on left
    for x in range(35):
        alpha = int(45 * (1 - x / 35))
        draw.line([(x, 0), (x, H)], fill=(0, 0, 0))
    
    # 4. Top Category Badge
    badge_w = 360
    draw.rectangle([W//2 - badge_w//2, 115, W//2 + badge_w//2, 155], fill=b['theme_color'])
    draw.rectangle([W//2 - badge_w//2 - 2, 113, W//2 + badge_w//2 + 2, 157], outline=b['accent'], width=1)
    draw.text((W//2, 135), b['badge'], fill=(255, 255, 255), anchor='mm')
    
    # 5. Inner decorative content frame
    draw.rectangle([90, 205, W-90, 835], outline=b['accent'], width=2)
    draw.rectangle([96, 211, W-96, 829], outline=b['accent'], width=1)
    
    # 6. Title block
    lines = b['title'].split('\n')
    y_start = 390 if len(lines) == 1 else 330
    for i, line in enumerate(lines):
        draw.text((W//2, y_start + i * 75), line, fill=b['theme_color'], anchor='mm')
    
    # 7. Elegant divider
    div_y = 525 if len(lines) > 1 else 485
    draw.line([W//2 - 120, div_y, W//2 + 120, div_y], fill=b['accent'], width=3)
    draw.polygon([(W//2 - 7, div_y - 7), (W//2 + 7, div_y - 7), (W//2 + 7, div_y + 7), (W//2 - 7, div_y + 7)], fill=b['accent'])
    
    # 8. Tagline & Subtitle
    draw.text((W//2, div_y + 50), b['tagline'], fill=b['theme_color'], anchor='mm')
    draw.text((W//2, div_y + 95), b['sub'], fill=(71, 85, 105), anchor='mm')
    
    # 9. Lower Embellishment & Author Credit
    draw.line([W//2 - 60, 880, W//2 + 60, 880], fill=b['accent'], width=1)
    draw.text((W//2, 925), 'DR. J. ARAWINDHAN', fill=b['theme_color'], anchor='mm')
    draw.text((W//2, 965), 'Founder, Chancellor & Chief Mentor', fill=(100, 116, 139), anchor='mm')
    draw.text((W//2, 995), 'ACHARIYA World Class Education', fill=(148, 163, 184), anchor='mm')
    
    im.save(out_path, 'JPEG', quality=95, optimize=True)
    if os.path.exists(out_books_dir):
        out_copy_path = os.path.join(out_books_dir, b['file'])
        im.save(out_copy_path, 'JPEG', quality=95, optimize=True)
    print(f'Generated {out_path}')

print('All 5 new book covers generated successfully.')
