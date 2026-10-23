import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div
      style={{
        textAlign: centered ? 'center' : 'left',
        marginBottom: '2.75rem',
        maxWidth: centered ? '820px' : '100%',
        margin: centered ? '0 auto 2.75rem auto' : '0 0 2.75rem 0',
      }}
    >
      {badge && (
        <div style={{ marginBottom: '0.85rem' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              color: '#B45309',
              padding: '0.3rem 0.95rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              boxShadow: '0 1px 3px rgba(217, 119, 6, 0.08)',
            }}
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          color: '#0F172A',
          fontSize: 'clamp(1.85rem, 3.2vw, 2.55rem)',
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '-0.025em',
          marginBottom: '0.85rem',
          fontVariantNumeric: 'lining-nums proportional-nums',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: '#475569',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            fontWeight: 400,
            maxWidth: '720px',
            margin: centered ? '0 auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
