'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, HelpCircle, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';
import { Language } from '@/types';
import { uiLabels } from '@/lib/i18n';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #FAF9F6 0%, #F5F3EF 100%)',
        borderTop: '1px solid #E2E8F0',
        position: 'relative',
        marginTop: '6rem',
        paddingTop: '4.5rem',
        paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom, 0px))',
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

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Col 1: Executive Brand & Social Channels */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #F59E0B',
                  boxShadow: '0 4px 12px rgba(217, 119, 6, 0.2), 0 0 0 2px #FEF3C7',
                  flexShrink: 0,
                  background: '#FEF3C7',
                }}
              >
                <img
                  src="/images/avatar.jpg"
                  alt="Dr. J. Arawindhan"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.2,
                  }}
                >
                  {uiLabels.platformTitle[lang]}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#B45309', fontWeight: 700, letterSpacing: '0.02em', marginTop: '0.15rem' }}>
                  {lang === 'ta' ? 'கல்வியியலாளர் • நூலாசிரியர் • ஆன்மீக குரு' : 'Educationist • Author • Spiritual Master'}
                </div>
              </div>
            </div>

            <p
              style={{
                color: '#475569',
                fontSize: '0.88rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              {lang === 'ta'
                ? 'ஆச்சாரியா கல்வி நிறுவனங்கள் (2000 முதல்), ஹெகுரு இந்தியா மற்றும் க்யூ ஸ்கூல் (Q School) ஆகியவற்றின் நிறுவனர். புஷிடோ (Bushido) ஒழுக்கவியல் மற்றும் சுப்ரசேபியன்ஸ் (Suprasapiens) ஆளுமைத் தத்துவத்தின் வழி 25+ ஆண்டுகால கல்விப் புத்தாக்கங்களை முன்னெடுத்துச் செல்லும் அதிகாரப்பூர்வ தளம்.'
                : 'Founder & Chief Mentor of ACHARIYA World Class Education (Estd. 2000), Heguru India, and Q School. Pioneering whole-brain pedagogy, Bushido character architecture, and the Suprasapiens philosophy across 25+ years of transformative leadership.'}
            </p>

            {/* Minimalist Executive Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: 'auto' }}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dr-j-arawindhan-jayakumar-b1a056124/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0A66C2',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0A66C2';
                  e.currentTarget.style.background = '#EFF6FF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@ArawindhanOfficial"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube Channel"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#DC2626',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#DC2626';
                  e.currentTarget.style.background = '#FEF2F2';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/arawindan_official/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E1306C',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#E1306C';
                  e.currentTarget.style.background = '#FDF2F8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Direct Inquiry */}
              <Link
                href={`/${lang}/contact`}
                title={lang === 'ta' ? 'தொடர்பு கொள்க' : 'Direct Inquiry'}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#059669';
                  e.currentTarget.style.background = '#ECFDF5';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <Mail size={16} />
              </Link>
            </div>
          </div>

          {/* Col 2: Knowledge & Life */}
          <div>
            <div
              style={{
                color: '#92400E',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
              }}
            >
              {lang === 'ta' ? 'வாழ்க்கை & கல்வி' : 'KNOWLEDGE & LIFE'}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { href: 'biography', en: 'Biography & 10 Avatar Phases', ta: 'வாழ்க்கை வரலாறு & 10 அவதாரங்கள்' },
                { href: 'education', en: 'Dasavadani & Educational Systems', ta: 'தசாவதானி & 10 கல்விக் கூடங்கள்' },
                { href: 'books', en: 'Published Books & Treatises', ta: 'நூல்கள் & ஆய்வு வெளியீடுகள்' },
                { href: 'blog', en: 'Research & Thought Leadership', ta: 'ஆய்வுக் கட்டுரைகள் (Neo Sapiens)' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}/${link.href}`}
                    style={{
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'color 0.15s ease, transform 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#B45309';
                      e.currentTarget.style.transform = 'translateX(2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <span>{link[lang]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legacy & Movements */}
          <div>
            <div
              style={{
                color: '#92400E',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
              }}
            >
              {lang === 'ta' ? 'நிறுவனங்கள் & சாதனைகள்' : 'LEGACY & MOVEMENTS'}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { href: 'institutions', en: 'Institutions (18 Colleges, 101 Schools)', ta: '18 கல்லூரிகள், 101 பள்ளிகள், 61+ நிறுவனங்கள்' },
                { href: 'recognition', en: '540+ Accolades & 222 World Records', ta: '540+ விருதுகள் & 222 கின்னஸ் சாதனைகள்' },
                { href: 'inner-journey', en: 'Inner Journey & Divya Yogam (2012)', ta: 'திவ்ய யோகம் & மகா ஷாம்பாலா (2012 முதல்)' },
                { href: 'media', en: 'Keynote Addresses & Speeches', ta: 'மாநாட்டு உரைகள் & ஊடகப் பதிவுகள்' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}/${link.href}`}
                    style={{
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'color 0.15s ease, transform 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#B45309';
                      e.currentTarget.style.transform = 'translateX(2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <span>{link[lang]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Central Campus & Inquiries */}
          <div>
            <div
              style={{
                color: '#92400E',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
              }}
            >
              {lang === 'ta' ? 'தொடர்பு & தலைமையகம்' : 'CAMPUS & INQUIRIES'}
            </div>

            {/* Clean Location Box */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '0.95rem 1.15rem',
                fontSize: '0.84rem',
                color: '#475569',
                lineHeight: 1.55,
                marginBottom: '1.25rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.3rem' }}>
                <MapPin size={15} color="#D97706" />
                <span>Puducherry Central Campus</span>
              </div>
              <div>ACHARIYA World Class Education</div>
              <div style={{ color: '#64748B', fontSize: '0.78rem' }}>Puducherry 605110, India</div>
            </div>

            {/* Quick Inquiry Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <Link
                href={`/${lang}/faq`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#334155',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B45309')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
              >
                <HelpCircle size={15} color="#D97706" />
                <span>{lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)' : 'Frequently Asked Questions (FAQ)'}</span>
              </Link>

              <Link
                href={`/${lang}/contact`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#334155',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B45309')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
              >
                <ShieldCheck size={15} color="#059669" />
                <span>{lang === 'ta' ? 'அதிகாரப்பூர்வ தொடர்புகள் & சரிபார்ப்பு' : 'Official Verification & Inquiries'}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean Copyright & Language Switcher */}
        <div
          style={{
            borderTop: '1px solid #E2E8F0',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.84rem',
            color: '#64748B',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span>
              © {currentYear} Dr. J. Arawindhan. {lang === 'ta' ? 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' : 'All Rights Reserved.'}
            </span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>
              {lang === 'ta' ? 'ஆச்சாரியா உலகத் தரம் வாய்ந்த கல்வி (2000 முதல்)' : 'ACHARIYA World Class Education (Estd. 2000)'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Language Switcher Pill */}
            <Link
              href={`/${lang === 'en' ? 'ta' : 'en'}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#FFFFFF',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                padding: '0.35rem 0.85rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 700,
                transition: 'all 0.15s ease',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D97706';
                e.currentTarget.style.color = '#B45309';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#CBD5E1';
                e.currentTarget.style.color = '#0F172A';
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
