import wave
import struct
import math
import random

def generate_page_flip_wav(filename="public/sounds/page-flip.wav"):
    sample_rate = 44100
    duration = 0.22  # 220 ms crisp paper turn
    num_samples = int(sample_rate * duration)
    
    # 16-bit mono PCM WAV
    with wave.open(filename, 'w') as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        
        last_val = 0.0
        data = bytearray()
        
        for i in range(num_samples):
            t = i / num_samples
            
            # Envelope: fast rise, textured flutter, soft exponential decay
            if t < 0.12:
                env = (t / 0.12) ** 1.5
            else:
                env = math.exp(-6.5 * (t - 0.12))
            
            # Flutter frequency modulation simulating the page flapping through the air
            flutter = math.sin(2 * math.pi * 32 * t) * 0.35 + 0.65
            
            # Noise + soft lowpass filter for realistic paper fiber friction
            white = random.uniform(-1.0, 1.0)
            lowpass = (last_val * 0.88) + (white * 0.12)
            last_val = lowpass
            
            # Higher frequency paper whoosh
            paper_whoosh = math.sin(2 * math.pi * (650 - 300 * t) * (i / sample_rate)) * 0.2
            
            # Combined signal
            sample = (lowpass * 0.65 + white * 0.15 + paper_whoosh) * env * flutter
            
            # Clamp to 16-bit signed integer (-32768 to 32767)
            clamped = max(-1.0, min(1.0, sample * 0.85))
            int_sample = int(clamped * 32767)
            data.extend(struct.pack('<h', int_sample))
            
        wav.writeframes(data)
    print(f"Generated realistic page-turn sound at {filename}")

if __name__ == '__main__':
    generate_page_flip_wav()
