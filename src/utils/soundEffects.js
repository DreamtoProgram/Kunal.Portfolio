// Web Audio API synthesized mechanical switch click sounds

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playSwitchSound(isDark) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Transient click noise burst (mechanical snap)
    const bufferSize = ctx.sampleRate * 0.04; // 40ms noise burst
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.006));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(isDark ? 2800 : 3400, now);
    noiseFilter.Q.setValueAtTime(3.5, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.6, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(now);

    // 2. Tonal metallic 'clack' oscillator
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(isDark ? 380 : 540, now);
    osc.frequency.exponentialRampToValueAtTime(isDark ? 120 : 180, now + 0.06);

    oscGain.gain.setValueAtTime(0.45, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.07);

    // 3. Subtle secondary latch rebound click 45ms later
    setTimeout(() => {
      try {
        const lateNow = ctx.currentTime;
        const reboundOsc = ctx.createOscillator();
        const reboundGain = ctx.createGain();

        reboundOsc.type = 'sine';
        reboundOsc.frequency.setValueAtTime(isDark ? 920 : 1150, lateNow);
        reboundOsc.frequency.exponentialRampToValueAtTime(300, lateNow + 0.03);

        reboundGain.gain.setValueAtTime(0.25, lateNow);
        reboundGain.gain.exponentialRampToValueAtTime(0.001, lateNow + 0.03);

        reboundOsc.connect(reboundGain);
        reboundGain.connect(ctx.destination);
        reboundOsc.start(lateNow);
        reboundOsc.stop(lateNow + 0.035);
      } catch (err) {
        // ignore audio errors
      }
    }, 45);
  } catch (e) {
    console.log('Audio playback error:', e);
  }
}

export function playTensionSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.02);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.025);
  } catch (e) {
    // ignore
  }
}
