import React from 'react';

interface StructuredDataProps {
  type?: 'Person' | 'Book' | 'FAQPage' | 'Article';
  data?: Record<string, any>;
  title?: string;
  description?: string;
  url?: string;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  type = 'Person',
  data = {},
  title,
  description,
  url,
}) => {
  let schemaGraph: any[] = [
    {
      '@type': 'WebSite',
      '@id': 'https://www.arawindhan.com/#website',
      url: 'https://www.arawindhan.com',
      name: 'Arawindhan',
      alternateName: [
        'Arawindhan Official Website',
        'Dr. J. Arawindhan',
        'arawindhan.com',
        'www.arawindhan.com',
      ],
      description: 'Official digital authority platform and website of Dr. J. Arawindhan.',
      publisher: {
        '@id': 'https://www.arawindhan.com/#person',
      },
      inLanguage: ['en', 'ta'],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.arawindhan.com/#person',
      name: 'Dr. J. Arawindhan',
      givenName: 'J.',
      familyName: 'Arawindhan',
      url: 'https://www.arawindhan.com',
      mainEntityOfPage: 'https://www.arawindhan.com',
      image: 'https://www.arawindhan.com/images/portrait_spiritual_authentic.jpg',
      alternateName: [
        'Arawindhan',
        'Dr. Arawindhan',
        'Dr Arawindhan',
        'J. Arawindhan',
        'Dr. J. Aravindan',
        'Aravindan',
        'Santoshi Shri Arawindhan',
        'Mahavadhani Sri Achariya Arawindhan GuruG',
        'முனைவர் ஜே. அரவிந்தன்',
        'அரவிந்தன்',
      ],
      jobTitle: 'Founder, Chief Mentor & Managing Director',
      worksFor: {
        '@type': 'EducationalOrganization',
        name: 'ACHARIYA World Class Education',
        url: 'https://achariya.in',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Mechanical Engineering',
      },
      description:
        'Indian educationist, entrepreneur, author, and founder of ACHARIYA World Class Education (18 colleges, 35 schools, 61+ companies).',
      award: [
        'Holistic Education Award (News7 Tamil Aatral Migu Asiriyar 2026)',
        'Edu Icon Award (The Times of India)',
        'Trendsetter Award (Times Interact)',
        'Outstanding Youth Award in Academics & Leadership (JCI India)',
      ],
      knowsAbout: [
        'Multiple Intelligence Theory',
        'Dasavadani Curriculum',
        'Whole-Brain Neuro-Development',
        'K-12 School Architecture',
        'Quantum Intelligence (HI + AI)',
        'Divya Yogam & Consciousness',
      ],
      sameAs: [
        'https://achariya.in',
        'https://www.linkedin.com/in/dr-j-arawindhan-jayakumar-b1a056124/',
        'https://www.youtube.com/@ArawindhanOfficial',
        'https://www.instagram.com/arawindan_official/',
        'https://www.facebook.com/achariyaworldclasseducation',
        'https://www.youtube.com/@AchariyaEducationalInstitutions',
      ],
    },
  ];

  if (type === 'FAQPage' && data.faqs) {
    schemaGraph.push({
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq: any) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  if (type === 'Book' && data.book) {
    schemaGraph.push({
      '@type': 'Book',
      name: data.book.title,
      author: {
        '@type': 'Person',
        name: 'Dr. J. Arawindhan',
      },
      description: data.book.summary,
      inLanguage: ['en', 'ta'],
      publisher: {
        '@type': 'Organization',
        name: 'ACHARIYA Centre of Excellence Publications',
      },
    });
  }

  const structuredJson = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredJson) }}
    />
  );
};
