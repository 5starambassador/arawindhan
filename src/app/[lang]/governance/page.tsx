import React from 'react';
import Link from 'next/link';
import { Layers, ShieldCheck, CheckCircle2, ArrowRight, GitCommit, Users, Cpu } from 'lucide-react';
import { governanceData } from '@/data/governance';
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
      title: 'சிறப்பு மேன்மை மையம் & நிர்வாக முறை | முனைவர் ஜே. அரவிந்தன்',
      description:
        'முனைவர் ஜே. அரவிந்தன் அவர்களின் சிறப்பு மேன்மை மையம் (CoE), 5 படிநிலை செயல்பாட்டுச் சங்கிலி, 6 உந்து இயந்திரங்கள் மற்றும் தலைமை நிர்வாக முறை.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta/governance',
        languages: {
          en: 'https://www.arawindhan.com/en/governance',
          ta: 'https://www.arawindhan.com/ta/governance',
          'x-default': 'https://www.arawindhan.com/en/governance',
        },
      },
      openGraph: {
        title: 'சிறப்பு மேன்மை மையம் & நிர்வாக முறை | முனைவர் ஜே. அரவிந்தன்',
        description:
          'முனைவர் ஜே. அரவிந்தன் அவர்களின் சிறப்பு மேன்மை மையம் மற்றும் கல்வி நிர்வாக அமைப்புகள்.',
        url: 'https://www.arawindhan.com/ta/governance',
        siteName: 'Dr. J. Arawindhan Official Platform',
      },
    };
  }

  return {
    title: 'The Centre of Excellence Governance System | Dr. J. Arawindhan',
    description:
      "How Dr. J. Arawindhan's ACHARIYA Centre of Excellence (CoE) governs 18 colleges, 101 schools and 61+ companies through the Five-Step Accountability Chain, the Six Engines of Campus Excellence, the Rope-In Induction with 77 ConCardios trainings, and his public leadership offices.",
    alternates: {
      canonical: 'https://www.arawindhan.com/en/governance',
      languages: {
        en: 'https://www.arawindhan.com/en/governance',
        ta: 'https://www.arawindhan.com/ta/governance',
        'x-default': 'https://www.arawindhan.com/en/governance',
      },
    },
    openGraph: {
      title: 'The Centre of Excellence Governance System | Dr. J. Arawindhan',
      description: 'The Centre of Excellence Governance System of ACHARIYA World Class Education.',
      url: 'https://www.arawindhan.com/en/governance',
      siteName: 'Dr. J. Arawindhan Official Platform',
    },
  };
}

