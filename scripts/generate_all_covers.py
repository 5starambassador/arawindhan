import os
from PIL import Image, ImageDraw, ImageFont

books_dir = os.path.join('public', 'images', 'books')
os.makedirs(books_dir, exist_ok=True)

out_books_dir = os.path.join('out', 'images', 'books')
if os.path.exists('out'):
    os.makedirs(out_books_dir, exist_ok=True)

# System fonts
font_georgia_bold = r'C:\Windows\Fonts\georgiab.ttf'
font_georgia = r'C:\Windows\Fonts\georgia.ttf'
font_arial_bold = r'C:\Windows\Fonts\arialbd.ttf'
font_arial = r'C:\Windows\Fonts\arial.ttf'

title_font = ImageFont.truetype(font_georgia_bold, 50)
title_font_lg = ImageFont.truetype(font_georgia_bold, 56)
tagline_font = ImageFont.truetype(font_georgia, 22)
sub_font = ImageFont.truetype(font_arial, 18)
badge_font = ImageFont.truetype(font_arial_bold, 16)
author_font = ImageFont.truetype(font_georgia_bold, 24)
cred_font = ImageFont.truetype(font_arial, 16)

all_covers = [
    {
        'file': 'wow_parenting.jpg',
        'badge': 'PARENTING & FAMILY HARMONY',
        'title': 'WOW\nPARENTING',
        'tagline': 'School & Family Working as One',
        'sub': 'Because Learning Ends at Home',
        'theme_color': (146, 64, 14),      # Amber/Bronze
        'bg_top': (255, 251, 235),
        'bg_bot': (254, 243, 199),
        'accent': (217, 119, 6),
    },
    {
        'file': 'financial_intelligence.jpg',
        'badge': 'FINANCIAL MASTERY (FI)',
        'title': 'FINANCIAL\nINTELLIGENCE',
        'tagline': 'Resource Stewardship & Value Creation',
        'sub': 'Practical Wealth Literacy for the Young Mind',
        'theme_color': (6, 95, 70),        # Deep Emerald
        'bg_top': (236, 253, 245),
        'bg_bot': (209, 250, 229),
        'accent': (5, 150, 105),
    },
    {
        'file': 'emotional_intelligence.jpg',
        'badge': 'EMOTIONAL MASTERY (EI)',
        'title': 'EMOTIONAL\nINTELLIGENCE',
        'tagline': 'Mastering the Inner Weather',
        'sub': 'Self-Regulation, Empathy & Conscious Choice',
        'theme_color': (30, 58, 138),      # Deep Sapphire
        'bg_top': (239, 246, 255),
        'bg_bot': (219, 234, 254),
        'accent': (37, 99, 235),
    },
    {
        'file': 'master_stroke.jpg',
        'badge': 'EXECUTIVE LEADERSHIP',
        'title': 'MASTER\nSTROKE',
        'tagline': 'The Art of Execution',
        'sub': 'Strategic Leadership & Institutional Architecture',
        'theme_color': (159, 18, 57),      # Crimson Rose
        'bg_top': (255, 241, 242),
        'bg_bot': (254, 205, 211),
        'accent': (190, 18, 60),
    },
    {
        'file': 'young_scientist.jpg',
        'badge': 'STEM & EMPIRICAL INQUIRY',
        'title': 'THE YOUNG\nSCIENTIST',
        'tagline': 'Igniting Curiosity & Discovery',
        'sub': 'Hands-On Experimentation in the Classroom',
        'theme_color': (15, 118, 110),     # Teal Cyan
        'bg_top': (240, 253, 250),
        'bg_bot': (204, 251, 241),
        'accent': (13, 148, 136),
    },
    {
        'file': 'airavatha.jpg',
        'badge': 'TEACHER CONSCIOUSNESS',
        'title': 'IRAVADH\n(AIRAVATHA)',
        'tagline': '21 Levels of Teacher Evolution',
        'sub': 'The Sacred Dignity of Educational Mentorship',
        'theme_color': (120, 53, 15),      # Antique Bronze
        'bg_top': (255, 251, 235),
        'bg_bot': (253, 230, 138),
        'accent': (180, 83, 9),
    },
    {
        'file': 'andava_victory_mode.jpg',
        'badge': 'CONSCIOUSNESS & MASTERY',
        'title': 'ANDAVA:\nVICTORY MODE',
        'tagline': 'Switching from Victim to Creator',
        'sub': 'Engineering Daily Triumph in Life & Work',
        'theme_color': (153, 27, 27),      # Regal Crimson
        'bg_top': (255, 245, 245),
        'bg_bot': (254, 226, 226),
        'accent': (217, 119, 6),
    },
    {
        'file': 'yoga_of_personality.jpg',
        'badge': 'ORIGINAL SPEECH TREATISE',
        'title': 'THE YOGA OF\nPERSONALITY',
        'tagline': 'Becoming Who You Already Are',
        'sub': 'The Inner Union of Thought, Action & Magnetism',
        'theme_color': (30, 58, 138),      # Midnight Blue
        'bg_top': (240, 246, 255),
        'bg_bot': (219, 234, 254),
        'accent': (202, 138, 4),
    },
    {
        'file': 'from_knowing_to_doing.jpg',
        'badge': 'YOUTH EMPOWERMENT BHARAT',
        'title': 'FROM KNOWING\nTO DOING',
        'tagline': 'Four Pillars of Youth Empowerment',
        'sub': 'Building Skill, Talent & Purpose for Gen Z',
        'theme_color': (6, 95, 70),        # Deep Emerald
        'bg_top': (236, 253, 245),
        'bg_bot': (209, 250, 229),
        'accent': (180, 83, 9),
    },
    {
        'file': 'lions_bank_account.jpg',
        'badge': 'WEALTH ARCHITECTURE',
        'title': "THE LION'S\nBANK ACCOUNT",
        'tagline': 'Stop Chasing Rats, Start Hunting Deer',
        'sub': '"Your first salary is not a flex. It is a trap."',
        'theme_color': (15, 23, 42),       # Obsidian Slate
        'bg_top': (255, 251, 235),
        'bg_bot': (254, 243, 199),
        'accent': (217, 119, 6),
    },
    {
        'file': 'science_of_divine_grace.jpg',
        'badge': 'SACRED HERITAGE & DHARMA',
        'title': 'SCIENCE OF\nDIVINE GRACE',
        'tagline': 'Heavenly Glory via Tirukkuṟaḷ',
        'sub': 'The Technology of Thiruvarul & Vaan Pugazh',
        'theme_color': (146, 64, 14),      # Temple Bronze
        'bg_top': (255, 251, 235),
        'bg_bot': (253, 230, 138),
        'accent': (180, 83, 9),
    },
]

