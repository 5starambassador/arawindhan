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
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' }}>
        {/* Brand identity */}
        <Link
          href={`/${lang}`}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
              border: '2px solid #FDE68A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(217, 119, 6, 0.2)',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: '#FFFFFF',
              fontFamily: 'var(--font-serif)',
            }}
          >
            JA
          </div>
          <div>
            <div
              className="font-serif heading-gold"
              style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '0.01em', lineHeight: 1.2 }}
            >
              {uiLabels.platformTitle[lang]}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}>
              <span>{uiLabels.platformTagline[lang]}</span>
              <ShieldCheck size={13} color="#059669" />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          <style jsx>{`
            @media (min-width: 1024px) {
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
                style={{
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--gold-glow)' : 'var(--text-main)',
                  transition: 'var(--transition)',
                  borderBottom: isActive ? '2px solid var(--gold-primary)' : '2px solid transparent',
                  paddingBottom: '4px',
                }}
              >
                {link.label[lang]}
              </Link>
            );
          })}
        </nav>

        {/* Actions: Language Switcher & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
                  color: isActive ? 'var(--gold-glow)' : 'var(--text-main)',
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
