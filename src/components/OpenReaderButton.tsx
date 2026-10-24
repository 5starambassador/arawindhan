'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';

interface OpenReaderButtonProps {
  slug: string;
  label?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'primary' | 'outline' | 'pill';
  mode?: 'flipbook' | 'text';
  showRequestForm?: boolean;
}

export const OpenReaderButton: React.FC<OpenReaderButtonProps> = ({
  slug,
  label = 'Read Online Sample',
  title,
  className = '',
  style = {},
  variant = 'primary',
  mode,
  showRequestForm = false,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-book-reader', {
          detail: { slug, mode, showRequestForm },
        })
      );
    }
  };

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={className}
        title={title}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
          border: '1px solid #FDE68A',
          color: '#B45309',
          fontWeight: 700,
          fontSize: '0.82rem',
          padding: '0.45rem 1rem',
          borderRadius: '999px',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          boxShadow: '0 2px 6px rgba(217, 119, 6, 0.12)',
          ...style,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(217, 119, 6, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 2px 6px rgba(217, 119, 6, 0.12)';
        }}
      >
        <BookOpen size={14} color="#D97706" />
        <span>{label}</span>
      </button>
    );
  }

  if (variant === 'outline') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={className}
        title={title}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          background: '#FFFFFF',
          border: '1.5px solid #FDE68A',
          color: 'var(--text-main)',
          fontWeight: 700,
          fontSize: '0.84rem',
          padding: '0.55rem 1.15rem',
          borderRadius: 'var(--radius-full)',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          ...style,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.borderColor = '#D97706';
          e.currentTarget.style.color = '#B45309';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.borderColor = '#FDE68A';
          e.currentTarget.style.color = 'var(--text-main)';
        }}
      >
        <BookOpen size={15} color="#D97706" />
        <span>{label}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`btn-gold ${className}`}
      title={title}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        border: 'none',
        ...style,
      }}
    >
      <BookOpen size={15} />
      <span>{label}</span>
    </button>
  );
};
