import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Crown, CheckCircle2, Award } from 'lucide-react';
import { Language } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function DesignPreviewPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  return (
    <div style={{ backgroundColor: '#F4EFE6', minHeight: '100vh', padding: '3rem 1rem 5rem 1rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        {/* Top Header Badge */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#090E17',
              color: '#DFBA53',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              padding: '0.45rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
            }}
          >
            <Crown style={{ width: '16px', height: '16px', color: '#DFBA53' }} />
            Visual Colour & Theme Sample
          </div>

          <h1
            style={{
              fontFamily: 'Cinzel, Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 800,
              color: '#090E17',
              letterSpacing: '-0.02em',
              marginTop: '0.25rem',
            }}
          >
            Sovereign Royal Theme Palette
          </h1>

          <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '650px', lineHeight: 1.6 }}>
            Here is the visual demonstration of the proposed <strong>Imperial 24K Gold, Midnight Obsidian, and Warm Alabaster</strong> system compared with the current live colors.
          </p>
        </div>

        {/* SECTION 1: VISUAL COLOUR SWATCHES */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '1rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Palette Visual Sample
            </span>
            <h2 style={{ fontFamily: 'Cinzel, Georgia, serif', fontSize: '1.6rem', fontWeight: 700, color: '#090E17', marginTop: '0.25rem' }}>
              The 4 Royal Core Colours
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* Swatch 1: Imperial Gold */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div
                style={{
                  height: '110px',
                  background: 'linear-gradient(135deg, #FBF5B7 0%, #DFBA53 30%, #C5A059 70%, #9E7B35 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
                }}
              >
                <span style={{ fontWeight: 800, color: '#1E1602', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  24K Imperial Gold
                </span>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#FFFFFF' }}>
                <div style={{ fontWeight: 700, color: '#090E17', fontSize: '0.95rem' }}>Sovereign Gold</div>
                <div style={{ color: '#64748B', fontSize: '0.8rem', fontFamily: 'monospace', marginTop: '0.2rem' }}>#D4AF37 / #C5A059</div>
                <div style={{ color: '#475569', fontSize: '0.78rem', marginTop: '0.5rem', lineHeight: 1.4 }}>
                  True metallic sheen replacing current orange-amber.
                </div>
              </div>
            </div>

            {/* Swatch 2: Midnight Obsidian */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div
                style={{
                  height: '110px',
                  backgroundColor: '#090E17',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontWeight: 800, color: '#DFBA53', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Midnight Obsidian
                </span>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#FFFFFF' }}>
                <div style={{ fontWeight: 700, color: '#090E17', fontSize: '0.95rem' }}>Deep Velvet Dark</div>
                <div style={{ color: '#64748B', fontSize: '0.8rem', fontFamily: 'monospace', marginTop: '0.2rem' }}>#090E17</div>
                <div style={{ color: '#475569', fontSize: '0.78rem', marginTop: '0.5rem', lineHeight: 1.4 }}>
                  Creates dramatic high-contrast royal authority.
                </div>
              </div>
            </div>

            {/* Swatch 3: Warm Alabaster Canvas */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div
                style={{
                  height: '110px',
                  backgroundColor: '#FAF8F5',
                  borderBottom: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontWeight: 800, color: '#090E17', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Warm Alabaster
                </span>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#FFFFFF' }}>
                <div style={{ fontWeight: 700, color: '#090E17', fontSize: '0.95rem' }}>Ivory Parchment</div>
                <div style={{ color: '#64748B', fontSize: '0.8rem', fontFamily: 'monospace', marginTop: '0.2rem' }}>#FAF8F5</div>
                <div style={{ color: '#475569', fontSize: '0.78rem', marginTop: '0.5rem', lineHeight: 1.4 }}>
                  Warm background replacing sterile cold hospital-white.
                </div>
              </div>
            </div>

            {/* Swatch 4: Imperial Navy */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div
                style={{
                  height: '110px',
                  backgroundColor: '#0C1829',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontWeight: 800, color: '#93C5FD', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Imperial Sapphire
                </span>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#FFFFFF' }}>
                <div style={{ fontWeight: 700, color: '#090E17', fontSize: '0.95rem' }}>Prussian Blue</div>
                <div style={{ color: '#64748B', fontSize: '0.8rem', fontFamily: 'monospace', marginTop: '0.2rem' }}>#0C1829</div>
                <div style={{ color: '#475569', fontSize: '0.78rem', marginTop: '0.5rem', lineHeight: 1.4 }}>
                  Institution builder and governance credibility.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: SIDE-BY-SIDE CARD COMPARISON */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          
          {/* PROPOSED ROYAL CARD */}
          <div
            style={{
              background: 'linear-gradient(180deg, #0F172A 0%, #090E17 100%)',
              borderRadius: '20px',
              padding: '2.25rem',
              border: '1.5px solid rgba(212, 175, 55, 0.45)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'rgba(212, 175, 55, 0.15)',
                  color: '#DFBA53',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                <Sparkles style={{ width: '13px', height: '13px' }} />
                Proposed Royal Card
              </span>
              <span style={{ color: '#94A3B8', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                CINZEL + 24K GOLD
              </span>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'Cinzel, Georgia, serif',
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                  lineHeight: 1.3,
                }}
              >
                The Chancellor’s Royal Platform
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '0.92rem', marginTop: '0.65rem', lineHeight: 1.6 }}>
                Featuring genuine metallic 24K gold foil gradients, deep velvet midnight card canvas, and Roman classical typography for state-level prestige.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.5rem', flexWrap: 'wrap' }}>
              {/* Metallic 24K Button */}
              <button
                style={{
                  background: 'linear-gradient(135deg, #FBF5B7 0%, #DFBA53 30%, #C5A059 70%, #9E7B35 100%)',
                  color: '#090E17',
                  border: '1px solid #FFE58F',
                  padding: '0.75rem 1.65rem',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(212, 175, 55, 0.35)',
                }}
              >
                Royal Metallic Button
                <ArrowRight style={{ width: '15px', height: '15px' }} />
              </button>

              <button
                style={{
                  background: 'transparent',
                  color: '#DFBA53',
                  border: '1px solid rgba(212, 175, 55, 0.35)',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                }}
              >
                Outline Button
              </button>
            </div>
          </div>

          {/* CURRENT CARD */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.25rem',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: '#ECFDF5',
                  color: '#065F46',
                  border: '1px solid #A7F3D0',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                <CheckCircle2 style={{ width: '13px', height: '13px' }} />
                Current Card (Live)
              </span>
              <span style={{ color: '#94A3B8', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                SANS-SERIF + ORANGE
              </span>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                }}
              >
                Current Standard Card
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', marginTop: '0.65rem', lineHeight: 1.6 }}>
                Uses standard tech startup sans-serif font, white background, gray border, and saffron-orange button. Clean, but lacks imperial grandeur.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.5rem', flexWrap: 'wrap' }}>
              {/* Current Orange Button */}
              <button
                style={{
                  background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '0.75rem 1.65rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(217, 119, 6, 0.25)',
                }}
              >
                Current Orange Button
                <ArrowRight style={{ width: '15px', height: '15px' }} />
              </button>

              <button
                style={{
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1px solid #CBD5E1',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                }}
              >
                Outline Button
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 3: WARM IVORY ROYAL PARCHMENT */}
        <div
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FBF9F5 100%)',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 8px 25px rgba(197, 160, 89, 0.08)',
          }}
        >
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B45309', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <Award style={{ width: '16px', height: '16px' }} />
              Light Luxury Parchment Style
            </div>

            <h3
              style={{
                fontFamily: 'Cinzel, Georgia, serif',
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#090E17',
              }}
            >
              The Chancellor’s Living Creed
            </h3>

            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
              “Education is not the commercial preparation for a career; it is the sacred alchemy that turns human intellect into sovereign wisdom and compassionate service to humanity.”
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1.5rem',
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #F1F5F9',
              }}
            >
              <div>
                <div style={{ fontFamily: 'Cinzel, Georgia, serif', fontSize: '2.25rem', fontWeight: 800, color: '#B45309' }}>101+</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Institutions</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Cinzel, Georgia, serif', fontSize: '2.25rem', fontWeight: 800, color: '#B45309' }}>16+</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Published Books</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Cinzel, Georgia, serif', fontSize: '2.25rem', fontWeight: 800, color: '#B45309' }}>540+</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Documented Honours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link
            href="/en"
            style={{
              color: '#090E17',
              fontWeight: 700,
              fontSize: '0.92rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            ← Back to Official Platform Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