export default async function GovernancePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  const governanceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `https://www.arawindhan.com/${lang}/governance#webpage`,
        url: `https://www.arawindhan.com/${lang}/governance`,
        name:
          lang === 'ta'
            ? 'சிறப்பு மேன்மை மையம் & நிர்வாக முறை | முனைவர் ஜே. அரவிந்தன்'
            : 'The Centre of Excellence Governance System | Dr. J. Arawindhan',
        headline:
          lang === 'ta'
            ? 'சிறப்பு மேன்மை மையம் & நிர்வாக முறை'
            : 'The Centre of Excellence Governance System',
        description:
          "How Dr. J. Arawindhan's ACHARIYA Centre of Excellence (CoE) governs 18 colleges, 101 schools and 61+ companies through the Five-Step Accountability Chain, the Six Engines of Campus Excellence, the Rope-In Induction with 77 ConCardios trainings, and his public leadership offices.",
        inLanguage: lang,
        isPartOf: { '@id': 'https://www.arawindhan.com/#website' },
        about: [
          { '@id': `https://www.arawindhan.com/${lang}/governance#coe` },
          { '@id': 'https://www.arawindhan.com/#person' },
        ],
        author: { '@id': 'https://www.arawindhan.com/#person' },
        publisher: { '@id': 'https://www.arawindhan.com/#person' },
        breadcrumb: { '@id': `https://www.arawindhan.com/${lang}/governance#breadcrumb` },
        mainEntity: { '@id': `https://www.arawindhan.com/${lang}/governance#coe` },
        mentions: [
          { '@id': `https://www.arawindhan.com/${lang}/governance#accountability-chain` },
          { '@id': `https://www.arawindhan.com/${lang}/governance#six-engines` },
        ],
        hasPart: { '@id': `https://www.arawindhan.com/${lang}/governance#rope-in-training` },
        workTranslation: {
          '@type': 'WebPage',
          url: `https://www.arawindhan.com/${lang === 'en' ? 'ta' : 'en'}/governance`,
          inLanguage: lang === 'en' ? 'ta' : 'en',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.arawindhan.com/${lang}/governance#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: lang === 'ta' ? 'முகப்பு' : 'Home',
            item: `https://www.arawindhan.com/${lang}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: lang === 'ta' ? 'நிர்வாகம் & அமைப்புகள்' : 'Governance & Systems',
            item: `https://www.arawindhan.com/${lang}/governance`,
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': `https://www.arawindhan.com/${lang}/governance#coe`,
        name: 'ACHARIYA Centre of Excellence',
        alternateName: 'ACHARIYA CoE',
        description:
          'Governance body established by Dr. J. Arawindhan to ensure consistent quality across every ACHARIYA campus, every day, by defining processes, assigning clear ownership, measuring outcomes and reviewing them on a fixed cadence.',
        slogan: 'Good intentions do not scale; good systems do.',
        parentOrganization: { '@id': 'https://www.arawindhan.com/#organization' },
        founder: { '@id': 'https://www.arawindhan.com/#person' },
        url: `https://www.arawindhan.com/${lang}/governance`,
      },
      {
        '@type': 'ItemList',
        '@id': `https://www.arawindhan.com/${lang}/governance#accountability-chain`,
        name: 'The Five-Step Accountability Chain',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: 5,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Approved',
            description:
              'Owner: Chief Mentor (Dr. J. Arawindhan). Defines and approves the concept, standard of excellence, and philosophical intent.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Enriched',
            description:
              'Owner: Engine Team Lead. Translates the concept into detailed pedagogical methods, lesson plans, materials, and kits.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Enabled',
            description:
              'Owner: Campus Monitor. Equips, trains, and certifies the teachers and campus leaders with required skills.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Executed',
            description:
              'Owner: Campus Enabler (Teacher / Staff). Delivers the active learning experience in the classroom, period by period, child by child.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Ensured',
            description:
              'Owner: Engine Team Lead & Audit Team. Audits learning outcomes, reviews student evidence, and verifies consistency with standard.',
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `https://www.arawindhan.com/${lang}/governance#six-engines`,
        name: 'The Six Engines of Campus Excellence',
        description:
          'Driving holistic quality, parent trust, and digital transformation across the ecosystem.',
        numberOfItems: 6,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Student Success',
            description: 'Academic mastery, world records, character, and 100% learning curve.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Parent Trust',
            description:
              'WOW Parenting workshops, transparent TRACK diagnostic reviews, and mutual respect.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'People Performance',
            description:
              'Continuous teacher upskilling, 77 ConCardios modules, and performance scorecards.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Campus Excellence',
            description: 'Swachh Vidyalaya hygiene, eco-green spaces, safety, and modern labs.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'School Growth',
            description:
              'Admissions through word-of-mouth excellence, alumni impact, and brand trust.',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Leadership Integration',
            description:
              'Monthly board reviews, strategic business units (SBUs), and digital ERP tracking.',
          },
        ],
      },
      {
        '@type': 'Course',
        '@id': `https://www.arawindhan.com/${lang}/governance#rope-in-training`,
        name: 'Rope-In Induction & 77 ConCardios Trainings',
        description:
          'Every educator and professional joins through the Rope-In induction (Change, Evolve, Transcend) with 3C, 4E, 5H, 6T and 7C behavioral practices, advancing through 77 trainings organized in six developmental phases.',
        provider: { '@id': `https://www.arawindhan.com/${lang}/governance#coe` },
        creator: { '@id': 'https://www.arawindhan.com/#person' },
        audience: { '@type': 'EducationalAudience', educationalRole: 'teacher' },
        numberOfCredits: 77,
        teaches: 'Faculty development from onboarding to master mentorship',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Onsite',
          location: { '@type': 'Place', name: 'ACHARIYA campuses, Puducherry, India' },
        },
        syllabusSections: [
          {
            '@type': 'Syllabus',
            position: 1,
            name: 'Nestling',
            description: 'New entrant onboarding, cultural alignment, and institutional ethics.',
          },
          {
            '@type': 'Syllabus',
            position: 2,
            name: 'Fledgling',
            description: 'Basic pedagogical toolkits, classroom control, and communication skills.',
          },
          {
            '@type': 'Syllabus',
            position: 3,
            name: 'Juvenile',
            description: 'Multi-intelligence lesson planning and diagnostic gap remediation.',
          },
          {
            '@type': 'Syllabus',
            position: 4,
            name: 'Matured',
            description: 'Departmental leadership, mentoring junior faculty, and parent counseling.',
          },
          {
            '@type': 'Syllabus',
            position: 5,
            name: 'Soaring',
            description: 'Campus headship, curriculum innovation, and research contributions.',
          },
          {
            '@type': 'Syllabus',
            position: 6,
            name: 'WOW',
            description: 'Master mentors embodying the 21 levels of Airavatha consciousness.',
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': 'https://www.arawindhan.com/#person',
        memberOf: [
          {
            '@type': 'OrganizationRole',
            roleName: 'President',
            memberOf: {
              '@type': 'SportsOrganization',
              name: 'The Pondicherry State Badminton (Shuttle) Association',
              sport: 'Badminton',
            },
          },
          {
            '@type': 'OrganizationRole',
            roleName: 'Joint Secretary',
            memberOf: {
              '@type': 'SportsOrganization',
              name: 'Badminton Association of India',
              alternateName: 'BAI',
              sport: 'Badminton',
            },
          },
          {
            '@type': 'OrganizationRole',
            roleName: 'Convener of Education and Skills Panel',
            memberOf: {
              '@type': 'Organization',
              name: 'Confederation of Indian Industry (CII) – Puducherry',
            },
          },
          {
            '@type': 'OrganizationRole',
            roleName: 'Managing Trustee & Founder',
            memberOf: {
              '@type': 'Organization',
              name: 'Achariya Educational Public Trust',
              foundingDate: '2002',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(governanceSchema) }}
      />
      <div className="section-py">
      <div className="container" style={{ maxWidth: '1050px' }}>
        <SectionHeader
          badge={lang === 'ta' ? 'கட்டமைப்பு & அமைப்புகள்' : 'COLLECTION C: SYSTEMS & LEADERSHIP'}
          title={lang === 'ta' ? 'சிறப்பு மேன்மை மையம் & நிர்வாக முறை' : 'The Centre of Excellence Governance System'}
          subtitle={governanceData.quote[lang]}
        />

        {/* Overview Box */}
        <div
          className="card-premium"
          style={{
            padding: '2.5rem',
            border: '1px solid var(--border-gold)',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <span style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>
              {lang === 'ta' ? 'பொறியியல் துல்லியத்துடன் கூடிய கல்வி மேலாண்மை' : 'ENGINEERING RIGOR IN EDUCATIONAL OPERATIONS'}
            </span>
            <ClaimBadge claimId="CLM-026" status="SOURCE_CLAIM" language={lang} />
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
            {governanceData.overview[lang]}
          </p>

          {/* 5-Step Chain */}
          <h3 className="font-serif heading-gold" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>
            {lang === 'ta' ? 'ஐந்து படிநிலை செயல்பாட்டுச் சங்கிலி (Five-Step Chain)' : 'The Five-Step Accountability Chain'}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {governanceData.fiveStepChain.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    minWidth: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--gold-primary)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}
                >
                  {idx + 1}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.1rem', fontWeight: 800 }}>
                      {lang === 'ta' ? step.tamilStep : step.step}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: '#FFFFFF', border: '1px solid var(--border-light)', padding: '0.15rem 0.6rem', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>
                      {step.role}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {step.action[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Six Engines of Leadership */}
        <div style={{ marginBottom: '4rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'மேன்மையின் 6 தூண்கள்' : 'SIX ENGINES'}
            title={lang === 'ta' ? 'ஆறு தலைமைத்துவ இயந்திரங்கள்' : 'The Six Engines of Campus Excellence'}
            subtitle={lang === 'ta' ? 'கல்விசாரா மேன்மை மற்றும் பள்ளி வளர்ச்சிக்கான சிறப்புப் பிரிவுகள்.' : 'Driving holistic quality, parent trust, and digital transformation across the ecosystem.'}
          />

          <div className="grid-3">
            {governanceData.sixEngines.map((engine, idx) => (
              <div
                key={idx}
                className="card-premium"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                }}
              >
                <h4 className="font-serif heading-gold" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 800 }}>
                  {engine.title[lang]}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0, marginTop: 'auto' }}>
                  {engine.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ConCardios & Rope-In Trainings */}
        <div
          className="card-premium"
          style={{
            padding: '2.5rem',
            border: '1px solid var(--border-light)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <span style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>
              {lang === 'ta' ? 'ஆசிரியர் & பணியாளர் மேம்பாட்டு நெறிமுறை' : 'FACULTY EVOLUTION HIERARCHY'}
            </span>
            <ClaimBadge claimId="CLM-027" status="SOURCE_CLAIM" language={lang} />
          </div>

          <h3 className="font-serif heading-gold" style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: 800 }}>
            {lang === 'ta' ? 'ரோப்-இன் மற்றும் 77 கான்கார்டியோஸ் பயிற்சிகள்' : 'Rope-In Induction & 77 ConCardios Trainings'}
          </h3>

          <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }}>
            <p style={{ color: '#78350F', fontStyle: 'italic', fontSize: '1rem', fontWeight: 600 }}>
              {governanceData.concardiosHierarchy.ropeInMantra[lang]}
            </p>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            {lang === 'ta'
              ? 'ஒவ்வொரு புதிய பணியாளரும் "ரோப்-இன்" அறிமுகப் பயிற்சி மூலம் இணைக்கப்படுகிறார். மூன்று சொற்களில் அமைந்தது: மாறு, பரிணமி, உன்னத நிலையை அடை (Change, Evolve, Transcend). இது 6 வளர்ச்சி நிலைகளில் 77 பயிற்சிகளாக விரிகிறது.'
              : 'Every educator and professional joins through the Rope-In induction (Change, Evolve, Transcend) with 3C, 4E, 5H, 6T, and 7C behavioral practices, advancing through 77 trainings organized in six developmental phases.'}
          </p>

          <div className="grid-3">
            {governanceData.concardiosHierarchy.phases.map((ph, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-subtle)',
                  padding: '1.25rem',
                  borderRadius: '14px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                  {i + 1}. {lang === 'ta' ? ph.tamilName : ph.name}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0, marginTop: 'auto' }}>
                  {ph.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Offices Held for Societal Benefits */}
        {governanceData.officesHeld && (
          <div
            className="card-premium"
            style={{
              padding: '2.5rem',
              border: '1px solid var(--border-light)',
              marginTop: '2.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>
                {lang === 'ta' ? 'சமூக நன்மைகளுக்கான பொதுப் பொறுப்புகள்' : 'PUBLIC LEADERSHIP & SOCIETAL GOVERNANCE'}
              </span>
              <ClaimBadge claimId="CLM-011" status="CONFIRMED" language={lang} />
            </div>

            <h3 className="font-serif heading-gold" style={{ fontSize: '1.6rem', marginBottom: '0.75rem', fontWeight: 800 }}>
              {lang === 'ta' ? 'சமூக நன்மைகளுக்காக வகித்த முக்கியப் பொறுப்புகள்' : 'Offices Held for Societal Benefit'}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              {lang === 'ta'
                ? 'முனைவர் ஜே. அரவிந்தன் கல்வி நிர்வாகத்துடன் இணைந்து மாநில, தேசிய அளவிலான விளையாட்டு மற்றும் தொழிற்துறை கொள்கை அமைப்புகளில் சமூக மேம்பாட்டிற்கான தலைமைப் பொறுப்புகளை ஆற்றி வருகிறார்.'
                : 'Beyond institutional stewardship, Dr. J. Arawindhan actively serves in prominent regional and national public leadership capacities across sports governance, industry panels, and public educational trusts.'}
            </p>

            <div className="grid-2" style={{ gap: '1.25rem' }}>
              {governanceData.officesHeld.map((office, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #FDE68A',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 14px rgba(217, 119, 6, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span
                      style={{
                        background: '#FFFBEB',
                        border: '1px solid #FDE68A',
                        color: '#B45309',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        textTransform: 'uppercase',
                        display: 'inline-block',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {office.category}
                    </span>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      {office.role[lang]}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                      {office.organization[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Narrative Bridge ─── */}
        <div style={{ maxWidth: '1050px', margin: '4rem auto 0 auto', padding: '2rem 2.5rem', background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFBEB 100%)', border: '1px solid #FDE68A', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
              {lang === 'ta' ? 'தொடர்ந்து அறிய' : 'CONTINUE THE JOURNEY'}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>
              {lang === 'ta' ? 'நூல்கள் & வெளியீடுகள்' : 'Books & Publications'}
            </div>
            <div style={{ fontSize: '0.88rem', color: '#64748B' }}>
              {lang === 'ta'
                ? 'இந்தப் பக்கத்தில் விவரிக்கப்பட்ட கட்டமைப்புகள் முனைவர் அரவிந்தனின் நூல்களில் ஆவணப்படுத்தப்பட்டுள்ளன.'
                : 'The systems described on this page are documented in Dr. Arawindhan\'s books — written to share the ACHARIYA method with educators and leaders worldwide.'}
            </div>
          </div>
          <Link href={`/${lang}/books`} className="btn-gold" style={{ flexShrink: 0 }}>
            <span>{lang === 'ta' ? 'நூல்களை ஆராயுங்கள்' : 'Explore the Books'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

