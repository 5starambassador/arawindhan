import base64

with open('flip sound.mp3', 'rb') as f:
    data = f.read()
    b64 = base64.b64encode(data).decode('utf-8')

header = f'// Authentic Freesound Page Flip Audio (Inline 0-latency Data URI)\n// Generated from user\'s authentic "flip sound.mp3" ({len(data)} bytes)\n\nconst PAGE_FLIP_DATA_URI = "data:audio/mp3;base64,' + b64 + '";\n\n'

body = """export function playPageFlipAudio() {
  if (typeof window === 'undefined') return;
  try {
    const a = new Audio(PAGE_FLIP_DATA_URI);
    a.volume = 1.0;
    a.play().catch(() => {});
  } catch (e) {
    // ignore
  }
}
"""

with open('src/utils/pageFlipSound.ts', 'w', encoding='utf-8') as f:
    f.write(header + body)

print(f"Successfully wrote to src/utils/pageFlipSound.ts")
