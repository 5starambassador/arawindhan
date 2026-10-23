import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, ShieldCheck, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { educationalExhibits } from '@/data/education';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { Language } from '@/types';

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ['en', 'ta']) {
    for (const ex of educationalExhibits) {
      params.push({ lang, slug: ex.slug });
    }
  }
  return params;
}

export default async function ExhibitDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';
  const exhibit = educationalExhibits.find((e) => e.slug === resolved.slug);

  if (!exhibit) {
    notFound();
  }

  return (
    <div className="section-py">
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            href={`/${lang}/education`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--gold-glow)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 700,
            }}
          >
            <ArrowLeft size={16} />
            <span>{lang === 'ta' ? 'அனைத்து கல்வி அமைப்புகளுக்கும் திரும்புக' : 'Back to All Educational Systems'}</span>
          </Link>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
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

          <h1 className="font-serif heading-gold" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.5rem', fontWeight: 800 }}>
            {exhibit.title[lang]}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 600 }}>
            {exhibit.subtitle[lang]}
          </p>
        </div>

        {/* 10-Point Pedagogical Anatomy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* 1. What It Is */}
          <div className="card-premium">
            <h3 className="font-serif heading-white" style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 800 }}>
              {lang === 'ta' ? '1. அமைப்பின் அறிமுகம் (What It Is)' : '1. Overview & Definition'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
              {exhibit.whatItIs[lang]}
            </p>
          </div>

          {/* 2. Who Developed It */}
          <div className="card-premium">
            <h3 className="font-serif heading-white" style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 800 }}>
              {lang === 'ta' ? '2. வடிவமைப்பாளர் & தலைமை (Origin & Leadership)' : '2. Conceptualization & Leadership'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75 }}>
              {lang === 'ta'
                ? 'முனைவர் ஜே. அரவிந்தன் ஜி அவர்களால் 2000-ஆம் ஆண்டு முதல் தனிப்பட்ட முறையில் வடிவமைக்கப்பட்டு, ஆச்சாரியா சிறப்பு மேன்மை மையம் (Centre of Excellence) மற்றும் ஆசிரியப் பயிற்சி அகாடமிகள் மூலம் செறிவூட்டப்பட்டது.'
                : 'Conceived and designed by Dr. J. Arawindhan Ji since 2000; codified, tested, and scaled across campuses through the ACHARIYA Centre of Excellence (CoE) and faculty development academies.'}
            </p>
          </div>

          {/* 3 & 4. How It Works & Core Principles */}
          <div className="card-premium">
            <h3 className="font-serif heading-white" style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 800 }}>
              {lang === 'ta' ? '3 & 4. செயல்பாட்டு முறை & அடிப்படைக் கொள்கைகள்' : '3 & 4. Operational Mechanics & Core Principles'}
            </h3>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              {exhibit.howItWorks[lang].map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* 5. Implementation Settings */}
          <div className="card-premium">
            <h3 className="font-serif heading-white" style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 800 }}>
              {lang === 'ta' ? '5. செயல்படுத்தப்படும் களங்கள் (Implementation Settings)' : '5. Implementation & Target Learners'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75 }}>
              {lang === 'ta'
                ? 'ஆச்சாரியாவின் சொந்த வளாகங்கள் (71 வளாகங்கள்), கூட்டாண்மைப் பள்ளிகள் மற்றும் ஹெகுரு மையங்களில் மழலையர் பருவம் முதல் 12-ஆம் வகுப்பு வரையிலான மாணவர்களுக்கு தினசரி கால அட்டவணையில் முறையாக இணைக்கப்பட்டுள்ளது.'
                : 'Implemented across 101 ACHARIYA-affiliated schools, 18 higher education colleges, and 9 Heguru centres, catering to age groups spanning toddlerhood (6 months) through Grade 12.'}
            </p>
          </div>

          {/* 6. Evidence, Reach & Records */}
          <div className="card-premium" style={{ borderLeft: '4px solid #059669', background: '#ECFDF5', border: '1px solid #A7F3D0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', color: '#065F46', fontWeight: 800 }}>
                {lang === 'ta' ? '6. ஆவணப்படுத்தப்பட்ட சாதனைகள் & சான்றுகள்' : '6. Documented Evidence & Reach'}
              </h3>
              <ShieldCheck size={20} color="#059669" />
            </div>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: '#065F46', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 500 }}>
              {exhibit.evidenceAndReach[lang].map((ev, idx) => (
                <li key={idx}>{ev}</li>
              ))}
            </ul>
          </div>

          {/* 7. Verification Status & Research Notes */}
          <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 'var(--radius-sm)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--gold-glow)' }}>
              <AlertCircle size={18} />
              <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>
                {lang === 'ta' ? 'ஆய்வு நெறிமுறை & வரம்புகள் (Verification Notes)' : 'Factual Integrity & Scope Notes'}
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>
              {lang === 'ta'
                ? 'இத்தகவல்கள் ஆச்சாரியா சிறப்பு மேன்மை மையம் மற்றும் அதிகாரப்பூர்வ கல்வி அறிக்கைகளில் இருந்து பெறப்பட்டவை. பொதுவெளியில் உரிமை கோரல்களை சரிபார்க்க, பள்ளி வருகை மற்றும் மாணவர் மதிப்பீட்டு ஏடுகள் பயன்படுத்தப்படுகின்றன.'
                : 'Data points for this methodology are sourced directly from the official ACHARIYA portfolio dossier (Collection A) and internal Centre of Excellence SOP documentation. Quantitative claims are tracked under Claim ID ' + exhibit.claimId + '.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
