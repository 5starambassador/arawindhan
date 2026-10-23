'use client';

import React from 'react';
import { ShieldCheck, BookOpen, Clock, AlertTriangle } from 'lucide-react';

interface ClaimBadgeProps {
  claimId: string;
  status?: 'CONFIRMED' | 'SOURCE_CLAIM' | 'PENDING_VERIFICATION' | 'CONFLICTING';
  language?: 'en' | 'ta';
}

export const ClaimBadge: React.FC<ClaimBadgeProps> = ({
  claimId,
  status = 'SOURCE_CLAIM',
  language = 'en',
}) => {
  let badgeClass = 'badge-source';
  let Icon = BookOpen;
  let text = language === 'ta' ? 'நிறுவன ஆவணம்' : 'Institutional Record';

  if (status === 'CONFIRMED') {
    badgeClass = 'badge-confirmed';
    Icon = ShieldCheck;
    text = language === 'ta' ? 'சரிபார்க்கப்பட்டது' : 'Verified Claim';
  } else if (status === 'PENDING_VERIFICATION') {
    badgeClass = 'badge-pending';
    Icon = Clock;
    text = language === 'ta' ? 'சரிபார்ப்பில் உள்ளது' : 'Pending Verification';
  } else if (status === 'CONFLICTING') {
    badgeClass = 'badge-conflict';
    Icon = AlertTriangle;
    text = language === 'ta' ? 'ஒப்பீட்டுத் தரவு' : 'Dual-Sourced';
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-claim-modal', {
          detail: { claimId },
        })
      );
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={badgeClass}
      title={`${language === 'ta' ? 'சான்று எண்' : 'Claim ID'}: ${claimId} (Click to inspect evidence)`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        cursor: 'pointer',
        border: 'none',
        padding: '0.2rem 0.55rem',
        borderRadius: '999px',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
      }}
    >
      <Icon size={12} />
      <span>{text}</span>
      <span style={{ opacity: 0.8, fontSize: '0.68rem', marginLeft: '2px', fontFamily: 'monospace', fontWeight: 700 }}>
        ({claimId})
      </span>
    </button>
  );
};
