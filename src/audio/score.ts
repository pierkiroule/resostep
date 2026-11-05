import type { ArchetypeId } from '../data/archetypes';
import { seededRandom } from '../data/resonance.ts';

export interface MusicPalette {
  name: string;
  tempo: number;
  motif: number[];
  responses: number[];
  octave: number;
  attack: number;
  release: number;
  brightness: number;
  space: number;
  density: number;
  harmonic: number[];
  roots: number[];
}
/** Une collection pentatonique commune permet des passages doux entre les douze paysages. */
export const musicPalettes: Record<ArchetypeId, MusicPalette> = {
  noeud: { name: 'Deux fils de cordes se répondent', tempo: 54, motif: [0, 2, 4, 2, 1, 3, 1, 0], responses: [4, 2, 0, 1], octave: 0, attack: .35, release: 3.7, brightness: 2100, space: .36, density: .76, harmonic: [1, .21, .06, .025], roots: [0, 0, 3, 0] },
  barque: { name: 'Un balancement et des notes d’eau', tempo: 48, motif: [0, 3, 4, 3, 2, 1], responses: [2, 4, 3, 0], octave: 0, attack: .8, release: 4.8, brightness: 1700, space: .48, density: .7, harmonic: [1, .12, .035], roots: [0, 3, 4, 0] },
  roseau: { name: 'Un souffle de cordes longues', tempo: 46, motif: [1, 2, 3, 2, 1, 0], responses: [0, 2, 1, 3], octave: 0, attack: 1.5, release: 4.9, brightness: 1600, space: .37, density: .54, harmonic: [1, .08, .045, .012], roots: [0, 4, 0, 3] },
  mycelium: { name: 'Des perles sonores qui se rejoignent', tempo: 59, motif: [0, 2, 1, 4, 3, 2, 4, 1], responses: [4, 1, 3, 2], octave: 0, attack: .075, release: 3.3, brightness: 2900, space: .58, density: .84, harmonic: [1, .13, .09, .035, .012], roots: [0, 4, 3, 0] },
  graine: { name: 'Un piano doux dans un sol de nappes', tempo: 43, motif: [0, 0, 2, 1, 0, 3], responses: [2, 1, 3, 4], octave: 0, attack: .13, release: 5.8, brightness: 1650, space: .43, density: .46, harmonic: [1, .26, .07, .025], roots: [0, 0, 4, 0] },
  cage: { name: 'Des souffles clairs et des silences ouverts', tempo: 47, motif: [2, 4, 3, 1, 2, 0], responses: [4, 3, 2, 1], octave: 0, attack: .75, release: 4.2, brightness: 2450, space: .55, density: .58, harmonic: [1, .045, .1, .01], roots: [0, 3, 0, 4] },
  phare: { name: 'Un appel qui revient dans la brume', tempo: 50, motif: [0, 3, 2, 3, 0, 4], responses: [3, 2, 3, 1], octave: 0, attack: .55, release: 5.2, brightness: 1900, space: .62, density: .56, harmonic: [1, .17, .055, .014], roots: [0, 3, 0, 3] },
  riviere: { name: 'Deux courants de notes fluides', tempo: 67, motif: [0, 1, 2, 4, 3, 2, 1, 3], responses: [3, 2, 4, 1], octave: 0, attack: .16, release: 2.9, brightness: 2250, space: .48, density: .9, harmonic: [1, .14, .045, .02], roots: [0, 4, 3, 0] },
  cercles: { name: 'Deux phrases qui gardent leur voix', tempo: 52, motif: [0, 2, 3, 2, 4, 3], responses: [4, 3, 1, 2], octave: 0, attack: .6, release: 4.4, brightness: 1850, space: .46, density: .68, harmonic: [1, .19, .04, .018], roots: [0, 4, 0, 3] },
  fissure: { name: 'De fines cloches sur une chaleur grave', tempo: 45, motif: [2, 4, 3, 2, 0, 1], responses: [4, 2, 3, 1], octave: 0, attack: .04, release: 5.6, brightness: 3100, space: .64, density: .48, harmonic: [1, .09, .14, .045, .015], roots: [0, 4, 0, 0] },
  plume: { name: 'Un motif léger porté par l’air', tempo: 55, motif: [4, 3, 2, 4, 1, 2, 0], responses: [3, 4, 2, 1], octave: 1, attack: .42, release: 4.6, brightness: 2500, space: .63, density: .6, harmonic: [1, .06, .04, .01], roots: [0, 3, 4, 0] },
  pierres: { name: 'Trois appuis de piano et de cordes graves', tempo: 42, motif: [0, 2, 3, 0, 4, 2], responses: [3, 2, 0, 4], octave: -1, attack: .18, release: 5.3, brightness: 1450, space: .34, density: .63, harmonic: [1, .28, .07, .03], roots: [0, 3, 4, 0] },
};
const degrees = [0, 2, 4, 7, 9];
export const midiFrequency = (midi: number) => 440 * Math.pow(2, (midi - 69) / 12);
export function degreeMidi(degree: number, octave = 0) {
  const position = ((degree % 5) + 5) % 5;
  return 62 + degrees[position] + 12 * (Math.floor(degree / 5) + octave);
}
export interface ScoreEvent {
  time: number;
  duration: number;
  midi: number;
  gain: number;
  pan: number;
  kind: 'pad' | 'melody' | 'reply';
}

