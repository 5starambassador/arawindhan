import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Calculator, CheckCircle, BookOpen, FlaskConical, Award, Sparkles, HeartHandshake, Compass } from 'lucide-react';
import { educationalExhibits } from '@/data/education';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { Language } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function EducationPage({
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
          badge={lang === 'ta' ? 'கல்வியியலாளரின் படைப்புகள்' : 'COLLECTION A: EDUCATIONAL CREATIONS'}
          title={lang === 'ta' ? '10 கல்விப் புத்தாக்கங்கள் & கற்பித்தல் முறைகள்' : 'Ten Original Educational Creations'}
          subtitle={lang === 'ta' ? 'ஒவ்வொரு குழந்தையையும் அவர்களின் தனித்துவமான நுண்ணறிவு சாம்ராஜ்யத்தில் ஆளுமை பெறச் செய்யும் தனித்துவ அமைப்புகள்.' : 'Proprietary curricula, frameworks, and whole-brain learning systems designed and run across ACHARIYA campuses.'}
        />

        <div className="grid-2">
          {educationalExhibits.map((exhibit) => (
            <div key={exhibit.id} className="card-premium" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span
                    style={{
                      background: '#FFFBEB',
                      border: '1px solid #FDE68A',
                      color: 'var(--gold-glow)',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    EXHIBIT {exhibit.id}
                  </span>
                  <ClaimBadge claimId={exhibit.claimId} status="SOURCE_CLAIM" language={lang} />
                </div>

                <h3 className="font-serif heading-gold" style={{ fontSize: '1.45rem', marginBottom: '0.35rem', fontWeight: 800 }}>
                  {exhibit.title[lang]}
                </h3>

                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {exhibit.subtitle[lang]}
                </div>

                <p style={{ color: 'var(--gold-glow)', fontSize: '0.88rem', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  “{exhibit.tagline[lang]}”
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  {exhibit.whatItIs[lang]}
                </p>

                {/* Key features preview */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ color: 'var(--gold-glow)', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {lang === 'ta' ? 'முக்கிய செயல்பாடுகள்:' : 'How It Works (Core Mechanics):'}
                  </div>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {exhibit.howItWorks[lang].slice(0, 3).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: '#047857', fontWeight: 700 }}>
                  ★ {exhibit.evidenceAndReach[lang][0]}
                </span>
                <Link
                  href={`/${lang}/education/${exhibit.slug}`}
                  className="btn-gold"
                  style={{ padding: '0.45rem 1.15rem', fontSize: '0.82rem' }}
                >
                  <span>{lang === 'ta' ? 'முழு ஆய்வு' : 'Deep Dive'}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
