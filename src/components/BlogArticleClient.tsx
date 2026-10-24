'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Radio,
  HelpCircle,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { BlogPost } from '@/types';
import { ClaimBadge } from '@/components/ClaimBadge';
import { useLanguage } from '@/context/LanguageContext';

export const BlogArticleClient: React.FC<{
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}> = ({ blog, relatedBlogs }) => {
  const { lang } = useLanguage();

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.arawindhan.com/${lang}/blog/${blog.slug}`,
    },
    headline: blog.title[lang],
    description: blog.metaDescription[lang],
    image: 'https://www.arawindhan.com/favicon.ico',
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Dr. J. Arawindhan',
      jobTitle: 'Founder, Chancellor & Chief Mentor',
      worksFor: {
        '@type': 'Organization',
        name: 'ACHARIYA World Class Education',
      },
      url: 'https://www.arawindhan.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dr. J. Arawindhan Digital Knowledge Platform',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.arawindhan.com/images/avatar.jpg',
      },
    },
    keywords: [blog.focusKeyword[lang], ...blog.relatedKeywords[lang]].join(', '),
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: blog.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question[lang],
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer[lang],
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div className="section-py" style={{ minHeight: '100vh', background: 'var(--bg-gradient)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          {/* Breadcrumbs Navigation */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.82rem',
              color: '#64748B',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <Link href={`/${lang}`} style={{ color: '#64748B', textDecoration: 'none' }}>
              {lang === 'ta' ? 'முகப்பு' : 'Home'}
            </Link>
            <ChevronRight size={13} />
            <Link href={`/${lang}/blog`} style={{ color: '#64748B', textDecoration: 'none' }}>
              {lang === 'ta' ? 'வலைப்பதிவு' : 'Blog'}
            </Link>
            <ChevronRight size={13} />
            <span style={{ color: '#92400E', fontWeight: 600 }}>{blog.category[lang]}</span>
          </nav>

          {/* Article Header Card */}
          <header
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '24px',
              padding: 'clamp(1.75rem, 4vw, 3rem)',
              boxShadow: '0 8px 30px rgba(15, 23, 42, 0.04)',
              marginBottom: '2.5rem',
            }}
          >
            {/* Badges & Meta Row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    background: '#FFFBEB',
                    border: '1px solid #FDE68A',
                    color: '#92400E',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {blog.category[lang]}
                </span>

                <span
                  style={{
                    background: '#FEF3C7',
                    border: '1px solid #FCD34D',
                    color: '#78350F',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                  }}
                >
                  🔑 {lang === 'ta' ? 'முக்கிய சொல்:' : 'Focus Keyword:'} {blog.focusKeyword[lang]}
                </span>
              </div>

              <ClaimBadge claimId={blog.claimId || 'CLM-001'} language={lang} />
            </div>

            {/* Article H1 Title */}
            <h1
              style={{
                fontSize: 'clamp(1.6rem, 3.8vw, 2.5rem)',
                fontWeight: 900,
                color: '#0F172A',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {blog.title[lang]}
            </h1>

            {/* Meta Description / Lead Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: '#475569',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
                borderLeft: '4px solid #D97706',
                paddingLeft: '1rem',
                fontStyle: 'normal',
              }}
            >
              {blog.metaDescription[lang]}
            </p>

            {/* Podcast Attribution Pill */}
            {blog.podcastReference && (
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.75rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#D97706',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <Radio size={16} />
                </div>
                <div style={{ fontSize: '0.85rem', color: '#334155', fontWeight: 600 }}>
                  {blog.podcastReference[lang]}
                </div>
              </div>
            )}

            {/* Author, Publish Date, Reading Time Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid #F1F5F9',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    border: '2px solid #FDE68A',
                    boxShadow: '0 2px 8px rgba(217, 119, 6, 0.2)',
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                    background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                  }}
                >
                  <img
                    src="/images/avatar.jpg"
                    alt="Dr. J. Arawindhan"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>
                    {blog.author[lang]}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    {lang === 'ta'
                      ? 'நிறுவனர், ஆச்சாரியா கல்வி நிறுவனங்கள் (101 பள்ளிகள், 18 கல்லூரிகள்)'
                      : 'Founder & Chancellor, ACHARIYA World Class Education (101 Schools, 18 Colleges)'}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  fontSize: '0.82rem',
                  color: '#64748B',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={15} color="#D97706" />
                  <span>{blog.publishedAt}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={15} color="#D97706" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Article Body + Table of Contents Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
            }}
          >
            {/* Main Content Area */}
            <main
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)',
              }}
            >
              {/* Table of Contents Inline */}
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    color: '#0F172A',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <BookOpen size={16} color="#D97706" />
                  <span>{lang === 'ta' ? 'பொருளடக்கம்' : 'Table of Contents'}</span>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '0.5rem 1rem',
                  }}
                >
                  {blog.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      style={{
                        fontSize: '0.84rem',
                        color: '#475569',
                        textDecoration: 'none',
                        lineHeight: 1.4,
                        transition: 'color 0.15s ease',
                      }}
                    >
                      {section.heading[lang]}
                    </a>
                  ))}
                  <a
                    href="#faqs"
                    style={{
                      fontSize: '0.84rem',
                      color: '#B45309',
                      fontWeight: 700,
                      textDecoration: 'none',
                      lineHeight: 1.4,
                    }}
                  >
                    {lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)' : 'Frequently Asked Questions (FAQs)'}
                  </a>
                </div>
              </div>

              {/* Sections Rendered */}
              {blog.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  style={{
                    marginBottom: '3rem',
                    scrollMarginTop: '100px',
                  }}
                >
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginBottom: '1rem',
                      fontFamily: 'var(--font-heading)',
                      borderBottom: '2px solid #F1F5F9',
                      paddingBottom: '0.5rem',
                    }}
                  >
                    {section.heading[lang]}
                  </h2>

                  {section.content[lang].map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: '1.02rem',
                        lineHeight: 1.8,
                        color: '#334155',
                        marginBottom: '1.15rem',
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  {/* Subsections if present */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div
                      style={{
                        marginTop: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                      }}
                    >
                      {section.subsections.map((sub, j) => (
                        <div
                          key={j}
                          style={{
                            background: '#F8FAFC',
                            border: '1px solid #E2E8F0',
                            borderRadius: '14px',
                            padding: '1.25rem 1.5rem',
                          }}
                        >
                          <h3
                            style={{
                              fontSize: '1.1rem',
                              fontWeight: 700,
                              color: '#92400E',
                              marginBottom: '0.65rem',
                            }}
                          >
                            {sub.title[lang]}
                          </h3>
                          {sub.content[lang].map((subp, k) => (
                            <p
                              key={k}
                              style={{
                                fontSize: '0.96rem',
                                lineHeight: 1.7,
                                color: '#334155',
                                marginBottom: '0.5rem',
                              }}
                            >
                              {subp}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* Frequently Asked Questions (FAQs) Accordion */}
              <section
                id="faqs"
                style={{
                  marginTop: '4rem',
                  paddingTop: '2.5rem',
                  borderTop: '2px solid #E2E8F0',
                  scrollMarginTop: '100px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
                  <HelpCircle size={24} color="#D97706" />
                  <h2
                    style={{
                      fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                      fontWeight: 800,
                      color: '#0F172A',
                      margin: 0,
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)' : 'Frequently Asked Questions (FAQs)'}
                  </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {blog.faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '12px',
                        padding: '1rem 1.25rem',
                        cursor: 'pointer',
                        transition: 'background 0.2s ease',
                      }}
                    >
                      <summary
                        style={{
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: '#0F172A',
                          outline: 'none',
                          listStyle: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                        }}
                      >
                        <span>{faq.question[lang]}</span>
                        <span style={{ color: '#D97706', fontSize: '1.2rem', fontWeight: 400 }}>+</span>
                      </summary>
                      <p
                        style={{
                          marginTop: '0.75rem',
                          fontSize: '0.95rem',
                          lineHeight: 1.7,
                          color: '#334155',
                          borderTop: '1px solid #E2E8F0',
                          paddingTop: '0.75rem',
                          cursor: 'text',
                        }}
                      >
                        {faq.answer[lang]}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Related Keywords Tags Footer */}
              <div
                style={{
                  marginTop: '3.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #F1F5F9',
                }}
              >
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  {lang === 'ta' ? 'தொடர்புடைய முக்கிய சொற்கள்' : 'SEO Keywords & Topics'}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span
                    style={{
                      background: '#FEF3C7',
                      border: '1px solid #FDE68A',
                      color: '#92400E',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.7rem',
                      borderRadius: '8px',
                    }}
                  >
                    Focus: {blog.focusKeyword[lang]}
                  </span>
                  {blog.relatedKeywords[lang].map((kw, i) => (
                    <span
                      key={i}
                      style={{
                        background: '#F1F5F9',
                        color: '#334155',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        padding: '0.3rem 0.7rem',
                        borderRadius: '8px',
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Back & Admin Edit Buttons */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginTop: '2.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #F1F5F9',
                }}
              >
                <Link
                  href={`/${lang}/blog`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#B45309',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                  }}
                >
                  <ArrowLeft size={16} />
                  <span>{lang === 'ta' ? 'அனைத்து கட்டுரைகளுக்கும் திரும்புக' : 'Back to All Articles'}</span>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
