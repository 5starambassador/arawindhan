with open('src/data/books.ts', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ("slug: 'shambala-book',", "slug: 'shambala-book',\n    coverImage: '/images/books/shambala_book.jpg',"),
    ("slug: 'wow-parenting-book',", "slug: 'wow-parenting-book',\n    coverImage: '/images/books/wow_parenting.jpg',"),
    ("slug: 'financial-intelligence',", "slug: 'financial-intelligence',\n    coverImage: '/images/books/financial_intelligence.jpg',"),
    ("slug: 'emotional-intelligence',", "slug: 'emotional-intelligence',\n    coverImage: '/images/books/emotional_intelligence.jpg',"),
    ("slug: 'master-stroke',", "slug: 'master-stroke',\n    coverImage: '/images/books/master_stroke.jpg',"),
    ("slug: 'young-scientist',", "slug: 'young-scientist',\n    coverImage: '/images/books/young_scientist.jpg',"),
    ("slug: 'iravadh-book',", "slug: 'iravadh-book',\n    coverImage: '/images/books/airavatha.jpg',"),
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)

with open('src/data/books.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated books.ts with cover images')
