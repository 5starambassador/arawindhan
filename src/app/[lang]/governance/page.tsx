import React from 'react';
import Link from 'next/link';
import { Layers, ShieldCheck, CheckCircle2, ArrowRight, GitCommit, Users, Cpu } from 'lucide-react';
import { governanceData } from '@/data/governance';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { Language } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function GovernancePage({
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
      </div>
    </div>
  );
}
