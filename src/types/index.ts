export type Language = 'en' | 'ta';

export interface ClaimVerification {
  id: string;
  status: 'CONFIRMED' | 'SOURCE_CLAIM' | 'PENDING_VERIFICATION' | 'CONFLICTING' | 'APPROVAL_REQUIRED';
  source: string;
  notes?: string;
}

export interface MetricItem {
  number: string;
  label: { en: string; ta: string };
  detail: { en: string; ta: string };
  claimId: string;
}

export interface EducationalExhibit {
  id: string;
  slug: string;
  title: { en: string; ta: string };
  subtitle: { en: string; ta: string };
  tagline: { en: string; ta: string };
  whatItIs: { en: string; ta: string };
  howItWorks: { en: string[]; ta: string[] };
  evidenceAndReach: { en: string[]; ta: string[] };
  iconName: string;
  claimId: string;
  relatedBooks?: string[];
}

export interface BookChapter {
  title: { en: string; ta: string };
  subtitle?: { en: string; ta: string };
  paragraphs: { en: string[]; ta: string[] };
}

export interface BookItem {
  id: string;
  slug: string;
  title: { en: string; ta: string };
  tagline: { en: string; ta: string };
  author: { en: string; ta: string };
  edition: string;
  language: string;
  status: 'Published' | 'Ecosystem Edition' | 'Forthcoming';
  claimId: string;
  summary: { en: string; ta: string };
  keyThemes: { en: string[]; ta: string[] };
  targetAudience: { en: string; ta: string };
  readMoreSnippet?: { en: string; ta: string };
  coverImage?: string;
  pdfUrl?: string;
  epubUrl?: string;
  flipbookPages?: string[];
  sampleChapters?: BookChapter[];
}

export interface InstitutionEntry {
  id: string;
  name: string;
  tamilName?: string;
  sector: 'Higher Education' | 'K12 Schools' | 'Enterprises & Food' | 'Wellness & Healthcare' | 'Recreation' | 'Industry' | 'Technology & Media' | 'Suprasapien Academies';
  category: 'Owned' | 'Powered' | 'Partnered' | 'Parented' | 'Group Enterprise' | 'Trust';
  location: string;
  description: { en: string; ta: string };
  scaleNote?: string;
}

export interface HonourItem {
  id: string;
  title: { en: string; ta: string };
  conferredBy: { en: string; ta: string };
  category: 'Personal Honour' | 'Institutional Accolade' | 'World Record';
  year?: string;
  claimId: string;
  verificationStatus: 'CONFIRMED' | 'SOURCE_CLAIM' | 'PENDING_VERIFICATION';
  details: { en: string; ta: string };
}

export interface AvatarPhase {
  phase: number;
  avatar: { en: string; ta: string };
  essence: { en: string; ta: string };
  description: { en: string; ta: string };
}

export interface LeadershipLesson {
  number: number;
  title: { en: string; ta: string };
  principle: { en: string; ta: string };
  quote: { en: string; ta: string };
}

export interface CoreValue {
  number: number;
  title: { en: string; ta: string };
  description: { en: string; ta: string };
}

export interface DirectQuote {
  quote: { en: string; ta: string };
  context: { en: string; ta: string };
  source?: string;
}

export interface TransformationRipple {
  step: number;
  level: { en: string; ta: string };
  focus: { en: string; ta: string };
  impact: { en: string; ta: string };
}

export interface BlogSubsection {
  title: { en: string; ta: string };
  content: { en: string[]; ta: string[] };
}

export interface BlogSection {
  id: string;
  heading: { en: string; ta: string };
  content: { en: string[]; ta: string[] };
  subsections?: BlogSubsection[];
}

export interface BlogFaq {
  question: { en: string; ta: string };
  answer: { en: string; ta: string };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: { en: string; ta: string };
  category: { en: string; ta: string };
  focusKeyword: { en: string; ta: string };
  relatedKeywords: { en: string[]; ta: string[] };
  tags: { en: string[]; ta: string[] };
  metaDescription: { en: string; ta: string };
  author: { en: string; ta: string };
  publishedAt: string;
  readTime: string;
  claimId?: string;
  podcastReference?: { en: string; ta: string };
  sections: BlogSection[];
  faqs: BlogFaq[];
}

