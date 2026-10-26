import React from 'react';
import Link from 'next/link';
import { Award, Trophy, Medal, Star, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { personalHonours, institutionalAccolades, worldRecordsData } from '@/data/recognition';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
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
      title: 'தேசிய விருதுகள், உலக சாதனைகள் & சிறப்புகள் | முனைவர் ஜே. அரவிந்தன் (Arawindhan)',
      description:
        'முனைவர் ஜே. அரவிந்தன் (Arawindhan) மற்றும் ஆச்சாரியா நிறுவனங்களின் 540+ விருதுகள், 600+ உலக சாதனைகள் (222 கின்னஸ் & உலக சாதனைகள்).',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta/recognition',
        languages: {
          en: 'https://www.arawindhan.com/en/recognition',
          ta: 'https://www.arawindhan.com/ta/recognition',
          'x-default': 'https://www.arawindhan.com/en/recognition',
        },
      },
      openGraph: {
        title: 'தேசிய விருதுகள் & உலக சாதனைகள் | முனைவர் ஜே. அரவிந்தன்',
        description: 'முனைவர் அரவிந்தன் மற்றும் ஆச்சாரியா நிறுவனங்களின் அதிகாரப்பூர்வ விருதுகள் மற்றும் சாதனைகள்.',
        url: 'https://www.arawindhan.com/ta/recognition',
        siteName: 'Dr. J. Arawindhan Official Platform',
      },
    };
  }

  return {
    title: 'Verified Honours, Institutional Accolades & 600+ World Records | Dr. J. Arawindhan',
    description:
      'Achievement and recognition archive for Dr. J. Arawindhan (Arawindhan) and ACHARIYA: 540+ institutional accolades and 600+ student world records including 222 Guinness & World Records.',
    alternates: {
      canonical: 'https://www.arawindhan.com/en/recognition',
      languages: {
        en: 'https://www.arawindhan.com/en/recognition',
        ta: 'https://www.arawindhan.com/ta/recognition',
        'x-default': 'https://www.arawindhan.com/en/recognition',
      },
    },
    openGraph: {
      title: 'Verified Honours & 600+ World Records | Dr. J. Arawindhan',
      description: 'Achievement and recognition archive for Dr. J. Arawindhan and ACHARIYA World Class Education.',
      url: 'https://www.arawindhan.com/en/recognition',
      siteName: 'Dr. J. Arawindhan Official Platform',
    },
  };
}

