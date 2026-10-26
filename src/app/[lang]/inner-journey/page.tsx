import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Sun, Feather, Compass, ShieldCheck, Quote, Calendar, ArrowRight } from 'lucide-react';
import { innerJourneyData } from '@/data/innerJourney';
import { SectionHeader } from '@/components/SectionHeader';
import { ClaimBadge } from '@/components/ClaimBadge';
import { Language } from '@/types';
import type { Metadata } from 'next';

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
      title: 'உள்முகப் பயணம் & ஆன்மீக நிலை | முனைவர் ஜே. அரவிந்தன் (Arawindhan)',
      description:
        'முனைவர் ஜே. அரவிந்தன் (மகா அவதானி ஸ்ரீ ஆச்சாரியா அரவிந்தன் குருஜி) அவர்களின் ஆன்மீக விழிப்புணர்வு, திவ்ய யோகம் மற்றும் அகப்பயணத் தத்துவம்.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta/inner-journey',
        languages: {
          en: 'https://www.arawindhan.com/en/inner-journey',
          ta: 'https://www.arawindhan.com/ta/inner-journey',
          'x-default': 'https://www.arawindhan.com/en/inner-journey',
        },
      },
      openGraph: {
        title: 'உள்முகப் பயணம் & திவ்ய யோகம் | முனைவர் ஜே. அரவிந்தன்',
        description: 'முனைவர் ஜே. அரவிந்தன் அவர்களின் ஆன்மீக விழிப்புணர்வு மற்றும் திவ்ய யோகம்.',
        url: 'https://www.arawindhan.com/ta/inner-journey',
        siteName: 'Dr. J. Arawindhan Official Platform',
      },
    };
  }

  return {
    title: 'Inner Journey & Spiritual Dimensions | Dr. J. Arawindhan — Divya Yogam',
    description:
      'Spiritual awakening, Mahavadhani GuruG awakening, Divya Yogam, and inner consciousness philosophy of Dr. J. Arawindhan (Arawindhan).',
    alternates: {
      canonical: 'https://www.arawindhan.com/en/inner-journey',
      languages: {
        en: 'https://www.arawindhan.com/en/inner-journey',
        ta: 'https://www.arawindhan.com/ta/inner-journey',
        'x-default': 'https://www.arawindhan.com/en/inner-journey',
      },
    },
    openGraph: {
      title: 'Inner Journey & Spiritual Dimensions | Dr. J. Arawindhan',
      description:
        'Explore the spiritual realization, Divya Yogam, and inner dimensions of Dr. J. Arawindhan.',
      url: 'https://www.arawindhan.com/en/inner-journey',
      siteName: 'Dr. J. Arawindhan Official Platform',
    },
  };
}

