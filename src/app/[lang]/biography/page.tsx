import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Compass, CheckCircle2, ArrowRight, GraduationCap, Building2, Sparkles } from 'lucide-react';
import { biographyData, avatarPhases } from '@/data/biography';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { Language } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
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
            <span style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>
              {lang === 'ta' ? 'கல்வித் தோற்றம்: 2000 முதல் 2026' : 'GENESIS & 25-YEAR ODYSSEY (2000–2026)'}
            </span>
            <ClaimBadge claimId="CLM-001" status="CONFIRMED" language={lang} />
          </div>

          <h3 className="font-serif heading-gold" style={{ fontSize: '1.75rem', marginBottom: '1.25rem', fontWeight: 800 }}>
            {lang === 'ta' ? 'மெக்கானிக்கல் பொறியியலில் இருந்து மனித ஆளுமைப் புரட்சி வரை' : 'From Mechanical Engineering to Awakening Human Potential'}
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            {biographyData.overview[lang]}
          </p>

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
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
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
