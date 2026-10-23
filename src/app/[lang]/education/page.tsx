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

        {/* Bespoke Whole-Brain Classroom Visual Showcase */}
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '3rem',
            border: '2px solid #FDE68A',
            boxShadow: '0 15px 35px -10px rgba(217, 119, 6, 0.2)',
            maxHeight: '380px',
          }}
        >
          <img
            src="/images/education_hero.jpg"
            alt="Whole-Brain Modern Learning Architecture across ACHARIYA Classrooms"
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
              padding: '1.5rem 2rem',
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.25) 60%, transparent 100%)',
              color: '#FFFFFF',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
              <span style={{ background: '#D97706', color: '#FFFFFF', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>
                WHOLE-BRAIN PEDAGOGY
              </span>
              <span style={{ color: '#FEF3C7', fontSize: '0.85rem', fontWeight: 700 }}>
                {lang === 'ta' ? 'திறனை விட மூளையின் செயல்பாடே பிரதானம்' : 'Brain Activity Over Ability — 10 Living Curricular Systems'}
              </span>
            </div>
            <p style={{ color: '#E2E8F0', fontSize: '0.92rem', margin: 0, maxWidth: '800px', lineHeight: 1.6 }}>
              {lang === 'ta'
                ? 'ஆச்சாரியாவில் வடிவமைக்கப்பட்ட 10 தனித்துவக் கல்வி அமைப்புகளும் மாணவர்களின் பகுப்பாய்வு, நினைவாற்றல், வேகக் கணக்கீடு மற்றும் தலைமைப் பண்புகளைப் பயிற்றுவிக்கும் கள ஆய்வுக் கூடங்கள்.'
                : 'Pioneered by Dr. J. Arawindhan: turning classrooms into interactive incubators of cognitive agility, mental abacus speed, and deep creative resilience.'}
            </p>
          </div>
        </div>

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
