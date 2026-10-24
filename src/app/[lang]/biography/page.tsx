import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Compass,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Building2,
  Sparkles,
  Quote,
  Lightbulb,
  Award,
  Layers,
  HeartHandshake,
  BookOpen,
  Calendar,
  MapPin,
  TrendingUp,
  Globe,
  Briefcase,
  Users,
} from 'lucide-react';
import {
  biographyData,
  avatarPhases,
  leadershipLessons,
  coreValues,
  directQuotes,
  transformationRipples,
} from '@/data/biography';
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
      title: 'வாழ்க்கை வரலாறு | முனைவர் ஜே. அரவிந்தன் — கல்வியியலாளர் (Arawindhan)',
      description:
        'முனைவர் ஜே. அரவிந்தன் அவர்களின் முழுமையான வாழ்க்கை வரலாறு. கல்விப் புரட்சி, ஆச்சாரியா நிறுவனங்களின் உருவாக்கம் மற்றும் ஆன்மீகப் பயணம்.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta/biography',
        languages: {
          en: 'https://www.arawindhan.com/en/biography',
          ta: 'https://www.arawindhan.com/ta/biography',
          'x-default': 'https://www.arawindhan.com/en/biography',
        },
      },
      openGraph: {
        title: 'வாழ்க்கை வரலாறு | முனைவர் ஜே. அரவிந்தன்',
        description: 'முனைவர் ஜே. அரவிந்தன் அவர்களின் வாழ்க்கை வரலாறு மற்றும் தலைமைத்துவப் பயணம்.',
        url: 'https://www.arawindhan.com/ta/biography',
        siteName: 'Dr. J. Arawindhan Official Platform',
        images: [
          {
            url: 'https://www.arawindhan.com/images/portrait_spiritual_authentic.jpg',
            width: 1200,
            height: 630,
            alt: 'Dr. J. Arawindhan Biography',
          },
        ],
      },
    };
  }

  return {
    title: 'Biography & Life Journey | Dr. J. Arawindhan — Educationist & Philanthropist',
    description:
      'Official biography and life journey of Dr. J. Arawindhan (Arawindhan): Mechanical engineer turned education pioneer, founder of ACHARIYA (18 colleges, 35 schools).',
    alternates: {
      canonical: 'https://www.arawindhan.com/en/biography',
      languages: {
        en: 'https://www.arawindhan.com/en/biography',
        ta: 'https://www.arawindhan.com/ta/biography',
        'x-default': 'https://www.arawindhan.com/en/biography',
      },
    },
    openGraph: {
      title: 'Biography & Life Journey | Dr. J. Arawindhan',
      description:
        'Explore the life, educational revolution, and institutional leadership of Dr. J. Arawindhan.',
      url: 'https://www.arawindhan.com/en/biography',
      siteName: 'Dr. J. Arawindhan Official Platform',
      images: [
        {
          url: 'https://www.arawindhan.com/images/portrait_spiritual_authentic.jpg',
          width: 1200,
          height: 630,
          alt: 'Dr. J. Arawindhan Biography',
        },
      ],
    },
  };
}

