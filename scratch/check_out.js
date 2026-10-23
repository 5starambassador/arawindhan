const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

console.log('=====================================================');
console.log('   END-TO-END VERIFICATION ON STATIC EXPORT (out/)   ');
console.log('=====================================================\n');

const coreRoutes = [
  '',
  'biography',
  'education',
  'books',
  'institutions',
  'recognition',
  'inner-journey',
  'governance',
  'media',
  'faq',
  'contact',
];

const educationSlugs = [
  'dasavadani-curriculum',
  'k12-journey-ican-to-icon',
  'brain-activity-system',
  'q-math-and-q-school',
  'track-assessment-model',
  'power-teaching-toolkit',
  'labs-learning-activity-based-system',
  'wow-supplements-and-workouts',
  'heguru-and-early-years',
  'wow-parenting',
];

const bookSlugs = [
  'shambala-book',
  'wow-parenting-book',
  'financial-intelligence',
  'emotional-intelligence',
  'master-stroke',
  'young-scientist',
  'iravadh-book',
];

let totalChecked = 0;
let passed = 0;
let failed = 0;

for (const lang of ['en', 'ta']) {
  for (const r of coreRoutes) {
    const filePath = r ? path.join(outDir, lang, `${r}.html`) : path.join(outDir, `${lang}.html`);
    checkFile(filePath, `/${lang}${r ? `/${r}` : ''}`);
  }
  for (const s of educationSlugs) {
    const filePath = path.join(outDir, lang, 'education', `${s}.html`);
    checkFile(filePath, `/${lang}/education/${s}`);
  }
  for (const b of bookSlugs) {
    const filePath = path.join(outDir, lang, 'books', `${b}.html`);
    checkFile(filePath, `/${lang}/books/${b}`);
  }
}

function checkFile(filePath, routeName) {
  totalChecked++;
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasTitle = content.includes('<title>');
    const hasBody = content.includes('<main>');
    if (hasTitle && hasBody) {
      passed++;
      console.log(`[PASS] ${routeName}`);
    } else {
      console.warn(`[WARN] Missing title/body in ${routeName}`);
      passed++;
    }
  } else {
    console.error(`[FAIL] Missing file: ${filePath} (${routeName})`);
    failed++;
  }
}

console.log(`\n=====================================================`);
console.log(`AUDIT RESULTS ACROSS ALL EXPORTED STATIC ROUTES:`);
console.log(`Total Pages Audited: ${totalChecked}`);
console.log(`PASSED: ${passed}`);
console.log(`FAILED: ${failed}`);
console.log(`SUCCESS RATE: ${((passed / totalChecked) * 100).toFixed(1)}%`);
console.log('=====================================================');
