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
        marginBottom: '3rem',
        maxWidth: centered ? '800px' : '100%',
        margin: centered ? '0 auto 3rem auto' : '0 0 3rem 0',
      }}
    >
      {badge && (
        <div style={{ marginBottom: '0.75rem' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              color: 'var(--gold-glow)',
              padding: '0.25rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        className="font-serif heading-gold"
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          fontWeight: 700,
          lineHeight: 1.25,
          marginBottom: '1rem',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
