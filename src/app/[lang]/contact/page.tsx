import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Building, ShieldCheck, FileSpreadsheet, ExternalLink, Globe } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
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
      title: 'தொடர்புக்கு & தகவல் சரிபார்ப்பு | முனைவர் ஜே. அரவிந்தன் (Arawindhan)',
      description:
        'முனைவர் ஜே. அரவிந்தன் அவர்களின் அதிகாரப்பூர்வ தொடர்புக் களம். புதுச்சேரி, இந்தியா.',
      alternates: {
        canonical: 'https://www.arawindhan.com/ta/contact',
        languages: {
          en: 'https://www.arawindhan.com/en/contact',
          ta: 'https://www.arawindhan.com/ta/contact',
          'x-default': 'https://www.arawindhan.com/en/contact',
        },
      },
      openGraph: {
        title: 'தொடர்புக்கு | முனைவர் ஜே. அரவிந்தன்',
        description: 'முனைவர் ஜே. அரவிந்தன் அவர்களைத் தொடர்பு கொள்ள அதிகாரப்பூர்வ இணைய தளம்.',
        url: 'https://www.arawindhan.com/ta/contact',
        siteName: 'Dr. J. Arawindhan Official Platform',
      },
    };
  }

  return {
    title: 'Contact & Official Communications | Dr. J. Arawindhan — Puducherry, India',
    description:
      'Official contact desk for academic inquiries, keynote invitations, institutional collaborations, and communications with Dr. J. Arawindhan (Arawindhan).',
    alternates: {
      canonical: 'https://www.arawindhan.com/en/contact',
      languages: {
        en: 'https://www.arawindhan.com/en/contact',
        ta: 'https://www.arawindhan.com/ta/contact',
        'x-default': 'https://www.arawindhan.com/en/contact',
      },
    },
    openGraph: {
      title: 'Contact & Official Communications | Dr. J. Arawindhan',
      description:
        'Official institutional desk for academic inquiries and communications with Dr. J. Arawindhan.',
      url: 'https://www.arawindhan.com/en/contact',
      siteName: 'Dr. J. Arawindhan Official Platform',
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang: Language = resolved.lang === 'ta' ? 'ta' : 'en';

  return (
    <div className="section-py">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <SectionHeader
          badge={lang === 'ta' ? 'அதிகாரப்பூர்வ தொடர்பு & சான்றுகள்' : 'OFFICIAL CONTACT & VERIFICATION DESK'}
          title={lang === 'ta' ? 'தொடர்பு & தகவல் சரிபார்ப்பு மையம்' : 'Official Communications & Verification Desk'}
          subtitle={lang === 'ta' ? 'ஆய்வாளர்கள், கல்வியியலாளர்கள் மற்றும் கல்வி நிறுவனங்களுக்கான அதிகாரப்பூர்வ தொடர்பு வழிகள்.' : 'Official institutional desk for academic inquiries, biographical verification, and institutional collaborations.'}
        />

        <div className="grid-2" style={{ marginBottom: '3.5rem' }}>
          {/* Institutional HQ */}
          <div className="card-premium">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--gold-glow)' }}>
              <Building size={22} />
              <h3 className="font-serif heading-gold" style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                {lang === 'ta' ? 'முதன்மை வளாகம் (HQ)' : 'Central Campus & Headquarters'}
              </h3>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              <strong>ACHARIYA World Class Education</strong><br />
              Central Administrative Office<br />
              ACHARIYA Central Campus, Villianur<br />
              Puducherry – 605 110, India.
            </p>

          </div>

          {/* Official Inquiries & Communication Channels */}
          <div className="card-premium">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#B45309' }}>
              <Mail size={22} />
              <h3 className="font-serif heading-gold" style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                {lang === 'ta' ? 'அதிகாரப்பூர்வ தொடர்புகள்' : 'Official Communications & Desk'}
              </h3>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {lang === 'ta'
                ? 'முனைவர் ஜே. அரவிந்தன் அவர்களின் கல்வி, ஆன்மீகம் மற்றும் நிறுவன முன்முயற்சிகள் தொடர்பான ஆலோசனைகள் மற்றும் கூட்டுக் கல்வித் திட்டங்களுக்கான அதிகாரப்பூர்வ தொடர்பு வழிகள்.'
                : 'For educational collaborations, keynote invitations, institutional affiliations, and official correspondence with the office of Dr. J. Arawindhan.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                ✉️ <strong>{lang === 'ta' ? 'முதன்மை மின்னஞ்சல்:' : 'Official Email:'}</strong> <a href="mailto:info@achariya.in" style={{ color: '#B45309', fontWeight: 700, textDecoration: 'none' }}>info@achariya.in</a>
              </div>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                🌐 <strong>{lang === 'ta' ? 'அதிகாரப்பூர்வ தளம்:' : 'Official Portal:'}</strong> <a href="https://arawindhan.org" target="_blank" rel="noopener noreferrer" style={{ color: '#059669', fontWeight: 700, textDecoration: 'none' }}>arawindhan.org</a>
              </div>
            </div>
          </div>
        </div>

        {/* Official Web & Media Links */}
        <div
          className="card-premium"
          style={{
            padding: '2.5rem',
            border: '1px solid var(--border-gold)',
          }}
        >
          <h3 className="font-serif heading-gold" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800 }}>
            {lang === 'ta' ? 'அதிகாரப்பூர்வ நிறுவன இணைப்புகள்' : 'Verified Official Ecosystem Portals'}
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {lang === 'ta'
              ? 'முனைவர் அரவிந்தன் அவர்களின் அங்கீகரிக்கப்பட்ட அதிகாரப்பூர்வ வலைத்தளங்கள் மற்றும் கல்வி நிறுவன இணையதளங்கள்:'
              : 'Authorized digital entities directly affiliated with Dr. J. Arawindhan:'}
          </p>

          <div className="grid-3">
            <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.35rem' }}>
                ACHARIYA Education
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Official portal for 18 colleges and 35 schools.
              </p>
              <a href="https://achariya.in" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 700, textDecoration: 'none' }}>achariya.in</a>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.35rem' }}>
                MIWAY Academic System
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Multiple Intelligence K-12 curriculum portal.
              </p>
              <a href="https://miway.in" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 700, textDecoration: 'none' }}>miway.in</a>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <div style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.35rem' }}>
                Divine Grace Foundation
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Divya Yogam & annual Maha Shambala Puducherry.
              </p>
              <a href="https://divinegracefoundation.org" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 700, textDecoration: 'none' }}>divinegracefoundation.org</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
