'use client';

import React, { useState } from 'react';
import { Brain, Cpu, Zap, Sparkles, ShieldCheck, Activity, ChevronRight } from 'lucide-react';
import { Language } from '@/types';

interface IntelligenceNode {
  id: string;
  number: string;
  title: { en: string; ta: string };
  category: 'Classical Gardner' | 'Arawindhan Creation' | 'Suprasapien Synthesis';
  hemisphere: 'Left Brain' | 'Right Brain' | 'Whole-Brain Interhemispheric';
  description: { en: string; ta: string };
  exercise: { en: string; ta: string };
  metric: string;
}

const INTELLIGENCE_NODES: IntelligenceNode[] = [
  {
    id: 'int-1',
    number: '01',
    title: { en: 'Linguistic-Verbal', ta: 'மொழிசார் நுண்ணறிவு' },
    category: 'Classical Gardner',
    hemisphere: 'Left Brain',
    description: {
      en: 'Mastery of semantic nuance, public oratory, multilingual literacy, and vocabulary synthesis.',
      ta: 'மொழி ஆளுமை, மேடைப் பேச்சு, பன்மொழிப் புலமை மற்றும் சொல்வளத் திறன்.',
    },
    exercise: { en: 'Crazy Professor Reading & Sequence Story Boards', ta: 'கிரேஸி புரொபசர் வாசிப்பு & கதை வரிசைப் பலகைகள்' },
    metric: '10x Reading Speed',
  },
  {
    id: 'int-2',
    number: '02',
    title: { en: 'Logical-Mathematical', ta: 'தருக்க-கணித நுண்ணறிவு' },
    category: 'Classical Gardner',
    hemisphere: 'Left Brain',
    description: {
      en: 'Deductive reasoning, pattern recognition, mental computation, and algorithmic intuition.',
      ta: 'பகுத்தறிவு சிந்தனை, கணித முறைமை மற்றும் விரைவுக் கணக்கீட்டுத் திறன்.',
    },
    exercise: { en: 'Q-Math Experiential Kits & Vedic Quantum Maths', ta: 'Q-மேத் செயல்முறைக் கருவிகள் & வேத கணித உத்திகள்' },
    metric: 'Instant Mental Abacus',
  },
  {
    id: 'int-3',
    number: '03',
    title: { en: 'Spatial-Visual', ta: 'காட்சி-இடம்சார் நுண்ணறிவு' },
    category: 'Classical Gardner',
    hemisphere: 'Right Brain',
    description: {
      en: 'Mental geometric modeling, 3D spatial rotation, photographic memory, and visual architecture.',
      ta: 'முப்பரிமாண உருவகப்படுத்துதல் மற்றும் புகைப்பட நினைவாற்றல்.',
    },
    exercise: { en: 'Blindfolded Rubik’s Cube & Geometry Projection', ta: 'கண்மூடிய ரூபிக்ஸ் கியூப் & வடிவவியல் பயிற்சி' },
    metric: '222 Guinness Records',
  },
  {
    id: 'int-4',
    number: '04',
    title: { en: 'Bodily-Kinesthetic', ta: 'உடல்-இயக்க நுண்ணறிவு' },
    category: 'Classical Gardner',
    hemisphere: 'Right Brain',
    description: {
      en: 'Neuromuscular coordination, agility, physical dexterity, and balance under stress.',
      ta: 'தசை-நரம்பு ஒருங்கிணைப்பு, உடல்திறன் மற்றும் சமநிலை ஆளுமை.',
    },
    exercise: { en: 'Traditional Silambam Martial Arts & Malkhamb Pole', ta: 'பாரம்பரிய சிலம்பம் மற்றும் மல்லக்கம்பம் கலைகள்' },
    metric: 'Whole-Body Neuroplasticity',
  },
  {
    id: 'int-5',
    number: '05',
    title: { en: 'Musical-Rhythmic', ta: 'இசை-லய நுண்ணறிவு' },
    category: 'Classical Gardner',
    hemisphere: 'Right Brain',
    description: {
      en: 'Acoustic pattern discrimination, tempo awareness, sonic harmonics, and auditory focus.',
      ta: 'ஒலி அதிர்வுகள், லய உணர்வு மற்றும் செவிவழி கவனக்குவிப்பு.',
    },
    exercise: { en: 'Sonic Frequency Recitation & Rhythm Synchronization', ta: 'ஒலி அதிர்வு உச்சரிப்பு & லய ஒருங்கிணைப்பு' },
    metric: 'Binaural Harmony',
  },
  {
    id: 'int-6',
    number: '06',
    title: { en: 'Interpersonal', ta: 'சமூக-மனித நுண்ணறிவு' },
    category: 'Classical Gardner',
    hemisphere: 'Whole-Brain Interhemispheric',
    description: {
      en: 'Empathy calibration, collaborative leadership, negotiation, and collective intelligence.',
      ta: 'பச்சாதாபம், தலைமைத்துவ ஆளுமை மற்றும் குழு ஒருங்கிணைப்புத் திறன்.',
    },
    exercise: { en: 'Kids IAS Assembly & Circle Leadership Protocols', ta: 'கிட்ஸ் ஐ.ஏ.எஸ் சட்டமன்றம் & தலைமைத்துவ உரையாடல்கள்' },
    metric: 'High Social EQ',
  },
  {
    id: 'int-7',
    number: '07',
    title: { en: 'Intrapersonal', ta: 'சுய-அக நுண்ணறிவு' },
    category: 'Classical Gardner',
    hemisphere: 'Whole-Brain Interhemispheric',
    description: {
      en: 'Metacognition, self-reflection, emotional regulation, and deep existential grounding.',
      ta: 'சுய விழிப்புணர்வு, மனக் கட்டுப்பாடு மற்றும் உள்முக அமைதி.',
    },
    exercise: { en: 'Golden Smile Meditation & Daily Habitometer Tracking', ta: 'பொன்சிரிப்பு தியானம் & தினசரி பழக்க அளவீட்டு முறை' },
    metric: 'Inner Stillness',
  },
  {
    id: 'int-8',
    number: '08',
    title: { en: 'Naturalistic', ta: 'இயற்கைசார் நுண்ணறிவு' },
    category: 'Classical Gardner',
    hemisphere: 'Right Brain',
    description: {
      en: 'Ecological awareness, botanical intuition, organic food synthesis, and environmental harmony.',
      ta: 'சுற்றுச்சூழல் விழிப்புணர்வு, மூலிகைப் புரிதல் மற்றும் இயற்கை நல்வாழ்வு.',
    },
    exercise: { en: 'Avadhani Herbal Gardens & Natural Diet Regimen', ta: 'அவதானி மூலிகைத் தோட்டங்கள் & இயற்கை உணவு முறை' },
    metric: 'Ecological Quotient',
  },
  {
    id: 'int-9',
    number: '09',
    title: { en: 'Financial Intelligence (FI)', ta: 'நிதி நுண்ணறிவு (FI)' },
    category: 'Arawindhan Creation',
    hemisphere: 'Whole-Brain Interhemispheric',
    description: {
      en: 'Proprietary framework by Dr. Arawindhan: cultivating wealth ethics, value creation, and asset literacy from Grade 1.',
      ta: 'முனைவர் அரவிந்தன் அவர்களின் பிரத்யேகப் படைப்பு: குழந்தைப் பருவத்திலிருந்தே செல்வம், மதிப்பு மற்றும் பொருளாதார அறிவு வளர்த்தல்.',
    },
    exercise: { en: 'Campus Micro-Economy & Entrepreneurship Incubators', ta: 'வளாக சிறு-பொருளாதாரம் & புத்தாக்கத் தொழில் தொடக்கம்' },
    metric: 'Prosperity Ethics',
  },
  {
    id: 'int-10',
    number: '10',
    title: { en: 'Emotional Intelligence (EI)', ta: 'உணர்ச்சி நுண்ணறிவு (EI)' },
    category: 'Arawindhan Creation',
    hemisphere: 'Whole-Brain Interhemispheric',
    description: {
      en: 'Proprietary framework by Dr. Arawindhan: transforming impulse into intuition, resilience under failure, and compassionate power.',
      ta: 'முனைவர் அரவிந்தன் அவர்களின் பிரத்யேகப் படைப்பு: உணர்ச்சிகளை அறிவாற்றலாக மாற்றி, தோல்விகளை வெற்றியாக்கும் மன உறுதி.',
    },
    exercise: { en: 'WOW Supplements & Emotional Balance Journaling', ta: 'WOW துணைப் பயிற்சிகள் & உணர்ச்சி சமநிலை பதிவேடு' },
    metric: 'Emotional Mastery',
  },
  {
    id: 'int-quantum',
    number: '11',
    title: { en: 'Quantum Avadhana Synthesis', ta: 'குவாண்டம் அவதான ஒருமைப்பாடு' },
    category: 'Suprasapien Synthesis',
    hemisphere: 'Whole-Brain Interhemispheric',
    description: {
      en: 'The pinnacle synthesis: HI (Human Intelligence) + AI (Artificial Intelligence) = The Suprasapien learner operating in 10 simultaneous dimensions.',
      ta: 'உச்சநிலை முழுமை: மனித நுண்ணறிவு + செயற்கை நுண்ணறிவு = ஒரே நேரத்தில் 10 பரிமாணங்களில் இயங்கும் "சுப்ராசேபியன்" ஆளுமை.',
    },
    exercise: { en: 'Dasavadhani Multi-Tasking Protocol (10 Simultaneous Cognitive Streams)', ta: 'தசாவதானி ஒரே நேரத்தில் 10 அறிவுச் சவால்களை எதிர்கொள்ளும் கலை' },
    metric: 'Suprasapien State',
  },
];

