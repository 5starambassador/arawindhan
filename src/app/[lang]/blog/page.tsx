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

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  const blogSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `https://arawindhan.com/${lang}/blog#webpage`,
        url: `https://arawindhan.com/${lang}/blog`,
        name:
          lang === 'ta'
            ? 'நியோ சேபியன்ஸ் & எதிர்கால கல்வி சிந்தனைகள்'
            : 'Neo Sapiens & The Future of Child Education',
        description:
          lang === 'ta'
            ? 'மனித ஆற்றலின் பரிணாமம், பன்முக நுண்ணறிவு மற்றும் எதிர்கால தயார்நிலை குறித்த ஆராய்ச்சிக் கட்டுரைகள்.'
            : 'Foundational essays exploring human potential, cognitive evolution, multiple intelligences, and the transition from rote memorization to future readiness.',
        inLanguage: lang,
        isPartOf: { '@id': 'https://arawindhan.com/#website' },
        breadcrumb: { '@id': `https://arawindhan.com/${lang}/blog#breadcrumb` },
        mainEntity: { '@id': `https://arawindhan.com/${lang}/blog#blog` },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://arawindhan.com/#website',
        url: 'https://arawindhan.com/',
        name: 'Dr. J. Arawindhan',
        inLanguage: lang,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://arawindhan.com/${lang}/blog#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: lang === 'ta' ? 'முகப்பு' : 'Home',
            item: `https://arawindhan.com/${lang}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: lang === 'ta' ? 'வலைப்பதிவு' : 'Blog',
            item: `https://arawindhan.com/${lang}/blog`,
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': 'https://arawindhan.com/#person',
        name: lang === 'ta' ? 'முனைவர் ஜே. அரவிந்தன்' : 'Dr. J. Arawindhan',
        jobTitle: lang === 'ta' ? 'நிறுவனர் & கல்வியாளர்' : 'Founder & Educationist',
        url: 'https://arawindhan.com/',
      },
      {
        '@type': 'Blog',
        '@id': `https://arawindhan.com/${lang}/blog#blog`,
        url: `https://arawindhan.com/${lang}/blog`,
        name:
          lang === 'ta'
            ? 'நியோ சேபியன்ஸ் & எதிர்கால கல்வி சிந்தனைகள்'
            : 'Neo Sapiens & The Future of Child Education',
        description:
          lang === 'ta'
            ? 'மனித ஆற்றல், நியோ சேபியன்ஸ், பன்முக நுண்ணறிவு மற்றும் AI யுகத்திற்கான எதிர்கால தலைமுறையை உருவாக்குதல் குறித்த ஆராய்ச்சிக் கட்டுரைகள்.'
            : 'Research essays and thought leadership on human potential, Neo Sapiens, multiple intelligences, and preparing the next generation for an AI-driven century.',
        inLanguage: lang,
        author: { '@id': 'https://arawindhan.com/#person' },
        blogPost: [
          {
            '@type': 'BlogPosting',
            '@id': `https://arawindhan.com/${lang}/blog/the-inspiring-journey-of-dr-j-arawindhan-founder-of-achariya#post`,
            url: `https://arawindhan.com/${lang}/blog/the-inspiring-journey-of-dr-j-arawindhan-founder-of-achariya`,
            mainEntityOfPage: `https://arawindhan.com/${lang}/blog/the-inspiring-journey-of-dr-j-arawindhan-founder-of-achariya`,
            headline:
              'The Inspiring Journey of Dr. J. Arawindhan, Founder of Achariya: From Class to World Class',
            description:
              'Explore the visionary journey of Dr. J. Arawindhan, Founder of ACHARIYA World Class Education, from 1 school in Pondicherry to a world-class education network.',
            datePublished: '2026-10-24',
            inLanguage: lang,
            keywords: 'Dr. J. Arawindhan, ACHARIYA, Class to World Class',
            articleSection: 'Visionary Leadership & Educational Innovation',
            author: { '@id': 'https://arawindhan.com/#person' },
          },
          {
            '@type': 'BlogPosting',
            '@id': `https://arawindhan.com/${lang}/blog/intelligent-vs-future-ready-kids-what-should-the-next-generation-learn#post`,
            url: `https://arawindhan.com/${lang}/blog/intelligent-vs-future-ready-kids-what-should-the-next-generation-learn`,
            mainEntityOfPage: `https://arawindhan.com/${lang}/blog/intelligent-vs-future-ready-kids-what-should-the-next-generation-learn`,
            headline:
              'Intelligent vs. Future-Ready Kids: What Should the Next Generation Learn? | Dr. J. Arawindhan on the Gobinath Podcast',
            description:
              'Explore the critical difference between intelligent and future-ready children, featuring key parenting and educational insights.',
            datePublished: '2025-02-22',
            inLanguage: lang,
            keywords: 'Future-Ready Kids, Multiple Intelligences, Gobinath Podcast',
            articleSection: 'Parenting & Education',
            author: { '@id': 'https://arawindhan.com/#person' },
          },
          {
            '@type': 'BlogPosting',
            '@id': `https://arawindhan.com/${lang}/blog/how-to-prepare-the-next-generation-of-kids-intelligent-or-future-ready#post`,
            url: `https://arawindhan.com/${lang}/blog/how-to-prepare-the-next-generation-of-kids-intelligent-or-future-ready`,
            mainEntityOfPage: `https://arawindhan.com/${lang}/blog/how-to-prepare-the-next-generation-of-kids-intelligent-or-future-ready`,
            headline:
              'How to Prepare the Next Generation of Kids: Intelligent or Future-Ready?',
            description:
              'Discover how to prepare the next generation of children for the future through critical thinking, creativity, and emotional intelligence.',
            datePublished: '2026-10-24',
            inLanguage: lang,
            keywords: 'Future-Ready Kids, Child Education, Gobinath Podcast',
            articleSection: 'Future-Ready Child Education',
            author: { '@id': 'https://arawindhan.com/#person' },
          },
          {
            '@type': 'BlogPosting',
            '@id': `https://arawindhan.com/${lang}/blog/how-multiple-intelligences-theory-shapes-child-development#post`,
            url: `https://arawindhan.com/${lang}/blog/how-multiple-intelligences-theory-shapes-child-development`,
            mainEntityOfPage: `https://arawindhan.com/${lang}/blog/how-multiple-intelligences-theory-shapes-child-development`,
            headline:
              'How Multiple Intelligences Theory Shapes Child Development | Dr. J. Arawindhan on Gobinath Podcast',
            description:
              "Explore how Howard Gardner's Multiple Intelligences Theory shapes child development and learning beyond exams.",
            datePublished: '2026-10-24',
            inLanguage: lang,
            keywords: 'Multiple Intelligences, Howard Gardner, Child Development',
            articleSection: 'Multiple Intelligences & Child Development',
            author: { '@id': 'https://arawindhan.com/#person' },
          },
          {
            '@type': 'BlogPosting',
            '@id': `https://arawindhan.com/${lang}/blog/personal-intelligence-ecosystem-developing-childrens-intelligence-beyond-academics#post`,
            url: `https://arawindhan.com/${lang}/blog/personal-intelligence-ecosystem-developing-childrens-intelligence-beyond-academics`,
            mainEntityOfPage: `https://arawindhan.com/${lang}/blog/personal-intelligence-ecosystem-developing-childrens-intelligence-beyond-academics`,
            headline:
              "Personal Intelligence Ecosystem: Developing Children's Intelligence Beyond Academics | Dr. J. Arawindhan",
            description:
              "Discover how a Personal Intelligence Ecosystem nurtures children's intelligence beyond academics through creativity and critical thinking.",
            datePublished: '2026-10-24',
            inLanguage: lang,
            keywords: 'Personal Intelligence Ecosystem, Child Development, Critical Thinking',
            articleSection: 'Holistic Child Development',
            author: { '@id': 'https://arawindhan.com/#person' },
          },
          {
            '@type': 'BlogPosting',
            '@id': `https://arawindhan.com/${lang}/blog/how-to-encourage-your-child-and-discover-their-unique-talents#post`,
            url: `https://arawindhan.com/${lang}/blog/how-to-encourage-your-child-and-discover-their-unique-talents`,
            mainEntityOfPage: `https://arawindhan.com/${lang}/blog/how-to-encourage-your-child-and-discover-their-unique-talents`,
            headline:
              'How to Encourage Your Child and Discover Their Unique Talents | Dr. J. Arawindhan',
            description:
              'Discover how parents can encourage children, recognize individual strengths beyond marks, and avoid comparisons.',
            datePublished: '2026-10-24',
            inLanguage: lang,
            keywords: 'Parenting, Child Talents, WOW Parenting',
            articleSection: 'Parenting & Child Potential',
            author: { '@id': 'https://arawindhan.com/#person' },
          },
          {
            '@type': 'BlogPosting',
            '@id': `https://arawindhan.com/${lang}/blog/how-iq-eq-sq-and-xyz-axis-help-shape-future-ready-individuals#post`,
            url: `https://arawindhan.com/${lang}/blog/how-iq-eq-sq-and-xyz-axis-help-shape-future-ready-individuals`,
            mainEntityOfPage: `https://arawindhan.com/${lang}/blog/how-iq-eq-sq-and-xyz-axis-help-shape-future-ready-individuals`,
            headline:
              'How IQ, EQ, SQ, and the XYZ Axis Can Help Shape Future-Ready Individuals: Insights from Dr. J. Arawindhan',
            description:
              'Explore how IQ, EQ, SQ, Social Quotient, Self Quotient, Advisory Quotient, and the XYZ Axis shape future-ready individuals.',
            datePublished: '2026-10-24',
            inLanguage: lang,
            keywords: 'IQ EQ SQ, XYZ Axis, Personal Development',
            articleSection: 'Mindset & Human Potential',
            author: { '@id': 'https://arawindhan.com/#person' },
          },
          {
            '@type': 'BlogPosting',
            '@id': `https://arawindhan.com/${lang}/blog/super-intelligence-and-the-future-of-children-are-our-kids-ready#post`,
            url: `https://arawindhan.com/${lang}/blog/super-intelligence-and-the-future-of-children-are-our-kids-ready`,
            mainEntityOfPage: `https://arawindhan.com/${lang}/blog/super-intelligence-and-the-future-of-children-are-our-kids-ready`,
            headline:
              'Super Intelligence and the Future of Children: Are Our Kids Ready? | Dr. J. Arawindhan',
            description:
              "Explore how Super Intelligence (SI) is transforming children's education and child development, with insights from Dr. J. Arawindhan.",
            datePublished: '2025-02-21',
            inLanguage: lang,
            keywords: 'Super Intelligence, AI in Education, Future-Ready Children',
            articleSection: 'Future Education',
            author: { '@id': 'https://arawindhan.com/#person' },
          },
          {
            '@type': 'BlogPosting',
            '@id': `https://arawindhan.com/${lang}/blog/who-are-neo-sapiens-future-of-human-potential-and-child-education#post`,
            url: `https://arawindhan.com/${lang}/blog/who-are-neo-sapiens-future-of-human-potential-and-child-education`,
            mainEntityOfPage: `https://arawindhan.com/${lang}/blog/who-are-neo-sapiens-future-of-human-potential-and-child-education`,
            headline:
              'Who are Neo Sapiens? Exploring the Future of Human Potential and Child Education | Dr. J. Arawindhan on the Gobinath Podcast',
            description:
              "Explore the meaning of Neo Sapiens, its connection to children's education, future-ready skills, creativity, and critical thinking.",
            datePublished: '2026-10-24',
            inLanguage: lang,
            keywords: 'Neo Sapiens, Gobinath Podcast, Future Skills',
            articleSection: 'Human Evolution & Future Education',
            author: { '@id': 'https://arawindhan.com/#person' },
          },
          {
            '@type': 'BlogPosting',
            '@id': `https://arawindhan.com/${lang}/blog/how-to-protect-the-next-generation-from-ai-building-smart-independent-and-future-ready-children#post`,
            url: `https://arawindhan.com/${lang}/blog/how-to-protect-the-next-generation-from-ai-building-smart-independent-and-future-ready-children`,
            mainEntityOfPage: `https://arawindhan.com/${lang}/blog/how-to-protect-the-next-generation-from-ai-building-smart-independent-and-future-ready-children`,
            headline:
              'How to Protect the Next Generation from AI: Building Smart, Independent, and Future-Ready Children | Dr. J. Arawindhan',
            description:
              'Discover how to protect the next generation from AI dependency and nurture independent, creative, future-ready children.',
            datePublished: '2025-02-23',
            inLanguage: lang,
            keywords: 'AI and Children, Future-Ready Education, Dr. J. Arawindhan',
            articleSection: 'AI & Child Development',
            author: { '@id': 'https://arawindhan.com/#person' },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogListClient blogs={blogsList} />
    </>
  );
}

