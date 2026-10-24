import HomePage from './[lang]/page';
import LangLayout from './[lang]/layout';

export default async function RootPage() {
  return (
    <LangLayout params={Promise.resolve({ lang: 'en' })}>
      <HomePage params={Promise.resolve({ lang: 'en' })} />
    </LangLayout>
  );
}
