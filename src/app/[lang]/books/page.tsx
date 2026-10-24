import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, ShieldCheck, Bookmark, Sparkles } from 'lucide-react';
import { booksList } from '@/data/books';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { OpenReaderButton } from '@/components/OpenReaderButton';
import { BookCoverCardImage } from '@/components/BookCoverCardImage';
import { Language } from '@/types';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const lang = resolved.lang === 'ta' ? 'ta' : 'en';

  if (lang === 'ta') {
    return {
      title: 'நூல்கள் & வெளியீடுகள் | முனைவர் ஜே. அரவிந்தன் — 16 படைப்புகள் (Arawindhan)',
      description:
        'கல்வி, பெற்றோர் வளர்ப்பு, தலைமைத்துவம், நிதிச் சுயாட்சி மற்றும் ஆன்மீக விழிப்புணர்வு குறித்து முனைவர் ஜே. அரவிந்தன் (Arawindhan) எழுதிய 16 நூல்கள் மற்றும் வெளியீடுகள்.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta/books',
        languages: {
          en: 'https://www.arawindhan.com/en/books',
          ta: 'https://www.arawindhan.com/ta/books',
          'x-default': 'https://www.arawindhan.com/en/books',
        },
      },
      openGraph: {
        title: 'நூல்கள் & வெளியீடுகள் | முனைவர் ஜே. அரவிந்தன்',
        description: 'முனைவர் ஜே. அரவிந்தன் எழுதிய 16 நூல்கள் மற்றும் படைப்புகளின் அதிகாரப்பூர்வ பட்டியல்.',
        url: 'https://www.arawindhan.com/ta/books',
        siteName: 'Dr. J. Arawindhan Official Platform',
        images: [
          {
            url: 'https://www.arawindhan.com/images/books/wow-parenting.jpg',
            width: 800,
            height: 1200,
            alt: 'Books by Dr. J. Arawindhan',
          },
        ],
      },
    };
  }

  return {
    title: 'Books & Publications | Dr. J. Arawindhan — 16 Published Titles & Thought Leadership',
    description:
      'Explore published books, research monographs, and treatises on education, conscious parenting, leadership, and youth empowerment authored by Dr. J. Arawindhan (Arawindhan).',
    alternates: {
      canonical: 'https://www.arawindhan.com/en/books',
      languages: {
        en: 'https://www.arawindhan.com/en/books',
        ta: 'https://www.arawindhan.com/ta/books',
        'x-default': 'https://www.arawindhan.com/en/books',
      },
    },
    openGraph: {
      title: 'Books & Publications | Dr. J. Arawindhan — 16 Published Titles',
      description:
        'Explore 16 published books, treatises, and monographs on education, parenting, and leadership authored by Dr. J. Arawindhan.',
      url: 'https://www.arawindhan.com/en/books',
      siteName: 'Dr. J. Arawindhan Official Platform',
      images: [
        {
          url: 'https://www.arawindhan.com/images/books/wow-parenting.jpg',
          width: 800,
          height: 1200,
          alt: 'Books by Dr. J. Arawindhan',
        },
      ],
    },
  };
}

