import { useMemo } from 'react';
import type { CSSProperties } from 'react';
import type { Archetype } from '../data/archetypes';
import { seededRandom } from '../data/resonance';
import { ArchetypeAnimation } from './ArchetypeAnimation';

export type EmergencePhase = 'idle' | 'brewing' | 'revealed';

export function ResonanceEmergence({ archetype, seed, phase, paused, reducedMotion, textOnly }: {
  archetype: Archetype;
  seed: number;
  phase: EmergencePhase;
  paused: boolean;
  reducedMotion: boolean;
  textOnly: boolean;
}) {
  const composition = useMemo(() => {
    const random = seededRandom(seed);
    return {
      bubbles: Array.from({ length: 34 }, (_, i) => ({
        x: 150 + (random() + random() - 1) * 105,
        y: 152 + (random() + random() - 1) * 92,
        radius: i % 5 === 0 ? 1.5 + random() * 2.5 : 4 + random() * 12,
        duration: .65 + random() * 1.3,
        delay: -random() * 2,
        dx: (random() - .5) * 12,
        dy: -8 - random() * 17,
        opacity: .18 + random() * .5,
      })),
      turn: ['pierres', 'phare', 'cage', 'roseau'].includes(archetype.id) ? 0 : (random() - .5) * 2,
      motes: Array.from({ length: 13 }, () => ({ x: 35 + random() * 230, y: 30 + random() * 225, r: .6 + random() * 1.6 })),
    };
  }, [seed, archetype.id]);
  if (textOnly) return null;
  return (
    <div key={seed} className={`resonance-emergence phase-${phase} ${paused ? 'is-paused' : ''} ${reducedMotion ? 'is-still' : ''}`} aria-hidden={phase !== 'revealed'}>
      {!reducedMotion && <svg viewBox="0 0 300 300" className="brewing-field" aria-hidden="true">
        <ellipse className="brewing-breath" cx="150" cy="150" rx="75" ry="72" fill="none" stroke="#8da8a7" strokeWidth=".6" opacity=".25" />
        {composition.bubbles.map((bubble, i) => <g key={i} className="brewing-bubble" style={{
          '--bubble-x': `${bubble.dx}px`, '--bubble-y': `${bubble.dy}px`,
          animationDuration: `${bubble.duration}s`, animationDelay: `${bubble.delay}s`,
        } as CSSProperties}>
          <circle cx={bubble.x} cy={bubble.y} r={bubble.radius} fill={i % 5 === 0 ? '#303030' : 'none'} stroke={i % 7 === 0 ? '#9aafa9' : '#555'} strokeWidth={i % 5 === 0 ? 0 : .65} opacity={bubble.opacity} />
        </g>)}
      </svg>}
      {phase === 'revealed' && <div className="revealed-art" role="img" aria-label={archetype.animationDescription}>
        <svg viewBox="0 0 300 300" className="scene-motes" aria-hidden="true">
          {composition.motes.map((mote, i) => <circle key={i} cx={mote.x} cy={mote.y} r={mote.r} fill={i % 3 === 0 ? '#b9a181' : '#758e91'} opacity=".24" />)}
        </svg>
        <div className="scene-layer" style={{ '--ink-turn': `${composition.turn}deg` } as CSSProperties} aria-hidden="true">
          <ArchetypeAnimation archetype={archetype} paused={paused} reducedMotion={reducedMotion} seed={seed} />
        </div>
      </div>}
    </div>
  );
}
