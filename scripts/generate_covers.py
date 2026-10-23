import os
from PIL import Image, ImageDraw

books_dir = os.path.join('public', 'images', 'books')
os.makedirs(books_dir, exist_ok=True)

books_meta = [
    {
        'file': 'wow_parenting.jpg',
        'title': 'WOW PARENTING',
        'subtitle': 'School & Family Working as One',
        'theme_color': (180, 83, 9),      # Amber/Bronze
        'bg_top': (255, 251, 235),
        'bg_bot': (254, 243, 199),
        'accent': (217, 119, 6),
    },
    {
        'file': 'financial_intelligence.jpg',
        'title': 'FINANCIAL\nINTELLIGENCE',
        'subtitle': 'Resource Stewardship & Practical Wealth',
        'theme_color': (4, 120, 87),      # Emerald
        'bg_top': (236, 253, 245),
        'bg_bot': (209, 250, 229),
        'accent': (5, 150, 105),
    },
    {
        'file': 'emotional_intelligence.jpg',
        'title': 'EMOTIONAL\nINTELLIGENCE',
        'subtitle': 'Mind Agility & Relational Harmony',
        'theme_color': (30, 64, 175),     # Sapphire Blue
        'bg_top': (239, 246, 255),
        'bg_bot': (219, 234, 254),
        'accent': (37, 99, 235),
    },
    {
        'file': 'master_stroke.jpg',
        'title': 'MASTER STROKE',
        'subtitle': 'The Art of Sovereign Educational Execution',
        'theme_color': (159, 18, 60),     # Crimson/Burgundy
        'bg_top': (255, 241, 242),
        'bg_bot': (254, 205, 211),
        'accent': (190, 18, 60),
    },
    {
        'file': 'young_scientist.jpg',
        'title': 'THE YOUNG\nSCIENTIST',
        'subtitle': 'Curiosity, Discovery & Empirical Wonder',
        'theme_color': (15, 118, 110),    # Teal/Cyan
        'bg_top': (240, 253, 250),
        'bg_bot': (204, 251, 241),
        'accent': (13, 148, 136),
    },
    {
        'file': 'airavatha.jpg',
        'title': 'AIRAVATHA\n(IRAVADH)',
        'subtitle': '21 Stages of Teacher Consciousness',
        'theme_color': (120, 53, 15),     # Antique Gold/Bronze
        'bg_top': (255, 251, 235),
        'bg_bot': (253, 230, 138),
        'accent': (180, 83, 9),
    },
]

W, H = 800, 1150

for b in books_meta:
    out_path = os.path.join(books_dir, b['file'])
    im = Image.new('RGB', (W, H), b['bg_top'])
    draw = ImageDraw.Draw(im)
    
    # Draw vertical gradient
    for y in range(H):
        r = int(b['bg_top'][0] + (b['bg_bot'][0] - b['bg_top'][0]) * (y / H))
        g = int(b['bg_top'][1] + (b['bg_bot'][1] - b['bg_top'][1]) * (y / H))
        bl = int(b['bg_top'][2] + (b['bg_bot'][2] - b['bg_top'][2]) * (y / H))
        draw.line([(0, y), (W, y)], fill=(r, g, bl))
    
    # Outer gold border
    draw.rectangle([35, 35, W-35, H-35], outline=b['accent'], width=4)
    draw.rectangle([45, 45, W-45, H-45], outline=b['accent'], width=1)
    
    # Spine shading simulation on left
    for x in range(35):
        alpha = int(40 * (1 - x / 35))
        draw.line([(x, 0), (x, H)], fill=(0, 0, 0))
    
    # Title badge & header
    draw.rectangle([W//2 - 160, 120, W//2 + 160, 160], fill=b['theme_color'])
    draw.text((W//2, 140), 'ACHARIYA CLASSIC EDITION', fill=(255, 255, 255), anchor='mm')
    
    # Center decorative frame
    draw.rectangle([90, 220, W-90, 820], outline=b['accent'], width=2)
    
    # Title
    lines = b['title'].split('\n')
    y_start = 380 if len(lines) == 1 else 340
    for i, line in enumerate(lines):
        draw.text((W//2, y_start + i * 70), line, fill=b['theme_color'], anchor='mm')
    
    # Divider
    draw.line([W//2 - 90, 520, W//2 + 90, 520], fill=b['accent'], width=2)
    
    # Subtitle
    draw.text((W//2, 570), b['subtitle'], fill=(71, 85, 105), anchor='mm')
    
    # Author
    draw.text((W//2, 920), 'DR. J. ARAWINDHAN', fill=b['theme_color'], anchor='mm')
    draw.text((W//2, 960), 'Founder & Chancellor, ACHARIYA Group', fill=(100, 116, 139), anchor='mm')
    
    im.save(out_path, 'JPEG', quality=92, optimize=True)
    print('Generated', b['file'])
