import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, ShieldCheck, Bookmark, Sparkles } from 'lucide-react';
import { booksList } from '@/data/books';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
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
          subtitle={lang === 'ta' ? 'கல்வி, தலைமைத்துவம், மனித ஆற்றல் மற்றும் ஆன்மீக விழிப்புணர்வு குறித்த ஏழு முக்கிய படைப்புகள்.' : 'A structured catalogue of published works and institutional editions shaping educators, parents, and leaders.'}
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.75rem',
            alignItems: 'stretch',
          }}
        >
          {booksList.map((book) => (
            <div
              key={book.id}
              className="card-premium"
              style={{
                flex: '1 1 320px',
                maxWidth: '370px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
                padding: '1.75rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span
                    style={{
                      background: '#FFFBEB',
                      border: '1px solid #FDE68A',
                      color: 'var(--gold-glow)',
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {book.status}
                  </span>
                  <ClaimBadge claimId={book.claimId} status="SOURCE_CLAIM" language={lang} />
                </div>

                {/* Book Spine Icon Representation */}
                <div
                  style={{
                    height: '140px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
                    border: '1px solid #FDE68A',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    textAlign: 'center',
                    padding: '1rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <BookOpen size={32} color="var(--gold-primary)" style={{ marginBottom: '0.5rem' }} />
                  <div className="font-serif" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#78350F' }}>
                    {book.title[lang]}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {book.edition}
                  </div>
                </div>

                <h3 className="font-serif heading-gold" style={{ fontSize: '1.35rem', marginBottom: '0.35rem', fontWeight: 800 }}>
                  {book.title[lang]}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                  {book.tagline[lang]}
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {book.summary[lang]}
                </p>

                {/* Key Themes Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
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
                      }}
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', textAlign: 'right' }}>
                <Link
                  href={`/${lang}/books/${book.slug}`}
                  className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.55rem 1rem' }}
                >
                  <span>{lang === 'ta' ? 'நூல் விவரங்கள் & சாரம்' : 'View Book Details'}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