interface QuantumMatrixProps {
  lang: Language;
}

export const QuantumMatrix: React.FC<QuantumMatrixProps> = ({ lang }) => {
  const [activeNode, setActiveNode] = useState<IntelligenceNode>(INTELLIGENCE_NODES[10]);
  const [filterMode, setFilterMode] = useState<'ALL' | 'CREATIONS' | 'SYNTHESIS'>('ALL');

  const filteredNodes = INTELLIGENCE_NODES.filter((node) => {
    if (filterMode === 'CREATIONS') return node.category === 'Arawindhan Creation';
    if (filterMode === 'SYNTHESIS') return node.category === 'Suprasapien Synthesis';
    return true;
  });

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)',
        border: '1.5px solid #FDE68A',
        borderRadius: '24px',
        padding: '2.5rem',
        boxShadow: '0 20px 45px -15px rgba(217, 119, 6, 0.12), 0 0 0 1px rgba(253, 230, 138, 0.6)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Futuristic Background Watermark / Grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(253, 230, 138, 0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header HUD Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: '#FFFBEB', border: '1px solid #FDE68A', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
            <Activity size={13} color="#D97706" />
            <span>FUTURISTIC PEDAGOGICAL HUD • INTERACTIVE MATRIX</span>
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
              fontWeight: 800,
              color: '#0F172A',
              margin: 0,
            }}
          >
            {lang === 'ta' ? 'தசாவதானி குவாண்டம் நுண்ணறிவு கட்டமைப்பு' : 'The Dasavadani Quantum Intelligence Matrix'}
          </h3>
          <p style={{ margin: '0.35rem 0 0 0', color: '#64748B', fontSize: '0.9rem' }}>
            {lang === 'ta'
              ? 'கார்ட்னரின் 8 நுண்ணறிவுகளுடன் முனைவர் அரவிந்தன் சேர்த்த நிதி & உணர்ச்சி நுண்ணறிவு மற்றும் குவாண்டம் ஒருங்கிணைப்பு.'
              : 'Howard Gardner’s 8 + Dr. Arawindhan’s Financial & Emotional Intelligences + Quantum Suprasapien Synthesis.'}
          </p>
        </div>

        {/* Filter Mode Controls */}
        <div style={{ display: 'flex', gap: '0.4rem', background: '#F1F5F9', padding: '0.3rem', borderRadius: '12px' }}>
          {[
            { id: 'ALL', label: { en: 'All 11 Nodes', ta: 'அனைத்து 11 கூறுகள்' } },
            { id: 'CREATIONS', label: { en: 'Arawindhan Creations (FI & EI)', ta: 'அரவிந்தன் புத்தாக்கங்கள்' } },
            { id: 'SYNTHESIS', label: { en: 'Quantum Synthesis', ta: 'குவாண்டம் ஒருமை' } },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setFilterMode(mode.id as any)}
              style={{
                background: filterMode === mode.id ? '#FFFFFF' : 'transparent',
                color: filterMode === mode.id ? '#0F172A' : '#64748B',
                border: 'none',
                borderRadius: '8px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: filterMode === mode.id ? 700 : 500,
                cursor: 'pointer',
                boxShadow: filterMode === mode.id ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              {mode.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Grid & Detail Stage */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
        }}
      >
        {/* Left: Node Selector Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '0.65rem',
          }}
        >
          {filteredNodes.map((node) => {
            const isSelected = activeNode.id === node.id;
            const isSpecial = node.category !== 'Classical Gardner';
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                style={{
                  background: isSelected
                    ? 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)'
                    : '#FFFFFF',
                  border: isSelected ? '2px solid #D97706' : '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '0.85rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: isSelected ? '0 4px 15px rgba(217, 119, 6, 0.2)' : '0 1px 3px rgba(0,0,0,0.02)',
                  transition: 'all 0.18s ease',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 800, color: isSelected ? '#B45309' : '#94A3B8', fontFamily: 'monospace' }}>
                    {node.number}
                  </span>
                  {isSpecial && (
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D97706' }} />
                  )}
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.25 }}>
                  {node.title[lang]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Active Node Futuristic HUD Display */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '18px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 8px 25px -5px rgba(15, 23, 42, 0.05)',
            position: 'relative',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {activeNode.category} • {activeNode.hemisphere}
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    margin: '0.2rem 0',
                  }}
                >
                  {activeNode.title[lang]}
                </h4>
              </div>
              <div
                style={{
                  background: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  color: '#065F46',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Zap size={13} color="#059669" />
                <span>{activeNode.metric}</span>
              </div>
            </div>

            <p style={{ color: '#334155', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              {activeNode.description[lang]}
            </p>

            <div style={{ background: '#FAF8F5', border: '1px solid #F1E5D5', borderRadius: '12px', padding: '1.15rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.72rem', color: '#92400E', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                {lang === 'ta' ? 'செயல்முறை பயிற்சி உத்தி' : 'ACHARIYA PEDAGOGICAL PROTOCOL'}
              </div>
              <div style={{ fontSize: '0.92rem', color: '#0F172A', fontWeight: 600 }}>
                {activeNode.exercise[lang]}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
            <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={14} color="#059669" />
              <span>{lang === 'ta' ? 'சான்று எண்: CLM-014 (நடைமுறைப்படுத்தப்பட்டது)' : 'Evidentiary ID: CLM-014 (Active In All Campuses)'}</span>
            </span>

            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#B45309', fontFamily: 'monospace' }}>
              NODE {activeNode.number} OF 11
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
