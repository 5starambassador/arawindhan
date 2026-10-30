'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Maximize2, X, ExternalLink, BookOpen, Download } from 'lucide-react';
import { Language } from '@/types';
import {
  getBaselineBookMetric,
  getCachedBookMetrics,
  fetchAllBookMetrics,
  formatCompactCount,
  BookMetricEntry,
  BookMetricsMap,
} from '@/lib/bookMetrics';

interface BookCoverCardImageProps {
  coverImage: string;
  title: string;
  slug: string;
  lang: Language;
  epubUrl?: string;
  pdfUrl?: string;
  tagline?: string;
}

export const BookCoverCardImage: React.FC<BookCoverCardImageProps> = ({
  coverImage,
  title,
  slug,
  lang,
  epubUrl,
  pdfUrl,
  tagline,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [metric, setMetric] = useState<BookMetricEntry>(() => getBaselineBookMetric(slug));

  useEffect(() => {
    setMounted(true);
    const cached = getCachedBookMetrics()[slug];
    if (cached) {
      setMetric(cached);
    }

    fetchAllBookMetrics().then((map) => {
      if (map[slug]) {
        setMetric(map[slug]);
      }
    });

    const handleMetricsUpdated = (e: Event) => {
      const custom = e as CustomEvent<BookMetricsMap>;
      if (custom.detail && custom.detail[slug]) {
        setMetric(custom.detail[slug]);
      }
    };

    window.addEventListener('book-metrics-updated', handleMetricsUpdated);
    return () => {
      window.removeEventListener('book-metrics-updated', handleMetricsUpdated);
    };
  }, [slug]);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  return (
    <>
      {/* Book Cover Container with pedestal and full-view fit */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          height: 'clamp(280px, 32vw, 340px)',
          borderRadius: '14px',
          overflow: 'hidden',
          marginBottom: '1.25rem',
          position: 'relative',
          border: '1px solid #EAE6DF',
          background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F1EA 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.85rem',
          boxShadow: 'inset 0 2px 6px rgba(15, 23, 42, 0.03)',
        }}
      >
        {/* The uncropped full-view book cover image */}
        <img
          src={coverImage || '/images/books/shambala_book.jpg'}
          alt={title}
          loading="lazy"
          onClick={() => setIsLightboxOpen(true)}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            borderRadius: '6px',
            boxShadow: isHovered
              ? '0 16px 32px -6px rgba(15, 23, 42, 0.28), 0 0 0 1px rgba(0,0,0,0.06)'
              : '0 8px 22px -4px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(0,0,0,0.04)',
            transform: isHovered ? 'scale(1.025)' : 'scale(1)',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
            cursor: 'zoom-in',
          }}
          title={lang === 'ta' ? 'முழு அட்டையைப் பெரிதாக்க கிளிக் செய்க' : 'Click to view full cover image'}
        />

        {/* Full View / Zoom Quick Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsLightboxOpen(true);
          }}
          aria-label={lang === 'ta' ? 'முழு பார்வை' : 'Full View'}
          title={lang === 'ta' ? 'முழு அட்டையைப் பெரிதாக்க' : 'Expand full cover view'}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: isHovered ? 'rgba(15, 23, 42, 0.88)' : 'rgba(255, 255, 255, 0.94)',
            color: isHovered ? '#FFFFFF' : '#334155',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            backdropFilter: 'blur(6px)',
            borderRadius: '999px',
            padding: '5px 10px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '0.72rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
            zIndex: 3,
            opacity: isHovered ? 1 : 0.85,
          }}
        >
          <Maximize2 size={12} />
          <span>{lang === 'ta' ? 'முழு பார்வை' : 'Full View'}</span>
        </button>

        {/* Format Pills Overlay */}
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', display: 'flex', gap: '5px', zIndex: 2 }}>
          {epubUrl && (
            <span
              style={{
                background: 'rgba(16, 185, 129, 0.95)',
                color: '#FFFFFF',
                fontSize: '0.68rem',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '5px',
                letterSpacing: '0.04em',
                boxShadow: '0 2px 6px rgba(0,0,0,0.22)',
              }}
            >
              EPUB
            </span>
          )}
          {pdfUrl && (
            <span
              style={{
                background: 'rgba(220, 38, 38, 0.95)',
                color: '#FFFFFF',
                fontSize: '0.68rem',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '5px',
                letterSpacing: '0.04em',
                boxShadow: '0 2px 6px rgba(0,0,0,0.22)',
              }}
            >
              PDF
            </span>
          )}
        </div>

        {/* Reading & Download Count Frosted Pill Overlay (Bottom-Right) */}
        <div
          title={
            lang === 'ta'
              ? `${metric.reads.toLocaleString('en-IN')} வாசிப்புகள் • ${metric.downloads.toLocaleString('en-IN')} பதிவிறக்கங்கள்`
              : `${metric.reads.toLocaleString('en-IN')} Reads • ${metric.downloads.toLocaleString('en-IN')} Downloads`
          }
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            background: isHovered ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.94)',
            color: isHovered ? '#F8FAFC' : '#1E293B',
            border: isHovered ? '1px solid rgba(245, 158, 11, 0.45)' : '1px solid rgba(226, 232, 240, 0.95)',
            backdropFilter: 'blur(8px)',
            borderRadius: '999px',
            padding: '3px 9px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            fontSize: '0.69rem',
            fontWeight: 800,
            letterSpacing: '0.01em',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.14)',
            zIndex: 3,
            transition: 'all 0.2s ease',
            lineHeight: 1,
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '3.5px',
            }}
          >
            <BookOpen size={11} style={{ color: isHovered ? '#FBBF24' : '#D97706', flexShrink: 0 }} />
            <span>{formatCompactCount(metric.reads)}</span>
          </span>
          <span
            style={{
              width: '1px',
              height: '10px',
              background: isHovered ? 'rgba(255, 255, 255, 0.22)' : '#CBD5E1',
            }}
          />
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            <Download size={11} style={{ color: isHovered ? '#34D399' : '#059669', flexShrink: 0 }} />
            <span>{formatCompactCount(metric.downloads)}</span>
          </span>
        </div>
      </div>

      {/* Lightbox Modal rendered via Portal to body to avoid ancestor transform clipping */}
      {mounted && isLightboxOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'rgba(15, 23, 42, 0.94)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          {/* Header bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: '20px',
              left: '24px',
              right: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 10,
            }}
          >
            <div style={{ color: '#FFFFFF', maxWidth: '75%' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{title}</div>
              {tagline && (
                <div style={{ fontSize: '0.82rem', color: '#CBD5E1', fontStyle: 'italic', marginTop: '2px' }}>
                  {tagline}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Link
                href={`/${lang}/books/${slug}`}
                onClick={() => setIsLightboxOpen(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  transition: 'background 0.15s ease',
                }}
              >
                <span>{lang === 'ta' ? 'முழு விவரம்' : 'Book Dossier'}</span>
                <ExternalLink size={14} />
              </Link>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease, transform 0.15s ease',
                }}
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Large image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: 'calc(88vh - 70px)',
              maxWidth: '90vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            <img
              src={coverImage || '/images/books/shambala_book.jpg'}
              alt={title}
              style={{
                maxHeight: 'calc(88vh - 70px)',
                maxWidth: '90vw',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '10px',
                boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255,255,255,0.15)',
                display: 'block',
              }}
            />
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              marginTop: '1.25rem',
              color: '#94A3B8',
              fontSize: '0.8rem',
              textAlign: 'center',
            }}
          >
            {lang === 'ta'
              ? 'முழு அட்டைப் படம் • மூட ESC விசையை அழுத்தவும் அல்லது பின்னணியில் கிளிக் செய்யவும்'
              : 'Full Cover View • Press ESC or click background to close'}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
