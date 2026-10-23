'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Languages } from 'lucide-react';
import { Language } from '@/types';

interface LanguageSwitcherProps {
  currentLang: Language;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
  const pathname = usePathname() || '';

  // Determine target route by replacing the initial /[lang] segment
  let targetPath = '';
  if (currentLang === 'en') {
    targetPath = pathname.startsWith('/en')
      ? pathname.replace(/^\/en/, '/ta')
      : `/ta${pathname}`;
  } else {
    targetPath = pathname.startsWith('/ta')
      ? pathname.replace(/^\/ta/, '/en')
      : `/en${pathname}`;
  }

  const targetLabel = currentLang === 'en' ? 'தமிழ்' : 'English';

  return (
    <Link
      href={targetPath || (currentLang === 'en' ? '/ta' : '/en')}
      className="btn-outline"
      style={{
        padding: '0.45rem 1rem',
        fontSize: '0.85rem',
        border: '1px solid var(--gold-primary)',
        color: 'var(--gold-glow)',
      }}
      aria-label={`Switch language to ${targetLabel}`}
    >
      <Languages size={15} />
      <span style={{ fontWeight: 600 }}>{targetLabel}</span>
    </Link>
  );
};
