import { Language } from '@/types';

export interface BookSchemaMeta {
  name: string;
  alternativeHeadline: string;
  description: string;
  numberOfPages?: number;
}

export const BOOK_SCHEMA_METADATA: Record<string, BookSchemaMeta> = {
  'wow-parenting-book': {
    name: 'WOW Parenting',
    alternativeHeadline: 'School and Family Working as One, Because Learning Ends at Home',
    description:
      'A foundational handbook for contemporary parents navigating the balance between academic expectations and emotional wellbeing.',
  },
  'andava-the-victory-mode': {
    name: 'ANDAVA: The Victory Mode',
    alternativeHeadline:
      'Switching from Victim to Creator of Your Life — from suffering to bliss, from Tandava to Andava',
    description:
      'Inspired by the wisdom of Tamil tradition and the timeless teachings of the Bhagavad Gita, ANDAVA: The Victory Mode addresses the subtle trap of victim-victimhood.',
  },
  'the-yoga-of-personality': {
    name: 'The Yoga of Personality',
    alternativeHeadline: 'A Story of Becoming Who You Already Are',
    description:
      "Based on the profound teachings of Dr. J. Arawindhan's celebrated keynote address, exploring personality as authentic integration rather than external imitation.",
  },
  'from-knowing-to-doing': {
    name: 'From Knowing to Doing',
    alternativeHeadline:
      'The Four Pillars of Youth Empowerment in India: A Practical Guide to Building Skill, Talent, and Character',
    description:
      "Written directly for India's burgeoning Gen Z demographic, From Knowing to Doing bridges the gap between academic information and real-world execution.",
  },
  'science-of-divine-grace-tirukkural': {
    name: 'The Science of Divine Grace: Achieving Heavenly Glory through the Tirukkuṟaḷ',
    alternativeHeadline:
      'The Sacred Technology of Righteous Action, Divine Grace & Immortality of Contribution',
    description:
      'A monumental spiritual and philosophical work that decodes the ancient verses of the Tirukkuṟaḷ not merely as ethical literature, but as an exact spiritual science.',
  },
  'wow-dictionary': {
    name: 'A WOW Dictionary – Concepts & Strategy',
    alternativeHeadline: 'Resonance & Coherence, World of Wonders – Wonder of the World',
    description:
      "A masterwork gathering the core concepts, strategic lexicon, and operational philosophies conceived by Dr. J. Arawindhan, including the Three WOW Readings and the Five R's of Inner Strength.",
  },
  'the-luminous-legacy': {
    name: 'The Luminous Legacy',
    alternativeHeadline:
      'A Garland of One Hundred and Eight Tributes Offered in Reverence to Dr. J. Arawindhan Ji',
    description:
      'Presented in the sacred spirit of the Ashtottara Shatanamavali, the traditional garland of one hundred and eight reverent names, honoring Dr. J. Arawindhan Ji.',
  },
  'iqqi': {
    name: 'IQQI: The Blueprint for Raising the Next Generation of Human Potential',
    alternativeHeadline:
      'From IQ to QI (Quantum Intelligence): How Children Can Develop Integrated Intelligence',
    description:
      'A groundbreaking paradigm shift moving from three IQs to multidimensional QI (Quantum Intelligence), covering creativity, compassion, consciousness, focus, and leadership.',
  },
  'ayngara': {
    name: 'AYNGARA: Form to Transform',
    alternativeHeadline:
      'The Sacred Journey from Animal Instinct to Divine Consciousness – Bridging Body, Mind, and Spirit',
    description:
      'A masterwork on holistic spiritual human engineering, presenting a primal-to-divine transformation through the Ayngara archetype, the five-armed primordial lord of form.',
  },
  'shambala-book': {
    name: 'The Shambala Book',
    alternativeHeadline: 'Principles of Higher Consciousness, Meditative Mind, and Inner Awakening',
    description:
      'Encapsulates over a decade of inner exploration and annual spiritual retreats held in Puducherry since 2012, articulating the mechanics of turning from inner exploration to inner awakening.',
  },
  'the-lions-bank-account': {
    name: "The Lion's Bank Account",
    alternativeHeadline:
      "Stop Chasing Rats, Start Hunting Deer — Your first salary is not a flex. It's a trap.",
    description:
      "A bold, provocative book with the disruptive reality: your first salary is not a flex. It challenges the salaried-rat mindset and shows how to build the lion's bank account.",
  },
  'q-minds': {
    name: 'Q Minds: Supra Sapiens',
    alternativeHeadline: 'Empowering Young Minds to Become Supra Sapiens in the Age of AI',
    description:
      'Spanning 217 comprehensive pages, a definitive masterwork on Whole-Brain Quantum Intelligence, covering Heguru, photographic memory, and alpha learning.',
    numberOfPages: 217,
  },
  'heguru-parenting-mini-book': {
    name: 'Heguru Parenting Mini Book',
    alternativeHeadline: 'A Calm, Connected Guide for Raising Brighter Children (Ages 0–6)',
    description:
      'A comprehensive, science-backed manual introducing the celebrated Heguru Japanese right-brain education method to parents, focused on early developmental windows.',
  },
  'the-future-mind': {
    name: 'The Future Mind',
    alternativeHeadline: 'Nurturing Potential in a New Era — Heguru India x Japan',
    description:
      "A transformative treatise on unlocking children's innate genius in a fast-evolving era, developed in collaboration with Heguru Japan pioneers Ruiko Hamma and Hirotada Hamma.",
  },
  'heguru-parenting-master-book': {
    name: 'Heguru Parenting Master Book',
    alternativeHeadline: 'A Calm, Connected Guide for Raising Brighter Children (Ages 0–12)',
    description:
      'The definitive master handbook on Heguru whole-brain education, spanning from infancy to age 12 with 12 core parts, providing a complete parenting framework.',
  },
  'the-visionary-leader': {
    name: 'The Visionary Leader',
    alternativeHeadline:
      'Celebrating the Leader Behind Mighty Minds — Leadership Journey, Milestones & Recognition',
    description:
      'A commemorative monograph celebrating the transformative journey of Dr. J. Arawindhan — an engineer who became an educationist, an institution builder, and a visionary leader.',
  },
  'financial-intelligence': {
    name: 'Financial Intelligence (FI)',
    alternativeHeadline:
      'Resource Stewardship, Value Creation, and Practical Wealth Literacy for the Young Mind',
    description:
      'Bridging a gap in traditional school curricula, this book introduces financial wisdom as an essential ninth intelligence in the Dasavadam model.',
  },
  'emotional-intelligence': {
    name: 'Emotional Intelligence (EI)',
    alternativeHeadline:
      'Mastering the Inner Weather: Self-Regulation, Empathy & Conscious Choice',
    description:
      'A core pillar of the Dasavadam curriculum, offering a systematic roadmap for mastering intrapersonal and interpersonal intelligence in children and young people.',
  },
  'my-yellow-book': {
    name: 'My Yellow Book',
    alternativeHeadline: 'My Guru – My Value – Buddham, Dharmam, Sangham Saranam Gacchami',
    description:
      'A foundational anchor of the Multiple Intelligence Way (MI WAY), establishing student consciousness upon the sacred exposition of guru, values, and refuge.',
  },
  'my-white-book': {
    name: 'My White Book',
    alternativeHeadline:
      'Every child is not same-same... Our child needs WOW Individual Intelligence-based schooling',
    description:
      'The flagship student companion journal embodying WOW Individual Intelligence, with personalized Multiple Intelligence mapping (MI WAY) across 9+ dimensions.',
  },
  'my-green-book': {
    name: 'My Green Book',
    alternativeHeadline: 'Dream to Destiny — With All Love, Joy & Happiness',
    description:
      'Carrying the personal mentorship of Dr. J. Arawindhan ("With All Love, Joy & Happiness — Chief Mentor"), guiding adolescent transformation from dream to destiny.',
  },
};

