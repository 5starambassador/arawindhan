import { BookItem } from '@/types';

export const booksList: BookItem[] = [
  {
    id: 'BK-002',
    slug: 'wow-parenting-book',
    coverImage: '/images/books/wow-parenting.jpg',
    title: {
      en: 'WOW Parenting',
      ta: 'வாவ் (WOW) பேரண்டிங்',
    },
    tagline: {
      en: 'School and Family Working as One: Because Learning Ends at Home',
      ta: 'பள்ளியும் குடும்பமும் இணையும் தளம்: வீட்டில் மலரும் கல்வி',
    },
    author: {
      en: 'Dr. J. Arawindhan',
      ta: 'முனைவர் ஜே. அரவிந்தன்',
    },
    edition: '1st Institutional Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'A foundational handbook for contemporary parents navigating the balance between academic expectations and emotional wellbeing. WOW Parenting introduces actionable parenting styles, emotional bonding techniques, and co-schooling frameworks that help parents nurture their children’s predominant intelligences without creating stress or anxiety.',
      ta: 'நவீன பெற்றோர்களுக்கான வழிகாட்டி நூல். கல்வி எதிர்பார்ப்புகளுக்கும் குழந்தையின் மன நலம் மற்றும் உணர்ச்சி சமநிலைக்கும் இடையிலான பாலத்தை உருவாக்குகிறது. பெற்றோர்கள் தங்கள் குழந்தைகளின் தனித்துவமான நுண்ணறிவுகளை அடையாளம் கண்டு, மன அழுத்தமின்றி அவர்களை வளர்ப்பதற்கான வழிமுறைகளை வழங்குகிறது.',
    },
    keyThemes: {
      en: [
        'Happy Parenting and Power Parenting methodologies',
        'Aligning family values with classroom learning',
        'Understanding children’s emotional spectrum and developmental phases',
        'Building high practical self-esteem without comparison',
      ],
      ta: [
        'மகிழ்ச்சியான பெற்றோர் மற்றும் ஆற்றல்மிகு வளர்ப்பு முறைகள்',
        'குடும்ப விழுமியங்களை பள்ளி கற்றலோடு இணைத்தல்',
        'குழந்தைகளின் உணர்ச்சி நிலைகள் மற்றும் வளர்ச்சிப் பருவங்களைப் புரிந்துகொள்ளுதல்',
        'மற்றவர்களோடு ஒப்பிடாமல் சுயமரியாதையை வளர்த்தல்',
      ],
    },
    targetAudience: {
      en: 'Parents of preschool, primary, and adolescent students.',
      ta: 'மழலையர், தொடக்க மற்றும் வளரிளம் பருவக் குழந்தைகளின் பெற்றோர்கள்.',
    },
    pdfUrl: '/books/wow-parenting-book.pdf',
    epubUrl: '/books/wow_parenting.epub',
    flipbookPages: Array.from({ length: 39 }, (_, i) => `/books/wow-parenting/pages/page_${i + 1}.webp`),
    sampleChapters: [
      {
        title: {
          en: 'Part 1: The Call for WOW Parenting & Raising Supera Children',
          ta: 'பகுதி 1: வாவ் (WOW) பேரண்டிங் அழைப்பு மற்றும் சுப்ரா குழந்தைகளை உருவாக்குதல்',
        },
        subtitle: {
          en: 'Awakening Limitless Potential with the 5H Foundation',
          ta: '5H அடித்தளத்தின் மூலம் வரம்பற்ற திறனை வெளிக்கொணருதல்',
        },
        paragraphs: {
          en: [
            'Every generation of parents dreams of giving their children something better—not just more possessions, but more strength, more wisdom, and more joy. In today’s world of wonders, distractions and constant acceleration, our children need something far deeper than conventional coaching: they need a holistic foundation.',
            'WOW Parenting is a comprehensive, multi-level framework that nurtures the whole child through the 5H Foundation: Head (sharpening the mind and building focus), Hand (developing skills, creativity, and craftsmanship), Heart (emotional resilience, empathy, and spiritual depth), Health (physical vitality and wholesome energy), and Happiness (inner contentment and lasting purpose).',
            'When parents and educators come together in conscious alignment, we do not merely teach lessons—we raise "Supera Children" who are resilient against failure, compassionate in action, and joyful in every breath.',
          ],
          ta: [
            'ஒவ்வொரு தலைமுறை பெற்றோரும் தங்கள் குழந்தைகளுக்கு சிறந்ததைக் கொடுக்கவே கனவு காண்கிறார்கள்—வெறும் உடைமைகளை மட்டுமல்ல, அதிக வலிமை, ஞானம் மற்றும் எல்லையற்ற மகிழ்ச்சியை வழங்க விரும்புகிறார்கள். இன்றைய வேகமான உலகில் நம் குழந்தைகளுக்கு வழக்கமான மதிப்பெண் பயிற்சிகளை விட ஆழமான வாழ்க்கை அடித்தளம் தேவைப்படுகிறது.',
            'வாவ் (WOW) பேரண்டிங் என்பது 5H அடித்தளத்தின் மூலம் குழந்தையின் முழுமையான ஆற்றலையும் மலரச் செய்யும் ஒரு புரட்சிகர கட்டமைப்பு ஆகும்: Head (கூர்மையான அறிவு மற்றும் மனக்குவிப்பு), Hand (கைத்திறன் மற்றும் படைப்பாற்றல்), Heart (உணர்ச்சி நுண்ணறிவு மற்றும் ஆன்மீக ஆழம்), Health (உடல் ஆரோக்கியம் மற்றும் சக்தி), Happiness (நீடித்த ஆனந்தம் மற்றும் வாழ்க்கை நோக்கம்).',
            'பெற்றோரும் ஆசிரியர்களும் விழிப்புணர்வோடு இணையும் போது, நாம் வெறும் பாடங்களை மட்டும் கற்பிப்பதில்லை; தோல்விகளைக் கண்டு அஞ்சாத, கருணைமிக்க, ஆனந்தம் நிறைந்த "சுப்ரா குழந்தைகளை" (Supera Children) உருவாக்குகிறோம்.',
          ],
        },
      },
      {
        title: {
          en: 'Part 2: The WOW Levels of Parenting & Archetypes',
          ta: 'பகுதி 2: பெற்றோரின் நான்கு வளர்ச்சி நிலைகள்',
        },
        subtitle: {
          en: 'From Protective Guardian to Enlightened WOW Parent',
          ta: 'பாதுகாவலர் நிலையிலிருந்து விழிப்படைந்த வாவ் பெற்றோர் வரை',
        },
        paragraphs: {
          en: [
            'Parenting is not a fixed title; it is a progressive journey of self-evolution. Most parents operate within distinct archetypes: The Protective Guardian Parent (Homeguard Parent) who prioritizes safety and physical shelter; The Leadership-Oriented Parent (Commander Parent) who sets strict milestones and drives achievements; and The Caring Provider Parent who focuses on warmth, resources, and material comfort.',
            'While each level has its value, the Enlightened WOW Parent transcends limitations. This parent does not project unresolved ambitions onto the child. Instead, they act as an inspiring mirror and conscious co-creator—awakening the child’s unique nature without fear, guilt, or coercive comparison.',
            'In the WOW approach, we replace command with connection, anxiety with curiosity, and competition with intrinsic celebration of talent.',
          ],
          ta: [
            'பெற்றோராக இருப்பது ஒரு நிலையான பட்டம் அல்ல; அது தொடர்ச்சியான சுய பரிணாமப் பயணம். பெரும்பாலான பெற்றோர்கள் மூன்று முக்கிய நிலைகளில் செயல்படுகிறார்கள்: பாதுகாப்பு மட்டுமே முக்கியம் எனக் கருதும் "பாதுகாவலர் பெற்றோர்" (Homeguard Parent), சாதனைகளையும் இலக்குகளையும் துரத்தும் "கட்டளைப் பெற்றோர்" (Commander Parent), மற்றும் வசதி வாய்ப்புகளை அள்ளித் தரும் "வழங்குநர் பெற்றோர்" (Caring Provider Parent).',
            'இந்த நிலைகள் ஒவ்வொன்றுக்கும் ஒரு மதிப்பு இருந்தாலும், "விழிப்படைந்த வாவ் பெற்றோர்" (Enlightened WOW Parent) இந்த வரம்புகளைக் கடந்து உயர்கிறார். தன் தீராத ஆசைகளை குழந்தையின் மீது திணிக்காமல், குழந்தையின் தனித்துவமான இயல்பை அச்சமின்றி மலரச் செய்யும் உன்னத வழிகாட்டியாக மாறுகிறார்.',
            'வாவ் அணுகுமுறையில், அதிகாரத்திற்குப் பதிலாக அன்பான பிணைப்பும், பதற்றத்திற்குப் பதிலாக அறிவார்ந்த வழிகாட்டலும், தேவையற்ற ஒப்பீடுகளுக்குப் பதிலாக குழந்தையின் தனித்திறன் கொண்டாட்டமும் முன்வைக்கப்படுகிறது.',
          ],
        },
      },
      {
        title: {
          en: 'Part 3: Personalized Parenting with BMIT & The 3D Cycle',
          ta: 'பகுதி 3: BMIT வழியிலான தனிப்பயனாக்கப்பட்ட வளர்ப்பு முறை & 3D சுழற்சி',
        },
        subtitle: {
          en: 'Discover, Develop, Deliver: Parenting with Clarity, Not Guesswork',
          ta: 'கண்டறிதல், வளர்த்தெடுத்தல், வெளிப்படுத்துதல்: தெளிவான பெற்றோர் முறை',
        },
        paragraphs: {
          en: [
            'No two fingerprints are alike, and no two brains are wired the same. Traditional education and conventional parenting spend years guessing what a child might be good at, often causing immense frustration when a fish is forced to climb a tree.',
            'Through BMIT (Brain Multiple Intelligence Test) developed by Dr. J. Arawindhan, parents gain an empirical, scientific lens into their child’s inborn neural strengths—whether Musical-Rhythmic, Spatial, Bodily-Kinesthetic, Intrapersonal, or Logical.',
            'The WOW Roadmap operates on the 3D Cycle: 1. Discover the natural talent; 2. Develop it through deliberate, joyful practice; and 3. Deliver real-world platforms for the child to express their gifts with unshakeable confidence.',
          ],
          ta: [
            'உலகில் எந்த இரு மனிதர்களின் கைரேகையும் ஒன்றாக இருப்பதில்லை; அதுபோலவே எந்த இரு குழந்தைகளின் மூளையமைப்பும் ஒரே மாதிரியாக இருப்பதில்லை. மீனை மரம் ஏறச் சொல்லி கட்டாயப்படுத்துவது போல, குழந்தையின் இயல்பை அறியாமல் பல ஆண்டுகள் ஊகத்தின் அடிப்படையில் வளர்ப்பது தேவையற்ற மன உளைச்சலையே தருகிறது.',
            'முனைவர் ஜே. அரவிந்தன் அவர்களால் உருவாக்கப்பட்ட BMIT (Brain Multiple Intelligence Test) முறை மூலம், குழந்தையின் இயல்பான நரம்பியல் திறன்களையும் உள்ளார்ந்த நுண்ணறிவுகளையும் அறிவியல் பூர்வமாக நாம் துல்லியமாக அறிய முடியும்.',
            'வாவ் வரைபடம் 3D சுழற்சியில் இயங்குகிறது: 1. Discover (இயற்கையான திறனைக் கண்டறிதல்), 2. Develop (மகிழ்ச்சியான பயிற்சியின் மூலம் அதை வளர்த்தெடுத்தல்), 3. Deliver (அந்த திறனை உலகிற்கு வெளிப்படுத்த மேடைகள் அமைத்துத் தருதல்). இதன் மூலம் பெற்றோர்கள் குழப்பமின்றி முழுத் தெளிவோடு குழந்தைகளை வழிநடத்த முடியும்.',
          ],
        },
      },
    ],
    readMoreSnippet: {
      en: '“School starts at Home, continues at School, and it should end at Home, easily. When parents and teachers share the same vocabulary of encouragement, the child blossoms naturally.”',
      ta: '"பள்ளி வீட்டில் தொடங்குகிறது, பள்ளியில் தொடர்கிறது, மீண்டும் வீட்டில் எளிதாக முடிய வேண்டும். பெற்றோரும் ஆசிரியரும் ஒரே நேர்மறை மொழியைப் பேசும்போது குழந்தை இயல்பாக மலர்கிறது."',
    },
  },
  {
    id: 'BK-008',
    slug: 'andava-the-victory-mode',
    coverImage: '/images/books/andava_victory_mode_v2.jpg',
    title: {
      en: 'ANDAVA: The Victory Mode',
      ta: 'ஆண்டவா: தி விக்டரி மோட் (ANDAVA: The Victory Mode)',
    },
    tagline: {
      en: 'Switching from Victim to Creator of Your Life · From Suffering to Bliss, From Tandava to Andava',
      ta: 'பாதிக்கப்பட்ட மனநிலையிலிருந்து படைப்பாளியாக மாறுங்கள் · துன்பத்திலிருந்து பேரின்பம், தாண்டவத்திலிருந்து ஆண்டவா',
    },
    author: {
      en: 'Mahavadhani Sri Achariya Arawindhan GuruG',
      ta: 'மகாவதானி ஸ்ரீ ஆச்சார்யா அரவிந்தன் குருஜி',
    },
    edition: 'Life Mastery & Tamil Wisdom Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'Inspired by the wisdom of Tamil tradition and the timeless teachings of the Bhagavad Gita, ANDAVA: The Victory Mode addresses the subtle trap of modern victimhood. By deconstructing the neurological and spiritual shift from passive suffering to active sovereignty—from Tandava to Andava—this work provides an actionable blueprint to switch into Victory Mode and take radical personal ownership of life.',
      ta: 'தமிழ் மரபின் மெய்ஞ்ஞானம் மற்றும் பகவத் கீதையின் போதனைகளால் ஈர்க்கப்பட்ட இந்நூல், நவீன மனிதனை முடக்கிப் போடும் பாதிக்கப்பட்ட மனநிலையை உடைத்தெறிகிறது. தாண்டவத்திலிருந்து ஆண்டவா நிலைக்கு நகர்ந்து, தன் வாழ்வின் முழுப் பொறுப்பையும் தானே ஏற்றுக்கொண்டு, ஒரு படைப்பாளியாக "வெற்றி பயன்முறைக்கு" (Victory Mode) எவ்வாறு மாறுவது என்பதை இந்நூல் விளக்குகிறது.',
    },
    keyThemes: {
      en: [
        'The binary shift: Victim consciousness vs. Creator consciousness',
        'From Tandava (turmoil) to Andava (victorious bliss)',
        'Inspired by Tamil spiritual traditions and the Bhagavad Gita',
        'Architecting daily rituals of unshakeable conviction and victory',
      ],
      ta: [
        'பாதிக்கப்பட்ட மனநிலைக்கும் படைப்பாளி விழிப்புணர்வுக்கும் இடையிலான மாற்றம்',
        'தாண்டவத்திலிருந்து ஆண்டவா நிலைக்கு நகர்தல்',
        'தமிழ் மரபின் ஞானம் மற்றும் பகவத் கீதையின் சாரங்கள்',
        'அசைக்க முடியாத தன்னம்பிக்கை மற்றும் தொடர் முன்னேற்றத்திற்கான தினசரி பயிற்சிகள்',
      ],
    },
    targetAudience: {
      en: 'Youth, emerging entrepreneurs, corporate leaders, and individuals seeking to overcome self-doubt and achieve personal mastery.',
      ta: 'இளைஞர்கள், இளம் தொழில்முனைவோர் மற்றும் சுய சந்தேகங்களைக் கடந்து வாழ்வில் சாதிக்கத் துடிக்கும் அனைவரும்.',
    },
    readMoreSnippet: {
      en: '“You cannot conquer the world while you are still making excuses for it. The exact second you stop asking ‘Why did this happen to me?’ and begin declaring ‘I am the creator of what happens next,’ Victory Mode is switched on.”',
      ta: '"சுய சமாதானங்களை அடுக்கிக் கொண்டிருக்கும் வரை உங்களால் இந்த உலகை வெல்ல முடியாது. ‘இது எனக்கு ஏன் நடந்தது?’ என்று புலம்புவதை நிறுத்திவிட்டு, ‘அடுத்து நடப்பதை நானே தீர்மானிக்கிறேன்’ என்று நீங்கள் அறிவிக்கும் நொடியில் வெற்றி முறை உயிர்பெறுகிறது."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Binary Shift: Victim Consciousness vs. Creator Consciousness',
          ta: 'அத்தியாயம் 1: பாதிக்கப்பட்ட மனநிலையிலிருந்து படைப்பாளியாக மாறுதல்',
        },
        subtitle: {
          en: 'Switching Off the Excuse Machine and Activating Personal Sovereignty',
          ta: 'சுய சமாதானங்களை முறித்து ஆன்ம பலத்தை நிலைநிறுத்துதல்',
        },
        paragraphs: {
          en: [
            'You cannot conquer the world while you are still making excuses for it. The defining disease of modern culture is victimhood: the automatic reflex to blame upbringing, circumstances, economic cycles, or other individuals for personal stagnation.',
            'The instant you declare, “I am the sole author of my responses, my discipline, and my destiny,” the excuse machine powers down. This is the binary shift: stepping out of passive victimhood directly into creator consciousness.',
            'Victory Mode is not an intellectual concept; it is an internal switch. Once activated, obstacles cease to be dead ends; they transform into raw material for your inevitable triumph.',
          ],
          ta: [
            'சுய சமாதானங்களை அடுக்கிக் கொண்டிருக்கும் வரை உங்களால் இந்த உலகை வெல்ல முடியாது. சூழ்நிலைகளையோ அல்லது பிறரையோ குறைசொல்லும் பலவீனமான மனநிலையே மனிதனை முடக்கிப் போடும் பெருநோயாகும்.',
            '“என் எண்ணங்களுக்கும், என் ஒழுக்கத்திற்கும், என் எதிர்காலத்திற்கும் நானே முழுப் பொறுப்பாளி” என்று நீங்கள் எப்போது அறிவிக்கிறீர்களோ, அப்போது புகார்களின் இயந்திரம் நின்றுவிடுகிறது. இதுவே பாதிக்கப்பட்ட மனநிலையிலிருந்து படைப்பாளி நிலைக்கு மாறும் புரட்சிகரப் பாய்ச்சல் ஆகும்.',
            'வெற்றி முறை (Victory Mode) என்பது தத்துவார்த்த கருத்து அல்ல; அது உங்களுக்குள் இருக்கும் ஒரு சுவிட்ச். அதை இயக்கியதும், தடைகள் யாவும் உங்களின் மாபெரும் வெற்றிக்குத் தேவையான மூலப்பொருட்களாக மாறிவிடுகின்றன.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: From Tandava to Andava: The Bliss of Triumph',
          ta: 'அத்தியாயம் 2: தாண்டவத்திலிருந்து ஆண்டவா: அசைக்க முடியாத வெற்றி நிலை',
        },
        subtitle: {
          en: 'Synthesizing Tamil Spiritual Wisdom and the Bhagavad Gita for Daily Mastery',
          ta: 'தமிழ் மரபின் மெய்ஞ்ஞானம் மற்றும் பகவத் கீதையின் சாரத்தில் வெற்றி பெறுதல்',
        },
        paragraphs: {
          en: [
            'Tandava represents the turbulent cosmic dance of dissolution, struggle, and emotional chaos. Most people spend their entire lives locked in inner Tandava, fighting circumstances and feeling battered by fate.',
            'Andava is the transcendent victory mode: the supreme state of serene sovereignty, mastery, and bliss celebrated across Tamil heritage and illuminated in the Bhagavad Gita. In Andava, action is performed with immaculate focus without clinging to anxiety over results.',
            'Rise into Andava. When your inner state is anchored in divine certainty, the external world aligns effortlessly with your righteous purpose.',
          ],
          ta: [
            'தாண்டவம் என்பது பிரபஞ்ச மாற்றத்தின் கொந்தளிப்பான நடனம்; போராட்டங்களும் மனக்குழப்பங்களும் நிறைந்த நிலையாகும். பெரும்பாலான மனிதர்கள் இந்த உள்முகத் தாண்டவத்தில் சிக்கி வாழ்க்கையோடு போராடிக்கொண்டே இருக்கிறார்கள்.',
            'ஆண்டவா (Andava) என்பது அனைத்தையும் வென்ற அமைதியான இறைநிலை: தமிழ் ஆன்மீக மரபிலும், பகவத் கீதையின் யோக தத்துவத்திலும் போற்றப்படும் பரிபூரண வெற்றி நிலை. இந்நிலையை எட்டிய மனிதன் பலனைப் பற்றிய அச்சமின்றி, முழுமையான கவனத்தோடு கடமைகளை நிறைவேற்றி வெல்கிறான்.',
            'ஆண்டவா நிலைக்கு விழித்தெழுங்கள். உங்கள் மனம் தெய்வீக உறுதியில் நிலைபெறும்போது, புற உலகமும் உங்களின் உன்னத லட்சியங்களுக்கு இயல்பாகவே வழிவிட்டு நிற்கும்.',
          ],
        },
      },
    ],
    pdfUrl: '/books/andava.pdf',
    flipbookPages: Array.from({ length: 139 }, (_, i) => `/books/andava/pages/page_${i + 1}.webp`),
  },
  {
    id: 'BK-009',
    slug: 'the-yoga-of-personality',
    coverImage: '/images/books/yoga-of-personality.jpg',
    pdfUrl: '/books/yoga-of-personality.pdf',
    flipbookPages: Array.from({ length: 33 }, (_, i) => `/books/yoga-of-personality/pages/page_${i + 1}.webp`),
    title: {
      en: 'The Yoga of Personality',
      ta: 'ஆளுமையின் யோகம் (The Yoga of Personality)',
    },
    tagline: {
      en: 'A Story of Becoming Who You Already Are — Based on the Teachings of the Original Speech',
      ta: 'நீங்கள் ஏற்கனவே யார் என்பதை உணரும் ஆளுமைப் பயணம்',
    },
    author: {
      en: 'Mahavadhani Sri Achariya Arawindhan GuruG',
      ta: 'மகாவதானி ஸ்ரீ ஆச்சார்யா அரவிந்தன் குருஜி',
    },
    edition: 'Consciousness & Leadership Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'Based on the profound teachings of Dr. J. Arawindhan’s celebrated keynote address, The Yoga of Personality challenges conventional corporate definitions of charisma. Rather than treating personality as a superficial mask assembled from rehearsed gestures, the book defines it through the classical yogic lens of inner union—the alignment of thought, speech, energy, and action that allows an individual’s innate genius to shine without friction.',
      ta: 'முனைவர் ஜே. அரவிந்தனின் புகழ்பெற்ற பேருரையின் அடிப்படையில் அமைந்த அரிய நூல். மேலோட்டமான பாவனைகளையோ மற்றவர்களைக் கவர அணியும் முகமூடியையோ ஆளுமை என்று உலகம் நினைக்கிறது. ஆனால் யோக தத்துவத்தின்படி, மனிதனின் எண்ணம், சொல், செயல் மற்றும் உள் ஆற்றல் ஆகியவை ஒன்றுபடும்போது வெளிப்படும் அசல் மாண்பே உண்மையான ஆளுமை என்பதை இந்நூல் நிறுவுகிறது.',
    },
    keyThemes: {
      en: [
        'Personality as authentic integration rather than external imitation',
        'The Five Koshas (sheaths of being) and their role in human magnetism',
        'Dissolving conditioned social anxiety to liberate natural presence',
        'The synthesis of yogic stillness and decisive executive power',
      ],
      ta: [
        'போலிப் பாவனைகளைத் தவிர்த்து உள்ளார்ந்த ஒருங்கிணைப்பை ஆளுமையாக்குதல்',
        'பஞ்ச கோசங்கள் மற்றும் மனித ஈர்ப்பு விசையின் ரகசியங்கள்',
        'சமூகப் பயங்களைக் களைந்து இயற்கையான தன்னம்பிக்கையை வெளிக்கொணர்தல்',
        'யோக அமைதியையும் நிர்வாக உறுதியையும் ஒன்றிணைக்கும் கலை',
      ],
    },
    targetAudience: {
      en: 'Public speakers, teachers, educators, executives, and spiritual aspirants seeking authentic presence.',
      ta: 'மேடைப் பேச்சாளர்கள், ஆசிரியர்கள், நிறுவன நிர்வாகிகள் மற்றும் மெய்யான தலைமைத்துவ ஆளுமையை வளர்க்க விரும்புவோர்.',
    },
    readMoreSnippet: {
      en: '“Personality is not an outfit you put on to impress the world. It is the radiant stillness that emerges when you have the courage to become who you already are.”',
      ta: '"ஆளுமை என்பது உலகத்தை கவர நீங்கள் அணிந்து கொள்ளும் ஆடம்பர ஆடை அல்ல; அனைத்து போலிகளையும் கழற்றி எறிந்துவிட்டு, நீங்கள் ஏற்கனவே யார் என்பதை உணரும்போது வெளிப்படும் தூய ஒளியே ஆளுமை."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: Personality as Inner Alignment, Not External Mask',
          ta: 'அத்தியாயம் 1: முகமூடிகளைக் களைந்து அசல் மாண்பை உணர்தல்',
        },
        subtitle: {
          en: 'A Story of Becoming Who You Already Are — The True Meaning of Yoga',
          ta: 'நீங்கள் ஏற்கனவே யார் என்பதை உணரும் ஆளுமைப் பயணம்',
        },
        paragraphs: {
          en: [
            'The word "personality" originates from the Latin persona, meaning an actor’s mask. Commercial coaching treats personality as a set of rehearsed hand gestures, superficial grooming, and artificial vocal modulation designed to manipulate external perceptions.',
            'The Yoga of Personality utterly rejects this shallow premise. Yoga means union. Authentic personality is the seamless alignment of your thought, your word, your vital energy, and your action. When there is zero contradiction between who you are within and what you project without, genuine presence is born.',
            'Personality is not an outfit you put on to impress the world; it is the radiant stillness that emerges when you have the courage to become who you already are.',
          ],
          ta: [
            'ஆளுமை (Personality) என்ற சொல் ‘பெர்சோனா’ என்ற லத்தீன் சொல்லிலிருந்து பிறந்தது; அதற்கு நடிகர்கள் அணியும் முகமூடி என்று பொருள். வணிகப் பயிற்சிகள் மேலோட்டமான பாவனைகளையும், போலியான சிரிப்பையும் கற்றுக் கொடுத்து மற்றவர்களைக் கவர முயல்கின்றன.',
            'ஆளுமையின் யோகம் இந்த மேலோட்டமான அணுகுமுறையை முற்றிலுமாக நிராகரிக்கிறது. யோகம் என்றால் இணைவு என்று பொருள். உங்கள் எண்ணம், சொல், ஆற்றல் மற்றும் செயல் ஆகியவை ஒன்றுபடும் போது வெளிப்படும் அசல் மாண்பே உண்மையான ஆளுமை ஆகும்.',
            'ஆளுமை என்பது உலகத்தை கவர நீங்கள் அணிந்து கொள்ளும் ஆடம்பர ஆடை அல்ல; அனைத்து போலிகளையும் கழற்றி எறிந்துவிட்டு, நீங்கள் ஏற்கனவே யார் என்பதை உணரும்போது வெளிப்படும் தூய ஒளியே ஆளுமை.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Five Sheaths (Panchakosas) of Human Magnetism',
          ta: 'அத்தியாயம் 2: பஞ்ச கோசங்களும் மனித காந்த ஈர்ப்பு விசையும்',
        },
        subtitle: {
          en: 'Dissolving Social Anxiety Through Pranic Vitality and Soul Presence',
          ta: 'சமூகப் பயங்களைக் களைந்து இயற்கையான தன்னம்பிக்கையை வெளிக்கொணர்தல்',
        },
        paragraphs: {
          en: [
            'Classical yogic science maps human existence across five concentric sheaths (Panchakosas): the physical food body (Annamaya), the vital breath layer (Pranamaya), the mental sheath (Manomaya), the wisdom layer (Vijnanamaya), and the core of bliss (Anandamaya).',
            'When an individual cleanses their vital energy through pranayama and dissolves conditioned insecurities in the wisdom sheath, their bio-electromagnetic field expands. They do not need to fight for attention; their presence naturally commands quiet respect and profound trust.',
            'Cultivate the inner kingdom. When the soul rests in Anandamaya, executive power, charismatic speech, and calm decision-making flow naturally without strain.',
          ],
          ta: [
            'பண்டைய யோக அறிவியல் மனித இருப்பை ஐந்து நிலைகளாக (பஞ்ச கோசங்கள்) விளக்குகிறது: அன்னமய கோசம் (உடல்), பிராணமய கோசம் (உயிர் மூச்சு), மனோமய கோசம் (மனம்), விஞ்ஞானமய கோசம் (விவேகம்) மற்றும் ஆனந்தமய கோசம் (ஆன்மப் பேரின்பம்).',
            'ஒரு மனிதன் தன் பிராண ஆற்றலை ஒழுங்குபடுத்தி, மனக் கசப்புகளையும் தாழ்வுணர்ச்சிகளையும் ஞானத்தினால் களையும்போது, அவனது ஆளுமை இயல்பாகவே காந்த ஈர்ப்பு விசையைப் பெறுகிறது. அவன் கவனத்தை ஈர்க்கப் போராடத் தேவையில்லை; அவனது இருப்பே அனைவரின் நம்பிக்கையையும் பெற்றுத் தருகிறது.',
            'உள்முக விழிப்புணர்வை வளர்த்தெடுங்கள். ஆன்மா ஆனந்தமய கோசத்தில் நிலைபெறும்போது, தெளிவான நிர்வாக ஆற்றலும், வசீகரப் பேச்சும், அமைதியான முடிவெடுக்கும் திறனும் தன்னியல்பாக வெளிப்படுகின்றன.',
          ],
        },
      },
    ],
  },
  {
    id: 'BK-010',
    slug: 'from-knowing-to-doing',
    coverImage: '/images/books/from_knowing_to_doing_v2.jpg',
    title: {
      en: 'From Knowing to Doing',
      ta: 'அறிதலில் இருந்து செயலுக்கு (From Knowing to Doing)',
    },
    tagline: {
      en: 'The Four Pillars of Youth Empowerment in India: A Practical Guide to Building Skill, Talent, and Purpose For the Gen Z Generation',
      ta: 'இந்திய இளைஞர் அதிகாரமளித்தலின் 4 தூண்கள்: ஜென்-இசட் தலைமுறைக்கான திறன், மேதமை மற்றும் லட்சிய வழிகாட்டி',
    },
    author: {
      en: 'Mahavadhani Sri Achariya Arawindhan GuruG',
      ta: 'மகாவதானி ஸ்ரீ ஆச்சார்யா அரவிந்தன் குருஜி',
    },
    edition: 'National Youth Empowerment Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'Written directly for India’s burgeoning Gen Z demographic, From Knowing to Doing bridges the catastrophic chasm between academic information and real-world execution. Dr. J. Arawindhan outlines the Four Pillars of Youth Empowerment—Foundation Skill, Honed Talent, Relentless Execution, and Transcendent Purpose—equipping youngsters with the psychological stamina and technical dexterity to transform knowledge into nation-building enterprises.',
      ta: 'இந்தியாவின் புதிய தலைமுறை இளைஞர்களுக்காக எழுதப்பட்ட நடைமுறை சாசன நூல். தகவல்களை மனப்பாடம் செய்வதற்கும் நிஜ உலகில் அதைச் செயல்படுத்திக் காட்டுவதற்கும் இடையே உள்ள இடைவெளியை இந்நூல் தகர்க்கிறது. அடிப்படைத் திறன், தனித்துவத் திறமை, அயராத செயல்பாடு மற்றும் உன்னத லட்சியம் ஆகிய 4 தூண்களின் வழியே இளைஞர்கள் தங்கள் ஆற்றலை தேச நிர்மாண சக்தியாக மாற்றுவதற்கான வழிகளை வழங்குகிறது.',
    },
    keyThemes: {
      en: [
        'The Four Pillars: Skill Mastery, Talent Differentiation, Relentless Doing, Purposeful Direction',
        'Overcoming digital distraction and information paralysis in the Gen Z era',
        'The 10,000-hour principle transformed into focused sprints and agile execution',
        'Creating sovereign value for India on the global stage',
      ],
      ta: [
        '4 தூண்கள்: அடிப்படைத் திறன், தனித்துவ மேதமை, உறுதியான செயல், உன்னத நோக்கம்',
        'டிஜிட்டல் கவனச்சிதறல்களைக் கடந்து செயலில் ஆழமான கவனம் செலுத்துதல்',
        'வெறும் அறிவுத் திரட்டலைத் தாண்டி நிஜ உலகப் பிரச்சனைகளுக்கு தீர்வு காணுதல்',
        'உலக அரங்கில் பாரதத்தின் பெருமையை நிலைநிறுத்தும் இளைஞர் சக்தி',
      ],
    },
    targetAudience: {
      en: 'Gen Z youth, college students, career starters, school leavers, and youth mentors.',
      ta: 'கல்லூரி மாணவர்கள், தொழில்முனைவோராக விரும்பும் இளைஞர்கள் மற்றும் இளைய தலைமுறை வழிகாட்டிகள்.',
    },
    readMoreSnippet: {
      en: '“Knowing without doing is the tragedy of modern education. India will not be built by what our graduates store in memory; India will be built by what our youth dare to execute with their hands and hearts.”',
      ta: '"அறிந்தும் செயல்படாமல் இருப்பது நவீன கல்வியின் மிகப்பெரிய சாபக்கேடு. பட்டதாரிகள் நினைவில் வைத்திருப்பதைக் கொண்டு இந்தியா வளரப் போவதில்லை; இளைஞர்கள் தங்கள் கரங்களாலும் இதயத்தாலும் என்ன செய்து காட்டுகிறார்கள் என்பதிலேயே தேசத்தின் எதிர்காலம் உள்ளது."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Chasm Between Knowing and Doing',
          ta: 'அத்தியாயம் 1: அறிதலுக்கும் செயலுக்குமான மாபெரும் இடைவெளி',
        },
        subtitle: {
          en: 'Why Information Accumulation is Paralyzing India’s Youth',
          ta: 'தகவல் திரட்டலைக் கடந்து உறுதியான செயலில் இறங்குவதன் அவசியம்',
        },
        paragraphs: {
          en: [
            'Knowing without doing is the tragedy of modern education. Millions of educated youth possess academic diplomas, memorized definitions, and theoretical concepts, yet stand utterly immobilized when challenged to execute a real-world project.',
            'Information is not power; information is merely potential energy. Power only manifests when knowledge is channeled through disciplined hands and purposeful execution. The world does not reward what you have in your head; the world rewards what you dare to build with your actions.',
            'Bridge the chasm today. Stop collecting certificates as substitutes for achievement. Take your existing knowledge and execute with relentless determination.',
          ],
          ta: [
            'அறிந்தும் செயல்படாமல் இருப்பது நவீன கல்வியின் மிகப்பெரிய சாபக்கேடு. லட்சக்கணக்கான இளைஞர்களிடம் பட்டங்களும், மனப்பாடம் செய்த வரையறைகளும் உள்ளன; ஆனால் நிஜ உலகில் ஒரு செயலைச் செய்து முடிக்கச் சொன்னால் தயங்கி நிற்கிறார்கள்.',
            'தகவல்கள் மட்டுமே வலிமையாகிவிடாது; அது வெறும் சாத்தியக்கூறு மட்டுமே. அறிவு செயல் வடிவம் பெற்று கரங்களினாலும் இதயத்தினாலும் செயல்படுத்தப்படும் போதே அது உண்மையான சக்தியாக மாறுகிறது. நீங்கள் நினைவில் வைத்திருப்பதற்காக உலகம் உங்களை மதிப்பதில்லை; நீங்கள் என்ன செய்து காட்டுகிறீர்கள் என்பதிலேயே உங்கள் மதிப்பு உள்ளது.',
            'அறிதலுக்கும் செயலுக்குமான இடைவெளியைத் தகருங்கள். பட்டங்களை சாதனைகளின் மாற்றாகக் கருதுவதை நிறுத்துங்கள். உங்களிடம் உள்ள அறிவைக் கொண்டு உடனே அயராது செயல்படத் தொடங்குங்கள்.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Four Pillars of Youth Empowerment',
          ta: 'அத்தியாயம் 2: இளைஞர் அதிகாரமளித்தலின் நான்கு தூண்கள்',
        },
        subtitle: {
          en: 'Foundation Skill, Honed Talent, Relentless Execution, Transcendent Purpose',
          ta: 'அடிப்படைத் திறன், தனித்துவ மேதமை, உறுதியான செயல், உன்னத நோக்கம்',
        },
        paragraphs: {
          en: [
            'To guide the Gen Z generation to global leadership, Dr. J. Arawindhan articulates the Four Pillars of Youth Empowerment: 1. Foundation Skill (mastering the non-negotiable tools of language, technology, and finance); 2. Honed Talent (identifying your inborn genius and sharpening it through deliberate practice); 3. Relentless Doing (the grit to work through obstacles without waiting for motivation); and 4. Transcendent Purpose (dedicating personal strength to the welfare of the nation and humanity).',
            'When these four pillars stand firm, self-doubt dissolves and youth step into sovereign greatness. India will not be built by spectators; India will be built by creators who know and do.',
            'Do not wait for ideal conditions. Begin where you stand, with the resources you have, and let your work declare your purpose.',
          ],
          ta: [
            'ஜென்-இசட் தலைமுறையை உலகளாவிய சாதனையாளர்களாக மாற்ற முனைவர் ஜே. அரவிந்தன் 4 தூண்களை முன்வைக்கிறார்: 1. அடிப்படைத் திறன் (மொழி, நவீன தொழில்நுட்பம், நிதி ஒழுங்கு ஆகியவற்றில் தேர்ச்சி); 2. தனித்துவ மேதமை (உள்ளார்ந்த திறனைக் கண்டறிந்து இடைவிடாத பயிற்சியால் கூர்மைப்படுத்துதல்); 3. உறுதியான செயல் (சூழல்களைக் கடந்து அயராது உழைக்கும் உறுதி); 4. உன்னத நோக்கம் (தனிப்பட்ட வெற்றியைத் தாண்டி தேசத்திற்கும் மனிதகுலத்திற்கும் தொண்டாற்றுதல்).',
            'இந்த நான்கு தூண்களும் உறுதியாகும்போது, சுய சந்தேகம் மறைந்து இளைஞர்கள் புதிய சகாப்தத்தைப் படைக்கிறார்கள். வேடிக்கை பார்ப்பவர்களால் இந்தியா வளரப் போவதில்லை; அறிந்து செயலாற்றும் படைப்பாளிகளாலேயே தேசம் உயரும்.',
            'சாதகமான சூழலுக்காகக் காத்திருக்காதீர்கள். நீங்கள் இருக்கும் இடத்திலிருந்தே, உங்களிடம் உள்ள வளங்களைக் கொண்டே செயலில் இறங்குங்கள்; உங்கள் செயல்கள் உங்கள் உன்னத லட்சியத்தைப் பிரகடனப்படுத்தட்டும்.',
          ],
        },
      },
    ],
    pdfUrl: '/books/from-knowing-to-doing.pdf',
    flipbookPages: Array.from({ length: 36 }, (_, i) => `/books/from-knowing-to-doing/pages/page_${i + 1}.webp`),
  },
  {
    id: 'BK-012',
    slug: 'science-of-divine-grace-tirukkural',
    coverImage: '/images/books/science_of_divine_grace_v2.jpg',
    title: {
      en: 'The Science of Divine Grace: Achieving Heavenly Glory through the Tirukkuṟaḷ',
      ta: 'திருவருளின் அறிவியல் : திருக்குறள் வழி வான் புகழ் அடைதல்',
    },
    tagline: {
      en: 'The Sacred Technology of Righteous Action, Divine Grace & Immortality of Contribution',
      ta: 'திருக்குறள் காட்டும் மெய்ஞ்ஞான நெறி மற்றும் வான் புகழ் பெறுவதற்கான ஆன்ம அறிவியல்',
    },
    author: {
      en: 'Mahavadhani Sri Achariya Arawindhan GuruG',
      ta: 'மகாவதானி ஸ்ரீ ஆச்சார்யா அரவிந்தன் குருஜி',
    },
    edition: 'Sacred Heritage & Philosophy Edition',
    language: 'Tamil & English',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'In this monumental spiritual and philosophical work, Dr. J. Arawindhan decodes the ancient verses of the Tirukkuṟaḷ not merely as ethical literature, but as an exact spiritual science. Exploring the profound dynamic between human endeavor and Thiruvarul (Divine Grace), the book illuminates how righteous living (Aram), ethical prosperity (Porul), and transcendent joy (Inbam) converge to grant the human being Vaan Pugazh—the immortal glory of leaving the world distinctly higher than one found it.',
      ta: 'திருக்குறளை வெறும் நீதி நூலாக மட்டும் பார்க்காமல், இறையருளை ஈர்த்து வாழ்வில் வான் புகழ் பெறுவதற்கான துல்லியமான மெய்ஞ்ஞான அறிவியலாக விளக்கும் மாபெரும் படைப்பு. மனிதனின் அறநெறி சார்ந்த உழைப்பும், திருவருளின் பேரருளும் இணையும் போது ஏற்படும் அரிய ஆன்ம மாற்றங்களை இந்நூல் விளக்குகிறது. "தோன்றின் புகழொடு தோன்றுக" என்ற குறள் வாக்கின் ஆழமான மெய்ப்பொருளை நவீன வாழ்வியலோடு பொருத்தி வழிகாட்டுகிறது.',
    },
    keyThemes: {
      en: [
        'Thiruvarul as cosmic resonance: The physics of Divine Grace in everyday action',
        'Decoding the Tirukkuṟaḷ as an operational manual for human peak potential',
        'The triad harmony: Aram (Righteousness), Porul (Material Creation), Inbam (Bliss)',
        'Vaan Pugazh: Transcending biological mortality through selfless civilizational legacy',
      ],
      ta: [
        'திருவருள் என்னும் பிரபஞ்ச ஆற்றல்: அன்றாடச் செயல்களில் இறையருளை ஈர்க்கும் முறை',
        'மனித உச்சநிலைக்கான வழிகாட்டி நூலாக திருக்குறளை உணர்தல்',
        'அறம், பொருள், இன்பம் ஆகியவற்றின் முக்காலப் பொருத்தம்',
        'வான் புகழ்: சுயநலமற்ற மக்கள் சேவையின் மூலம் அழியாப் புகழ் எய்துதல்',
      ],
    },
    targetAudience: {
      en: 'Scholars of Tamil literature, spiritual practitioners, ethical leaders, educators, and global truth-seekers.',
      ta: 'தமிழ் இலக்கிய ஆர்வலர்கள், ஆன்மீகப் சாதகர்கள், அறவழியில் வாழத் துடிக்கும் தலைவர்கள் மற்றும் உலகளாவிய மெய்த்தேடலாளர்கள்.',
    },
    readMoreSnippet: {
      en: '“Heavenly glory is never the product of arrogance or noise. It is the silent, eternal afterglow of a human life that aligned itself with Divine Grace to lift millions from darkness into light.”',
      ta: '"வான் புகழ் என்பது தற்பெருமையால் வருவதல்ல; இறையருளோடு தன் வாழ்வை இணைத்துக்கொண்டு, ஆயிரமாயிரம் உயிர்களை இருளிலிருந்து வெளிச்சத்திற்கு உயர்த்திய ஒரு தூய ஆன்மாவின் அழியாத ஒளியாகும்."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Tirukkuṟaḷ as an Operational Spiritual Science',
          ta: 'அத்தியாயம் 1: திருக்குறள் காட்டும் துல்லியமான மெய்ஞ்ஞான அறிவியல்',
        },
        subtitle: {
          en: 'Beyond Moral Admonition: The Sacred Physics of Aram, Porul, and Inbam',
          ta: 'நீதி நூலைத் தாண்டி: அறம், பொருள், இன்பத்தின் பிரபஞ்ச அறிவியல் நெறி',
        },
        paragraphs: {
          en: [
            'The Tirukkuṟaḷ is universally revered as ethical literature, yet viewing it solely as moral instruction overlooks its highest dimension: it is an exact, reproducible spiritual technology for the optimization of human consciousness and universal resonance.',
            'Sage Tiruvalluvar decoded the cosmic operating system: Aram (righteous ethical alignment) is not self-denial; it is the friction-free state of living in harmony with cosmic law. When wealth (Porul) is acquired through the pure conduit of Aram, it multiplies without bringing karmic disease or anxiety.',
            'When human endeavor aligns with cosmic dharma, the mysterious force of Thiruvarul (Divine Grace) rushes in, turning impossible aspirations into triumphant reality.',
          ],
          ta: [
            'திருக்குறள் உலகெங்கும் ஒரு நீதி நூலாக போற்றப்படுகிறது; ஆனால் அதை வெறும் நல்லுரையாக மட்டுமே பார்ப்பது அதன் உண்மையான உச்சத்தை மறைத்துவிடும். அது மனித விழிப்புணர்வை முழுமையாக்கும் துல்லியமான ஆன்ம அறிவியலாகும்.',
            'வள்ளுவப் பெருந்தகை பிரபஞ்சத்தின் ரகசிய நெறியை விளக்கியுள்ளார்: அறம் என்பது தியாகம் அல்ல; அது பிரபஞ்ச விதிகளோடு இயைந்து வாழும் உராய்வற்ற வாழ்க்கை முறையாகும். அறவழியில் ஈட்டப்படும் பொருள், எவ்வித மன உளைச்சலும் அச்சமும் இன்றி பன்மடங்காகப் பெருகும்.',
            'மனிதனின் நேர்மையான உழைப்பும் தர்மமும் இணையும் போது, திருவருள் என்னும் பேராற்றல் உடன் நின்று, சாத்தியமற்ற இலக்குகளையும் மகத்தான வெற்றிகளாக மாற்றுகிறது.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: Vaan Pugazh: The Immortal Glory of Selfless Contribution',
          ta: 'அத்தியாயம் 2: வான் புகழ்: திருவருளும் அழியாப் பெருவாழ்வும்',
        },
        subtitle: {
          en: '“To Be Born is to Be Born with Glory”: Leaving the World Distinctly Higher',
          ta: '“தோன்றின் புகழொடு தோன்றுக” — அழியாப் புகழும் மக்கள் சேவையும்',
        },
        paragraphs: {
          en: [
            '“தோன்றின் புகழொடு தோன்றுக அஃதிலார் தோன்றலின் தோன்றாமை நன்று.” To be born into human form is a rare cosmic privilege; to live merely for bodily survival is a waste of that gift. Valluvar urges us to attain Vaan Pugazh—the immortal glory of contribution that outlives biological death.',
            'Pugazh (glory) in the sacred Tamil worldview is not vanity or celebrity narcissism. It is the fragrant spiritual residue of a life lived in selfless devotion to truth, educational elevation, and the upliftment of suffering humanity.',
            'Anchor your life in the science of Divine Grace. When you serve the world with pure devotion, the cosmos preserves your name in the eternal memory of the stars.',
          ],
          ta: [
            '“தோன்றின் புகழொடு தோன்றுக அஃதிலார் தோன்றலின் தோன்றாமை நன்று.” மனிதப் பிறவி என்பது அரிய பிரபஞ்ச வரம்; அதை வெறும் உடலியல் தேவைகளுக்காக மட்டுமே வீணடிப்பது அந்த வரத்தை அவமதிப்பதாகும். வள்ளுவர் நம்மை வான் புகழ் அடைய அழைக்கிறார்—உடலின் மறைவிற்குப் பிறகும் நிலைத்து நிற்கும் மக்கள் சேவையின் பெருமை அது.',
            'தமிழ் மரபில் ‘புகழ்’ என்பது மேலோட்டமான விளம்பரம் அல்ல; அது வாய்மைக்கும், கல்வி வளர்ச்சிக்கும், ஏழை எளிய மக்களின் மேம்பாட்டிற்கும் தன்னை அர்ப்பணித்த ஒரு தியாக வாழ்வின் புனித வாசனையாகும்.',
            'திருவருளின் அறிவியலில் உங்கள் வாழ்க்கையை நிலைநிறுத்துங்கள். தூய அன்போடு நீங்கள் உலகிற்குச் செய்யும் சேவையை காலம் தன் நெஞ்சில் அழியாத ஒளியாகப் போற்றிப் பாதுகாக்கும்.',
          ],
        },
      },
    ],
    pdfUrl: '/books/the-science-of-divine-grace.pdf',
    flipbookPages: Array.from({ length: 43 }, (_, i) => `/books/the-science-of-divine-grace/pages/page_${i + 1}.webp`),
  },
  {
    id: 'BK-013',
    slug: 'wow-dictionary',
    coverImage: '/images/books/wow-dictionary.jpg',
    title: {
      en: 'A WOW Dictionary – Concepts & Strategy',
      ta: 'வாவ் (WOW) அகராதி – கோட்பாடுகள் & யுக்திகள்',
    },
    tagline: {
      en: 'Resonance & Coherence: World of Wonders · Working Out Wonders · Wonder of the World',
      ta: 'ஒத்திசைவு & ஒருமைப்பாடு: வியப்புறும் உலகம் · அதிசயங்களை நிகழ்த்தும் உழைப்பு · உலகின் அற்புதம்',
    },
    author: {
      en: 'Tr. J. Arawindhan Ji (Teacher · Trainer · Transformer · Trendsetter · Total Reformer)',
      ta: 'ஆசிரியர் ஜே. அரவிந்தன் ஜி (கற்பிப்பாளர் · பயிற்றுவிப்பாளர் · உருமாற்றுபவர் · முன்னோடி)',
    },
    edition: 'Official Philosophical & Operational Monograph',
    language: 'English',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'A masterwork gathering the core concepts, strategic lexicon, and operational philosophies conceived by Tr. J. Arawindhan Ji. Rather than standard dictionary definitions, every entry encapsulates living principles—from The Origin and Identity & Way of Being to The Three Pillars of Poise, The Five R\'s of Inner Strength, and Self-Mastery Habits—designed to spark resonance, coherence, and transformative action in leaders, educators, and seekers.',
      ta: 'ஆசிரியர் ஜே. அரவிந்தன் ஜி அவர்களால் உருவாக்கப்பட்ட மூலக் கோட்பாடுகள், வியூகச் சொற்கள் மற்றும் செயல்முறைத் தத்துவங்களின் தொகுப்பு நூல். வழக்கமான அகராதிப் பொருள் கடந்து, ஒவ்வொன்றும் உயிர்ப்புள்ள வாழ்வியல் யுக்தியாக விளங்குகிறது. தோற்றம், சுய அடையாளம், அமைதியின் மூன்று தூண்கள், ஐந்து ஆர் (5 R’s) உள் உறுதி மற்றும் சுய ஆளுமைப் பழக்கவழக்கங்கள் என தலைவர்களுக்கும் கல்வியாளர்களுக்கும் வழிகாட்டும் மாபெரும் படைப்பு.',
    },
    keyThemes: {
      en: [
        'The Three WOW Readings: World of Wonders, Working Out Wonders, Wonder of the World',
        'Identity & Way of Being: The Three Pillars of Poise and Five R\'s of Inner Strength',
        'Rallying cries, self-mastery habits, and the Tamil Triad of Doing',
        'Resonance & Coherence: Moving from knowledge to experiential awakening',
      ],
      ta: [
        'வாவ் (WOW) மூன்று நிலைகள்: உலக அதிசயம், அதிசயங்களை நிகழ்த்தும் உழைப்பு, உலகின் அற்புதம்',
        'சுய அடையாளம்: அமைதியின் மூன்று தூண்கள் மற்றும் உள் ஆற்றலின் 5 ஆர் (5 R\'s) கொள்கைகள்',
        'உற்சாக முழக்கங்கள், சுய ஆளுமைப் பழக்கங்கள் மற்றும் தமிழ் முத்தமிழ்ச் செயல் நெறி',
        'ஒத்திசைவு & ஒருமைப்பாடு: சாதாரண முயற்சியை அசாதாரண சாதனையாக மாற்றும் வித்தை',
      ],
    },
    targetAudience: {
      en: 'Educators, administrators, thinkers, entrepreneurs, and seekers of systemic self-mastery.',
      ta: 'கல்வியாளர்கள், நிர்வாகிகள், சிந்தனையாளர்கள், தொழில்முனைவோர் மற்றும் ஆளுமைத் திறன் தேடுவோர்.',
    },
    readMoreSnippet: {
      en: '“Every word gathered here carries a concept or a strategy conceived by Tr. J. Arawindhan Ji — read not for its dictionary meaning, but for the standard of thinking and way of being it unlocks.”',
      ta: '"இங்கே தொகுக்கப்பட்டுள்ள ஒவ்வொரு சொல்லும் ஆசிரியர் ஜே. அரவிந்தன் ஜி அவர்களின் ஆழமான சிந்தனையையும் யுக்தியையும் சுமந்து நிற்கிறது — இதை வெறும் அகராதிப் பொருளுக்காக அல்லாமல், அது திறக்கும் புதிய சிந்தனை தளத்திற்காகப் படியுங்கள்."',
    },
    pdfUrl: '/books/wow-dictionary.pdf',
    flipbookPages: Array.from({ length: 72 }, (_, i) => `/books/wow-dictionary/pages/page_${i + 1}.webp`),
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Origin & Architecture of WOW',
          ta: 'அத்தியாயம் 1: வாவ் (WOW) தத்துவத்தின் மூலமும் கட்டமைப்பும்',
        },
        subtitle: {
          en: 'World of Wonders, Working Out Wonders, Wonder of the World',
          ta: 'வியப்புகளின் உலகம், வியப்புகளை உருவாக்குதல், உலகத்தின் மாபெரும் வியப்பு',
        },
        paragraphs: {
          en: [
            'Where does WOW take its name? It is not an exclamation of superficial surprise; it is a three-tiered evolutionary paradigm: World of Wonders (recognizing the infinite abundance and potential of existence), Working Out Wonders (the disciplined execution required to manifest genius), and Wonder of the World (the final state of institutional and human mastery).',
            'A WOW Dictionary is the strategic lexicon of the ACHARIYA ecosystem. Across 72 structured entries, it codifies concepts, behavioral archetypes, and cultural axioms that align teachers, students, leaders, and parents into coherent resonance.',
            'Words create worlds. When an entire community adopts an elevated vocabulary of courage, gratitude, and excellence, the collective consciousness leaps into miraculous productivity.',
          ],
          ta: [
            'வாவ் (WOW) என்ற பெயர் எங்கிருந்து பிறந்தது? அது வெறும் ஆச்சரிய வார்த்தை அல்ல; அது ஒரு முப்பரிமாண பரிணாமத் தத்துவம்: World of Wonders (பிரபஞ்சத்தின் எல்லையற்ற சாத்தியங்களை வியந்து அறிதல்), Working Out Wonders (மேதமையை வெளிக்கொணர அயராது உழைத்தல்), மற்றும் Wonder of the World (உலகமே வியக்கும் தலைமைத்துவ நிலையை எட்டுதல்).',
            'வாவ் அகராதி என்பது ஆச்சாரியா இயக்கத்தின் வழிகாட்டி மொழியாகும். 72 முக்கிய தலைப்புகளில், ஆசிரியர்கள், மாணவர்கள், தலைவர்கள் மற்றும் பெற்றோர்களை ஒரே இலக்கில் இணைக்கும் பண்பாட்டுத் தத்துவங்களை இந்நூல் தொகுத்து வழங்குகிறது.',
            'சொற்களே உலகங்களை உருவாக்குகின்றன. ஒரு பெரும் சமூகம் துணிவு, நன்றி உணர்வு மற்றும் உன்னத ஒழுக்கத்தின் மொழியைப் பேசும்போது, கூட்டு விழிப்புணர்வு வியத்தகு சாதனைகளைப் படைக்கிறது.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Tamil Triad of Doing & Strategic Rallying Cries',
          ta: 'அத்தியாயம் 2: செயலின் தமிழ் மும்மை மற்றும் வியூக முழக்கங்கள்',
        },
        subtitle: {
          en: 'Sei, Seithu Kaattu, Seithu Mudi: The Rhythm of Sovereign Achievement',
          ta: 'செய், செய்து காட்டு, செய்து முடி: அசைக்க முடியாத செயல் சூத்திரம்',
        },
        paragraphs: {
          en: [
            'Rooted in the ancient Tamil genius of purposeful action, the dictionary defines the sacred Triad of Doing: 1. Sei (Do: begin without hesitation); 2. Seithu Kaattu (Demonstrate: show by exemplary personal action rather than verbal lecture); and 3. Seithu Mudi (Finish completely: bring every undertaking to its glorious closure without leaving loose ends).',
            'Combined with operational rallying cries like “Happily, Willingly, and Smilingly,” this strategic language eliminates friction, cleanses negativity from school corridors, and installs an irrepressible culture of celebration.',
            'Let your words be precise, your intentions noble, and your execution complete. This is the way of WOW.',
          ],
          ta: [
            'பண்டைய தமிழ் மரபின் செயல் ஞானத்தில் விளைந்த இந்த அகராதி, செயலின் புனித மும்மையை முன்வைக்கிறது: 1. செய் (தயக்கமின்றி உடனே தொடங்கு); 2. செய்து காட்டு (வெறும் வாய்ச்சொல்லில் நிற்காமல் முன்னுதாரணமாகச் செய்து காட்டு); 3. செய்து முடி (எந்தச் செயலையும் அரைகுறையாக விடாமல் வெற்றிகரமாக முடித்து வை).',
            '“மகிழ்ச்சியாக, விருப்பத்தோடு, புன்னகையோடு” (Happily, Willingly, Smilingly) போன்ற அன்றாட மந்திரங்களோடு இணையும் போது, பள்ளிகளிலிருந்தும் நிறுவனங்களிலிருந்தும் எதிர்மறை எண்ணங்கள் அகன்று, கொண்டாட்டத்தின் கலாச்சாரம் பிறக்கிறது.',
            'உங்கள் சொற்கள் தூய்மையாகவும், உங்கள் எண்ணங்கள் உன்னதமாகவும், உங்கள் செயல்கள் முழுமையாகவும் இருக்கட்டும். இதுவே வாவ் தத்துவத்தின் அழியாத பாதையாகும்.',
          ],
        },
      },
    ],
  },
  {
    id: 'BK-014',
    slug: 'the-luminous-legacy',
    coverImage: '/images/books/the-luminous-legacy.jpg',
    title: {
      en: 'The Luminous Legacy',
      ta: 'தி லூமினஸ் லெகசி (The Luminous Legacy)',
    },
    tagline: {
      en: 'A Garland of One Hundred and Eight Titles Offered in Reverence to Dr. J. Arawindhan Ji',
      ta: 'முனைவர் ஜே. அரவிந்தன் ஜி அவர்களுக்கு சமர்ப்பிக்கப்பட்ட 108 அரிய பட்டங்கள் மற்றும் பெருமைகள்',
    },
    author: {
      en: 'Achariya Centre of Excellence (Offered to Dr. J. Arawindhan Ji)',
      ta: 'ஆச்சாரியா சிறப்பியல் மையம் (முனைவர் ஜே. அரவிந்தன் ஜி அவர்களுக்கு அர்ப்பணிக்கப்பட்டது)',
    },
    edition: 'First Edition (2026) · Commemorative Citation Edition',
    language: 'English',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'Presented in the sacred spirit of the Ashtottara Shatanamavali—the traditional garland of one hundred and eight reverent names—The Luminous Legacy honors Dr. J. Arawindhan Ji across four monumental pillars: the Education Revolution, the Spiritual Path, Modern & Advancing Technology, and Societal Service. Spanning 121 comprehensive pages, each title is meticulously cited, justified, and celebrated—from Teacher, Trainer, and Father of WOW Academy to Great Visionary and Great Grand Master.',
      ta: 'அஷ்டோத்தர சத நாமாவளி என்னும் 108 போற்றித் திருநாமங்களின் மரபில், முனைவர் ஜே. அரவிந்தன் ஜி அவர்களின் வாழ்க்கை மற்றும் பணிகளை நான்கு பெரும் தூண்களின் வழியே கௌரவிக்கும் மாபெரும் நூல்: கல்விப் புரட்சி, ஆன்மீகப் பாதை, நவீன தொழில்நுட்பம் மற்றும் மக்கள் சேவை. ஆசிரியர், பயிற்சியாளர், வாவ் அகாடமியின் தந்தை முதல் மகா வழிகாட்டி வரை 108 பட்டங்களும் விரிவான விளக்கங்களுடன் இந்நூலில் ஆவணப்படுத்தப்பட்டுள்ளன.',
    },
    keyThemes: {
      en: [
        'The 108 Ashtottara Shatanamavali titles honoring Dr. J. Arawindhan Ji',
        'Four pillars: Education Revolution, Spiritual Path, Technology, Societal Service',
        'Root titles: Teacher, Trainer, Transformer, Trendsetter, and Total Reformer',
        'Philosophical justifications and historical milestones of a visionary life',
      ],
      ta: [
        'முனைவர் ஜே. அரவிந்தன் ஜி அவர்களுக்குரிய 108 சிறப்பான பட்டங்கள்',
        'நான்கு பெரும் தூண்கள்: கல்விப் புரட்சி, ஆன்மீகம், நவீன தொழில்நுட்பம், சமுதாயப் பணி',
        'மூலப் பட்டங்கள்: ஆசிரியர், பயிற்சியாளர், உருமாற்றுபவர், முன்னோடி மற்றும் சீர்திருத்தவாதி',
        'ஒரு மாபெரும் தீர்க்கதரிசியின் வாழ்வியல் சாதனைகளின் தத்துவார்த்த ஆவணம்',
      ],
    },
    targetAudience: {
      en: 'Students, educators, alumni, spiritual seekers, and leaders studying institutional greatness.',
      ta: 'மாணவர்கள், ஆசிரியர்கள், முன்னாள் மாணவர்கள், ஆன்மீக அன்பர்கள் மற்றும் நிறுவனத் தலைவர்கள்.',
    },
    readMoreSnippet: {
      en: '“Teacher: Before every other title, this is the root. It is the title he would keep even if every other were set aside, because every later achievement grew directly out of this one.”',
      ta: '"ஆசிரியர்: மற்ற அனைத்து பட்டங்களுக்கும் முன்னால், இதுவே மூல வேர். மற்ற அனைத்தும் விலக்கப்பட்டாலும் அவர் தன்னோடு தக்கவைத்துக்கொள்ளும் ஒரே பட்டம் இதுவே, ஏனெனில் பிற்காலத்து அனைத்து சாதனைகளும் இதிலிருந்தே முளைத்து வளர்ந்தன."',
    },
    pdfUrl: '/books/the-luminous-legacy.pdf',
    flipbookPages: Array.from({ length: 121 }, (_, i) => `/books/the-luminous-legacy/pages/page_${i + 1}.webp`),
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Root of All Titles: The Sacred Calling of Teacher',
          ta: 'அத்தியாயம் 1: அனைத்து பட்டங்களின் மூல வேர்: ஆசிரியர் மாண்பு',
        },
        subtitle: {
          en: '“Before every other title, this is the root. It is the title he would keep.”',
          ta: '“மற்ற அனைத்து பட்டங்களுக்கும் முன்னால் இதுவே மூல வேர்; அவர் தன்னோடு வைத்துக்கொள்ளும் ஒரே பட்டம்.”',
        },
        paragraphs: {
          en: [
            'Spanning 121 comprehensive pages, The Luminous Legacy records the Ashtottara Shatanamavali—the traditional garland of one hundred and eight reverent titles offered to Dr. J. Arawindhan Ji across twenty-five years of visionary service.',
            'Yet among all 108 titles—from Great Grand Master to Trendsetter and Nation Builder—the first and most foundational is Teacher. Born on August 2, 1977, and venturing into education in 2000 with a single teacher training institute, he chose the chalk and blackboard over comfortable industrial alternatives.',
            '“Teacher: Before every other title, this is the root. It is the title he would keep even if every other were set aside, because every later achievement grew directly out of this one.”',
          ],
          ta: [
            '121 பக்கங்கள் கொண்ட இந்த வரலாற்று நூல், முனைவர் ஜே. அரவிந்தன் ஜி அவர்களுக்கு 25 ஆண்டுகால கல்வி மற்றும் மக்கள் சேவைக்காக சமர்ப்பிக்கப்பட்ட 108 அரிய போற்றித் திருநாமங்களை (அஷ்டோத்தர சத நாமாவளி) ஆவணப்படுத்துகிறது.',
            'மகா வழிகாட்டி, புதுமைப் படைப்பாளி, தேச சிற்பி போன்ற 108 பட்டங்களுக்கும் முன்னால், அவர் நெஞ்சோடு ஏந்தும் ஒரே உன்னதப் பட்டம் "ஆசிரியர்" என்பதாகும். 2000-ல் ஆசிரியர் பயிற்சி கல்லூரியோடு தொடங்கிய அவரது கல்விப் புரட்சி இன்று உலகத் தரம் வாய்ந்த 35 கல்வி நிறுவனங்களாக மலர்ந்துள்ளது.',
            '“ஆசிரியர்: மற்ற அனைத்து பட்டங்களுக்கும் முன்னால், இதுவே மூல வேர். மற்ற அனைத்தும் விலக்கப்பட்டாலும் அவர் தன்னோடு தக்கவைத்துக்கொள்ளும் ஒரே பட்டம் இதுவே, ஏனெனில் பிற்காலத்து அனைத்து சாதனைகளும் இதிலிருந்தே முளைத்து வளர்ந்தன.”',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Four Pillars of Civilizational Legacy',
          ta: 'அத்தியாயம் 2: நான்கு பெரும் போற்றித் தூண்கள்',
        },
        subtitle: {
          en: 'Education Revolution, Spiritual Path, Technology, and Societal Service',
          ta: 'கல்விப் புரட்சி, ஆன்மீகம், நவீன தொழில்நுட்பம் மற்றும் மக்கள் சேவை',
        },
        paragraphs: {
          en: [
            'The 108 titles are structured across four monumental pillars: The Education Revolution (pioneering Multiple Intelligence, Supera pedagogy, and joyful schooling); The Spiritual Path (Shambala retreats, consciousness elevation, and inner silence); Modern & Advancing Technology (AI integration, future-ready labs, and digital sovereignty); and Societal Service (empowering rural youth, creating livelihood ecosystems, and philanthropic trusts).',
            'Each title is meticulously cited, justified with historical milestones, and contextualized within the living tapestry of Achariya World Class Institutions.',
            'The Luminous Legacy is not a celebration of personal ego; it is an inspirational beacon showing what a single human being can achieve when life is dedicated to the awakening of others.',
          ],
          ta: [
            'இந்நூலில் உள்ள 108 பட்டங்களும் நான்கு பெரும் தூண்களின் கீழ் வகுக்கப்பட்டுள்ளன: கல்விப் புரட்சி (பன்முக நுண்ணறிவு மற்றும் சுப்ரா கற்பித்தல் முறை); ஆன்மீகப் பாதை (மகா ஷாம்பாலா சங்கமங்கள் மற்றும் விழிப்புணர்வு); நவீன தொழில்நுட்பம் (செயற்கை நுண்ணறிவு மற்றும் எதிர்கால ஆய்வகங்கள்); மக்கள் சேவை (கிராமப்புற இளைஞர் மேம்பாடு மற்றும் அறக்கட்டளைப் பணிகள்).',
            'ஒவ்வொரு பட்டமும் வரலாற்று ஆதாரங்களோடும், ஆச்சாரியா கல்வி நிறுவனங்களின் 25 ஆண்டுகால சாதனைகளோடும் துல்லியமாக இணைத்து விவரிக்கப்பட்டுள்ளது.',
            'தி லூமினஸ் லெகசி என்பது தனிநபர் புகழ்ச்சி அல்ல; பிறரின் விழிப்புணர்வுக்காக தன் வாழ்வையே அர்ப்பணிக்கும் ஒரு மனிதன் எத்தகைய வரலாற்றுச் சாதனைகளைப் படைக்க முடியும் என்பதைக் காட்டும் வழிகாட்டி தீபமாகும்.',
          ],
        },
      },
    ],
  },
  {
    id: 'BK-015',
    slug: 'iqqi',
    coverImage: '/images/books/iqqi.jpg',
    title: {
      en: 'IQQI: The Blueprint for Raising the Next Generation of Human Potential',
      ta: 'ஐகியூகியூஐ: அடுத்த தலைமுறை மனித ஆற்றலை வளர்த்தெடுப்பதற்கான வரைபடம் (IQQI)',
    },
    tagline: {
      en: 'From IQ to QI (Quantum Intelligence) · How Children Can Develop Extraordinary Learning, Creativity, Consciousness and Human Potential in the Age of AI',
      ta: 'ஐக்யூவில் இருந்து க்யூஐ (குவாண்டம் நுண்ணறிவு) வரை · AI யுகத்தில் வியத்தகு கற்றல், படைப்பாற்றல் மற்றும் உணர்வுநிலையை வளர்ப்பதற்கான முழுமையான அமைப்பு',
    },
    author: {
      en: 'Mahavadhani Sri Achariya Arawindhan GuruG',
      ta: 'மகாவதானி ஸ்ரீ ஆச்சார்யா அரவிந்தன் குருஜி',
    },
    edition: 'Quantum Intelligence & Future Leadership Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'In IQQI: The Blueprint for Raising the Next Generation of Human Potential, Mahavadhani Sri Achariya Arawindhan GuruG presents a groundbreaking paradigm shift: evolving traditional IQ into QI (Quantum Intelligence). In the rapidly expanding age of artificial intelligence, this definitive work provides parents, mentors, and educators with a complete, holistic system to develop extraordinary learning, multidimensional creativity, high consciousness, and compassionate leadership in children.',
      ta: 'ஐகியூகியூஐ (IQQI) நூலில், பாரம்பரிய ஐக்யூவிலிருந்து குவாண்டம் நுண்ணறிவை (QI) நோக்கி நகரும் புரட்சிகரமான மாற்றத்தை மகாவதானி ஸ்ரீ ஆச்சார்யா அரவிந்தன் குருஜி முன்வைக்கிறார். செயற்கை நுண்ணறிவு (AI) ஆதிக்கம் செலுத்தும் இந்த யுகத்தில், குழந்தைகள் வழக்கத்திற்கு மாறான தீவிரக் கற்றல் திறன், எல்லையற்ற படைப்பாற்றல், ஆழ்ந்த விழிப்புணர்வு மற்றும் கருணைமிக்க தலைமைத்துவப் பண்புகளை வளர்த்தெடுப்பதற்கான முழுமையான வரைபடத்தை இந்நூல் வழங்குகிறது.',
    },
    keyThemes: {
      en: [
        'The paradigm leap: Moving from linear IQ to multidimensional QI (Quantum Intelligence)',
        'The six core faculties: Learning, Creativity, Consciousness, Focus, Compassion, and Leadership',
        'Future-proofing children and youth in the transformative age of Artificial Intelligence',
        'A complete parenting and educational architecture for holistic genius',
      ],
      ta: [
        'நேரியல் ஐக்யூவிலிருந்து பன்முக குவாண்டம் நுண்ணறிவு (QI) நோக்கிய பாய்ச்சல்',
        'ஆறு முதன்மை ஆற்றல்கள்: கற்றல், படைப்பாற்றல், விழிப்புணர்வு, கவனம், கருணை மற்றும் தலைமைத்துவம்',
        'செயற்கை நுண்ணறிவு (AI) காலத்தில் எதிர்காலத்திற்குத் தயாரான குழந்தைகளை உருவாக்குதல்',
        'முழுமையான மேதமையை வளர்ப்பதற்கான பெற்றோர் மற்றும் கல்விசார் கட்டமைப்பு',
      ],
    },
    targetAudience: {
      en: 'Parents, educators, school principals, child psychologists, and visionary educational leaders.',
      ta: 'பெற்றோர்கள், ஆசிரியர்கள், பள்ளி முதல்வர்கள் மற்றும் குழந்தை உளவியல் நிபுணர்கள்.',
    },
    readMoreSnippet: {
      en: '“In the age of machine intelligence, teaching children to merely calculate or memorize is teaching them to be second-rate computers. We must ignite Quantum Intelligence—the infinite human faculty of consciousness, compassion, and divine creative will.”',
      ta: '"இயந்திர நுண்ணறிவின் யுகத்தில், குழந்தைகளுக்கு வெறும் மனப்பாடத்தையும் கணக்கீடுகளையும் மட்டுமே கற்றுக்கொடுப்பது அவர்களை இரண்டாம் தர கணினிகளாக்குவதற்கு சமம். நாம் அவர்களின் குவாண்டம் நுண்ணறிவை—மனித விழிப்புணர்வு, கருணை மற்றும் தெய்வீக படைப்புத்திறனை—விழித்தெழச் செய்ய வேண்டும்."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Quantum Leap: Moving from Linear IQ to QI',
          ta: 'அத்தியாயம் 1: நேரியல் ஐக்யூவிலிருந்து குவாண்டம் நுண்ணறிவு (QI) நோக்கிய பாய்ச்சல்',
        },
        subtitle: {
          en: 'Why Traditional Intellect is Obsolete in the Age of Artificial Intelligence',
          ta: 'செயற்கை நுண்ணறிவு (AI) காலத்தில் வழக்கமான மனப்பாட அறிவு ஏன் பயனற்றுப் போகிறது?',
        },
        paragraphs: {
          en: [
            'For over a century, human potential has been confined within the narrow prison of IQ: the linear capacity to calculate, memorize formulas, and repeat established paradigms. In the era of generative AI, large language models calculate faster, remember infinitely more, and process data with superhuman precision.',
            'If we continue educating children merely to pass memory exams, we are training them to be second-rate computers. We must make the quantum leap from IQ to QI (Quantum Intelligence)—the awakening of consciousness, intuitive perception, multidimensional creativity, and empathetic heart-centered mastery.',
            'Quantum Intelligence operates beyond mechanical algorithms. It is the divine spark that enables a human being to synthesize love, innovation, ethics, and purpose into solutions that machine intelligence could never conceive.',
          ],
          ta: [
            'ஒரு நூற்றாண்டுக்கும் மேலாக, மனித ஆற்றல் என்பது ‘ஐக்யூ’ (IQ) என்ற குறுகிய கூட்டுக்குள் அடைக்கப்பட்டு விட்டது: கணக்கிடுதல், சூத்திரங்களை மனப்பாடம் செய்தல் போன்ற நேரியல் திறன்களே அறிவு எனக் கருதப்பட்டது. ஆனால் இன்றைய செயற்கை நுண்ணறிவு (AI) மனிதனை விட பல மடங்கு வேகமாகவும் துல்லியமாகவும் கணக்குகளைப் போடுகிறது.',
            'குழந்தைகளுக்கு வெறும் மனப்பாடத்தையும் தேர்வுகளையும் மட்டுமே கற்றுக்கொடுத்து வளர்த்தால், நாம் அவர்களை இரண்டாம் தர கணினிகளாக்குகிறோம் என்று அர்த்தம். நாம் ஐக்யூவிலிருந்து க்யூஐ (Quantum Intelligence) என்னும் குவாண்டம் நுண்ணறிவை நோக்கிப் பாய வேண்டும்—விழிப்புணர்வு, உள்ளுணர்வு, எல்லையற்ற படைப்பாற்றல் மற்றும் கருணை நிறைந்த மனித ஆற்றல் அது.',
            'குவாண்டம் நுண்ணறிவு என்பது வெறும் அல்காரிதம் அல்ல; அது அன்பையும், புதுமையையும், அறநெறியையும் ஒருங்கிணைத்து இயந்திரங்களால் நினைத்துக்கூடப் பார்க்க முடியாத உன்னத வாழ்வியல் தீர்வுகளை மனிதனால் மட்டுமே உருவாக்க முடியும் என்பதை நிறுவுகிறது.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Six Core Faculties of Future Human Genius',
          ta: 'அத்தியாயம் 2: எதிர்கால மனித மேதமையின் ஆறு முதன்மை ஆற்றல்கள்',
        },
        subtitle: {
          en: 'Learning, Creativity, Consciousness, Focus, Compassion, and Leadership',
          ta: 'கற்றல், படைப்பாற்றல், விழிப்புணர்வு, கவனம், கருணை மற்றும் தலைமைத்துவம்',
        },
        paragraphs: {
          en: [
            'IQQI outlines the six essential faculties required to raise future-ready children: 1. Learning (the agile capacity to unlearn and master emerging domains); 2. Creativity (the courageous imagination to connect disparate disciplines); 3. Consciousness (deep spiritual self-awareness and inner stillness); 4. Focus (undistracted sustained attention in a noisy digital landscape); 5. Compassion (emotional depth and universal empathy); and 6. Leadership (the moral integrity to guide teams with wisdom).',
            'When parents and mentors cultivate these six faculties in unison, children develop an unshakeable cognitive resilience that thrives amidst technological disruption.',
            'Raise children who do not fear the future, but consciously engineer it with love, brilliance, and compassionate purpose.',
          ],
          ta: [
            'எதிர்காலத்திற்குத் தயாரான குழந்தைகளை வளர்த்தெடுக்க ஆறு முதன்மை ஆற்றல்களை IQQI முன்வைக்கிறது: 1. கற்றல் (புதிய துறைகளை விரைவாகக் கற்கும் சுறுசுறுப்பு); 2. படைப்பாற்றல் (துணிச்சலான கற்பனைத் திறன்); 3. விழிப்புணர்வு (ஆழ்ந்த ஆன்ம அமைதியும் சுய விழிப்புணர்வும்); 4. கவனம் (டிஜிட்டல் சிதறல்களைக் கடந்த ஒருமுகப்படுத்தல்); 5. கருணை (பிறர் துன்பம் உணரும் உன்னத இதயம்); 6. தலைமைத்துவம் (அறநெறியோடு வழிநடத்தும் துணிவு).',
            'பெற்றோர்களும் ஆசிரியர்களும் இந்த ஆறு ஆற்றல்களையும் ஒருங்கிணைத்து வளர்க்கும்போது, எத்தகைய தொழில்நுட்பப் புரட்சி வந்தாலும் குழந்தைகள் அஞ்சாமல் தழைத்தோங்குவார்கள்.',
            'எதிர்காலத்தைக் கண்டு அஞ்சாத, அன்போடும் அறிவோடும் உலகை வழிநடத்தும் உன்னதக் குழந்தைகளை உருவாக்குவோம்.',
          ],
        },
      },
    ],
    pdfUrl: '/books/iqqi.pdf',
    flipbookPages: Array.from({ length: 213 }, (_, i) => `/books/iqqi/pages/page_${i + 1}.webp`),
  },
  {
    id: 'BK-016',
    slug: 'ayngara',
    coverImage: '/images/books/ayngara.jpg',
    title: {
      en: 'AYNGARA: Form to Transform',
      ta: 'ஐங்கரன்: உருவத்தின் வழி உயரிய உருமாற்றம் (AYNGARA)',
    },
    tagline: {
      en: 'The Sacred Journey from Animal Instinct to Divine Consciousness · Bridging Body, Mind, and Spirit',
      ta: 'விலங்கு இயல்பிலிருந்து தெய்வீக விழிப்புணர்வு நோக்கிய ஆன்மப் பயணம் · உடல், மனம், ஆன்மாவின் முழுமையான ஒருங்கிணைப்பு',
    },
    author: {
      en: 'Tr. J. Arawindhan (Teacher · Trainer · Transformer · Trendsetter)',
      ta: 'முனைவர் ஜே. அரவிந்தன் (ஆசிரியர் · பயிற்றுநர் · உருமாற்றுபவர் · முன்னோடி)',
    },
    edition: 'Spiritual Science & Holistic Well-Being Edition (115 Pages)',
    language: 'English',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'AYNGARA: Form to Transform is a masterwork on holistic spiritual human engineering by Tr. J. Arawindhan. Rooted in the sacred archetype of Ayngara—the five-armed primordial lord of beginnings who synthesizes animal instinct with highest cosmic intelligence—this 115-page compendium provides an exact roadmap to transcend conditioned survival impulses (the monkey mind) and awaken into heroic, divine consciousness (Hanuman state). Guiding seekers through Deha Shuddhi, Saptamaha Kriya, Golden Smile Meditation, Vaak Siddhi, and the Four Laws of Sacred Order, it offers an actionable methodology for complete physical vitality, mental resilience, emotional mastery, and spiritual liberation.',
      ta: 'ஐங்கரன் (AYNGARA: Form to Transform) என்பது மனித விழிப்புணர்வை விலங்கு நிலையிலிருந்து தெய்வீக நிலைக்கு உயர்த்தும் ஒரு முழுமையான ஆன்ம அறிவியல் வழிகாட்டி நூலாகும். தொடக்கங்களின் முழுமுதல் தெய்வமான ஐங்கரனின் திருவுருவத் தத்துவத்தின் வழியே, மனிதன் தன் கீழ்நிலை ஆசைகளையும் பயங்களையும் (குரங்கு மனம்) கடந்து, பராக்கிரமமும் தவமும் நிறைந்த உயர்ந்த விழிப்புணர்வை (அனுமன் நிலை) எவ்வாறு அடைவது என்பதை முனைவர் ஜே. அரவிந்தன் இந்நூலில் 115 பக்கங்களில் விளக்குகிறார். சப்தமகா கிரியை, பொன்சிரிப்பு தியானம் (Golden Smile Meditation), வாக்கு சுத்தி மற்றும் சித்தி, அஷ்டலட்சுமி பரிமாண சூத்திரம் ஆகியவற்றின் வழி மனிதனின் உடல், மனம், சொல், ஆன்மா ஆகிய அனைத்தையும் ஒருங்கிணைத்து முழுமையான உருமாற்றத்தை அடைய வழிகாட்டுகிறது.',
    },
    keyThemes: {
      en: [
        'Monkey-to-Hanuman Paradigm: Transforming primal animal reaction into divine purposeful action',
        'The Panchatantra Architecture: Physically Healthy, Mentally Strong, Emotionally Balanced, Intellectually Sharp, Spiritually Aligned',
        'Panchakosas, Deha Shuddhi, Saptamaha Kriya, and the Golden Smile Meditation',
        'The Science of Vaak: Vaak Suddhi, Vaak Siddhi, and Vaak Shakthi in human manifestation',
        'The Fourfold Sacred Order: Space, Time, Purpose, and Beauty in everyday life',
        'Ashtalakshmi Dimensions: Distinguishing the Asura route from the Deva route to enduring abundance',
      ],
      ta: [
        'குரங்கிலிருந்து அனுமன் வரை: இயல்புணர்ச்சியைக் கடந்து தெய்வீக விழிப்புணர்வாக உருமாறுதல்',
        'பஞ்சதந்திரக் கட்டமைப்பு: உடல் நலம், மன உறுதி, உணர்வுச் சமநிலை, அறிவுத் தெளிவு, ஆன்ம இணைப்பு',
        'பஞ்ச கோசங்கள், தேக சுத்தி, சப்தமகா கிரியை மற்றும் பொன்சிரிப்பு தியானம்',
        'வாக்கின் அறிவியல்: வாக்கு சுத்தி, வாக்கு சித்தி மற்றும் வாக்கு சக்தி',
        'நான்கு புனித விதிகள்: இடம், காலம், நோக்கம் மற்றும் அழகியல் ஒழுங்குமுறை',
        'அஷ்டலட்சுமி பரிமாணம்: அசுரப் பாதையைக் கடந்து தேவப் பாதையில் பெருஞ்செல்வம் ஈட்டுதல்',
      ],
    },
    targetAudience: {
      en: 'Spiritual seekers, yoga practitioners, educators, leaders, and anyone committed to transcending limitations and mastering their physical, mental, and energetic life.',
      ta: 'ஆன்மீக சாதகர்கள், யோகப் பயிற்சியாளர்கள், கல்வியாளர்கள் மற்றும் தங்கள் வாழ்க்கையை முழுமையான சமநிலையோடு வாழ விரும்பும் அனைவரும்.',
    },
    readMoreSnippet: {
      en: '“Ayngara is the sacred bridge between our animal instincts and divine insights. The monkey mind reacts to the world in fear and hunger; the awakened consciousness responds with boundless wisdom, unshakeable courage, and divine love.”',
      ta: '"ஐங்கரன் என்பது நமது விலங்கு இயல்புகளுக்கும் தெய்வீக விழிப்புணர்வுக்குமான புனிதப் பாலமாகும். குரங்கு மனம் பயத்திலும் பசியிலும் உலகை எதிர்கொள்கிறது; ஆனால் விழித்தெழுந்த அனுமன் மனம் எல்லையற்ற ஞானத்தோடும், அஞ்சா நெஞ்சத்தோடும், பேரன்போடும் உலகிற்கு வழிகாட்டுகிறது."',
    },
    pdfUrl: '/books/ayngara.pdf',
    flipbookPages: Array.from({ length: 115 }, (_, i) => `/books/ayngara/pages/page_${i + 1}.webp`),
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: From Animal Instinct to Divine Insight',
          ta: 'அத்தியாயம் 1: விலங்கு இயல்பிலிருந்து தெய்வீக விழிப்புணர்வு வரை',
        },
        subtitle: {
          en: 'The Monkey-to-Hanuman Evolutionary Trajectory',
          ta: 'குரங்கு மனதிலிருந்து அனுமன் விழிப்புணர்வு நோக்கிய ஆன்மப் பயணம்',
        },
        paragraphs: {
          en: [
            'We exist in a liminal realm poised between animal instincts and enlightened consciousness. Our primal animal nature seeks comfort, physical security, and instant gratification through reactive impulses and conditioned fears—the wandering monkey mind.',
            'Yet the divine aspect beckons us to transcend limitations: to awaken intuition, cultivate empathy, and embody unshakeable peace—the heroic, devoted Hanuman consciousness.',
            'Ayngara is the sacred bridge between these two states. By synthesizing the ancient archetype of the elephant-headed lord of obstacles with practical spiritual science, this work teaches us how to shift from reacting blindly to life’s challenges to responding with majestic wisdom, power, and love.',
          ],
          ta: [
            'மனிதன் விலங்கு இயல்புகளுக்கும், விழிப்படைந்த தெய்வீக விழிப்புணர்வுக்குமான இடைப்பட்ட நிலையில் வாழ்கிறான். நமது விலங்கு மனம் உடனடி இன்பங்களையும், பாதுகாப்பையும், பயத்தால் தூண்டப்படும் அவசரங்களையும் நாடுகிறது—இதுவே அலைபாயும் குரங்கு மனம்.',
            'ஆனால் தெய்வீக நிலையோ இந்த வரம்புகளைக் கடந்து, உள்ளுணர்வை விழித்தெழச் செய்து, எல்லையற்ற கருணையோடும் துணிவோடும் வாழுமாறு அழைக்கிறது—இதுவே பராக்கிரமமும் தவமும் நிறைந்த அனுமன் நிலை.',
            'ஐங்கரன் என்பது இந்த இரு நிலைகளுக்கும் இடையிலான புனிதப் பாலமாகும். முழுமுதல் தெய்வமான விநாயகரின் திருவுருவ தத்துவத்தின் வழியே, வாழ்வின் தடைகளைத் தகர்த்து, குருட்டுத்தனமான எதிர்வினைகளை விடுத்து, அமைதியும் பேரன்பும் நிறைந்த ஞானத்தோடு வாழ இந்நூல் வழிகாட்டுகிறது.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Panchatantra of Holistic Well-Being & The Science of Vaak',
          ta: 'அத்தியாயம் 2: பஞ்சதந்திரக் கட்டமைப்பும் வாக்கின் அறிவியலும்',
        },
        subtitle: {
          en: 'Deha Shuddhi, Saptamaha Kriya, and the Four Laws of Sacred Order',
          ta: 'தேக சுத்தி, சப்தமகா கிரியை மற்றும் வாக்கு சித்தியின் ரகசியம்',
        },
        paragraphs: {
          en: [
            'True well-being is not the mere absence of illness; it is the absolute symphony of body, mind, and spirit governed by the Panchatantra framework: Physically Healthy, Mentally Strong, Emotionally Balanced, Intellectually Sharp, and Spiritually Aligned.',
            'Through Deha Shuddhi (cellular detoxification), Saptamaha Kriya, and the Golden Smile Meditation, vitality returns to the bloodstream. The book introduces the sacred Science of Vaak: progressing through Vaak Suddhi (purifying speech from falsehood and criticism) to Vaak Siddhi (the manifestation power where words become living truth) and Vaak Shakthi (the creative energy of the universe).',
            'Order is the first law of heaven. Live by the Four Sacred Laws: a place for everything, a perfect time for everything, a purpose for everything, and a positive beauty in everything.',
          ],
          ta: [
            'முழுமையான நல்வாழ்வு என்பது வெறும் நோய் இல்லாத நிலை மட்டுமல்ல; அது உடல், மனம், சொல், ஆன்மா ஆகிய அனைத்தின் ஒருமைப்பாடாகும்: உடல் நலம், மன உறுதி, உணர்வுச் சமநிலை, அறிவுத் தெளிவு மற்றும் ஆன்ம இணைப்பு ஆகிய ஐந்து தூண்களே இதன் அடிப்படை.',
            'தேக சுத்தி, சப்தமகா கிரியை மற்றும் பொன்சிரிப்பு தியானம் ஆகியவற்றின் மூலம் உடலில் பிராண சக்தி புத்துயிர் பெறுகிறது. மேலும் இந்நூல் ‘வாக்கின் அறிவியலை’ விளக்குகிறது: வாக்கு சுத்தி (புறம்பேசுதல் மற்றும் பொய்மையைத் தவிர்த்தல்), வாக்கு சித்தி (சொல்லும் சொல் பலிதமாகும் தவநிலை), மற்றும் வாக்கு சக்தி (பிரபஞ்ச படைப்பாற்றல்).',
            'ஒழுங்கே சொர்க்கத்தின் முதல் விதி. நான்கு புனித விதிகளின்படி வாழுங்கள்: எல்லாவற்றிற்கும் ஓர் இடம், எல்லாவற்றிற்கும் உரிய காலம், எல்லாவற்றிற்கும் ஓர் உன்னத நோக்கம், எல்லாவற்றிலும் ஓர் அழகியல்.',
          ],
        },
      },
    ],
  },
  {
    id: 'BK-001',
    slug: 'shambala-book',
    coverImage: '/images/books/shambala_book.jpg',
    title: {
      en: 'The Shambala Book',
      ta: 'தி ஷாம்பாலா நூல் (The Shambala Book)',
    },
    tagline: {
      en: 'Principles of Higher Consciousness, Meditative Mind, and Inner Awakening',
      ta: 'உயர்ந்த விழிப்புணர்வு, தியான மனம் மற்றும் உள்முக விழிப்புக்கான தத்துவ வழிகாட்டி',
    },
    author: {
      en: 'Dr. J. Arawindhan (Santoshi Shri Arawindhan)',
      ta: 'முனைவர் ஜே. அரவிந்தன் (சந்தோஷி ஸ்ரீ அரவிந்தன்)',
    },
    edition: 'Ecosystem & Special Retreat Edition',
    language: 'English & Tamil',
    status: 'Ecosystem Edition',
    claimId: 'CLM-023',
    summary: {
      en: 'The Shambala Book encapsulates over a decade of inner exploration and annual spiritual retreats held in Puducherry since 2012. It articulates the mechanics of turning from external striving toward inner stillness, outlining the Seven Chakra pyramid energy practices, Oneness Meditation, and the realization of Divine Grace in daily life.',
      ta: '2012 முதல் புதுச்சேரியில் நடைபெற்று வரும் மகா ஷாம்பாலா ஆன்மீக சங்கமங்களின் சாரமாக விளங்கும் நூல். புற உலக வெற்றிகளைத் தாண்டி, உள்முக அமைதியை நோக்கி நகர்வதற்கான வழிகளை விளக்குகிறது. ஏழு சக்கர பிரமிடு ஆற்றல் பயிற்சிகள், ஒருமை தியானம் மற்றும் அன்றாட வாழ்வில் ஆன்மீக விழிப்புணர்வை உணர்தல் குறித்து விரிவாகப் பேசுகிறது.',
    },
    keyThemes: {
      en: [
        'The Meditative Mind over mental noise',
        'Seven Chakra energy alignment and pyramid practice',
        'Moving from knowing to experiencing and awakening',
        'Inner Engineering for enduring peace and conscious living',
      ],
      ta: [
        'மன இரைச்சலைத் தாண்டிய தியான மனம்',
        'ஏழு சக்கர ஆற்றல் ஒருமுகப்படுத்தல் மற்றும் பிரமிடு பயிற்சி',
        'அறிதலில் இருந்து அனுபவத்திற்கும் விழிப்புக்கும் நகர்தல்',
        'நிலையான அமைதிக்கான உள்முகப் பொறியியல் (Inner Engineering)',
      ],
    },
    targetAudience: {
      en: 'Spiritual seekers, educators, parents, and leaders seeking holistic inner transformation.',
      ta: 'ஆன்மீகத் தேடலுடையோர், கல்வியாளர்கள், பெற்றோர்கள் மற்றும் முழுமையான உள் அமைதியை விரும்புவோர்.',
    },
    readMoreSnippet: {
      en: '“Do not do with your mind; do with your Meditative Mind. Outer change is temporary, shaped by circumstance. Change that begins within becomes part of who we are, and endures.”',
      ta: '"உங்கள் சாதாரண மனதைக் கொண்டு எதையும் செய்யாதீர்கள்; உங்கள் தியான மனதைக் கொண்டு செய்யுங்கள். வெளிப்புற மாற்றம் தற்காலிகமானது; உள்ளிருந்து தொடங்கும் மாற்றமே நிலையானது."',
    },
    pdfUrl: '/books/shambala-book.pdf',
    flipbookPages: Array.from({ length: 26 }, (_, i) => `/books/shambala-book/pages/page_${i + 1}.webp`),
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: Awakening the Meditative Mind',
          ta: 'அத்தியாயம் 1: தியான மனதின் விழிப்புணர்வு',
        },
        subtitle: {
          en: 'Silencing Mental Noise to Discover Inner Shambala',
          ta: 'மன இரைச்சலைக் கடந்து உள்முக ஷாம்பாலா அமைதியை அடைதல்',
        },
        paragraphs: {
          en: [
            'Do not act with your reactive mind; act with your Meditative Mind. In modern existence, the intellect is endlessly stimulated by superficial notifications, deadlines, and anxiety. We mistake agitation for productivity and speed for progress.',
            'Shambala is not an inaccessible geographic valley hidden in snowy mountain passes; it is the sacred stillness resting at the exact center of human consciousness. When you learn to withdraw energy from external drama, you discover an unshakeable reservoir of peace that circumstances cannot alter.',
            'Through disciplined breath awareness and inner stillness, the mind shifts from chaotic survival instincts into clear spiritual perception. Here, intuition awakens and every worldly action becomes an expression of grace.',
          ],
          ta: [
            'உங்கள் சாதாரண மனதைக் கொண்டு எதையும் செய்யாதீர்கள்; உங்கள் தியான மனதைக் கொண்டு செய்யுங்கள். நவீன மனிதனின் அறிவு முடிவில்லாத அவசரங்களாலும், பதற்றங்களாலும் அலைக்கழிக்கப்படுகிறது. பரபரப்பை உற்பத்தித்திறன் என்றும், வேகத்தை முன்னேற்றம் என்றும் நாம் தவறாகக் கருதுகிறோம்.',
            'ஷாம்பாலா என்பது பனிமலை இடுக்குகளில் மறைந்திருக்கும் எட்டாத பூமி அல்ல; அது மனித விழிப்புணர்வின் மையத்தில் இயல்பாக வீற்றிருக்கும் அமைதியின் திருவிடம். புற உலக கூச்சல்களிலிருந்து உங்கள் கவனத்தை உள்ளே திருப்பும்போது, எத்தகைய சூழ்நிலைகளாலும் அசைக்க முடியாத பேரின்ப அமைதியை நீங்கள் உணர்கிறீர்கள்.',
            'மூச்சுக் கவனிப்பும், அமைதிப் பயிற்சியும் உங்கள் மனதை கீழ்நிலை பயங்களிலிருந்து விடுவித்து, ஆழ்ந்த உள்ளுணர்வை விழித்தெழச் செய்கின்றன. அப்போது நாம் செய்யும் ஒவ்வொரு செயலும் அருளின் வெளிப்பாடாக மலர்கிறது.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Seven Chakra Pyramid Energy',
          ta: 'அத்தியாயம் 2: ஏழு சக்கர பிரமிடு ஆற்றல் நெறி',
        },
        subtitle: {
          en: 'Cosmic Resonance, Subtle Vitality, and Daily Alignment',
          ta: 'பிரபஞ்ச ஒத்திசைவு மற்றும் அன்றாட ஆற்றல் சமநிலை',
        },
        paragraphs: {
          en: [
            'The human spine is a celestial antenna connecting terrestrial grounding to cosmic consciousness. From the root (Muladhara) to the crown (Sahasrara), the seven energy centers regulate not merely bodily organs, but the very frequency of thoughts and creative manifestations.',
            'Pyramid meditation concentrates pranic energy into a laser-sharp vortex. When meditating beneath a sacred geometric form, chaotic brainwaves decelerate into theta and delta states, accelerating biological cellular repair and dissolving subconscious blockages.',
            'When all seven chakras vibrate in harmonic resonance, the human being ceases to be a victim of circumstance and becomes a channel for divine order, profound vitality, and universal love.',
          ],
          ta: [
            'மனித முதுகெலும்பு என்பது பூமிக்கும் பிரபஞ்ச விழிப்புணர்வுக்குமான ஒரு தெய்வீக ஆண்டெனா போன்றது. மூலாதாரம் முதல் துரியம் வரை இயங்கும் ஏழு ஆற்றல் மையங்கள் வெறும் உடலியல் இயக்கங்களை மட்டுமல்லாது, நமது எண்ண அலைகளையும் வாழ்வியல் உருவாக்கங்களையும் தீர்மானிக்கின்றன.',
            'பிரமிடு தியானம் என்பது பிராண ஆற்றலை ஒருமுகப்படுத்தும் அரிய கலையாகும். புனித வடிவியல் அமைப்பின் கீழ் அமர்ந்து தியானிக்கும்போது, மன அலைகள் அமைதியடைந்து, உடலின் செல்கள் புத்துயிர் பெறுகின்றன; ஆழ்மனத் தடைகள் அனைத்தும் விலகுகின்றன.',
            'ஏழு சக்கரங்களும் ஒருமுகப்பட்டு இயங்கும்போது, மனிதன் சூழ்நிலைகளுக்குப் பலியாகாமல், பிரபஞ்ச அருளையும், அளப்பரிய ஆற்றலையும் தன் வழியாக வெளிப்படுத்தும் ஞானக் கருவியாக மாறுகிறான்.',
          ],
        },
      },
    ],
  },
  {
    id: 'BK-003',
    slug: 'financial-intelligence',
    coverImage: '/images/books/financial_intelligence.jpg',
    title: {
      en: 'Financial Intelligence (FI)',
      ta: 'நிதி நுண்ணறிவு (Financial Intelligence)',
    },
    tagline: {
      en: 'Resource Stewardship, Value Creation, and Practical Wealth Literacy for the Young Mind',
      ta: 'இளம் தலைமுறைக்கான நிதி மேலாண்மை, மதிப்பு உருவாக்கம் மற்றும் நடைமுறை பொருளாதார அறிவு',
    },
    author: {
      en: 'Dr. J. Arawindhan',
      ta: 'முனைவர் ஜே. அரவிந்தன்',
    },
    edition: 'Student & Educator Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'Bridging a glaring gap in traditional school curricula, this book introduces financial wisdom as an essential ninth intelligence in the Dasavadani model. From understanding the difference between earning, investing, and serving, to the psychology of money and enterprise creation, this work grounds students in ethical financial self-reliance.',
      ta: 'பாரம்பரிய கல்வி முறைகளில் புறக்கணிக்கப்பட்ட நிதி அறிவை தசாவதானி பாடத்திட்டத்தின் ஒன்பதாவது நுண்ணறிவாக இந்நூல் அறிமுகப்படுத்துகிறது. உழைப்பு, முதலீடு, சேமிப்பு ஆகியவற்றின் வேறுபாடுகள் முதல் நேர்மையான தொழில்முனைவோர் மனநிலை வரை மாணவர்களுக்கு நடைமுறை வழிகாட்டுகிறது.',
    },
    keyThemes: {
      en: [
        'The 5 Ms: Mind, Material, Method, Manpower, Money',
        'The psychology of wealth: From earning to multiplying and sharing',
        'Student Profit Lab and micro-entrepreneurship simulations',
        'Budgeting, capital stewardship, and ethical business creation',
      ],
      ta: [
        '5 M தத்துவம்: மனம், மூலப்பொருள், முறை, மனிதவளம், பணம்',
        'பணத்தின் உளவியல்: ஈட்டுதல், பெருக்குதல் மற்றும் பகிர்தல்',
        'மாணவர் லாப ஆய்வகம் (Student Profit Lab) மற்றும் குறுந்தொழில் மாதிரிகள்',
        'வரவு-செலவு மேலாண்மை மற்றும் அறநெறி சார்ந்த தொழில் உருவாக்கம்',
      ],
    },
    targetAudience: {
      en: 'Middle school to college students, emerging entrepreneurs, and commerce educators.',
      ta: 'நடுநிலைப் பள்ளி முதல் கல்லூரி மாணவர்கள், இளம் தொழில்முனைவோர் மற்றும் ஆசிரியர்கள்.',
    },
    readMoreSnippet: {
      en: '“Money is an energy that follows clarity and discipline. When children learn to respect resources early, they grow into builders rather than mere consumers.”',
      ta: '"பணம் என்பது தெளிவையும் ஒழுக்கத்தையும் பின்பற்றும் ஓர் ஆற்றல். வளங்களை மதிக்க குழந்தைகள் ஆரம்பத்திலேயே கற்கும்போது, அவர்கள் நுகர்வோராக மட்டுமல்லாமல் உருவாக்குநர்களாக மாறுகிறார்கள்."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Foundations of Financial Consciousness',
          ta: 'அத்தியாயம் 1: நிதி விழிப்புணர்வின் அடித்தளங்கள்',
        },
        subtitle: {
          en: 'Escaping the Linear Wage Trap to Build Sovereign Wealth',
          ta: 'நேரியல் சம்பளச் சுழற்சியிலிருந்து விடுபட்டு நிதிச் சுயாட்சி அடைதல்',
        },
        paragraphs: {
          en: [
            'Financial intelligence is not measured by the salary you negotiate, but by the assets you construct and the sovereignty you retain. Society trains graduates to trade time for wages, trapping sharp intellects in an exhausting loop of inflation, taxation, and consumption.',
            'True financial freedom begins with a mental decoupling: recognizing that money is crystallized human energy. When money works for you while you sleep, learn, or meditate, you transition from economic subservience to strategic autonomy.',
            'Mastering the basics of cash flow, asset allocation, and risk management is the first civilizational duty of an educated individual who desires to serve their family and society without compromise.',
          ],
          ta: [
            'நிதி நுண்ணறிவு என்பது நீங்கள் வாங்கும் சம்பளத்தைக் கொண்டு அளவிடப்படுவதல்ல; நீங்கள் உருவாக்கும் சொத்துக்களையும், நீங்கள் தக்கவைத்துக் கொள்ளும் சுயாட்சியையும் கொண்டே அளவிடப்படுகிறது. நேரத்தை விற்றுப் பணம் ஈட்டுவதையே சமூகம் வழக்கமாகக் கற்பிக்கிறது; ஆனால் இது கூர்மையான அறிவாளிகளை நுகர்வுச் சுழற்சியில் சிக்க வைக்கிறது.',
            'உண்மையான நிதி சுதந்திரம் என்பது ஒரு மனநிலை மாற்றத்தில் தொடங்குகிறது. பணம் என்பது உறைந்த மனித ஆற்றல் என்பதை உணர வேண்டும். நீங்கள் உறங்கும் போதும், தியானிக்கும் போதும் உங்களுக்காக செல்வம் பெருகுமாறு கட்டமைக்கும்போதே நீங்கள் பொருளாதார அடிமைத்தனத்திலிருந்து விடுபடுகிறீர்கள்.',
            'வருவாய் வரவு-செலவு ஒழுங்கு, சொத்து ஒதுக்கீடு மற்றும் நிதி இடர் மேலாண்மையைக் கற்பது, தன் குடும்பத்திற்கும் சமுதாயத்திற்கும் சமரசமின்றி சேவை செய்ய விரும்பும் ஒவ்வொரு மனிதனின் கடமையாகும்.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Art of Asymmetric Compounding',
          ta: 'அத்தியாயம் 2: கூட்டு வட்டியின் ஆக்கபூர்வ ஆற்றல்',
        },
        subtitle: {
          en: 'Building Generational Capital with Ethical Responsibility',
          ta: 'அறநெறி வழுவாமல் தலைமுறை தழைக்கும் மூலதனத்தை உருவாக்குதல்',
        },
        paragraphs: {
          en: [
            'Albert Einstein described compounding as the eighth wonder of the world, yet few educational systems teach its strategic application. Compounding is not merely mathematical interest; it is the exponential accumulation of wisdom, trust, and productive capital over decades.',
            'When wealth is built upon ethical enterprise—solving real human problems, creating sustainable employment, and fostering educational opportunities—it carries the blessings of the cosmos and stands resilient across market cycles.',
            'Do not pursue quick riches through speculation. Build enduring institutional foundations that generate enduring value for generations to come.',
          ],
          ta: [
            'ஆல்பர்ட் ஐன்ஸ்டீன் கூட்டு வட்டியை உலகின் எட்டாவது அதிசயம் என்றார். ஆனால் அதன் வியூகப் பயன்பாட்டை கல்வி நிறுவனங்கள் கற்றுக்கொடுப்பதில்லை. கூட்டு வட்டி என்பது வெறும் கணித கணக்கீடு மட்டுமல்ல; அது பல தசாப்தங்களாக சேர்க்கப்படும் அனுபவம், நற்பெயர் மற்றும் பயனுள்ள முதலீடுகளின் அபரிமிதமான வளர்ச்சியாகும்.',
            'மனித பிரச்சனைகளுக்குத் தீர்வு காணுதல், வேலைவாய்ப்புகளை உருவாக்குதல், கல்வி வாய்ப்புகளைப் பெருக்குதல் போன்ற அறநெறி சார்ந்த தொழில்களின் வழியே ஈட்டப்படும் செல்வம் பிரபஞ்ச அருளைப் பெற்று பல தலைமுறைகளுக்கு நிலைத்து நிற்கும்.',
            'ஊக வணிகத்தால் வரும் குறுகிய கால மாயச் செல்வத்தை நாடாதீர்கள். எதிர்காலத் தலைமுறைகளுக்குப் பயனளிக்கும் நிலையான நிறுவன அமைப்புகளையும், உற்பத்தி மூலதனத்தையும் உருவாக்குங்கள்.',
          ],
        },
      },
    ],
  },
  {
    id: 'BK-004',
    slug: 'emotional-intelligence',
    coverImage: '/images/books/emotional_intelligence.jpg',
    title: {
      en: 'Emotional Intelligence (EI)',
      ta: 'உணர்ச்சி நுண்ணறிவு (Emotional Intelligence)',
    },
    tagline: {
      en: 'Mastering the Inner Weather: Self-Regulation, Empathy & Conscious Choice',
      ta: 'மன உணர்வுகளை ஆளுமை செய்தல்: சுய கட்டுப்பாடு, பச்சாதாபம் மற்றும் விழிப்புணர்வுத் தேர்வுகள்',
    },
    author: {
      en: 'Dr. J. Arawindhan',
      ta: 'முனைவர் ஜே. அரவிந்தன்',
    },
    edition: 'Curriculum & Life Skills Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'A core pillar of the Dasavadani curriculum, this book offers a systematic roadmap for mastering interpersonal and intrapersonal awareness. It teaches children and young adults how to convert reactivity into responsiveness, manage exam and social anxieties, and practice empathetic communication in collaborative environments.',
      ta: 'தசாவதானி பாடத்திட்டத்தின் பத்தாவது நுண்ணறிவான உணர்ச்சி நுண்ணறிவை விளக்கும் நூல். கோபம், பயம், கவலை போன்ற உணர்வுகளை எவ்வாறு ஆக்கப்பூர்வமான ஆற்றலாக மாற்றுவது என்றும், மற்றவர்களின் உணர்வுகளை மதித்து நல்லுறவை பேணுவது எப்படி என்றும் மாணவர்களுக்கு கற்பிக்கிறது.',
    },
    keyThemes: {
      en: [
        'The 3C framework: Change-maker, Choice-maker, Chance-maker',
        'The 4H integration: Heart, Hand, Head, Health',
        'Empathy building and conflict resolution in peer groups',
        'Mindfulness protocols for emotional balance under pressure',
      ],
      ta: [
        '3C கட்டமைப்பு: மாற்றம் உருவாக்குபவர், தேர்வு செய்பவர், வாய்ப்பு உருவாக்குபவர்',
        '4H ஒருங்கிணைப்பு: இதயம் (Heart), கரம் (Hand), தலை (Head), உடல் நலம் (Health)',
        'பச்சாதாபம் வளர்த்தல் மற்றும் சவால்களை சுமுகமாக தீர்த்தல்',
        'அழுத்தமான சூழலிலும் மன அமைதி காக்கும் விழிப்புணர்வு பயிற்சிகள்',
      ],
    },
    targetAudience: {
      en: 'Adolescent learners, teachers, counselors, and organizational leaders.',
      ta: 'பள்ளி-கல்லூரி மாணவர்கள், ஆசிரியர்கள், ஆலோசகர்கள் மற்றும் தலைமைப் பொறுப்பாளர்கள்.',
    },
    readMoreSnippet: {
      en: '“IQ gets you in the door; EQ determines how far you travel. The strongest leader is not the one with the loudest voice, but the one who can master their own inner weather.”',
      ta: '"ஐ.கியூ (IQ) உங்களுக்கு ஒரு வாசலைத் திறக்கலாம்; ஆனால் ஈ.கியூ (EQ) மட்டுமே நீங்கள் எவ்வளவு தூரம் பயணிப்பீர்கள் என்பதை தீர்மானிக்கிறது. உண்மையான தலைவர் தன் மன உணர்வுகளை ஆளத் தெரிந்தவரே."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Anatomy of Emotional Equilibrium',
          ta: 'அத்தியாயம் 1: உணர்ச்சிச் சமநிலையின் கட்டமைப்பு',
        },
        subtitle: {
          en: 'Responding with Wisdom Instead of Reacting in Impulse',
          ta: 'உணர்ச்சித் தூண்டுதலில் சிதறாமல் ஞானத்தோடு எதிர்வினையாற்றுதல்',
        },
        paragraphs: {
          en: [
            'Between every external stimulus and our behavioral response, there is a sacred pause. In that pause lies our freedom and our growth. The untrained mind reacts instinctively with anger, fear, or insecurity, instantly surrendering its power to external provocations.',
            'Emotional intelligence is the cultivated ability to witness feelings without becoming enslaved by them. Anger, jealousy, and anxiety are biological signals, not permanent identities. When you observe them with stillness, their destructive heat dissipates, revealing clarity and purpose.',
            'The highest emotional mastery is not emotional suppression; it is emotional alchemy—transmuting turbulent feelings into creative vitality, unyielding courage, and deep empathy.',
          ],
          ta: [
            'வெளிப்புறத்தில் நடக்கும் நிகழ்வுக்கும், அதற்கு நாம் காட்டும் எதிர்வினைக்கும் நடுவே ஒரு புனிதமான இடைவெளி உள்ளது. அந்த இடைவெளியில்தான் நமது விடுதலையும் ஆன்ம வளர்ச்சியும் அடங்கியுள்ளது. பயிற்சியற்ற மனம் கோபம், பயம் அல்லது தாழ்வுணர்ச்சியோடு உடனடி எதிர்வினை புரிந்து தன் ஆற்றலை இழந்துவிடுகிறது.',
            'உணர்ச்சி நுண்ணறிவு என்பது நமது உணர்வுகளுக்கு அடிமையாகாமல் அவற்றை சாட்சியாக நின்று உற்றுநோக்கும் கலை. கோபமும், பதற்றமும் உடலியல் சமிக்ஞைகளே அன்றி நமது நிரந்தர அடையாளம் அல்ல. அவற்றை அமைதியோடு கவனிக்கும்போது, அவற்றின் தீவிரம் தணிந்து தெளிவு பிறக்கிறது.',
            'உணர்ச்சிகளை அடக்கி வைப்பது ஆளுமை அல்ல; எதிர்மறை உணர்ச்சிகளை ஆக்கபூர்வமான உத்வேகமாகவும், துணிவாகவும், எல்லையற்ற கருணையாகவும் உருமாற்றுவதே உண்மையான உணர்ச்சி ஞானமாகும்.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Heart as an Organ of Perception',
          ta: 'அத்தியாயம் 2: பேரன்பின் விழிப்புணர்வும் தலைமைத்துவமும்',
        },
        subtitle: {
          en: 'Leading with Empathy, Compassion, and Coherence',
          ta: 'கருணையோடு வழிநடத்துதல் மற்றும் உறவுகளின் இணக்கம்',
        },
        paragraphs: {
          en: [
            'Modern neurocardiology confirms that the human heart possesses its own complex neural network, generating an electromagnetic field thousands of times stronger than the brain. When heart rhythms enter coherence, cognitive capacity sharpens, stress hormone levels drop, and relational intuition awakens.',
            'Great leadership does not stem from intimidation or detached intellect; it arises from the magnetic resonance of a heart that genuinely cares. When colleagues, students, and family members feel understood and validated, extraordinary collaboration unfolds naturally.',
            'Practice heart-centered presence every morning: send silent goodwill to those who challenge you, forgive past slights, and enter every room with the commitment to elevate the spirits of everyone present.',
          ],
          ta: [
            'நவீன நரம்பியல் ஆய்வுகள் மனித இதயத்திற்கு என்று தனித்துவமான நரம்பு மண்டலம் இருப்பதையும், அது மூளையை விடப் பல மடங்கு வலிமையான மின்காந்த ஆற்றலை வெளிப்படுத்துவதையும் உறுதி செய்கின்றன. இதயம் அமைதியான ஒத்திசைவை எட்டும்போது, மூளையின் சிந்திக்கும் திறன் கூர்மையடைந்து மனஅழுத்தம் குறைகிறது.',
            'அதிகாரத்தாலோ அல்லது உணர்ச்சியற்ற புத்திசாலித்தனத்தாலோ சிறந்த தலைவர்கள் உருவாவதில்லை; பிறரை உளமார நேசிக்கும் அன்பின் காந்த ஈர்ப்பிலிருந்தே சிறந்த தலைமை பிறக்கிறது. மாணவர்கள் மற்றும் சக மனிதர்கள் மதிக்கப்படுவதாக உணரும்போது வியத்தகு சாதனைகள் இயல்பாக நிகழ்கின்றன.',
            'ஒவ்வொரு நாளும் இதயப்பூர்வமான விழிப்புணர்வைப் பழகுங்கள்: உங்களுக்கு சவாலாக இருப்பவர்களுக்கும் நல்வாழ்த்துக்களை அனுப்புங்கள்; கடந்த கால கசப்புகளை மன்னியுங்கள்; நீங்கள் நுழையும் எந்த இடத்தையும் அன்பினால் உயர்த்தும் உறுதியோடு வாழுங்கள்.',
          ],
        },
      },
    ],
  },
  {
    id: 'BK-005',
    slug: 'my-yellow-book',
    coverImage: '/images/books/my_yellow_book.jpg',
    title: {
      en: 'My Yellow Book',
      ta: 'என் மஞ்சள் புத்தகம் (My Yellow Book)',
    },
    tagline: {
      en: 'My Guru = My Value · Buddham, Dhammam, Sangham Saranam Gacchami',
      ta: 'என் குரு = என் மதிப்பு · புத்தம், தம்மம், சங்கம் சரணம் கச்சாமி',
    },
    author: {
      en: 'Dr. J. Arawindhan',
      ta: 'முனைவர் ஜே. அரவிந்தன்',
    },
    edition: 'Mi WAY Value & Spiritual Intelligence Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'A foundational anchor of the Multiple Intelligence Way (Mi WAY), My Yellow Book establishes student consciousness upon the sacred equation: "My Guru = My Value". Centered on the timeless Triple Refuge (Buddham, Dhammam, Sangham Saranam Gacchami), it guides young minds to build reverent receptivity toward mentors, moral grounding, inner stillness, and empathetic character in an age of distraction.',
      ta: 'மல்டிபிள் இன்டெலிஜென்ஸ் வே (Mi WAY) கல்வி அமைப்பின் அடித்தள நூல். "என் குரு = என் மதிப்பு" என்ற உயரிய வாழ்வியல் சமன்பாட்டை அடிப்படையாகக் கொண்டு, ஆசிரியர்-மாணவர் ஆன்ம பிணைப்பை இந்நூல் போற்றுகிறது. புத்தம், தம்மம், சங்கம் சரணம் கச்சாமி என்ற அறவழியில் நின்று, மாணவர்களுக்கு ஒழுக்கம், நல்லொழுக்க விழுமியங்கள், உள் அமைதி மற்றும் நற்குணங்களை இளமையிலேயே பயிற்றுவிக்கிறது.',
    },
    keyThemes: {
      en: [
        'My Guru = My Value: Receptivity, respect, and conscious mentorship',
        'The Triple Refuge: Awakening wisdom (Buddham), righteousness (Dhammam), and community harmony (Sangham)',
        'Value-based character architecture for school children',
        'Cultivating attention, gratitude, and moral compass in early education',
      ],
      ta: [
        'என் குரு = என் மதிப்பு: ஆசிரியர் மீது பேரன்பும் வழிகாட்டல் ஏற்பும்',
        'மும்மணிகள் தஞ்சம்: ஞான விழிப்புணர்வு (புத்தம்), அறநெறி (தம்மம்), கூட்டு ஒற்றுமை (சங்கம்)',
        'பள்ளி மாணவர்களுக்கான விழுமியங்கள் மற்றும் நற்பண்பு கட்டமைப்பு',
        'ஆரம்பக் கல்வியில் நன்றியுணர்வு, மன ஒருமைப்பாடு மற்றும் அறநெறி வழிகாட்டல்',
      ],
    },
    targetAudience: {
      en: 'Primary and middle school students, value education educators, and conscious parents.',
      ta: 'தொடக்க மற்றும் நடுநிலைப் பள்ளி மாணவர்கள், நன்னெறி ஆசிரியர்கள், கல்வியாளர்கள் மற்றும் பெற்றோர்கள்.',
    },
    readMoreSnippet: {
      en: '“When a student honors the teacher, knowledge turns into living wisdom. My Guru = My Value is not submission; it is the sacred key that unlocks our highest potential.”',
      ta: '"ஒரு மாணவர் ஆசிரியரை மதிக்கும் போது, கற்கும் அறிவு வாழும் ஞானமாக மாறுகிறது. என் குரு = என் மதிப்பு என்பது அடிபணிதல் அல்ல; அது நம் உள்ளார்ந்த எல்லையற்ற ஆற்றலைத் திறக்கும் திறவுகோல்."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Sacred Equation of My Guru = My Value',
          ta: 'அத்தியாயம் 1: என் குரு = என் மதிப்பு என்ற புனித சமன்பாடு',
        },
        subtitle: {
          en: 'Awakening Reverence, Humility, and Receptivity in Learning',
          ta: 'கற்றலில் குரு பக்தி, பணிவு மற்றும் ஆழமான ஏற்புணர்வை விழித்தெழச் செய்தல்',
        },
        paragraphs: {
          en: [
            'Knowledge can be downloaded from a search engine, but wisdom is only transmitted through the sacred bond between a seeker and an awakened teacher. When a young mind says, "My Guru = My Value," it declares that its worth is directly proportional to the wisdom it is willing to receive and honor.',
            'In the Multiple Intelligence Way (Mi WAY), we teach children that intelligence without humility is brittle and self-destructive. Reverence for the master dissolves the ego, clears intellectual clutter, and prepares the soil of consciousness for seeds of greatness.',
            'To value one’s Guru is to value one’s own highest future. The Yellow Book is the daily sanctuary where this sacred connection is remembered, practiced, and celebrated.',
          ],
          ta: [
            'தகவல்களை இணையத்திலிருந்து பதிவிறக்கம் செய்துவிடலாம்; ஆனால் மெய்ஞ்ஞானம் என்பது ஒரு குருவுக்கும் மாணவருக்கும் இடையிலான ஆன்மப் பிணைப்பினால் மட்டுமே கடத்தப்படுகிறது. "என் குரு = என் மதிப்பு" என்று ஒரு குழந்தை சொல்லும்போது, தான் ஏற்கும் ஞானத்தின் மதிப்பிலேயே தன் வாழ்க்கை மதிப்பு உயர்கிறது என்பதை உணர்கிறது.',
            'மல்டிபிள் இன்டெலிஜென்ஸ் வே (Mi WAY) முறையில், பணிவற்ற அறிவு ஆபத்தானது என்பதை குழந்தைகளுக்குக் கற்பிக்கிறோம். ஆசிரியரை உளமார மதிக்கும்போது ஆணவம் கரைகிறது, மனக்குழப்பங்கள் நீங்குகின்றன, மற்றும் ஆன்ம ஆற்றல் விழிப்படைகிறது.',
            'குருவை மதிப்பதே தன் சொந்த பிரகாசமான எதிர்காலத்தை மதிப்பதாகும். இந்த புனிதப் பிணைப்பை தினமும் நினைவுகூர்ந்து வாழ வழிகாட்டும் சரணாலயமே என் மஞ்சள் புத்தகம் ஆகும்.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Triple Refuge in Daily Student Life',
          ta: 'அத்தியாயம் 2: அன்றாட மாணவர் வாழ்வில் மும்மணிகள் தஞ்சம்',
        },
        subtitle: {
          en: 'Buddham, Dhammam, and Sangham as Practical Anchors',
          ta: 'புத்தம், தம்மம், சங்கம்: வாழ்வியல் பாதுகாப்பு அரண்கள்',
        },
        paragraphs: {
          en: [
            'The ancient chant—Buddham Saranam Gacchami, Dhammam Saranam Gacchami, Sangham Saranam Gacchami—is not distant dogma. For a student, Buddham is the refuge in one’s own awakened, focused intellect. Dhammam is the refuge in righteousness, honesty, and truth. Sangham is the refuge in a harmonious, supportive community of friends and peers.',
            'When challenges rise in the classroom, taking refuge in truth and clarity banishes fear. The student learns to think clearly, act ethically, and protect the wellbeing of the collective.',
            'Grounded in these three eternal pillars, a child walks through school with an unshakeable moral compass, spreading calm and confidence wherever they step.',
          ],
          ta: [
            'புத்தம் சரணம் கச்சாமி, தம்மம் சரணம் கச்சாமி, சங்கம் சரணம் கச்சாமி என்ற மகா மந்திரம் வெறும் சடங்கு அல்ல. ஒரு மாணவனுக்கு, புத்தம் என்பது தனது விழிப்படைந்த, ஒருமுகப்பட்ட புத்தி; தம்மம் என்பது உண்மை மற்றும் நேர்மையான அறநெறி; சங்கம் என்பது நல்வழியில் துணைநிற்கும் நண்பர்கள் மற்றும் கூட்டுச் சமூகம்.',
            'வகுப்பறையிலோ வாழ்க்கையிலோ சவால்கள் எழும்போது, சத்தியத்தையும் தர்மத்தையும் சரணடைபவன் அச்சத்தை வெல்கிறான். தெளிவாகச் சிந்திக்கவும், நேர்மையோடு செயல்படவும், சக மனிதர்களை நேசிக்கவும் குழந்தை பழகுகிறது.',
            'இந்த மூன்று தூண்களில் வேரூன்றிய குழந்தை எதற்கும் அஞ்சாமல், செல்லும் இடமெல்லாம் நற்குணங்களையும் அமைதியையும் பரப்பி வெற்றிகரமாக வாழ்கிறது.',
          ],
        },
      },
    ],
  },
  {
    id: 'BK-006',
    slug: 'my-white-book',
    coverImage: '/images/books/my_white_book.jpg',
    title: {
      en: 'My White Book',
      ta: 'என் வெள்ளை புத்தகம் (My White Book)',
    },
    tagline: {
      en: 'Every child is not same same... Our child needs WOW individual intelligence based schooling',
      ta: 'ஒவ்வொரு குழந்தையும் ஒன்று போல இருப்பதில்லை... நமது குழந்தைக்குத் தேவை தனிநபர் நுண்ணறிவு சார்ந்த வாவ் கல்வி',
    },
    author: {
      en: 'Dr. J. Arawindhan',
      ta: 'முனைவர் ஜே. அரவிந்தன்',
    },
    edition: 'Mi WAY Individual Intelligence Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'My White Book is the flagship student companion journal embodying Dr. Arawindhan’s radical pedagogical truth: “Every child is not same same... Our child needs WOW individual intelligence based schooling.” Designed under the Multiple Intelligence Way (Mi WAY), it provides structured reflective worksheets, daily inquiry trackers, curiosity triggers, and personal discovery maps that help each child identify their dominant intelligences and flourish without toxic academic comparisons.',
      ta: 'முனைவர் அரவிந்தனின் புரட்சிகரக் கல்வித் தத்துவமான "எல்லாக் குழந்தைகளும் ஒன்று போல இருப்பதில்லை; ஒவ்வொரு குழந்தைக்கும் தனித்துவமான நுண்ணறிவு வழிக் கல்வி தேவை" என்பதை உயிர்ப்பிக்கும் மாணவர் வழிகாட்டி நூல். மல்டிபிள் இன்டெலிஜென்ஸ் வே (Mi WAY) முறையில் வடிவமைக்கப்பட்ட இந்நூல், குழந்தைகள் தங்களின் தனித்திறனைக் கண்டறிந்து, தேர்வு பயமும் தேவையற்ற ஒப்பீடுகளும் இன்றி மகிழ்ச்சியோடு கற்க உதவுகிறது.',
    },
    keyThemes: {
      en: [
        '“Every child is not same same”: Abolishing toxic grading and cookie-cutter schooling',
        'Personalized Multiple Intelligence mapping (Mi WAY) across 8+ dimensions',
        'Interactive daily discovery templates, project trackers, and curiosity logs',
        'Fostering self-esteem, self-efficacy, and joyful inquiry in every classroom',
      ],
      ta: [
        '"எல்லாக் குழந்தைகளும் ஒன்று போல இருப்பதில்லை": ஒரே மாதிரியான கல்வி முறையை மாற்றி அமைத்தல்',
        '8+ பன்முக நுண்ணறிவுகளின் அடிப்படையில் மாணவரின் தனித்திறனை வரைபடம் செய்தல்',
        'செயல்முறை தேடல் படிவங்கள், திட்டக் கண்காணிப்பு மற்றும் அறிவியல் ஆர்வக் குறிப்புகள்',
        'வகுப்பறையில் சுயமரியாதை, தன்னம்பிக்கை மற்றும் மகிழ்ச்சியான கற்றல் சூழலை வளர்த்தல்',
      ],
    },
    targetAudience: {
      en: 'School students (Classes 1–10), progressive educators, curriculum designers, and child development mentors.',
      ta: 'பள்ளி மாணவர்கள் (வகுப்புகள் 1-10), நவீன சிந்தனை ஆசிரியர்கள் மற்றும் குழந்தை வளர்ச்சி ஆலோசகர்கள்.',
    },
    readMoreSnippet: {
      en: '“A fish judged by its ability to climb a tree will spend its whole life believing it is stupid. My White Book celebrates each child’s unique genius.”',
      ta: '"மீனின் திறமையை மரம் ஏறுவதை வைத்து அளந்தால் அது வாழ்நாள் முழுவதும் தன்னை முட்டாள் என்றே நினைக்கும். என் வெள்ளை புத்தகம் ஒவ்வொரு குழந்தையின் தனித்துவ மேதமையை கொண்டாடுகிறது."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Demise of Same-Same Schooling',
          ta: 'அத்தியாயம் 1: ஒரே மாதிரியான கல்வி முறைக்கு விடை கொடுப்போம்',
        },
        subtitle: {
          en: 'Why Individual Intelligence Mapping Unlocks Hidden Brilliance',
          ta: 'தனிநபர் நுண்ணறிவு வரைபடம் எவ்வாறு குழந்தையின் மேதமையை வெளிப்படுத்துகிறது',
        },
        paragraphs: {
          en: [
            'For more than a century, industrial schooling has forced diverse, radiant young minds through a single narrow corridor: linguistic memorization and numerical speed. Those who excel in logical-mathematical recall are crowned; those gifted with spatial visualization, bodily-kinesthetic dexterity, musical pitch, or naturalistic sensitivity are marginalized as slow learners.',
            'Dr. Arawindhan’s creed breaks this tragic mold: "Every child is not same same... Our child needs WOW individual intelligence based schooling." In My White Book, every blank page is an invitation for the child to document what ignites their unique curiosity.',
            'When school aligns with a child’s natural cognitive profile, learning ceases to be a chore of fear and turns into an exhilarating game of self-discovery.',
          ],
          ta: [
            'கடந்த ஒரு நூற்றாண்டுக்கும் மேலாக, தொழிற்சாலை கல்வி முறை தனித்திறன் கொண்ட குழந்தைகளை ஒரே குறுகிய பாதையில் நடக்க வற்புறுத்தியது: மனப்பாடம் மற்றும் எண்கணித வேகம் மட்டுமே புத்திசாலித்தனத்தின் அளவுகோலாகக் கருதப்பட்டது. இதனால் வரைதல், தாள லயம், கைவினை, விளையாட்டு மற்றும் இயற்கை உணர்வு கொண்ட குழந்தைகள் பின்தங்கியவர்களாக முத்திரை குத்தப்பட்டனர்.',
            'முனைவர் அரவிந்தனின் தத்துவம் இந்த குறுகிய பார்வையை உடைக்கிறது: "எல்லாக் குழந்தைகளும் ஒன்று போல இருப்பதில்லை; ஒவ்வொரு குழந்தைக்கும் தனிநபர் நுண்ணறிவு சார்ந்த வாவ் கல்வி தேவை." என் வெள்ளை புத்தகத்தின் ஒவ்வொரு பக்கமும் குழந்தையின் உள்ளார்ந்த ஆர்வத்தை பதிவு செய்யும் களமாகும்.',
            'குழந்தையின் இயல்பான அறிவாற்றல் பாணிக்கு ஏற்ப கல்வி முறை மாறும்போது, கற்றல் என்பது ஒரு சுமையாக இல்லாமல் உற்சாகமான சுயகண்டுபிடிப்பு சாகசமாக மாறுகிறது.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Daily Architecture of Discovery',
          ta: 'அத்தியாயம் 2: தினசரி புதிய கண்டுபிடிப்புகளின் கட்டமைப்பு',
        },
        subtitle: {
          en: 'Connecting Time, Vision, Action, and Questions',
          ta: 'நேரம், தொலைநோக்கு, செயல் மற்றும் வினாக்களை ஒருங்கிணைத்தல்',
        },
        paragraphs: {
          en: [
            'Covered with purposeful icons of clocks, magnifying glasses, puzzle pieces, paper planes, and dialogues, My White Book teaches the student that learning happens anywhere and anytime. It provides frameworks for goal planning, questioning assumptions, recording eureka moments, and collaborating with peers.',
            'Each child creates their personal portfolio. They do not merely consume pre-packaged answers; they construct hypotheses, sketch inventions, and record the emotional climate of their learning journey.',
            'By the time a child completes My White Book, they possess an intimate knowledge of who they are, how they learn best, and what noble contributions they wish to make to the world.',
          ],
          ta: [
            'கடிகாரம், பூதக்கண்ணாடி, புதிர் துண்டுகள், காகித விமானம் மற்றும் உரையாடல் சின்னங்களால் அலங்கரிக்கப்பட்ட என் வெள்ளை புத்தகம், கற்றல் என்பது வகுப்பறையோடு முடிவதல்ல என்பதைப் புகட்டுகிறது. இலக்குகளைத் திட்டமிடவும், சந்தேகங்களை வெளிப்படையாகக் கேட்கவும், புதிய யோசனைகளை பதிவு செய்யவும் இதில் வழிகாட்டப்பட்டுள்ளது.',
            'ஒவ்வொரு மாணவரும் தங்களுக்கான தனிநபர் வாழ்க்கை ஆவணத்தை உருவாக்குகிறார்கள். பிறர் தரும் விடைகளை மனப்பாடம் செய்யாமல், சுயமாக சிந்தித்து புதிய தீர்வுகளை வரைகிறார்கள்.',
            'என் வெள்ளை புத்தகத்தை முழுமையாகப் பயன்படுத்தும் ஒரு குழந்தை, தான் யார், தன் பலம் என்ன, இந்த உலகிற்கு தான் ஆற்ற வேண்டிய அரிய சாதனை என்ன என்பதைத் தெளிவாக உணர்கிறது.',
          ],
        },
      },
    ],
  },
  {
    id: 'BK-007',
    slug: 'my-green-book',
    coverImage: '/images/books/my_green_book.jpg',
    title: {
      en: 'My Green Book',
      ta: 'என் பசுமைப் புத்தகம் (My Green Book)',
    },
    tagline: {
      en: 'Dream to Destiny · With All Love, Joy & Happiness',
      ta: 'கனவிலிருந்து இலட்சிய வெற்றி வரை · அன்போடும் ஆனந்தத்தோடும்',
    },
    author: {
      en: 'Dr. J. Arawindhan',
      ta: 'முனைவர் ஜே. அரவிந்தன்',
    },
    edition: 'Mi WAY Dream to Destiny Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'Carrying the personal mentorship of Dr. J. Arawindhan ("With All Love, Joy & Happiness — Chief Mentor"), My Green Book is the adolescent and high school student’s roadmap from abstract dreams to tangible destiny. It provides a structured goal-manifestation methodology: diagnosing life passions, building unshakeable habits, mastering time architecture, overcoming psychological hurdles, and running toward life’s finish line with triumphant energy.',
      ta: 'முனைவர் ஜே. அரவிந்தனின் நேரடி அன்பான வழிகாட்டலில் ("With All Love, Joy & Happiness — Chief Mentor") உருவான இளைஞர்களுக்கான வழிகாட்டி நூல். கனவுகளை வெறும் ஆசைகளாக விட்டுவிடாமல், அவற்றை நிஜமான சாதனைகளாக மாற்றும் "Dream to Destiny" திட்டத்தை வழங்குகிறது. இலக்கு நிர்ணயம், நேர மேலாண்மை, விடாமுயற்சி மற்றும் தடைகளைத் தாண்டி வெற்றிக்கோட்டை அடையும் தன்னம்பிக்கையை மாணவர்களுக்கு ஊட்டுகிறது.',
    },
    keyThemes: {
      en: [
        'Dream to Destiny: The systematic transformation of ambition into execution',
        'Overcoming adolescent hesitation, doubt, and peer distraction',
        'Personal goal mapping, milestones, and habit compounding',
        'Leading life with infectious joy, ethical vigor, and unwavering resolve',
      ],
      ta: [
        'கனவிலிருந்து இலட்சிய வெற்றி வரை: ஆசைகளை சாதனைகளாக மாற்றும் செயல்முறை',
        'பதின்ம பருவ தயக்கங்கள், கவனச்சிதறல்கள் மற்றும் பயங்களை முறியடித்தல்',
        'தனிநபர் இலக்கு வரைபடம், கால அளவீடுகள் மற்றும் தினசரி நற்பழக்கங்கள்',
        'ஆற்றல், ஆனந்தம், நேர்மை மற்றும் அசைக்க முடியாத உறுதியுடன் வாழ்வை வழிநடத்துதல்',
      ],
    },
    targetAudience: {
      en: 'High school and college youth, competitive exam aspirants (NEET, JEE, CA), and aspiring young leaders.',
      ta: 'உயர்நிலைப் பள்ளி மற்றும் கல்லூரி மாணவர்கள், போட்டித் தேர்வு எழுதும் இளைஞர்கள் மற்றும் இளம் சாதனையாளர்கள்.',
    },
    readMoreSnippet: {
      en: '“You were not born to merely exist. You were born to cross finish lines. Let your dream become your destiny, achieved with all love, joy, and unshakeable happiness.”',
      ta: '"நாம் சாதாரணமாக வாழ்ந்து மடிவதற்காகப் பிறக்கவில்லை; வெற்றிக்கோடுகளைத் தாண்டி சாதனைகளைப் படைக்கவே பிறந்திருக்கிறோம். உங்கள் கனவு உங்கள் விதியாக மலரட்டும்; அதுவும் அன்போடும் எல்லையற்ற ஆனந்தத்தோடும் நிறைவேறட்டும்."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Alchemy of Dream to Destiny',
          ta: 'அத்தியாயம் 1: கனவிலிருந்து இலட்சிய வெற்றிக்கான ரசவாதம்',
        },
        subtitle: {
          en: 'Bridging the Chasm Between Yearning and Execution',
          ta: 'வெறும் ஆசைக்கும் அசைக்க முடியாத செயல்பாட்டுக்கும் இடையிலான பாலத்தை அமைத்தல்',
        },
        paragraphs: {
          en: [
            'A dream without a blueprint is merely wishful thinking. Millions of gifted young people allow their greatest aspirations to dissolve because they lack an actionable framework to translate inspiration into daily habits. They get trapped in temporary failures and peer comparisons.',
            'My Green Book deconstructs the exact mechanics of victory. Written with parental love, joy, and uncompromising mentorship by Dr. Arawindhan, it provides youth with the tools to define their north star, schedule focused micro-actions, and maintain unwavering enthusiasm through adversity.',
            'When passion is backed by daily discipline and pure intentions, no summit is too high. You begin as a dreamer; you emerge as the master of your destiny.',
          ],
          ta: [
            'முறையான திட்டமிடல் இல்லாத கனவு என்பது வெறும் பகற்கனவாகவே முடிந்துவிடும். இலட்சக்கணக்கான திறமைமிக்க இளைஞர்கள் தங்கள் கனவுகளை நிஜமாக்கும் வழிமுறை தெரியாமல், கவனச்சிதறல்களாலும் தேவையற்ற ஒப்பீடுகளாலும் வாழ்க்கையை வீணடிக்கிறார்கள்.',
            'என் பசுமைப் புத்தகம் வெற்றிக்கான துல்லியமான சூத்திரங்களை வழங்குகிறது. முனைவர் அரவிந்தனின் அளப்பரிய அன்பு மற்றும் வழிகாட்டலில் உருவான இந்நூல், இளைஞர்கள் தங்களின் உயர்ந்த இலக்கை அடையாளம் கண்டு, தினசரி தொடர் முயற்சியின் மூலம் தடைகளை வெல்ல வழிகாட்டுகிறது.',
            'தூய எண்ணமும், தினசரி ஒழுக்கமும் இணையும் போது அடைய முடியாத சிகரம் என்று எதுவும் இல்லை. நீங்கள் ஒரு கனவாளராகத் தொடங்குகிறீர்கள்; உங்கள் விதியை வெல்லும் மாபெரும் வெற்றியாளராக உருவெடுக்கிறீர்கள்.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: Crossing the Finish Line with Joy',
          ta: 'அத்தியாயம் 2: ஆனந்தத்தோடு வெற்றிக்கோட்டைத் தொடுதல்',
        },
        subtitle: {
          en: 'Sustaining Peak Energy and Running the Race of Life',
          ta: 'உச்சக்கட்ட ஆற்றலைத் தக்கவைத்து வாழ்க்கை ஓட்டப்பந்தயத்தில் வெல்லுதல்',
        },
        paragraphs: {
          en: [
            'The silhouette on the cover of My Green Book depicts an ecstatic runner crossing the tape with hands raised in triumph against a radiant sunrise. This is not accidental symbolism: life’s greatest achievements must be celebrated with boundless love, joy, and gratitude.',
            'Competitive pressures in examinations, careers, and entrepreneurship often breed bitter stress. My Green Book teaches the athlete’s secret: joy is the ultimate fuel of endurance. When you enjoy the process of self-transcendence, fatigue disappears and excellence becomes second nature.',
            'Run your race with honour. Love the journey. Touch the tape of destiny with your head held high and your heart full of happiness.',
          ],
          ta: [
            'என் பசுமைப் புத்தகத்தின் அட்டையில், உதிக்கும் சூரியனின் பின்னணியில் இரு கைகளையும் உயர்த்தி வெற்றிக்கோட்டைத் தொடும் வீரனின் உருவம் உள்ளது. இது தற்செயலானது அல்ல: வாழ்க்கையின் மாபெரும் சாதனைகளை நாம் அன்போடும், எல்லையற்ற ஆனந்தத்தோடும், நன்றியுணர்வோடும் கொண்டாட வேண்டும் என்பதன் அடையாளமாகும்.',
            'தேர்வுகள் மற்றும் தொழில் சவால்கள் பெரும்பாலும் இளைஞர்களுக்கு மன அழுத்தத்தையே தருகின்றன. ஆனால் விளையாட்டு வீரர்களின் ரகசியத்தை இந்நூல் புகட்டுகிறது: ஆனந்தமே அயராத உழைப்பின் உண்மையான எரிபொருள். செயலை ரசித்துச் செய்யும்போது சோர்வு அகல்கிறது; வெற்றி வசமாகிறது.',
            'உங்கள் இலக்கை நோக்கி நேர்மையுடன் ஓடுங்கள். பயணத்தை நேசியுங்கள். தலைநிமிர்ந்து, ஆனந்தம் நிறைந்த இதயத்தோடு உங்கள் இலட்சிய வெற்றிக்கோட்டைத் தொடுங்கள்.',
          ],
        },
      },
    ],
  },
  {
    id: 'BK-011',
    slug: 'the-lions-bank-account',
    coverImage: '/images/books/lions_bank_account_v2.jpg',
    title: {
      en: "The Lion's Bank Account",
      ta: 'சிங்கத்தின் வங்கிக் கணக்கு (The Lion’s Bank Account)',
    },
    tagline: {
      en: 'Stop Chasing Rats, Start Hunting Deer · "Your first salary is not a flex. It’s a trap."',
      ta: 'எலிகளைத் துரத்துவதை நிறுத்துங்கள், மான்களை வேட்டையாடத் தொடங்குங்கள் · உங்கள் முதல் சம்பளம் பெருமை அல்ல; அது ஒரு பொறி',
    },
    author: {
      en: 'Dr. J. Arawindhan',
      ta: 'முனைவர் ஜே. அரவிந்தன்',
    },
    edition: 'Wealth Architecture & Mindset Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'Bold, provocative, and razor-sharp, The Lion\'s Bank Account opens with the disruptive reality: "Your first salary is not a flex. It’s a trap." Dr. J. Arawindhan challenges the salaried rat-race conditioning that enslaves ambitious minds in loops of consumerism. Distinguishing between the petty busywork of "chasing rats" and the strategic majesty of "hunting deer," this work delivers an unvarnished masterclass on equity, asset architecture, and sovereign financial independence.',
      ta: '"உங்கள் முதல் சம்பளம் பெருமைக்குரிய விஷயம் அல்ல; அது ஒரு பொறி!" என்ற அதிரடி உண்மையோடு தொடங்குகிறது இந்நூல். நுகர்வுக் கலாச்சாரத்திலும் சம்பளச் சங்கிலியிலும் சிக்கித் தவிக்கும் இளைஞர்களுக்கு நிதி விடுதலையின் கதவுகளைத் திறக்கிறது. அற்ப விஷயங்களுக்காக ஆற்றலை வீணடிக்கும் எலி வேட்டையை நிறுத்திவிட்டு, பெருஞ்செல்வத்தையும் சுயசார்பையும் ஈட்டும் மான் வேட்டைக்குத் தயாராகுமாறு சிங்கத்தின் கம்பீரத்தோடு அறைகூவல் விடுக்கிறது.',
    },
    keyThemes: {
      en: [
        'The First Salary Paradox: When safety becomes the ultimate risk',
        'The Predator’s Economy: Chasing rats (petty distractions) vs. hunting deer (transformative value)',
        'Building asymmetric compounding wealth over linear wage-trading',
        'From reactive consumer to autonomous institutional capital architect',
      ],
      ta: [
        'முதல் சம்பள முரண்பாடு: பாதுகாப்பே மிக ஆபத்தான பொறியாக மாறும் விதம்',
        'ஆற்றல் விரயத்தை தவிர்த்தல்: அற்ப கவனச்சிதறல்களை விடுத்து பெருமதிப்பை உருவாக்குதல்',
        'நேரத்தை விற்று சம்பாதிக்கும் நிலையிலிருந்து கூட்டு வட்டி மற்றும் மூலதன உருவாக்கம் நோக்கி நகர்தல்',
        'நுகர்வோர் மனநிலையிலிருந்து நிதிச் சுயாட்சி பெற்ற முதலீட்டாளராக மாறுதல்',
      ],
    },
    targetAudience: {
      en: 'Young professionals, startup founders, commerce students, and wealth seekers seeking radical financial liberation.',
      ta: 'இளம் பணிபுரியோர், தொழில் நிறுவனர்கள் மற்றும் உண்மையான நிதி சுதந்திரத்தை நாடும் லட்சியவாதிகள்.',
    },
    readMoreSnippet: {
      en: '“Your first salary is not a flex. It’s a trap. A lion never exhausts its majestic energy chasing field mice through the grass; it sleeps, strategizes, and strikes only when the quarry is worthy of its regal power.”',
      ta: '"உங்கள் முதல் சம்பளம் பெருமை அல்ல; அது ஒரு பொறி. ஒரு சிங்கம் புல்வெளியில் எலிகளைத் துரத்தி தன் ஆற்றலை வீணடிப்பதில்லை; அது காத்திருக்கிறது, வியூகம் அமைக்கிறது, தன் வலிமைக்கு தகுதியான வேட்டையின் போது மட்டுமே பாய்கிறது."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The First Salary Paradox: When Safety Becomes a Trap',
          ta: 'அத்தியாயம் 1: முதல் சம்பளப் பொறி: போலிப் பாதுகாப்பின் ஆபத்து',
        },
        subtitle: {
          en: '“Your first salary is not a flex. It’s a trap.”',
          ta: '“உங்கள் முதல் சம்பளம் பெருமைக்குரிய விஷயம் அல்ல; அது ஒரு பொறி!”',
        },
        paragraphs: {
          en: [
            '“Your first salary is not a flex. It’s a trap.” With this provocative declaration, Dr. J. Arawindhan shatters the illusion of corporate security. The monthly paycheck is an addictive sedative designed to keep ambitious minds docile, spending their most creative youth servicing EMIs and consumer credit.',
            'When a young professional receives their first compensation, they immediately celebrate with consumption—purchasing liabilities that force them to return to the desk next Monday. What felt like freedom was merely the click of a golden handcuff.',
            'Wake up from the consumerist trance. Measure your wealth not by the luxury goods you display, but by the number of months you can survive in sovereign dignity without bowing to a wage master.',
          ],
          ta: [
            '“உங்கள் முதல் சம்பளம் பெருமைக்குரிய விஷயம் அல்ல; அது ஒரு பொறி!” என்ற அதிரடி உண்மையோடு தொடங்குகிறது இந்நூல். மாதாந்திர ஊதியம் என்பது லட்சியவாதிகளை அமைதிப்படுத்தும் ஒரு போதை போன்றது; அது இளைஞர்களின் படைப்புத்திறன் மிக்க காலத்தை கடன்களையும் நுகர்வுப் பொருட்களையும் அடைப்பதிலேயே செலவழிக்க வைக்கிறது.',
            'முதல் சம்பளம் கிடைத்ததும் இளைஞர்கள் ஆடம்பர நுகர்வுகளில் மூழ்கி, அடுத்த திங்கட்கிழமையும் மீண்டும் அதே மேசைக்குச் செல்ல வேண்டிய கட்டாயத்தை உருவாக்கிக் கொள்கிறார்கள். சுதந்திரம் என்று அவர்கள் நினைத்தது உண்மையில் ஒரு தங்க விலங்கின் பூட்டாகும்.',
            'நுகர்வுக் கலாச்சாரத்தின் மயக்கத்திலிருந்து விழித்தெழுங்கள். நீங்கள் பகட்டாகக் காட்டும் பொருட்களால் உங்கள் செல்வத்தை மதிப்பிடாதீர்கள்; யாரிடமும் கையேந்தாமல் உங்கள் கொள்கைகளோடு எத்தனை காலம் வாழ முடியும் என்பதைக் கொண்டே செல்வத்தை அளவிடுங்கள்.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: Stop Chasing Rats, Start Hunting Deer',
          ta: 'அத்தியாயம் 2: எலிகளைத் துரத்தாதே, மான்களை வேட்டையாடு',
        },
        subtitle: {
          en: 'The Predator’s Economy: Conserving Regal Energy for Transformative Value',
          ta: 'அற்ப கவனச்சிதறல்களை விடுத்து பெருமதிப்பை உருவாக்கும் சிங்கத்தின் வியூகம்',
        },
        paragraphs: {
          en: [
            'A lion never exhausts its majestic energy chasing field mice through the tall grass. A hundred mice will not sustain a lion’s strength, but chasing them exhausts its royal power. The lion sleeps, watches, strategizes, and strikes only when the quarry is worthy of its sovereign nature.',
            'Most ambitious individuals fail in wealth architecture because they spend 80% of their day hunting rats: petty side-hustles, trivial gossip, reactive emails, and small incremental gains. They are constantly busy, utterly exhausted, and perpetually broke.',
            'Conserve your regal energy. Stop hunting mice. Target high-leverage assets, scalable enterprises, and generational investments worthy of a lion’s power.',
          ],
          ta: [
            'ஒரு சிங்கம் புல்வெளியில் எலிகளைத் துரத்தி தன் கம்பீரமான ஆற்றலை வீணடிப்பதில்லை. நூறு எலிகளைப் பிடித்தாலும் சிங்கத்தின் பசி தீராது; ஆனால் அதைத் துரத்துவதிலேயே அதன் முழு பலமும் தீர்ந்துவிடும். சிங்கம் படுத்திருக்கிறது, உற்றுநோக்குகிறது, வியூகம் அமைக்கிறது; தன் வலிமைக்குத் தகுதியான மான் வேட்டையின் போது மட்டுமே பாய்கிறது.',
            'பல லட்சியவாதிகள் செல்வந்தர்களாக மாற முடியாமல் போவதற்குக் காரணம், அவர்கள் தங்கள் நாளின் பெரும்பகுதியை எலிகளைத் துரத்துவதிலேயே வீணடிக்கிறார்கள்: அற்ப வேலைகள், வதந்திகள், சிறு வருமானங்கள். அவர்கள் எப்போதும் பிஸியாக இருக்கிறார்கள், சோர்வடைகிறார்கள், ஆனால் ஏழ்மையிலேயே வாழ்கிறார்கள்.',
            'உங்கள் ஆற்றலை வீணடிக்காதீர்கள். சிறு எலி வேட்டைகளை நிறுத்துங்கள். தலைமுறை தலைமுறையாக வளரும் மாபெரும் நிறுவனங்களையும், சொத்துக்களையும் உருவாக்கும் சிங்கத்தின் பாய்ச்சலுக்குத் தயாராகுங்கள்.',
          ],
        },
      },
    ],
    pdfUrl: '/books/the-lions-bank-account.pdf',
    flipbookPages: Array.from({ length: 146 }, (_, i) => `/books/the-lions-bank-account/pages/page_${i + 1}.webp`),
  },
  {
    id: 'BK-017',
    slug: 'q-minds',
    coverImage: '/images/books/q-minds.jpg',
    title: {
      en: 'Q Minds: Supra Sapiens',
      ta: 'கியூ மைண்ட்ஸ்: சுப்ரா சேபியன்ஸ் (Q Minds)',
    },
    tagline: {
      en: 'Empowering Young Minds to Become Supra Sapiens in the Age of AI',
      ta: 'செயற்கை நுண்ணறிவு யுகத்தில் குழந்தைகளை சுப்ரா சேபியன்ஸாக மாற்றும் குவாண்டம் கல்வி',
    },
    author: {
      en: 'Mahavadhani Sri Achariya Arawindhan GuruG',
      ta: 'மகாவதானி ஸ்ரீ ஆச்சாரியா அரவிந்தன் குருஜி',
    },
    edition: 'Supra Sapiens & Genius Leadership Edition (217 Pages)',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'Spanning 217 comprehensive pages, Q Minds: Supra Sapiens presents Mahavadhani Sri Achariya Arawindhan GuruG’s definitive masterwork on Whole-Brain Quantum Development and Future Leadership. Designed for an era where artificial intelligence and automation are redefining human society, this monumental volume synthesizes Heguru whole-brain stimulation, Booshido ethical character, MiWay academic reasoning, WOW Academy innovation, and Divya Drishti conscious vision. It provides an actionable roadmap to cultivate children across 10 vital intelligences—equipping them with photographic memory, Q-Reading, Q-Math, and alpha-state focus so they lead the future as enlightened Supra Sapiens rather than passive observers.',
      ta: '217 பக்கங்களைக் கொண்ட "கியூ மைண்ட்ஸ்: சுப்ரா சேபியன்ஸ்" நூல், செயற்கை நுண்ணறிவு (AI) ஆதிக்கம் செலுத்தும் புதிய யுகத்தில் குழந்தைகளை முழுமையான ஆற்றல் கொண்ட மேதைகளாக வளர்ப்பதற்கான முழுமையான வழிகாட்டியாகும். ஹெகுரு முழு-மூளை வளர்ச்சி, பூஷிடோ ஒழுக்க மாண்பு, மிவே செயல்முறைக் கல்வி, வாவ் அகாடமி படைப்பாற்றல் மற்றும் திவ்ய திருஷ்டி ஆன்ம விழிப்புணர்வு ஆகிய 6 தூண்களை ஒருங்கிணைத்து இந்நூல் கட்டமைக்கப்பட்டுள்ளது. குழந்தைகளுக்கு புகைப்பட நினைவாற்றல், கியூ-மேத், கியூ-ரீடிங் மற்றும் ஆல்ஃபா கற்றல் நுட்பங்களைப் பயிற்றுவித்து, 10 பன்முக நுண்ணறிவுகளிலும் குழந்தைகளை "சுப்ரா சேபியன்ஸ்" (Supra Sapiens) என்ற உச்ச நிலைக்கு உயர்த்துகிறது.',
    },
    keyThemes: {
      en: [
        'The Genius Leadership Framework: Nurturing the Whole Child across 10 Intelligences',
        'Whole-Brain Neurological Activation: Heguru, Photographic Memory, and Alpha Learning',
        'Quantum Cognitive Mastery: Q-Reading (10x speed), Q-Math, and Lateral Innovation',
        'Transcending the AI Paradigm: Raising Creative, Ethical, and Conscious Supra Sapiens',
      ],
      ta: [
        'மேதைமை தலைமைத்துவக் கட்டமைப்பு: 10 பன்முக நுண்ணறிவுகளிலும் முழு மனிதனை உருவாக்குதல்',
        'முழு-மூளை நரம்பியல் தூண்டுதல்: ஹெகுரு, புகைப்பட நினைவாற்றல் மற்றும் ஆல்ஃபா தியானக் கற்றல்',
        'குவாண்டம் அறிவாற்றல் தேர்ச்சி: கியூ-ரீடிங் (10x வாசிப்பு வேகம்), கியூ-மேத் மற்றும் புத்தாக்கச் சிந்தனை',
        'AI யுகத்தை வெல்லும் ஆற்றல்: படைப்பாற்றல், அறநெறி மற்றும் ஆன்ம விழிப்புணர்வு கொண்ட சுப்ரா சேபியன்ஸ்',
      ],
    },
    targetAudience: {
      en: 'School principals, progressive educators, STEM lab coordinators, parents of Gen Alpha/Gen Z, and institutional founders.',
      ta: 'பள்ளி முதல்வர்கள், ஆசிரியர்கள், புதிய தலைமுறைப் பெற்றோர்கள் மற்றும் கல்வி நிறுவன நிர்வாகிகள்.',
    },
    readMoreSnippet: {
      en: '“In an era where machines calculate and artificial intelligence codes, human education must ascend beyond rote memory into Quantum Consciousness. Q Minds is the blueprint for awakening the Supra Sapiens within every child.”',
      ta: '"இயந்திரங்கள் கணக்கிடும், செயற்கை நுண்ணறிவு நிரலெழுதும் இந்த புதிய யுகத்தில், மனிதக் கல்வி என்பது மனப்பாடத்தைத் தாண்டி குவாண்டம் விழிப்புணர்வாக மலர வேண்டும். ஒவ்வொரு குழந்தையிடமும் உறங்கிக் கிடக்கும் சுப்ரா சேபியன்ஸ் மேதைமையை விழித்தெழச் செய்யும் வரைபடமே கியூ மைண்ட்ஸ் ஆகும்."',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: The Future Q Mind Vision & The Child as a Universe',
          ta: 'அத்தியாயம் 1: எதிர்கால கியூ மைண்ட் தொலைநோக்கும் பிரபஞ்சக் குழந்தையும்',
        },
        subtitle: {
          en: 'Why AI Demands a New Educational Paradigm Beyond Rote Academics',
          ta: 'மனப்பாடக் கல்வியைக் கடந்து புதிய கல்விப் புரட்சி ஏன் அவசியமாகிறது?',
        },
        paragraphs: {
          en: [
            'The world is entering an era unlike any in human history. Artificial Intelligence is transforming industries, automation is redefining careers, and access to information has become virtually limitless. In this rapidly evolving landscape, success will no longer depend solely on academic excellence or the ability to memorize facts.',
            'Instead, it will belong to individuals who can think creatively, solve complex problems, lead with integrity, adapt to change, collaborate across cultures, and make ethical decisions with wisdom and compassion.',
            'The Genius Leadership Framework serves as the foundation of the Future Q Mind Philosophy—bringing together the educational strengths of whole-brain neuro-development, value-based character, and quantum consciousness into one integrated ecosystem.',
          ],
          ta: [
            'மனித வரலாற்றில் இதுவரை கண்டிராத ஒரு புதிய சகாப்தத்திற்குள் நாம் நுழைகிறோம். செயற்கை நுண்ணறிவு தொழில்துறைகளை மாற்றியமைக்கிறது, தானியங்கி அமைப்புகள் வேலைவாய்ப்புகளை மாற்றி அமைக்கின்றன. இத்தகைய வேகமான சூழலில், தேர்வு மதிப்பெண்களும் மனப்பாட ஆற்றலும் மட்டுமே வெற்றியைத் தந்துவிட முடியாது.',
            'மாறாக, ஆக்கப்பூர்வமாகச் சிந்திப்பவர்கள், சிக்கலான பிரச்சனைகளுக்குத் தீர்வு காண்பவர்கள், நேர்மையோடு வழிநடத்துபவர்கள் மற்றும் கருணையோடு முடிவெடுக்கும் மேதைகளுக்கே எதிர்காலம் சொந்தமாகும்.',
            'மேதைமை தலைமைத்துவக் கட்டமைப்பு என்பது எதிர்கால "கியூ மைண்ட்" தத்துவத்தின் அடித்தளமாகும்—முழு-மூளை நரம்பியல் வளர்ச்சி, அறநெறி மற்றும் குவாண்டம் விழிப்புணர்வை ஒருங்கிணைத்து முழுமையான மனிதனை உருவாக்குவதே இதன் இலக்காகும்.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: The Six Pillars: From Whole-Brain Heguru to Divya Drishti',
          ta: 'அத்தியாயம் 2: ஆறு தூண்கள்: முழு-மூளை ஹெகுரு முதல் திவ்ய திருஷ்டி வரை',
        },
        subtitle: {
          en: 'Integrating Brain Development, Character, Academics, Creativity, Consciousness & Future Skills',
          ta: 'மூளை வளர்ச்சி, ஒழுக்கம், கல்வி, படைப்பாற்றல் மற்றும் ஆன்ம விழிப்புணர்வை இணைத்தல்',
        },
        paragraphs: {
          en: [
            'Every learning journey begins with the brain. Heguru provides the neurological foundation by stimulating whole-brain development during the critical early years through image-based visualization, speed calculation, and photographic memory exercises.',
            'Yet knowledge without character can never create great leaders. The Booshido pillar emphasizes values and ethical responsibility, while MiWay bridges conceptual clarity with real-world application, WOW Academy sparks creative innovation, and Divya Drishti awakens the higher spiritual quotient (SQ).',
            'When children receive the opportunity to develop their minds, hearts, character, and purpose together, they transcend conditioned limitations to become true Supra Sapiens.',
          ],
          ta: [
            'ஒவ்வொரு கற்றல் பயணமும் மூளையிலிருந்தே தொடங்குகிறது. குழந்தை பருவத்தின் பொன்னான ஆண்டுகளில் புகைப்பட நினைவாற்றல், வேகக் கணக்கீடு மற்றும் காட்சிப்படுத்தல் மூலம் ஹெகுரு முழு-மூளை வளர்ச்சியைத் தூண்டுகிறது.',
            'ஆனால் நற்பண்பு இல்லாத அறிவு சிறந்த தலைவர்களை உருவாக்க முடியாது. பூஷிடோ அறநெறி ஒழுக்கத்தையும், மிவே செயல்முறைக் கல்வியையும், வாவ் அகாடமி புத்தாக்கத்தையும், திவ்ய திருஷ்டி ஆன்மீக விழிப்புணர்வையும் வழங்குகின்றன.',
            'அறிவு, இதயம், ஒழுக்கம் மற்றும் வாழ்க்கை நோக்கம் ஆகிய நான்கையும் ஒருசேர வளர்க்கும் வாய்ப்பைப் பெறும் குழந்தை, எல்லைகளைக் கடந்து நிஜமான "சுப்ரா சேபியன்ஸ்" மேதையாக மிளிர்கிறது.',
          ],
        },
      },
    ],
    pdfUrl: '/books/q-minds.pdf',
    flipbookPages: Array.from({ length: 217 }, (_, i) => `/books/q-minds/pages/page_${i + 1}.webp`),
  },

  {
    id: 'BK-018',
    slug: 'heguru-parenting-mini-book',
    coverImage: '/images/books/heguru-parenting-mini-book.jpg',
    title: {
      en: 'Heguru Parenting Mini Book',
      ta: 'ஹெகுரு பேரண்டிங் மினி புக்',
    },
    tagline: {
      en: 'A Calm, Connected Guide for Raising Brighter Children (Ages 0–3 yrs)',
      ta: '0–3 வயதுக் குழந்தைகளின் அறிவுத்திறனை வளர்க்கும் அமைதியான, அன்பான வழிகாட்டி',
    },
    author: {
      en: 'Dr. J. Arawindhan & Heguru Japan',
      ta: 'முனைவர் ஜே. அரவிந்தன் & ஹெகுரு ஜப்பான்',
    },
    edition: 'Official Konica Print Edition',
    language: 'English & Tamil',
    status: 'Published',
    claimId: 'CLM-023',
    summary: {
      en: 'A comprehensive, science-backed manual introducing the celebrated Heguru Japanese right-brain education method to parents. Focuses on the critical developmental window from infancy through age 3—explaining how rapid neuro-pathway formation, visual flashcards, subconscious imprint phases, and loving emotional connection work together to nurture photographic memory, boundless curiosity, and calm, confident learners.',
      ta: 'புகழ்பெற்ற ஜப்பானிய ஹெகுரு வலது மூளைக் கல்வி முறையை பெற்றோர்களுக்கு அறிமுகப்படுத்தும் முழுமையான வழிகாட்டி நூல். பிறப்பு முதல் 3 வயது வரையிலான பொன்னான வளர்ச்சிப் பருவத்தில் குழந்தையின் மூளை வளர்ச்சி, புகைப்பட நினைவாற்றல், வேகக் கற்றல் மற்றும் ஆழ்மனப் பதிவுகள் எவ்வாறு உருவாகின்றன என்பதை அறிவியல் பூர்வமாகவும் அன்பான அணுகுமுறையோடும் விளக்குகிறது.',
    },
    keyThemes: {
      en: [
        'Foundations of Early Brain Development (Ages 0–3 yrs)',
        'Right Brain Education (RBE) & Glenn Doman Principles',
        'Overcoming Parental Anxiety & Managing Healthy Screen Time',
        'Daily 5-Minute At-Home Right-Brain Rituals & Rhythm Over Routine',
      ],
      ta: [
        'ஆரம்பகால மூளை வளர்ச்சியின் அடித்தளங்கள் (வயது 0–3)',
        'வலது மூளைக் கல்வி (RBE) மற்றும் கிளென் டோமன் கொள்கைகள்',
        'பெற்றோரின் மன அழுத்தத்தைத் தவிர்த்தல் மற்றும் திரை நேர மேலாண்மை',
        'தினசரி 5 நிமிட வீட்டுப் பயிற்சிகள் மற்றும் வாழ்வியல் தாளம்',
      ],
    },
    targetAudience: {
      en: 'Parents of infants and toddlers (Ages 0–3 yrs), early childhood educators, and whole-brain learning specialists.',
      ta: '0–3 வயதுக் குழந்தைகளின் பெற்றோர்கள், ஆரம்பக் கல்வி பயிற்றுனர்கள் மற்றும் மூளை வளர்ச்சி நிபுணர்கள்.',
    },
    readMoreSnippet: {
      en: '“You are not just raising a child — you are wiring a brain. The first 1,000 days are a superpower period of growth, building over a million new neural connections every single second.”',
      ta: '“நீங்கள் ஒரு குழந்தையை மட்டும் வளர்க்கவில்லை — ஒரு மனித மூளையின் நரம்பியல் அடித்தளத்தை உருவாக்குகிறீர்கள். முதல் 1,000 நாட்கள் ஒரு மகத்தான வளர்ச்சி சகாப்தம்; ஒவ்வொரு நொடியும் பத்து லட்சத்திற்கும் மேற்பட்ட புதிய நரம்பு இணைப்புகள் உருவாகின்றன.”',
    },
    sampleChapters: [
      {
        title: {
          en: 'Chapter 1: Foundations of Early Parenting & Right-Brain Education',
          ta: 'அத்தியாயம் 1: ஆரம்பகால வளர்ப்பின் அடித்தளங்கள் மற்றும் வலது மூளைக் கல்வி',
        },
        subtitle: {
          en: 'Why the First 3 Years Are Everything & The Subconscious Imprint Phase',
          ta: 'முதல் 3 ஆண்டுகள் ஏன் மிக முக்கியம் மற்றும் ஆழ்மனப் பதிவுக் கட்டம்',
        },
        paragraphs: {
          en: [
            'The first 1,000 days of your child\'s life, from conception to the age of two, are a "superpower" period of growth. During this incredible time, their brain builds as many as one million new connections every second, shaping the very foundation of their toddlerhood and beyond. It\'s not just about learning facts; your child is also wiring deep patterns of trust, safety, curiosity, and emotion through each responsive hug, comforting word, and playful interaction.',
            'At Heguru, we believe that every child is born with immense potential, waiting to be awakened. Grounded in Japanese research and developed through decades of refinement by Ruiko Henmi and Hirotada Henmi, our right-brain education method is designed not just to enhance learning, but to cultivate the whole child—emotionally, intellectually, and intuitively.',
            'Parenting, in its truest form, is not about control but connection. It is about stepping into your child\'s world with wonder, embracing their questions, celebrating their discoveries, and learning from their boundless imagination. This is the essence of Heguru: where love and learning weave seamlessly together, crafting not just smarter children, but happier, braver, and more creative souls.',
          ],
          ta: [
            'குழந்தையின் வாழ்க்கையில் கருவுற்ற காலம் முதல் இரண்டு வயது வரையிலான முதல் 1,000 நாட்கள் ஒரு "மகா சக்தி" வளர்ச்சி சகாப்தமாகும். இந்த வியக்கத்தக்க காலத்தில், மூளை ஒவ்வொரு நொடியும் பத்து லட்சத்திற்கும் மேற்பட்ட புதிய இணைப்புகளை உருவாக்குகிறது. இது வெறும் தகவல்களைக் கற்பது மட்டுமல்ல; நீங்கள் தரும் ஒவ்வொரு அணைப்பு, ஆறுதல் வார்த்தை மற்றும் பாசப் பார்வை மூலமாக குழந்தை பாதுகாப்பு, நம்பிக்கை மற்றும் உணர்ச்சி சமநிலையை நரம்பியல் ரீதியாகப் பதிவு செய்கிறது.',
            'ஹெகுருவில், ஒவ்வொரு குழந்தையும் மகத்தான ஆற்றலோடு பிறக்கிறது என்பதை நாங்கள் உறுதியாக நம்புகிறோம். ரூயிகோ ஹென்மி மற்றும் ஹிரோடாடா ஹென்மி ஆகியோரின் பல தசாப்த கால ஜப்பானிய ஆராய்ச்சியின் மூலம் உருவாக்கப்பட்ட வலது மூளைக் கல்வி முறை, அறிவை மட்டும் வளர்ப்பதோடு நின்றுவிடாமல், உணர்ச்சி, அறிவு மற்றும் உள்ளுணர்வு என முழுமையான ஆளுமையை மலரச் செய்கிறது.',
            'பெற்றோர்த்துவம் என்பது அதிகாரத்தின் வெளிப்பாடு அல்ல; அது அன்பான இணைப்பின் வெளிப்பாடு. குழந்தையின் வியப்பு நிறைந்த உலகிற்குள் நாமும் காலடி எடுத்து வைத்து, அவர்களின் கேள்விகளை ஏற்று, கண்டுபிடிப்புகளைக் கொண்டாடுவதே ஹெகுருவின் தாரக மந்திரம். அன்பும் கல்வியும் இணையும் போது குழந்தைகள் புத்திசாலிகளாக மட்டுமல்ல, மகிழ்ச்சியான, தைரியமான சாதனையாளர்களாகவும் வளர்கிறார்கள்.',
          ],
        },
      },
      {
        title: {
          en: 'Chapter 2: Real Pains, Real Solutions & Daily Heguru Systems at Home',
          ta: 'அத்தியாயம் 2: நடைமுறைச் சவால்கள், தீர்வுகள் மற்றும் அன்றாட வீட்டுப் பயிற்சிகள்',
        },
        subtitle: {
          en: 'Overcoming Developmental Anxiety, Managing Screen Time & 5-Minute Daily Rituals',
          ta: 'வளர்ச்சி சார்ந்த கவலைகளை வெல்லுதல், திரை நேரத்தைக் கட்டுப்படுத்துதல் மற்றும் 5 நிமிட தினசரி பயிற்சிகள்',
        },
        paragraphs: {
          en: [
            'Every parent today dreams of giving their child the best start in life, yet modern parenting is fraught with challenges: excessive screen time, lack of focus, fear of missing critical development windows, and social media comparison. Heguru\'s methodology addresses these exact pain points by replacing passive digital overstimulation with high-speed, interactive, and joyful activities that capture the child\'s innate curiosity.',
            'The daily Heguru home system does not require elaborate setups or expensive gadgets. Simple 5-minute daily rituals—such as high-speed red dot math visuals, picture and word flashcards, linking memory games, and sensory visualization—naturally strengthen focus, concentration, and photographic memory in a stress-free rhythm.',
            'Rhythm over routine is the golden rule: when learning becomes a joyous, consistent pulse in your household, parents stop feeling like taskmasters and instead become playful co-learners, celebrating steady transformations day after day.',
          ],
          ta: [
            'இன்றைய பெற்றோர்கள் தங்கள் குழந்தைக்குச் சிறந்த தொடக்கத்தை அளிக்க விரும்பினாலும், பல சவால்களை எதிர்கொள்கின்றனர்: அதிகப்படியான திரை நேரம் (Screen Time), கவனச்சிதறல், சரியான வாய்ப்புகளைத் தவறவிட்டு விடுவோமோ என்ற பயம் மற்றும் சமூக ஊடக ஒப்பீடுகள். ஹெகுருவின் முறை செயலற்ற டிஜிட்டல் ஈடுபாட்டை மாற்றி, அதிவேக, ஊடாடும் மற்றும் மகிழ்ச்சியான பயிற்சிகள் மூலம் குழந்தையின் கவனத்தை ஈர்க்கிறது.',
            'வீட்டிலேயே பின்பற்றக்கூடிய ஹெகுரு அமைப்புக்கு விலையுயர்ந்த சாதனங்கள் தேவையில்லை. தினசரி 5 நிமிட பயிற்சிகள்—சிவப்பு புள்ளி கணித அட்டைகள் (Red Dot Math), பட மற்றும் வார்த்தை ஃபிளாஷ் கார்டுகள், நினைவாற்றல் விளையாட்டுக்கள் மற்றும் காட்சிப்படுத்துதல்—மன அழுத்தமின்றி குழந்தையின் நினைவாற்றலையும் கவனக்குவிப்பையும் அபரிமிதமாக உயர்த்துகின்றன.',
            'திட்டமிடப்பட்ட கடமையை விட இயல்பான வாழ்வியல் தாளமே (Rhythm over routine) முக்கியமானது. கற்றல் வீட்டில் ஒரு மகிழ்ச்சியான அனுபவமாக மாறும்போது, பெற்றோர் கண்காணிப்பாளராக இல்லாமல் அன்பான கற்றல் தோழனாக மாறுகிறார்கள்.',
          ],
        },
      },
    ],
    pdfUrl: '/books/heguru-parenting-mini-book.pdf',
    flipbookPages: Array.from({ length: 88 }, (_, i) => `/books/heguru-parenting-mini-book/pages/page_${i + 1}.webp`),
  },

];