export default async function BiographyPage({
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
          badge={lang === 'ta' ? 'அதிகாரப்பூர்வ வாழ்க்கை வரலாறு' : 'OFFICIAL BIOGRAPHY'}
          title={biographyData.name[lang]}
          subtitle={biographyData.roles[lang]}
        />

        {/* Narrative & Genesis */}
        <div
          className="card-premium"
          style={{
            maxWidth: '1000px',
            margin: '0 auto 4rem auto',
            padding: '2.5rem',
            border: '1px solid var(--border-gold)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {lang === 'ta' ? 'கல்வித் தோற்றம்: 1998 முதல் 2026' : 'GENESIS & 28-YEAR ODYSSEY (1998–2026)'}
            </span>
            <ClaimBadge claimId="CLM-001" status="CONFIRMED" language={lang} />
          </div>

          <h3 className="font-serif heading-gold" style={{ fontSize: '1.85rem', marginBottom: '1.25rem', fontWeight: 800 }}>
            {lang === 'ta' ? 'மெக்கானிக்கல் பொறியியலில் இருந்து மனித ஆளுமைப் புரட்சி வரை' : 'From Mechanical Engineering to Awakening Human Potential'}
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
            {biographyData.overview[lang]}
          </p>

          {/* Bespoke 28-Year Odyssey & Campus Vision Visual Showcase */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '2rem',
              border: '2px solid #FDE68A',
              boxShadow: '0 12px 30px -8px rgba(217, 119, 6, 0.2)',
              maxHeight: '380px',
            }}
          >
            <img
              src="/images/biography_vision.jpg"
              alt="28 Years of Vision: Engineering Blueprints Expanding into World-Class Campuses"
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
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.25) 60%, transparent 100%)',
                color: '#FFFFFF',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FEF3C7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {lang === 'ta' ? '28 ஆண்டு தொலைநோக்கு • பொறியியல் முதல் பல்கலைக்கழகங்கள் வரை' : 'The 28-Year Odyssey: From Engineering Blueprints to 53 Campuses'}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#E2E8F0', marginTop: '0.2rem' }}>
                {lang === 'ta'
                  ? 'புதுச்சேரியில் ஒரு மெக்கானிக்கல் பொறியாளரின் வரைகலையிலிருந்து 14,000+ மாணவர்கள் கற்கும் பெரும் பல்கலைக்கழகச் சூழலியலாக விரிவடைந்த வரலாறு.'
                  : 'Synthesizing technical precision, institutional governance, and an unshakeable belief in every student\'s unique kingdom of intelligences.'}
              </div>
            </div>
          </div>

          {/* 1998 Origin Bedrock Box */}
          <div
            style={{
              background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFBEB 100%)',
              border: '1.5px solid #FDE68A',
              borderRadius: '16px',
              padding: '1.75rem',
              marginBottom: '2rem',
              boxShadow: '0 4px 15px rgba(217, 119, 6, 0.05)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B45309', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
              <Calendar size={16} color="#D97706" />
              <span>{lang === 'ta' ? '1998 தொடக்கம்: ஆசிரியர்களை உருவாக்குவதே மூலவேர்' : '1998 Foundation: The Teacher as the Catalyst'}</span>
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.65rem' }}>
              {biographyData.originStory.foundation[lang]}
            </h4>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.75, margin: 0 }}>
              {biographyData.originStory.narrative[lang]}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #F1E5D5' }}>
              {biographyData.originStory.milestones.map((m, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ background: '#D97706', color: '#FFFFFF', padding: '0.1rem 0.45rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 800, fontFamily: 'monospace' }}>
                    {m.year}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#1E293B', fontWeight: 600, lineHeight: 1.4 }}>
                    {m.milestone[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Authoritative Personal Dossier & Institutional Roots */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1.5px solid #E2E8F0',
              borderRadius: '16px',
              padding: '1.75rem',
              marginBottom: '2rem',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B45309', fontWeight: 800, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                <Award size={16} color="#D97706" />
                <span>{lang === 'ta' ? 'அதிகாரப்பூர்வ சுயவிவரம் & கல்வி அடித்தளம்' : 'AUTHORITATIVE PROFILE & FOUNDATIONAL ROOTS'}</span>
              </div>
              <span style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#065F46', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
                {lang === 'ta' ? '14,000+ மாணவர்கள் • 2,000+ பணியாளர்கள் • 18 கல்லூரிகள், 35 பள்ளிகள்' : '14,000+ Students • 2,000+ Educators & Staff • 18 Colleges, 35 Schools'}
              </span>
            </div>

            {/* Honorific & Core Creed Callout */}
            <div
              style={{
                background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
                border: '1px solid #FDE68A',
                borderRadius: '14px',
                padding: '1rem 1.25rem',
                marginBottom: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src="/images/arawindhan_blue_shirt.jpg"
                  alt="Dr. J. Arawindhan — Teacher, Trainer, Transformer"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #D97706',
                    boxShadow: '0 2px 8px rgba(217, 119, 6, 0.25)',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {biographyData.personalProfile.teacherTransformerTitle[lang]}
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0F172A', marginTop: '0.15rem' }}>
                    {biographyData.personalProfile.popularName[lang]}
                  </div>
                </div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid #FDE68A', padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 700, color: '#B45309', fontStyle: 'italic' }}>
                {biographyData.personalProfile.spiritualMotto[lang]}
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: '1.25rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                  {lang === 'ta' ? 'பிறந்த நாள் & கல்வி' : 'BIRTH & QUALIFICATIONS'}
                </div>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                  {biographyData.personalProfile.dob}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5 }}>
                  {biographyData.personalProfile.education[lang]}
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                  {lang === 'ta' ? 'முதல் தொழில்முனைவு (2000)' : 'EARLY ENTREPRENEURSHIP (2000)'}
                </div>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                  Pondy Pipes (Est. 2000)
                </div>
                <div style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5 }}>
                  {biographyData.personalProfile.earlyEntrepreneurship[lang]}
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                  {lang === 'ta' ? 'அறக்கட்டளை தலைமை (2002)' : 'TRUST STEWARDSHIP (EST. 2002)'}
                </div>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                  Achariya Educational Public Trust
                </div>
                <div style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5 }}>
                  {biographyData.personalProfile.managingTrustee[lang]}
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                  {lang === 'ta' ? 'சர்வதேச முனைவர் பட்டம் (2010)' : 'HONORARY DOCTORATE (2010)'}
                </div>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                  Yorker International University, Italy
                </div>
                <div style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5 }}>
                  {biographyData.personalProfile.honoraryDoctorate[lang]}
                </div>
              </div>
            </div>

            {/* Global Education Study & Cultural Research Odyssey */}
            <div
              style={{
                background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFBEB 100%)',
                border: '1px solid #FDE68A',
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Globe size={18} color="#D97706" />
                <h5 style={{ margin: 0, fontSize: '0.96rem', fontWeight: 800, color: '#0F172A' }}>
                  {lang === 'ta' ? 'உலகளாவிய கல்விக் கள ஆய்வுகள் & கலாச்சாரப் பயணங்கள் (12 நாடுகள்)' : 'Global Education Systems & Cultural Research Odyssey (12 Nations Visited)'}
                </h5>
              </div>
              <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '0.85rem' }}>
                {lang === 'ta'
                  ? 'பின்லாந்து, சிங்கப்பூர், ஜப்பான், இங்கிலாந்து, கனடா, அமெரிக்கா என உலகின் மிகச்சிறந்த கல்வி முறைகளையும் சமூக கலாச்சாரங்களையும் நேரில் ஆய்வு செய்து, ஆச்சாரியாவின் தனித்துவமான "தசாவதானி" மற்றும் "மைவே" (MiWay) பாடத்திட்டங்களை வடிவமைக்க முனைவர் ஜே. அரவிந்தன் விரிவான உலகப் பயணங்களை மேற்கொண்டுள்ளார்.'
                  : 'In his quest to learn about the education systems and social cultures across the world, Dr. Arawindhan has travelled the length and breadth of the planet — including Finland, Singapore, Japan, Canada, China, Italy, USA, and beyond — to synthesize the world’s most progressive pedagogical models into ACHARIYA’s Dasavadani and MiWay frameworks.'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {biographyData.globalStudyTravel.map((country, cIdx) => (
                  <span
                    key={cIdx}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      color: '#1E293B',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                      boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span>🌐</span>
                    <span>{country}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Thesis Box */}
          <div
            style={{
              background: '#FFFBEB',
              borderLeft: '4px solid var(--gold-primary)',
              border: '1px solid #FDE68A',
              padding: '1.5rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '2rem',
            }}
          >
            <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              {lang === 'ta' ? 'மையக் கல்விக் கோட்பாடு: திறனை விட மூளையின் செயல்பாடு' : 'The Core Thesis: Brain Activity Over Ability'}
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, fontStyle: 'italic' }}>
              {biographyData.coreThesis[lang]}
            </p>
          </div>

          {/* Three Verticals Breakdown */}
          <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: '4px', height: '22px', background: 'var(--gold-primary)', borderRadius: '2px' }} />
            <h4 className="font-heading" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              {lang === 'ta' ? 'ஒருங்கிணைந்த மூன்று தலைமைத்துவத் தளங்கள்' : 'Three Reinforcing Verticals of Leadership'}
            </h4>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            {biographyData.threeVerticals.map((vert, idx) => {
              const icons = [GraduationCap, Building2, ShieldCheck];
              const IconComp = icons[idx] || Sparkles;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 8px 24px -6px rgba(15, 23, 42, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #D97706, #B45309)' }} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
                          border: '1px solid #FDE68A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#B45309',
                          flexShrink: 0,
                        }}
                      >
                        <IconComp size={18} />
                      </div>
                      <div style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.08rem', letterSpacing: '-0.01em' }}>
                        {vert.title[lang]}
                      </div>
                    </div>
                    <div
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px',
                        padding: '0.4rem 0.75rem',
                        color: 'var(--gold-glow)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        marginBottom: '0.85rem',
                        fontStyle: 'italic',
                      }}
                    >
                      {vert.question[lang]}
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
                      {vert.description[lang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Signature Effect (Seyalthiram) Staged Progression */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.98) 100%)',
              border: '1px solid rgba(217, 119, 6, 0.25)',
              borderRadius: '16px',
              padding: '1.75rem',
              boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <Sparkles size={18} style={{ color: 'var(--gold-primary)' }} />
              <h5 style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 800, margin: 0, letterSpacing: '-0.01em' }}>
                {lang === 'ta' ? 'செயல்திறன் (Seyalthiram) ஐந்து படிநிலைகள்' : 'The Signature Effect (Seyalthiram) 5-Stage Cognitive Progression'}
              </h5>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {[
                { stage: '01', enName: 'Arivu', enSub: 'Cognitive Readiness', taName: 'அறிவு', taSub: 'தயார்நிலை' },
                { stage: '02', enName: 'Attral', enSub: 'Active Expression', taName: 'ஆற்றல்', taSub: 'வெளிப்பாடு' },
                { stage: '03', enName: 'Aazhumai', enSub: 'Inner Self-Confidence', taName: 'ஆளுமை', taSub: 'சுயநம்பிக்கை' },
                { stage: '04', enName: 'Asaradhana Thunivu', enSub: 'Unshakeable Grit', taName: 'அசராத துணிவு', taSub: 'உறுதி' },
                { stage: '05', enName: 'Adhivisheha Thiran', enSub: 'Distinctive Mastery', taName: 'அதிவிசேஷ திறன்', taSub: 'வாழ்வியல் ஆளுமை' },
              ].map((step, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '0.9rem',
                    boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
                    position: 'relative',
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--gold-primary)', fontFamily: 'monospace', marginBottom: '0.2rem' }}>
                    STAGE {step.stage}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.15rem' }}>
                    {lang === 'ta' ? step.taName : step.enName}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {lang === 'ta' ? step.taSub : step.enSub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Insights: Seven Lessons from the Leader */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 4.5rem auto' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'தலைமைத்துவ ஞானம்' : 'LEADERSHIP WISDOM & PRINCIPLES'}
            title={lang === 'ta' ? 'தலைவரிடமிருந்து 7 வாழ்வியல் பாடங்கள்' : 'Seven Lessons from the Leader'}
            subtitle={lang === 'ta' ? '28 ஆண்டு கால கல்விப் பயணம் மற்றும் நிறுவன உருவாக்கத்தில் செதுக்கப்பட்ட நடைமுறை தலைமைத்துவ ஞானம்.' : 'Practical leadership principles forged over 28 years of building world-class education systems.'}
          />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              alignItems: 'stretch',
            }}
          >
            {leadershipLessons.map((lesson) => (
              <div
                key={lesson.number}
                className="card-premium"
                style={{
                  flex: '1 1 290px',
                  maxWidth: '315px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #D97706, #F59E0B)' }} />
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span style={{ background: '#FFFBEB', border: '1px solid #FDE68A', color: '#B45309', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800, fontFamily: 'monospace' }}>
                      LESSON 0{lesson.number}
                    </span>
                    <Sparkles size={15} color="#D97706" />
                  </div>

                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    {lesson.title[lang]}
                  </h4>

                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {lesson.principle[lang]}
                  </p>
                </div>

                <div
                  style={{
                    background: '#FAF8F5',
                    borderLeft: '3px solid #D97706',
                    padding: '0.85rem 1rem',
                    borderRadius: '0 8px 8px 0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                  }}
                >
                  <Quote size={15} color="#D97706" style={{ minWidth: '15px', marginTop: '2px' }} />
                  <p style={{ fontSize: '0.84rem', fontStyle: 'italic', color: '#1E293B', margin: 0, lineHeight: 1.55 }}>
                    "{lesson.quote[lang]}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 7 Core Values Behind the Vision */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto 4.5rem auto',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)',
            border: '1.5px solid #FDE68A',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 10px 30px -10px rgba(217, 119, 6, 0.08)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: '#FFFBEB', border: '1px solid #FDE68A', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Compass size={13} color="#D97706" />
              <span>{lang === 'ta' ? 'மூலக் கொள்கைகள்' : 'PHILOSOPHICAL PILLARS'}</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              {lang === 'ta' ? 'தொலைநோக்குப் பார்வையின் 7 மூல விழுமியங்கள்' : 'The Seven Values Behind the Vision'}
            </h3>
            <p style={{ margin: '0.4rem auto 0 auto', maxWidth: '650px', color: '#64748B', fontSize: '0.92rem' }}>
              {lang === 'ta'
                ? 'ஆச்சாரியாவின் ஒவ்வொரு வகுப்பறை, நிறுவனம் மற்றும் வழிகாட்டல் தருணங்களையும் வழிநடத்தும் அடிப்படைப் பண்புகள்.'
                : 'The foundational tenets guiding every classroom, enterprise, and mentorship interaction across the ecosystem.'}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              alignItems: 'stretch',
            }}
          >
            {coreValues.map((val) => (
              <div
                key={val.number}
                style={{
                  flex: '1 1 270px',
                  maxWidth: '300px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
                }}
              >
                <div
                  style={{
                    minWidth: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #FEF3C7 0%, #D97706 100%)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'monospace',
                  }}
                >
                  {val.number}
                </div>
                <div>
                  <h5 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.35rem 0' }}>
                    {val.title[lang]}
                  </h5>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {val.description[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 5 Concentric Ripples of Educational Transformation */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 4.5rem auto' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'சமூகத் தாக்கம்' : 'SOCIETAL MULTIPLIER'}
            title={lang === 'ta' ? 'கல்வி மாற்றத்தின் 5 தொடர் அலைகள்' : 'The Five Concentric Ripples of Transformation'}
            subtitle={lang === 'ta' ? 'ஒரு மனிதரின் தொலைநோக்கு எவ்வாறு ஆசிரியர்கள், குழந்தைகள், குடும்பங்கள் மற்றும் எதிர்காலத் தலைமுறையினரைத் தொட்டு விரிகிறது.' : 'How a single visionary spark expands outward into educators, children, families, communities, and future generations.'}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {transformationRipples.map((ripple) => (
              <div
                key={ripple.step}
                className="card-premium"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1.25rem 1.75rem',
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    minWidth: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#FFFBEB',
                    border: '2px solid #D97706',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    color: '#B45309',
                    fontFamily: 'monospace',
                  }}
                >
                  0{ripple.step}
                </div>

                <div style={{ flex: '1 1 240px' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {lang === 'ta' ? `நிலை 0${ripple.step}` : `RIPPLE LEVEL 0${ripple.step}`}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: '0.15rem 0' }}>
                    {ripple.level[lang]}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
                    {ripple.focus[lang]}
                  </div>
                </div>

                <div style={{ flex: '2 1 320px', borderLeft: '1px solid #E2E8F0', paddingLeft: '1.25rem' }}>
                  <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                    {ripple.impact[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Authorized Quotes from Dr. J. Arawindhan */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 4.5rem auto' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'அவரது சொந்த வரிகள்' : 'IN HIS OWN WORDS'}
            title={lang === 'ta' ? 'முனைவர் ஜே. அரவிந்தன் அவர்களின் பொன்மொழிகள்' : 'Direct Quotations from Dr. J. Arawindhan'}
            subtitle={lang === 'ta' ? 'கல்வி, ஆளுமை மற்றும் மனித மேம்பாடு குறித்த முனைவர் அரவிந்தன் அவர்களின் முக்கிய வாழ்வியல் சிந்தனைகள்.' : 'Key pedagogical, entrepreneurial, and philosophical reflections guiding the ACHARIYA ecosystem.'}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {directQuotes.slice(0, 6).map((item, qIdx) => (
              <div
                key={qIdx}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 15px rgba(15, 23, 42, 0.03)',
                  position: 'relative',
                }}
              >
                <div>
                  <Quote size={20} color="#D97706" style={{ opacity: 0.6, marginBottom: '0.75rem' }} />
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#0F172A',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                      fontStyle: 'italic',
                    }}
                  >
                    "{item.quote[lang]}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.85rem' }}>
                  <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, lineHeight: 1.5 }}>
                    {item.context[lang]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Golden Transformation: Ten Avatar Phases */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'ஆன்ம பரிணாமப் பாதை' : 'SOUL EVOLUTION PATH'}
            title={lang === 'ta' ? 'தங்க உருமாற்றம்: 10 அவதாரக் கட்டங்கள்' : 'The Golden Transformation: Ten Avatar Phases'}
            subtitle={lang === 'ta' ? 'அறிதல், செய்தல், இருத்தல், விழித்தெழுதல் மற்றும் மலர்தல் ஆகிய நிலைகளில் அமைந்த வாழ்வியல் பயணம்.' : 'A mapped journey “from a little more to a Lot more”, from positivity to peak possibilities.'}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {avatarPhases.map((phase) => (
              <div
                key={phase.phase}
                className="card-premium"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  padding: '1.5rem 2rem',
                }}
              >
                <div
                  style={{
                    minWidth: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FEF3C7 0%, #D97706 100%)',
                    border: '2px solid #FDE68A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    color: '#FFFFFF',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {phase.phase}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <h4 className="font-serif heading-gold" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                      {phase.avatar[lang]}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gold-glow)', fontWeight: 700, background: '#FFFBEB', border: '1px solid #FDE68A', padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>
                      {phase.essence[lang]}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    {phase.description[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href={`/${lang}/education`} className="btn-gold">
              <span>{lang === 'ta' ? 'அவரது கல்விப் புத்தாக்கங்களை அறிக' : 'Explore His Educational Innovations'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
