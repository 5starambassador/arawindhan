import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Sun, Feather, Compass, ShieldCheck, Quote } from 'lucide-react';
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
      <div className="container" style={{ maxWidth: '1050px' }}>
        <SectionHeader
          badge={lang === 'ta' ? 'ஆன்மீகத் தத்துவம் & மெய்யறிவு' : 'DIVYA YOGAM & THE INNER JOURNEY'}
          title={innerJourneyData.spiritualTitle[lang]}
          subtitle={innerJourneyData.spiritualRoles[lang]}
        />

        {/* Central Creed Callout */}
        <div
          className="card-premium"
          style={{
            textAlign: 'center',
            padding: '2.5rem',
            border: '1px solid var(--border-gold)',
            background: 'linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 100%)',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            {lang === 'ta' ? 'ஆன்மீக வாழ்வியல் முழக்கம்' : 'THE CENTRAL CREED'}
          </div>
          <h2 className="font-serif heading-gold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '1rem', fontWeight: 800 }}>
            {innerJourneyData.centralCreed[lang]}
          </h2>
          <div style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem', fontWeight: 500 }}>
            {innerJourneyData.centralQuestion[lang]}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
            {innerJourneyData.foundationStory[lang]}
          </p>
          <ClaimBadge claimId="CLM-028" status="CONFIRMED" language={lang} />
        </div>

        {/* The Seven-Step Inner Journey */}
        <div style={{ marginBottom: '4rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'உள்முகப் பரிணாமம்' : 'THE SEVEN STEPS'}
            title={lang === 'ta' ? 'ஏழு படிநிலை உள்முகப் பயணம்' : 'The Seven-Step Inner Journey'}
            subtitle={lang === 'ta' ? 'தன்னை அறிவதிலிருந்து தினமும் விழிப்புணர்வுடன் வாழ்வது வரையிலான படிநிலை மாற்றம்.' : 'Each step moves the seeker deeper—from seeing oneself clearly to living with awareness every day.'}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {innerJourneyData.sevenStepJourney.map((st) => (
              <div
                key={st.step}
                className="card-premium"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1.25rem 2rem',
                }}
              >
                <div
                  style={{
                    minWidth: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: '#FFFBEB',
                    border: '1px solid #FDE68A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-glow)',
                    fontWeight: 800,
                  }}
                >
                  {st.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <h4 className="font-serif heading-gold" style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                      {st.title[lang]}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      ({st.sub[lang]})
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {st.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Five Principles */}
        <div style={{ marginBottom: '4rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'வாழ்வியல் நெறிமுறைகள்' : 'FIVE PRINCIPLES'}
            title={lang === 'ta' ? 'ஐந்து தத்துவங்கள்: ஒரே வாழ்க்கை முறை' : 'Five Principles • One Way of Living'}
            subtitle={lang === 'ta' ? 'உடல், மனம், இதயம், புத்தி மற்றும் விழிப்புணர்வு ஒருங்கிணைந்த வாழ்வு.' : 'Embracing the whole human being through awareness, stillness, and conscious action.'}
          />

          <div className="grid-3">
            {innerJourneyData.fivePrinciples.map((p) => (
              <div key={p.number} className="card-premium">
                <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.35rem' }}>
                  {p.number}
                </div>
                <h4 className="font-serif heading-white" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 800 }}>
                  {p.title[lang]}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {p.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* In His Words: Selected Reflections */}
        <div style={{ marginBottom: '4rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'அவரது அருள்மொழிகள்' : 'IN HIS WORDS'}
            title={lang === 'ta' ? '11 மெய்யறிவு சிந்தனைகள்' : 'Eleven Thoughts at the Heart of His Teaching'}
            subtitle={lang === 'ta' ? 'திவ்ய யோகம் மற்றும் அக உருமாற்றத்தின் முக்கிய தத்துவ முத்துக்கள்.' : 'Reflections that guide seekers toward inner balance and direct experience.'}
          />

          <div className="grid-2">
            {innerJourneyData.elevenThoughts.slice(0, 6).map((item) => (
              <div key={item.num} className="card-premium">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Quote size={20} color="var(--gold-primary)" />
                  <span style={{ fontSize: '0.8rem', color: 'var(--gold-glow)', fontWeight: 800 }}>
                    THOUGHT {item.num}
                  </span>
                </div>
                <div style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '0.85rem', fontWeight: 600 }}>
                  {item.quote[lang]}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {item.reflection[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Avadhani Program & Maha Shambala */}
        <div className="grid-2">
          {/* Maha Shambala */}
          <div className="card-premium" style={{ border: '1px solid var(--border-gold)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--gold-glow)', fontWeight: 800 }}>
                ESTD. 2012
              </span>
              <ClaimBadge claimId="CLM-029" status="CONFIRMED" language={lang} />
            </div>
            <h3 className="font-serif heading-gold" style={{ fontSize: '1.45rem', marginBottom: '0.5rem', fontWeight: 800 }}>
              {innerJourneyData.mahaShambala.title[lang]}
            </h3>
            <div style={{ color: '#059669', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
              📍 {innerJourneyData.mahaShambala.dateNote}
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.75 }}>
              {innerJourneyData.mahaShambala.description[lang]}
            </p>
          </div>

          {/* Avadhani Program */}
          <div className="card-premium">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--gold-glow)', fontWeight: 800 }}>
                NATURAL HEALTH
              </span>
              <ClaimBadge claimId="CLM-030" status="SOURCE_CLAIM" language={lang} />
            </div>
            <h3 className="font-serif heading-gold" style={{ fontSize: '1.45rem', marginBottom: '0.5rem', fontWeight: 800 }}>
              {innerJourneyData.avadhaniProgram.title[lang]}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '1rem' }}>
              {innerJourneyData.avadhaniProgram.description[lang]}
            </p>
            <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <div style={{ color: 'var(--gold-glow)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                {lang === 'ta' ? 'வாழ்வின் 5 நிலைகளுக்கான நெறிமுறைகள்:' : 'Five Life Stages:'}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Foundation (6–12) • Empowerment (13–19) • Excellence (20–35) • Harmony (36–55) • Grace (56+)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
