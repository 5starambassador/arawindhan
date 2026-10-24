import os
from PIL import Image, ImageFilter

src_path = r'C:\Users\Achariya\.gemini\antigravity-ide\brain\ca2f9ddf-c448-4e7d-af7c-3ed5112ee5eb\.user_uploaded\media_1792803895744.png'
im = Image.open(src_path).convert('RGB')

# Crop out the outer decorative frame lines
# left: 7, top: 2, right: 411, bottom: 407
cropped = im.crop((7, 2, 411, 407))

# Resize with high quality Lanczos filter to 800x800
target_w, target_h = 800, 800
scaled = cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Subtle gentle unsharp mask for crisp high-DPI clarity
sharpened = scaled.filter(ImageFilter.UnsharpMask(radius=1.2, percent=110, threshold=3))

# Save to public/images/portrait.jpg and out/images/portrait.jpg
out_path = os.path.join('public', 'images', 'portrait.jpg')
sharpened.save(out_path, 'JPEG', quality=95, optimize=True)
print('Saved', out_path, sharpened.size)

if os.path.exists('out/images'):
    out_dist = os.path.join('out', 'images', 'portrait.jpg')
    sharpened.save(out_dist, 'JPEG', quality=95, optimize=True)
    print('Saved', out_dist)

# Also save a dedicated official_portrait.jpg
off_path = os.path.join('public', 'images', 'official_portrait.jpg')
sharpened.save(off_path, 'JPEG', quality=95, optimize=True)
