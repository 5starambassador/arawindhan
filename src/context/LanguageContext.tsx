'use client';

import React, { createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import { Language } from '@/types';

interface LanguageContextType {
  lang: Language;
  setLang?: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: 'en' });

export const LanguageProvider: React.FC<{ children: React.ReactNode; lang?: Language }> = ({
  children,
  lang: initialLang,
}) => {
  const pathname = usePathname() || '';
  const detectedLang: Language = initialLang || (pathname.startsWith('/ta') ? 'ta' : 'en');

  return (
    <LanguageContext.Provider value={{ lang: detectedLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  const pathname = usePathname() || '';
  const detectedLang: Language = pathname.startsWith('/ta') ? 'ta' : 'en';
  return { lang: context?.lang || detectedLang };
};
