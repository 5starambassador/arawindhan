'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Language } from '@/types';
import { navigationLinks, uiLabels } from '@/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  lang: Language;
}

export const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || '';

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header className="header-glass">
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.5rem',
          maxWidth: '1360px',
          gap: '1rem',
        }}
      >
        {/* Brand identity */}
        <Link
          href={`/${lang}`}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #F59E0B',
              boxShadow: '0 2px 10px rgba(217, 119, 6, 0.25), 0 0 0 2px #FEF3C7',
              flexShrink: 0,
              background: '#FEF3C7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span
                style={{
                  fontSize: '1.08rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-serif)',
                  color: '#0F172A',
                  letterSpacing: '0.01em',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                }}
              >
                {uiLabels.platformTitle[lang]}
              </span>
              <span
                title="Verified Official Digital Entity"
                style={{ display: 'inline-flex', alignItems: 'center', color: '#059669' }}
              >
                <ShieldCheck size={14} />
              </span>
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                color: '#64748B',
                fontWeight: 500,
                letterSpacing: '0.02em',
                lineHeight: 1.25,
                whiteSpace: 'nowrap',
              }}
            >
              {uiLabels.platformTagline[lang]}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.9rem' }} className="desktop-nav">
          <style jsx>{`
            @media (min-width: 1080px) {
              .desktop-nav {
                display: flex !important;
              }
              .mobile-toggle {
                display: none !important;
              }
            }
          `}</style>
          {navigationLinks.slice(0, 8).map((link) => {
            const fullHref = `/${lang}${link.href ? `/${link.href}` : ''}`;
            const isActive = pathname === fullHref || (link.href && pathname.startsWith(fullHref));
            return (
              <Link
                key={link.href}
                href={fullHref}
                title={link.label[lang]}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#B45309' : '#1E293B',
                  transition: 'all 0.15s ease',
                  borderBottom: isActive ? '2px solid #D97706' : '2px solid transparent',
                  paddingBottom: '3px',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#B45309';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#1E293B';
                }}
              >
                {link.shortLabel[lang]}
              </Link>
            );
          })}
        </nav>

        {/* Actions: Evidence Modal, Language Switcher & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-claim-modal', { detail: {} }));
              }
            }}
            title={lang === 'ta' ? 'சான்று சரிபார்ப்புக் களஞ்சியம் (Ctrl+K)' : 'Evidence & Claims Inspector (Ctrl+K)'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: '#FAF8F5',
              border: '1px solid #E2E8F0',
              padding: '0.38rem 0.75rem',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#0F172A',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              whiteSpace: 'nowrap',
            }}
          >
            <ShieldCheck size={14} color="#D97706" />
            <span>{lang === 'ta' ? 'சான்றுகள்' : 'Claims'}</span>
            <kbd
              style={{
                background: '#E2E8F0',
                fontSize: '0.65rem',
                padding: '0.1rem 0.3rem',
                borderRadius: '4px',
                color: '#64748B',
                fontFamily: 'monospace',
                marginLeft: '2px',
              }}
            >
              ⌘K
            </kbd>
          </button>

          <LanguageSwitcher currentLang={lang} />

          <button
            onClick={toggleMobile}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.4rem',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: '#FFFFFF',
            borderTop: '1px solid var(--border-light)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
          }}
        >
          {navigationLinks.map((link) => {
            const fullHref = `/${lang}${link.href ? `/${link.href}` : ''}`;
            const isActive = pathname === fullHref;
            return (
              <Link
                key={link.href}
                href={fullHref}
                onClick={() => setMobileOpen(false)}
                style={{
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#B45309' : '#0F172A',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--border-light)',
                }}
              >
                {link.label[lang]}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
