import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { Language } from '@/types';

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
      title: 'முனைவர் ஜே. அரவிந்தன் ஜி — அதிகாரப்பூர்வ டிஜிட்டல் அறிவுத் தளம்',
      description:
        'ஆச்சாரியா கல்வி நிறுவனங்களின் நிறுவனர், கல்வியியலாளர், மற்றும் 18 கல்லூரிகள், 101 பள்ளிகள், 61+ நிறுவனங்களின் தலைவர் முனைவர் ஜே. அரவிந்தன் ஜி அவர்களின் அதிகாரப்பூர்வ தளம்.',
      alternates: {
        canonical: 'https://arawindhan.org/ta',
        languages: {
          en: 'https://arawindhan.org/en',
          ta: 'https://arawindhan.org/ta',
          'x-default': 'https://arawindhan.org/en',
        },
      },
    };
  }

  return {
    title: 'Dr. J. Arawindhan Ji — Global Digital Authority Platform',
    description:
      'Official digital authority platform for Dr. J. Arawindhan Ji: Educationist, entrepreneur, and founder of ACHARIYA World Class Education (18 colleges, 101 schools, 61+ companies, 600+ world records).',
    alternates: {
      canonical: 'https://arawindhan.org/en',
      languages: {
        en: 'https://arawindhan.org/en',
        ta: 'https://arawindhan.org/ta',
        'x-default': 'https://arawindhan.org/en',
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <StructuredData />
        <Navbar lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
