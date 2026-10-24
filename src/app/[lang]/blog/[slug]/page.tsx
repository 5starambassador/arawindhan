import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogsList } from '@/data/blogs';
import { BlogArticleClient } from '@/components/BlogArticleClient';
import { Language } from '@/types';

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  const languages: Language[] = ['en', 'ta'];

  for (const lang of languages) {
    for (const blog of blogsList) {
      params.push({ lang, slug: blog.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';
  const blog = blogsList.find((b) => b.slug === resolved.slug);

  if (!blog) {
    return {
      title: 'Article Not Found | Dr. J. Arawindhan',
    };
  }

  const title = (blog.metaTitle && blog.metaTitle[lang]) || blog.title[lang];
  const description = blog.metaDescription[lang];

  return {
    title: `${title} | Dr. J. Arawindhan`,
    description,
    keywords: [blog.focusKeyword[lang], ...blog.relatedKeywords[lang]],
    alternates: {
      canonical: `https://www.arawindhan.com/${lang}/blog/${blog.slug}`,
      languages: {
        en: `https://www.arawindhan.com/en/blog/${blog.slug}`,
        ta: `https://www.arawindhan.com/ta/blog/${blog.slug}`,
        'x-default': `https://www.arawindhan.com/en/blog/${blog.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.arawindhan.com/${lang}/blog/${blog.slug}`,
      siteName: 'Dr. J. Arawindhan Digital Knowledge Platform',
      images: [
        {
          url: 'https://www.arawindhan.com/images/avatar.jpg',
          width: 800,
          height: 800,
          alt: title,
        },
      ],
      type: 'article',
      publishedTime: blog.publishedAt,
      authors: ['Dr. J. Arawindhan'],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const resolved = await params;
  const blog = blogsList.find((b) => b.slug === resolved.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogsList.filter((b) => b.slug !== resolved.slug);

  return <BlogArticleClient blog={blog} relatedBlogs={relatedBlogs} />;
}
