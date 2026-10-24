'use client';

import React from 'react';
import { ShieldCheck, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { MASTER_CLAIMS } from '@/data/claims';

interface ClaimBadgeProps {
  claimId: string;
  status?: 'CONFIRMED' | 'SOURCE_CLAIM' | 'PENDING_VERIFICATION' | 'CONFLICTING';
  language?: 'en' | 'ta';
  compact?: boolean;
}

export const ClaimBadge: React.FC<ClaimBadgeProps> = () => {
  // Hidden from public view to keep executive presentation clean and uncluttered.
  return null;
};
