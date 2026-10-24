import React from 'react';
import Link from 'next/link';
import {
  Brain,
  ShieldCheck,
  Building2,
  BookOpen,
  Award,
  ArrowRight,
  Sparkles,
  Compass,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { coreMetrics } from '@/data/metrics';
import { educationalExhibits } from '@/data/education';
import { booksList } from '@/data/books';
import { biographyData } from '@/data/biography';
import { personalHonours, worldRecordsData } from '@/data/recognition';
import { innerJourneyData } from '@/data/innerJourney';
import { mediaArticles } from '@/data/media';
import { ClaimBadge } from '@/components/ClaimBadge';
import { SectionHeader } from '@/components/SectionHeader';
import { QuantumMatrix } from '@/components/QuantumMatrix';
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
      title: 'முனைவர் ஜே. அரவிந்தன் | அதிகாரப்பூர்வ தளம் — கல்வியியலாளர் & நிறுவனர் (Arawindhan)',
      description:
        'முனைவர் ஜே. அரவிந்தன் (Arawindhan) அவர்களின் அதிகாரப்பூர்வ தளம். ஆச்சாரியா கல்வி நிறுவனங்களின் நிறுவனர், கல்வியியலாளர், மற்றும் 18 கல்லூரிகள், 35 பள்ளிகள், 61+ நிறுவனங்களின் தலைவர்.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta',
        languages: {
          en: 'https://www.arawindhan.com/en',
          ta: 'https://www.arawindhan.com/ta',
          'x-default': 'https://www.arawindhan.com/en',
        },
      },
      openGraph: {
        title: 'முனைவர் ஜே. அரவிந்தன் | அதிகாரப்பூர்வ தளம் (Dr. J. Arawindhan)',
        description:
          'முனைவர் ஜே. அரவிந்தன் அவர்களின் அதிகாரப்பூர்வ தளம். ஆச்சாரியா கல்வி நிறுவனங்களின் நிறுவனர், கல்வியியலாளர், நூலாசிரியர்.',
        url: 'https://www.arawindhan.com/ta',
        siteName: 'Dr. J. Arawindhan Official Platform',
        images: [
          {
            url: 'https://www.arawindhan.com/images/portrait_spiritual_authentic.jpg',
            width: 1200,
            height: 630,
            alt: 'Dr. J. Arawindhan',
          },
        ],
      },
    };
  }

  return {
    title: 'Dr. J. Arawindhan | Official Website — Educationist, Founder & Visionary Leader',
    description:
      'Official website and authority platform of Dr. J. Arawindhan (Arawindhan): Educationist, entrepreneur, author, and founder of ACHARIYA World Class Education (18 colleges, 35 schools, 61+ companies, 600+ world records).',
    alternates: {
      canonical: 'https://www.arawindhan.com/en',
      languages: {
        en: 'https://www.arawindhan.com/en',
        ta: 'https://www.arawindhan.com/ta',
        'x-default': 'https://www.arawindhan.com/en',
      },
    },
    openGraph: {
      title: 'Dr. J. Arawindhan | Official Website — Educationist & Founder',
      description:
        'Official website of Dr. J. Arawindhan: Educationist, entrepreneur, author, and founder of ACHARIYA World Class Education.',
      url: 'https://www.arawindhan.com/en',
      siteName: 'Dr. J. Arawindhan Official Platform',
      images: [
        {
          url: 'https://www.arawindhan.com/images/portrait_spiritual_authentic.jpg',
          width: 1200,
          height: 630,
          alt: 'Dr. J. Arawindhan',
        },
      ],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="section-hero">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(1.5rem, 5vw, 3.5rem)',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Titles & Biography Intro */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    background: '#FEF3C7',
                    border: '1px solid #FDE68A',
                    color: 'var(--gold-glow)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  {lang === 'ta' ? 'அதிகாரப்பூர்வ அறிவுத் தளம்' : 'OFFICIAL DIGITAL AUTHORITY'}
                </span>
                <ClaimBadge claimId="CLM-001" status="CONFIRMED" language={lang} />
              </div>

              <h1
                className="font-serif heading-gold"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                }}
              >
                {biographyData.name[lang]}
              </h1>

              <div
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-gold)',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {lang === 'ta'
                  ? 'ஆச்சாரியா உலகத் தரம் வாய்ந்த கல்வியின் நிறுவனர், முதன்மை வழிகாட்டி & நிர்வாக இயக்குனர்'
                  : 'Founder, Chief Mentor & Managing Director — ACHARIYA World Class Education'}
              </div>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  marginBottom: '1.75rem',
                }}
              >
                {lang === 'ta'
                  ? '2000-ஆம் ஆண்டு புதுச்சேரியில் ஒரு மெக்கானிக்கல் பொறியாளரால் தொடங்கப்பட்ட கல்விப் புரட்சி. "ஒவ்வொரு குழந்தையும் தனக்கென தனித்துவமான நுண்ணறிவு சாம்ராஜ்யத்தைக் கொண்டுள்ளது" என்ற அசைக்க முடியாத நம்பிக்கையுடன் உருவான ஆச்சாரியா, இன்று 18 உயர்கல்விக் கல்லூரிகள், 35 பள்ளிகள், 61+ நிறுவனங்கள் மற்றும் 600+ உலக சாதனைகளைக் கொண்ட பெரும் அறிவுச் சூழலியலாக விரிவடைந்துள்ளது.'
                  : 'In 2000, a trained Mechanical Engineer in Puducherry established ACHARIYA with one conviction: every child carries a unique kingdom of intelligences. Twenty-five years later, that vision has expanded into "One Parent with Four Children"—18 colleges, 35 schools, 61+ companies, and 302+ initiatives, educating over 14,000 students with 600+ world records.'}
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <Link href={`/${lang}/education`} className="btn-gold">
                  <span>{lang === 'ta' ? '10 கல்விப் புத்தாக்கங்கள்' : '10 Educational Innovations'}</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href={`/${lang}/biography`} className="btn-outline">
                  <span>{lang === 'ta' ? 'வாழ்க்கை வரலாறு' : 'Detailed Biography'}</span>
                </Link>
                <Link href={`/${lang}/faq`} className="btn-outline" style={{ borderStyle: 'dashed' }}>
                  <span>{lang === 'ta' ? 'கேள்வி & பதில்கள் (AEO)' : 'Answer Engine & FAQs'}</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Portrait & Authority Card */}
            <div>
              <div
                className="card-premium"
                style={{
                  textAlign: 'center',
                  padding: '2rem 1.75rem',
                  border: '1px solid var(--border-gold)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                {/* Executive Portrait with Luxury Gold/Emerald Border */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '380px',
                    height: 'clamp(260px, 55vw, 420px)',
                    margin: '0 auto 1.5rem auto',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '3px solid #D97706',
                    boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.35), 0 0 0 6px #FFFBEB',
                  }}
                >
                  <img
                    src="/images/portrait_hero.jpg"
                    fetchPriority="high"
                    loading="eager"
                    alt={`${biographyData.name[lang]} - ${biographyData.spiritualName[lang]}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '0.6rem',
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.3) 70%, transparent)',
                      color: '#FFFFFF',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                    }}
                  >
                    ESTD. 2000 • PUDUCHERRY
                  </div>
                </div>

                <h3 className="font-serif heading-gold" style={{ fontSize: '1.65rem', marginBottom: '0.3rem', fontWeight: 800 }}>
                  {biographyData.name[lang]}
                </h3>
                <p style={{ color: 'var(--gold-glow, #D97706)', fontSize: '1.05rem', marginBottom: '1.25rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                  {biographyData.spiritualName[lang]}
                </p>

                <div
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1rem',
                    textAlign: 'left',
                    fontSize: '0.88rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ color: 'var(--gold-glow)', fontWeight: 700, marginBottom: '0.35rem' }}>
                    {lang === 'ta' ? 'அடிப்படை தத்துவம்:' : 'Core Pedagogical Thesis:'}
                  </div>
                  <div style={{ fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {lang === 'ta'
                      ? '“திறனை விட மூளையின் செயல்பாடே பிரதானம் (Brain Activity over Ability). பள்ளி வீட்டில் தொடங்கி, பள்ளியில் தொடர்ந்து, மீண்டும் வீட்டில் எளிதாக முடிய வேண்டும்.”'
                      : '“Brain Activity over Ability: Marks measure recall; Brain Activity is the engine underneath, trainable like a muscle.”'}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <ClaimBadge claimId="CLM-002" status="SOURCE_CLAIM" language={lang} />
                  <ClaimBadge claimId="CLM-006" status="SOURCE_CLAIM" language={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE WORK AT A GLANCE (METRICS GRID) */}
      <section className="section-py" style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <SectionHeader
            badge={lang === 'ta' ? 'புள்ளிவிவரச் சுருக்கம்' : 'THE WORK AT A GLANCE'}
            title={lang === 'ta' ? '25 ஆண்டு சாதனைகள் ஒரு பார்வையில்' : 'Twenty-Five Years in Measurable Reach'}
            subtitle={lang === 'ta' ? '25 ஆண்டுகளில் கல்வி, தலைமைத்துவம் மற்றும் உலக சாதனைகளில் எட்டப்பட்ட வரலாற்று மைல்கற்கள்.' : 'Documented institutional reach, academic excellence, and student world records across 25 years.'}
          />

          <div className="grid-metrics">
            {coreMetrics.map((item, idx) => (
              <div
                key={`${item.claimId}-${item.number}-${idx}`}
                className="card-premium"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  padding: '1.5rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--gold-glow)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {lang === 'ta' ? 'நிறுவன சாதனை' : 'RECORD METRIC'}
                    </span>
                  </div>
                  <div
                    className="font-serif heading-gold"
                    style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.65rem' }}
                  >
                    {item.number}
                  </div>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      margin: 0,
                      minHeight: '2.8rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.label[lang]}
                  </h4>
                </div>
                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    margin: '0.85rem 0 0 0',
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '0.75rem',
                  }}
                >
                  {item.detail[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THREE VERTICALS */}
      <section className="section-py">
        <div className="container">
          <SectionHeader
            badge={lang === 'ta' ? 'தலைமைத்துவத் தூண்கள்' : 'ONE LOOP, THREE VERTICALS'}
            title={lang === 'ta' ? 'கல்வியியலாளர் • தொழில்முனைவோர் • வணிகத் தலைவர்' : 'The Educationist • The Entrepreneur • The Business Leader'}
            subtitle={lang === 'ta' ? 'மூன்று பரிமாணங்கள் ஒன்றையொன்று செறிவூட்டி ஒரு முழுமையான அறிவுச் சூழலியலை உருவாக்குகின்றன.' : 'Three reinforcing verticals that turn educational vision into sustainable institutions.'}
          />

          <div className="grid-3">
            {biographyData.threeVerticals.map((vert, idx) => (
              <div key={idx} className="card-premium">
                <div style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {vert.question[lang]}
                </div>
                <h3 className="font-serif heading-gold" style={{ fontSize: '1.45rem', marginBottom: '0.85rem', fontWeight: 800 }}>
                  {vert.title[lang]}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.75 }}>
                  {vert.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED EDUCATIONAL INNOVATIONS */}
      <section className="section-py" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span style={{ color: 'var(--gold-glow)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {lang === 'ta' ? 'படைப்புச் சுருக்கம்' : 'ORIGINAL LEARNING SYSTEMS'}
              </span>
              <h2 className="font-serif heading-gold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800 }}>
                {lang === 'ta' ? '10 கல்விப் புத்தாக்கங்கள்' : 'Ten Educational Creations'}
              </h2>
            </div>
            <Link href={`/${lang}/education`} className="btn-outline">
              <span>{lang === 'ta' ? 'அனைத்து 10 அமைப்புகளையும் காண்க' : 'Explore All 10 Systems'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-2">
            {educationalExhibits.slice(0, 4).map((exhibit) => (
              <div key={exhibit.id} className="card-premium">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '0.9rem' }}>
                    EXHIBIT {exhibit.id}
                  </span>
                  <ClaimBadge claimId={exhibit.claimId} status="SOURCE_CLAIM" language={lang} />
                </div>
                <h3 className="font-serif heading-white" style={{ fontSize: '1.35rem', marginBottom: '0.45rem', fontWeight: 800 }}>
                  {exhibit.title[lang]}
                </h3>
                <p style={{ color: 'var(--gold-glow)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                  {exhibit.tagline[lang]}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {exhibit.whatItIs[lang]}
                </p>
                <Link
                  href={`/${lang}/education/${exhibit.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--gold-glow)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                  }}
                >
                  <span>{lang === 'ta' ? 'முழுமையான கற்பித்தல் விளக்கம்' : 'Full Pedagogical Mechanics'}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 FUTURISTIC INTERACTIVE QUANTUM INTELLIGENCE MATRIX */}
      <section className="section-py" style={{ paddingTop: '1rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <QuantumMatrix lang={lang} />
        </div>
      </section>

      {/* 5. PUBLISHED BOOKS & INTELLECTUAL OUTPUT */}
      <section className="section-py">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span style={{ color: 'var(--gold-glow)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {lang === 'ta' ? 'நூல் வெளியீடுகள்' : 'INTELLECTUAL WORKS'}
              </span>
              <h2 className="font-serif heading-gold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800 }}>
                {lang === 'ta' ? `முனைவர் அரவிந்தன் எழுதிய ${booksList.length}+ நூல்கள் & வெளியீடுகள்` : `${booksList.length}+ Published Works & Thought Leadership`}
              </h2>
            </div>
            <Link href={`/${lang}/books`} className="btn-outline">
              <span>{lang === 'ta' ? 'நூல்கள் அட்டவணையை காண்க' : 'View Full Catalogue'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {booksList.slice(0, 3).map((book) => (
              <div key={book.id} className="card-premium" style={{ display: 'flex', flexDirection: 'column' }}>
                {book.coverImage && (
                  <div
                    style={{
                      height: '210px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      marginBottom: '1.25rem',
                      background: 'linear-gradient(145deg, #FFFBEB 0%, #FEF3C7 100%)',
                      border: '1px solid #FDE68A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.75rem',
                    }}
                  >
                    <img
                      src={book.coverImage}
                      alt={book.title[lang]}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        borderRadius: '6px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                      }}
                    />
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--gold-glow)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {book.status}
                  </span>
                  <ClaimBadge claimId={book.claimId} status="SOURCE_CLAIM" language={lang} />
                </div>
                <h3 className="font-serif heading-gold" style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 800 }}>
                  {book.title[lang]}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                  {book.tagline[lang]}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
                  {book.summary[lang]}
                </p>
                <Link
                  href={`/${lang}/books/${book.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--gold-glow)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    marginTop: 'auto',
                  }}
                >
                  <span>{lang === 'ta' ? 'நூல் விபரம் & சாரம்' : 'View Book Details'}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DIVYA YOGAM & MAHA SHAMBALA */}
      <section className="section-py" style={{ background: 'linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 50%, #F8FAFC 100%)', borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <SectionHeader
            badge={lang === 'ta' ? 'ஆன்மீக வழிகாட்டல்' : 'SPIRITUAL ARCHITECTURE'}
            title={lang === 'ta' ? 'திவ்ய யோகம் & மகா ஷாம்பாலா புதுச்சேரி' : 'Divya Yogam & The Inner Journey'}
            subtitle={lang === 'ta' ? innerJourneyData.centralCreed[lang] : innerJourneyData.centralCreed[lang]}
          />

          <div
            className="card-premium"
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              padding: '2.5rem',
              border: '1px solid var(--border-gold)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="font-serif heading-gold" style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                {innerJourneyData.spiritualTitle[lang]}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 600 }}>
                {innerJourneyData.spiritualRoles[lang]}
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, textAlign: 'center', marginBottom: '2rem' }}>
              {innerJourneyData.foundationStory[lang]}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2rem',
              }}
            >
              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.05rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {innerJourneyData.mahaShambala.title[lang]}
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {innerJourneyData.mahaShambala.description[lang]}
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.05rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {innerJourneyData.avadhaniProgram.title[lang]}
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {innerJourneyData.avadhaniProgram.description[lang]}
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href={`/${lang}/inner-journey`} className="btn-gold">
                <span>{lang === 'ta' ? '7 படிநிலை உள்முகப் பயணம்' : 'Explore the Seven-Step Inner Journey'}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VERIFIED RECOGNITION HIGHLIGHTS */}
      <section className="section-py">
        <div className="container">
          <SectionHeader
            badge={lang === 'ta' ? 'அங்கீகாரங்கள்' : 'HONOURS & RECORD ARCHIVE'}
            title={lang === 'ta' ? 'விருதுகள் & 600+ உலக சாதனைகள்' : 'Verified Accolades & 600+ Student World Records'}
            subtitle={lang === 'ta' ? 'கல்வியியல் தலைமைத்துவத்திற்கான தேசிய விருதுகள் மற்றும் மாணவர் சாதனைகள்.' : 'National awards conferred by leading media, organizations, and global bodies.'}
          />

          {/* Bespoke 600+ World Records Visual Showcase */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '3rem',
              border: '2px solid #FDE68A',
              boxShadow: '0 20px 40px -15px rgba(217, 119, 6, 0.25)',
              maxHeight: 'clamp(200px, 50vw, 380px)',
            }}
          >
            <img
              src="/images/records_showcase.jpg"
              alt="ACHARIYA Mass Cognitive & Physical World Records Achievement"
              loading="lazy"
              style={{
                width: '100%',
                height: 'clamp(200px, 50vw, 380px)',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem 2rem',
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.25) 60%, transparent 100%)',
                color: '#FFFFFF',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
                <span style={{ background: '#D97706', color: '#FFFFFF', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>
                  600+ WORLD RECORDS
                </span>
                <span style={{ color: '#FEF3C7', fontSize: '0.85rem', fontWeight: 700 }}>
                  {lang === 'ta' ? 'மாணவர்களின் உலக சாதனை அரங்கம்' : 'Guinness & Global Cognitive Records Archive'}
                </span>
              </div>
              <p style={{ color: '#E2E8F0', fontSize: '0.92rem', margin: 0, maxWidth: '800px', lineHeight: 1.6 }}>
                {lang === 'ta'
                  ? 'கின்னஸ் மற்றும் பல்வேறு சர்வதேச சாதனை அமைப்புகளால் அங்கீகரிக்கப்பட்ட ஆச்சாரியா மாணவர்களின் பேரணி.'
                  : 'Documenting mass cognitive speed, memory feats, and disciplined martial arts cultivated across ACHARIYA campuses.'}
              </p>
            </div>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {personalHonours.slice(0, 3).map((honour) => (
              <div key={honour.id} className="card-premium">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--gold-glow)', fontWeight: 700 }}>
                    {honour.year || 'National'}
                  </span>
                  <ClaimBadge claimId={honour.claimId} status={honour.verificationStatus} language={lang} />
                </div>
                <h3 className="font-serif heading-gold" style={{ fontSize: '1.25rem', marginBottom: '0.35rem', fontWeight: 800 }}>
                  {honour.title[lang]}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {honour.conferredBy[lang]}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {honour.details[lang]}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href={`/${lang}/recognition`} className="btn-outline">
              <span>{lang === 'ta' ? 'முழுமையான விருதுகள் & 222 கின்னஸ் சாதனைகள்' : 'View Full Honours & 222 Guinness Records'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