/** Phrases de huit temps, renouvelées par inversions, réponses et silences. */
export function phraseEvents(id: ArchetypeId, phrase: number, seed: number, start: number): ScoreEvent[] {
  const profile = musicPalettes[id];
  const random = seededRandom(seed + phrase * 7919 + 137);
  const beat = 60 / profile.tempo;
  const span = beat * 8;
  const root = profile.roots[phrase % profile.roots.length];
  const evolution = (Math.sin(phrase * .67) + 1) / 2;
  const inversion = phrase % 4 === 3 ? 1 : 0;
  const events: ScoreEvent[] = [];
  // Les accords gardent des notes communes ; pas de percussion ni de basse intrusive.
  [root - 5, root, root + 2, root + 3].forEach((degree, i) => {
    events.push({ time: start + i * .11, duration: span + 2.7, midi: degreeMidi(degree + inversion), gain: i === 0 ? .058 : .043, pan: (i - 1.5) * .22, kind: 'pad' });
  });
  for (let step = 0; step < 8; step++) {
    const opening = phrase === 0 && step < 2;
    const density = profile.density + evolution * .1 - (id === 'graine' && phrase === 0 ? .14 : 0);
    if (!opening && random() > density) continue;
    const variation = phrase % 3 === 2 ? 1 : 0;
    const motif = profile.motif[(step + phrase * variation) % profile.motif.length];
    const pan = Math.sin(step * .8 + phrase * .6) * (id === 'cercles' ? .55 : .32);
    events.push({ time: start + step * beat + (opening ? 0 : random() * .075), duration: profile.release + profile.attack, midi: degreeMidi(motif, profile.octave), gain: .105 * (.78 + random() * .25) * (profile.octave === 1 ? .72 : 1), pan, kind: 'melody' });
    if (step % 3 === 2 && (phrase > 0 || id === 'noeud' || id === 'cercles') && random() < .58) {
      events.push({ time: start + (step + .5) * beat, duration: profile.release * .8 + profile.attack, midi: degreeMidi(profile.responses[(step + phrase) % profile.responses.length]), gain: .055, pan: -pan, kind: 'reply' });
    }
  }
  return events;
}