export default async function InnerJourneyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  const innerJourneySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#webpage`,
        url: `https://www.arawindhan.com/${lang}/inner-journey`,
        name:
          lang === 'ta'
            ? 'உள்முகப் பயணம் & ஆன்மீக நிலை | திவ்ய யோகம் & சந்தோஷி ஸ்ரீ அரவிந்தன் ஜி'
            : 'Inner Journey | Divya Yogam & Santoshi Shri Arawindhan ji',
        description:
          'Divya Yogam, the inner journey founded by Santoshi Shri Arawindhan ji (Dr. J. Arawindhan) in 2000: the Seven-Step Inner Journey, Five Principles, Soul Evolution Path, Maha Shambala Puducherry and eleven foundational teachings.',
        inLanguage: lang,
        isPartOf: {
          '@id': 'https://www.arawindhan.com/#website',
        },
        about: [
          {
            '@id': `https://www.arawindhan.com/${lang}/inner-journey#divya-yogam`,
          },
          {
            '@id': 'https://www.arawindhan.com/#person',
          },
        ],
        mainEntity: {
          '@id': `https://www.arawindhan.com/${lang}/inner-journey#divya-yogam`,
        },
        primaryImageOfPage: {
          '@id': `https://www.arawindhan.com/${lang}/inner-journey#primaryimage`,
        },
        image: {
          '@id': `https://www.arawindhan.com/${lang}/inner-journey#primaryimage`,
        },
        breadcrumb: {
          '@id': `https://www.arawindhan.com/${lang}/inner-journey#breadcrumb`,
        },
        mentions: [
          {
            '@id': `https://www.arawindhan.com/${lang}/inner-journey#seven-steps`,
          },
          {
            '@id': `https://www.arawindhan.com/${lang}/inner-journey#five-principles`,
          },
          {
            '@id': `https://www.arawindhan.com/${lang}/inner-journey#phases`,
          },
          {
            '@id': `https://www.arawindhan.com/${lang}/inner-journey#mission`,
          },
          {
            '@id': `https://www.arawindhan.com/${lang}/inner-journey#paths`,
          },
          {
            '@id': `https://www.arawindhan.com/${lang}/inner-journey#soul-evolution-path`,
          },
          {
            '@id': `https://www.arawindhan.com/${lang}/inner-journey#eleven-thoughts`,
          },
        ],
      },
      {
        '@type': 'ImageObject',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#primaryimage`,
        url: 'https://www.arawindhan.com/images/santoshi_shri_arawindhan.png',
        contentUrl: 'https://www.arawindhan.com/images/santoshi_shri_arawindhan.png',
        caption: 'Santoshi Shri Arawindhan ji',
        about: {
          '@id': 'https://www.arawindhan.com/#person',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: lang === 'ta' ? 'முகப்பு' : 'Home',
            item: `https://www.arawindhan.com/${lang}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: lang === 'ta' ? 'உள்முகப் பயணம்' : 'Inner Journey',
            item: `https://www.arawindhan.com/${lang}/inner-journey`,
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#divya-yogam`,
        name: 'Divya Yogam',
        url: `https://www.arawindhan.com/${lang}/inner-journey`,
        foundingDate: '2000',
        slogan: 'Develop the human. Awaken the being.',
        description:
          "Conceived in 2000 alongside Dr. J. Arawindhan's educational journey, Divya Yogam is a path of inner stillness, clarity and conscious living built on the inquiry: what is the highest possibility within a human being?",
        founder: {
          '@id': 'https://www.arawindhan.com/#person',
        },
        parentOrganization: {
          '@id': 'https://www.arawindhan.com/#organization',
        },
        areaServed: {
          '@type': 'Place',
          name: 'Puducherry, India',
        },
        knowsAbout: [
          'Meditation',
          'Yoga',
          'Consciousness',
          'Oneness Meditation',
          'Conscious living',
          'Spiritual wellbeing',
        ],
        hasOfferCatalog: {
          '@id': `https://www.arawindhan.com/${lang}/inner-journey#paths`,
        },
        event: {
          '@id': `https://www.arawindhan.com/${lang}/inner-journey#maha-shambala`,
        },
      },
      {
        '@type': 'ItemList',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#seven-steps`,
        name: 'The Seven-Step Inner Journey',
        description:
          'Each step moves the seeker deeper, from seeing oneself clearly to living with awareness every day.',
        numberOfItems: 7,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Awareness (See Within)',
            description: 'Recognise thoughts, emotions, and habitual mental patterns.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Acceptance (Meet Yourself)',
            description: 'Embrace yourself completely without harsh self-judgement.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Alignment (Come Into Balance)',
            description: 'Bring body, mind, intellect, and inner life into quiet harmony.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Stillness (Be Present)',
            description: 'Move beyond constant repetitive thought and restlessness.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Experience (Go Deeper)',
            description: 'Transform intellectual understanding into direct inner perception.',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Oneness (Feel Connected)',
            description: 'Dissolve artificial separation towards an interconnected universe.',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'Awakening (Live Consciously)',
            description: 'Carry unshakeable inner awareness into family, work, and service.',
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#five-principles`,
        name: 'Five Principles, One Way of Living',
        description:
          'Embracing the whole human being through awareness, stillness, and conscious action.',
        numberOfItems: 5,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Awareness',
            description: 'See yourself clearly without illusion or reaction.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Stillness',
            description: 'Create space within amidst worldly noise.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Balance',
            description: 'Bring every dimension of life (body, mind, work) into harmony.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Oneness',
            description: 'Experience connection beyond the individual ego-self.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Conscious Living',
            description: 'Let awareness guide everyday choices, speech, and actions.',
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#phases`,
        name: 'From Knowing More to Becoming More: Twenty-Five Years, One Direction',
        description:
          'Seven phases bringing the outer journey (education, human potential, leadership, wellbeing) and the inner journey (meditation, consciousness, Divya Yogam) into harmony.',
        numberOfItems: 7,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Phase I: Education (Outer Journey)',
            description: 'Learning reimagined: reimagining learning beyond academics into life mastery.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Phase II: Human Potential (Outer Journey)',
            description: 'Possibilities expanded: unlocking intelligence, creativity, memory, emotional and life skills.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Phase III: Leadership (Outer Journey)',
            description: 'People empowered: creating conscious, capable, and value-driven individuals.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Phase IV: Wellbeing (Outer Journey)',
            description: 'Life harmonised: bringing deep balance to body, mind, emotion, and everyday life.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Phase V: Meditation (Inner Journey)',
            description: 'The journey turns inward through stillness, breath, and pure awareness.',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Phase VI: Consciousness (Inner Journey)',
            description: 'Awareness deepens: exploring the deeper spiritual dimensions of human existence.',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'Phase VII: Divya Yogam (Inner Journey)',
            description: 'The journey within: bringing the outer journey and the inner journey into sacred harmony.',
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#mission`,
        name: 'Awaken the Inner Being. Elevate the Human Experience.',
        description:
          'To nurture a world of conscious, balanced and awakened individuals who recognise their inner potential, live with greater awareness and contribute to the wellbeing of the world around them.',
        numberOfItems: 6,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Awaken',
            description: 'Become conscious of the true self.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Align',
            description: 'Bring body, mind, emotion and intellect into harmony.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Experience',
            description: 'Discover the transformative power of stillness.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Evolve',
            description: 'Grow beyond limitation into higher possibilities.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Express',
            description: 'Carry inner clarity into relationships and work.',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Contribute',
            description: 'Transform personal awakening into collective wellbeing.',
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#paths`,
        name: 'Choose Your Path Within',
        description:
          'Different practices. Different starting points. One deeper purpose: to experience life more consciously.',
        numberOfItems: 5,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Yoga: Awaken the Body',
                serviceType: 'Yoga',
                description:
                  'Cultivate physical awareness, balance, and disciplined movement as a sacred foundation for inner wellbeing.',
                provider: {
                  '@id': `https://www.arawindhan.com/${lang}/inner-journey#divya-yogam`,
                },
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Golden Smile Meditation: Quiet the Mind',
                serviceType: 'Meditation',
                description:
                  'Create an inward space for stillness, joy, and deeper awareness. Includes AOM (Achariya Only Meditation) and Oneness Meditation.',
                provider: {
                  '@id': `https://www.arawindhan.com/${lang}/inner-journey#divya-yogam`,
                },
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Retreats: Step Away. Go Within.',
                serviceType: 'Spiritual retreat',
                description:
                  'Immersive residential experiences that create quiet space for reflection, practice, renewal, and profound inner connection.',
                provider: {
                  '@id': `https://www.arawindhan.com/${lang}/inner-journey#divya-yogam`,
                },
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Courses: Learn. Practise. Transform.',
                serviceType: 'Spiritual and conscious-living courses',
                description:
                  'Structured modules that translate spiritual wisdom into practical tools for conscious daily living, family, and leadership.',
                provider: {
                  '@id': `https://www.arawindhan.com/${lang}/inner-journey#divya-yogam`,
                },
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 5,
            item: {
              '@type': 'Offer',
              itemOffered: {
                '@id': `https://www.arawindhan.com/${lang}/inner-journey#avadhani-program`,
              },
            },
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#soul-evolution-path`,
        name: 'The Soul Evolution Path (The Sacred Ascent)',
        numberOfItems: 6,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Avadhani',
            description: 'Foundation & Sensory Integration',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Ayngara',
            description: 'Transformation of Instinct to Consciousness',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Anantha',
            description: 'Expansion of Mind & Infinite Stillness',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Amirtha',
            description: 'Pranic Vitality & Nectar of Immortality',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Amogha',
            description: 'Infallible Spiritual Purpose & Power',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Adwaita',
            description: 'Non-Dual Realisation & Universal Oneness',
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#eleven-thoughts`,
        name: 'Eleven Thoughts at the Heart of His Teaching',
        description: 'Eleven foundational reflections with practical guidance on living consciously.',
        numberOfItems: 11,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Quotation',
              text: 'What is the highest possibility within a human being?',
              description: 'Every learning and growth effort begins by asking what this person could yet become.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Quotation',
              text: 'Develop the human. Awaken the being.',
              description:
                'Two movements held together: outer development of skills and character, with inner awakening of awareness.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Quotation',
              text: 'Knowledge develops the mind. Experience develops wisdom. Awareness transforms life.',
              description:
                'Information changes what we know; lived experience changes how we see; awareness changes how we live.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'Quotation',
              text: 'Beyond achievement. Towards awareness.',
              description:
                'Achievement is not rejected; it is placed in a larger frame of how consciously we are living.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 5,
            item: {
              '@type': 'Quotation',
              text: 'The journey is inward. The transformation is timeless.',
              description: 'Outer change is shaped by circumstance; change that begins within becomes part of who we are.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 6,
            item: {
              '@type': 'Quotation',
              text: 'The Divine is not far away. The journey to experience it begins within.',
              description: 'The Divine is an experience discovered through stillness, closer than our own breath.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 7,
            item: {
              '@type': 'Quotation',
              text: 'Transformation is not becoming someone else. It is becoming more aware of who you are.',
              description: 'Growth is a process of uncovering, not imitating or borrowing.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 8,
            item: {
              '@type': 'Quotation',
              text: 'It is not a belief system to be followed. It is an experience to be explored.',
              description: 'Divya Yogam invites inquiry and direct practice over dogma.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 9,
            item: {
              '@type': 'Quotation',
              text: 'Not an escape from life. A deeper way of experiencing it.',
              description: 'Spiritual practice is a way of meeting relationships and duties with greater presence.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 10,
            item: {
              '@type': 'Quotation',
              text: 'When we are healthy, we become happy. When we are happy, we become purposeful. When we are purposeful, we become powerful.',
              description: 'Wellbeing is the first link in a chain that ends in purpose and spiritual power.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 11,
            item: {
              '@type': 'Quotation',
              text: 'Begin where you are. Go as deep as you are ready.',
              description: 'There is no rigid prerequisite; the path honors each seeker’s natural pace.',
              creator: {
                '@id': 'https://www.arawindhan.com/#person',
              },
            },
          },
        ],
      },
      {
        '@type': 'Event',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#maha-shambala`,
        name: 'Maha Shambala Puducherry 2026',
        description:
          'The annual flagship spiritual convergence, held since 2012, gathering thousands of seekers, teachers and families in Puducherry. Features mass Oneness Meditation, Seven Chakra pyramid energy activation, and discourses on conscious living by Santoshi Shri Arawindhan.',
        startDate: '2026-12-21',
        endDate: '2026-12-21',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventSchedule: {
          '@type': 'Schedule',
          startDate: '2012-12-21',
          repeatFrequency: 'P1Y',
          byMonth: 12,
          byMonthDay: 21,
          scheduleTimezone: 'Asia/Kolkata',
        },
        location: {
          '@type': 'Place',
          name: 'Puducherry',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Puducherry',
            addressRegion: 'Puducherry',
            addressCountry: 'IN',
          },
        },
        image: 'https://www.arawindhan.com/images/shambala_book.jpg',
        organizer: {
          '@id': `https://www.arawindhan.com/${lang}/inner-journey#divya-yogam`,
        },
        performer: {
          '@id': 'https://www.arawindhan.com/#person',
        },
        url: `https://www.arawindhan.com/${lang}/inner-journey`,
      },
      {
        '@type': 'Book',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#book-maha-shambala`,
        name: 'Maha Shambala: The Mystery Behind Awakening',
        image: 'https://www.arawindhan.com/images/shambala_book.jpg',
        author: {
          '@id': 'https://www.arawindhan.com/#person',
        },
        about: [
          {
            '@id': `https://www.arawindhan.com/${lang}/inner-journey#maha-shambala`,
          },
          {
            '@id': `https://www.arawindhan.com/${lang}/inner-journey#divya-yogam`,
          },
        ],
        inLanguage: lang,
      },
      {
        '@type': 'Service',
        '@id': `https://www.arawindhan.com/${lang}/inner-journey#avadhani-program`,
        name: 'Avadhani: A Natural Healthy Lifestyle Program',
        serviceType: 'Holistic healthcare and natural lifestyle program',
        description:
          'A simple, natural daily discipline for students, teachers, parents and families, rooted in traditional Indian wellness practices: early rising before sunrise, oil pulling, Saptha Mahakriya, Kadukkai Podi (Terminalia chebula) and quiet morning meditation.',
        audience: {
          '@type': 'Audience',
          audienceType: 'Students, teachers, parents and families',
        },
        provider: {
          '@id': `https://www.arawindhan.com/${lang}/inner-journey#divya-yogam`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(innerJourneySchema) }}
      />
      <div className="section-py">
      <div className="container" style={{ maxWidth: '1100px' }}>
        <SectionHeader
          badge={lang === 'ta' ? 'ஆன்மீகத் தத்துவம் & மெய்யறிவு' : 'DIVYA YOGAM & THE INNER JOURNEY'}
          title={innerJourneyData.spiritualTitle[lang]}
          subtitle={innerJourneyData.spiritualRoles[lang]}
        />

        {/* Central Creed & Spiritual Portrait Showcase */}
        <div
          className="card-premium"
          style={{
            padding: '2.5rem',
            border: '1px solid #FDE68A',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)',
            boxShadow: '0 20px 40px -15px rgba(217, 119, 6, 0.1), 0 0 0 1px rgba(253, 230, 138, 0.6)',
            marginBottom: '4rem',
            borderRadius: '20px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Spiritual Portrait */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 'min(280px, calc(100vw - 4rem))',
                  aspectRatio: '1 / 1',
                  margin: '0 auto',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '3px solid #D97706',
                  boxShadow: '0 25px 45px -12px rgba(217, 119, 6, 0.35), 0 0 0 6px #FFFBEB',
                  background: '#0B132B',
                }}
              >
                <img
                  src="/images/santoshi_shri_arawindhan.png"
                  alt={innerJourneyData.spiritualTitle[lang]}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '0.6rem',
                    background: 'linear-gradient(to top, rgba(11, 19, 43, 0.95), rgba(11, 19, 43, 0.4) 60%, transparent)',
                    color: '#FEF3C7',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  DIVYA YOGAM • ESTD. 2000
                </div>
              </div>
            </div>

            {/* Right: Central Creed & Narrative */}
            <div>
              <div
                style={{
                  display: 'inline-block',
                  background: '#FFFBEB',
                  border: '1px solid #FDE68A',
                  color: '#B45309',
                  padding: '0.25rem 0.8rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.75rem',
                }}
              >
                {lang === 'ta' ? 'ஆன்மீக வாழ்வியல் முழக்கம்' : 'THE CENTRAL CREED'}
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                  fontWeight: 700,
                  color: '#0F172A',
                  lineHeight: 1.25,
                  letterSpacing: '-0.015em',
                  marginBottom: '0.75rem',
                }}
              >
                {innerJourneyData.centralCreed[lang]}
              </h2>

              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.18rem',
                  color: '#B45309',
                  fontStyle: 'italic',
                  marginBottom: '1.25rem',
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                {innerJourneyData.centralQuestion[lang]}
              </div>

              <p
                style={{
                  color: '#334155',
                  fontSize: '1.02rem',
                  lineHeight: 1.8,
                  marginBottom: '1.25rem',
                  fontWeight: 400,
                }}
              >
                {innerJourneyData.foundationStory[lang]}
              </p>

              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '0.85rem 1.15rem',
                  fontSize: '0.88rem',
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Sparkles size={16} color="#D97706" />
                <span>
                  {lang === 'ta'
                    ? 'ஆன்மீகம் என்பது உலகைத் துறப்பது அல்ல; விழிப்புணர்வுடன் உலகை வாழ்வது.'
                    : 'Spirituality is not leaving the world; it is living consciously within it.'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The Seven-Step Inner Journey */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'உள்முகப் பரிணாமம்' : 'THE SEVEN STEPS'}
            title={lang === 'ta' ? 'ஏழு படிநிலை உள்முகப் பயணம்' : 'The Seven-Step Inner Journey'}
            subtitle={lang === 'ta' ? 'தன்னை அறிவதிலிருந்து தினமும் விழிப்புணர்வுடன் வாழ்வது வரையிலான படிநிலை மாற்றம்.' : 'Each step moves the seeker deeper—from seeing oneself clearly to living with awareness every day.'}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {innerJourneyData.sevenStepJourney.map((st) => (
              <div
                key={st.step}
                className="card-premium"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1.25rem 1.75rem',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    minWidth: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#FFFBEB',
                    border: '1.5px solid #FDE68A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B45309',
                    fontWeight: 800,
                    fontSize: '1rem',
                    fontFamily: 'monospace',
                  }}
                >
                  {st.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#0F172A',
                        margin: 0,
                      }}
                    >
                      {st.title[lang]}
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: '#B45309', fontStyle: 'italic', fontWeight: 600 }}>
                      ({st.sub[lang]})
                    </span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                    {st.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Five Principles */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'வாழ்வியல் நெறிமுறைகள்' : 'FIVE PRINCIPLES'}
            title={lang === 'ta' ? 'ஐந்து தத்துவங்கள்: ஒரே வாழ்க்கை முறை' : 'Five Principles • One Way of Living'}
            subtitle={lang === 'ta' ? 'உடல், மனம், இதயம், புத்தி மற்றும் விழிப்புணர்வு ஒருங்கிணைந்த வாழ்வு.' : 'Embracing the whole human being through awareness, stillness, and conscious action.'}
          />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
            }}
          >
            {innerJourneyData.fivePrinciples.map((p) => (
              <div
                key={p.number}
                className="card-premium"
                style={{
                  flex: '1 1 300px',
                  maxWidth: '340px',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div
                  style={{
                    color: '#B45309',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    fontFamily: 'monospace',
                    marginBottom: '0.4rem',
                  }}
                >
                  {p.number}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '0.5rem',
                  }}
                >
                  {p.title[lang]}
                </h4>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                  {p.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Twenty-Five Years, One Direction (The 7-Phase Journey) */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? '25 ஆண்டுப் பயணம்' : 'TWENTY-FIVE YEARS, ONE DIRECTION'}
            title={lang === 'ta' ? 'புற உலக சாதனைகளிலிருந்து அக விழிப்புணர்வை நோக்கி' : 'From Knowing More to Becoming More'}
            subtitle={lang === 'ta' ? 'ஒவ்வொரு அத்தியாயமும் அடுத்த அத்தியாயத்திற்கு வழிகோலியது — கற்கும் விதம் முதல் வாழும் விதம் வரை.' : 'From achieving outwardly to awakening inwardly. Bringing the outer journey and inner journey into sacred harmony.'}
          />

          {/* Outer Journey: 4 Phases (Balanced 4-col / 2x2 grid) */}
          <div style={{ marginBottom: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.15rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#475569',
                  background: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '999px',
                }}
              >
                {lang === 'ta' ? 'புறப் பயணம் (படிநிலைகள் I – IV)' : 'THE OUTER JOURNEY (PHASES I – IV)'}
              </span>
              <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                {lang === 'ta' ? 'கல்வி, மனித ஆற்றல், தலைமைத்துவம் & நல்வாழ்வு' : 'Education, human potential, leadership & wellbeing'}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem' }}>
              {innerJourneyData.journeyPhases.filter((p) => p.realm === 'outer').map((phase) => (
                <div
                  key={phase.num}
                  className="card-premium"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    background: '#FFFFFF',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '0.95rem', color: '#64748B' }}>
                      PHASE {phase.num}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '999px',
                        background: '#F1F5F9',
                        color: '#475569',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {lang === 'ta' ? 'புறப் பயணம்' : 'Outer Journey'}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>
                    {phase.title[lang]}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: '#B45309', fontStyle: 'italic', marginBottom: '0.5rem', fontWeight: 600 }}>
                    {phase.subtitle[lang]}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    {phase.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inner Journey: 3 Phases (Balanced 3-col gold cards) */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.15rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#B45309',
                  background: '#FFFBEB',
                  border: '1px solid #FDE68A',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '999px',
                }}
              >
                {lang === 'ta' ? 'அகப் பயணம் (படிநிலைகள் V – VII)' : 'THE INNER JOURNEY (PHASES V – VII)'}
              </span>
              <span style={{ fontSize: '0.84rem', color: '#B45309', fontStyle: 'italic', fontWeight: 600 }}>
                {lang === 'ta' ? 'தியானம், விழிப்புணர்வு & திவ்ய யோகம்' : 'Meditation, consciousness & sacred harmony'}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}>
              {innerJourneyData.journeyPhases.filter((p) => p.realm === 'inner').map((phase) => (
                <div
                  key={phase.num}
                  className="card-premium"
                  style={{
                    padding: '1.65rem',
                    borderRadius: '16px',
                    border: '1.5px solid #FDE68A',
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFBEB 100%)',
                    boxShadow: '0 8px 24px -6px rgba(217, 119, 6, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '0.95rem', color: '#B45309' }}>
                      PHASE {phase.num}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '999px',
                        background: '#FEF3C7',
                        color: '#92400E',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {lang === 'ta' ? 'அகப் பயணம்' : 'Inner Journey'}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>
                    {phase.title[lang]}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: '#B45309', fontStyle: 'italic', marginBottom: '0.5rem', fontWeight: 600 }}>
                    {phase.subtitle[lang]}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    {phase.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission: 5 Pillars & 6 Gateways */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'நோக்கமும் கொள்கையும்' : 'VISION & MISSION'}
            title={innerJourneyData.visionMission.vision[lang]}
            subtitle={innerJourneyData.visionMission.visionStatement[lang]}
          />

          {/* 5 Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {innerJourneyData.visionMission.pillars.map((pil) => (
              <div
                key={pil.num}
                className="card-premium"
                style={{
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    margin: '0 auto 0.65rem auto',
                    borderRadius: '50%',
                    background: '#FFFBEB',
                    border: '1.5px solid #FDE68A',
                    color: '#B45309',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                  }}
                >
                  {pil.num}
                </div>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                  {pil.title[lang]}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  {pil.focus[lang]}
                </div>
              </div>
            ))}
          </div>

          {/* 6 Mission Gateways */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {innerJourneyData.visionMission.gateways.map((gate, gIdx) => (
              <div
                key={gIdx}
                className="card-premium"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                }}
              >
                <Sparkles size={18} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    {gate.title[lang]}
                  </div>
                  <div style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.55 }}>
                    {gate.desc[lang]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paths & Offerings + Soul Evolution Path */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'ஆன்மீகப் பாதைகள்' : 'PATHS & OFFERINGS'}
            title={lang === 'ta' ? 'அகத்தை நோக்கி உங்கள் பாதையைத் தேர்வு செய்யுங்கள்' : 'Choose Your Path Within'}
            subtitle={lang === 'ta' ? 'வெவ்வேறு பயிற்சிகள். வெவ்வேறு தொடக்கப் புள்ளிகள். ஒரே உன்னத நோக்கம்: விழிப்புணர்வுடன் வாழ்வது.' : 'Different practices. Different starting points. One deeper purpose: to experience life more consciously.'}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {innerJourneyData.pathsAndOfferings.paths.map((p) => (
              <div
                key={p.id}
                className="card-premium"
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <span style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', display: 'block' }}>
                  PATH {p.id}
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.65rem' }}>
                  {p.title[lang]}
                </h4>
                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                  {p.desc[lang]}
                </p>
              </div>
            ))}
          </div>

          {/* Soul Evolution Path (6 Stages - Balanced 6 Across) */}
          <div
            className="card-premium"
            style={{
              padding: '2rem 2.25rem',
              borderRadius: '20px',
              border: '1px solid #FDE68A',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFBEB 100%)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ color: '#B45309', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                THE SACRED ASCENT
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', margin: '0.35rem 0' }}>
                {lang === 'ta' ? 'ஆன்மப் பரிணாம வளர்ச்சிப் பாதை' : 'The Soul Evolution Path'}
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.85rem' }}>
              {innerJourneyData.pathsAndOfferings.soulEvolutionPath.map((stage) => (
                <div
                  key={stage.step}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '1.15rem 0.75rem',
                    textAlign: 'center',
                    boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      margin: '0 auto 0.5rem auto',
                      borderRadius: '50%',
                      background: '#FEF3C7',
                      color: '#B45309',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {stage.step}
                  </div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.02rem', marginBottom: '0.2rem' }}>
                    {lang === 'ta' ? stage.ta : stage.name}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', lineHeight: 1.4 }}>
                    {stage.desc[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* In His Words: All Eleven Thoughts (Featured Thought 01 + 5 Balanced Pairs) */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeader
            badge={lang === 'ta' ? 'அவரது அருள்மொழிகள்' : 'IN HIS WORDS'}
            title={lang === 'ta' ? '11 மெய்யறிவு சிந்தனைகள்' : 'Eleven Thoughts at the Heart of His Teaching'}
            subtitle={lang === 'ta' ? 'திவ்ய யோகம் மற்றும் அக உருமாற்றத்தின் 11 முக்கிய தத்துவ முத்துக்கள்.' : 'Eleven foundational reflections with practical guidance on living consciously.'}
          />

          <div className="grid-2">
            {innerJourneyData.elevenThoughts.map((item, idx) => {
              const isFirst = idx === 0;
              return (
                <div
                  key={item.num}
                  className="card-premium"
                  style={{
                    borderRadius: '16px',
                    padding: isFirst ? '2.25rem' : '1.75rem',
                    gridColumn: isFirst ? '1 / -1' : 'auto',
                    border: isFirst ? '1.5px solid #FDE68A' : '1px solid #E2E8F0',
                    background: isFirst ? 'linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 100%)' : '#FFFFFF',
                    boxShadow: isFirst ? '0 10px 30px -10px rgba(217, 119, 6, 0.12)' : undefined,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Quote size={isFirst ? 22 : 18} color="#D97706" />
                    <span style={{ fontSize: '0.78rem', color: '#B45309', fontWeight: 800, letterSpacing: '0.05em' }}>
                      THOUGHT {item.num} {isFirst ? (lang === 'ta' ? '• முதன்மை மெய்யறிவு சிந்தனை' : '• FOUNDATIONAL INQUIRY') : ''}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      color: '#0F172A',
                      fontSize: isFirst ? '1.35rem' : '1.15rem',
                      lineHeight: 1.55,
                      marginBottom: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    {item.quote[lang]}
                  </div>
                  <div style={{ color: '#475569', fontSize: isFirst ? '1rem' : '0.92rem', lineHeight: 1.65 }}>
                    {item.reflection[lang]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Maha Shambala Puducherry & Avadhani Natural Lifestyle Callout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Maha Shambala Card */}
          <div className="card-premium" style={{ border: '1px solid #FDE68A', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{ color: '#B45309', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                ANNUAL CONVERGENCE & SACRED TREATISE
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '90px',
                  height: '130px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '1.5px solid #FDE68A',
                  boxShadow: '0 8px 16px rgba(180, 83, 9, 0.2)',
                  background: '#FFFFFF',
                }}
              >
                <img
                  src="/images/shambala_book.jpg"
                  alt="Maha Shambala - The Mystery Behind Awakening"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '0.35rem',
                  }}
                >
                  {innerJourneyData.mahaShambala.title[lang]}
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#B45309', fontWeight: 700 }}>
                  {lang === 'ta' ? 'அதிகாரப்பூர்வ நூல் & ஆன்மீக சங்கமம்' : 'Official Published Work & Spiritual Convergence'}
                </div>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {innerJourneyData.mahaShambala.description[lang]}
            </p>
            <div style={{ background: '#FAF8F5', padding: '0.85rem 1rem', borderRadius: '8px', fontSize: '0.85rem', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
              <Calendar size={15} color="#D97706" />
              <span>{innerJourneyData.mahaShambala.dateNote}</span>
            </div>
          </div>

          {/* Avadhani Natural Lifestyle Card */}
          <div className="card-premium" style={{ border: '1px solid #E2E8F0', borderRadius: '16px' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{ color: '#059669', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                HOLISTIC HEALTHCARE
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#0F172A',
                marginBottom: '0.5rem',
              }}
            >
              {innerJourneyData.avadhaniProgram.title[lang]}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {innerJourneyData.avadhaniProgram.description[lang]}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Early Rising', 'Oil Pulling', 'Saptha Mahakriya', 'Kadukkai Podi'].map((item) => (
                <span
                  key={item}
                  style={{
                    background: '#F1F5F9',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                    color: '#334155',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section X: The Legacy & A Benediction */}
        <div
          className="card-premium"
          style={{
            padding: '3rem 2.5rem',
            borderRadius: '24px',
            border: '2px solid #FDE68A',
            background: 'linear-gradient(180deg, #FAF8F5 0%, #FFFBEB 100%)',
            textAlign: 'center',
            boxShadow: '0 20px 40px -15px rgba(217, 119, 6, 0.15)',
          }}
        >
          <span style={{ color: '#B45309', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
            THE LEGACY
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              color: '#0F172A',
              margin: '0.5rem 0 1rem 0',
            }}
          >
            {innerJourneyData.legacyAndBenediction.title[lang]}
          </h2>
          <p
            style={{
              color: '#334155',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: '800px',
              margin: '0 auto 2rem auto',
            }}
          >
            {innerJourneyData.legacyAndBenediction.message[lang]}
          </p>

          <div
            style={{
              background: '#FFFFFF',
              border: '1.5px solid #FDE68A',
              borderRadius: '16px',
              padding: '2rem 2.5rem',
              maxWidth: '680px',
              margin: '0 auto',
              boxShadow: '0 8px 24px rgba(217, 119, 6, 0.08)',
            }}
          >
            <div style={{ color: '#B45309', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              {lang === 'ta' ? 'அருளாசி (A BENEDICTION)' : 'A BENEDICTION'}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: '#78350F',
                lineHeight: 1.85,
                whiteSpace: 'pre-line',
                fontWeight: 600,
              }}
            >
              {innerJourneyData.legacyAndBenediction.benediction[lang]}
            </div>
          </div>
        </div>

        {/* ─── Narrative Bridge ─── */}
        <div style={{ maxWidth: '1100px', margin: '4rem auto 0 auto', padding: '2rem 2.5rem', background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFBEB 100%)', border: '1px solid #FDE68A', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
              {lang === 'ta' ? 'தொடர்ந்து அறிய' : 'CONTINUE THE JOURNEY'}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>
              {lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Frequently Asked Questions'}
            </div>
            <div style={{ fontSize: '0.88rem', color: '#64748B' }}>
              {lang === 'ta'
                ? 'தத்துவம், நிறுவனங்கள் அல்லது பாதை குறித்த கேள்விகள் உள்ளதா? FAQ பக்கத்தில் சரிபார்க்கப்பட்ட பதில்களைக் காண்க.'
                : 'Have questions about the philosophy, the institutions, or the path? Find authoritative, AI-ready answers on the FAQ page.'}
            </div>
          </div>
          <Link href={`/${lang}/faq`} className="btn-gold" style={{ flexShrink: 0 }}>
            <span>{lang === 'ta' ? 'FAQ பக்கத்தை காண்க' : 'Visit the FAQ'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

