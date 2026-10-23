'use client';

import React, { useState } from 'react';
import { Terminal, Sparkles, ShieldCheck, ArrowRight, CornerDownLeft, BookOpen, Layers } from 'lucide-react';
import { Language } from '@/types';

interface QueryPreset {
  id: string;
  query: { en: string; ta: string };
  claimId: string;
  answer: { en: string; ta: string };
  citations: { en: string; ta: string };
  relatedRoute: string;
}

const PRESETS: QueryPreset[] = [
  {
    id: 'q1',
    query: {
      en: 'What is the core pedagogical thesis of Dr. J. Arawindhan Ji?',
      ta: 'முனைவர் அரவிந்தன் அவர்களின் கல்வித் தத்துவத்தின் மையம் என்ன?',
    },
    claimId: 'CLM-016',
    answer: {
      en: '“Brain Activity over Ability: Marks measure recall; Brain Activity is the engine underneath, trainable like a muscle.” Rather than teaching techniques to children who lack cognitive readiness, the Five Arts (Silambam, Malkhamb, Yoga, Chess, Golden Smile Meditation) activate bilateral interhemispheric neural synchrony first.',
      ta: '“திறனை விட மூளையின் செயல்பாடே பிரதானம் (Brain Activity over Ability)”. மதிப்பெண்கள் மனப்பாட நினைவாற்றலை மட்டுமே அளவிடுகின்றன; மூளையின் நரம்பியல் செயல்பாடே உண்மையான இயந்திரம். சிலம்பம், மல்லக்கம்பம், யோகா, சதுரங்கம் மற்றும் தியானம் ஆகிய ஐந்து கலைகள் மூலம் முழு மூளை இயக்கத்தை உருவாக்குகிறது.',
    },
    citations: {
      en: 'Exhibit A3 • Brain Activity System Dossier & World Records Register',
      ta: 'சான்று A3 • மூளை செயல்பாட்டு முறைமை & உலக சாதனைகள் பதிவேடு',
    },
    relatedRoute: '/education/brain-activity-system',
  },
  {
    id: 'q2',
    query: {
      en: 'How did students achieve 222 Guinness & World Records in cognitive challenges?',
      ta: 'மாணவர்கள் 222 கின்னஸ் மற்றும் உலக சாதனைகளை எவ்வாறு நிகழ்த்தினர்?',
    },
    claimId: 'CLM-006',
    answer: {
      en: 'Through systematic neuro-cognitive conditioning: blindfolded Rubik’s cube manipulation, lightning mental arithmetic (UCMAX Q-Math), 3D spatial rotation, and high-frequency memory recall. Over 600 total student records stand verified, with 222 registered in Guinness and global record registers.',
      ta: 'கண்மூடி ரூபிக்ஸ் கியூப் புதிர்களை விடுவித்தல், விரைவுக் கணிதம், முப்பரிமாண காட்சிப்படுத்தல் மற்றும் உயர் நினைவாற்றல் பயிற்சிகள் மூலம். 222 கின்னஸ் மற்றும் சர்வதேச சாதனைகள் உட்பட மொத்தம் 600+ உலக சாதனைகள் அதிகாரப்பூர்வமாக ஆவணப்படுத்தப்பட்டுள்ளன.',
    },
    citations: {
      en: 'Exhibit D3 • Institutional Record Logs & Verification Dossier',
      ta: 'சான்று D3 • ஆச்சாரியா சாதனைகள் கோப்பு & கின்னஸ் சான்றிதழ்கள்',
    },
    relatedRoute: '/recognition',
  },
  {
    id: 'q3',
    query: {
      en: 'What is the "One Parent with Four Children" institutional growth model?',
      ta: '“ஒரு தாய், நான்கு குழந்தைகள்” என்ற கல்வி விரிவாக்க மாதிரி என்றால் என்ன?',
    },
    claimId: 'CLM-025',
    answer: {
      en: 'It represents the 4 sustainable expansion vectors uniting 101 schools across 4 southern states: Owned (flagship campuses), Powered (intellectual property licensing), Partnered (joint infrastructure delivery), and Parented (mentorship adoption of struggling schools).',
      ta: 'தென் மாநிலங்களில் 101 பள்ளிகளை ஒருங்கிணைக்கும் 4 வளர்ச்சி மாதிரிகள்: Owned (சொந்த வளாகங்கள்), Powered (பாடத்திட்ட உரிமம்), Partnered (கூட்டுப் பள்ளிகள்), Parented (வழிகாட்டல் தத்தெடுப்பு).',
    },
    citations: {
      en: 'Exhibit B2 • K-12 Network Directory & State Affiliation Files',
      ta: 'சான்று B2 • பள்ளி கல்வி கட்டமைப்பு ஆவணங்கள்',
    },
    relatedRoute: '/institutions',
  },
  {
    id: 'q4',
    query: {
      en: 'What is the philosophy behind The Shambala Book?',
      ta: 'தி ஷாம்பாலா நூலின் தத்துவ மையம் என்ன?',
    },
    claimId: 'CLM-023',
    answer: {
      en: 'The Shambala Book codifies timeless teachings for global evolution: moving from survival-driven competition to conscious self-actualization. It synthesizes ancient Indian rishi science with modern quantum consciousness, framing human beings as vehicles for universal awakening.',
      ta: 'மனிதகுலப் பரிணாமத்திற்கான காலமற்ற ஞானத்தை இந்நூல் விளக்குகிறது: போட்டிகளைத் தாண்டி உள்முக விழிப்புணர்வை அடைதல். பண்டைத் தமிழ்/பாரத மெய்யறிவை குவாண்டம் அறிவியலோடு இணைத்து, பிரபஞ்ச ஒருமையை உணர்த்துகிறது.',
    },
    citations: {
      en: 'Exhibit D2 • The Shambala Book & Divine Grace Foundation Transcripts',
      ta: 'சான்று D2 • தி ஷாம்பாலா நூல் & டிவைன் கிரேஸ் அறக்கட்டளை ஆவணங்கள்',
    },
    relatedRoute: '/books/shambala-book',
  },
];

