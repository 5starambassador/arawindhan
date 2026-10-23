const fs = require('fs');
const path = require('path');

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git' && file !== 'out') {
        walkDir(fullPath, fileList);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json') || file.endsWith('.md') || file.endsWith('.csv') || file.endsWith('.xml')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const rootDir = path.join(__dirname, '..');
const filesToProcess = walkDir(path.join(rootDir, 'src'))
  .concat(walkDir(path.join(rootDir, 'public')))
  .concat([
    path.join(rootDir, 'package.json'),
    path.join(rootDir, 'MASTER_CLAIMS_REGISTER.csv'),
    path.join(rootDir, 'ENTITY_REGISTER.csv'),
    path.join(rootDir, 'KEYWORD_AND_INTENT_MAP.csv'),
    path.join(rootDir, 'AI_VISIBILITY_TESTS.csv'),
  ]);

let totalReplacements = 0;
let filesModified = 0;

for (const filePath of filesToProcess) {
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replacements in sequence from most specific to general
  content = content.replace(/Dr\.\s*J\.\s*Arawindhan\s+Ji/g, 'Dr. J. Arawindhan');
  content = content.replace(/Dr\.\s*J\.\s*Arawindhan\s+ji/g, 'Dr. J. Arawindhan');
  content = content.replace(/Santoshi\s+Shri\.\s*Arawindhan\s+Ji/g, 'Santoshi Shri. Arawindhan');
  content = content.replace(/Santoshi\s+Shri\s+Arawindhan\s+Ji/g, 'Santoshi Shri Arawindhan');
  content = content.replace(/Arawindhan\s+Ji/g, 'Arawindhan');
  content = content.replace(/Arawindhan\s+ji/g, 'Arawindhan');

  // Tamil replacements
  content = content.replace(/முனைவர்\s+ஜே\.\s+அரவிந்தன்\s+ஜி/g, 'முனைவர் ஜே. அரவிந்தன்');
  content = content.replace(/சந்தோஷி\s+ஸ்ரீ\.\s*அரவிந்தன்\s+ஜி/g, 'சந்தோஷி ஸ்ரீ. அரவிந்தன்');
  content = content.replace(/சந்தோஷி\s+ஸ்ரீ\s+அரவிந்தன்\s+ஜி/g, 'சந்தோஷி ஸ்ரீ அரவிந்தன்');
  content = content.replace(/அரவிந்தன்\s+ஜி/g, 'அரவிந்தன்');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesModified++;
    console.log(`[MODIFIED] ${path.relative(rootDir, filePath)}`);
  }
}

console.log(`\nReplacement complete: ${filesModified} files updated.`);
