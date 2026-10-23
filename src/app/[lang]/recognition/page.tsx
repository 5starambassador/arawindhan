import React from 'react';
import Link from 'next/link';
import { Award, Trophy, Medal, Star, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalHonours, institutionalAccolades, worldRecordsData } from '@/data/recognition';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { Language } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function RecognitionPage({
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

          <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #FDE68A', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ color: 'var(--gold-glow)', fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              {lang === 'ta' ? 'சாதனைகளின் சிறப்பம்சங்கள்:' : 'Key Cognitive & Physical Record Domains:'}
            </h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {worldRecordsData.highlights.map((h, i) => (
                <li key={i}>{h[lang]}</li>
              ))}
            </ul>
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
      </div>
    </div>
  );
}
