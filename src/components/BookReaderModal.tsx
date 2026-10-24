'use client';

import React, { useState, useEffect } from 'react';
import { X, BookOpen, ChevronLeft, ChevronRight, Type, Moon, Sun, BookMarked, Download, Send } from 'lucide-react';
import { booksList } from '@/data/books';
import { BookItem, Language } from '@/types';

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

  useEffect(() => {
    const handleOpen = (e: CustomEvent<{ slug: string }>) => {
      if (e.detail?.slug) {
        setActiveBookSlug(e.detail.slug);
        setActiveChapterIndex(0);
        setShowRequestForm(false);
        setRequested(false);
      }
    };

    window.addEventListener('open-book-reader' as any, handleOpen as any);
    return () => {
      window.removeEventListener('open-book-reader' as any, handleOpen as any);
    };
  }, []);

  const book = booksList.find((b) => b.slug === activeBookSlug);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveBookSlug(null);
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
  }, [activeBookSlug]);

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
    {
      title: {
        en: 'Chapter 1: Foundational Framework',
        ta: 'அத்தியாயம் 1: மூலக் கொள்கைகள்',
      },
      subtitle: {
        en: 'Principles, Mechanics & Practical Application',
        ta: 'கோட்பாடுகள், வழிமுறைகள் & நடைமுறைப் பயன்பாடு',
      },
      paragraphs: {
        en: [
          `In “${book.title.en}”, Dr. J. Arawindhan establishes that lasting human transformation must begin from within. External regulations and standard examinations merely measure compliance; true mastery is an internal engine.`,
          `Key Pillar 1: ${book.keyThemes.en[0] || 'Whole-Brain Integration'}. When the mind is aligned with purpose, learning ceases to be exhausting work and transforms into an effortless state of flow.`,
          `Key Pillar 2: ${book.keyThemes.en[1] || 'Empowered Execution'}. The gap between knowing and doing is where potential decays. Systems must be engineered to make deliberate action inevitable.`,
          `Targeted for ${book.targetAudience.en}, this chapter provides daily frameworks to turn abstract philosophy into daily muscle memory.`,
        ],
        ta: [
          `“${book.title.ta}” நூலில், நிலையான மனித உருமாற்றம் உள்ளிருந்தே தொடங்க வேண்டும் என்பதை முனைவர் ஜே. அரவிந்தன் ஆணித்தரமாக நிறுவுகிறார். வெளிப்புறத் தேர்வுகளும் விதிகளும் சாதாரண திறனையே அளவிடுகின்றன; உண்மையான ஆளுமை என்பது உள்ளார்ந்த ஆற்றலாகும்.`,
          `முதன்மைத் தூண் 1: ${book.keyThemes.ta[0] || 'முழுமூளை ஒருங்கிணைப்பு'}. மனம் லட்சியத்தோடு இணையும் போது, கற்றல் என்பது சுமையாக இல்லாமல் இயல்பான பெருமகிழ்ச்சியாக மாறுகிறது.`,
          `முதன்மைத் தூண் 2: ${book.keyThemes.ta[1] || 'உறுதியான செயல்பாடு'}. அறிதலுக்கும் செயலுக்கும் இடையிலான இடைவெளியே மனித ஆற்றலை வீணடிக்கிறது. தினசரி செயல்களை வெற்றிகரமாக மாற்றும் நடைமுறை உத்திகளை இந்நூல் வழங்குகிறது.`,
          `${book.targetAudience.ta} ஆகியோருக்கு ஏற்ற வகையில் அமைக்கப்பட்ட இந்நூல், உயர்ந்த தத்துவங்களை அன்றாட வாழ்வின் பழக்கவழக்கமாக மாற்ற வழிகாட்டுகிறது.`,
        ],
      },
    },
  ];

  const currentChapter = chapters[activeChapterIndex] || chapters[0];

  // Theme styling definitions
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

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={() => setActiveBookSlug(null)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          height: '92vh',
          background: themeStyles.bg,
          color: themeStyles.text,
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px ' + themeStyles.border,
          overflow: 'hidden',
          transition: 'background 0.2s ease, color 0.2s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div
          style={{
            padding: '1rem 1.5rem',
            background: themeStyles.headerBg,
            borderBottom: '1px solid ' + themeStyles.border,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '220px' }}>
            <BookOpen size={20} color={themeStyles.accent} />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.98rem', lineHeight: 1.2 }}>
                {book.title[language]}
              </div>
              <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '2px' }}>
                {book.author[language]}
              </div>
            </div>
          </div>

          {/* Reader Preferences Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Font Size Adjusters */}
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

            {/* Theme Selectors */}
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

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveBookSlug(null)}
              style={{
                border: 'none',
                background: themeStyles.cardBg,
                color: themeStyles.text,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
              title="Close Reader (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Chapter Tabs Sub-bar */}
        <div
          style={{
            padding: '0.65rem 1.5rem',
            background: themeStyles.cardBg,
            borderBottom: '1px solid ' + themeStyles.border,
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
          }}
        >
          {chapters.map((chap, cIdx) => (
            <button
              key={cIdx}
              type="button"
              onClick={() => {
                setActiveChapterIndex(cIdx);
                setShowRequestForm(false);
              }}
              style={{
                border: 'none',
                background: activeChapterIndex === cIdx ? themeStyles.accent : 'transparent',
                color: activeChapterIndex === cIdx ? '#FFFFFF' : themeStyles.text,
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: activeChapterIndex === cIdx ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              {chap.title[language]}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setShowRequestForm(true)}
            style={{
              border: '1px dashed ' + themeStyles.accent,
              background: showRequestForm ? themeStyles.accent : 'transparent',
              color: showRequestForm ? '#FFFFFF' : themeStyles.accent,
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              marginLeft: 'auto',
            }}
          >
            {language === 'ta' ? 'முழு நூல் பெற' : 'Request Full Edition'}
          </button>
        </div>

        {/* Reading Body Pane */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '2.5rem 2rem',
            maxWidth: '740px',
            margin: '0 auto',
            width: '100%',
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
            /* Digital Reader Layout */
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

              {/* Text paragraphs with luxury serif reading typography */}
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
                      /* Elegant Drop Cap for opening paragraph */
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
                  padding: '1.75rem',
                  background: themeStyles.quoteBg,
                  border: '1.5px solid ' + themeStyles.border,
                  borderRadius: '14px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.35rem', color: themeStyles.accent }}>
                  {language === 'ta' ? 'அத்தியாயத்தின் முடிவு' : 'End of Chapter Sample'}
                </div>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, maxWidth: '520px', margin: '0 auto 1.25rem auto', lineHeight: 1.6 }}>
                  {language === 'ta'
                    ? 'முழு நூலையும் தொடர்ந்து வாசிக்க அல்லது உங்கள் பள்ளி/கல்லூரிக்கு பாடத்திட்ட பதிப்பைப் பெற இலவசமாகப் பதிவு செய்யுங்கள்.'
                    : 'To continue reading the complete manuscript or request institutional classroom sets, proceed to the access gate.'}
                </p>
                <button
                  type="button"
                  onClick={() => setShowRequestForm(true)}
                  style={{
                    background: themeStyles.accent,
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '0.65rem 1.5rem',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                  }}
                >
                  {language === 'ta' ? 'முழு பதிப்பை இலவசமாகப் பெறுக' : 'Request Full Manuscript Access'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation Footer */}
        <div
          style={{
            padding: '0.85rem 1.5rem',
            background: themeStyles.headerBg,
            borderTop: '1px solid ' + themeStyles.border,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.82rem',
          }}
        >
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
      </div>
    </div>
  );
};