interface NeuralTerminalProps {
  lang: Language;
}

export const NeuralTerminal: React.FC<NeuralTerminalProps> = ({ lang }) => {
  const [selectedPreset, setSelectedPreset] = useState<QueryPreset>(PRESETS[0]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const handleSelect = (preset: QueryPreset) => {
    setIsSynthesizing(true);
    setTimeout(() => {
      setSelectedPreset(preset);
      setIsSynthesizing(false);
    }, 180);
  };

  return (
    <div
      style={{
        background: '#0F172A',
        borderRadius: '24px',
        padding: '2.5rem',
        color: '#FFFFFF',
        boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Terminal Glow Lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #D97706 0%, #10B981 50%, #3B82F6 100%)',
        }}
      />

      {/* Terminal Title Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '1.25rem',
          marginBottom: '1.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', color: '#94A3B8', fontFamily: 'monospace' }}>
            <Terminal size={14} color="#D97706" />
            <span>NEURAL KNOWLEDGE TERMINAL • AEO VERIFIED REASONING ENGINE</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', color: '#10B981', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.2rem 0.65rem', borderRadius: '999px', fontFamily: 'monospace' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
          <span>CANONICAL INDEX: WWW.ARAWINDHAN.COM</span>
        </div>
      </div>

      {/* Preset Query Buttons */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
          {lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் முக்கிய கேள்விகள் (தட்டுக)' : 'Select Codified Inquiries (Simulate Answer Engine Query):'}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {PRESETS.map((preset) => {
            const isSelected = selectedPreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelect(preset)}
                style={{
                  background: isSelected ? 'rgba(217, 119, 6, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                  border: isSelected ? '1px solid #F59E0B' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: isSelected ? '#FDE68A' : '#E2E8F0',
                  borderRadius: '10px',
                  padding: '0.5rem 0.85rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  textAlign: 'left',
                }}
              >
                {preset.query[lang]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Output Console Box */}
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '1.75rem',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F59E0B', fontSize: '0.82rem', fontWeight: 700 }}>
            <Sparkles size={15} />
            <span>{selectedPreset.query[lang]}</span>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#10B981', fontFamily: 'monospace', background: 'rgba(16, 185, 129, 0.15)', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
            {selectedPreset.claimId}
          </span>
        </div>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#F8FAFC',
            fontFamily: 'var(--font-serif)',
            marginBottom: '1.5rem',
            opacity: isSynthesizing ? 0.4 : 1,
            transition: 'opacity 0.15s ease',
          }}
        >
          {selectedPreset.answer[lang]}
        </p>

        {/* Citations Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.75rem',
            color: '#94A3B8',
            fontFamily: 'monospace',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '0.85rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={13} color="#D97706" />
            <span>PRIMARY CITATION: {selectedPreset.citations[lang]}</span>
          </div>

          <a
            href={`/${lang}${selectedPreset.relatedRoute}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#F59E0B',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            <span>{lang === 'ta' ? 'முழு ஆவணத்தைப் பார்வையிட' : 'Open Complete Primary Dossier'}</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};
