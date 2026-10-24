import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, ShieldCheck, Bookmark, Sparkles } from 'lucide-react';
import { booksList } from '@/data/books';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { OpenReaderButton } from '@/components/OpenReaderButton';
import { Language } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function BooksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  return (
    <div className="section-py">
      <div className="container">
        <SectionHeader
          badge={lang === 'ta' ? 'வெளியீடுகள் & சிந்தனை' : 'PUBLICATIONS & INTELLECTUAL OUTPUT'}
          title={lang === 'ta' ? 'முனைவர் அரவிந்தன் அவர்களின் நூல்கள்' : 'Books & Publications by Dr. J. Arawindhan'}
          subtitle={lang === 'ta' ? 'கல்வி, தலைமைத்துவம், இளைஞர் அதிகாரம், நிதிச் சுயாட்சி மற்றும் ஆன்மீக விழிப்புணர்வு குறித்த முக்கிய படைப்புகள்.' : 'A structured catalogue of published works and foundational treatises shaping youth, educators, entrepreneurs, and seekers.'}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {booksList.map((book) => (
            <div
              key={book.id}
              className="card-premium"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
                padding: '1.65rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                height: '100%',
              }}
            >
              <div>
                {/* Top Status & Verified Badge Row - Laser Aligned */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '28px',
                    marginBottom: '1rem',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      background: '#FFFBEB',
                      border: '1px solid #FDE68A',
                      color: 'var(--gold-glow)',
                      fontWeight: 800,
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                      lineHeight: 1,
                    }}
                  >
                    {book.status === 'Ecosystem Edition' ? (lang === 'ta' ? 'நிறுவனப் பதிப்பு' : 'Ecosystem') : (lang === 'ta' ? 'வெளியிடப்பட்டது' : 'Published')}
                  </span>
                  <ClaimBadge claimId={book.claimId} status="SOURCE_CLAIM" language={lang} compact />
                </div>

                {/* Book Cover Image */}
                <div
                  style={{
                    height: '240px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '1.25rem',
                    position: 'relative',
                    boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.12)',
                    border: '1px solid #E2E8F0',
                    background: '#FAF8F5',
                  }}
                >
                  <img
                    src={book.coverImage || '/images/books/shambala_book.jpg'}
                    alt={book.title[lang]}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Book Title - Fixed Baseline */}
                <h3
                  className="font-serif heading-gold"
                  style={{
                    fontSize: '1.3rem',
                    marginBottom: '0.4rem',
                    fontWeight: 800,
                    minHeight: '3.4rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    lineHeight: 1.3,
                  }}
                >
                  {book.title[lang]}
                </h3>

                {/* Book Tagline - Fixed Baseline */}
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.84rem',
                    fontStyle: 'italic',
                    marginBottom: '0.85rem',
                    minHeight: '2.8rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.45,
                  }}
                >
                  {book.tagline[lang]}
                </p>

                {/* Summary - Uniform 4 Lines */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    minHeight: '5.8rem',
                  }}
                >
                  {book.summary[lang]}
                </p>

                {/* Key Themes Chips - Fixed Height */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem', minHeight: '1.8rem', alignItems: 'center' }}>
                  {book.keyThemes[lang].slice(0, 2).map((theme, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: '#F1F5F9',
                        border: '1px solid #E2E8F0',
                        color: 'var(--text-secondary)',
                        fontSize: '0.74rem',
                        fontWeight: 500,
                        padding: '0.15rem 0.5rem',
                        borderRadius: 'var(--radius-full)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <OpenReaderButton
                  slug={book.slug}
                  label={lang === 'ta' ? 'வாசிக்க' : 'Read Sample'}
                  style={{ flex: 1, padding: '0.6rem 0.85rem', fontSize: '0.86rem', borderRadius: 'var(--radius-full)' }}
                />
                <Link
                  href={`/${lang}/books/${book.slug}`}
                  className="btn-outline"
                  style={{
                    padding: '0.6rem 0.95rem',
                    fontSize: '0.84rem',
                    whiteSpace: 'nowrap',
                  }}
                  title={lang === 'ta' ? 'முழு நூல் விவரங்கள்' : 'Full Dossier & Themes'}
                >
                  <span>{lang === 'ta' ? 'விவரங்கள்' : 'Details'}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
