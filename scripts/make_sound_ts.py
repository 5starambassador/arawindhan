with open('public/sounds/page_flip_base64.txt', 'r') as f:
    b64_uri = f.read().strip()

content = f'''// Authentic Freesound Community Page Flip Audio (Inline 0-latency Data URI)
const PAGE_FLIP_DATA_URI = "{b64_uri}";

let audioPool: HTMLAudioElement[] = [];
let poolIndex = 0;
const POOL_SIZE = 4;

function initPool() {{
  if (typeof window === 'undefined' || audioPool.length > 0) return;
  for (let i = 0; i < POOL_SIZE; i++) {{
    const a = new Audio(PAGE_FLIP_DATA_URI);
    a.volume = 0.95;
    a.preload = 'auto';
    audioPool.push(a);
  }}
}}

export function playPageFlipAudio() {{
  if (typeof window === 'undefined') return;
  try {{
    initPool();
    if (audioPool.length === 0) {{
      const a = new Audio(PAGE_FLIP_DATA_URI);
      a.volume = 0.95;
      a.play().catch(() => {{}});
      return;
    }}
    const sound = audioPool[poolIndex];
    poolIndex = (poolIndex + 1) % POOL_SIZE;
    sound.currentTime = 0;
    const p = sound.play();
    if (p !== undefined) {{
      p.catch(() => {{}});
    }}
  }} catch (e) {{
    // ignore
  }}
}}
'''

with open('src/utils/pageFlipSound.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Generated src/utils/pageFlipSound.ts successfully!")