export default async function BooksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  // Auto-arrange: Books with 3D Flipbooks always appear first; books without flipbooks automatically go to the end
  const autoArrangedBooks = [...booksList].sort((a, b) => {
    const aHasFb = Boolean(a.flipbookPages && a.flipbookPages.length > 0);
    const bHasFb = Boolean(b.flipbookPages && b.flipbookPages.length > 0);
    if (aHasFb && !bHasFb) return -1;
    if (!aHasFb && bHasFb) return 1;
    return 0;
  });

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
          {autoArrangedBooks.map((book) => (
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

                {/* Book Cover Image - Full View & Expandable */}
                <BookCoverCardImage
                  coverImage={book.coverImage || '/images/books/shambala_book.jpg'}
                  title={book.title[lang]}
                  slug={book.slug}
                  lang={lang}
                  epubUrl={book.epubUrl}
                  pdfUrl={book.pdfUrl}
                  tagline={book.tagline[lang]}
                />

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

                {/* Key Themes Chips - Responsive with no overflow */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem', minHeight: '3.6rem', alignItems: 'flex-start' }}>
                  {book.keyThemes[lang].slice(0, 2).map((theme, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: '#F1F5F9',
                        border: '1px solid #E2E8F0',
                        color: 'var(--text-secondary)',
                        fontSize: '0.74rem',
                        fontWeight: 500,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        lineHeight: 1.35,
                        maxWidth: '100%',
                        whiteSpace: 'normal',
                        wordBreak: 'break-word',
                      }}
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', gap: '0.45rem', alignItems: 'center', marginTop: 'auto' }}>
                {book.flipbookPages && book.flipbookPages.length > 0 ? (
                  <>
                    <OpenReaderButton
                      slug={book.slug}
                      mode="flipbook"
                      label={lang === 'ta' ? 'ஃபிளிப்புக்' : 'Flipbook'}
                      style={{ flex: '1 1 auto', padding: '0.55rem 0.5rem', fontSize: '0.8rem', borderRadius: 'var(--radius-full)', whiteSpace: 'nowrap' }}
                      title={lang === 'ta' ? '3D பக்கம்பிரட்டும் ஃபிளிப்புக் வாசிக்க' : 'Read 3D Page-Turning Flipbook'}
                    />
                    <OpenReaderButton
                      slug={book.slug}
                      mode="text"
                      variant="outline"
                      label={lang === 'ta' ? 'மாதிரி' : 'Sample'}
                      style={{ flex: '0.9 1 auto', padding: '0.55rem 0.5rem', fontSize: '0.8rem', borderRadius: 'var(--radius-full)', whiteSpace: 'nowrap' }}
                      title={lang === 'ta' ? 'மாதிரி அத்தியாயங்களை வாசிக்க' : 'Read Sample Chapters'}
                    />
                  </>
                ) : (
                  <OpenReaderButton
                    slug={book.slug}
                    mode="text"
                    label={lang === 'ta' ? 'மாதிரி வாசிக்க' : 'Read Sample'}
                    style={{ flex: '1 1 auto', padding: '0.55rem 0.75rem', fontSize: '0.82rem', borderRadius: 'var(--radius-full)' }}
                    title={lang === 'ta' ? 'மாதிரி அத்தியாயங்களை வாசிக்க' : 'Read Sample Chapters'}
                  />
                )}
                <Link
                  href={`/${lang}/books/${book.slug}`}
                  className="btn-outline"
                  style={{
                    flex: '0.85 1 auto',
                    padding: '0.55rem 0.55rem',
                    fontSize: '0.8rem',
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem',
                  }}
                  title={lang === 'ta' ? 'முழு நூல் விவரங்கள்' : 'Full Dossier & Themes'}
                >
                  <span>{lang === 'ta' ? 'விவரம்' : 'Details'}</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Narrative Bridge ─── */}
        <div style={{ maxWidth: '960px', margin: '4rem auto 0 auto', padding: '2rem 2.5rem', background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFBEB 100%)', border: '1px solid #FDE68A', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
              {lang === 'ta' ? 'தொடர்ந்து அறிய' : 'CONTINUE THE JOURNEY'}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>
              {lang === 'ta' ? 'உள்முகப் பயணம்' : 'The Inner Journey'}
            </div>
            <div style={{ fontSize: '0.88rem', color: '#64748B' }}>
              {lang === 'ta'
                ? 'நூல்கள் புறச் செயல்களை ஆவணப்படுத்துகின்றன. உள்முகப் பயணம் அதன் ஆழத்தை — திவ்ய யோகம் மற்றும் ஆன்மீகத் தத்துவத்தை — வெளிப்படுத்துகிறது.'
                : 'The books document the outer work. The Inner Journey reveals what drove it — the spiritual dimension, Divya Yogam, and the consciousness philosophy that anchors everything Dr. Arawindhan builds.'}
            </div>
          </div>
          <Link href={`/${lang}/inner-journey`} className="btn-gold" style={{ flexShrink: 0 }}>
            <span>{lang === 'ta' ? 'உள்முகப் பயணத்தை காண்க' : 'Explore the Inner Journey'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
