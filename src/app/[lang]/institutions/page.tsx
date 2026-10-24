'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, School, Factory, Utensils, HeartPulse, Laptop, Palmtree, GraduationCap, ShieldCheck, Filter, Calendar, Users, Award } from 'lucide-react';
import { collegesList, schoolsSummary, enterprisesList, heguruMilestones, trustOverview, officialFoundingChronology } from '@/data/institutions';
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

        {/* Verified Enterprise Architecture Scope Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.98) 100%)',
            border: '1px solid rgba(217, 119, 6, 0.3)',
            boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(217, 119, 6, 0.05)',
            borderRadius: '16px',
            padding: '1.25rem 2rem',
            maxWidth: '1000px',
            margin: '0 auto 2.5rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '300px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-glow)',
                flexShrink: 0,
                boxShadow: '0 4px 10px rgba(15, 23, 42, 0.15)',
              }}
            >
              <Building2 size={20} />
            </div>
            <div>
              <div style={{ color: 'var(--navy-deep)', fontWeight: 800, fontSize: '0.96rem', marginBottom: '0.2rem', letterSpacing: '-0.01em' }}>
                {lang === 'ta' ? 'அதிகாரப்பூர்வ நிறுவன மற்றும் வணிகக் கட்டமைப்பு' : 'Verified Enterprise Architecture & Governance Scope'}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                {lang === 'ta'
                  ? 'அதிகாரப்பூர்வ பதிவேடு: 8 தொழிற்துறைகளில் 61 பதிவுசெய்யப்பட்ட நிறுவனங்கள் • 67+ குழும வர்த்தக மற்றும் வளர்ச்சி முன்முயற்சிகள்.'
                  : 'Official Governance Scope: 61 formally catalogued corporate entities across 8 industry sectors • 67+ total active group commercial initiatives.'}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <ClaimBadge claimId="CLM-002" status="CONFIRMED" language={lang} />
            <ClaimBadge claimId="CLM-003" status="CONFIRMED" language={lang} />
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

        {/* Achariya Educational Public Trust Governance Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFBEB 100%)',
            border: '1.5px solid #FDE68A',
            borderRadius: '16px',
            padding: '1.5rem 2rem',
            maxWidth: '1000px',
            margin: '0 auto 3rem auto',
            boxShadow: '0 4px 15px rgba(217, 119, 6, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Award size={18} color="#D97706" />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {lang === 'ta' ? 'நிறுவனங்களை வழிநடத்தும் மூல அறக்கட்டளை' : 'PROMOTING TRUST & STEWARDSHIP'}
              </span>
            </div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.35rem 0' }}>
              {trustOverview.trustName[lang]} (Est. {trustOverview.established})
            </h4>
            <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 0.85rem 0' }}>
              {lang === 'ta'
                ? `ஆச்சாரியா கல்வி பொது அறக்கட்டளையின் நிறுவன நிர்வாக அறங்காவலராக முனைவர் ஜே. அரவிந்தன் செயல்பட்டு வருகிறார். அறக்கட்டளையின் கீழ் ${trustOverview.totalInstitutions}, ${trustOverview.totalStudents} மற்றும் ${trustOverview.totalEmployees} இயங்கி வருகின்றனர்.`
                : `Achariya World Class Institutions are promoted by ${trustOverview.trustName.en} with ${trustOverview.managingTrustee.en}. The trust oversees ${trustOverview.totalInstitutions}, ${trustOverview.totalStudents}, and ${trustOverview.totalEmployees} across CBSE, ICSE, IGCSE & State Boards.`}
            </p>
            <div style={{ fontSize: '0.84rem', color: '#1E293B', fontStyle: 'italic', background: '#FFFFFF', padding: '0.65rem 1rem', borderRadius: '8px', borderLeft: '3px solid #D97706' }}>
              "{trustOverview.mission[lang]}"
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flexShrink: 0 }}>
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0.4rem 0.85rem', fontSize: '0.82rem', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Users size={14} color="#D97706" />
              <span>{trustOverview.totalEmployees}</span>
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0.4rem 0.85rem', fontSize: '0.82rem', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <GraduationCap size={14} color="#D97706" />
              <span>{trustOverview.totalStudents}</span>
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0.4rem 0.85rem', fontSize: '0.82rem', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <School size={14} color="#D97706" />
              <span>{trustOverview.curriculaAffiliations}</span>
            </div>
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

        {/* TAB 1: 101 SCHOOLS (4 MODELS - ONE PARENT WITH FOUR CHILDREN) */}
        {activeTab === 'schools' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                gap: '1.75rem',
                alignItems: 'stretch',
              }}
            >
              {schoolsSummary.map((summary, idx) => (
                <div
                  key={idx}
                  className="card-premium"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2rem',
                    borderRadius: '18px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                    height: '100%',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                      <h3
                        className="font-serif heading-gold"
                        style={{
                          fontSize: '1.45rem',
                          fontWeight: 800,
                          lineHeight: 1.25,
                          margin: 0,
                          color: '#0F172A',
                        }}
                      >
                        {lang === 'ta' ? summary.tamilModel : summary.model}
                      </h3>
                      <span
                        style={{
                          background: '#ECFDF5',
                          border: '1px solid #A7F3D0',
                          color: '#065F46',
                          fontWeight: 800,
                          fontSize: '0.82rem',
                          padding: '0.3rem 0.75rem',
                          borderRadius: '999px',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                        }}
                      >
                        {summary.count}
                      </span>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      {summary.description[lang]}
                    </p>
                  </div>

                  {/* Regional Footprint Box - Pinned to bottom */}
                  <div
                    style={{
                      background: 'linear-gradient(180deg, #FAF8F5 0%, #FFFBEB 100%)',
                      padding: '1.25rem',
                      borderRadius: '12px',
                      border: '1px solid #F1E5D5',
                      marginTop: 'auto',
                    }}
                  >
                    <div style={{ color: '#B45309', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem' }}>
                      {lang === 'ta' ? 'வளாகங்கள் & மண்டலச் சுவடு:' : 'CAMPUSES & REGIONAL FOOTPRINT:'}
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', color: '#334155', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', margin: 0 }}>
                      {summary.networks.map((net, i) => (
                        <li key={i} style={{ lineHeight: 1.5 }}>{net}</li>
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
          <div className="grid-3" style={{ alignItems: 'stretch' }}>
            {collegesList.map((col) => (
              <div key={col.id} className="card-premium" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', gap: '0.5rem' }}>
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

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0, marginTop: 'auto' }}>
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

            <div className="grid-3" style={{ alignItems: 'stretch' }}>
              {filteredEnterprises.map((ent) => (
                <div key={ent.id} className="card-premium" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', gap: '0.5rem' }}>
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

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.6, margin: 0, marginTop: 'auto' }}>
                    {ent.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Official Institutional Founding Chronology (2000–2011) */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '4rem auto 0 auto',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '20px',
            padding: '2.25rem',
            boxShadow: '0 8px 30px -5px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: '#FFFBEB', border: '1px solid #FDE68A', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                <Calendar size={13} color="#D97706" />
                <span>{lang === 'ta' ? 'அதிகாரப்பூர்வ தொடக்க கால வரலாற்றுப் பதிவேடு' : 'OFFICIAL FOUNDING CHRONOLOGY (2000–2011)'}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                {lang === 'ta' ? 'ஆச்சாரியா உலகத்தரம் வாய்ந்த கல்வி நிறுவனங்கள்' : 'Achariya Group of World Class Educational Institutions'}
              </h3>
            </div>
            <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#065F46', padding: '0.35rem 0.85rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800 }}>
              {lang === 'ta' ? 'மொத்த பணியாளர்கள்: 1,100 நபர்கள்' : 'Total Employees: 1,100 Workforce'}
            </div>
          </div>

          <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {lang === 'ta'
              ? 'முனைவர் ஜே. அரவிந்தன் அவர்களின் வழிகாட்டுதலில், 2000-ஆம் ஆண்டு ஆசிரியர் கல்விக் கல்லூரியில் தொடங்கி, பொறியியல் கல்லூரி, கலை & அறிவியல் கல்லூரி, மேலாண்மை மற்றும் சென்னை, கோவை வளாகங்கள் வரை தொடர்ச்சியாக நிறுவப்பட்ட முதன்மை நிறுவனங்களின் அதிகாரப்பூர்வ பதிவேடு.'
              : 'The documented historical chronology of Achariya institutions established under the visionary mentorship of Dr. J. Arawindhan, scaling from pioneering teacher education in 2000 into multi-campus higher education colleges and metropolitan school networks.'}
          </p>

          {/* Chronological Table / List */}
          <div
            style={{
              overflowX: 'auto',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#0F172A', fontWeight: 800 }}>
                  <th style={{ padding: '0.85rem 1.25rem', width: '60px' }}>#</th>
                  <th style={{ padding: '0.85rem 1.25rem' }}>{lang === 'ta' ? 'நிறுவனத்தின் பெயர்' : 'Name of the Institution'}</th>
                  <th style={{ padding: '0.85rem 1.25rem', width: '160px' }}>{lang === 'ta' ? 'தொடங்கப்பட்ட ஆண்டு' : 'Established in'}</th>
                  <th style={{ padding: '0.85rem 1.25rem', width: '200px' }}>{lang === 'ta' ? 'கல்விப் பிரிவு' : 'Category'}</th>
                </tr>
              </thead>
              <tbody>
                {officialFoundingChronology.map((item, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: idx === officialFoundingChronology.length - 1 ? 'none' : '1px solid #F1F5F9',
                      background: idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA',
                    }}
                  >
                    <td style={{ padding: '0.8rem 1.25rem', color: '#64748B', fontWeight: 700, fontFamily: 'monospace' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </td>
                    <td style={{ padding: '0.8rem 1.25rem', color: '#0F172A', fontWeight: 700 }}>
                      {item.institution}
                    </td>
                    <td style={{ padding: '0.8rem 1.25rem', color: '#B45309', fontWeight: 800, fontFamily: 'monospace' }}>
                      {item.established}
                    </td>
                    <td style={{ padding: '0.8rem 1.25rem', color: '#475569' }}>
                      <span style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '0.2rem 0.55rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                        {item.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              marginTop: '1.25rem',
              padding: '1rem 1.25rem',
              background: '#F8FAFC',
              borderRadius: '10px',
              border: '1px solid #E2E8F0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem',
              fontSize: '0.84rem',
              color: '#475569',
            }}
          >
            <div>
              <strong>{lang === 'ta' ? 'நிறுவனர் & முதன்மை வழிகாட்டி:' : 'Founder & Chief Mentor:'}</strong> Dr. J. Arawindhan | <strong>{lang === 'ta' ? 'அறக்கட்டளை:' : 'Promoted by:'}</strong> Achariya Educational Public Trust
            </div>
            <div style={{ fontWeight: 800, color: '#D97706' }}>
              {lang === 'ta' ? 'மொத்த பணியாளர்கள்: ~1200 | மாணவர்கள்: 12000+' : 'Total Workforce: ~1,200 Employees | Students: 12,000+'}
            </div>
          </div>
        </div>

        {/* Heguru India National Milestones Showcase */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '3.5rem auto 0 auto',
            background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFBEB 100%)',
            border: '1.5px solid #FDE68A',
            borderRadius: '20px',
            padding: '2rem 2.5rem',
            boxShadow: '0 10px 30px -10px rgba(217, 119, 6, 0.08)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#B45309', background: '#FEF3C7', border: '1px solid #FDE68A', padding: '0.2rem 0.65rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {lang === 'ta' ? 'சர்வதேச வலதுமூளை கூட்டாண்மை' : 'JAPANESE RIGHT-BRAIN ALLIANCE • HEGURU INDIA'}
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', margin: '0.4rem 0 0 0' }}>
                {lang === 'ta' ? 'ஹெகுரு இந்தியா தேசிய மைல்கற்கள் (2023–2025)' : 'Heguru India National Milestones (2023–2025)'}
              </h3>
            </div>
            <ClaimBadge claimId="CLM-005" status="CONFIRMED" language={lang} />
          </div>

          <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {lang === 'ta'
              ? 'ஜப்பானின் டோக்கியோவைச் சேர்ந்த ருயிகோ மற்றும் ஹிரோதடா ஹென்மி அவர்களின் 30 ஆண்டு கால நரம்பியல் ஆய்வுகளை, முனைவர் ஜே. அரவிந்தன் தேசிய முதன்மை உரிமத்தின் (National Master Franchise) கீழ் இந்தியா முழுவதும் 10+ உயர் மையங்களாக விரிவுபடுத்தியுள்ளார்.'
              : 'Partnering with founders Ruiko & Hirotada Henmi (Heguru Japan), Dr. J. Arawindhan serves as the National Master Franchise Holder & Managing Director, establishing 10+ state-of-the-art right-brain neuroplasticity centres across India.'}
          </p>

          {/* Bespoke Heguru Right-Brain Learning Architecture Showcase */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '2rem',
              border: '2px solid #FDE68A',
              boxShadow: '0 12px 30px -8px rgba(217, 119, 6, 0.2)',
              maxHeight: '360px',
            }}
          >
            <img
              src="/images/heguru_center.jpg"
              alt="Heguru India Right-Brain Neuroplasticity Learning Environment"
              style={{
                width: '100%',
                height: '360px',
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
                padding: '1.25rem 1.75rem',
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.2) 65%, transparent 100%)',
                color: '#FFFFFF',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FEF3C7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {lang === 'ta' ? 'ஹெகுரு நரம்பியல் ஆய்வுக் கூடம் • ஆரம்பக்கால மூளைப் பயிற்சி' : 'Heguru Neuroplasticity Architecture • Early Childhood Right-Brain Acceleration'}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#E2E8F0', marginTop: '0.2rem' }}>
                {lang === 'ta'
                  ? 'ஜப்பானிய மரபுசார் அமைப்பில் அமைக்கப்பட்ட உயர் தர மூளைத்திறன் மேம்பாட்டு மையம்.'
                  : '10+ centres across India equipping infants and young learners with photographic memory, speed computation, and emotional calm.'}
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.25rem',
              alignItems: 'stretch',
            }}
          >
            {heguruMilestones.map((milestone) => (
              <div
                key={milestone.year}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '1.35rem',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    marginBottom: '0.85rem',
                    minHeight: '2.65rem',
                  }}
                >
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px',
                      fontFamily: 'monospace',
                      flexShrink: 0,
                      marginTop: '0.1rem',
                      boxShadow: '0 2px 6px rgba(217, 119, 6, 0.25)',
                    }}
                  >
                    {milestone.year}
                  </span>
                  <h4
                    style={{
                      fontSize: '0.94rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      margin: 0,
                      lineHeight: 1.35,
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {milestone.cities[lang]}
                  </h4>
                </div>
                <p
                  style={{
                    color: '#475569',
                    fontSize: '0.86rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {milestone.details[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