export function getBookSchema(slug: string, lang: Language) {
  const meta = BOOK_SCHEMA_METADATA[slug];
  if (!meta) return null;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `https://arawindhan.com/${lang}/books/${slug}#webpage`,
        url: `https://arawindhan.com/${lang}/books/${slug}`,
        name: meta.name,
        inLanguage: lang,
        isPartOf: {
          '@id': 'https://arawindhan.com/#website',
        },
        breadcrumb: {
          '@id': `https://arawindhan.com/${lang}/books/${slug}#breadcrumb`,
        },
        mainEntity: {
          '@id': `https://arawindhan.com/${lang}/books/${slug}#book`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://arawindhan.com/${lang}/books/${slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: lang === 'ta' ? 'முகப்பு' : 'Home',
            item: `https://arawindhan.com/${lang}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: lang === 'ta' ? 'நூல்கள்' : 'Books',
            item: `https://arawindhan.com/${lang}/books`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: meta.name,
            item: `https://arawindhan.com/${lang}/books/${slug}`,
          },
        ],
      },
      {
        '@type': 'Book',
        '@id': `https://arawindhan.com/${lang}/books/${slug}#book`,
        name: meta.name,
        alternativeHeadline: meta.alternativeHeadline,
        url: `https://arawindhan.com/${lang}/books/${slug}`,
        description: meta.description,
        author: {
          '@id': 'https://arawindhan.com/#person',
        },
        mainEntityOfPage: {
          '@id': `https://arawindhan.com/${lang}/books/${slug}#webpage`,
        },
        ...(meta.numberOfPages ? { numberOfPages: meta.numberOfPages } : {}),
      },
      {
        '@type': 'Person',
        '@id': 'https://arawindhan.com/#person',
        name: 'Dr. J. Arawindhan',
        url: 'https://arawindhan.com/en',
      },
    ],
  };
}
