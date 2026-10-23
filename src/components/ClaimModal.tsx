'use client';

import React, { useState, useEffect } from 'react';
import { MASTER_CLAIMS, MasterClaim } from '@/data/claims';
import { ShieldCheck, BookOpen, Clock, AlertTriangle, X, Search, ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface ClaimModalProps {
  language?: 'en' | 'ta';
}

export const ClaimModal: React.FC<ClaimModalProps> = ({ language = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState<MasterClaim | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');

  useEffect(() => {
    const handleOpenClaim = (e: CustomEvent<{ claimId?: string }>) => {
      const claimId = e.detail?.claimId;
      if (claimId) {
        const found = MASTER_CLAIMS.find((c) => c.id.toUpperCase() === claimId.toUpperCase());
        if (found) {
          setSelectedClaim(found);
        }
      }
      setIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('open-claim-modal' as any, handleOpenClaim as EventListener);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-claim-modal' as any, handleOpenClaim as EventListener);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  const filteredClaims = MASTER_CLAIMS.filter((c) => {
    const matchesFilter = filterStatus === 'ALL' || c.verificationStatus === filterStatus;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      c.id.toLowerCase().includes(query) ||
      c.statement.toLowerCase().includes(query) ||
      c.wording.en.toLowerCase().includes(query) ||
      c.wording.ta.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: MasterClaim['verificationStatus']) => {
    if (status === 'CONFIRMED') {
      return (
        <span className="badge-confirmed" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <ShieldCheck size={13} /> {language === 'ta' ? 'சரிபார்க்கப்பட்டது (CONFIRMED)' : 'Verified (CONFIRMED)'}
        </span>
      );
    }
    if (status === 'CONFLICTING') {
      return (
        <span className="badge-conflict" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <AlertTriangle size={13} /> {language === 'ta' ? 'இரட்டை ஆதாரத் தரவு (CONFLICTING)' : 'Dual-Sourced (CONFLICTING)'}
        </span>
      );
    }
    if (status === 'PENDING_VERIFICATION') {
      return (
        <span className="badge-pending" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <Clock size={13} /> {language === 'ta' ? 'சரிபார்ப்பில் உள்ளது' : 'Pending Verification'}
        </span>
      );
    }
    return (
      <span className="badge-source" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        <BookOpen size={13} /> {language === 'ta' ? 'நிறுவன ஆவணம் (SOURCE CLAIM)' : 'Institutional Record (SOURCE CLAIM)'}
      </span>
    );
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '900px',
          maxHeight: '88vh',
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(226, 232, 240, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(to right, #FAF8F5, #FFFFFF)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#FEF3C7',
                color: '#B45309',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'var(--font-cinzel)', color: '#0F172A', fontWeight: 700 }}>
                {language === 'ta' ? 'சான்று சரிபார்ப்பு களஞ்சியம்' : 'Master Claims & Evidence Inspector'}
              </h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B' }}>
                {language === 'ta'
                  ? '30 சான்றுகளின் அசல் ஆவண ஆதாரம், சரிபார்ப்பு நிலை மற்றும் உரை ஒப்பீடு'
                  : '30 primary institutional claims, audit status, citation trails & source exhibits'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '8px',
              padding: '0.5rem',
              cursor: 'pointer',
              color: '#64748B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', height: 'calc(88vh - 80px)', overflow: 'hidden' }}>
          {/* Claims Sidebar / Search List */}
          <div
            style={{
              borderRight: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              background: '#FAFAF9',
              overflow: 'hidden',
            }}
          >
            {/* Search Input */}
            <div style={{ padding: '0.85rem', borderBottom: '1px solid #E2E8F0' }}>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Search size={16} style={{ position: 'absolute', left: '10px', color: '#94A3B8' }} />
                <input
                  type="text"
                  placeholder={language === 'ta' ? 'சான்றுகளைத் தேடுக (எ.கா. CLM-001)...' : 'Search claims (e.g. CLM-001, colleges)...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem 0.5rem 2rem',
                    fontSize: '0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    background: '#FFFFFF',
                    color: '#0F172A',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Filter Pills */}
              <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                {['ALL', 'CONFIRMED', 'SOURCE_CLAIM', 'CONFLICTING'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    style={{
                      fontSize: '0.7rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '999px',
                      border: '1px solid',
                      borderColor: filterStatus === status ? '#0F172A' : '#E2E8F0',
                      background: filterStatus === status ? '#0F172A' : '#FFFFFF',
                      color: filterStatus === status ? '#FFFFFF' : '#64748B',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem' }}>
              {filteredClaims.map((claim) => {
                const isSelected = selectedClaim?.id === claim.id;
                return (
                  <div
                    key={claim.id}
                    onClick={() => setSelectedClaim(claim)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      marginBottom: '0.4rem',
                      cursor: 'pointer',
                      background: isSelected ? '#FFFFFF' : 'transparent',
                      border: isSelected ? '1px solid #D97706' : '1px solid transparent',
                      boxShadow: isSelected ? '0 2px 8px rgba(217, 119, 6, 0.15)' : 'none',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.8rem', color: '#0F172A', fontFamily: 'monospace' }}>
                        {claim.id}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#64748B', background: '#F1F5F9', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                        {claim.category}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: '#334155',
                        lineHeight: 1.35,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {language === 'ta' ? claim.wording.ta : claim.wording.en}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Claim Detail Inspector View */}
          <div style={{ padding: '1.5rem', overflowY: 'auto', background: '#FFFFFF' }}>
            {selectedClaim ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#B45309', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {selectedClaim.category}
                    </span>
                    <h4 style={{ margin: '0.25rem 0', fontSize: '1.4rem', color: '#0F172A', fontFamily: 'monospace' }}>
                      {selectedClaim.id}
                    </h4>
                  </div>
                  <div>{getStatusBadge(selectedClaim.verificationStatus)}</div>
                </div>

                <div style={{ background: '#FAF8F5', border: '1px solid #F1E5D5', borderRadius: '10px', padding: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {language === 'ta' ? 'அங்கீகரிக்கப்பட்ட ஆங்கில உரை' : 'Standard English Statement'}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: '#1E293B', lineHeight: 1.5, fontWeight: 500 }}>
                    "{selectedClaim.wording.en}"
                  </p>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0F766E', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {language === 'ta' ? 'அங்கீகரிக்கப்பட்ட தமிழ் உரை' : 'Standard Tamil Statement'}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: '#1E293B', lineHeight: 1.5 }}>
                    "{selectedClaim.wording.ta}"
                  </p>
                </div>

                {/* Evidence & Source Details */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                      {language === 'ta' ? 'மூல ஆவணம்' : 'Primary Source Document'}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#0F172A', fontWeight: 600, marginTop: '0.2rem' }}>
                      {selectedClaim.sourceDocument}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.15rem' }}>
                      {selectedClaim.sourceLocation}
                    </div>
                  </div>

                  <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                      {language === 'ta' ? 'கடைசி தணிக்கை தேதி' : 'Last Audited Date'}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#0F172A', fontWeight: 600, marginTop: '0.2rem' }}>
                      {selectedClaim.lastVerified}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '3px', marginTop: '0.15rem' }}>
                      <CheckCircle size={12} /> Editorial QA Approved
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {language === 'ta' ? 'ஆதார சான்றுகள்' : 'Supporting Evidence'}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#334155', background: '#F1F5F9', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
                    {selectedClaim.supportingEvidence}
                  </div>
                </div>

                {selectedClaim.notes && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      {language === 'ta' ? 'தணிக்கை குறிப்பு' : 'Auditor & Fact-Check Note'}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#475569', fontStyle: 'italic', background: '#FEF9C3', padding: '0.65rem 0.85rem', borderRadius: '6px', border: '1px solid #FDE047' }}>
                      {selectedClaim.notes}
                    </div>
                  </div>
                )}

                <div style={{ paddingTop: '1rem', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    href={`/${language}${selectedClaim.relatedPage}`}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#B45309',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <span>{language === 'ta' ? 'தொடர்புடைய பக்கத்திற்குச் செல்க' : 'Visit Related Page'}</span>
                    <ExternalLink size={14} />
                  </Link>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                    Press Esc to close
                  </span>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#94A3B8' }}>
                <ShieldCheck size={48} style={{ margin: '0 auto 1rem auto', opacity: 0.3 }} />
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  {language === 'ta'
                    ? 'இடதுபுறப் பட்டியலிலிருந்து ஒரு சான்றைத் தேர்ந்தெடுக்கவும் அல்லது தேடவும்.'
                    : 'Select any claim from the list on the left to inspect its evidentiary audit.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
