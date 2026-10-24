'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  Calendar,
  Radio,
} from 'lucide-react';
import { BlogPost } from '@/types';
import { SectionHeader } from '@/components/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export const BlogListClient: React.FC<{ blogs: BlogPost[] }> = ({ blogs }) => {
  const { lang } = useLanguage();

  return (
    <div className="section-py" style={{ minHeight: '90vh' }}>
      <div className="container">
        {/* Header Section */}
        <SectionHeader
          badge={lang === 'ta' ? 'ஆய்வுக் கட்டுரைகள் & எதிர்கால சிந்தனை' : 'RESEARCH ESSAYS & THOUGHT LEADERSHIP'}
          title={lang === 'ta' ? 'நியோ சேபியன்ஸ் & எதிர்கால கல்வி சிந்தனைகள்' : 'Neo Sapiens & The Future of Child Education'}
          subtitle={
            lang === 'ta'
              ? 'கோபிநாத் போட்காஸ்ட்டில் முனைவர் ஜே. அரவிந்தன் அவர்களின் உரை மற்றும் 25+ ஆண்டுகால கல்வி அனுபவத்தின் அடிப்படையில் உருவான முன்னோக்கு கட்டுரைகள்.'
              : 'Foundational essays exploring human potential, cognitive evolution, multiple intelligences, and the transition from rote memorization to future readiness.'
          }
        />

        {/* Featured Podcast Citation Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
            border: '1.5px solid #FDE68A',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            boxShadow: '0 4px 16px rgba(217, 119, 6, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#D97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(217, 119, 6, 0.3)',
              }}
            >
              <Radio size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.98rem', color: '#92400E' }}>
                {lang === 'ta' ? 'கோபிநாத் போட்காஸ்ட் சிறப்புக் கலந்துரையாடல்' : 'Featured: The Gobinath Podcast Discussion Series'}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#B45309', fontWeight: 500 }}>
                {lang === 'ta'
                  ? 'மனித ஆற்றலின் உச்சம், நியோ சேபியன்ஸ் மற்றும் 100+ பள்ளிகளின் வழிகாட்டுதல் அனுபவங்கள்'
                  : 'On Human Potential, Neo Sapiens, and Preparing the Next Generation for an AI-Driven Century'}
              </div>
            </div>
          </div>

          <div>
            <span
              style={{
                background: '#FFFFFF',
                border: '1px solid #FDE68A',
                padding: '0.35rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#92400E',
              }}
            >
              {lang === 'ta' ? 'முக்கிய சொல்: Neo Sapiens' : 'Focus: Neo Sapiens'}
            </span>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
            gap: '2rem',
          }}
        >
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="card-premium"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid #E2E8F0',
                background: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Badges & Reading Time Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.65rem',
                    marginBottom: '1.15rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        background: '#FFFBEB',
                        border: '1px solid #FDE68A',
                        color: '#92400E',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {blog.category[lang]}
                    </span>
                    <span
                      style={{
                        background: '#D97706',
                        color: '#FFFFFF',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {blog.focusKeyword[lang]}
                    </span>
                  </div>

                  <span
                    style={{
                      background: '#F1F5F9',
                      color: '#475569',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <Clock size={12} color="#64748B" />
                    <span>{blog.readTime}</span>
                  </span>
                </div>

                {/* Meta Details Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    fontSize: '0.78rem',
                    color: '#64748B',
                    marginBottom: '0.85rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={13} color="#D97706" />
                    <span>{blog.publishedAt}</span>
                  </span>
                  <span>•</span>
                  <span style={{ fontWeight: 600, color: '#334155' }}>
                    {blog.podcastReference ? (lang === 'ta' ? 'கோபிநாத் போட்காஸ்ட்' : 'Gobinath Podcast') : 'Official'}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.35,
                    marginBottom: '0.9rem',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  <Link
                    href={`/${lang}/blog/${blog.slug}`}
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                    }}
                  >
                    {blog.title[lang]}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p
                  style={{
                    color: '#475569',
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {blog.metaDescription[lang]}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {blog.tags[lang].slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: '#F1F5F9',
                        color: '#475569',
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        fontWeight: 500,
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA & Author */}
              <div
                style={{
                  borderTop: '1px solid #F1F5F9',
                  paddingTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      border: '2px solid #FDE68A',
                      overflow: 'hidden',
                      position: 'relative',
                      flexShrink: 0,
                      boxShadow: '0 2px 6px rgba(217, 119, 6, 0.2)',
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
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.2 }}>
                      Dr. J. Arawindhan
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#64748B' }}>
                      {lang === 'ta' ? 'நிறுவனர் & கல்வியியலாளர்' : 'Founder & Educationist'}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/${lang}/blog/${blog.slug}`}
                  className="btn-gold"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 1rem',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    textDecoration: 'none',
                  }}
                >
                  <span>{lang === 'ta' ? 'வாசிக்க' : 'Read Article'}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
