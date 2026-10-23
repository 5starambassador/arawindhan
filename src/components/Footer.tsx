'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, BookOpen, ExternalLink, HelpCircle, MapPin, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { Language } from '@/types';
import { uiLabels } from '@/lib/i18n';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const openClaimsModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-claim-modal', { detail: {} }));
    }
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #FAF8F5 0%, #F5F3EF 100%)',
        borderTop: '1px solid #E2E8F0',
        position: 'relative',
        marginTop: '6rem',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      {/* Decorative Gold Accent Bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #D97706 0%, #F59E0B 50%, #B45309 100%)',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Col 1: Platform Identity & Verification Badge */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                  border: '2px solid #FDE68A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-serif)',
                  boxShadow: '0 2px 8px rgba(217, 119, 6, 0.25)',
                }}
              >
                JA
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.2,
                  }}
                >
                  {uiLabels.platformTitle[lang]}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                  ESTD. 2000 • PUDUCHERRY
                </div>
              </div>
            </div>

            <p
              style={{
                color: '#475569',
                fontSize: '0.9rem',
                lineHeight: 1.75,
                marginBottom: '1.25rem',
              }}
            >
              {lang === 'ta'
                ? 'முனைவர் ஜே. அரவிந்தன் அவர்களின் 25 ஆண்டுகால கல்விப் புத்தாக்கங்கள், நிறுவனங்கள், நூல்கள் மற்றும் மெய்யறிவுப் பணிகளை ஆவணப்படுத்தும் அதிகாரப்பூர்வ அறிவுத் தளம். ஒவ்வொரு கூற்றும் முதன்மை ஆதாரங்களோடு சரிபார்க்கப்பட்டது.'
                : 'Official digital knowledge platform documenting the educational systems, enterprises, publications, and philosophies founded and led by Dr. J. Arawindhan. Every statement is cross-referenced with institutional primary documents.'}
            </p>

            {/* Interactive Verification Vault Button */}
            <button
              type="button"
              onClick={openClaimsModal}
              title="Click to open the Master Claims & Evidentiary Inspector"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                background: '#FFFFFF',
                border: '1.5px solid #10B981',
                padding: '0.55rem 0.95rem',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(16, 185, 129, 0.12)',
                transition: 'all 0.2s ease',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(16, 185, 129, 0.12)';
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#ECFDF5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ShieldCheck size={15} color="#059669" />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#065F46', fontWeight: 800, lineHeight: 1.2 }}>
                  {lang === 'ta' ? '30 சான்றுகள் சரிபார்க்கப்பட்டன' : '30 Primary Claims Audited'}
                </div>
                <div style={{ fontSize: '0.68rem', color: '#047857', fontWeight: 500 }}>
                  {lang === 'ta' ? 'ஆதாரங்களை ஆய்வு செய்ய சொடுக்கவும் (⌘K)' : 'Inspect Evidence Vault (⌘K)'}
                </div>
              </div>
            </button>
          </div>

          {/* Col 2: Core Knowledge Sections */}
          <div>
            <div
              style={{
                color: '#92400E',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.15rem',
              }}
            >
              {uiLabels.quickLinks[lang]}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { href: 'biography', en: 'Biography & 10 Avatar Phases', ta: 'வாழ்க்கை வரலாறு & 10 அவதாரங்கள்' },
                { href: 'education', en: 'Dasavadani & 10 Educational Systems', ta: 'தசாவதானி & 10 கல்விக் கூடங்கள்' },
                { href: 'books', en: '7 Published Books & Thought Leadership', ta: '7 நூல்கள் & வெளியீடுகள்' },
                { href: 'institutions', en: '18 Colleges, 101 Schools & 61+ Companies', ta: '18 கல்லூரிகள், 101 பள்ளிகள், 61+ நிறுவனங்கள்' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}/${link.href}`}
                    style={{
                      color: '#334155',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#B45309';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#334155';
                    }}
                  >
                    {link[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Movements, Records & Governance */}
          <div>
            <div
              style={{
                color: '#92400E',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.15rem',
              }}
            >
              {uiLabels.institutionsHeading[lang]}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { href: 'recognition', en: '540+ Accolades & 222 Guinness Records', ta: '540+ விருதுகள் & 222 கின்னஸ் சாதனைகள்' },
                { href: 'inner-journey', en: 'Divya Yogam & Maha Shambala (2012)', ta: 'திவ்ய யோகம் & மகா ஷாம்பாலா (2012 முதல்)' },
                { href: 'governance', en: 'Centre of Excellence (CoE) & 77 Trainings', ta: 'மேன்மை மையம் (CoE) & 77 பயிற்சிகள்' },
                { href: 'media', en: 'AI, Keynotes & Global Footprint', ta: 'செயற்கை நுண்ணறிவு & மாநாட்டு உரைகள்' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}/${link.href}`}
                    style={{
                      color: '#334155',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#B45309';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#334155';
                    }}
                  >
                    {link[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Verification & Headquarters */}
          <div>
            <div
              style={{
                color: '#92400E',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.15rem',
              }}
            >
              {uiLabels.contactHeading[lang]}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Link
                href={`/${lang}/faq`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#334155',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#B45309';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#334155';
                }}
              >
                <HelpCircle size={15} color="#D97706" />
                <span>{lang === 'ta' ? 'தேடுபொறி & AI வினா-விடைகள் (AEO)' : 'Answer Engine & FAQs (AEO)'}</span>
              </Link>

              <Link
                href={`/${lang}/contact`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#334155',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#B45309';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#334155';
                }}
              >
                <CheckCircle2 size={15} color="#059669" />
                <span>{lang === 'ta' ? 'அதிகாரப்பூர்வ தொடர்புகள் & தணிக்கை' : 'Official Profiles & Contacts'}</span>
              </Link>
            </div>

            {/* Physical Headquarters Address Box */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                padding: '0.75rem 1rem',
                fontSize: '0.82rem',
                color: '#475569',
                lineHeight: 1.5,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>
                <MapPin size={13} color="#D97706" />
                <span>Puducherry Central Campus</span>
              </div>
              ACHARIYA World Class Education<br />
              Puducherry 605110, India
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Governance Links */}
        <div
          style={{
            borderTop: '1px solid #E2E8F0',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748B',
          }}
        >
          <div>
            © {new Date().getFullYear()} Dr. J. Arawindhan. {lang === 'ta' ? 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' : 'All Rights Reserved.'}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={openClaimsModal}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#475569',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                padding: 0,
                textDecoration: 'underline',
              }}
            >
              {lang === 'ta' ? 'உண்மைச் சரிபார்ப்புக் கொள்கை' : 'Verification Policy'}
            </button>

            <Link
              href={`/${lang}/faq`}
              style={{
                color: '#475569',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
              }}
            >
              {lang === 'ta' ? 'AEO வினாக்கள் பட்டியல்' : 'AEO Index'}
            </Link>

            <Link
              href={`/${lang === 'en' ? 'ta' : 'en'}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                color: '#B45309',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 700,
              }}
            >
              <span>🌐</span>
              <span>{lang === 'en' ? 'தமிழ் பதிப்பு' : 'English Edition'}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
