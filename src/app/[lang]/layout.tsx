import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { ClaimModal } from '@/components/ClaimModal';
import { BookReaderModal } from '@/components/BookReaderModal';
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

  const keywords = [
    'Arawindhan',
    'Dr. J. Arawindhan',
    'Dr Arawindhan',
    'J. Arawindhan',
    'Arawindhan Achariya',
    'Achariya Arawindhan',
    'Arawindhan Puducherry',
    'Aravindan',
    'Dr. J. Aravindan',
    'arawindhan.com',
    'www.arawindhan.com',
    'Santoshi Shri Arawindhan',
    'Mahavadhani Sri Achariya Arawindhan GuruG',
    'முனைவர் ஜே. அரவிந்தன்',
    'அரவிந்தன்',
    'ACHARIYA World Class Education',
    'Educationist Puducherry',
    'Dasavadani Pedagogy',
    'Arawindhan Books',
  ];

  if (lang === 'ta') {
    return {
      title: 'அரவிந்தன் | முனைவர் ஜே. அரவிந்தன் — அதிகாரப்பூர்வ டிஜிட்டல் தளம் (Arawindhan)',
      description:
        'முனைவர் ஜே. அரவிந்தன் (Arawindhan) அவர்களின் அதிகாரப்பூர்வ தளம். ஆச்சாரியா கல்வி நிறுவனங்களின் நிறுவனர், கல்வியியலாளர், மற்றும் 18 கல்லூரிகள், 35 பள்ளிகள், 61+ நிறுவனங்களின் தலைவர்.',
      keywords,
      authors: [{ name: 'Dr. J. Arawindhan', url: 'https://www.arawindhan.com' }],
      creator: 'Dr. J. Arawindhan',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta',
        languages: {
          en: 'https://www.arawindhan.com/en',
          ta: 'https://www.arawindhan.com/ta',
          'x-default': 'https://www.arawindhan.com/en',
        },
      },
      openGraph: {
        type: 'website',
        locale: 'ta_IN',
        url: 'https://www.arawindhan.com/ta',
        siteName: 'Arawindhan (Official Website)',
        title: 'அரவிந்தன் | முனைவர் ஜே. அரவிந்தன் — அதிகாரப்பூர்வ தளம்',
        description:
          'முனைவர் ஜே. அரவிந்தன் அவர்களின் அதிகாரப்பூர்வ தளம். ஆச்சாரியா கல்வி நிறுவனங்களின் நிறுவனர், கல்வியியலாளர், நூலாசிரியர்.',
        images: [
          {
            url: 'https://www.arawindhan.com/images/portrait_spiritual_authentic.jpg',
            width: 1200,
            height: 630,
            alt: 'Dr. J. Arawindhan',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'அரவிந்தன் | முனைவர் ஜே. அரவிந்தன் — அதிகாரப்பூர்வ தளம்',
        description: 'முனைவர் ஜே. அரவிந்தன் அவர்களின் அதிகாரப்பூர்வ தளம்.',
        images: ['https://www.arawindhan.com/images/portrait_spiritual_authentic.jpg'],
      },
      icons: {
        icon: [
          { url: '/favicon.ico', sizes: 'any' },
          { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
          { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
          { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
          { url: '/icon.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
          { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
          { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: ['/favicon.ico'],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      verification: {
        google: 'KzoV9O6Wfc9djVK0VSqz3S9X1Zf77S5wD5qrB__DHuY',
      },
    };
  }

  return {
    metadataBase: new URL('https://www.arawindhan.com'),
    title: 'Arawindhan | Official Website of Dr. J. Arawindhan — Educationist & Founder',
    description:
      'Official website and authority platform of Dr. J. Arawindhan (Arawindhan): Educationist, entrepreneur, author, and founder of ACHARIYA World Class Education (18 colleges, 35 schools, 61+ companies, 600+ world records).',
    keywords,
    authors: [{ name: 'Dr. J. Arawindhan', url: 'https://www.arawindhan.com' }],
    creator: 'Dr. J. Arawindhan',
    alternates: {
      canonical: 'https://www.arawindhan.com/en',
      languages: {
        en: 'https://www.arawindhan.com/en',
        ta: 'https://www.arawindhan.com/ta',
        'x-default': 'https://www.arawindhan.com/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.arawindhan.com/en',
      siteName: 'Arawindhan (Official Website)',
      title: 'Arawindhan | Official Website of Dr. J. Arawindhan — Educationist & Founder',
      description:
        'Official website of Dr. J. Arawindhan: Educationist, entrepreneur, author, and founder of ACHARIYA World Class Education.',
      images: [
        {
          url: 'https://www.arawindhan.com/images/portrait_spiritual_authentic.jpg',
          width: 1200,
          height: 630,
          alt: 'Dr. J. Arawindhan',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Arawindhan | Official Website of Dr. J. Arawindhan — Educationist & Founder',
      description:
        'Official website of Dr. J. Arawindhan: Educationist, entrepreneur, and founder of ACHARIYA World Class Education.',
      images: ['https://www.arawindhan.com/images/portrait_spiritual_authentic.jpg'],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: ['/favicon.ico'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'KzoV9O6Wfc9djVK0VSqz3S9X1Zf77S5wD5qrB__DHuY',
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SZNCD1PEJC" />
        <script
          id="google-tag"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-SZNCD1PEJC');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          id="microsoft-clarity"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "z2o8g6yssf");
            `,
          }}
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="KzoV9O6Wfc9djVK0VSqz3S9X1Zf77S5wD5qrB__DHuY" />
        <meta name="google-site-verification" content="google7ed5eeadd0eb2ab5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body suppressHydrationWarning>
        <StructuredData />
        <Navbar lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <ClaimModal language={lang} />
        <BookReaderModal language={lang} />
      </body>
    </html>
  );
}
