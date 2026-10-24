import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Calculator, CheckCircle, BookOpen, FlaskConical, Award, Sparkles, HeartHandshake, Compass, Globe, Eye, Target } from 'lucide-react';
import { educationalExhibits } from '@/data/education';
import { internationalPartnerSchools, wowAcademyPrograms, competitiveCoachingData } from '@/data/institutions';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { Language } from '@/types';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const lang = resolved.lang === 'ta' ? 'ta' : 'en';

  if (lang === 'ta') {
    return {
      title: 'கல்வித் தத்துவம் & கண்டுபிடிப்புகள் | முனைவர் ஜே. அரவிந்தன் (Arawindhan)',
      description:
        'முனைவர் ஜே. அரவிந்தன் (Arawindhan) அவர்களின் 10 கல்விப் புத்தாக்கங்கள், தசாவதானி பாடத்திட்டம், மற்றும் முழு-மூளை வளர்ச்சி அமைப்புகள்.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta/education',
        languages: {
          en: 'https://www.arawindhan.com/en/education',
          ta: 'https://www.arawindhan.com/ta/education',
          'x-default': 'https://www.arawindhan.com/en/education',
        },
      },
      openGraph: {
        title: 'கல்விப் புத்தாக்கங்கள் | முனைவர் ஜே. அரவிந்தன்',
        description: 'முனைவர் ஜே. அரவிந்தன் அவர்களின் 10 கல்விப் புத்தாக்கங்கள் மற்றும் தசாவதானி கற்பித்தல் முறை.',
        url: 'https://www.arawindhan.com/ta/education',
        siteName: 'Dr. J. Arawindhan Official Platform',
      },
    };
  }

  return {
    title: 'Educational Philosophy & Innovations | Dr. J. Arawindhan — Dasavadani Pedagogy',
    description:
      'Discover Dr. J. Arawindhan (Arawindhan) original educational creations: Dasavadani Pedagogy, Whole-Brain neuro-development, and Multiple Intelligence systems.',
    alternates: {
      canonical: 'https://www.arawindhan.com/en/education',
      languages: {
        en: 'https://www.arawindhan.com/en/education',
        ta: 'https://www.arawindhan.com/ta/education',
        'x-default': 'https://www.arawindhan.com/en/education',
      },
    },
    openGraph: {
      title: 'Educational Innovations | Dr. J. Arawindhan — Dasavadani Pedagogy',
      description:
        'Proprietary curricula, frameworks, and whole-brain learning systems developed by Dr. J. Arawindhan.',
      url: 'https://www.arawindhan.com/en/education',
      siteName: 'Dr. J. Arawindhan Official Platform',
    },
  };
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

        {/* WOW Academy: 5 Signature In-House Programmes & 50+ Methodologies */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '4.5rem auto 0 auto',
            background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFBEB 100%)',
            border: '1.5px solid #FDE68A',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 10px 30px -10px rgba(217, 119, 6, 0.08)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: '#FEF3C7', border: '1px solid #FDE68A', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                <Brain size={13} color="#D97706" />
                <span>{lang === 'ta' ? 'வாவ் அகாடமி: சிறப்பு நரம்பியல் பயிற்சி' : 'WOW ACADEMY • IN-HOUSE COGNITIVE ACCELERATION'}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                {lang === 'ta' ? 'வாவ் ஸ்கூலிங் - மகிழ்ச்சியான கற்றல்: 5 பிரத்யேக திட்டங்கள்' : '“WOW Schooling – Happy Schooling”: Five In-House Programmes'}
              </h3>
            </div>
            <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#065F46', padding: '0.35rem 0.85rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800 }}>
              {lang === 'ta' ? '50+ சிறப்பு கற்பித்தல் முறைகள்' : 'Over 50 Specialized Teaching Methodologies'}
            </div>
          </div>

          <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {lang === 'ta'
              ? 'முனைவர் ஜே. அரவிந்தன் அவர்களின் மூளைக் குழந்தையான "வாவ் ஸ்கூலிங்", ஒவ்வொரு முதன்மைப் பள்ளி வளாகத்திலும் இயங்கும் பிரத்யேக "வாவ் அகாடமி" மூலம் மாணவர்களுக்கு அசாதாரண நரம்பியல், புலனுணர்வு மற்றும் வேகக் கற்றல் திறன்களை வழங்குகிறது.'
              : 'Dr. J. Arawindhan’s flagship pedagogical brainchild, “WOW Schooling – Happy Schooling”, operates through dedicated in-house “WOW Academies” across main campuses, delivering enriched cognitive, sensory, and accelerated learning programs.'}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.25rem',
            }}
          >
            {wowAcademyPrograms.map((prog) => (
              <div
                key={prog.id}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '1.35rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #D97706, #B45309)' }} />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#D97706', fontFamily: 'monospace' }}>
                      {prog.id}
                    </span>
                    <Sparkles size={14} color="#D97706" />
                  </div>
                  <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.35rem 0' }}>
                    {prog.name[lang]}
                  </h4>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#B45309', marginBottom: '0.75rem', fontStyle: 'italic' }}>
                    {prog.focus[lang]}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                    {prog.description[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inner Silence, Outer Vibrance & Competitive Examination Command Center */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '3.5rem auto 0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
          }}
        >
          {/* Inner Silence, Outer Vibrance Card */}
          <div
            className="card-premium"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
              color: '#FFFFFF',
              border: '1px solid rgba(217, 119, 6, 0.4)',
              borderRadius: '20px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Compass size={18} color="var(--gold-glow)" />
                <span style={{ color: 'var(--gold-glow)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {lang === 'ta' ? 'மாணவர் மனநலம் & கவனக்குவிப்பு' : 'STUDENT MINDFULNESS & EMOTIONAL GROUNDING'}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 0.85rem 0' }}>
                {lang === 'ta' ? 'அமைதியான மனம், ஆற்றல்மிக்க செயல்பாடு' : 'Mindfulness, Focus & Stress-Free Learning'}
              </h3>
              <p style={{ color: '#E2E8F0', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                {lang === 'ta'
                  ? 'ஆச்சாரியாவின் ஒவ்வொரு பள்ளி நாளும் சப்த மகாகிரியா, மூச்சுப் பயிற்சி மற்றும் அமைதியான தியானத்துடன் தொடங்குகிறது. மாணவர்களிடம் தேர்வு பயம் மற்றும் மன அழுத்தத்தைக் களைந்து, ஆழ்ந்த கவனக்குவிப்பு, நினைவாற்றல் மற்றும் தன்னம்பிக்கையை வளர்ப்பதற்கான நடைமுறைக் கல்வி வழிமுறையாக இது வகுப்பறைகளில் ஒருங்கிணைக்கப்பட்டுள்ளது.'
                  : 'ACHARIYA classrooms embed daily mindfulness, Saptha Mahakriya, and quiet focus rituals before academic sessions begin. By cultivating calm emotional grounding, students conquer exam anxiety, unlock deep cognitive endurance, and build the inner poise required for lifelong academic excellence.'}
              </p>
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-glow)', fontSize: '0.82rem', fontWeight: 700 }}>
              <CheckCircle size={15} />
              <span>{lang === 'ta' ? 'தினசரி தியானம் & மன அமைதிப் பயிற்சி' : 'Daily Morning Dhyana & Focus Conditioning'}</span>
            </div>
          </div>

          {/* Competitive Examination Command Center */}
          <div
            className="card-premium"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '20px',
              border: '1.5px solid #E2E8F0',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Target size={18} color="#D97706" />
                <span style={{ color: '#B45309', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {lang === 'ta' ? 'தேசிய அளவிலான நுழைவுத் தேர்வுகள்' : 'NATIONAL COMPETITIVE ENTRANCE WING'}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.85rem 0' }}>
                {competitiveCoachingData.title[lang]}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {competitiveCoachingData.description[lang]}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {competitiveCoachingData.exams.map((ex, eIdx) => (
                  <span
                    key={eIdx}
                    style={{
                      background: '#FFFBEB',
                      border: '1px solid #FDE68A',
                      color: '#B45309',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      fontFamily: 'monospace',
                    }}
                  >
                    🎯 {ex}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9', color: '#047857', fontSize: '0.82rem', fontWeight: 700 }}>
              ★ {lang === 'ta' ? 'ஆண்டுதோறும் முழு வீச்சில் சிறப்புப் பயிற்சி' : 'Conducted in full swing every academic year'}
            </div>
          </div>
        </div>

        {/* Global Partner Schools Alliance */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '3.5rem auto 0 auto',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '20px',
            padding: '2.25rem',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                <Globe size={13} color="#166534" />
                <span>{lang === 'ta' ? 'சர்வதேச கூட்டாண்மைப் பள்ளிகள்' : 'GLOBAL PARTNER SCHOOLS ALLIANCE'}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                {lang === 'ta' ? 'சர்வதேச கல்வி நிறுவனங்களுடனான கூட்டாண்மை' : 'Partnerships with World-Class Institutions Outside India'}
              </h3>
            </div>
            <ClaimBadge claimId="CLM-005" status="CONFIRMED" language={lang} />
          </div>

          <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {lang === 'ta'
              ? 'உண்மையான உலகத்தரம் வாய்ந்த கல்வியை வழங்கும் தொலைநோக்கில், இங்கிலாந்து, பிரான்ஸ், அர்ஜென்டினா மற்றும் நேபாளம் ஆகிய நாடுகளின் முன்னணி பள்ளிகளுடன் ஆச்சாரியா கல்வி நிறுவனம் இருதரப்பு கூட்டாண்மைகளை நிறுவியுள்ளது.'
              : 'True to the spirit of world-class education, Dr. J. Arawindhan has established high-caliber bilateral academic and cultural partnerships with institutions outside India, enabling joint curricular exchanges and global pedagogical benchmarking.'}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1rem',
            }}
          >
            {internationalPartnerSchools.map((school, sIdx) => (
              <div
                key={sIdx}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '1.3rem' }}>{school.flag}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {school.country}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.35rem 0' }}>
                    {school.name}
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.84rem', lineHeight: 1.55, margin: 0 }}>
                    {school.type[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
