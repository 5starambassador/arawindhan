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

        {/* ─── Narrative Bridge ─── */}
        <div style={{ maxWidth: '960px', margin: '4rem auto 0 auto', padding: '2rem 2.5rem', background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFBEB 100%)', border: '1px solid #FDE68A', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
              {lang === 'ta' ? 'தொடர்ந்து அறிய' : 'CONTINUE THE JOURNEY'}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>
              {lang === 'ta' ? 'தொடர்பு கொள்ளுங்கள்' : 'Get in Touch'}
            </div>
            <div style={{ fontSize: '0.88rem', color: '#64748B' }}>
              {lang === 'ta'
                ? 'ஆச்சாரியா குழுவுடன் தொடர்பு கொள்ள அல்லது கூட்டாண்மை குறித்து விசாரிக்க தொடர்பு பக்கத்தை காண்க.'
                : 'Ready to connect with the ACHARIYA team, enquire about partnerships, or attend a programme? Visit the contact page.'}
            </div>
          </div>
          <Link href={`/${lang}/contact`} className="btn-gold" style={{ flexShrink: 0 }}>
            <span>{lang === 'ta' ? 'தொடர்பு கொள்ளுங்கள்' : 'Contact Us'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
