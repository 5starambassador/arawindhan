'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Layers,
  Sparkles,
  Users,
  Search,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';
import { booksList } from '@/data/books';
import { Language } from '@/types';

interface LeadRecord {
  bookSlug: string;
  bookTitle: string;
  name: string;
  phone: string;
  email: string;
  institution: string;
  date: string;
}

export default function AdminBooksPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const [lang, setLang] = useState<Language>('en');
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    params.then((p) => setLang(p.lang || 'en'));
    try {
      const stored = localStorage.getItem('arawindhan_book_leads');
      if (stored) {
        setLeads(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, [params]);

  const readyBooks = booksList.filter((b) => b.flipbookPages && b.flipbookPages.length > 0);
  const pendingBooks = booksList.filter((b) => !b.flipbookPages || b.flipbookPages.length === 0);

  const filteredBooks = booksList.filter(
    (b) =>
      b.title[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author[lang].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportLeadsCSV = () => {
    if (leads.length === 0) {
      alert('No download permission leads recorded yet.');
      return;
    }
    const headers = ['Book Slug', 'Book Title', 'Full Name', 'Contact Number', 'Email', 'Institution', 'Date'];
    const rows = leads.map((l) => [
      `"${l.bookSlug}"`,
      `"${l.bookTitle}"`,
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.institution}"`,
      `"${l.date}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `dr_arawindhan_book_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', padding: '3rem 1.5rem', color: '#0F172A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FEF3C7', color: '#B45309', padding: '4px 12px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              <ShieldCheck size={14} />
              <span>Institutional Publishing Control Panel</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, fontFamily: 'var(--font-serif)', color: '#0F172A' }}>
              Books & 3D Flipbook Operations
            </h1>
            <p style={{ margin: '0.35rem 0 0 0', color: '#64748B', fontSize: '0.98rem' }}>
              Automated ingestion, 3D flipbook readiness, and gated download lead management.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Link
              href={`/${lang}/books`}
              className="btn-outline"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <ExternalLink size={15} />
              <span>View Public Catalog</span>
            </Link>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#64748B', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>Total Catalog Books</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginTop: '0.25rem' }}>{booksList.length}</div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>Across Education, Pedagogy & Leadership</div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle size={14} />
              <span>3D Flipbooks Ready</span>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#059669', marginTop: '0.25rem' }}>{readyBooks.length}</div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>With WebP retina pages & sound</div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#D97706', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} />
              <span>Pending Ingestion</span>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#D97706', marginTop: '0.25rem' }}>{pendingBooks.length}</div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>Ready for 1-click batch script</div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#2563EB', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Users size={14} />
              <span>Registered Reader Leads</span>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#2563EB', marginTop: '0.25rem' }}>{leads.length}</div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>Parents, Principals & Educators</div>
          </div>
        </div>

        {/* 1-HOUR BATCH INGESTION GUIDE CARD */}
        <div style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', color: '#FFFFFF', padding: '2rem', borderRadius: '20px', marginBottom: '2.5rem', boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#F59E0B', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            <Sparkles size={18} />
            <span>INSTANT 1-HOUR INGESTION INSTRUCTIONS FOR 10-15 BOOKS</span>
          </div>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, margin: '0 0 1rem 0' }}>
            How to Convert Any Book PDF to 3D Flipbook Without Writing Code
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontWeight: 800, color: '#FCD34D', marginBottom: '0.35rem' }}>Step 1: Place Your PDF Files</div>
              <p style={{ fontSize: '0.86rem', opacity: 0.85, margin: 0, lineHeight: 1.5 }}>
                Copy all your 10 to 15 book PDF files into the project folder:
                <br />
                <code style={{ background: 'rgba(0,0,0,0.4)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', color: '#38BDF8', display: 'inline-block', marginTop: '4px' }}>
                  e:\App\MD website\incoming_books\
                </code>
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontWeight: 800, color: '#FCD34D', marginBottom: '0.35rem' }}>Step 2: Double-Click Batch Converter</div>
              <p style={{ fontSize: '0.86rem', opacity: 0.85, margin: 0, lineHeight: 1.5 }}>
                Double-click the 1-click batch launcher in the root folder:
                <br />
                <code style={{ background: 'rgba(0,0,0,0.4)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', color: '#4ADE80', display: 'inline-block', marginTop: '4px' }}>
                  CONVERT_ALL_BOOKS.bat
                </code>
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontWeight: 800, color: '#FCD34D', marginBottom: '0.35rem' }}>Step 3: Instant Live Result</div>
              <p style={{ fontSize: '0.86rem', opacity: 0.85, margin: 0, lineHeight: 1.5 }}>
                The script renders all pages to WebP, extracts covers, updates <code style={{ color: '#38BDF8' }}>books.ts</code>, and enables gated downloads automatically!
              </p>
            </div>
          </div>
        </div>

        {/* BOOK REPOSITORY TABLE */}
        <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '1.75rem', marginBottom: '2.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>Catalog Books & 3D Flipbook Status</h3>
            <div style={{ position: 'relative', minWidth: '260px' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
              <input
                type="text"
                placeholder="Search book title or slug..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.25rem', borderRadius: '999px', border: '1px solid #CBD5E1', fontSize: '0.88rem' }}
              />
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #E2E8F0', color: '#64748B', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Book Details</th>
                  <th style={{ padding: '0.75rem 1rem' }}>3D Flipbook Status</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Pages</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Downloads Ready</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((b) => {
                  const hasFlipbook = b.flipbookPages && b.flipbookPages.length > 0;
                  return (
                    <tr key={b.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.94rem' }}>{b.title[lang]}</div>
                        <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '2px' }}>
                          <span style={{ fontFamily: 'monospace', color: '#D97706' }}>{b.slug}</span> &bull; {b.author[lang]}
                        </div>
                      </td>

                      <td style={{ padding: '1rem' }}>
                        {hasFlipbook ? (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#ECFDF5', color: '#059669', padding: '3px 10px', borderRadius: '999px', fontWeight: 800, fontSize: '0.78rem' }}>
                            <CheckCircle size={13} />
                            <span>3D Flipbook Active</span>
                          </span>
                        ) : (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#FEF3C7', color: '#D97706', padding: '3px 10px', borderRadius: '999px', fontWeight: 700, fontSize: '0.78rem' }}>
                            <Clock size={13} />
                            <span>Pending Ingestion</span>
                          </span>
                        )}
                      </td>

                      <td style={{ padding: '1rem', fontWeight: 700 }}>
                        {hasFlipbook ? `${b.flipbookPages!.length} Pages` : '—'}
                      </td>

                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          {b.pdfUrl && <span style={{ background: '#FEE2E2', color: '#DC2626', padding: '2px 6px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 800 }}>PDF</span>}
                          {b.epubUrl && <span style={{ background: '#D1FAE5', color: '#059669', padding: '2px 6px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 800 }}>EPUB</span>}
                          {!b.pdfUrl && !b.epubUrl && <span style={{ color: '#94A3B8', fontSize: '0.75rem' }}>None</span>}
                        </div>
                      </td>

                      <td style={{ padding: '1rem', textAlign: 'right' }}>
                        <Link
                          href={`/${lang}/books/${b.slug}`}
                          className="btn-outline"
                          style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        >
                          <span>Open Dossier</span>
                          <ExternalLink size={12} />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* REGISTERED LEADS DATABASE */}
        <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '1.75rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>Registered Reader Access Permission Leads</h3>
              <p style={{ margin: '4px 0 0 0', color: '#64748B', fontSize: '0.86rem' }}>
                Audience details collected before granting permission to download unabridged book copies.
              </p>
            </div>

            <button
              type="button"
              onClick={exportLeadsCSV}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#047857',
                color: '#FFFFFF',
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 800,
                fontSize: '0.86rem',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(4, 120, 87, 0.25)',
              }}
            >
              <Download size={14} />
              <span>Export Leads (CSV)</span>
            </button>
          </div>

          {leads.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#F8FAFC', borderRadius: '12px', border: '1px dashed #CBD5E1', color: '#64748B' }}>
              <Users size={32} style={{ margin: '0 auto 0.5rem auto', opacity: 0.5 }} />
              <div style={{ fontWeight: 700, fontSize: '0.96rem' }}>No Permission Leads Recorded in this Browser Yet</div>
              <p style={{ fontSize: '0.84rem', margin: '4px 0 0 0' }}>
                When readers click &quot;Request Full Edition&quot; or download buttons and submit their details, they will be listed here instantly.
              </p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.86rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #E2E8F0', color: '#64748B', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>Full Name</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Contact / WhatsApp</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Email Address</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Institution / Role</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Book Requested</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((l, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 800, color: '#0F172A' }}>{l.name}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#059669', fontWeight: 700 }}>{l.phone}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#2563EB' }}>{l.email}</td>
                      <td style={{ padding: '0.85rem 1rem' }}>{l.institution}</td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>{l.bookTitle || l.bookSlug}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#94A3B8', fontSize: '0.78rem' }}>
                        {new Date(l.date).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