export default async function RecognitionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  const recognitionSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `https://arawindhan.com/${lang}/recognition#webpage`,
        url: `https://arawindhan.com/${lang}/recognition`,
        name:
          lang === 'ta'
            ? 'தேசிய விருதுகள், உலக சாதனைகள் & சிறப்புகள் | முனைவர் ஜே. அரவிந்தன்'
            : 'Verified Honours, Institutional Accolades & 600+ World Records',
        description:
          'Achievement and recognition archive for Dr. J. Arawindhan and ACHARIYA World Class Education: personal honours, 540+ institutional accolades and national quality accreditations, and 600+ student world records including 222 Guinness & World Records.',
        inLanguage: lang,
        isPartOf: { '@id': 'https://arawindhan.com/#website' },
        about: [
          { '@id': 'https://arawindhan.com/#person' },
          { '@id': 'https://arawindhan.com/#organization' },
        ],
        primaryImageOfPage: { '@id': `https://arawindhan.com/${lang}/recognition#records-image` },
        image: [
          { '@id': `https://arawindhan.com/${lang}/recognition#records-image` },
          { '@id': `https://arawindhan.com/${lang}/recognition#awards-image` },
        ],
        breadcrumb: { '@id': `https://arawindhan.com/${lang}/recognition#breadcrumb` },
        mainEntity: [
          { '@id': `https://arawindhan.com/${lang}/recognition#personal-honours` },
          { '@id': `https://arawindhan.com/${lang}/recognition#institutional-accolades` },
          { '@id': `https://arawindhan.com/${lang}/recognition#world-records` },
        ],
        workTranslation: {
          '@type': 'WebPage',
          '@id': `https://arawindhan.com/${lang === 'en' ? 'ta' : 'en'}/recognition#webpage`,
          url: `https://arawindhan.com/${lang === 'en' ? 'ta' : 'en'}/recognition`,
          inLanguage: lang === 'en' ? 'ta' : 'en',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://arawindhan.com/${lang}/recognition#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'ta' ? 'முகப்பு' : 'Home', item: `https://arawindhan.com/${lang}` },
          { '@type': 'ListItem', position: 2, name: lang === 'ta' ? 'சிறப்புகள்' : 'Honours', item: `https://arawindhan.com/${lang}/recognition` },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `https://arawindhan.com/${lang}/recognition#personal-honours`,
        name: 'Personal Honours Conferred on Dr. J. Arawindhan',
        numberOfItems: 10,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Thing',
              '@id': `https://arawindhan.com/${lang}/recognition#holistic-education-award`,
              name: 'Holistic Education Award (2026)',
              description:
                'Conferred by Aatral Migu Asiriyar Virudhugal 2026, News7 Tamil, for visionary contributions to whole-brain education combining neuroscience, martial arts, multiple intelligences and moral grounding across 101 schools.',
              subjectOf: { '@id': `https://arawindhan.com/${lang}/recognition#webpage` },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Thing',
              '@id': `https://arawindhan.com/${lang}/recognition#edu-icon-award`,
              name: 'Edu Icon Award',
              description:
                'Conferred by The Times of India for leadership in pioneering modern K-12 schooling models and child-centric pedagogical frameworks.',
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Thing',
              '@id': `https://arawindhan.com/${lang}/recognition#trendsetter-award`,
              name: 'Trendsetter Award',
              description:
                'Conferred by Times Interact for establishing benchmarks in education, experiential learning and enterprise growth.',
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'Thing',
              '@id': `https://arawindhan.com/${lang}/recognition#outstanding-youth-award`,
              name: 'Outstanding Youth Award in Academic Leadership',
              description:
                'Conferred by Junior Chambers, India, recognising early youth leadership, academic governance and pedagogical reform.',
            },
          },
          {
            '@type': 'ListItem',
            position: 5,
            item: {
              '@type': 'Thing',
              '@id': `https://arawindhan.com/${lang}/recognition#almanite-of-the-decade`,
              name: 'Almanite of the Decade Award',
              description:
                'Conferred by Frozen Thoughts & Almamater for personal transformation, inspirational mentorship and societal contribution.',
            },
          },
          {
            '@type': 'ListItem',
            position: 6,
            item: {
              '@type': 'Thing',
              '@id': `https://arawindhan.com/${lang}/recognition#best-educator-award`,
              name: 'Best Educator Award',
              description:
                'Conferred by Youth Peace Centre, Pondicherry, for service to youth development, peace education and innovative teaching methodologies.',
            },
          },
          {
            '@type': 'ListItem',
            position: 7,
            item: {
              '@type': 'Thing',
              '@id': `https://arawindhan.com/${lang}/recognition#rashtriya-rattan-award`,
              name: 'Rashtriya Rattan Award',
              description:
                'Conferred by The Global Economic Council for contributions to educational enterprise, whole-brain learning models and nation building.',
            },
          },
          {
            '@type': 'ListItem',
            position: 8,
            item: {
              '@type': 'Thing',
              '@id': `https://arawindhan.com/${lang}/recognition#indira-gandhi-sadbhavana-award`,
              name: 'Indira Gandhi Sadbhavana Award',
              description:
                'Conferred by The Global Economic Council for dedication to national harmony, inclusive whole-child education and youth character building.',
            },
          },
          {
            '@type': 'ListItem',
            position: 9,
            item: {
              '@type': 'Thing',
              '@id': `https://arawindhan.com/${lang}/recognition#honorary-doctorate`,
              name: 'Honorary Doctorate',
              description:
                'Conferred by Yorker International University, Italy, for innovations in multiple intelligence pedagogy, whole-brain education frameworks and global educational leadership.',
            },
          },
          {
            '@type': 'ListItem',
            position: 10,
            item: {
              '@type': 'Event',
              '@id': `https://arawindhan.com/${lang}/recognition#national-gold-star-award-2004`,
              name: "National Gold Star Award — National Seminar on Individual's Achievements",
              startDate: '2004-03-19',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'New Delhi',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'New Delhi',
                  addressCountry: 'IN',
                },
              },
              organizer: {
                '@type': 'Organization',
                name: 'International Institute of Education & Management, New Delhi',
              },
              description:
                'National Gold Star Award presented to Dr. J. Arawindhan for excellence and leadership in educational management.',
              performer: { '@id': 'https://arawindhan.com/#person' },
            },
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `https://arawindhan.com/${lang}/recognition#institutional-accolades`,
        name: '540+ Institutional Accolades & National Quality Accreditations',
        description:
          'Selected national and global awards and accreditations received by ACHARIYA World Class Education.',
        numberOfItems: 9,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'International School Award — British Council of India' },
          { '@type': 'ListItem', position: 2, name: 'Ranked No. 1 School & 7-Star Rated Institution — Leading National Educational Ranking Survey' },
          { '@type': 'ListItem', position: 3, name: 'Trendsetter of 21st Century Education — National Education Conclave' },
          { '@type': 'ListItem', position: 4, name: 'Swachh Vidyalaya Puraskar — Department of School Education & Literacy, Government of India' },
          { '@type': 'ListItem', position: 5, name: 'ISO 9001 & NAAC Quality Accreditations — International Organization for Standardization & NAAC India' },
          { '@type': 'ListItem', position: 6, name: 'Most Innovative Curriculum amongst CBSE Schools — Brands Academy' },
          { '@type': 'ListItem', position: 7, name: 'National Genius School & National Genius Students Award — National Genius Search Foundation, India' },
          { '@type': 'ListItem', position: 8, name: '182 Guinness & World Records Milestone — Guinness World Records & International Record Authorities' },
          { '@type': 'ListItem', position: 9, name: 'International Robotics Award — World Robo Masters Cup, Singapore (2013)' },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `https://arawindhan.com/${lang}/recognition#world-records`,
        name: 'Student Cognitive & Record Archive',
        description:
          '600+ total world records, 222 Guinness & World Records, 300+ national champions and 1,000+ state champions across ACHARIYA campuses.',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '222 Guinness & World Records in open and blindfolded cognitive arts, mental arithmetic and multi-tasking',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mass simultaneous Silambam, Malkhamb and martial discipline demonstrations engaging thousands of students',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Bilateral ball juggling and whole-brain parallel processing records verified by international record councils',
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': 'https://arawindhan.com/#person',
        name: 'Dr. J. Arawindhan',
        url: `https://arawindhan.com/${lang}`,
        award: [
          'Holistic Education Award (2026) — Aatral Migu Asiriyar Virudhugal, News7 Tamil',
          'Edu Icon Award — The Times of India',
          'Trendsetter Award — Times Interact',
          'Outstanding Youth Award in Academic Leadership — Junior Chambers, India',
          'Almanite of the Decade Award — Frozen Thoughts & Almamater',
          'Best Educator Award — Youth Peace Centre, Pondicherry',
          'Rashtriya Rattan Award — The Global Economic Council',
          'Indira Gandhi Sadbhavana Award — The Global Economic Council',
          'Honorary Doctorate — Yorker International University, Italy',
          'National Gold Star Award (2004) — International Institute of Education & Management, New Delhi',
        ],
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://arawindhan.com/#organization',
        name: 'ACHARIYA World Class Education',
        award: [
          'International School Award — British Council of India',
          'Ranked No. 1 School & 7-Star Rated Institution',
          'Trendsetter of 21st Century Education — National Education Conclave',
          'Swachh Vidyalaya Puraskar — Government of India',
          'ISO 9001 Certification',
          'NAAC Accreditation',
          'Most Innovative Curriculum amongst CBSE Schools — Brands Academy',
          'National Genius School Award — National Genius Search Foundation, India',
          'International Robotics Award — World Robo Masters Cup, Singapore (2013)',
          '222 Guinness & World Records',
        ],
      },
      {
        '@type': 'ImageObject',
        '@id': `https://arawindhan.com/${lang}/recognition#records-image`,
        url: 'https://arawindhan.com/images/records_showcase.jpg',
        contentUrl: 'https://arawindhan.com/images/records_showcase.jpg',
        name: 'ACHARIYA Mass Cognitive & Physical World Records Achievement',
        caption:
          'Mass cognitive abacus calculation, memory feats and martial arts cultivated across ACHARIYA campuses.',
      },
      {
        '@type': 'ImageObject',
        '@id': `https://arawindhan.com/${lang}/recognition#awards-image`,
        url: 'https://arawindhan.com/images/awards_trophy.jpg',
        contentUrl: 'https://arawindhan.com/images/awards_trophy.jpg',
        name: 'National Educational Leadership Accolades & Lifetime Honours',
        caption:
          '540+ national and global awards recognising educational pioneering and institutional excellence.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recognitionSchema) }}
      />
      <div className="section-py">
      <div className="container">
        <SectionHeader
          badge={lang === 'ta' ? 'விருதுகள் & சாதனைகள்' : 'ACHIEVEMENT & RECOGNITION ARCHIVE'}
          title={lang === 'ta' ? 'தேசிய விருதுகள், உலக சாதனைகள் & சிறப்புகள்' : 'Verified Honours, Institutional Accolades & 600+ World Records'}
          subtitle={lang === 'ta' ? 'முனைவர் அரவிந்தன், ஆச்சாரியா நிறுவனங்கள் மற்றும் மாணவர்கள் 25 ஆண்டுகளில் வென்ற பெருமைகள்.' : 'The “great-grandchildren”: outcomes that speak for 25 years of systematic educational engineering.'}
        />

        {/* World Records Banner */}
        <div
          className="card-premium"
          style={{
            maxWidth: '1000px',
            margin: '0 auto 4rem auto',
            padding: '2.5rem',
            border: '1px solid #FDE68A',
            background: 'linear-gradient(145deg, #FFFBEB 0%, #FEF3C7 100%)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {lang === 'ta' ? 'மாணவர் உலக சாதனைகள் மையம்' : 'STUDENT COGNITIVE & RECORD ARCHIVE'}
            </span>
            <ClaimBadge claimId="CLM-006" status="SOURCE_CLAIM" language={lang} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            <div>
              <div className="font-serif heading-gold" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>
                {worldRecordsData.totalRecords}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 700, marginTop: '0.35rem' }}>
                {lang === 'ta' ? 'மொத்த உலக சாதனைகள்' : 'Total World Records'}
              </div>
            </div>

            <div>
              <div className="font-serif heading-gold" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>
                {worldRecordsData.guinnessCount}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 700, marginTop: '0.35rem' }}>
                {lang === 'ta' ? 'கின்னஸ் & உலக சாதனைகள்' : 'Guinness & World Records'}
              </div>
            </div>

            <div>
              <div className="font-serif heading-gold" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>
                {worldRecordsData.nationalChampions}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 700, marginTop: '0.35rem' }}>
                {lang === 'ta' ? 'தேசிய சாம்பியன்கள்' : 'National Champions'}
              </div>
            </div>

            <div>
              <div className="font-serif heading-gold" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>
                {worldRecordsData.stateChampions}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 700, marginTop: '0.35rem' }}>
                {lang === 'ta' ? 'மாநில வெற்றியாளர்கள்' : 'State Champions'}
              </div>
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #FDE68A', boxShadow: 'var(--shadow-sm)', marginBottom: '1.75rem' }}>
            <h4 style={{ color: 'var(--gold-glow)', fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              {lang === 'ta' ? 'சாதனைகளின் சிறப்பம்சங்கள்:' : 'Key Cognitive & Physical Record Domains:'}
            </h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {worldRecordsData.highlights.map((h, i) => (
                <li key={i}>{h[lang]}</li>
              ))}
            </ul>
          </div>

          {/* Student World Record Digital Visual Showcase */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '2px solid #FDE68A',
              boxShadow: '0 15px 35px -10px rgba(217, 119, 6, 0.25)',
              maxHeight: '380px',
            }}
          >
            <img
              src="/images/institutions/guinness_world_records_celebration.webp"
              alt="ACHARIYA Mass Cognitive & Physical World Records Achievement"
              style={{
                width: '100%',
                height: '380px',
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
                padding: '1.25rem 1.75rem',
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.25) 70%, transparent 100%)',
                color: '#FFFFFF',
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FEF3C7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {lang === 'ta' ? 'அங்கீகரிக்கப்பட்ட உலக சாதனை அரங்கம்' : 'Cognitive & Martial Record Archive • 600+ World Records'}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#E2E8F0', marginTop: '0.2rem' }}>
                {lang === 'ta'
                  ? 'கின்னஸ் மற்றும் பல்வேறு சர்வதேச சாதனை அமைப்புகளால் அங்கீகரிக்கப்பட்ட ஆச்சாரியா மாணவர்களின் பேரணி.'
                  : 'Mass cognitive abacus calculation, memory feats, and disciplined martial arts cultivated across ACHARIYA campuses.'}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Honours Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 className="font-serif heading-gold" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 800 }}>
            {lang === 'ta' ? 'முனைவர் அரவிந்தன் அவர்களுக்கு வழங்கப்பட்ட தனிநபர் கௌரவங்கள்' : 'Personal Honours Conferred on Dr. J. Arawindhan'}
          </h3>

          <div className="grid-2">
            {personalHonours.map((honour) => (
              <div key={honour.id} className="card-premium">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Medal size={20} color="var(--gold-primary)" />
                    <span style={{ fontSize: '0.8rem', color: 'var(--gold-glow)', fontWeight: 800 }}>
                      {honour.year || 'National'}
                    </span>
                  </div>
                  <ClaimBadge claimId={honour.claimId} status={honour.verificationStatus} language={lang} />
                </div>

                <h4 className="font-serif heading-white" style={{ fontSize: '1.3rem', marginBottom: '0.35rem', fontWeight: 800 }}>
                  {honour.title[lang]}
                </h4>

                <div style={{ color: 'var(--gold-glow)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {lang === 'ta' ? 'வழங்கிய அமைப்பு:' : 'Conferred by:'} {honour.conferredBy[lang]}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {honour.details[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Accolades Section */}
        <div>
          <h3 className="font-serif heading-gold" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 800 }}>
            {lang === 'ta' ? '540+ தேசிய விருதுகள் & கல்வி நிறுவன அங்கீகாரங்கள்' : '540+ Institutional Accolades & National Quality Accreditations'}
          </h3>

          {/* National Educational Awards Trophy Showcase */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '2.5rem',
              border: '2px solid #E2E8F0',
              boxShadow: '0 12px 30px -8px rgba(15, 23, 42, 0.1)',
              maxHeight: '340px',
            }}
          >
            <img
              src="/images/awards_trophy.jpg"
              alt="National Educational Leadership Accolades & Lifetime Honours"
              style={{
                width: '100%',
                height: '340px',
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
                padding: '1.25rem 1.75rem',
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 100%)',
                color: '#FFFFFF',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FEF3C7', textTransform: 'uppercase' }}>
                {lang === 'ta' ? 'கல்வித் தலைமைத்துவ கௌரவம் & வாழ்நாள் சாதனையாளர் விருதுகள்' : 'National Educational Leadership & Lifetime Honour Accolades'}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#E2E8F0', marginTop: '0.2rem' }}>
                {lang === 'ta'
                  ? '25 ஆண்டுகளில் முனைவர் ஜே. அரவிந்தன் மற்றும் ஆச்சாரியா கல்வி நிறுவனங்களுக்கு வழங்கப்பட்ட 540+ தேசிய மற்றும் சர்வதேச சிறப்புகள்.'
                  : 'Documenting 540+ national and global awards recognizing educational pioneering and institutional excellence.'}
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
            }}
          >
            {institutionalAccolades.map((acc) => (
              <div
                key={acc.id}
                className="card-premium"
                style={{
                  flex: '1 1 300px',
                  maxWidth: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <Trophy size={20} color="#059669" />
                  <ClaimBadge claimId={acc.claimId} status={acc.verificationStatus} language={lang} />
                </div>

                <h4 className="font-serif heading-white" style={{ fontSize: '1.2rem', marginBottom: '0.35rem', fontWeight: 800 }}>
                  {acc.title[lang]}
                </h4>

                <div style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {acc.conferredBy[lang]}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0, marginTop: 'auto' }}>
                  {acc.details[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Narrative Bridge ─── */}
        <div style={{ maxWidth: '1200px', margin: '4rem auto 0 auto', padding: '2rem 2.5rem', background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFBEB 100%)', border: '1px solid #FDE68A', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
              {lang === 'ta' ? 'தொடர்ந்து அறிய' : 'CONTINUE THE JOURNEY'}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>
              {lang === 'ta' ? 'முழுமையான வாழ்க்கை வரலாறு' : 'The Full Biography'}
            </div>
            <div style={{ fontSize: '0.88rem', color: '#64748B' }}>
              {lang === 'ta'
                ? 'இந்த விருதுகள் 25 ஆண்டுப் பயணத்தின் மைல்கற்கள். ஒரு மெக்கானிக்கல் பொறியாளரிலிருந்து கல்வி சாம்ராஜ்யம் வரையிலான முழு வரலாற்றை வாசியுங்கள்.'
                : 'These honours mark milestones in a 25-year journey. Read the full story — from a mechanical engineer\'s workshop to a world-class education ecosystem.'}
            </div>
          </div>
          <Link href={`/${lang}/biography`} className="btn-gold" style={{ flexShrink: 0 }}>
            <span>{lang === 'ta' ? 'வாழ்க்கை வரலாற்றை வாசிக்க' : 'Read the Biography'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </>
);
}
