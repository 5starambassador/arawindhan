import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, ShieldCheck, Bookmark, Sparkles, Quote, Info } from 'lucide-react';
import { booksList } from '@/data/books';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { StructuredData } from '@/components/StructuredData';
import { Language } from '@/types';

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ['en', 'ta']) {
    for (const b of booksList) {
      params.push({ lang, slug: b.slug });
    }
  }
  return params;
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
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

          <h1 className="font-serif heading-gold" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.5rem', fontWeight: 800 }}>
            {book.title[lang]}
          </h1>

          <div style={{ color: 'var(--text-gold)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.85rem' }}>
            {lang === 'ta' ? 'ஆசிரியர்:' : 'Author:'} {book.author[lang]}
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1.75rem' }}>
            {book.tagline[lang]}
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
            {book.summary[lang]}
          </p>

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
