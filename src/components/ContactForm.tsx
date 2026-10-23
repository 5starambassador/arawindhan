'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Language } from '@/types';

interface ContactFormProps {
  language: Language;
}

export const ContactForm: React.FC<ContactFormProps> = ({ language: lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    category: 'Biographical Verification',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [ticketId, setTicketId] = useState('');

  const categories = [
    { value: 'Biographical Verification', label: { en: 'Biographical & Record Verification', ta: 'சுயசரிதை & சாதனைகள் சரிபார்ப்பு' } },
    { value: 'Institutional Partnership', label: { en: 'Institutional & Academic Collaboration', ta: 'கல்விசார் கூட்டாண்மை & ஒத்துழைப்பு' } },
    { value: 'Keynote & Media Request', label: { en: 'Keynote Speech / Media Inquiries', ta: 'மாநாட்டு உரை / ஊடகப் பகிர்வுகள்' } },
    { value: 'Research & Archival Access', label: { en: 'Research & Curriculum Archives', ta: 'ஆய்வு மற்றும் ஆவணக் களஞ்சிய அணுகல்' } },
    { value: 'General Inquiry', label: { en: 'General Institutional Inquiry', ta: 'பொதுவான நிறுவன வினவல்' } },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language: lang,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setTicketId(data.ticketId);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        category: 'Biographical Verification',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '20px',
        padding: '2.5rem',
        boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.05)',
      }}
    >
      <div style={{ marginBottom: '1.75rem' }}>
        <h3
          className="font-serif heading-gold"
          style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem', color: '#0F172A' }}
        >
          {lang === 'ta' ? 'அதிகாரப்பூர்வ தகவல் வினவல் படிவம்' : 'Official Communications & Verification Form'}
        </h3>
        <p style={{ color: '#64748B', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
          {lang === 'ta'
            ? 'முனைவர் அரவிந்தன் அவர்களின் தலைமை அலுவலகத்திற்கு நேரடி தகவல்களை அனுப்ப கீழ்கண்ட படிவத்தைப் பயன்படுத்தவும்.'
            : 'Direct institutional channel for biographical claims, academic collaborations, and keynote inquiries.'}
        </p>
      </div>

      {status === 'success' ? (
        <div
          style={{
            background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
            border: '1.5px solid #10B981',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#059669',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto',
            }}
          >
            <CheckCircle2 size={28} />
          </div>

          <h4 style={{ color: '#065F46', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            {lang === 'ta' ? 'வினவல் வெற்றிகரமாக பதிவு செய்யப்பட்டது!' : 'Inquiry Successfully Lodged!'}
          </h4>

          <div
            style={{
              display: 'inline-block',
              background: '#FFFFFF',
              border: '1px solid #A7F3D0',
              padding: '0.35rem 1rem',
              borderRadius: '999px',
              fontFamily: 'monospace',
              fontWeight: 800,
              fontSize: '0.95rem',
              color: '#047857',
              marginBottom: '1rem',
            }}
          >
            REF TICKET: {ticketId}
          </div>

          <p style={{ color: '#047857', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
            {lang === 'ta'
              ? 'தங்களின் செய்தி பதிவு செய்யப்பட்டு நிர்வாக அலுவலகத்திற்கு அனுப்பப்பட்டுள்ளது. விரைவில் மின்னஞ்சல் வாயிலாக பதில் வழங்கப்படும்.'
              : 'Your request has been filed with the Central Administrative Office. A verification coordinator will respond within 48 business hours.'}
          </p>

          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="btn-gold"
            style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}
          >
            {lang === 'ta' ? 'மற்றொரு வினவலை அனுப்ப' : 'Submit Another Inquiry'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {status === 'error' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: '#FEF2F2',
                border: '1px solid #FCA5A5',
                color: '#B91C1C',
                padding: '0.85rem 1.25rem',
                borderRadius: '10px',
                fontSize: '0.88rem',
              }}
            >
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {/* Full Name */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#1E293B',
                  marginBottom: '0.4rem',
                }}
              >
                {lang === 'ta' ? 'முழுப் பெயர் *' : 'Full Name *'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={lang === 'ta' ? 'எ.கா: முனைவர் ராஜ்குமார்' : 'e.g. Dr. Rajesh Kumar'}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                  fontSize: '0.92rem',
                  color: '#0F172A',
                  outline: 'none',
                }}
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#1E293B',
                  marginBottom: '0.4rem',
                }}
              >
                {lang === 'ta' ? 'மின்னஞ்சல் முகவரி *' : 'Official Email *'}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@institution.org"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                  fontSize: '0.92rem',
                  color: '#0F172A',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {/* Organization / Affiliation */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#1E293B',
                  marginBottom: '0.4rem',
                }}
              >
                {lang === 'ta' ? 'கல்வி நிறுவனம் / அமைப்பு' : 'Organization / University'}
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder={lang === 'ta' ? 'எ.கா: சென்னை பல்கலைக்கழகம்' : 'e.g. National Education Council'}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                  fontSize: '0.92rem',
                  color: '#0F172A',
                  outline: 'none',
                }}
              />
            </div>

            {/* Category */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#1E293B',
                  marginBottom: '0.4rem',
                }}
              >
                {lang === 'ta' ? 'வினவலின் நோக்கம்' : 'Purpose of Inquiry'}
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                  fontSize: '0.92rem',
                  color: '#0F172A',
                  outline: 'none',
                }}
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label[lang]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.84rem',
                fontWeight: 700,
                color: '#1E293B',
                marginBottom: '0.4rem',
              }}
            >
              {lang === 'ta' ? 'தகவல் / வினவலின் விவரம் *' : 'Detailed Message / Scope of Verification *'}
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                lang === 'ta'
                  ? 'தங்களின் ஆய்வு, சரிபார்ப்பு அல்லது கூட்டாண்மைக்கான விவரங்களை இங்கு குறிப்பிடவும்...'
                  : 'Please outline your verification request, specific Claim ID, or institutional collaboration proposal...'
              }
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                border: '1px solid #CBD5E1',
                background: '#F8FAFC',
                fontSize: '0.92rem',
                color: '#0F172A',
                outline: 'none',
                resize: 'vertical',
                lineHeight: 1.6,
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-gold"
            style={{
              justifyContent: 'center',
              padding: '0.85rem 1.75rem',
              fontSize: '0.95rem',
              opacity: status === 'loading' ? 0.75 : 1,
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              marginTop: '0.5rem',
            }}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>{lang === 'ta' ? 'பதிவு செய்யப்படுகிறது...' : 'Lodging Inquiry...'}</span>
              </>
            ) : (
              <>
                <span>{lang === 'ta' ? 'வினவலை சமர்ப்பிக்கவும்' : 'Dispatch Official Inquiry'}</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
