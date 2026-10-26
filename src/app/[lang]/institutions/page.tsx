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
      title: 'ஆச்சாரியா கல்வி நிறுவனங்கள் | 18 கல்லூரிகள், 35 பள்ளிகள், 61+ நிறுவனங்கள் — முனைவர் அரவிந்தன் (Arawindhan)',
      description:
        'முனைவர் ஜே. அரவிந்தன் (Arawindhan) அவர்களின் வழிகாட்டுதலில் உருவான ஆச்சாரியா கல்வி சாம்ராஜ்யம்: 18 கல்லூரிகள், 35 பள்ளிகள் மற்றும் 61+ நிறுவனங்கள்.',
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
        description: '18 கல்லூரிகள், 35 பள்ளிகள், 61+ நிறுவனங்களின் அதிகாரப்பூர்வ பட்டியல்.',
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
    title: 'Institutions & Enterprises | Dr. J. Arawindhan — 18 Colleges, 35 Schools, 61+ Companies',
    description:
      'Explore the multi-sector institutional ecosystem founded by Dr. J. Arawindhan (Arawindhan): 18 higher education colleges, 35 schools (4 expansion models), and 61+ corporate enterprises.',
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
        '18 Higher Education Colleges, 35 Schools, and 61+ Enterprises established across South India.',
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

  const institutionsSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://arawindhan.com/#website',
        url: `https://arawindhan.com/${lang}`,
        name: 'Dr. J. Arawindhan — Global Digital Authority Platform',
        description:
          'Official digital authority platform for Dr. J. Arawindhan: Educationist, entrepreneur, and founder of ACHARIYA World Class Education (18 colleges, 101 schools, 61+ companies, 600+ world records).',
        inLanguage: ['en', 'ta'],
        publisher: { '@id': 'https://arawindhan.com/#person' },
        about: { '@id': 'https://arawindhan.com/#person' },
      },
      {
        '@type': 'CollectionPage',
        '@id': `https://arawindhan.com/${lang}/institutions#webpage`,
        url: `https://arawindhan.com/${lang}/institutions`,
        name:
          lang === 'ta'
            ? 'ஒரு பெற்றோர், நான்கு குழந்தைகள்: 18 கல்லூரிகள், 101 பள்ளிகள், 61+ நிறுவனங்கள்'
            : 'One Parent, Four Children: 18 Colleges, 101 Schools, 61+ Companies',
        description:
          'An educational and commercial network grown over 25 years through four proven expansion models: Owned, Powered, Partnered and Parented campuses.',
        inLanguage: lang,
        isPartOf: { '@id': 'https://arawindhan.com/#website' },
        about: { '@id': 'https://arawindhan.com/#achariya' },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://arawindhan.com/images/institutions/achariya_campus.jpg',
          caption: 'Achariya World Class Education Puducherry Central Campus',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: lang === 'ta' ? 'முகப்பு' : 'Home', item: `https://arawindhan.com/${lang}` },
            { '@type': 'ListItem', position: 2, name: lang === 'ta' ? 'நிறுவனங்கள்' : 'Institutions', item: `https://arawindhan.com/${lang}/institutions` },
          ],
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://arawindhan.com/#person',
        name: 'Dr. J. Arawindhan',
        honorificPrefix: 'Dr.',
        url: `https://arawindhan.com/${lang}`,
        description:
          'Educationist, entrepreneur, and founder of ACHARIYA World Class Education, a network of 18 colleges, 101 schools and 61+ companies across southern India.',
        jobTitle: [
          'Founder, ACHARIYA World Class Education',
          'National Master Franchise Holder & Managing Director, Heguru India',
        ],
        knowsAbout: [
          'Education',
          'Dasavadani curriculum',
          'TRACK model',
          'Right-brain learning',
          'Neuroplasticity',
          'Entrepreneurship',
        ],
        worksFor: [
          { '@id': 'https://arawindhan.com/#achariya' },
          { '@id': 'https://arawindhan.com/#heguru-india' },
        ],
        mainEntityOfPage: `https://arawindhan.com/${lang}/biography`,
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://arawindhan.com/#achariya',
        name: 'ACHARIYA World Class Education',
        alternateName: 'ACHARIYA',
        url: `https://arawindhan.com/${lang}/institutions`,
        image: 'https://arawindhan.com/images/institutions/achariya_campus.jpg',
        description:
          'Central flagship campus in Puducherry uniting 18 higher education colleges, 101 schools across 4 models, and 61+ enterprises across 8 sectors in southern India.',
        foundingDate: '2000',
        founder: { '@id': 'https://arawindhan.com/#person' },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Puducherry',
          addressRegion: 'Puducherry',
          postalCode: '605110',
          addressCountry: 'IN',
        },
        areaServed: ['Puducherry', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh'],
        subOrganization: [
          {
            '@type': 'School',
            name: 'ACHARIYA Siksha Mandir',
            description:
              'Owned campus model: 19 campuses across Pondicherry, Karaikal, Villupuram, Chennai, Erode, Coimbatore and Trichy.',
          },
          {
            '@type': 'School',
            name: 'ACHARIYA Bala Siksha Mandir',
            description:
              'Owned campus model: 47 campuses, including 22 in Chennai and 18 in Pondicherry.',
          },
          {
            '@type': 'School',
            name: 'Aklavya International School',
            description: 'Owned campus model: 3 campuses.',
          },
          {
            '@type': 'School',
            name: 'Sri Sampourna Vidyalayam',
            description: 'Owned campus model: 2 campuses.',
          },
          {
            '@type': 'School',
            name: 'Woodlem Park Public School',
            description:
              'Powered campus: independent school using the ACHARIYA Dasavadani curriculum and TRACK model.',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'Kerala',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'School',
            name: 'Indian Public School',
            description:
              'Powered campus: independent school using the ACHARIYA Dasavadani curriculum and TRACK model.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dharmapuri',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'School',
            name: 'Nachcha Kids & Arudhra School',
            description:
              'Powered campus: independent school using the ACHARIYA Dasavadani curriculum and TRACK model.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Tirupur',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'School',
            name: 'Avenues International School',
            description:
              'Powered campus: independent school using the ACHARIYA Dasavadani curriculum and TRACK model.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Nellore',
              addressRegion: 'Andhra Pradesh',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'School',
            name: 'Divine School',
            description:
              'Powered campus: independent school using the ACHARIYA Dasavadani curriculum and TRACK model.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Thirumurthy Hills',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'School',
            name: 'Perks ACHARIYA',
            description:
              'Partnered campus: joint venture carrying the ACHARIYA brand with shared governance.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'School',
            name: 'Vijay Vikas ACHARIYA',
            description:
              'Partnered campus: joint venture with 2 campuses carrying the ACHARIYA brand.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Perundurai',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'School',
            name: 'ACHARIYA Western Ghats',
            description:
              'Parented campus under ACHARIYA institutional mentorship.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ettimadai',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'School',
            name: 'ACHARIYA-IIS',
            description:
              'Parented campus under ACHARIYA institutional mentorship.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Erode',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'School',
            name: 'ACHARIYA Trichy',
            description:
              'Parented campus under ACHARIYA institutional mentorship.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Tiruchirappalli',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
          },
        ],
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://arawindhan.com/#heguru-india',
        name: 'Heguru India',
        description:
          'Japanese right-brain neuroplasticity education alliance with Heguru Japan, operating 10+ centres across India for infants and young learners.',
        foundingDate: '2023',
        image: 'https://arawindhan.com/images/heguru_center.jpg',
        employee: { '@id': 'https://arawindhan.com/#person' },
        parentOrganization: {
          '@type': 'Organization',
          name: 'Heguru Japan',
          founder: [
            { '@type': 'Person', name: 'Ruiko Henmi' },
            { '@type': 'Person', name: 'Hirotada Henmi' },
          ],
        },
        areaServed: [
          { '@type': 'City', name: 'Chennai' },
          { '@type': 'City', name: 'Bengaluru' },
          { '@type': 'City', name: 'Puducherry' },
          { '@type': 'City', name: 'Tiruchirappalli' },
          { '@type': 'City', name: 'Pune' },
          { '@type': 'City', name: 'Hyderabad' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(institutionsSchema) }}
      />
      <InstitutionsClient lang={lang} />
    </>
  );
}
