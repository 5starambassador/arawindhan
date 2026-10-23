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
      '@type': 'Person',
      '@id': 'https://www.arawindhan.com/#person',
      name: 'Dr. J. Arawindhan',
      alternateName: [
        'Santoshi Shri. Arawindhan',
        'Dr. J. Arawindhan',
        'முனைவர் ஜே. அரவிந்தன்',
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
        'Indian educationist, entrepreneur, author, and founder of ACHARIYA World Class Education (18 colleges, 101 schools, 61+ companies).',
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
