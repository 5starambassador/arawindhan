import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Sun, Feather, Compass, ShieldCheck, Quote, Calendar, ArrowRight } from 'lucide-react';
import { innerJourneyData } from '@/data/innerJourney';
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
      title: 'உள்முகப் பயணம் & ஆன்மீக நிலை | முனைவர் ஜே. அரவிந்தன் (Arawindhan)',
      description:
        'முனைவர் ஜே. அரவிந்தன் (மகா அவதானி ஸ்ரீ ஆச்சாரியா அரவிந்தன் குருஜி) அவர்களின் ஆன்மீக விழிப்புணர்வு, திவ்ய யோகம் மற்றும் அகப்பயணத் தத்துவம்.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta/inner-journey',
        languages: {
          en: 'https://www.arawindhan.com/en/inner-journey',
          ta: 'https://www.arawindhan.com/ta/inner-journey',
          'x-default': 'https://www.arawindhan.com/en/inner-journey',
        },
      },
      openGraph: {
        title: 'உள்முகப் பயணம் & திவ்ய யோகம் | முனைவர் ஜே. அரவிந்தன்',
        description: 'முனைவர் ஜே. அரவிந்தன் அவர்களின் ஆன்மீக விழிப்புணர்வு மற்றும் திவ்ய யோகம்.',
        url: 'https://www.arawindhan.com/ta/inner-journey',
        siteName: 'Dr. J. Arawindhan Official Platform',
      },
    };
  }

  return {
    title: 'Inner Journey & Spiritual Dimensions | Dr. J. Arawindhan — Divya Yogam',
    description:
      'Spiritual awakening, Mahavadhani GuruG realization, Divya Yogam, and inner consciousness philosophy of Dr. J. Arawindhan (Arawindhan).',
    alternates: {
      canonical: 'https://www.arawindhan.com/en/inner-journey',
      languages: {
        en: 'https://www.arawindhan.com/en/inner-journey',
        ta: 'https://www.arawindhan.com/ta/inner-journey',
        'x-default': 'https://www.arawindhan.com/en/inner-journey',
      },
    },
    openGraph: {
      title: 'Inner Journey & Spiritual Dimensions | Dr. J. Arawindhan',
      description:
        'Explore the spiritual realization, Divya Yogam, and inner dimensions of Dr. J. Arawindhan.',
      url: 'https://www.arawindhan.com/en/inner-journey',
      siteName: 'Dr. J. Arawindhan Official Platform',
    },
  };
}

