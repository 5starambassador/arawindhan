import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arawindhan.com'),
  title: {
    default: 'Arawindhan | Official Website of Dr. J. Arawindhan',
    template: '%s | Dr. J. Arawindhan',
  },
  description:
    'Official website and digital authority platform documenting the biography, educational innovations, books, institutions, and spiritual work of Dr. J. Arawindhan (Arawindhan).',
  applicationName: 'Dr. J. Arawindhan',
  keywords: [
    'Arawindhan',
    'Dr. J. Arawindhan',
    'Dr Arawindhan',
    'Arawindhan Achariya',
    'Arawindhan Puducherry',
    'www.arawindhan.com',
  ],
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
  verification: {
    google: ['KzoV9O6Wfc9djVK0VSqz3S9X1Zf77S5wD5qrB__DHuY', 'google7ed5eeadd0eb2ab5'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