W, H = 800, 1150

for b in all_covers:
    out_path = os.path.join(books_dir, b['file'])
    im = Image.new('RGB', (W, H), b['bg_top'])
    draw = ImageDraw.Draw(im)
    
    # 1. Smooth gradient background
    for y in range(H):
        t = y / float(H)
        r = int(b['bg_top'][0] + (b['bg_bot'][0] - b['bg_top'][0]) * t)
        g = int(b['bg_top'][1] + (b['bg_bot'][1] - b['bg_top'][1]) * t)
        bl = int(b['bg_top'][2] + (b['bg_bot'][2] - b['bg_top'][2]) * t)
        draw.line([(0, y), (W, y)], fill=(r, g, bl))
    
    # 2. Multi-tier luxury borders
    draw.rectangle([35, 35, W-35, H-35], outline=b['accent'], width=4)
    draw.rectangle([46, 46, W-46, H-46], outline=b['accent'], width=1)
    draw.rectangle([56, 56, W-56, H-56], outline=b['accent'], width=1)
    
    # Corner ornamental squares
    for (cx, cy) in [(56, 56), (W-56, 56), (56, H-56), (W-56, H-56)]:
        draw.rectangle([cx-8, cy-8, cx+8, cy+8], fill=b['accent'])
    
    # 3. 3D Spine depth on left
    for x in range(35):
        alpha = int(45 * (1 - x / 35))
        draw.line([(x, 0), (x, H)], fill=(0, 0, 0))
    
    # 4. Top Category Badge
    badge_w = 340
    draw.rectangle([W//2 - badge_w//2, 110, W//2 + badge_w//2, 150], fill=b['theme_color'])
    draw.rectangle([W//2 - badge_w//2 - 2, 108, W//2 + badge_w//2 + 2, 152], outline=b['accent'], width=1)
    draw.text((W//2, 130), b['badge'], font=badge_font, fill=(255, 255, 255), anchor='mm')
    
    # 5. Inner decorative content frame
    draw.rectangle([90, 200, W-90, 840], outline=b['accent'], width=2)
    draw.rectangle([98, 208, W-98, 832], outline=b['accent'], width=1)
    
    # 6. Title block with Large TrueType Font
    lines = b['title'].split('\n')
    y_start = 380 if len(lines) == 1 else 320
    curr_font = title_font_lg if len(lines) == 1 else title_font
    for i, line in enumerate(lines):
        draw.text((W//2, y_start + i * 72), line, font=curr_font, fill=b['theme_color'], anchor='mm')
    
    # 7. Elegant divider with diamond emblem
    div_y = 515 if len(lines) > 1 else 470
    draw.line([W//2 - 130, div_y, W//2 + 130, div_y], fill=b['accent'], width=3)
    draw.polygon([(W//2 - 8, div_y - 8), (W//2 + 8, div_y - 8), (W//2 + 8, div_y + 8), (W//2 - 8, div_y + 8)], fill=b['accent'])
    
    # 8. Tagline & Subtitle with TrueType fonts
    draw.text((W//2, div_y + 55), b['tagline'], font=tagline_font, fill=b['theme_color'], anchor='mm')
    draw.text((W//2, div_y + 105), b['sub'], font=sub_font, fill=(71, 85, 105), anchor='mm')
    
    # 9. Lower Embellishment & Author Credit
    draw.line([W//2 - 70, 885, W//2 + 70, 885], fill=b['accent'], width=1)
    draw.text((W//2, 925), 'DR. J. ARAWINDHAN', font=author_font, fill=b['theme_color'], anchor='mm')
    draw.text((W//2, 965), 'Founder, Chancellor & Chief Mentor', font=cred_font, fill=(100, 116, 139), anchor='mm')
    draw.text((W//2, 995), 'ACHARIYA World Class Education', font=cred_font, fill=(148, 163, 184), anchor='mm')
    
    im.save(out_path, 'JPEG', quality=95, optimize=True)
    if os.path.exists(out_books_dir):
        out_copy_path = os.path.join(out_books_dir, b['file'])
        im.save(out_copy_path, 'JPEG', quality=95, optimize=True)
    print(f'Generated {out_path}')

print('All 11 book covers regenerated with high-res typography!')