export default async function InnerJourneyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  return (
    <div className="section-py">
      <div className="container" style={{ maxWidth: '1100px' }}>
        <SectionHeader
          badge={lang === 'ta' ? 'ஆன்மீகத் தத்துவம் & மெய்யறிவு' : 'DIVYA YOGAM & THE INNER JOURNEY'}
          title={innerJourneyData.spiritualTitle[lang]}
          subtitle={innerJourneyData.spiritualRoles[lang]}
        />

        {/* Central Creed & Spiritual Portrait Showcase */}
        <div
          className="card-premium"
          style={{
            padding: '2.5rem',
            border: '1px solid #FDE68A',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)',
            boxShadow: '0 20px 40px -15px rgba(217, 119, 6, 0.1), 0 0 0 1px rgba(253, 230, 138, 0.6)',
            marginBottom: '4rem',
            borderRadius: '20px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Spiritual Portrait */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 'min(280px, calc(100vw - 4rem))',
                  aspectRatio: '1 / 1',
                  margin: '0 auto',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '3px solid #D97706',
                  boxShadow: '0 25px 45px -12px rgba(217, 119, 6, 0.35), 0 0 0 6px #FFFBEB',
                  background: '#0B132B',
                }}
              >
                <img
                  src="/images/santoshi_shri_arawindhan.png"
                  alt={innerJourneyData.spiritualTitle[lang]}
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
                    background: 'linear-gradient(to top, rgba(11, 19, 43, 0.95), rgba(11, 19, 43, 0.4) 60%, transparent)',
                    color: '#FEF3C7',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  DIVYA YOGAM • ESTD. 2000
                </div>
              </div>
            </div>

            {/* Right: Central Creed & Narrative */}
            <div>
              <div
                style={{
                  display: 'inline-block',
                  background: '#FFFBEB',
                  border: '1px solid #FDE68A',
                  color: '#B45309',
                  padding: '0.25rem 0.8rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.75rem',
                }}
              >
                {lang === 'ta' ? 'ஆன்மீக வாழ்வியல் முழக்கம்' : 'THE CENTRAL CREED'}
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                  fontWeight: 700,
                  color: '#0F172A',
                  lineHeight: 1.25,
                  letterSpacing: '-0.015em',
                  marginBottom: '0.75rem',
                }}
              >
                {innerJourneyData.centralCreed[lang]}
              </h2>

              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.18rem',
                  color: '#B45309',
                  fontStyle: 'italic',
                  marginBottom: '1.25rem',
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                {innerJourneyData.centralQuestion[lang]}
              </div>

              <p
                style={{
                  color: '#334155',
                  fontSize: '1.02rem',
                  lineHeight: 1.8,
                  marginBottom: '1.25rem',
                  fontWeight: 400,
                }}
              >
                {innerJourneyData.foundationStory[lang]}
              </p>

              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '0.85rem 1.15rem',
                  fontSize: '0.88rem',
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Sparkles size={16} color="#D97706" />
                <span>
                  {lang === 'ta'
                    ? 'ஆன்மீகம் என்பது உலகைத் துறப்பது அல்ல; விழிப்புணர்வுடன் உலகை வாழ்வது.'
                    : 'Spirituality is not leaving the world; it is living consciously within it.'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The Seven-Step Inner Journey */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'உள்முகப் பரிணாமம்' : 'THE SEVEN STEPS'}
            title={lang === 'ta' ? 'ஏழு படிநிலை உள்முகப் பயணம்' : 'The Seven-Step Inner Journey'}
            subtitle={lang === 'ta' ? 'தன்னை அறிவதிலிருந்து தினமும் விழிப்புணர்வுடன் வாழ்வது வரையிலான படிநிலை மாற்றம்.' : 'Each step moves the seeker deeper—from seeing oneself clearly to living with awareness every day.'}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {innerJourneyData.sevenStepJourney.map((st) => (
              <div
                key={st.step}
                className="card-premium"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1.25rem 1.75rem',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    minWidth: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#FFFBEB',
                    border: '1.5px solid #FDE68A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B45309',
                    fontWeight: 800,
                    fontSize: '1rem',
                    fontFamily: 'monospace',
                  }}
                >
                  {st.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#0F172A',
                        margin: 0,
                      }}
                    >
                      {st.title[lang]}
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: '#B45309', fontStyle: 'italic', fontWeight: 600 }}>
                      ({st.sub[lang]})
                    </span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                    {st.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Five Principles */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'வாழ்வியல் நெறிமுறைகள்' : 'FIVE PRINCIPLES'}
            title={lang === 'ta' ? 'ஐந்து தத்துவங்கள்: ஒரே வாழ்க்கை முறை' : 'Five Principles • One Way of Living'}
            subtitle={lang === 'ta' ? 'உடல், மனம், இதயம், புத்தி மற்றும் விழிப்புணர்வு ஒருங்கிணைந்த வாழ்வு.' : 'Embracing the whole human being through awareness, stillness, and conscious action.'}
          />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
            }}
          >
            {innerJourneyData.fivePrinciples.map((p) => (
              <div
                key={p.number}
                className="card-premium"
                style={{
                  flex: '1 1 300px',
                  maxWidth: '340px',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div
                  style={{
                    color: '#B45309',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    fontFamily: 'monospace',
                    marginBottom: '0.4rem',
                  }}
                >
                  {p.number}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '0.5rem',
                  }}
                >
                  {p.title[lang]}
                </h4>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                  {p.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Twenty-Five Years, One Direction (The 7-Phase Journey) */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? '25 ஆண்டுப் பயணம்' : 'TWENTY-FIVE YEARS, ONE DIRECTION'}
            title={lang === 'ta' ? 'புற உலக சாதனைகளிலிருந்து அக விழிப்புணர்வை நோக்கி' : 'From Knowing More to Becoming More'}
            subtitle={lang === 'ta' ? 'ஒவ்வொரு அத்தியாயமும் அடுத்த அத்தியாயத்திற்கு வழிகோலியது — கற்கும் விதம் முதல் வாழும் விதம் வரை.' : 'From achieving outwardly to awakening inwardly. Bringing the outer journey and inner journey into sacred harmony.'}
          />

          {/* Outer Journey: 4 Phases (Balanced 4-col / 2x2 grid) */}
          <div style={{ marginBottom: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.15rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#475569',
                  background: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '999px',
                }}
              >
                {lang === 'ta' ? 'புறப் பயணம் (படிநிலைகள் I – IV)' : 'THE OUTER JOURNEY (PHASES I – IV)'}
              </span>
              <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                {lang === 'ta' ? 'கல்வி, மனித ஆற்றல், தலைமைத்துவம் & நல்வாழ்வு' : 'Education, human potential, leadership & wellbeing'}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem' }}>
              {innerJourneyData.journeyPhases.filter((p) => p.realm === 'outer').map((phase) => (
                <div
                  key={phase.num}
                  className="card-premium"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    background: '#FFFFFF',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '0.95rem', color: '#64748B' }}>
                      PHASE {phase.num}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '999px',
                        background: '#F1F5F9',
                        color: '#475569',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {lang === 'ta' ? 'புறப் பயணம்' : 'Outer Journey'}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>
                    {phase.title[lang]}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: '#B45309', fontStyle: 'italic', marginBottom: '0.5rem', fontWeight: 600 }}>
                    {phase.subtitle[lang]}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    {phase.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inner Journey: 3 Phases (Balanced 3-col gold cards) */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.15rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#B45309',
                  background: '#FFFBEB',
                  border: '1px solid #FDE68A',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '999px',
                }}
              >
                {lang === 'ta' ? 'அகப் பயணம் (படிநிலைகள் V – VII)' : 'THE INNER JOURNEY (PHASES V – VII)'}
              </span>
              <span style={{ fontSize: '0.84rem', color: '#B45309', fontStyle: 'italic', fontWeight: 600 }}>
                {lang === 'ta' ? 'தியானம், விழிப்புணர்வு & திவ்ய யோகம்' : 'Meditation, consciousness & sacred harmony'}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}>
              {innerJourneyData.journeyPhases.filter((p) => p.realm === 'inner').map((phase) => (
                <div
                  key={phase.num}
                  className="card-premium"
                  style={{
                    padding: '1.65rem',
                    borderRadius: '16px',
                    border: '1.5px solid #FDE68A',
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFBEB 100%)',
                    boxShadow: '0 8px 24px -6px rgba(217, 119, 6, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '0.95rem', color: '#B45309' }}>
                      PHASE {phase.num}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '999px',
                        background: '#FEF3C7',
                        color: '#92400E',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {lang === 'ta' ? 'அகப் பயணம்' : 'Inner Journey'}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>
                    {phase.title[lang]}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: '#B45309', fontStyle: 'italic', marginBottom: '0.5rem', fontWeight: 600 }}>
                    {phase.subtitle[lang]}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    {phase.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission: 5 Pillars & 6 Gateways */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'நோக்கமும் கொள்கையும்' : 'VISION & MISSION'}
            title={innerJourneyData.visionMission.vision[lang]}
            subtitle={innerJourneyData.visionMission.visionStatement[lang]}
          />

          {/* 5 Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {innerJourneyData.visionMission.pillars.map((pil) => (
              <div
                key={pil.num}
                className="card-premium"
                style={{
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    margin: '0 auto 0.65rem auto',
                    borderRadius: '50%',
                    background: '#FFFBEB',
                    border: '1.5px solid #FDE68A',
                    color: '#B45309',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                  }}
                >
                  {pil.num}
                </div>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                  {pil.title[lang]}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  {pil.focus[lang]}
                </div>
              </div>
            ))}
          </div>

          {/* 6 Mission Gateways */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {innerJourneyData.visionMission.gateways.map((gate, gIdx) => (
              <div
                key={gIdx}
                className="card-premium"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                }}
              >
                <Sparkles size={18} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    {gate.title[lang]}
                  </div>
                  <div style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.55 }}>
                    {gate.desc[lang]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paths & Offerings + Soul Evolution Path */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'ஆன்மீகப் பாதைகள்' : 'PATHS & OFFERINGS'}
            title={lang === 'ta' ? 'அகத்தை நோக்கி உங்கள் பாதையைத் தேர்வு செய்யுங்கள்' : 'Choose Your Path Within'}
            subtitle={lang === 'ta' ? 'வெவ்வேறு பயிற்சிகள். வெவ்வேறு தொடக்கப் புள்ளிகள். ஒரே உன்னத நோக்கம்: விழிப்புணர்வுடன் வாழ்வது.' : 'Different practices. Different starting points. One deeper purpose: to experience life more consciously.'}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {innerJourneyData.pathsAndOfferings.paths.map((p) => (
              <div
                key={p.id}
                className="card-premium"
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <span style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', display: 'block' }}>
                  PATH {p.id}
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.65rem' }}>
                  {p.title[lang]}
                </h4>
                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                  {p.desc[lang]}
                </p>
              </div>
            ))}
          </div>

          {/* Soul Evolution Path (6 Stages - Balanced 6 Across) */}
          <div
            className="card-premium"
            style={{
              padding: '2rem 2.25rem',
              borderRadius: '20px',
              border: '1px solid #FDE68A',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFBEB 100%)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ color: '#B45309', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                THE SACRED ASCENT
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', margin: '0.35rem 0' }}>
                {lang === 'ta' ? 'ஆன்மப் பரிணாம வளர்ச்சிப் பாதை' : 'The Soul Evolution Path'}
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.85rem' }}>
              {innerJourneyData.pathsAndOfferings.soulEvolutionPath.map((stage) => (
                <div
                  key={stage.step}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '1.15rem 0.75rem',
                    textAlign: 'center',
                    boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      margin: '0 auto 0.5rem auto',
                      borderRadius: '50%',
                      background: '#FEF3C7',
                      color: '#B45309',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {stage.step}
                  </div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.02rem', marginBottom: '0.2rem' }}>
                    {lang === 'ta' ? stage.ta : stage.name}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', lineHeight: 1.4 }}>
                    {stage.desc[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* In His Words: All Eleven Thoughts (Featured Thought 01 + 5 Balanced Pairs) */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'அவரது அருள்மொழிகள்' : 'IN HIS WORDS'}
            title={lang === 'ta' ? '11 மெய்யறிவு சிந்தனைகள்' : 'Eleven Thoughts at the Heart of His Teaching'}
            subtitle={lang === 'ta' ? 'திவ்ய யோகம் மற்றும் அக உருமாற்றத்தின் 11 முக்கிய தத்துவ முத்துக்கள்.' : 'Eleven foundational reflections with practical guidance on living consciously.'}
          />

          <div className="grid-2">
            {innerJourneyData.elevenThoughts.map((item, idx) => {
              const isFirst = idx === 0;
              return (
                <div
                  key={item.num}
                  className="card-premium"
                  style={{
                    borderRadius: '16px',
                    padding: isFirst ? '2.25rem' : '1.75rem',
                    gridColumn: isFirst ? '1 / -1' : 'auto',
                    border: isFirst ? '1.5px solid #FDE68A' : '1px solid #E2E8F0',
                    background: isFirst ? 'linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 100%)' : '#FFFFFF',
                    boxShadow: isFirst ? '0 10px 30px -10px rgba(217, 119, 6, 0.12)' : undefined,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Quote size={isFirst ? 22 : 18} color="#D97706" />
                    <span style={{ fontSize: '0.78rem', color: '#B45309', fontWeight: 800, letterSpacing: '0.05em' }}>
                      THOUGHT {item.num} {isFirst ? (lang === 'ta' ? '• முதன்மை மெய்யறிவு சிந்தனை' : '• FOUNDATIONAL INQUIRY') : ''}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      color: '#0F172A',
                      fontSize: isFirst ? '1.35rem' : '1.15rem',
                      lineHeight: 1.55,
                      marginBottom: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    {item.quote[lang]}
                  </div>
                  <div style={{ color: '#475569', fontSize: isFirst ? '1rem' : '0.92rem', lineHeight: 1.65 }}>
                    {item.reflection[lang]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Maha Shambala Puducherry & Avadhani Natural Lifestyle Callout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Maha Shambala Card */}
          <div className="card-premium" style={{ border: '1px solid #FDE68A', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{ color: '#B45309', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                ANNUAL CONVERGENCE & SACRED TREATISE
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '90px',
                  height: '130px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '1.5px solid #FDE68A',
                  boxShadow: '0 8px 16px rgba(180, 83, 9, 0.2)',
                  background: '#FFFFFF',
                }}
              >
                <img
                  src="/images/shambala_book.jpg"
                  alt="Maha Shambala - The Mystery Behind Awakening"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '0.35rem',
                  }}
                >
                  {innerJourneyData.mahaShambala.title[lang]}
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#B45309', fontWeight: 700 }}>
                  {lang === 'ta' ? 'அதிகாரப்பூர்வ நூல் & ஆன்மீக சங்கமம்' : 'Official Published Work & Spiritual Convergence'}
                </div>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {innerJourneyData.mahaShambala.description[lang]}
            </p>
            <div style={{ background: '#FAF8F5', padding: '0.85rem 1rem', borderRadius: '8px', fontSize: '0.85rem', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
              <Calendar size={15} color="#D97706" />
              <span>{innerJourneyData.mahaShambala.dateNote}</span>
            </div>
          </div>

          {/* Avadhani Natural Lifestyle Card */}
          <div className="card-premium" style={{ border: '1px solid #E2E8F0', borderRadius: '16px' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{ color: '#059669', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                HOLISTIC HEALTHCARE
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#0F172A',
                marginBottom: '0.5rem',
              }}
            >
              {innerJourneyData.avadhaniProgram.title[lang]}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {innerJourneyData.avadhaniProgram.description[lang]}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Early Rising', 'Oil Pulling', 'Saptha Mahakriya', 'Kadukkai Podi'].map((item) => (
                <span
                  key={item}
                  style={{
                    background: '#F1F5F9',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                    color: '#334155',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section X: The Legacy & A Benediction */}
        <div
          className="card-premium"
          style={{
            padding: '3rem 2.5rem',
            borderRadius: '24px',
            border: '2px solid #FDE68A',
            background: 'linear-gradient(180deg, #FAF8F5 0%, #FFFBEB 100%)',
            textAlign: 'center',
            boxShadow: '0 20px 40px -15px rgba(217, 119, 6, 0.15)',
          }}
        >
          <span style={{ color: '#B45309', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
            THE LEGACY
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              color: '#0F172A',
              margin: '0.5rem 0 1rem 0',
            }}
          >
            {innerJourneyData.legacyAndBenediction.title[lang]}
          </h2>
          <p
            style={{
              color: '#334155',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: '800px',
              margin: '0 auto 2rem auto',
            }}
          >
            {innerJourneyData.legacyAndBenediction.message[lang]}
          </p>

          <div
            style={{
              background: '#FFFFFF',
              border: '1.5px solid #FDE68A',
              borderRadius: '16px',
              padding: '2rem 2.5rem',
              maxWidth: '680px',
              margin: '0 auto',
              boxShadow: '0 8px 24px rgba(217, 119, 6, 0.08)',
            }}
          >
            <div style={{ color: '#B45309', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              {lang === 'ta' ? 'அருளாசி (A BENEDICTION)' : 'A BENEDICTION'}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: '#78350F',
                lineHeight: 1.85,
                whiteSpace: 'pre-line',
                fontWeight: 600,
              }}
            >
              {innerJourneyData.legacyAndBenediction.benediction[lang]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
