import React from 'react';
import Link from 'next/link';
import { ShieldCheck, BookOpen, Award, Sparkles, Building2, HelpCircle } from 'lucide-react';
import { Language } from '@/types';
import { navigationLinks, uiLabels } from '@/lib/i18n';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer
      style={{
        background: '#F8FAFC',
        borderTop: '1px solid var(--border-light)',
        paddingTop: '4.5rem',
        paddingBottom: '3rem',
        marginTop: '6rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Col 1: Platform Overview */}
          <div>
            <div
              className="font-serif heading-gold"
              style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}
            >
              {uiLabels.platformTitle[lang]}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {uiLabels.footerDisclaimer[lang]}
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
              <ShieldCheck size={16} color="#059669" />
              <span style={{ fontSize: '0.8rem', color: '#065F46', fontWeight: 700 }}>
                {lang === 'ta' ? 'அனைத்து சான்றுகளும் சரிபார்க்கப்பட்டன' : 'Factual Integrity Architecture Active'}
              </span>
            </div>
          </div>

          {/* Col 2: Core Knowledge Sections */}
          <div>
            <div
              style={{
                color: 'var(--gold-glow)',
                fontSize: '0.92rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}
            >
              {uiLabels.quickLinks[lang]}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link href={`/${lang}/biography`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                  {lang === 'ta' ? 'வாழ்க்கை வரலாறு & 10 அவதாரங்கள்' : 'Biography & 10 Avatar Phases'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                  {lang === 'ta' ? 'தசாவதானி & 10 கல்விக் கூடங்கள்' : 'Dasavadani & 10 Educational Systems'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/books`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                  {lang === 'ta' ? '7 நூல்கள் & வெளியீடுகள்' : '7 Books & Thought Leadership'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/institutions`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                  {lang === 'ta' ? '18 கல்லூரிகள், 101 பள்ளிகள், 61+ நிறுவனங்கள்' : '18 Colleges, 101 Schools & 61+ Companies'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Thought Leadership & Spirit */}
          <div>
            <div
              style={{
                color: 'var(--gold-glow)',
                fontSize: '0.92rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}
            >
              {uiLabels.institutionsHeading[lang]}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link href={`/${lang}/recognition`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                  {lang === 'ta' ? '540+ விருதுகள் & 222 கின்னஸ் சாதனைகள்' : '540+ Accolades & 222 Guinness Records'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/inner-journey`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                  {lang === 'ta' ? 'திவ்ய யோகம் & மகா ஷாம்பாலா (2012 முதல்)' : 'Divya Yogam & Maha Shambala'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/governance`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                  {lang === 'ta' ? 'மேன்மை மையம் (CoE) & 77 பயிற்சிகள்' : 'Centre of Excellence (CoE) & 77 Trainings'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/media`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                  {lang === 'ta' ? 'செயற்கை நுண்ணறிவு & குவாண்டம் கற்றல்' : 'AI & Quantum Intelligence Keynotes'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Fact Verification Desk */}
          <div>
            <div
              style={{
                color: 'var(--gold-glow)',
                fontSize: '0.92rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}
            >
              {uiLabels.contactHeading[lang]}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>
                <Link href={`/${lang}/faq`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}>
                  <HelpCircle size={15} color="var(--gold-glow)" />
                  <span>{lang === 'ta' ? 'AI & தேடுபொறி கேள்விகள் (FAQs)' : 'Answer Engine & FAQs (AEO)'}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
                  {lang === 'ta' ? 'அதிகாரப்பூர்வ இணைப்புகள் & தொடர்பு' : 'Official Profiles & Contacts'}
                </Link>
              </li>
              <li style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Puducherry Central Campus, ACHARIYA World Class Education.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Dr. J. Arawindhan Ji. {lang === 'ta' ? 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' : 'All Rights Reserved.'}
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href={`/${lang}/contact`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
              {lang === 'ta' ? 'உண்மைச் சரிபார்ப்புக் கொள்கை' : 'Verification Policy'}
            </Link>
            <Link href={`/${lang}/faq`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
              {lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'AEO Index'}
            </Link>
            <Link href={`/${lang === 'en' ? 'ta' : 'en'}`} style={{ color: 'var(--gold-glow)', textDecoration: 'none', fontWeight: 700 }}>
              {lang === 'en' ? 'தமிழ் பதிப்பு' : 'English Edition'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
