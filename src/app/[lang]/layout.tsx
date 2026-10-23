import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { ClaimModal } from '@/components/ClaimModal';
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
      title: 'முனைவர் ஜே. அரவிந்தன் — அதிகாரப்பூர்வ டிஜிட்டல் அறிவுத் தளம்',
      description:
        'ஆச்சாரியா கல்வி நிறுவனங்களின் நிறுவனர், கல்வியியலாளர், மற்றும் 18 கல்லூரிகள், 101 பள்ளிகள், 61+ நிறுவனங்களின் தலைவர் முனைவர் ஜே. அரவிந்தன் அவர்களின் அதிகாரப்பூர்வ தளம்.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta',
        languages: {
          en: 'https://www.arawindhan.com/en',
          ta: 'https://www.arawindhan.com/ta',
          'x-default': 'https://www.arawindhan.com/en',
        },
      },
    };
  }

  return {
    title: 'Dr. J. Arawindhan — Global Digital Authority Platform',
    description:
      'Official digital authority platform for Dr. J. Arawindhan: Educationist, entrepreneur, and founder of ACHARIYA World Class Education (18 colleges, 101 schools, 61+ companies, 600+ world records).',
    alternates: {
      canonical: 'https://www.arawindhan.com/en',
      languages: {
        en: 'https://www.arawindhan.com/en',
        ta: 'https://www.arawindhan.com/ta',
        'x-default': 'https://www.arawindhan.com/en',
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
      <body suppressHydrationWarning>
        <StructuredData />
        <Navbar lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <ClaimModal language={lang} />
      </body>
    </html>
  );
}
