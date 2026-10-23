'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, School, Factory, Utensils, HeartPulse, Laptop, Palmtree, GraduationCap, ShieldCheck, Filter } from 'lucide-react';
import { collegesList, schoolsSummary, enterprisesList } from '@/data/institutions';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { Language } from '@/types';

export default function InstitutionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const [resolvedLang, setResolvedLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<'colleges' | 'schools' | 'enterprises'>('schools');
  const [selectedSector, setSelectedSector] = useState<string>('All');

  React.useEffect(() => {
    params.then((p) => {
      setResolvedLang(p.lang === 'ta' ? 'ta' : 'en');
    });
  }, [params]);

  const lang = resolvedLang;

  const sectors = [
    'All',
    'Enterprises & Food',
    'Industry',
    'Recreation',
    'Suprasapien Academies',
    'Technology & Media',
    'Wellness & Healthcare',
  ];

  const filteredEnterprises = selectedSector === 'All'
    ? enterprisesList
    : enterprisesList.filter((e) => e.sector === selectedSector);

  return (
    <div className="section-py">
      <div className="container">
        <SectionHeader
          badge={lang === 'ta' ? 'தொழில்முனைவோரின் சாதனைகள்' : 'COLLECTION B: ENTERPRISES & INSTITUTIONS'}
          title={lang === 'ta' ? 'ஒரு தாய், நான்கு குழந்தைகள்: 18 கல்லூரிகள், 101 பள்ளிகள், 61+ நிறுவனங்கள்' : 'One Parent, Four Children: 18 Colleges, 101 Schools, 61+ Companies'}
          subtitle={lang === 'ta' ? 'தமிழ்நாடு, புதுச்சேரி, கேரளா மற்றும் ஆந்திராவில் விரிந்துள்ள பிரம்மாண்டமான கல்வி மற்றும் தொழில் கட்டமைப்பு.' : 'An educational and commercial network grown over 25 years through four proven expansion models.'}
        />

        {/* Dual Sourced Note Box */}
        <div
          style={{
            background: '#FFFBEB',
            border: '1px solid #FDE68A',
            borderRadius: 'var(--radius-sm)',
            padding: '1.25rem 1.75rem',
            maxWidth: '1000px',
            margin: '0 auto 2.5rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '0.92rem', marginBottom: '0.25rem' }}>
              {lang === 'ta' ? 'ஆவண சரிபார்ப்பு மற்றும் நிறுவனக் குறிப்பு' : 'Dual-Sourced Institutional Record Note'}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.6 }}>
              {lang === 'ta'
                ? 'அதிகாரப்பூர்வ வணிகக் கையேட்டில் 61 நிறுவனங்கள் 8 துறைகளில் பதிவு செய்யப்பட்டுள்ளன; குழுமத்தின் விரிவான தளத்தில் 67+ நிறுவனங்கள் இயங்குகின்றன.'
                : 'Formally catalogued directory enumerates 61 entities across 8 industry sectors; broader portfolio notes 67+ active group commercial initiatives.'}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <ClaimBadge claimId="CLM-002" status="SOURCE_CLAIM" language={lang} />
            <ClaimBadge claimId="CLM-003" status="CONFLICTING" language={lang} />
          </div>
        </div>

        {/* Architectural Campus Showcase Card */}
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '3rem',
            border: '2px solid #E2E8F0',
            boxShadow: '0 15px 35px -10px rgba(15, 23, 42, 0.12)',
            height: '360px',
          }}
        >
          <img
            src="/images/institutions/achariya_campus.jpg"
            alt="Achariya World Class Education Puducherry Central Campus"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '2rem 2.5rem',
              color: '#FFFFFF',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(217, 119, 6, 0.9)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, width: 'fit-content', marginBottom: '0.5rem' }}>
              <span>PUDUCHERRY CENTRAL HEADQUARTERS</span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '0.35rem',
              }}
            >
              Achariya World Class Education
            </h3>
            <p style={{ color: '#E2E8F0', fontSize: '0.92rem', maxWidth: '750px', lineHeight: 1.5, margin: 0 }}>
              {lang === 'ta'
                ? 'நவீன சர்வதேச உள்கட்டமைப்புடன் கூடிய ஆச்சாரியா முதன்மை வளாகம். 18 கல்லூரிகள், 101 பள்ளிகள் மற்றும் 14,000-க்கும் மேற்பட்ட மாணவர்களுக்கான வழிகாட்டுதல் மையம்.'
                : 'Central flagship campus in Puducherry — the nerve center uniting 18 higher education colleges, 101 schools, and 61+ enterprises across southern India.'}
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('schools')}
            className={activeTab === 'schools' ? 'btn-gold' : 'btn-outline'}
            style={{ fontSize: '0.92rem', padding: '0.65rem 1.5rem' }}
          >
            <School size={16} />
            <span>{lang === 'ta' ? '101 பள்ளிகள் (4 மாதிரிகள்)' : '101 Schools (4 Models)'}</span>
          </button>
          <button
            onClick={() => setActiveTab('colleges')}
            className={activeTab === 'colleges' ? 'btn-gold' : 'btn-outline'}
            style={{ fontSize: '0.92rem', padding: '0.65rem 1.5rem' }}
          >
            <GraduationCap size={16} />
            <span>{lang === 'ta' ? '18 உயர்கல்விக் கல்லூரிகள்' : '18 Higher Ed Colleges'}</span>
          </button>
          <button
            onClick={() => setActiveTab('enterprises')}
            className={activeTab === 'enterprises' ? 'btn-gold' : 'btn-outline'}
            style={{ fontSize: '0.92rem', padding: '0.65rem 1.5rem' }}
          >
            <Building2 size={16} />
            <span>{lang === 'ta' ? '61+ நிறுவனங்கள் (8 துறைகள்)' : '61+ Enterprises (8 Sectors)'}</span>
          </button>
        </div>

        {/* TAB 1: 101 SCHOOLS (4 MODELS) */}
        {activeTab === 'schools' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="grid-2">
              {schoolsSummary.map((summary, idx) => (
                <div key={idx} className="card-premium">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 className="font-serif heading-gold" style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                      {lang === 'ta' ? summary.tamilModel : summary.model}
                    </h3>
                    <span style={{ color: '#059669', fontWeight: 800, fontSize: '0.85rem' }}>
                      {summary.count}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {summary.description[lang]}
                  </p>

                  <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                    <div style={{ color: 'var(--gold-glow)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      {lang === 'ta' ? 'வளாகங்கள் & கூட்டாண்மைகள்:' : 'Campuses & Regional Footprint:'}
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {summary.networks.map((net, i) => (
                        <li key={i}>{net}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 18 COLLEGES */}
        {activeTab === 'colleges' && (
          <div className="grid-3">
            {collegesList.map((col) => (
              <div key={col.id} className="card-premium">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-glow)', fontWeight: 800, textTransform: 'uppercase' }}>
                    {col.scaleNote}
                  </span>
                  <ClaimBadge claimId="CLM-024" status="CONFIRMED" language={lang} />
                </div>

                <h3 className="font-serif heading-white" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: 1.35, fontWeight: 800 }}>
                  {lang === 'ta' && col.tamilName ? col.tamilName : col.name}
                </h3>

                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '0.85rem', fontWeight: 500 }}>
                  📍 {col.location} • {col.category}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {col.description[lang]}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: 61+ ENTERPRISES (SEARCHABLE / FILTERABLE) */}
        {activeTab === 'enterprises' && (
          <div>
            {/* Sector Filters */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  style={{
                    background: selectedSector === sector ? 'var(--gold-primary)' : '#FFFFFF',
                    color: selectedSector === sector ? '#FFFFFF' : 'var(--text-main)',
                    fontWeight: selectedSector === sector ? 700 : 500,
                    border: '1px solid',
                    borderColor: selectedSector === sector ? 'var(--gold-primary)' : 'var(--border-light)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.4rem 1rem',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'var(--transition)',
                  }}
                >
                  {sector}
                </button>
              ))}
            </div>

            <div className="grid-3">
              {filteredEnterprises.map((ent) => (
                <div key={ent.id} className="card-premium">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-glow)', fontWeight: 800 }}>
                      {ent.sector}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      {ent.category}
                    </span>
                  </div>

                  <h3 className="font-serif heading-gold" style={{ fontSize: '1.18rem', marginBottom: '0.35rem', fontWeight: 800 }}>
                    {ent.name}
                  </h3>

                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                    📍 {ent.location}
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                    {ent.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
