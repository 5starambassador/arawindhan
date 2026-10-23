import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. J. Arawindhan Ji — Global Digital Authority Platform',
  description:
    'Official digital authority platform documenting the biography, educational innovations, books, institutions, and spiritual work of Dr. J. Arawindhan Ji.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
