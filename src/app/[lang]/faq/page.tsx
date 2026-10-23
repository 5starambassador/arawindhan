import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { faqsList } from '@/data/faqs';
import { SectionHeader } from '@/components/SectionHeader';
import { StructuredData } from '@/components/StructuredData';
import { Language } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  const schemaFaqs = faqsList.map((f) => ({
    question: f.question[lang],
    answer: f.answer[lang],
  }));

  return (
    <div className="section-py">
      <StructuredData type="FAQPage" data={{ faqs: schemaFaqs }} />
      <div className="container" style={{ maxWidth: '960px' }}>
        <SectionHeader
          badge={lang === 'ta' ? 'தேடுபொறி & AI வினா-விடை' : 'AEO & ANSWER ENGINE HUB'}
          title={lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)' : 'Authoritative Answers to Common Inquiries'}
          subtitle={lang === 'ta' ? 'செயற்கை நுண்ணறிவு, குரல் தேடல் மற்றும் ஆய்வாளர்களுக்கான நேரடி, சரிபார்க்கப்பட்ட பதில்கள்.' : 'Concise, verifiable answers structured for researchers, public discovery, and AI generative search engines.'}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {faqsList.map((item) => (
            <div key={item.id} className="card-premium" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--gold-glow)', fontWeight: 800, textTransform: 'uppercase' }}>
                  {item.category}
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 700 }}>
                  ✓ {lang === 'ta' ? 'சரிபார்க்கப்பட்ட பதில்' : 'Verified Fact'}
                </span>
              </div>

              <h3 className="font-serif heading-gold" style={{ fontSize: '1.35rem', marginBottom: '1rem', lineHeight: 1.35, fontWeight: 800 }}>
                {item.question[lang]}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                {item.answer[lang]}
              </p>

              {item.relatedLink && (
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem' }}>
                  <Link
                    href={`/${lang}${item.relatedLink}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--gold-glow)',
                      fontWeight: 700,
                      fontSize: '0.86rem',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{lang === 'ta' ? 'மேலும் விரிவாக அறிய' : 'Explore Detailed Topic Page'}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