export interface ScoreBus {
  input: GainNode;
  master: GainNode;
  output: GainNode;
  reverb: GainNode;
  close: () => void;
}
export function createScoreBus(context: BaseAudioContext, destination: AudioNode, seed = 1): ScoreBus {
  const input = context.createGain();
  const dry = context.createGain();
  const wet = context.createGain();
  const reverb = context.createConvolver();
  const filter = context.createBiquadFilter();
  const master = context.createGain();
  const output = context.createGain();
  const limiter = context.createDynamicsCompressor();
  const makeup = context.createGain();
  filter.type = 'lowpass'; filter.frequency.value = 6800; filter.Q.value = .4;
  dry.gain.value = .85; wet.gain.value = .3;
  master.gain.value = .64;
  output.gain.value = 1;
  makeup.gain.value = 1.5;
  limiter.threshold.value = -12; limiter.knee.value = 18; limiter.ratio.value = 3; limiter.attack.value = .012; limiter.release.value = .28;
  const length = Math.ceil(context.sampleRate * 3.5);
  const impulse = context.createBuffer(2, length, context.sampleRate);
  const random = seededRandom(seed);
  for (let channel = 0; channel < 2; channel++) {
    const samples = impulse.getChannelData(channel);
    let smooth = 0;
    for (let i = 0; i < length; i++) {
      smooth = smooth * .65 + (random() * 2 - 1) * .35;
      samples[i] = smooth * Math.pow(1 - i / length, 3.1) * (i < 300 ? i / 300 : 1);
    }
  }
  reverb.buffer = impulse;
  input.connect(dry); input.connect(reverb); reverb.connect(wet);
  dry.connect(filter); wet.connect(filter); filter.connect(limiter); limiter.connect(makeup); makeup.connect(master); master.connect(output); output.connect(destination);
  const nodes: AudioNode[] = [input, dry, wet, reverb, filter, limiter, makeup, master, output];
  return { input, master, output, reverb: wet, close: () => nodes.forEach(node => node.disconnect()) };
}

export function scheduleScoreEvent(context: BaseAudioContext, bus: ScoreBus, id: ArchetypeId, event: ScoreEvent, trackGain?: GainNode) {
  const profile = musicPalettes[id];
  const oscillator = context.createOscillator();
  const envelope = context.createGain();
  const pan = context.createStereoPanner();
  const color = context.createBiquadFilter();
  const isPad = event.kind === 'pad';
  if (isPad) oscillator.type = 'sine';
  else {
    const real = new Float32Array(profile.harmonic.length + 1);
    const imaginary = new Float32Array(profile.harmonic.length + 1);
    profile.harmonic.forEach((amplitude, i) => { imaginary[i + 1] = amplitude; });
    oscillator.setPeriodicWave(context.createPeriodicWave(real, imaginary));
  }
  oscillator.frequency.value = midiFrequency(event.midi);
  color.type = 'lowpass'; color.frequency.value = isPad ? 1400 : profile.brightness; color.Q.value = .45;
  pan.pan.value = event.pan;
  const attack = isPad ? 2.2 : profile.attack;
  const end = event.time + event.duration;
  envelope.gain.setValueAtTime(0, event.time);
  envelope.gain.linearRampToValueAtTime(event.gain, event.time + attack);
  envelope.gain.setTargetAtTime(event.gain * (isPad ? .82 : .32), event.time + attack, isPad ? 2.4 : .7);
  envelope.gain.setTargetAtTime(.0001, Math.max(event.time + attack + .25, end - (isPad ? 2.6 : profile.release * .7)), isPad ? .7 : Math.max(.18, profile.release / 5));
  envelope.gain.linearRampToValueAtTime(0, end + .15);
  oscillator.connect(color); color.connect(envelope); envelope.connect(pan); pan.connect(trackGain ?? bus.input);
  oscillator.start(event.time); oscillator.stop(end + .2);
  oscillator.onended = () => { oscillator.disconnect(); color.disconnect(); envelope.disconnect(); pan.disconnect(); };
  return oscillator;
}

/** Moteur temps réel : un contexte, fondu entre choix, arrêt des nœuds et suspension hors écran. */
export class AmbientScore {
  private context: AudioContext;
  private bus: ScoreBus;
  private timer: number | null = null;
  private id: ArchetypeId = 'noeud';
  private seed = 1;
  private phrase = 0;
  private nextPhrase = 0;
  private track: GainNode | null = null;
  private tracks = new Set<GainNode>();
  private sources = new Set<OscillatorNode>();
  private queue: ScoreEvent[] = [];
  private disposed = false;
  private level = .64;
  private ducked = false;
  private running = false;
  private request = 0;

