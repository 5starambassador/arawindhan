export interface FAQItem {
  id: string;
  question: { en: string; ta: string };
  answer: { en: string; ta: string };
  category: string;
  relatedLink?: string;
}

export const faqsList: FAQItem[] = [
  {
    id: 'FAQ-01',
    category: 'Identity & Biography',
    question: {
      en: 'Who is Dr. J. Arawindhan?',
      ta: 'முனைவர் ஜே. அரவிந்தன் யார்?',
    },
    answer: {
      en: 'Dr. J. Arawindhan is an Indian educationist, entrepreneur, author, and spiritual guide. Trained as a Mechanical Engineer, he founded ACHARIYA World Class Education in Puducherry in 2000. Over 25 years, he has built an ecosystem of 18 higher education colleges, 35 schools, 61+ companies, and over 302 educational initiatives across Tamil Nadu, Puducherry, Kerala, and Andhra Pradesh.',
      ta: 'முனைவர் ஜே. அரவிந்தன் ஒரு இந்திய கல்வியியலாளர், தொழில்முனைவோர், எழுத்தாளர் மற்றும் ஆன்மீக வழிகாட்டி ஆவார். மெக்கானிக்கல் பொறியாளரான இவர், 2000-ஆம் ஆண்டு புதுச்சேரியில் ஆச்சாரியா கல்வி நிறுவனத்தை நிறுவினார். 25 ஆண்டுகளில் 18 கல்லூரிகள், 35 பள்ளிகள், 61+ நிறுவனங்கள் மற்றும் 302+ கல்வி முன்முயற்சிகளைக் கொண்ட மாபெரும் அமைப்பை உருவாக்கியுள்ளார்.',
    },
    relatedLink: '/biography',
  },
  {
    id: 'FAQ-02',
    category: 'Scale & Institutions',
    question: {
      en: 'How many schools and colleges are in the ACHARIYA educational network?',
      ta: 'ஆச்சாரியா கல்வி கட்டமைப்பில் எத்தனை பள்ளிகள் மற்றும் கல்லூரிகள் உள்ளன?',
    },
    answer: {
      en: 'The ACHARIYA network encompasses 18 higher education colleges (covering Engineering, Arts & Science, Hospitality, Medical Sciences, and Teacher Education) and 35 schools operating across four relationship models: Owned, Powered (independent partner schools using ACHARIYA curricula), Partnered (joint ventures), and Parented (mentored campuses).',
      ta: 'ஆச்சாரியா கட்டமைப்பு 18 உயர்கல்விக் கல்லூரிகள் (பொறியியல், கலை & அறிவியல், ஹோட்டல் மேலாண்மை, மருத்துவம், கல்வியியல்) மற்றும் 35 பள்ளிகளை உள்ளடக்கியது. இவை சொந்தப் பள்ளிகள், இணைக்கப்பட்ட பள்ளிகள், கூட்டுப் பங்களிப்புப் பள்ளிகள் மற்றும் வழிகாட்டல் பள்ளிகள் என 4 மாதிரிகளில் இயங்குகின்றன.',
    },
    relatedLink: '/institutions',
  },
  {
    id: 'FAQ-03',
    category: 'Pedagogy & Curriculum',
    question: {
      en: 'What is the Dasavadani Curriculum?',
      ta: 'தசாவதானி பாடத்திட்டம் என்றால் என்ன?',
    },
    answer: {
      en: 'The Dasavadani Curriculum is ACHARIYA’s proprietary educational framework named after the classical Indian art of multi-tasking (Avadhanam). It works with eight of Howard Gardner’s multiple intelligences and incorporates two original domains created by Dr. Arawindhan: Financial Intelligence (FI) and Emotional Intelligence (EI). Beyond these sits Quantum Intelligence, which trains children as well-rounded "Suprasapiens".',
      ta: 'தசாவதானி பாடத்திட்டம் என்பது பல்பணி அவதானக் கலையை அடிப்படையாகக் கொண்டு ஆச்சாரியாவால் உருவாக்கப்பட்ட தனித்துவமான கல்வி முறையாகும். ஹோவர்ட் கார்ட்னரின் 8 நுண்ணறிவுகளுடன், முனைவர் அரவிந்தன் உருவாக்கிய நிதி நுண்ணறிவு மற்றும் உணர்ச்சி நுண்ணறிவை இணைத்து 10 நுண்ணறிவுகளை மாணவர்களிடம் வளர்க்கிறது.',
    },
    relatedLink: '/education/dasavadani-curriculum',
  },
  {
    id: 'FAQ-04',
    category: 'Pedagogy & Neuroscience',
    question: {
      en: 'What is the Brain Activity System and how does it relate to student world records?',
      ta: 'மூளை செயல்பாடு கட்டமைப்பு (Brain Activity System) என்றால் என்ன? அது உலக சாதனைகளுடன் எவ்வாறு தொடர்புடையது?',
    },
    answer: {
      en: 'The Brain Activity System operates on the philosophy of "Brain Activity over Ability," asserting that working memory, bilateral coordination, and courage can be trained like a physical muscle. It integrates the Five Arts (Silambam, Malkhamb, Yoga, Chess, Golden Smile Meditation) and bilateral ball juggling into the daily timetable. This systematic neuro-training has enabled ACHARIYA students to achieve 600+ world records, including 222 Guinness and World Records in open and blindfolded activities.',
      ta: 'மதிப்பெண்களை விட மூளையின் செயல்பாடே முக்கியம் என்ற கோட்பாட்டின்படி, நரம்பியல் திறனை வளர்க்கும் பயிற்சி முறை. சிலம்பம், மல்லக்கம்பம், யோகா, சதுரங்கம் மற்றும் பொன்னகை தியானம் ஆகிய ஐந்து கலைகளை உடற்பயிற்சியாக வழங்கி, மாணவர்களின் இரு மூளை அரைக்கோளங்களையும் தூண்டுகிறது. இதன் மூலம் மாணவர்கள் 222 கின்னஸ் மற்றும் உலக சாதனைகள் உட்பட 600+ உலக சாதனைகளை படைத்துள்ளனர்.',
    },
    relatedLink: '/education/brain-activity-system',
  },
  {
    id: 'FAQ-05',
    category: 'Assessment & AI',
    question: {
      en: 'What is the TRACK Model of Assessment?',
      ta: 'ட்ராக் (TRACK) தேர்வு மாதிரி என்றால் என்ன?',
    },
    answer: {
      en: 'The TRACK Model is an anxiety-free assessment framework where theory and practicals carry equal 100% weight. Random questions and diagnostic revision tests take place before evaluation, so parents already witness what their child understands. AI is utilized as a diagnostic partner to identify precise learning gaps, which are then addressed through gentle educational supplements rather than punitive grading.',
      ta: 'தேர்வு பயத்தை முற்றிலும் நீக்கும் மதிப்பீட்டு முறை. இதில் செய்முறை 100% மற்றும் எழுத்துமுறை 100% சமமாக மதிப்பிடப்படுகிறது. தேர்வுக்கு முன்பே பெற்றோருக்கு குழந்தையின் கற்றல் நிலை வெளிப்படையாகத் தெரிகிறது. AI தொழில்நுட்பம் கற்றல் இடைவெளிகளை துல்லியமாக கண்டறிந்து, கூடுதல் பயிற்சிகள் மூலம் அதை நிறைவு செய்கிறது.',
    },
    relatedLink: '/education/track-assessment-model',
  },
  {
    id: 'FAQ-06',
    category: 'Books & Publications',
    question: {
      en: 'Which books has Dr. J. Arawindhan authored?',
      ta: 'முனைவர் ஜே. அரவிந்தன் எழுதிய நூல்கள் யாவை?',
    },
    answer: {
      en: 'Dr. J. Arawindhan has authored seven major books in institutional and public circulation: 1. The Shambala Book (Inner consciousness & meditation), 2. WOW Parenting (Family and school co-learning), 3. Financial Intelligence (Wealth literacy for youth), 4. Emotional Intelligence (Self-regulation and empathy), 5. Master Stroke (Strategic leadership & systems), 6. Young Scientist (Experiential STEM discovery), and 7. Iravadh (The 21 levels of teacher evolution).',
      ta: 'முனைவர் அரவிந்தன் ஏழு முக்கிய நூல்களை எழுதியுள்ளார்: 1. தி ஷாம்பாலா (ஆன்மீக விழிப்புணர்வு & தியானம்), 2. வாவ் பேரண்டிங் (பெற்றோர் வழிகாட்டல்), 3. நிதி நுண்ணறிவு (பொருளாதார மேலாண்மை), 4. உணர்ச்சி நுண்ணறிவு (உளவியல் சமநிலை), 5. மாஸ்டர் ஸ்ட்ரோக் (தலைமைத்துவ நெறிமுறைகள்), 6. இளம் விஞ்ஞானி (செய்முறை அறிவியல்), மற்றும் 7. ஐராவத் (ஆசிரியரின் 21 பரிணாம நிலைகள்).',
    },
    relatedLink: '/books',
  },
  {
    id: 'FAQ-07',
    category: 'Spiritual & Inner Journey',
    question: {
      en: 'What is Divya Yogam and who is Santoshi Shri Arawindhan?',
      ta: 'திவ்ய யோகம் என்றால் என்ன? சந்தோஷி ஸ்ரீ அரவிந்தன் யார்?',
    },
    answer: {
      en: 'In spiritual contexts, Dr. Arawindhan is revered as Santoshi Shri Arawindhan. Conceived in 2000 through the Divine Grace Foundation, Divya Yogam is a non-dogmatic path of inner inquiry grounded in the creed: "Develop the human. Awaken the being." It features a Seven-Step Inner Journey (Awareness to Awakening), Oneness Meditation, and the annual Maha Shambala spiritual convergence held in Puducherry every December since 2012.',
      ta: 'ஆன்மீக தளத்தில் இவர் சந்தோஷி ஸ்ரீ அரவிந்தன் என்று அழைக்கப்படுகிறார். 2000-ஆம் ஆண்டு தொடங்கப்பட்ட திவ்ய யோகம், "மனிதனை மேம்படுத்து. ஆன்மாவை விழிப்படையச் செய்" என்ற தத்துவத்தின் அடிப்படையில் இயங்கும் ஆன்மீகப் பாதை. இதில் 7 படிநிலை உள்முகப் பயணம், ஒருமை தியானம் மற்றும் 2012 முதல் ஆண்டுதோறும் புதுச்சேரியில் நடைபெறும் மகா ஷாம்பாலா ஆன்மீக சங்கமம் ஆகியவை முக்கியத்துவம் வாய்ந்தவை.',
    },
    relatedLink: '/inner-journey',
  },
  {
    id: 'FAQ-08',
    category: 'Honours & Awards',
    question: {
      en: 'What major awards and recognitions have been conferred on Dr. Arawindhan?',
      ta: 'முனைவர் அரவிந்தன் பெற்றுள்ள முக்கிய விருதுகள் மற்றும் அங்கீகாரங்கள் யாவை?',
    },
    answer: {
      en: 'His documented honours include the Holistic Education Award at the News7 Tamil Aatral Migu Asiriyar Virudhugal 2026, the Edu Icon Award from The Times of India, the Trendsetter Award from Times Interact, the Outstanding Youth Award in Academics & Leadership from JCI India, and the Alumnus of the Decade Award from Infinite Thoughts Journal. Institutionally, ACHARIYA holds the British Council International School Award, ISO & NAAC accreditations, and Swachh Vidyalaya Puraskar from the Government of India.',
      ta: 'நியூஸ் 7 தமிழின் ஆற்றல் மிகு ஆசிரியர் விருதுகள் 2026-ல் முழுமையான கல்விக்கான விருது, தி டைம்ஸ் ஆஃப் இந்தியாவின் எடு ஐகான் விருது, டைம்ஸ் இன்டராக்ட் டிரெண்ட்செட்டர் விருது, ஜே.சி.ஐ இந்தியாவின் சிறந்த இளைஞர் விருது, மற்றும் இன்பினிட் தாட்ஸ் இதழின் தசாப்தத்தின் சிறந்த முன்னாள் மாணவர் விருது ஆகியவை குறிப்பிடத்தக்கவை.',
    },
    relatedLink: '/recognition',
  },
];
