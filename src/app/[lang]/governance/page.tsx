import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function GovernancePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang = resolved?.lang === 'ta' ? 'ta' : 'en';
  redirect(`/${lang}`);
}