  constructor() {
    const Constructor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Constructor) throw new Error('Audio indisponible');
    this.context = new Constructor({ latencyHint: 'playback' });
    this.bus = createScoreBus(this.context, this.context.destination);
    this.bus.output.gain.value = 0;
  }
  async play(id: ArchetypeId, seed: number) {
    if (this.disposed) return;
    const request = ++this.request;
    // Appelé directement depuis le toucher : nécessaire aux navigateurs mobiles.
    await this.context.resume();
    if (this.disposed || request !== this.request) return;
    this.configure(id, seed);
    this.running = true;
    this.bus.output.gain.cancelScheduledValues(this.context.currentTime);
    this.bus.output.gain.setTargetAtTime(1, this.context.currentTime, .45);
    this.tick();
    if (this.timer === null) this.timer = window.setInterval(() => this.tick(), 70);
  }
  private configure(id: ArchetypeId, seed: number) {
    const time = this.context.currentTime;
    this.bus.reverb.gain.setTargetAtTime(musicPalettes[id].space * .7, time, .8);
    const old = this.track;
    if (old) {
      const stale = [...this.sources];
      if (typeof old.gain.cancelAndHoldAtTime === 'function') old.gain.cancelAndHoldAtTime(time);
      else { const value = old.gain.value; old.gain.cancelScheduledValues(time); old.gain.setValueAtTime(value, time); }
      old.gain.setTargetAtTime(0, time, .65);
      window.setTimeout(() => {
        stale.forEach(source => { try { source.stop(); } catch { /* Déjà terminé. */ } });
        old.disconnect(); this.tracks.delete(old);
      }, 4500);
    }
    this.track = this.context.createGain();
    this.track.gain.setValueAtTime(0, time);
    this.track.gain.linearRampToValueAtTime(1, time + 1.6);
    this.track.connect(this.bus.input); this.tracks.add(this.track);
    this.id = id; this.seed = seed; this.phrase = 0; this.queue = []; this.nextPhrase = time + .06;
  }
  private tick() {
    if (!this.running || this.disposed || this.context.state !== 'running' || !this.track) return;
    const now = this.context.currentTime;
    if (this.nextPhrase < now - .4) { this.nextPhrase = now + .05; this.queue = []; }
    while (this.nextPhrase < now + .3) {
      this.queue.push(...phraseEvents(this.id, this.phrase++, this.seed, this.nextPhrase));
      this.nextPhrase += 8 * 60 / musicPalettes[this.id].tempo;
    }
    const due = this.queue.filter(event => event.time < now + .3);
    this.queue = this.queue.filter(event => event.time >= now + .3);
    for (const event of due) {
      if (event.time < now - .1) continue;
      const source = scheduleScoreEvent(this.context, this.bus, this.id, { ...event, time: Math.max(now, event.time) }, this.track);
      this.sources.add(source);
      source.addEventListener('ended', () => this.sources.delete(source));
    }
  }
  setVolume(level: number) {
    this.level = Math.max(0, Math.min(1, level)); this.applyLevel();
  }
  setDucked(value: boolean) { this.ducked = value; this.applyLevel(); }
  private applyLevel() {
    if (!this.disposed) this.bus.master.gain.setTargetAtTime(this.level * (this.ducked ? .16 : 1), this.context.currentTime, .35);
  }
  async setVisible(visible: boolean) {
    if (this.disposed) return;
    if (!visible) {
      this.running = false;
      if (this.timer !== null) window.clearInterval(this.timer);
      this.timer = null;
      await this.context.suspend();
    } else {
      await this.context.resume();
      if (this.disposed) return;
      this.running = true; this.tick();
      if (this.timer === null) this.timer = window.setInterval(() => this.tick(), 70);
    }
  }
  stop() {
    if (this.disposed) return;
    this.disposed = true; this.running = false;
    if (this.timer !== null) window.clearInterval(this.timer);
    this.timer = null;
    const now = this.context.currentTime;
    this.bus.output.gain.cancelScheduledValues(now);
    this.bus.output.gain.setTargetAtTime(0, now, .14);
    window.setTimeout(() => {
      this.sources.forEach(source => { try { source.stop(); } catch { /* Déjà terminé. */ } });
      this.sources.clear(); this.tracks.forEach(track => track.disconnect()); this.tracks.clear(); this.bus.close();
      void this.context.close().catch(() => undefined);
    }, 750);
  }
}
