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
  const baseSchemaGraph: any[] = [
    {
      '@type': 'WebSite',
      '@id': 'https://arawindhan.com/#website',
      url: 'https://arawindhan.com/',
      name: 'Dr. J. Arawindhan — Global Digital Authority Platform',
      alternateName: ['Dr. J. Arawindhan', 'Arawindhan.com'],
      description:
        'Official digital knowledge platform documenting the educational systems, enterprises, publications, and philosophies founded and led by Dr. J. Arawindhan.',
      inLanguage: ['en', 'ta'],
      publisher: { '@id': 'https://arawindhan.com/#person' },
      copyrightHolder: { '@id': 'https://arawindhan.com/#person' },
      copyrightYear: 2026,
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://arawindhan.com/en#webpage',
      url: 'https://arawindhan.com/en',
      name: 'Dr. J. Arawindhan — Global Digital Authority Platform',
      description:
        'Official digital authority platform for Dr. J. Arawindhan: Educationist, entrepreneur, and founder of ACHARIYA World Class Education (18 colleges, 101 schools, 61+ companies, 600+ world records).',
      inLanguage: 'en',
      isPartOf: { '@id': 'https://arawindhan.com/#website' },
      about: { '@id': 'https://arawindhan.com/#person' },
      mainEntity: { '@id': 'https://arawindhan.com/#person' },
      primaryImageOfPage: { '@id': 'https://arawindhan.com/#portrait' },
      image: [
        { '@id': 'https://arawindhan.com/#portrait' },
        'https://arawindhan.com/images/records_showcase.jpg',
      ],
      workTranslation: { '@id': 'https://arawindhan.com/ta#webpage' },
      hasPart: { '@id': 'https://arawindhan.com/en#intelligence-matrix' },
      mentions: [
        { '@id': 'https://arawindhan.com/#achariya' },
        { '@id': 'https://arawindhan.com/#miway' },
        { '@id': 'https://arawindhan.com/#divya-yogam' },
        { '@id': 'https://arawindhan.com/#maha-shambala' },
        { '@id': 'https://arawindhan.com/en#educational-creations' },
        { '@id': 'https://arawindhan.com/en#featured-books' },
        { '@id': 'https://arawindhan.com/en#featured-awards' },
        { '@id': 'https://arawindhan.com/#core-thesis' },
      ],
      significantLink: [
        'https://arawindhan.com/en/biography',
        'https://arawindhan.com/en/education',
        'https://arawindhan.com/en/books',
        'https://arawindhan.com/en/institutions',
        'https://arawindhan.com/en/recognition',
        'https://arawindhan.com/en/inner-journey',
        'https://arawindhan.com/en/governance',
        'https://arawindhan.com/en/media',
        'https://arawindhan.com/en/faq',
        'https://arawindhan.com/en/contact',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://arawindhan.com/ta#webpage',
      url: 'https://arawindhan.com/ta',
      name: 'டாக்டர் ஜெ. அரவிந்தன்',
      inLanguage: 'ta',
      isPartOf: { '@id': 'https://arawindhan.com/#website' },
      translationOfWork: { '@id': 'https://arawindhan.com/en#webpage' },
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://arawindhan.com/#portrait',
      url: 'https://arawindhan.com/images/portrait.jpg',
      contentUrl: 'https://arawindhan.com/images/portrait.jpg',
      caption: 'Dr. J. Arawindhan — Founder, ACHARIYA World Class Education (Estd. 2000, Puducherry)',
      creditText: 'Dr. J. Arawindhan',
      copyrightNotice: '© 2026 Dr. J. Arawindhan. All Rights Reserved.',
    },
    {
      '@type': 'Person',
      '@id': 'https://arawindhan.com/#person',
      name: 'Dr. J. Arawindhan',
      alternateName: [
        'J. Arawindhan',
        'Arawindhan',
        'Santoshi Shri Arawindhan',
        'Santoshi Shri Arawindhan ji',
        'Dr. Arawindhan',
        'Dr Arawindhan',
        'Dr. J. Aravindan',
        'Aravindan',
        'முனைவர் ஜே. அரவிந்தன்',
        'அரவிந்தன்',
      ],
      honorificPrefix: 'Dr.',
      url: 'https://arawindhan.com/en',
      mainEntityOfPage: { '@id': 'https://arawindhan.com/en#webpage' },
      image: { '@id': 'https://arawindhan.com/#portrait' },
      description:
        'Educationist, entrepreneur and spiritual mentor. A trained Mechanical Engineer, he founded ACHARIYA World Class Education in Puducherry in 2000; it has grown to 18 colleges, 101 schools, 61+ companies and 302+ educational initiatives, educating over 14,000 students who hold 600+ world records.',
      disambiguatingDescription:
        'Founder, Chief Mentor & Managing Director of ACHARIYA World Class Education, Puducherry, India; creator of the Dasavadani multiple-intelligence curriculum.',
      jobTitle: ['Founder', 'Chief Mentor', 'Managing Director'],
      worksFor: { '@id': 'https://arawindhan.com/#achariya' },
      affiliation: [
        { '@id': 'https://arawindhan.com/#achariya' },
        { '@id': 'https://arawindhan.com/#divya-yogam' },
      ],
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'Educationist',
          description:
            'Creates original learning systems: Dasavadani (10 intelligences), MiWay K12 journey, Brain Activity System, Q-Math, and the TRACK assessment model.',
        },
        {
          '@type': 'Occupation',
          name: 'Entrepreneur',
          description:
            'Builds scalable institutional vehicles: 18 colleges, 101 schools (Owned, Powered, Partnered, Parented), and 61+ diversified companies across 8 sectors.',
        },
        {
          '@type': 'Occupation',
          name: 'Business Leader',
          description:
            "Applies an engineer's rigor: Centre of Excellence (Approved → Enriched → Enabled → Executed → Ensured), 6 Engines of Leadership, and the 77 ConCardios training hierarchy.",
        },
        {
          '@type': 'Occupation',
          name: 'Spiritual Guide',
          description:
            'Spiritual Master and Mahaavadhani guiding Divya Yogam and the annual Maha Shambala Puducherry.',
        },
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Mechanical Engineering',
      },
      knowsAbout: [
        'Multiple Intelligences',
        'Dasavadani Curriculum',
        'Brain Activity System',
        'Financial Intelligence',
        'Emotional Intelligence',
        'Quantum Intelligence',
        'K-12 Education',
        'Vedic Mathematics',
        'Parenting',
        'Educational Leadership',
        'Meditation',
        'Avadhanam',
      ],
      homeLocation: {
        '@type': 'Place',
        name: 'Puducherry, India',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Puducherry',
          addressRegion: 'Puducherry',
          addressCountry: 'IN',
        },
      },
      award: [
        'Holistic Education Award — Aatral Migu Asiriyar Virudhugal 2026, News7 Tamil',
        'Edu Icon Award — The Times of India',
        'Trendsetter Award — Times Interact',
      ],
      subjectOf: [{ '@id': 'https://arawindhan.com/en#webpage' }],
      sameAs: [
        'https://arawindhan.com/ta',
        'https://achariya.in',
        'https://www.divyayogam.org/',
        'https://www.linkedin.com/in/dr-j-arawindhan-jayakumar-b1a056124/',
        'https://www.youtube.com/@ArawindhanOfficial',
        'https://www.instagram.com/arawindan_official/',
        'https://www.facebook.com/achariyaworldclasseducation',
        'https://www.youtube.com/@AchariyaEducationalInstitutions',
      ],
    },
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://arawindhan.com/#achariya',
      name: 'ACHARIYA World Class Education',
      alternateName: ['ACHARIYA', 'Achariya World Class Education'],
      url: 'https://achariya.in',
      foundingDate: '2000',
      foundingLocation: {
        '@type': 'Place',
        name: 'Puducherry, India',
      },
      founder: { '@id': 'https://arawindhan.com/#person' },
      slogan: 'One Parent with Four Children',
      description:
        'Education ecosystem founded in 2000 in Puducherry: 18 higher-education colleges, 101 schools across 4 southern states, 61+ companies across 8 sectors and 302+ educational initiatives.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ACHARIYA Central Campus, Villianur',
        addressLocality: 'Puducherry',
        addressRegion: 'Puducherry',
        postalCode: '605110',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'State', name: 'Puducherry' },
        { '@type': 'State', name: 'Tamil Nadu' },
        { '@type': 'State', name: 'Karnataka' },
        { '@type': 'Country', name: 'India' },
      ],
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 2000,
        description: 'Certified educators and professionals',
      },
      subOrganization: [
        { '@id': 'https://arawindhan.com/#miway' },
        {
          '@type': 'Organization',
          name: 'Q School',
          description: "ACHARIYA's EduTech division scaling the Q-Math approach.",
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'ACHARIYA Institutions',
        url: 'https://arawindhan.com/en/institutions',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Higher Education Colleges (18)',
            description:
              'Engineering, Arts & Science, Hospitality, Medical Sciences & Teacher Education',
          },
          {
            '@type': 'OfferCatalog',
            name: 'Schools in Network (101)',
            description:
              'Owned, Powered, Partnered, and Parented campuses across 4 southern states',
          },
        ],
      },
      award: [
        '600+ student world records, including 222 Guinness and World Records',
        '540+ national awards and accolades',
      ],
      sameAs: ['https://achariya.in'],
    },
    {
      '@type': 'Organization',
      '@id': 'https://arawindhan.com/#miway',
      name: 'MIWAY',
      alternateName: 'MiWay Academic System',
      url: 'https://miway.in',
      description:
        "ACHARIYA's Multiple Intelligence K-12 curriculum, delivering the I CAN to ICON journey across Knowing, Doing and Being.",
      parentOrganization: { '@id': 'https://arawindhan.com/#achariya' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://arawindhan.com/#divya-yogam',
      name: 'Divine Grace Foundation',
      url: 'https://divinegracefoundation.org',
      slogan: 'Develop the human. Awaken the being.',
      description:
        'Home of Divya Yogam, conceived in 2000, and the annual Maha Shambala Puducherry spiritual convergence held since 2012.',
      founder: { '@id': 'https://arawindhan.com/#person' },
      event: { '@id': 'https://arawindhan.com/#maha-shambala' },
    },
    {
      '@type': 'EventSeries',
      '@id': 'https://arawindhan.com/#maha-shambala',
      name: 'Maha Shambala Puducherry',
      description:
        'Annual flagship spiritual convergence in Puducherry featuring mass Oneness Meditation, Seven Chakra pyramid energy activation and discourses on conscious living by Santoshi Shri Arawindhan.',
      startDate: '2012',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'Puducherry',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Puducherry',
          addressCountry: 'IN',
        },
      },
      organizer: { '@id': 'https://arawindhan.com/#divya-yogam' },
      performer: { '@id': 'https://arawindhan.com/#person' },
      url: 'https://arawindhan.com/en/inner-journey',
    },
    {
      '@type': 'ItemList',
      '@id': 'https://arawindhan.com/en#educational-creations',
      name: 'Ten Educational Creations of Dr. J. Arawindhan',
      url: 'https://arawindhan.com/en/education',
      numberOfItems: 4,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'LearningResource',
            '@id': 'https://arawindhan.com/en/education/dasavadani-curriculum#system',
            name: 'The Dasavadani Curriculum',
            url: 'https://arawindhan.com/en/education/dasavadani-curriculum',
            learningResourceType: 'Curriculum',
            description:
              "ACHARIYA's proprietary multiple-intelligence curriculum built on ten intelligences: eight of Howard Gardner's plus Financial Intelligence (FI) and Emotional Intelligence (EI), culminating in Quantum Intelligence.",
            creator: { '@id': 'https://arawindhan.com/#person' },
            publisher: { '@id': 'https://arawindhan.com/#achariya' },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'LearningResource',
            name: 'The K12 Journey: From I CAN to ICON',
            url: 'https://arawindhan.com/en/education/k12-journey-ican-to-icon',
            learningResourceType: 'Curriculum',
            educationalLevel: 'K-12',
            description:
              'A K12 design across Knowing, Doing and Being, delivered through MiWay; the 100% Learning Curve SOP takes every learner from Micro to Mastery.',
            creator: { '@id': 'https://arawindhan.com/#person' },
            publisher: { '@id': 'https://arawindhan.com/#miway' },
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'LearningResource',
            name: 'The Brain Activity System',
            url: 'https://arawindhan.com/en/education/brain-activity-system',
            learningResourceType: 'Pedagogical framework',
            description:
              'Brain Activity over Ability: marks measure recall, while Brain Activity is a mental muscle trained through repetition, challenge and recovery.',
            creator: { '@id': 'https://arawindhan.com/#person' },
            publisher: { '@id': 'https://arawindhan.com/#achariya' },
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'LearningResource',
            name: 'Q-Math and Q School',
            url: 'https://arawindhan.com/en/education/q-math-and-q-school',
            learningResourceType: 'Pedagogical framework',
            teaches: 'Mathematics',
            description:
              "A reversal of rote maths teaching — see it, touch it, think it, solve it, apply it — using Vedic Maths techniques; scaled through Q School, ACHARIYA's EduTech division.",
            creator: { '@id': 'https://arawindhan.com/#person' },
            publisher: { '@id': 'https://arawindhan.com/#achariya' },
          },
        },
      ],
    },
    {
      '@type': 'DefinedTermSet',
      '@id': 'https://arawindhan.com/en#intelligence-matrix',
      name: 'The Dasavadani Quantum Intelligence Matrix',
      description:
        "Howard Gardner's 8 intelligences + Dr. Arawindhan's Financial & Emotional Intelligences + Quantum Suprasapien Synthesis.",
      creator: { '@id': 'https://arawindhan.com/#person' },
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', termCode: '01', name: 'Linguistic-Verbal Intelligence' },
        { '@type': 'DefinedTerm', termCode: '02', name: 'Logical-Mathematical Intelligence' },
        { '@type': 'DefinedTerm', termCode: '03', name: 'Spatial-Visual Intelligence' },
        { '@type': 'DefinedTerm', termCode: '04', name: 'Bodily-Kinesthetic Intelligence' },
        { '@type': 'DefinedTerm', termCode: '05', name: 'Musical-Rhythmic Intelligence' },
        { '@type': 'DefinedTerm', termCode: '06', name: 'Interpersonal Intelligence' },
        { '@type': 'DefinedTerm', termCode: '07', name: 'Intrapersonal Intelligence' },
        { '@type': 'DefinedTerm', termCode: '08', name: 'Naturalistic Intelligence' },
        {
          '@type': 'DefinedTerm',
          termCode: '09',
          name: 'Financial Intelligence (FI)',
          description: 'An Arawindhan creation within the Dasavadani model.',
        },
        {
          '@type': 'DefinedTerm',
          termCode: '10',
          name: 'Emotional Intelligence (EI)',
          description: 'An Arawindhan creation within the Dasavadani model.',
        },
        {
          '@type': 'DefinedTerm',
          termCode: '11',
          name: 'Quantum Avadhana Synthesis',
          description:
            'HI (Human Intelligence) + AI (Artificial Intelligence) = the Suprasapien learner operating in 10 simultaneous dimensions, via the Dasavadhani Multi-Tasking Protocol.',
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://arawindhan.com/en#featured-books',
      name: 'Published Works & Thought Leadership',
      url: 'https://arawindhan.com/en/books',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Book',
            '@id': 'https://arawindhan.com/en/books/shambala-book#book',
            name: 'The Shambala Book',
            alternativeHeadline:
              'Principles of Higher Consciousness, Meditative Mind, and Inner Awakening',
            url: 'https://arawindhan.com/en/books/shambala-book',
            image: 'https://arawindhan.com/images/books/shambala_book.jpg',
            author: { '@id': 'https://arawindhan.com/#person' },
            bookEdition: 'Ecosystem Edition',
            inLanguage: 'en',
            genre: ['Spirituality', 'Meditation'],
            description:
              'Over a decade of inner exploration and annual retreats in Puducherry since 2012: Seven Chakra pyramid practices, Oneness Meditation and Divine Grace in daily life.',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Book',
            '@id': 'https://arawindhan.com/en/books/wow-parenting-book#book',
            name: 'WOW Parenting',
            alternativeHeadline:
              'School and Family Working as One: Because Learning Ends at Home',
            url: 'https://arawindhan.com/en/books/wow-parenting-book',
            image: 'https://arawindhan.com/images/books/wow_parenting.jpg',
            author: { '@id': 'https://arawindhan.com/#person' },
            inLanguage: 'en',
            genre: ['Parenting', 'Education'],
            description:
              'A handbook for parents balancing academic expectations and emotional wellbeing, with parenting styles, bonding techniques and co-schooling frameworks.',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Book',
            '@id': 'https://arawindhan.com/en/books/financial-intelligence#book',
            name: 'Financial Intelligence (FI)',
            alternativeHeadline:
              'Resource Stewardship, Value Creation, and Practical Wealth Literacy for the Young Mind',
            url: 'https://arawindhan.com/en/books/financial-intelligence',
            image: 'https://arawindhan.com/images/books/financial_intelligence.jpg',
            author: { '@id': 'https://arawindhan.com/#person' },
            inLanguage: 'en',
            genre: ['Financial Literacy', 'Education'],
            description:
              'Introduces financial wisdom as the ninth intelligence of the Dasavadani model — earning, investing, serving, money psychology and ethical enterprise.',
          },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://arawindhan.com/en#featured-awards',
      name: 'Verified Accolades',
      url: 'https://arawindhan.com/en/recognition',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'CreativeWork',
            name: 'Holistic Education Award',
            alternateName: 'Aatral Migu Asiriyar Virudhugal 2026',
            dateCreated: '2026',
            sourceOrganization: { '@type': 'Organization', name: 'News7 Tamil' },
            about: { '@id': 'https://arawindhan.com/#person' },
            description:
              'For contributions to whole-brain education combining neuroscience, martial arts, multiple intelligences and moral grounding across 101 schools.',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'CreativeWork',
            name: 'Edu Icon Award',
            sourceOrganization: { '@type': 'NewsMediaOrganization', name: 'The Times of India' },
            about: { '@id': 'https://arawindhan.com/#person' },
            description:
              'For leadership in pioneering modern K-12 schooling models and child-centric pedagogical frameworks.',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'CreativeWork',
            name: 'Trendsetter Award',
            sourceOrganization: { '@type': 'Organization', name: 'Times Interact' },
            about: { '@id': 'https://arawindhan.com/#person' },
            description:
              'For benchmarks in education, experiential learning and enterprise growth.',
          },
        },
      ],
    },
    {
      '@type': 'Quotation',
      '@id': 'https://arawindhan.com/#core-thesis',
      name: 'Core Pedagogical Thesis',
      text: 'Brain Activity over Ability: Marks measure recall; Brain Activity is the engine underneath, trainable like a muscle.',
      spokenByCharacter: { '@id': 'https://arawindhan.com/#person' },
      creator: { '@id': 'https://arawindhan.com/#person' },
      isPartOf: { '@id': 'https://arawindhan.com/en#webpage' },
    },
  ];

  const schemaGraph = [...baseSchemaGraph];

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
