import React from 'react';
import type { Metadata } from 'next';
import { blogsList } from '@/data/blogs';
import { BlogListClient } from '@/components/BlogListClient';
import { Language } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  if (lang === 'ta') {
    return {
      title: 'ஆய்வுக் கட்டுரைகள் & சிந்தனைகள் | முனைவர் ஜே. அரவிந்தன் (Arawindhan Blog)',
      description:
        'நியோ சேபியன்ஸ், மனித ஆற்றலின் பரிணாமம், குழந்தை வளர்ப்பு மற்றும் 25+ ஆண்டுகால கல்வி அனுபவத்தின் அடிப்படையில் முனைவர் ஜே. அரவிந்தன் எழுதிய ஆராய்ச்சிக் கட்டுரைகள்.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta/blog',
        languages: {
          en: 'https://www.arawindhan.com/en/blog',
          ta: 'https://www.arawindhan.com/ta/blog',
          'x-default': 'https://www.arawindhan.com/en/blog',
        },
      },
    };
  }

  return {
    title: 'Research Essays & Thought Leadership | Dr. J. Arawindhan Blog',
    description:
      'Explore research essays, cognitive frameworks, and thought leadership on Neo Sapiens, multiple intelligences, and the future of child education by Dr. J. Arawindhan.',
    alternates: {
      canonical: 'https://www.arawindhan.com/en/blog',
      languages: {
        en: 'https://www.arawindhan.com/en/blog',
        ta: 'https://www.arawindhan.com/ta/blog',
        'x-default': 'https://www.arawindhan.com/en/blog',
      },
    },
  };
}

export default async function BlogPage() {
  return <BlogListClient blogs={blogsList} />;
}
