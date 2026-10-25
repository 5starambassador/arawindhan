'use client';

import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, X, Sparkles, Radio, MessageSquare, Heart, Eye } from 'lucide-react';
import { SocialPostItem, SocialPlatform, Language } from '@/types';
import { officialSocialAccounts, curatedSocialPosts } from '@/data/socialFeeds';

// Bespoke platform SVG icons for 100% reliability
export function PlatformIcon({
  platform,
  size = 18,
  color,
}: {
  platform: 'youtube' | 'instagram' | 'linkedin';
  size?: number;
  color?: string;
}) {
  if (platform === 'youtube') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color || '#DC2626'} style={{ display: 'inline-block', flexShrink: 0 }}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }
  if (platform === 'instagram') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || '#E1306C'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', flexShrink: 0 }}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color || '#0A66C2'} style={{ display: 'inline-block', flexShrink: 0 }}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

interface UnifiedSocialHubProps {
  initialPosts?: SocialPostItem[];
  lang: Language;
}

export function UnifiedSocialHub({ initialPosts = curatedSocialPosts, lang }: UnifiedSocialHubProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<SocialPlatform>('all');
  const [posts, setPosts] = useState<SocialPostItem[]>(initialPosts);
  const [activeVideoModal, setActiveVideoModal] = useState<SocialPostItem | null>(null);

  // Auto-refresh dynamic social posts from API route (YouTube RSS + Webhook-synced Instagram/LinkedIn)
  useEffect(() => {
    let isMounted = true;
    fetch('/api/social/latest')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data.success && Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch(() => {
        // Fallback to initialPosts
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle escape key for video modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideoModal(null);
    };
    if (activeVideoModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideoModal]);

  const filteredPosts = selectedPlatform === 'all'
    ? posts
    : posts.filter((p) => p.platform === selectedPlatform);

  return (
    <section className="section-py" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              padding: '0.35rem 1.1rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              color: 'var(--gold-glow)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}
          >
            <Radio size={15} className="animate-pulse" style={{ color: '#D97706' }} />
            <span>{lang === 'ta' ? 'அதிகாரப்பூர்வ சமூக ஊடக & வீடியோ மையம்' : 'EXECUTIVE SOCIAL & BROADCASTS HUB'}</span>
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
            {lang === 'ta' ? 'காணொளிகள், சிந்தனைகள் & வளாகப் பகிர்வுகள்' : 'Broadcasts, Campus Moments & Thought Leadership'}
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {lang === 'ta'
              ? 'முனைவர் ஜெ. அரவிந்தன் அவர்களின் அதிகாரப்பூர்வ யூடியூப் உரைகள், இன்ஸ்டாகிராம் வளாகப் பதிவுகள் மற்றும் லிங்க்ட்இன் சிந்தனைப் பகிர்வுகள்.'
              : 'Direct perspectives, right-brain neuroplasticity milestones, and educational thought leadership streamed across official platforms.'}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3rem',
          }}
        >
          <button
            onClick={() => setSelectedPlatform('all')}
            style={{
              padding: '0.65rem 1.35rem',
              borderRadius: '9999px',
              border: selectedPlatform === 'all' ? '2px solid #B45309' : '1px solid var(--border-light)',
              background: selectedPlatform === 'all' ? '#B45309' : 'var(--bg-subtle, #FAF8F5)',
              color: selectedPlatform === 'all' ? '#FFFFFF' : 'var(--text-secondary)',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {lang === 'ta' ? `அனைத்தும் (${posts.length})` : `All Updates (${posts.length})`}
          </button>

          <button
            onClick={() => setSelectedPlatform('youtube')}
            style={{
              padding: '0.65rem 1.35rem',
              borderRadius: '9999px',
              border: selectedPlatform === 'youtube' ? '2px solid #DC2626' : '1px solid var(--border-light)',
              background: selectedPlatform === 'youtube' ? '#DC2626' : 'var(--bg-subtle, #FAF8F5)',
              color: selectedPlatform === 'youtube' ? '#FFFFFF' : 'var(--text-secondary)',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease',
            }}
          >
            <PlatformIcon platform="youtube" size={16} color={selectedPlatform === 'youtube' ? '#FFFFFF' : '#DC2626'} />
            <span>{lang === 'ta' ? 'யூடியூப் வீடியோக்கள்' : 'YouTube Broadcasts'}</span>
          </button>

          <button
            onClick={() => setSelectedPlatform('instagram')}
            style={{
              padding: '0.65rem 1.35rem',
              borderRadius: '9999px',
              border: selectedPlatform === 'instagram' ? '2px solid #E1306C' : '1px solid var(--border-light)',
              background: selectedPlatform === 'instagram' ? 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)' : 'var(--bg-subtle, #FAF8F5)',
              color: selectedPlatform === 'instagram' ? '#FFFFFF' : 'var(--text-secondary)',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease',
            }}
          >
            <PlatformIcon platform="instagram" size={16} color={selectedPlatform === 'instagram' ? '#FFFFFF' : '#E1306C'} />
            <span>{lang === 'ta' ? 'இன்ஸ்டாகிராம் பதிவுகள்' : 'Instagram Feed'}</span>
          </button>

          <button
            onClick={() => setSelectedPlatform('linkedin')}
            style={{
              padding: '0.65rem 1.35rem',
              borderRadius: '9999px',
              border: selectedPlatform === 'linkedin' ? '2px solid #0A66C2' : '1px solid var(--border-light)',
              background: selectedPlatform === 'linkedin' ? '#0A66C2' : 'var(--bg-subtle, #FAF8F5)',
              color: selectedPlatform === 'linkedin' ? '#FFFFFF' : 'var(--text-secondary)',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease',
            }}
          >
            <PlatformIcon platform="linkedin" size={16} color={selectedPlatform === 'linkedin' ? '#FFFFFF' : '#0A66C2'} />
            <span>{lang === 'ta' ? 'லிங்க்ட்இன் சிந்தனைகள்' : 'LinkedIn Articles'}</span>
          </button>
        </div>

        {/* Dynamic Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          {filteredPosts.map((post) => {
            const isYT = post.platform === 'youtube';
            const isIG = post.platform === 'instagram';
            const isLI = post.platform === 'linkedin';

            return (
              <div
                key={post.id}
                className="card-premium group"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: isYT ? '1.5px solid rgba(220, 38, 38, 0.35)' : isIG ? '1.5px solid rgba(225, 48, 108, 0.35)' : '1.5px solid rgba(10, 102, 194, 0.35)',
                  background: 'var(--card-bg, #FFFFFF)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                {/* Platform Header */}
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    borderBottom: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'var(--bg-subtle, #FAF8F5)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <PlatformIcon platform={post.platform} size={20} />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                        {post.author.name}
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                        {post.author.handle} &bull; {post.date}
                      </div>
                    </div>
                  </div>

                  {post.tag && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: isYT ? '#FEF2F2' : isIG ? '#FDF2F8' : '#EFF6FF',
                        color: isYT ? '#DC2626' : isIG ? '#DB2777' : '#1D4ED8',
                        border: isYT ? '1px solid #FCA5A5' : isIG ? '1px solid #F472B6' : '1px solid #93C5FD',
                      }}
                    >
                      {post.tag[lang]}
                    </span>
                  )}
                </div>

                {/* Media Section */}
                {post.mediaUrl && (
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: isIG ? '1/1' : '16/9',
                      background: '#0F172A',
                      overflow: 'hidden',
                      cursor: isYT ? 'pointer' : 'default',
                    }}
                    onClick={() => {
                      if (isYT) setActiveVideoModal(post);
                    }}
                  >
                    <img
                      src={post.mediaUrl}
                      alt={post.title[lang]}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      className="hover:scale-105"
                    />

                    {/* Gradient scrim */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7) 0%, transparent 60%)',
                      }}
                    />

                    {/* YouTube Play Overlay */}
                    {isYT && (
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
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: '#DC2626',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                            boxShadow: '0 8px 20px rgba(220, 38, 38, 0.5)',
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          <Play size={24} fill="#FFFFFF" style={{ marginLeft: '3px' }} />
                        </div>
                      </div>
                    )}

                    {/* Metrics Badge */}
                    {post.metrics && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          background: 'rgba(0, 0, 0, 0.75)',
                          backdropFilter: 'blur(4px)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          color: '#FFFFFF',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                        }}
                      >
                        {post.metrics.views && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Eye size={12} /> {post.metrics.views}
                          </span>
                        )}
                        {post.metrics.likes && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Heart size={12} fill="#EF4444" color="#EF4444" /> {post.metrics.likes}
                          </span>
                        )}
                        {post.metrics.comments && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <MessageSquare size={12} /> {post.metrics.comments}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Content Section */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      lineHeight: 1.4,
                      marginBottom: '0.65rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {post.title[lang]}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem',
                      whiteSpace: 'pre-line',
                      flex: 1,
                    }}
                  >
                    {post.content[lang]}
                  </p>

                  {/* Action Link Footer */}
                  <div
                    style={{
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '1rem',
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    {isYT ? (
                      <button
                        onClick={() => setActiveVideoModal(post)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#DC2626',
                          fontWeight: 800,
                          fontSize: '0.86rem',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: 0,
                        }}
                      >
                        <Play size={15} fill="#DC2626" />
                        <span>{lang === 'ta' ? 'வீடியோவை இயக்குக' : 'Play Broadcast'}</span>
                      </button>
                    ) : (
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: isIG ? '#DB2777' : '#0A66C2',
                          fontWeight: 800,
                          fontSize: '0.86rem',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <span>
                          {isIG
                            ? (lang === 'ta' ? 'இன்ஸ்டாகிராமில் காண்க' : 'View on Instagram')
                            : (lang === 'ta' ? 'முழு கட்டுரை (LinkedIn)' : 'Read on LinkedIn')}
                        </span>
                        <ExternalLink size={14} />
                      </a>
                    )}

                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Official Channels Connect Strip */}
        <div
          style={{
            background: 'linear-gradient(135deg, #18181B 0%, #0F172A 100%)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            border: '2px solid #D97706',
            boxShadow: '0 20px 40px -15px rgba(217, 119, 6, 0.25)',
            color: '#FFFFFF',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ color: '#FDE68A', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {lang === 'ta' ? 'அதிகாரப்பூர்வ இணைப்புகள்' : 'DIRECT EXECUTIVE NETWORKS'}
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.35rem', color: '#FFFFFF' }}>
              {lang === 'ta' ? 'முனைவர் ஜெ. அரவிந்தன் அவர்களுடன் இணையுங்கள்' : 'Connect with Dr. J. Arawindhan Across Platforms'}
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* YouTube CTA */}
            <a
              href={`${officialSocialAccounts.youtube.url}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(220, 38, 38, 0.12)',
                border: '1px solid rgba(220, 38, 38, 0.4)',
                borderRadius: '14px',
                padding: '1.25rem',
                textDecoration: 'none',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s ease, background 0.2s ease',
              }}
              className="hover:scale-105"
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <PlatformIcon platform="youtube" size={24} color="#FFFFFF" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: '0.96rem', color: '#FEF2F2' }}>YouTube Channel</div>
                <div style={{ fontSize: '0.8rem', color: '#FCA5A5' }}>{officialSocialAccounts.youtube.handle}</div>
              </div>
              <ExternalLink size={16} style={{ color: '#FCA5A5' }} />
            </a>

            {/* Instagram CTA */}
            <a
              href={officialSocialAccounts.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(225, 48, 108, 0.12)',
                border: '1px solid rgba(225, 48, 108, 0.4)',
                borderRadius: '14px',
                padding: '1.25rem',
                textDecoration: 'none',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s ease, background 0.2s ease',
              }}
              className="hover:scale-105"
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <PlatformIcon platform="instagram" size={24} color="#FFFFFF" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: '0.96rem', color: '#FDF2F8' }}>Instagram Profile</div>
                <div style={{ fontSize: '0.8rem', color: '#F472B6' }}>{officialSocialAccounts.instagram.handle}</div>
              </div>
              <ExternalLink size={16} style={{ color: '#F472B6' }} />
            </a>

            {/* LinkedIn CTA */}
            <a
              href={officialSocialAccounts.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(10, 102, 194, 0.12)',
                border: '1px solid rgba(10, 102, 194, 0.4)',
                borderRadius: '14px',
                padding: '1.25rem',
                textDecoration: 'none',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s ease, background 0.2s ease',
              }}
              className="hover:scale-105"
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0A66C2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <PlatformIcon platform="linkedin" size={24} color="#FFFFFF" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: '0.96rem', color: '#EFF6FF' }}>LinkedIn Profile</div>
                <div style={{ fontSize: '0.8rem', color: '#93C5FD' }}>Dr. J. Arawindhan</div>
              </div>
              <ExternalLink size={16} style={{ color: '#93C5FD' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal for YouTube Videos */}
      {activeVideoModal && activeVideoModal.youtubeId && (
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
          onClick={() => setActiveVideoModal(null)}
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
              onClick={() => setActiveVideoModal(null)}
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
              }}
            >
              <X size={20} />
            </button>

            {/* Video Iframe */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideoModal.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideoModal.title[lang]}
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

            {/* Video Details */}
            <div style={{ padding: '1.5rem 1.75rem', color: '#FFFFFF', background: '#0F172A' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, lineHeight: 1.35, marginBottom: '0.5rem', color: '#F8FAFC' }}>
                {activeVideoModal.title[lang]}
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                {activeVideoModal.content[lang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
