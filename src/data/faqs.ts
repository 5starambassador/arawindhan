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
      en: 'Dr. J. Arawindhan has authored 16+ published titles and institutional books, including The Shambala Book (Inner consciousness & meditation), WOW Parenting (Family and school co-learning), Financial Intelligence, Emotional Intelligence, The Lion\'s Bank Account, My Yellow Book (My Guru = My Value), My White Book (Individual Intelligence based schooling), and My Green Book (Dream to Destiny).',
      ta: 'முனைவர் அரவிந்தன் 16-க்கும் மேற்பட்ட நூல்களை எழுதியுள்ளார்; அவற்றுள் தி ஷாம்பாலா (ஆன்மீக விழிப்புணர்வு & தியானம்), வாவ் பேரண்டிங் (பெற்றோர் வழிகாட்டல்), நிதி நுண்ணறிவு, உணர்ச்சி நுண்ணறிவு, சிங்கத்தின் வங்கிக் கணக்கு, என் மஞ்சள் புத்தகம் (என் குரு = என் மதிப்பு), என் வெள்ளை புத்தகம் (தனிநபர் நுண்ணறிவுக் கல்வி), மற்றும் என் பசுமைப் புத்தகம் (கனவிலிருந்து இலட்சிய வெற்றி வரை) ஆகியவை முக்கிய நூல்களாகும்.',
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
  {
    id: 'FAQ-09',
    category: 'Teacher Development',
    question: {
      en: 'What is the ConCardios programme and how does it develop teachers?',
      ta: 'கான்கார்டியோஸ் (ConCardios) திட்டம் என்றால் என்ன? அது ஆசிரியர்களை எவ்வாறு மேம்படுத்துகிறது?',
    },
    answer: {
      en: 'ConCardios is ACHARIYA\'s proprietary teacher professional development system comprising 77 training modules across six developmental phases: Nestling (institutional onboarding), Fledgling (classroom basics), Juvenile (multi-intelligence lesson design), Matured (mentorship and parent counselling), Soaring (campus leadership and curriculum innovation), and WOW (master mentor embodying the 21 levels of Airavatha consciousness). Guided by the mantra "Change, Evolve, Transcend," the programme treats teaching as a craft that must be continuously honed — not a fixed credential earned once.',
      ta: 'கான்கார்டியோஸ் என்பது ஆச்சாரியாவின் தனியுரிம ஆசிரியர் தொழில்மேம்பாட்டு அமைப்பாகும். இது 6 வளர்ச்சி நிலைகளில் 77 பயிற்சித் தொகுதிகளை உள்ளடக்கியது: கூட்டுப் பருவம் (நிறுவன அறிமுகம்), இறகுப் பருவம் (வகுப்பறை அடிப்படைகள்), இளமைப் பருவம் (பாடத் திட்டமிடல்), முதிர்ச்சிப் பருவம் (வழிகாட்டல்), உயர் பறத்தல் (வளாகத் தலைமை), மற்றும் வாவ் (ஐராவத தத்துவத்தின் 21 நிலைகளை அடைந்த குரு நிலை). "மாறு, பரிணமி, உன்னத நிலையை அடை" என்ற மந்திரத்தின் கீழ் இயங்கும் இத்திட்டம் கற்பிக்கும் கலையை தொடர்ந்து செம்மைப்படுத்துகிறது.',
    },
    relatedLink: '/governance',
  },
  {
    id: 'FAQ-10',
    category: 'Philosophy & Pedagogy',
    question: {
      en: 'What does "Suprasapiens" mean in the Arawindhan educational philosophy?',
      ta: '"சுப்ரசேபியன்ஸ்" (Suprasapiens) என்ற கோட்பாடு அரவிந்தன் கல்விமுறையில் என்ன குறிக்கிறது?',
    },
    answer: {
      en: '"Suprasapiens" is the graduate archetype of the ACHARIYA educational system — a child developed holistically across all ten intelligences: the eight from Howard Gardner\'s Multiple Intelligence theory, plus Financial Intelligence and Emotional Intelligence, both developed by Dr. Arawindhan. Beyond cognitive and emotional growth, the Suprasapiens model includes Quantum Intelligence training: the capacity to hold multiple perspectives simultaneously, connect disciplines creatively, and navigate ambiguity with courage. The goal is not an exam-topper but a child ready for life at every level — intellectual, emotional, financial, and spiritual.',
      ta: '"சுப்ரசேபியன்ஸ்" என்பது ஆச்சாரியா கல்வி அமைப்பின் இலட்சிய பட்டதாரி உருவம் — ஹோவர்ட் கார்ட்னரின் எட்டு நுண்ணறிவுகளுடன், முனைவர் அரவிந்தன் உருவாக்கிய நிதி நுண்ணறிவு மற்றும் உணர்ச்சி நுண்ணறிவை இணைத்த பத்து நுண்ணறிவுகளிலும் முழுமையாக வளர்ந்த குழந்தை. இதற்கு மேலாக, குவாண்டம் நுண்ணறிவு பயிற்சி மூலம் பன்முக சிந்தனை, படைப்பாற்றல் மற்றும் துணிச்சலுடன் சவால்களை எதிர்கொள்ளும் திறன் வளர்க்கப்படுகிறது. தேர்வில் முதல் மதிப்பெண் மட்டுமல்ல — அறிவு, உணர்வு, நிதி, மற்றும் ஆன்மீக தளங்களில் வாழ்க்கைக்குத் தயாரான குழந்தையே இலக்கு.',
    },
    relatedLink: '/education/dasavadani-curriculum',
  },
  {
    id: 'FAQ-11',
    category: 'Teacher Philosophy',
    question: {
      en: 'What is the Iravadh (Airavatha) framework of teacher evolution?',
      ta: 'ஐராவத் (Iravadh) ஆசிரியர் பரிணாம கட்டமைப்பு என்றால் என்ன?',
    },
    answer: {
      en: 'Iravadh is Dr. Arawindhan\'s book and conceptual model mapping a teacher\'s evolution across 21 progressive levels, named after the mythological elephant Airavata — divine carrier of Indra — which grows from a small calf into a cosmic force. Each level describes a distinct inner shift: from a newcomer who delivers syllabi, to a mentor who transforms lives, to a WOW-level master who embodies wisdom and inspires institutional culture. The ConCardios six-phase professional development programme is structured on this 21-level progression, giving teachers a concrete map of their own growth.',
      ta: 'ஐராவத் என்பது முனைவர் அரவிந்தன் எழுதிய நூல் மற்றும் ஒரு ஆசிரியரின் 21 பரிணாம நிலைகளை விவரிக்கும் கோட்பாட்டு மாதிரியாகும். இந்திரனின் தெய்வீக யானையான ஐராவதம் — ஒரு சிறிய கன்றிலிருந்து பிரபஞ்ச சக்தியாக வளர்வது — ஒரு ஆசிரியரின் உள் பரிணாமத்தை குறிக்கிறது. பாடத்திட்டம் கற்பிக்கும் புதியவரிலிருந்து, வாழ்க்கையை மாற்றும் குருவரை, ஞானம் மற்றும் கலாச்சாரத்தை உருவாக்கும் WOW நிலை குரு வரை — 21 தெளிவான நிலைகள் வரையறுக்கப்பட்டுள்ளன. கான்கார்டியோஸ் திட்டம் இந்த 21 நிலைகளில் அமைக்கப்பட்டுள்ளது.',
    },
    relatedLink: '/books',
  },
  {
    id: 'FAQ-12',
    category: 'Parent Education',
    question: {
      en: 'What is WOW Parenting and how is it different from standard parent education?',
      ta: 'வாவ் பேரண்டிங் (WOW Parenting) என்றால் என்ன? இது வழக்கமான பெற்றோர் கல்வியிலிருந்து எவ்வாறு வேறுபடுகிறது?',
    },
    answer: {
      en: 'WOW Parenting is a structured workshop programme that repositions the home as a co-learning environment, not merely a support unit for school performance. It teaches parents three practical skills: how to have diagnostic conversations with children (identifying what they understand, not just what marks they scored), how to recognise and nurture their child\'s dominant intelligence cluster from the Dasavadani framework, and how to align family language with the school\'s learning vocabulary so the child experiences coherence between home and classroom. Workshops are campus-integrated and held on the school calendar — making parental involvement a designed feature, not an afterthought.',
      ta: 'வாவ் பேரண்டிங் என்பது வீட்டை ஒரு இணை-கற்றல் சூழலாக மாற்றும் கட்டமைக்கப்பட்ட பட்டறை திட்டமாகும். இது பெற்றோருக்கு மூன்று நடைமுறை திறன்களை கற்பிக்கிறது: குழந்தை என்ன புரிந்துகொண்டது என்று அறிய நோயறிதல் உரையாடல் நடத்துவது; தசாவதானி கட்டமைப்பில் குழந்தையின் முதன்மை நுண்ணறிவை கண்டறிந்து வளர்ப்பது; மற்றும் பள்ளியின் கற்றல் மொழியை வீட்டிலும் பயன்படுத்தி குழந்தைக்கு ஒருமித்த அனுபவம் தருவது. பட்டறைகள் பள்ளி நாட்காட்டியில் திட்டமிடப்படுகின்றன — பெற்றோரின் ஈடுபாடு ஒரு வடிவமைக்கப்பட்ட அம்சமாக உள்ளது.',
    },
    relatedLink: '/books',
  },
  {
    id: 'FAQ-13',
    category: 'Financial Literacy',
    question: {
      en: 'How does ACHARIYA teach Financial Intelligence differently from standard money education?',
      ta: 'ஆச்சாரியா நிதி நுண்ணறிவை வழக்கமான நிதி கல்வியிலிருந்து வேறுபட்ட முறையில் எவ்வாறு கற்பிக்கிறது?',
    },
    answer: {
      en: 'Financial Intelligence in the Dasavadani framework is not accounting or budgeting instruction — it begins with wealth philosophy. From Class 1, students learn the vocabulary of assets, liabilities, income streams, and purposeful giving. By middle school, they simulate entrepreneurial decisions and trace value creation from raw idea to market. The central distinction is mindset: ACHARIYA\'s FI curriculum builds a creator orientation — the habit of asking "how can I produce value?" — rather than a consumer orientation of "how do I spend wisely?" Dr. Arawindhan\'s book Financial Intelligence is designed as a paired resource for both classroom use and family reading.',
      ta: 'தசாவதானி கட்டமைப்பில் நிதி நுண்ணறிவு என்பது வெறும் கணக்கு அல்லது சேமிப்பு பாடமல்ல — இது செல்வத் தத்துவத்திலிருந்து தொடங்குகிறது. 1-ஆம் வகுப்பிலிருந்தே மாணவர்கள் சொத்துகள், கடன்கள், வருமான ஓட்டங்கள் மற்றும் நோக்கமுள்ள கொடுத்தல் என்ற கருத்துகளை கற்கிறார்கள். நடுநிலைப் பள்ளியில் தொழில்முனைவு முடிவுகளை உருவகப்படுத்துகிறார்கள். முக்கிய வேறுபாடு: நுகர்வோர் மனப்பான்மைக்கு பதிலாக "நான் எவ்வாறு மதிப்பை உருவாக்குவது?" என்ற படைப்பாளர் மனப்பான்மையை வளர்க்கிறது. முனைவர் அரவிந்தனின் நிதி நுண்ணறிவு நூல் வகுப்பறை மற்றும் குடும்ப வாசிப்பு இரண்டிற்கும் பயன்படும் வகையில் வடிவமைக்கப்பட்டுள்ளது.',
    },
    relatedLink: '/books',
  },
  {
    id: 'FAQ-14',
    category: 'EdTech & Platforms',
    question: {
      en: 'What is the MIWAY platform and what does it offer?',
      ta: 'மை வே (MIWAY) தளம் என்றால் என்ன? அது என்ன வழங்குகிறது?',
    },
    answer: {
      en: 'MIWAY (My Way) is Dr. Arawindhan\'s digital learning and leadership platform that extends the ACHARIYA pedagogy beyond physical campuses. It offers online courses, certification programmes, digital editions of Dr. Arawindhan\'s books, and training resources drawn from the Dasavadani curriculum — accessible to educators, parents, students, and corporate teams across India. MIWAY is the bridge between ACHARIYA\'s institutional practice and the broader public seeking evidence-based, purpose-driven education.',
      ta: 'மை வே (MIWAY) என்பது முனைவர் அரவிந்தனின் டிஜிட்டல் கற்றல் மற்றும் தலைமைத்துவ தளமாகும். இது ஆச்சாரியா வளாகங்களுக்கு அப்பால் தசாவதானி கல்வியை விரிவுபடுத்துகிறது. ஆசிரியர்கள், பெற்றோர், மாணவர்கள் மற்றும் கார்ப்பரேட் குழுக்களுக்கு ஆன்லைன் பாடங்கள், சான்றிதழ் திட்டங்கள், நூல்களின் டிஜிட்டல் பதிப்புகள் மற்றும் தசாவதானி பாடத்திட்ட வளங்களை வழங்குகிறது. ஆச்சாரியாவின் நிறுவன நடைமுறையையும் சான்று அடிப்படையிலான கல்வியை நாடும் பொதுமக்களையும் இணைக்கும் பாலமே MIWAY.',
    },
  },
  {
    id: 'FAQ-15',
    category: 'Spiritual Events',
    question: {
      en: 'What is the Maha Shambala convergence and who can attend?',
      ta: 'மகா ஷாம்பாலா (Maha Shambala) சங்கமம் என்றால் என்ன? யார் கலந்துகொள்ளலாம்?',
    },
    answer: {
      en: 'Maha Shambala is the annual spiritual convergence organised by the Divine Grace Foundation under Dr. Arawindhan\'s guidance. Held every December in Puducherry since 2012, it brings together seekers, practitioners of Divya Yogam, and spiritual aspirants from across South India for multi-day sessions of Oneness Meditation, inner-journey workshops, and consciousness discourse. The event is explicitly non-dogmatic and open to participants of all faiths and backgrounds — the only prerequisite is sincere intent to turn inward. It is not a religious festival but a structured retreat anchored in the Divya Yogam path.',
      ta: 'மகா ஷாம்பாலா என்பது முனைவர் அரவிந்தனின் வழிகாட்டுதலில் தெய்வீக அருள் அறக்கட்டளை ஏற்பாடு செய்யும் ஆண்டு ஆன்மீக சங்கமம். 2012 முதல் தொடர்ந்து ஒவ்வொரு டிசம்பரிலும் புதுச்சேரியில் நடைபெறும் இந்த நிகழ்வு, தென்னிந்தியா முழுவதிலுமிருந்து ஆன்மீக அன்பர்களை ஒருமை தியானம், உள்முகப் பயண பட்டறைகள் மற்றும் சேதனா உரைகளுக்கு ஒன்றிணைக்கிறது. இது எந்த மதத்தையும் சேர்ந்தவர்களுக்கும் திறந்தது — கோட்பாட்டு அல்ல, நேர்மையான உள் தேடலே ஒரே நிபந்தனை. இது மதசார்பற்ற திவ்ய யோகப் பாதையில் ஊன்றிய தியானத் திரட்சி.',
    },
    relatedLink: '/inner-journey',
  },
];
