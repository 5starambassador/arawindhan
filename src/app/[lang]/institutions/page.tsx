import React from 'react';
import type { Metadata } from 'next';
import { InstitutionsClient } from './InstitutionsClient';
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
      title: 'ஆச்சாரியா கல்வி நிறுவனங்கள் | 18 கல்லூரிகள், 101 பள்ளிகள், 61+ நிறுவனங்கள் — முனைவர் அரவிந்தன் (Arawindhan)',
      description:
        'முனைவர் ஜே. அரவிந்தன் (Arawindhan) அவர்களின் வழிகாட்டுதலில் உருவான ஆச்சாரியா கல்வி சாம்ராஜ்யம்: 18 கல்லூரிகள், 101 பள்ளிகள் மற்றும் 61+ நிறுவனங்கள்.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta/institutions',
        languages: {
          en: 'https://www.arawindhan.com/en/institutions',
          ta: 'https://www.arawindhan.com/ta/institutions',
          'x-default': 'https://www.arawindhan.com/en/institutions',
        },
      },
      openGraph: {
        title: 'ஆச்சாரியா கல்வி நிறுவனங்கள் | முனைவர் ஜே. அரவிந்தன்',
        description: '18 கல்லூரிகள், 101 பள்ளிகள், 61+ நிறுவனங்களின் அதிகாரப்பூர்வ பட்டியல்.',
        url: 'https://www.arawindhan.com/ta/institutions',
        siteName: 'Dr. J. Arawindhan Official Platform',
        images: [
          {
            url: 'https://www.arawindhan.com/images/institutions/achariya_campus.jpg',
            width: 1200,
            height: 630,
            alt: 'Achariya World Class Education Campus',
          },
        ],
      },
    };
  }

  return {
    title: 'Institutions & Enterprises | Dr. J. Arawindhan — 18 Colleges, 101 Schools, 61+ Companies',
    description:
      'Explore the multi-sector institutional ecosystem founded by Dr. J. Arawindhan (Arawindhan): 18 higher education colleges, 101 schools (4 expansion models), and 61+ corporate enterprises.',
    alternates: {
      canonical: 'https://www.arawindhan.com/en/institutions',
      languages: {
        en: 'https://www.arawindhan.com/en/institutions',
        ta: 'https://www.arawindhan.com/ta/institutions',
        'x-default': 'https://www.arawindhan.com/en/institutions',
      },
    },
    openGraph: {
      title: 'Institutions & Enterprises | Dr. J. Arawindhan',
      description:
        '18 Higher Education Colleges, 101 Schools, and 61+ Enterprises established across South India.',
      url: 'https://www.arawindhan.com/en/institutions',
      siteName: 'Dr. J. Arawindhan Official Platform',
      images: [
        {
          url: 'https://www.arawindhan.com/images/institutions/achariya_campus.jpg',
          width: 1200,
          height: 630,
          alt: 'Achariya World Class Education Campus',
        },
      ],
    },
  };
}

export default async function InstitutionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  return <InstitutionsClient lang={lang} />;
}
