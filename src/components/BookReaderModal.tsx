'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Grid,
  BookMarked,
  Download,
  Send,
  Layers,
  FileText,
  RotateCcw,
} from 'lucide-react';
import { booksList } from '@/data/books';
import { Language } from '@/types';

interface BookReaderModalProps {
  language?: Language;
}

export const BookReaderModal: React.FC<BookReaderModalProps> = ({ language = 'en' }) => {
  const [activeBookSlug, setActiveBookSlug] = useState<string | null>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState<number>(18);
  const [theme, setTheme] = useState<'paper' | 'dark' | 'light'>('paper');
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requested, setRequested] = useState(false);
  const [reqEmail, setReqEmail] = useState('');
  const [reqOrg, setReqOrg] = useState('');

  // FlipHTML5 3D Reader States
  const [readerMode, setReaderMode] = useState<'flipbook' | 'text'>('flipbook');
  const [currentPage, setCurrentPage] = useState<number>(1); // 1-indexed (1 to 38)
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = (e: CustomEvent<{ slug: string }>) => {
      if (e.detail?.slug) {
        setActiveBookSlug(e.detail.slug);
        setActiveChapterIndex(0);
        setCurrentPage(1);
        setShowRequestForm(false);
        setRequested(false);
        setZoomLevel(1.0);
        setShowThumbnails(false);

        // If the book has flipbook pages, default to flipbook mode
        const targetBook = booksList.find((b) => b.slug === e.detail.slug);
        if (targetBook?.flipbookPages && targetBook.flipbookPages.length > 0) {
          setReaderMode('flipbook');
        } else {
          setReaderMode('text');
        }
      }
    };

    window.addEventListener('open-book-reader' as any, handleOpen as any);
    return () => {
      window.removeEventListener('open-book-reader' as any, handleOpen as any);
    };
  }, []);

  const book = booksList.find((b) => b.slug === activeBookSlug);
  const totalFlipPages = book?.flipbookPages?.length || 0;

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showThumbnails) {
          setShowThumbnails(false);
        } else if (isFullscreen) {
          document.exitFullscreen?.();
          setIsFullscreen(false);
        } else {
          setActiveBookSlug(null);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleFlipNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handleFlipPrev();
      }
    };

    if (activeBookSlug) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeBookSlug, currentPage, totalFlipPages, showThumbnails, isFullscreen, readerMode]);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handleFlipNext = () => {
    if (readerMode === 'flipbook' && totalFlipPages > 0) {
      if (currentPage < totalFlipPages) {
        setIsFlipping(true);
        setFlipDirection('next');
        setTimeout(() => {
          // In double-page spread on desktop, advance by 2 unless on page 1
          if (currentPage === 1) {
            setCurrentPage(2);
          } else {
            setCurrentPage((prev) => Math.min(totalFlipPages, prev + 2));
          }
          setIsFlipping(false);
          setFlipDirection(null);
        }, 220);
      }
    } else {
      setActiveChapterIndex((prev) => Math.min(chapters.length - 1, prev + 1));
    }
  };

  const handleFlipPrev = () => {
    if (readerMode === 'flipbook' && totalFlipPages > 0) {
      if (currentPage > 1) {
        setIsFlipping(true);
        setFlipDirection('prev');
        setTimeout(() => {
          if (currentPage <= 3) {
            setCurrentPage(1);
          } else {
            setCurrentPage((prev) => Math.max(1, prev - 2));
          }
          setIsFlipping(false);
          setFlipDirection(null);
        }, 220);
      }
    } else {
      setActiveChapterIndex((prev) => Math.max(0, prev - 1));
    }
  };

  if (!activeBookSlug || !book) return null;

  const chapters = book.sampleChapters && book.sampleChapters.length > 0 ? book.sampleChapters : [
    {
      title: {
        en: 'Prologue & Executive Preview',
        ta: 'முன்னுரை & முதன்மைச் சாரம்',
      },
      subtitle: {
        en: book.tagline.en,
        ta: book.tagline.ta,
      },
      paragraphs: {
        en: [
          book.summary.en,
          book.readMoreSnippet ? book.readMoreSnippet.en : '“Real education is not about storing information; it is about awakening the dormant genius inside every human being.”',
          'This work articulates twenty-five years of foundational pedagogy, neuroscience-backed cognitive development, and institutional governance pioneered across the ACHARIYA ecosystem.',
          'Through structured practice, experiential curricula, and deliberate mentorship, learners transcend passive learning to become creators, innovators, and sovereign leaders.',
        ],
        ta: [
          book.summary.ta,
          book.readMoreSnippet ? book.readMoreSnippet.ta : '“உண்மையான கல்வி என்பது தகவல்களை சேமிப்பது அல்ல; மனிதனுக்குள் உறங்கும் மேதமையை விழித்தெழச் செய்வது.”',
          'ஆச்சாரியா கல்வி இயக்கத்தில் 25 ஆண்டுகளாக உருவாக்கப்பட்ட முழுமூளை நரம்பியல் வளர்ச்சி, அனுபவக் கல்வி மற்றும் நிர்வாக மேன்மையின் சாரமாக இந்நூல் விளங்குகிறது.',
          'ஒழுங்கமைக்கப்பட்ட பயிற்சி, செயல்முறை கற்றல் மற்றும் தெளிவான வழிகாட்டலின் வழியே மாணவர்கள் சாதாரண நிலையைத் தாண்டி தலைவர்களாக பரிணமிக்கிறார்கள்.',
        ],
      },
    },
  ];

  const currentChapter = chapters[activeChapterIndex] || chapters[0];

  // Theme styling definitions for Text Mode
  const themeStyles = {
    paper: {
      bg: '#FAF8F5',
      text: '#1E293B',
      cardBg: '#FFFFFF',
      border: '#E2E8F0',
      headerBg: '#F8F6F0',
      accent: '#B45309',
      quoteBg: '#FFFBEB',
    },
    dark: {
      bg: '#0F172A',
      text: '#E2E8F0',
      cardBg: '#1E293B',
      border: '#334155',
      headerBg: '#090D16',
      accent: '#F59E0B',
      quoteBg: '#1E293B',
    },
    light: {
      bg: '#FFFFFF',
      text: '#0F172A',
      cardBg: '#F8FAFC',
      border: '#E2E8F0',
      headerBg: '#FFFFFF',
      accent: '#D97706',
      quoteBg: '#F1F5F9',
    },
  }[theme];

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequested(true);
  };

  // Flipbook Spread Calculations
  // Page 1: Single cover page on right
  // Page 2+: Left is even (currentPage), Right is odd (currentPage + 1)
  const isCoverPage = currentPage === 1;
  const leftPageNum = isCoverPage ? null : (currentPage % 2 === 0 ? currentPage : currentPage - 1);
  const rightPageNum = isCoverPage ? 1 : (leftPageNum ? leftPageNum + 1 : null);

  const leftPageImg = leftPageNum && leftPageNum <= totalFlipPages ? book.flipbookPages?.[leftPageNum - 1] : null;
  const rightPageImg = rightPageNum && rightPageNum <= totalFlipPages ? book.flipbookPages?.[rightPageNum - 1] : null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        background: 'rgba(10, 15, 29, 0.88)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isFullscreen ? '0' : '0.75rem',
      }}
      onClick={() => !isFullscreen && setActiveBookSlug(null)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: isFullscreen ? '100vw' : '1180px',
          height: isFullscreen ? '100vh' : '94vh',
          background: readerMode === 'flipbook' ? '#181C24' : themeStyles.bg,
          color: readerMode === 'flipbook' ? '#F1F5F9' : themeStyles.text,
          borderRadius: isFullscreen ? '0' : '20px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
          transition: 'all 0.25s ease',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================= */}
        {/* TOP CONTROL BAR (FlipHTML5 Style)                         */}
        {/* ========================================================= */}
        <div
          style={{
            padding: '0.75rem 1.25rem',
            background: readerMode === 'flipbook' ? '#0F1219' : themeStyles.headerBg,
            borderBottom: '1px solid ' + (readerMode === 'flipbook' ? 'rgba(255,255,255,0.08)' : themeStyles.border),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            zIndex: 10,
          }}
        >
          {/* Book Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '220px' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 2px 8px rgba(217, 119, 6, 0.3)',
              }}
            >
              <BookOpen size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.94rem', lineHeight: 1.2, color: readerMode === 'flipbook' ? '#FFFFFF' : themeStyles.text }}>
                {book.title[language]}
              </div>
              <div style={{ fontSize: '0.72rem', opacity: 0.75, marginTop: '2px', color: readerMode === 'flipbook' ? '#94A3B8' : themeStyles.text }}>
                {book.author[language]} &bull; {totalFlipPages > 0 ? `${totalFlipPages} Pages` : 'Curated Edition'}
              </div>
            </div>
          </div>

          {/* Mode Switcher & Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {/* View Mode Toggle (3D Flipbook vs eReader Text) */}
            {totalFlipPages > 0 && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: readerMode === 'flipbook' ? '#1E2430' : themeStyles.cardBg,
                  border: '1px solid ' + (readerMode === 'flipbook' ? 'rgba(255,255,255,0.12)' : themeStyles.border),
                  borderRadius: '8px',
                  padding: '2px',
                }}
              >
                <button
                  type="button"
                  onClick={() => setReaderMode('flipbook')}
                  style={{
                    border: 'none',
                    background: readerMode === 'flipbook' ? '#F59E0B' : 'transparent',
                    color: readerMode === 'flipbook' ? '#000000' : '#94A3B8',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  title="3D Realistic Page-Turning Flipbook (Like FlipHTML5)"
                >
                  <Layers size={13} />
                  <span>3D Flipbook</span>
                </button>
                <button
                  type="button"
                  onClick={() => setReaderMode('text')}
                  style={{
                    border: 'none',
                    background: readerMode === 'text' ? '#F59E0B' : 'transparent',
                    color: readerMode === 'text' ? '#000000' : '#94A3B8',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  title="Text eReader Mode (Reflowable typography)"
                >
                  <FileText size={13} />
                  <span>eReader</span>
                </button>
              </div>
            )}

            {/* In Flipbook Mode: Zoom Controls */}
            {readerMode === 'flipbook' && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#1E2430',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '8px',
                  padding: '2px',
                }}
              >
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(0.85, z - 0.15))}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: '#CBD5E1',
                    padding: '4px 6px',
                    cursor: 'pointer',
                  }}
                  title="Zoom Out"
                >
                  <ZoomOut size={14} />
                </button>
                <span style={{ fontSize: '0.72rem', color: '#F59E0B', fontWeight: 700, padding: '0 4px', minWidth: '42px', textAlign: 'center' }}>
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: '#CBD5E1',
                    padding: '4px 6px',
                    cursor: 'pointer',
                  }}
                  title="Zoom In"
                >
                  <ZoomIn size={14} />
                </button>
              </div>
            )}

            {/* In Text Mode: Font Size & Themes */}
            {readerMode === 'text' && (
              <>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: themeStyles.cardBg,
                    border: '1px solid ' + themeStyles.border,
                    borderRadius: '8px',
                    padding: '2px',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      color: themeStyles.text,
                      padding: '4px 8px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                    title="Decrease font size"
                  >
                    A-
                  </button>
                  <span style={{ fontSize: '0.75rem', opacity: 0.5, padding: '0 2px' }}>|</span>
                  <button
                    type="button"
                    onClick={() => setFontSize(Math.min(26, fontSize + 2))}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      color: themeStyles.text,
                      padding: '4px 8px',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                    }}
                    title="Increase font size"
                  >
                    A+
                  </button>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: themeStyles.cardBg,
                    border: '1px solid ' + themeStyles.border,
                    borderRadius: '8px',
                    padding: '2px',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setTheme('paper')}
                    style={{
                      border: 'none',
                      background: theme === 'paper' ? themeStyles.accent : 'transparent',
                      color: theme === 'paper' ? '#FFFFFF' : themeStyles.text,
                      padding: '4px 8px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                    }}
                  >
                    Paper
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    style={{
                      border: 'none',
                      background: theme === 'light' ? themeStyles.accent : 'transparent',
                      color: theme === 'light' ? '#FFFFFF' : themeStyles.text,
                      padding: '4px 8px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                    }}
                  >
                    Light
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    style={{
                      border: 'none',
                      background: theme === 'dark' ? themeStyles.accent : 'transparent',
                      color: theme === 'dark' ? '#FFFFFF' : themeStyles.text,
                      padding: '4px 8px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                    }}
                  >
                    Dark
                  </button>
                </div>
              </>
            )}

            {/* Direct Downloads */}
            {book.epubUrl && (
              <a
                href={book.epubUrl}
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: '#10B981',
                  color: '#FFFFFF',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  boxShadow: '0 2px 4px rgba(16, 185, 129, 0.25)',
                }}
                title={language === 'ta' ? 'ஈபப் (EPUB) பதிவிறக்கம்' : 'Download EPUB eBook'}
              >
                <Download size={12} />
                <span>EPUB</span>
              </a>
            )}

            {book.pdfUrl && (
              <a
                href={book.pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: '#DC2626',
                  color: '#FFFFFF',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  boxShadow: '0 2px 4px rgba(220, 38, 38, 0.25)',
                }}
                title={language === 'ta' ? 'அதிகாரப்பூர்வ PDF பதிவிறக்கம்' : 'Download Official PDF'}
              >
                <Download size={12} />
                <span>PDF</span>
              </a>
            )}

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              style={{
                border: 'none',
                background: readerMode === 'flipbook' ? '#1E2430' : themeStyles.cardBg,
                color: readerMode === 'flipbook' ? '#CBD5E1' : themeStyles.text,
                padding: '6px 8px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: readerMode === 'flipbook' ? 'rgba(255,255,255,0.12)' : themeStyles.border,
              }}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveBookSlug(null)}
              style={{
                border: 'none',
                background: readerMode === 'flipbook' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)',
                color: '#EF4444',
                padding: '6px 8px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                fontWeight: 700,
              }}
              title="Close Reader"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN VIEWER AREA                                          */}
        {/* ========================================================= */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: readerMode === 'flipbook' ? '#14171F' : themeStyles.bg,
          }}
        >
          {/* ==================== 3D FLIPBOOK MODE ==================== */}
          {readerMode === 'flipbook' && totalFlipPages > 0 ? (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                perspective: '2400px',
                overflow: 'auto',
                padding: '1.5rem',
              }}
            >
              {/* Previous Page Clickable Overlay Trigger */}
              <button
                type="button"
                onClick={handleFlipPrev}
                disabled={currentPage <= 1}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 20,
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: currentPage <= 1 ? 'rgba(255,255,255,0.2)' : '#F59E0B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: currentPage <= 1 ? 'default' : 'pointer',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  transition: 'all 0.2s ease',
                }}
                title="Flip to Previous Page"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Page Clickable Overlay Trigger */}
              <button
                type="button"
                onClick={handleFlipNext}
                disabled={currentPage >= totalFlipPages}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 20,
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: currentPage >= totalFlipPages ? 'rgba(255,255,255,0.2)' : '#F59E0B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: currentPage >= totalFlipPages ? 'default' : 'pointer',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  transition: 'all 0.2s ease',
                }}
                title="Flip to Next Page"
              >
                <ChevronRight size={24} />
              </button>

              {/* The 3D Book Container */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.2s ease',
                  boxShadow: '0 25px 65px -10px rgba(0, 0, 0, 0.8)',
                  borderRadius: '8px',
                  background: '#0B0D13',
                  position: 'relative',
                  maxHeight: '80vh',
                }}
              >
                {/* When on Cover Page (Page 1) */}
                {isCoverPage ? (
                  <div
                    onClick={handleFlipNext}
                    style={{
                      cursor: 'pointer',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      boxShadow: '8px 10px 30px rgba(0,0,0,0.6)',
                      borderRight: '2px solid rgba(0,0,0,0.3)',
                    }}
                    title="Click cover to open book"
                  >
                    <img
                      src={book.flipbookPages?.[0]}
                      alt="Book Cover - Page 1"
                      style={{
                        maxHeight: '76vh',
                        maxWidth: '90vw',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                    {/* Realistic Gloss Effect on Cover */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '30px',
                        background: 'linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.1) 60%, transparent)',
                        pointerEvents: 'none',
                      }}
                    />
                    {/* Click To Open Indicator */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        right: '16px',
                        background: 'rgba(0, 0, 0, 0.75)',
                        color: '#F59E0B',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      <span>Click to Open Book</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                ) : (
                  /* Double Page Realistic Spread (Left & Right Pages) */
                  <div
                    style={{
                      display: 'flex',
                      position: 'relative',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
                    }}
                  >
                    {/* Left Page (Even Page) */}
                    <div
                      onClick={handleFlipPrev}
                      style={{
                        position: 'relative',
                        cursor: 'pointer',
                        background: '#FFFFFF',
                        borderRight: '1px solid rgba(0,0,0,0.15)',
                      }}
                      title={`Page ${leftPageNum} (Click left to go back)`}
                    >
                      {leftPageImg ? (
                        <img
                          src={leftPageImg}
                          alt={`Page ${leftPageNum}`}
                          style={{
                            maxHeight: '76vh',
                            maxWidth: '44vw',
                            objectFit: 'contain',
                            display: 'block',
                          }}
                        />
                      ) : (
                        <div style={{ width: '400px', height: '560px', background: '#F8FAFC' }} />
                      )}
                      {/* Left Page Inner Spine Shadow */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          bottom: 0,
                          width: '40px',
                          background: 'linear-gradient(to left, rgba(0,0,0,0.22), rgba(0,0,0,0.06) 60%, transparent)',
                          pointerEvents: 'none',
                        }}
                      />
                      {/* Left Page Number Badge */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '16px',
                          background: 'rgba(0,0,0,0.6)',
                          color: '#FFFFFF',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                        }}
                      >
                        {leftPageNum}
                      </div>
                    </div>

                    {/* Book Spine Center Divider */}
                    <div
                      style={{
                        width: '4px',
                        background: 'linear-gradient(to right, rgba(0,0,0,0.4), rgba(255,255,255,0.1), rgba(0,0,0,0.4))',
                        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                        zIndex: 5,
                      }}
                    />

                    {/* Right Page (Odd Page) */}
                    <div
                      onClick={handleFlipNext}
                      style={{
                        position: 'relative',
                        cursor: 'pointer',
                        background: '#FFFFFF',
                      }}
                      title={`Page ${rightPageNum} (Click right to flip forward)`}
                    >
                      {rightPageImg ? (
                        <img
                          src={rightPageImg}
                          alt={`Page ${rightPageNum}`}
                          style={{
                            maxHeight: '76vh',
                            maxWidth: '44vw',
                            objectFit: 'contain',
                            display: 'block',
                          }}
                        />
                      ) : (
                        <div style={{ width: '400px', height: '560px', background: '#F8FAFC' }} />
                      )}
                      {/* Right Page Inner Spine Shadow */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          width: '40px',
                          background: 'linear-gradient(to right, rgba(0,0,0,0.22), rgba(0,0,0,0.06) 60%, transparent)',
                          pointerEvents: 'none',
                        }}
                      />
                      {/* Right Page Turn Curl Hint on Hover */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          width: '32px',
                          height: '32px',
                          background: 'linear-gradient(135deg, transparent 50%, rgba(245, 158, 11, 0.4) 50%)',
                          pointerEvents: 'none',
                        }}
                      />
                      {/* Right Page Number Badge */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '16px',
                          background: 'rgba(0,0,0,0.6)',
                          color: '#FFFFFF',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                        }}
                      >
                        {rightPageNum}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* ==================== REFLOWABLE EREADER MODE ==================== */
            <div
              style={{
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                padding: '2.5rem 2rem',
                maxWidth: '780px',
                margin: '0 auto',
              }}
            >
              {showRequestForm ? (
                /* Institutional / Full Manuscript Request Access Gate */
                <div
                  style={{
                    background: themeStyles.cardBg,
                    border: '1px solid ' + themeStyles.border,
                    borderRadius: '16px',
                    padding: '2.5rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: themeStyles.accent + '20',
                      color: themeStyles.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto',
                    }}
                  >
                    <BookMarked size={28} />
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                    {language === 'ta' ? 'முழு நூலைப் பெற விரும்புகிறீர்களா?' : 'Request Complete Institutional Edition'}
                  </h3>
                  <p style={{ opacity: 0.8, fontSize: '0.92rem', maxWidth: '520px', margin: '0 auto 1.75rem auto', lineHeight: 1.6 }}>
                    {language === 'ta'
                      ? `“${book.title.ta}” நூலின் முழு மின்னணுப் பிரதியை அல்லது உங்கள் கல்வி நிறுவனத்திற்கான பாடத்திட்ட பதிப்பைப் பெற உங்கள் விவரங்களைப் பதிவு செய்யுங்கள்.`
                      : `Receive the unabridged digital edition of “${book.title.en}” or request complimentary academic copies for your school, college, or library.`}
                  </p>

                  {requested ? (
                    <div
                      style={{
                        background: '#ECFDF5',
                        border: '1.5px solid #A7F3D0',
                        color: '#065F46',
                        padding: '1.25rem',
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                      }}
                    >
                      {language === 'ta'
                        ? 'நன்றி! உங்கள் கோரிக்கை பதிவு செய்யப்பட்டது. ஆச்சாரியா பதிப்பக அலுவலகம் உங்களைத் தொடர்பு கொள்ளும்.'
                        : 'Thank you! Your institutional request has been recorded. Our editorial office will dispatch access details to your email.'}
                    </div>
                  ) : (
                    <form onSubmit={handleRequestSubmit} style={{ maxWidth: '420px', margin: '0 auto', textAlign: 'left' }}>
                      <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem', opacity: 0.8 }}>
                          {language === 'ta' ? 'மின்னஞ்சல் முகவரி' : 'Work / Personal Email'}
                        </label>
                        <input
                          type="email"
                          required
                          value={reqEmail}
                          onChange={(e) => setReqEmail(e.target.value)}
                          placeholder="principal@institution.edu"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid ' + themeStyles.border,
                            background: themeStyles.bg,
                            color: themeStyles.text,
                            fontSize: '0.92rem',
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem', opacity: 0.8 }}>
                          {language === 'ta' ? 'நிறுவனம் / பள்ளி / கல்லூரி பெயர்' : 'Institution / University / Organization'}
                        </label>
                        <input
                          type="text"
                          required
                          value={reqOrg}
                          onChange={(e) => setReqOrg(e.target.value)}
                          placeholder="School or Campus Name"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid ' + themeStyles.border,
                            background: themeStyles.bg,
                            color: themeStyles.text,
                            fontSize: '0.92rem',
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          background: themeStyles.accent,
                          color: '#FFFFFF',
                          padding: '0.85rem',
                          borderRadius: '8px',
                          border: 'none',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <span>{language === 'ta' ? 'கோரிக்கையை அனுப்புக' : 'Submit Access Request'}</span>
                        <Send size={16} />
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                /* Typography eReader */
                <div>
                  <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: themeStyles.accent,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {language === 'ta' ? 'அதிகாரப்பூர்வ மாதிரி அத்தியாயம்' : 'OFFICIAL SAMPLE CHAPTER'}
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
                        fontWeight: 800,
                        margin: '0.5rem 0',
                        lineHeight: 1.25,
                      }}
                    >
                      {currentChapter.title[language]}
                    </h2>
                    {currentChapter.subtitle && (
                      <p style={{ opacity: 0.75, fontSize: '0.95rem', fontStyle: 'italic', margin: 0 }}>
                        {currentChapter.subtitle[language]}
                      </p>
                    )}
                    <div
                      style={{
                        width: '60px',
                        height: '2px',
                        background: themeStyles.accent,
                        margin: '1.25rem auto 0 auto',
                      }}
                    />
                  </div>

                  {/* Reading Typography */}
                  <div
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", var(--font-serif)',
                      fontSize: `${fontSize}px`,
                      lineHeight: 1.85,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {currentChapter.paragraphs[language].map((para, pIdx) => (
                      <p
                        key={pIdx}
                        style={{
                          marginBottom: '1.5rem',
                          textIndent: pIdx === 0 ? '0' : '1.5rem',
                        }}
                      >
                        {pIdx === 0 ? (
                          <span>
                            <span
                              style={{
                                float: 'left',
                                fontSize: `${fontSize * 2.8}px`,
                                lineHeight: 0.85,
                                marginRight: '0.65rem',
                                marginTop: '0.15rem',
                                fontWeight: 800,
                                color: themeStyles.accent,
                                fontFamily: 'var(--font-serif)',
                              }}
                            >
                              {para.charAt(0)}
                            </span>
                            {para.slice(1)}
                          </span>
                        ) : (
                          para
                        )}
                      </p>
                    ))}
                  </div>

                  {/* End of Chapter callout */}
                  <div
                    style={{
                      marginTop: '3.5rem',
                      padding: '2rem 1.75rem',
                      background: themeStyles.quoteBg,
                      border: '1.5px solid ' + themeStyles.border,
                      borderRadius: '16px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.45rem', color: themeStyles.accent }}>
                      {language === 'ta' ? 'அத்தியாயத்தின் முடிவு' : 'End of Chapter Sample'}
                    </div>
                    <p style={{ fontSize: '0.92rem', opacity: 0.85, maxWidth: '540px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                      {language === 'ta'
                        ? 'முழு நூலையும் உங்கள் இ-ரீடரில் வாசிக்க ஈபப் (EPUB) அல்லது அசல் பிடிஎஃப் (PDF) பதிவிறக்கம் செய்யுங்கள், அல்லது கல்வி நிறுவன பாடத்திட்ட பதிப்பைப் பெற பதிவு செய்யுங்கள்.'
                        : 'Download the complete reflowable EPUB eBook for Apple Books, Kindle & e-readers, download the official print PDF, or request institutional classroom sets.'}
                    </p>

                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                      {book.epubUrl && (
                        <a
                          href={book.epubUrl}
                          download
                          style={{
                            background: '#10B981',
                            color: '#FFFFFF',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '999px',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)',
                          }}
                        >
                          <Download size={16} />
                          <span>{language === 'ta' ? 'ஈபப் (EPUB) பதிவிறக்கம்' : 'Download EPUB eBook'}</span>
                        </a>
                      )}

                      {book.pdfUrl && (
                        <a
                          href={book.pdfUrl}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: '#DC2626',
                            color: '#FFFFFF',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '999px',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)',
                          }}
                        >
                          <Download size={16} />
                          <span>{language === 'ta' ? 'அதிகாரப்பூர்வ PDF (38 பக்கங்கள்)' : 'Download Official PDF (38 Pages)'}</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setShowRequestForm(true)}
                        style={{
                          background: themeStyles.cardBg,
                          color: themeStyles.text,
                          border: '1.5px solid ' + themeStyles.border,
                          padding: '0.75rem 1.5rem',
                          borderRadius: '999px',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <BookMarked size={16} color={themeStyles.accent} />
                        <span>{language === 'ta' ? 'கல்வி நிறுவன அணுகல்' : 'Institutional Access Gate'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ==================== THUMBNAILS TRAY DRAWER (FlipHTML5 Style) ==================== */}
          {showThumbnails && totalFlipPages > 0 && (
            <div
              style={{
                position: 'absolute',
                bottom: '60px',
                left: 0,
                right: 0,
                background: 'rgba(11, 15, 25, 0.96)',
                backdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.75rem 1rem',
                display: 'flex',
                gap: '0.75rem',
                overflowX: 'auto',
                zIndex: 30,
                boxShadow: '0 -10px 30px rgba(0,0,0,0.5)',
              }}
            >
              {book.flipbookPages?.map((pageUrl, idx) => {
                const pageNum = idx + 1;
                const isSelected = currentPage === pageNum || (currentPage > 1 && (leftPageNum === pageNum || rightPageNum === pageNum));
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      setShowThumbnails(false);
                    }}
                    style={{
                      flexShrink: 0,
                      cursor: 'pointer',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      border: isSelected ? '2px solid #F59E0B' : '1px solid rgba(255,255,255,0.15)',
                      padding: '2px',
                      background: '#1E2430',
                      textAlign: 'center',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <img
                      src={pageUrl}
                      alt={`Thumb ${pageNum}`}
                      style={{
                        width: '68px',
                        height: '92px',
                        objectFit: 'cover',
                        display: 'block',
                        borderRadius: '4px',
                      }}
                    />
                    <div style={{ fontSize: '0.68rem', color: isSelected ? '#F59E0B' : '#94A3B8', marginTop: '3px', fontWeight: 700 }}>
                      {pageNum}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM FLIPHTML5 CONTROL DOCK                             */}
        {/* ========================================================= */}
        <div
          style={{
            padding: '0.65rem 1.25rem',
            background: readerMode === 'flipbook' ? '#0F1219' : themeStyles.headerBg,
            borderTop: '1px solid ' + (readerMode === 'flipbook' ? 'rgba(255,255,255,0.08)' : themeStyles.border),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.82rem',
            zIndex: 10,
          }}
        >
          {/* Thumbnails Tray Toggle */}
          {readerMode === 'flipbook' && totalFlipPages > 0 ? (
            <button
              type="button"
              onClick={() => setShowThumbnails((prev) => !prev)}
              style={{
                border: 'none',
                background: showThumbnails ? '#F59E0B' : 'rgba(255,255,255,0.08)',
                color: showThumbnails ? '#000000' : '#CBD5E1',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 700,
                fontSize: '0.78rem',
              }}
              title="Show All 38 Page Thumbnails"
            >
              <Grid size={14} />
              <span>Thumbnails</span>
            </button>
          ) : (
            <div />
          )}

          {/* Stepper Navigation */}
          {readerMode === 'flipbook' && totalFlipPages > 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage(1)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: currentPage <= 1 ? 'rgba(255,255,255,0.2)' : '#CBD5E1',
                  cursor: currentPage <= 1 ? 'default' : 'pointer',
                  padding: '4px',
                }}
                title="First Page"
              >
                <ChevronsLeft size={16} />
              </button>

              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={handleFlipPrev}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: currentPage <= 1 ? 'rgba(255,255,255,0.2)' : '#CBD5E1',
                  cursor: currentPage <= 1 ? 'default' : 'pointer',
                  padding: '4px',
                }}
                title="Previous Spread"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Page Counter Indicator */}
              <div
                style={{
                  background: '#1E2430',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '6px',
                  padding: '3px 10px',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span style={{ color: '#F59E0B' }}>
                  {isCoverPage ? 'Page 1' : `${leftPageNum}-${Math.min(totalFlipPages, rightPageNum || leftPageNum || 1)}`}
                </span>
                <span style={{ opacity: 0.5 }}>/</span>
                <span>{totalFlipPages}</span>
              </div>

              <button
                type="button"
                disabled={currentPage >= totalFlipPages}
                onClick={handleFlipNext}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: currentPage >= totalFlipPages ? 'rgba(255,255,255,0.2)' : '#CBD5E1',
                  cursor: currentPage >= totalFlipPages ? 'default' : 'pointer',
                  padding: '4px',
                }}
                title="Next Spread"
              >
                <ChevronRight size={18} />
              </button>

              <button
                type="button"
                disabled={currentPage >= totalFlipPages}
                onClick={() => setCurrentPage(totalFlipPages)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: currentPage >= totalFlipPages ? 'rgba(255,255,255,0.2)' : '#CBD5E1',
                  cursor: currentPage >= totalFlipPages ? 'default' : 'pointer',
                  padding: '4px',
                }}
                title="Last Page"
              >
                <ChevronsRight size={16} />
              </button>
            </div>
          ) : (
            /* Text Mode Stepper */
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                type="button"
                disabled={activeChapterIndex === 0}
                onClick={() => setActiveChapterIndex(Math.max(0, activeChapterIndex - 1))}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  border: 'none',
                  background: 'transparent',
                  color: themeStyles.text,
                  opacity: activeChapterIndex === 0 ? 0.3 : 1,
                  cursor: activeChapterIndex === 0 ? 'default' : 'pointer',
                  fontWeight: 700,
                }}
              >
                <ChevronLeft size={16} />
                <span>{language === 'ta' ? 'முந்தைய அத்தியாயம்' : 'Previous Chapter'}</span>
              </button>

              <div style={{ opacity: 0.7, fontWeight: 600 }}>
                {activeChapterIndex + 1} / {chapters.length}
              </div>

              <button
                type="button"
                disabled={activeChapterIndex === chapters.length - 1}
                onClick={() => setActiveChapterIndex(Math.min(chapters.length - 1, activeChapterIndex + 1))}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  border: 'none',
                  background: 'transparent',
                  color: themeStyles.text,
                  opacity: activeChapterIndex === chapters.length - 1 ? 0.3 : 1,
                  cursor: activeChapterIndex === chapters.length - 1 ? 'default' : 'pointer',
                  fontWeight: 700,
                }}
              >
                <span>{language === 'ta' ? 'அடுத்த அத்தியாயம்' : 'Next Chapter'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          )}

          {/* Quick Info Badge */}
          <div style={{ fontSize: '0.74rem', opacity: 0.7, color: readerMode === 'flipbook' ? '#94A3B8' : themeStyles.text }}>
            {readerMode === 'flipbook' ? (
              <span>💡 Use &larr; &rarr; Arrow keys or click page edges to flip</span>
            ) : (
              <span>{book.edition}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
