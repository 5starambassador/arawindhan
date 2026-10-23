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

  return (
    <span
      className={badgeClass}
      title={`${language === 'ta' ? 'சான்று எண்' : 'Claim ID'}: ${claimId}`}
      style={{ display: 'inline-flex', alignItems: 'center', cursor: 'help' }}
    >
      <Icon size={12} />
      <span>{text}</span>
      <span style={{ opacity: 0.75, fontSize: '0.68rem', marginLeft: '2px' }}>({claimId})</span>
    </span>
  );
};
