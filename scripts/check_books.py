import re
from pathlib import Path

c = Path('src/data/books.ts').read_text(encoding='utf-8')
items = re.findall(r"id:\s*'(BK-\d+)'.*?slug:\s*'([^']+)'", c, re.DOTALL)
for bid, slug in items:
    block_start = c.find(f"id: '{bid}'")
    block_end = c.find("id: 'BK-", block_start + 10)
    if block_end == -1: block_end = len(c)
    block = c[block_start:block_end]
    has_flip = 'flipbookPages:' in block
    has_sample = 'sampleChapters:' in block
    print(f"{bid} | {slug:35} | Flipbook: {str(has_flip):5} | SampleChapters: {str(has_sample):5}")
