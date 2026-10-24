import React from 'react';
import Link from 'next/link';
import { Video, Mic, FileText, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { mediaArticles } from '@/data/media';
import { SectionHeader } from '@/components/SectionHeader';
import { Language } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function MediaPage({
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
          badge={lang === 'ta' ? 'சிந்தனைத் தலைமை & உரைகள்' : 'SPEECHES, MEDIA & THOUGHT LEADERSHIP'}
          title={lang === 'ta' ? 'கல்விச் சிந்தனைகள், மாநாட்டு உரைகள் & சர்வதேசத் தடம்' : 'Keynotes, Media Addresses & International Footprint'}
          subtitle={lang === 'ta' ? 'கல்வியாளர்கள், தலைவர்கள் மற்றும் சமூகத்திற்கான முனைவர் அரவிந்தன் அவர்களின் தொலைநோக்குப் பகிர்வுகள்.' : 'Codified frameworks, keynote speeches to school leaders, and perspectives on Artificial Intelligence.'}
        />

        {/* Bespoke Global Keynote Stage Visual Banner */}
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
            src="/images/institutions/human_intelligence_ai_education.webp"
            alt="Dr. J. Arawindhan Keynote Address on Human Intelligence & AI in Education"
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
                KEYNOTE LEADERSHIP
              </span>
              <span style={{ color: '#FEF3C7', fontSize: '0.85rem', fontWeight: 700 }}>
                {lang === 'ta' ? 'மாநாட்டு உரைகள் & சிந்தனைத் தலைமை' : 'Keynote Addresses & Thought Leadership'}
              </span>
            </div>
            <p style={{ color: '#E2E8F0', fontSize: '0.92rem', margin: 0, maxWidth: '800px', lineHeight: 1.6 }}>
              {lang === 'ta'
                ? 'பள்ளி முதல்வர்கள், கல்வியாளர்கள் மற்றும் சர்வதேச தலைவர்கள் மத்தியில் 25 ஆண்டுகளாக நிகழ்த்திய தொலைநோக்கு உரைகள் மற்றும் வழிகாட்டல் பகிர்வுகள்.'
                : 'Addressing over 50,000 educators, school principals, and global delegates across a quarter-century of pioneering educational leadership.'}
            </p>
          </div>
        </div>

        {/* Featured Keynotes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem' }}>
          {mediaArticles.map((article) => (
            <div key={article.id} className="card-premium" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span
                  style={{
                    background: '#FFFBEB',
                    border: '1px solid #FDE68A',
                    color: 'var(--gold-glow)',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    padding: '0.2rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    textTransform: 'uppercase',
                  }}
                >
                  {article.category[lang]} • {article.date}
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 700 }}>
                  ✓ {lang === 'ta' ? 'அதிகாரப்பூர்வ பதிவு' : 'Official Archive'}
                </span>
              </div>

              <h2 className="font-serif heading-gold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1.25rem', lineHeight: 1.3, fontWeight: 800 }}>
                {article.title[lang]}
              </h2>

              <div
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.98rem',
                  lineHeight: 1.85,
                  whiteSpace: 'pre-line',
                  marginBottom: '1.5rem',
                }}
              >
                {article.fullContent[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* International Footprint (Collection D4) */}
        <div
          className="card-premium"
          style={{
            padding: '2.5rem',
            border: '1px solid var(--border-gold)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--gold-glow)' }}>
            <Globe size={22} />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>
              {lang === 'ta' ? 'சர்வதேச தொடர்பு' : 'COLLECTION D4: INTERNATIONAL FOOTPRINT'}
            </span>
          </div>

          <h3 className="font-serif heading-gold" style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 800 }}>
            {lang === 'ta' ? 'அறிவும் திறனும் யந்திரமாக: உலகளாவிய கல்வித் தொடர்புகள்' : 'Skill and Knowledge as a Yantra: Global Collaborations'}
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            {lang === 'ta'
              ? 'ஆச்சாரியாவின் கல்வி மாதிரிகள் இந்தியாவைத் தாண்டி பின்லாந்து, ஐக்கிய இராச்சியம் (பிரிட்டிஷ் கவுன்சில் சர்வதேச பள்ளி விருது), ஜப்பான் (ஹெகுரு ஆரம்பக்கால மூளைப் பயிற்சி), மற்றும் பிரான்ஸ் (இந்தோ-பிரெஞ்சு கல்விப் பரிமாற்றம்) ஆகிய நாடுகளோடு இணைந்து மாணவர்களுக்கு உலகளாவிய வாய்ப்புகளைத் திறந்துவிட்டுள்ளன.'
              : 'The outward reach of the ACHARIYA ecosystem connects learners and methods with the world through strategic engagements across Finland, the United Kingdom (British Council International School Award), Japan (Heguru early-years right-brain methodology), France (Indo-French academic exchanges), and Cambrian College overseas pathways.'}
          </p>

          <div className="grid-4">
            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.25rem' }}>🇫🇮 Finland</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Phenomenon-Based Pedagogical Exploration</div>
            </div>
            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.25rem' }}>🇬🇧 United Kingdom</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>British Council International School Award</div>
            </div>
            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.25rem' }}>🇯🇵 Japan</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Heguru 10+ Early Childhood Centres</div>
            </div>
            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.25rem' }}>🇫🇷 France</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Indo-French Heritage & Exchange Programs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
