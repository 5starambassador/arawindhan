'use client';

import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, X, Sparkles, Radio } from 'lucide-react';
import { YouTubeVideoItem, Language } from '@/types';
import { youtubeChannelInfo } from '@/data/videos';

function YouTubeIcon({
  size = 20,
  color = 'currentColor',
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface YouTubeShowcaseProps {
  initialVideos: YouTubeVideoItem[];
  lang: Language;
}

export function YouTubeShowcase({ initialVideos, lang }: YouTubeShowcaseProps) {
  const [videos, setVideos] = useState<YouTubeVideoItem[]>(initialVideos);
  const [activeVideo, setActiveVideo] = useState<YouTubeVideoItem | null>(null);

  // Auto-refresh from API route on client mount to ensure freshest uploads
  useEffect(() => {
    let isMounted = true;
    fetch('/api/youtube/latest')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data.success && Array.isArray(data.videos) && data.videos.length > 0) {
          setVideos(data.videos);
        }
      })
      .catch(() => {
        // Silently preserve initialVideos on any network error
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Keyboard escape listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  const featuredVideo = videos.find((v) => v.featured) || videos[0];
  const otherVideos = videos.filter((v) => v.id !== featuredVideo?.id);

  return (
    <section className="section-py" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1180px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#FEF2F2',
              border: '1px solid #FCA5A5',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#DC2626',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}
          >
            <Radio size={15} className="animate-pulse" style={{ color: '#DC2626' }} />
            <span>{lang === 'ta' ? 'அதிகாரப்பூர்வ வீடியோ பகிர்வுகள்' : 'OFFICIAL YOUTUBE BROADCASTS'}</span>
          </div>

          <h2
            className="font-serif heading-gold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            {lang === 'ta' ? 'காணொளி உரைகள் & தொலைநோக்குப் பகிர்வுகள்' : 'Keynotes, Broadcasts & Visionary Talks'}
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              maxWidth: '750px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {lang === 'ta'
              ? 'முழுமூளைக் கல்வி, செயற்கை நுண்ணறிவு தயார்நிலை மற்றும் எதிர்கால தலைமைத்துவம் குறித்த முனைவர் அரவிந்தன் அவர்களின் அதிகாரப்பூர்வ வீடியோக்கள்.'
              : 'Direct perspectives on whole-brain pedagogy, AI readiness, and future-proof leadership from Dr. J. Arawindhan.'}
          </p>
        </div>

        {/* Video Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: videos.length > 1 ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {videos.map((vid) => {
            const isFeatured = vid.id === featuredVideo?.id;
            return (
              <div
                key={vid.id}
                onClick={() => setActiveVideo(vid)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveVideo(vid);
                  }
                }}
                className="card-premium group"
                style={{
                  cursor: 'pointer',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: isFeatured ? '2px solid #F59E0B' : '1px solid var(--border-light)',
                  background: 'var(--card-bg, #FFFFFF)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  boxShadow: isFeatured ? '0 10px 25px -5px rgba(245, 158, 11, 0.25)' : 'var(--shadow-md)',
                }}
              >
                {/* Thumbnail Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    background: '#0F172A',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${vid.id}/hqdefault.jpg`}
                    alt={vid.title[lang]}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    className="hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.1) 60%, transparent 100%)',
                    }}
                  />

                  {/* Play Button Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: '#DC2626',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        boxShadow: '0 8px 24px rgba(220, 38, 38, 0.5)',
                        transition: 'transform 0.2s ease, background 0.2s ease',
                      }}
                    >
                      <Play size={28} fill="#FFFFFF" style={{ marginLeft: '4px' }} />
                    </div>
                  </div>

                  {/* Badges Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      display: 'flex',
                      gap: '0.5rem',
                      zIndex: 2,
                    }}
                  >
                    {isFeatured && (
                      <span
                        style={{
                          background: '#D97706',
                          color: '#FFFFFF',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        <Sparkles size={12} />
                        {lang === 'ta' ? 'சிறப்புக் காணொளி' : 'FEATURED'}
                      </span>
                    )}
                    {vid.category && (
                      <span
                        style={{
                          background: 'rgba(15, 23, 42, 0.85)',
                          backdropFilter: 'blur(6px)',
                          color: '#FEF3C7',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          border: '1px solid rgba(254, 243, 199, 0.2)',
                        }}
                      >
                        {vid.category[lang]}
                      </span>
                    )}
                  </div>

                  {/* YouTube Tag at bottom right */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '12px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <YouTubeIcon size={14} color="#EF4444" />
                    <span>YouTube</span>
                  </div>
                </div>

                {/* Video Info */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      lineHeight: 1.4,
                      marginBottom: '0.65rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {vid.title[lang]}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                      flex: 1,
                    }}
                  >
                    {vid.description[lang]}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '1rem',
                      marginTop: 'auto',
                      fontSize: '0.85rem',
                    }}
                  >
                    <span style={{ color: '#DC2626', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Play size={15} fill="#DC2626" />
                      {lang === 'ta' ? 'காணொளியைக் காண்க' : 'Watch Broadcast'}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      {vid.publishedAt}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Channel Banner Call-To-Action */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1E1B18 0%, #0F172A 100%)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            border: '2px solid #B45309',
            boxShadow: '0 20px 40px -15px rgba(180, 83, 9, 0.3)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#DC2626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(220, 38, 38, 0.4)',
                flexShrink: 0,
              }}
            >
              <YouTubeIcon size={34} color="#FFFFFF" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1.3rem', color: '#FEF3C7' }}>
                  {youtubeChannelInfo.channelTitle}
                </span>
                <span style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                  ({youtubeChannelInfo.channelHandle})
                </span>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '0.92rem', margin: 0, maxWidth: '620px', lineHeight: 1.6 }}>
                {lang === 'ta'
                  ? 'முனைவர் ஜெ. அரவிந்தன் அவர்களின் புதிய உரைகள், நேர்காணல்கள் மற்றும் கல்விச் சிந்தனைகளை உடனுக்குடன் பெற யூடியூபில் இணையுங்கள்.'
                  : 'Subscribe for keynote addresses, leadership masterclasses, whole-brain education frameworks, and latest insights.'}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`${youtubeChannelInfo.channelUrl}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#DC2626',
                color: '#FFFFFF',
                padding: '0.85rem 1.6rem',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)',
                transition: 'transform 0.2s ease, background 0.2s ease',
              }}
              className="hover:scale-105"
            >
              <YouTubeIcon size={20} color="#FFFFFF" />
              <span>{lang === 'ta' ? 'சேனலில் இணையுங்கள் (Subscribe)' : 'Subscribe on YouTube'}</span>
            </a>

            <a
              href={youtubeChannelInfo.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                padding: '0.85rem 1.4rem',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
            >
              <span>{lang === 'ta' ? 'அனைத்து வீடியோக்கள்' : 'View All Videos'}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Video Player Modal / Lightbox */}
      {activeVideo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '920px',
              background: '#0F172A',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.75)',
              border: '1px solid #334155',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              aria-label="Close video player"
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'background 0.2s ease',
              }}
            >
              <X size={20} />
            </button>

            {/* Video Iframe (Lite Loaded on Click) */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title[lang]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </div>

            {/* Video Details in Modal */}
            <div style={{ padding: '1.5rem 1.75rem', color: '#FFFFFF', background: '#0F172A' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                <span
                  style={{
                    background: '#D97706',
                    color: '#FFFFFF',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                  }}
                >
                  {activeVideo.category ? activeVideo.category[lang] : 'Broadcast'}
                </span>
                <span style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                  {activeVideo.publishedAt}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, lineHeight: 1.35, marginBottom: '0.65rem', color: '#F8FAFC' }}>
                {activeVideo.title[lang]}
              </h3>

              <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                {activeVideo.description[lang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
