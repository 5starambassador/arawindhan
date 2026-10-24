import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, ShieldCheck, Bookmark, Sparkles, Quote, Info, Download } from 'lucide-react';
import { booksList } from '@/data/books';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { StructuredData } from '@/components/StructuredData';
import { OpenReaderButton } from '@/components/OpenReaderButton';
import { Language } from '@/types';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ['en', 'ta']) {
    for (const b of booksList) {
      params.push({ lang, slug: b.slug });
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
  const lang = resolved.lang === 'ta' ? 'ta' : 'en';
  const book = booksList.find((b) => b.slug === resolved.slug);

  if (!book) {
    return {
      title: 'Book Not Found | Dr. J. Arawindhan',
    };
  }

  const title = book.title[lang] || book.title.en;
  const tagline = book.tagline[lang] || book.tagline.en;
  const summary = book.summary[lang] || book.summary.en;
  const description = `${title}: ${tagline}. Authored by Dr. J. Arawindhan (Arawindhan). ${summary.slice(0, 150)}...`;
  const image = book.coverImage
    ? (book.coverImage.startsWith('http') ? book.coverImage : `https://www.arawindhan.com${book.coverImage}`)
    : 'https://www.arawindhan.com/images/portrait_spiritual_authentic.jpg';

  return {
    title: `${title} | Dr. J. Arawindhan Books`,
    description,
    alternates: {
      canonical: `https://www.arawindhan.com/${lang}/books/${book.slug}`,
      languages: {
        en: `https://www.arawindhan.com/en/books/${book.slug}`,
        ta: `https://www.arawindhan.com/ta/books/${book.slug}`,
        'x-default': `https://www.arawindhan.com/en/books/${book.slug}`,
      },
    },
    openGraph: {
      title: `${title} | Book by Dr. J. Arawindhan`,
      description,
      url: `https://www.arawindhan.com/${lang}/books/${book.slug}`,
      siteName: 'Dr. J. Arawindhan Books',
      images: [
        {
          url: image,
          width: 800,
          height: 1200,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Dr. J. Arawindhan`,
      description,
      images: [image],
    },
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';
  const book = booksList.find((b) => b.slug === resolved.slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="section-py">
      <StructuredData type="Book" data={{ book }} />
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            href={`/${lang}/books`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--gold-glow)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 700,
            }}
          >
            <ArrowLeft size={16} />
            <span>{lang === 'ta' ? 'அனைத்து நூல்களுக்கும் திரும்புக' : 'Back to Book Catalogue'}</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div
          className="card-premium"
          style={{
            padding: '2.5rem',
            border: '1px solid var(--border-gold)',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span
              style={{
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                color: 'var(--gold-glow)',
                fontWeight: 800,
                fontSize: '0.82rem',
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                textTransform: 'uppercase',
              }}
            >
              {book.status} • {book.edition}
            </span>
            <ClaimBadge claimId={book.claimId} status="SOURCE_CLAIM" language={lang} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
              marginBottom: '2rem',
            }}
          >
            {/* Book Cover Visual Art */}
            {book.coverImage && (
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    maxWidth: '280px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '2px solid #FDE68A',
                    boxShadow: '0 20px 40px -15px rgba(217, 119, 6, 0.35), 0 0 0 6px #FFFBEB',
                    background: '#FFFFFF',
                  }}
                >
                  <img
                    src={book.coverImage}
                    alt={book.title[lang]}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {lang === 'ta' ? 'அதிகாரப்பூர்வ நூல் அட்டை' : 'Official Published Edition'}
                </div>
              </div>
            )}

            {/* Book Metadata & Synopsis */}
            <div>
              <h1 className="font-serif heading-gold" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', marginBottom: '0.5rem', fontWeight: 800, lineHeight: 1.2 }}>
                {book.title[lang]}
              </h1>

              <div style={{ color: 'var(--text-gold)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.85rem' }}>
                {lang === 'ta' ? 'ஆசிரியர்:' : 'Author:'} {book.author[lang]}
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                {book.tagline[lang]}
              </p>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {book.summary[lang]}
              </p>

              {/* Reader Action CTAs */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.5rem' }}>
                {book.flipbookPages && book.flipbookPages.length > 0 ? (
                  <>
                    <OpenReaderButton
                      slug={book.slug}
                      mode="flipbook"
                      label={lang === 'ta' ? '📖 3D ஃபிளிப்புக் வாசிக்க' : '📖 Read 3D Flipbook'}
                      style={{ padding: '0.75rem 1.75rem', fontSize: '0.96rem', fontWeight: 800 }}
                    />
                    <OpenReaderButton
                      slug={book.slug}
                      mode="text"
                      variant="outline"
                      label={lang === 'ta' ? '📄 மாதிரி அத்தியாயங்கள் (Sample)' : '📄 Read Sample Excerpts'}
                      style={{ padding: '0.75rem 1.5rem', fontSize: '0.92rem' }}
                    />
                  </>
                ) : (
                  <OpenReaderButton
                    slug={book.slug}
                    mode="text"
                    label={lang === 'ta' ? '📖 மாதிரி அத்தியாயங்களை வாசிக்க' : '📖 Read Sample Chapters'}
                    style={{ padding: '0.75rem 1.75rem', fontSize: '0.96rem', fontWeight: 800 }}
                  />
                )}
                <OpenReaderButton
                  slug={book.slug}
                  showRequestForm={true}
                  variant="outline"
                  label={lang === 'ta' ? 'முழு பதிப்பைப் பெற' : 'Request Full Edition'}
                  style={{ padding: '0.75rem 1.5rem', fontSize: '0.92rem' }}
                />
              </div>
            </div>
          </div>

          {/* Reading Snippet Quote */}
          {book.readMoreSnippet && (
            <div
              style={{
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderLeft: '4px solid var(--gold-primary)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                marginBottom: '2rem',
              }}
            >
              <Quote size={28} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontStyle: 'italic', color: '#78350F', fontSize: '0.98rem', lineHeight: 1.75, fontWeight: 500 }}>
                {book.readMoreSnippet[lang]}
              </div>
            </div>
          )}

          {/* Target Audience */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--gold-glow)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              {lang === 'ta' ? 'இலக்கு வாசகர்கள் (Target Audience):' : 'Target Readers & Applications:'}
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {book.targetAudience[lang]}
            </p>
          </div>

          {/* Key Themes */}
          <div>
            <h4 style={{ color: 'var(--gold-glow)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {lang === 'ta' ? 'முக்கிய கருப்பொருள்கள் (Key Themes):' : 'Core Philosophical & Pedagogical Themes:'}
            </h4>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {book.keyThemes[lang].map((theme, idx) => (
                <li key={idx}>{theme}</li>
              ))}
            </ul>
          </div>

          {/* Sample Chapters Excerpts */}
          {book.sampleChapters && book.sampleChapters.length > 0 && (
            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'ta' ? '📖 மாதிரி வாசிப்பு (Sample Reading):' : '📖 Sample Reading Excerpts:'}
                </h4>
                <OpenReaderButton
                  slug={book.slug}
                  mode="text"
                  label={lang === 'ta' ? 'முழு திரையில் வாசிக்க' : 'Open in Fullscreen Reader'}
                  style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {book.sampleChapters.map((ch, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#FAFAF9',
                      border: '1px solid #E7E5E4',
                      borderRadius: '12px',
                      padding: '1.5rem 1.75rem',
                    }}
                  >
                    <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                      {ch.title[lang]}
                    </div>
                    {ch.subtitle && (
                      <div style={{ fontStyle: 'italic', color: 'var(--gold-glow)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 600 }}>
                        {ch.subtitle[lang]}
                      </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {ch.paragraphs[lang].map((p, pIdx) => (
                        <p key={pIdx} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem', margin: 0 }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Factual Integrity & Acquisition Notice */}
        <div style={{ background: '#F8FAFC', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--gold-glow)' }}>
            <Info size={18} />
            <span style={{ fontWeight: 800, fontSize: '0.92rem' }}>
              {lang === 'ta' ? 'பதிப்புரிமை & புத்தக விநியோக விபரம்' : 'Publication Provenance & Availability'}
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
            {lang === 'ta'
              ? 'இந்நூல் ஆச்சாரியா கல்வி நிறுவன சூழலியலில் ஆசிரியர்கள், பெற்றோர்கள் மற்றும் மாணவர்களுக்கு சிறப்பு பதிப்பாக வழங்கப்பட்டு வருகிறது. முறையான பொது சந்தை மற்றும் ISBN வெளியீட்டு ஆவணங்கள் சரிபார்க்கப்பட்டு வருகின்றன.'
              : 'This title is maintained in active institutional circulation across ACHARIYA schools, retreat gatherings, and ConCardios leadership programs. External commercial bookstore links and formal national library deposit registrations are coordinated under the phase 5 external presence roadmap.'}
          </p>
        </div>
      </div>
    </div>
  );
}
