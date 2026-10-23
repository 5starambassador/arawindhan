'use client';

import React from 'react';
import { ShieldCheck, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { MASTER_CLAIMS } from '@/data/claims';

interface ClaimBadgeProps {
  claimId: string;
  status?: 'CONFIRMED' | 'SOURCE_CLAIM' | 'PENDING_VERIFICATION' | 'CONFLICTING';
  language?: 'en' | 'ta';
}

export const ClaimBadge: React.FC<ClaimBadgeProps> = ({
  claimId,
  status,
  language = 'en',
}) => {
  const masterClaim = MASTER_CLAIMS.find((c) => c.id.toUpperCase() === claimId.toUpperCase());
  const effectiveStatus = status || masterClaim?.verificationStatus || 'CONFIRMED';

  let badgeClass = 'badge-confirmed';
  let Icon = ShieldCheck;
  let text = language === 'ta' ? 'சரிபார்க்கப்பட்டது' : 'Verified Claim';

  if (effectiveStatus === 'SOURCE_CLAIM') {
    badgeClass = 'badge-source';
    Icon = BookOpen;
    text = language === 'ta' ? 'நிறுவன ஆவணம்' : 'Institutional Record';
  } else if (effectiveStatus === 'PENDING_VERIFICATION') {
    badgeClass = 'badge-pending';
    Icon = Clock;
    text = language === 'ta' ? 'சரிபார்ப்பில் உள்ளது' : 'Pending Verification';
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
