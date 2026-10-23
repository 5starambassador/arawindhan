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
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Heguru 9 Early Childhood Centres</div>
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
