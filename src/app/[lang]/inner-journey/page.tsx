import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Sun, Feather, Compass, ShieldCheck, Quote, Calendar, ArrowRight } from 'lucide-react';
import { innerJourneyData } from '@/data/innerJourney';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { Language } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
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
                  width: '240px',
                  height: '280px',
                  margin: '0 auto',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '3px solid #D97706',
                  boxShadow: '0 20px 35px -10px rgba(180, 83, 9, 0.25), 0 0 0 6px #FFFBEB',
                }}
              >
                <img
                  src="/images/spiritual_portrait.jpg"
                  alt={innerJourneyData.spiritualTitle[lang]}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '0.45rem',
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)',
                    color: '#FEF3C7',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  DIVYA YOGAM • ESTD. 2000
                </div>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                <ClaimBadge claimId="CLM-028" status="CONFIRMED" language={lang} />
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

          <div className="grid-3">
            {innerJourneyData.fivePrinciples.map((p) => (
              <div key={p.number} className="card-premium" style={{ borderRadius: '16px' }}>
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

        {/* In His Words: Selected Reflections */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'அவரது அருள்மொழிகள்' : 'IN HIS WORDS'}
            title={lang === 'ta' ? '11 மெய்யறிவு சிந்தனைகள்' : 'Eleven Thoughts at the Heart of His Teaching'}
            subtitle={lang === 'ta' ? 'திவ்ய யோகம் மற்றும் அக உருமாற்றத்தின் முக்கிய தத்துவ முத்துக்கள்.' : 'Reflections that guide seekers toward inner balance and direct experience.'}
          />

          <div className="grid-2">
            {innerJourneyData.elevenThoughts.slice(0, 6).map((item) => (
              <div key={item.num} className="card-premium" style={{ borderRadius: '16px', padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Quote size={18} color="#D97706" />
                  <span style={{ fontSize: '0.78rem', color: '#B45309', fontWeight: 800, letterSpacing: '0.05em' }}>
                    THOUGHT {item.num}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: '#0F172A',
                    fontSize: '1.15rem',
                    lineHeight: 1.55,
                    marginBottom: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  {item.quote[lang]}
                </div>
                <div style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {item.reflection[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maha Shambala Puducherry & Avadhani Natural Lifestyle Callout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Maha Shambala Card */}
          <div className="card-premium" style={{ border: '1px solid #FDE68A', borderRadius: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ color: '#B45309', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                ANNUAL CONVERGENCE
              </span>
              <ClaimBadge claimId="CLM-029" status="CONFIRMED" language={lang} />
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
              {innerJourneyData.mahaShambala.title[lang]}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {innerJourneyData.mahaShambala.description[lang]}
            </p>
            <div style={{ background: '#FAF8F5', padding: '0.85rem 1rem', borderRadius: '8px', fontSize: '0.85rem', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={15} color="#D97706" />
              <span>{innerJourneyData.mahaShambala.dateNote}</span>
            </div>
          </div>

          {/* Avadhani Natural Lifestyle Card */}
          <div className="card-premium" style={{ border: '1px solid #E2E8F0', borderRadius: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ color: '#059669', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                HOLISTIC HEALTHCARE
              </span>
              <ClaimBadge claimId="CLM-030" status="SOURCE_CLAIM" language={lang} />
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
      </div>
    </div>
  );
}
