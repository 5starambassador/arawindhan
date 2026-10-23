import { Language } from '@/types';

export interface NavLink {
  href: string;
  label: { en: string; ta: string };
  shortLabel: { en: string; ta: string };
}

export const navigationLinks: NavLink[] = [
  { href: '', label: { en: 'Home', ta: 'முகப்பு' }, shortLabel: { en: 'Home', ta: 'முகப்பு' } },
  { href: 'biography', label: { en: 'Biography', ta: 'வாழ்க்கை வரலாறு' }, shortLabel: { en: 'Biography', ta: 'வரலாறு' } },
  { href: 'education', label: { en: 'Educational Innovations', ta: 'கல்விப் புத்தாக்கங்கள்' }, shortLabel: { en: 'Education', ta: 'கல்வி' } },
  { href: 'books', label: { en: 'Books & Publications', ta: 'நூல்கள் & வெளியீடுகள்' }, shortLabel: { en: 'Books', ta: 'நூல்கள்' } },
  { href: 'institutions', label: { en: 'Institutions & Directory', ta: 'கல்வி & நிறுவனங்கள்' }, shortLabel: { en: 'Institutions', ta: 'நிறுவனங்கள்' } },
  { href: 'recognition', label: { en: 'Recognition & Records', ta: 'விருதுகள் & சாதனைகள்' }, shortLabel: { en: 'Honours', ta: 'சாதனைகள்' } },
  { href: 'inner-journey', label: { en: 'Inner Journey', ta: 'திவ்ய யோகம்' }, shortLabel: { en: 'Inner Journey', ta: 'திவ்ய யோகம்' } },
  { href: 'governance', label: { en: 'Governance & Systems', ta: 'நிர்வாகக் கட்டமைப்பு' }, shortLabel: { en: 'Governance', ta: 'நிர்வாகம்' } },
  { href: 'media', label: { en: 'Media & Speeches', ta: 'உரைகள் & ஊடகம்' }, shortLabel: { en: 'Media', ta: 'ஊடகம்' } },
  { href: 'faq', label: { en: 'Answer Engine & FAQs', ta: 'கேள்வி & பதில்கள்' }, shortLabel: { en: 'FAQs', ta: 'FAQs' } },
  { href: 'contact', label: { en: 'Contact & Verification', ta: 'தொடர்பு & சரிபார்ப்பு' }, shortLabel: { en: 'Contact', ta: 'தொடர்பு' } },
];

export const uiLabels = {
  platformTitle: {
    en: 'Dr. J. Arawindhan',
    ta: 'முனைவர் ஜே. அரவிந்தன்',
  },
  platformTagline: {
    en: 'Global Digital Authority & Knowledge Platform',
    ta: 'அதிகாரப்பூர்வ டிஜிட்டல் அறிவுத் தளம்',
  },
  evidenceRegister: {
    en: 'Evidence & Claims Register',
    ta: 'சரிபார்க்கப்பட்ட சான்றுகள் பதிவேடு',
  },
  verifiedClaim: {
    en: 'Verified Claim',
    ta: 'சரிபார்க்கப்பட்ட தகவல்',
  },
  sourceClaim: {
    en: 'Institutional Record',
    ta: 'நிறுவன ஆவணப் பதிவு',
  },
  pendingVerification: {
    en: 'Pending Verification',
    ta: 'சரிபார்ப்பில் உள்ளது',
  },
  conflictingClaim: {
    en: 'Dual Sourced / Cross-Referenced',
    ta: 'ஒப்பீட்டுத் தரவு',
  },
  switchLanguage: {
    en: 'தமிழ் (Tamil)',
    ta: 'English',
  },
  viewDetails: {
    en: 'Explore Methodology',
    ta: 'விளக்கத்தை காண்க',
  },
  backToOverview: {
    en: 'Back to Overview',
    ta: 'பின்னோக்கிச் செல்க',
  },
  readMore: {
    en: 'Read Full Text',
    ta: 'முழுமையாக வாசிக்க',
  },
  sourceDocument: {
    en: 'Source Document',
    ta: 'மூல ஆவணம்',
  },
  supportingEvidence: {
    en: 'Supporting Evidence',
    ta: 'சான்று ஆவணம்',
  },
  quickLinks: {
    en: 'Quick Links',
    ta: 'விரைவு இணைப்புகள்',
  },
  institutionsHeading: {
    en: 'Institutions & Movements',
    ta: 'நிறுவனங்கள் & இயக்கங்கள்',
  },
  contactHeading: {
    en: 'Official Verification Desk',
    ta: 'அதிகாரப்பூர்வ சரிபார்ப்பு மையம்',
  },
  footerDisclaimer: {
    en: 'This official digital knowledge platform documents the educational systems, enterprises, publications, and philosophies founded and led by Dr. J. Arawindhan. Every factual statement is cross-referenced with institutional primary documents.',
    ta: 'முனைவர் ஜே. அரவிந்தன் அவர்களின் கல்விப் புத்தாக்கங்கள், நிறுவனங்கள், வெளியீடுகள் மற்றும் தத்துவங்களை ஆவணப்படுத்தும் அதிகாரப்பூர்வ தளம். அனைத்து தகவல்களும் மூல ஆவணங்களுடன் சரிபார்க்கப்பட்டவை.',
  },
};
