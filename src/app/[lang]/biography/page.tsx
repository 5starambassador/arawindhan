import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
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
          <h4 className="font-serif heading-white" style={{ fontSize: '1.35rem', marginBottom: '1.25rem', fontWeight: 800 }}>
            {lang === 'ta' ? 'ஒருங்கிணைந்த மூன்று தலைமைத்துவத் தளங்கள்' : 'Three Reinforcing Verticals of Leadership'}
          </h4>

          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            {biographyData.threeVerticals.map((vert, idx) => (
              <div key={idx} style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                <div style={{ color: 'var(--gold-glow)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  {vert.title[lang]}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {vert.question[lang]}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {vert.description[lang]}
                </p>
              </div>
            ))}
          </div>

          {/* Signature Effect (Seyalthiram) Staged Progression */}
          <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', padding: '1.5rem' }}>
            <h5 style={{ color: 'var(--gold-glow)', fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              {lang === 'ta' ? 'செயல்திறன் (Seyalthiram) ஐந்து படிநிலைகள்' : 'The Signature Effect (Seyalthiram) Progression'}
            </h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              {lang === 'ta'
                ? 'அறிவு (Arivu / தயார்நிலை) → ஆற்றல் (Attral / வெளிப்பாடு) → ஆளுமை (Aazhumai / சுயநம்பிக்கை) → அசராத துணிவு (Asaradhana Thunivu / உறுதி) → அதிவிசேஷ திறன் (Adhivisheha Thiran / தனித்துவமான வாழ்வியல் ஆளுமை).'
                : 'A staged cognitive progression: Arivu (readiness) → Attral (expression) → Aazhumai (self-confidence) → Asaradhana Thunivu (unshakeable grit) → Adhivisheha Thiran (a distinctive personal way of engaging with the world).'}
            </p>
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
