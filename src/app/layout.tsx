import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arawindhan.com'),
  title: 'Arawindhan | Official Website of Dr. J. Arawindhan',
  description:
    'Official website and digital authority platform documenting the biography, educational innovations, books, institutions, and spiritual work of Dr. J. Arawindhan (Arawindhan).',
  keywords: [
    'Arawindhan',
    'Dr. J. Arawindhan',
    'Dr Arawindhan',
    'Arawindhan Achariya',
    'Arawindhan Puducherry',
    'www.arawindhan.com',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
