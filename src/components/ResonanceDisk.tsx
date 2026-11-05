import { useId, useRef } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { archetypes } from '../data/archetypes';
import type { Archetype } from '../data/archetypes';
import { ArchetypeSymbol } from './ArchetypeSymbol';
import { ResonanceEmergence } from './ResonanceEmergence';
import type { EmergencePhase } from './ResonanceEmergence';
import { UiIcon } from './UiIcon';

interface DiskProps {
  selected: Archetype[];
  onSelect: (archetype: Archetype) => void;
  onRenew: () => void;
  phase: EmergencePhase;
  seed: number;
  paused: boolean;
  onTogglePause: () => void;
  reducedMotion: boolean;
  textOnly: boolean;
}

export function ResonanceDisk({ selected, onSelect, onRenew, phase, seed, paused, onTogglePause, reducedMotion, textOnly }: DiskProps) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const pigment = useId().replace(/:/g, '') + '-pigment';
  const points = selected.map(symbol => {
    const angle = (archetypes.findIndex(a => a.id === symbol.id) * 30 - 90) * Math.PI / 180;
    return { x: 250 + 207 * Math.cos(angle), y: 250 + 207 * Math.sin(angle), id: symbol.id };
  });
  const palette = [['#8aada9', '#d0a085', '#b2b7cf'], ['#a7bda3', '#c9af87', '#99b4c3'], ['#a5b8c5', '#c398a3', '#b2ba9c']][seed % 3];
  const haloStyle = { '--halo-a': palette[0], '--halo-b': palette[1], '--halo-c': palette[2] } as CSSProperties;

  function move(event: KeyboardEvent<HTMLButtonElement>, current: number) {
    let next = current;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (current + 1) % 12;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (current + 11) % 12;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = 11;
    else return;
    event.preventDefault();
    buttons.current[next]?.focus();
  }

  return (
    <section className="disk-section" aria-label="Le disque des douze résonances" id="disque">
      <div className={`resonance-disk ${selected.length ? 'has-selection' : ''} phase-${phase} ${paused ? 'is-paused' : ''} ${textOnly ? 'text-only' : ''}`} style={haloStyle} aria-busy={phase === 'brewing'}>
        {!!selected.length && !textOnly && <div className="resonance-halo" key={seed} aria-hidden="true"><div className="halo-bloom" /><div className="halo-thread" /><div className="halo-whisper" /></div>}
        <svg className="disk-traces" viewBox="0 0 500 500" aria-hidden="true">
          <defs>
            <filter id={pigment} x="-40%" y="-40%" width="180%" height="180%">
              <feTurbulence type="fractalNoise" baseFrequency=".055" numOctaves="3" seed="12" result="paper" />
              <feDisplacementMap in="SourceGraphic" in2="paper" scale="13" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="1.8" />
            </filter>
          </defs>
          <g filter={`url(#${pigment})`} className="disk-pigment">
            <path d="M62 318q-14-19 3-35 17-8 30 12 9 12-5 28-15 13-28-5Z" fill="#c99b80" opacity=".16" />
            <path d="M391 115q-10-27 10-36 21-5 29 17 9 24-9 34-18 7-30-15Z" fill="#9bb6bd" opacity=".17" />
          </g>
          <circle cx="250" cy="250" r="207" className="disk-orbit" />
          <path d="M251 42C365 41 459 137 457 252S365 458 250 457 43 366 43 250 136 43 251 42Z" className="disk-ink-orbit" />
          {!selected.length && <><circle cx="250" cy="250" r="115" className="quiet-ripple ripple-one" /><circle cx="250" cy="250" r="115" className="quiet-ripple ripple-two" /></>}
          {points.map(point => <line key={`${point.id}-${seed}`} className="selection-thread" x1={point.x} y1={point.y} x2="250" y2="250" />)}
          {points.flatMap((point, i) => points.slice(i + 1).map(other => <line key={`${point.id}-${other.id}-${seed}`} className="resonance-link" x1={point.x} y1={point.y} x2={other.x} y2={other.y} />))}
        </svg>

        <div className="archetype-choices" role="group" aria-label="Choisir une métaphore. Les flèches permettent de parcourir les douze symboles.">
          {archetypes.map((item, i) => {
            const angle = (i * 30 - 90) * Math.PI / 180;
            const active = selected.some(symbol => symbol.id === item.id);
            const style = { left: `${50 + 41.4 * Math.cos(angle)}%`, top: `${50 + 41.4 * Math.sin(angle)}%` } as CSSProperties;
            return (
              <button key={item.id} ref={element => { buttons.current[i] = element; }} type="button"
                className={`archetype-choice ${active ? 'is-selected' : ''}`} style={style}
                aria-label={`${String(item.number).padStart(2, '0')} — ${item.name} : ${item.dynamic}`}
                aria-pressed={active} aria-controls="lecture" onClick={() => onSelect(item)} onKeyDown={event => move(event, i)}>
                <ArchetypeSymbol archetype={item} />
                <span className="choice-tooltip" aria-hidden="true">{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="disk-center" key={seed}>
          {selected.length ? <>
            <ResonanceEmergence symbols={selected} seed={seed} phase={phase} paused={paused} reducedMotion={reducedMotion} textOnly={textOnly} />
            {phase === 'revealed' &&
            <div className={`center-selected-caption ${textOnly ? 'center-text-caption' : ''}`}>
              <h2>{selected.map(a => a.name).join(' · ')}</h2>
              {textOnly && <p>Un autre angle se dessine.</p>}
            </div>}
          </> : <div className="center-invitation">
            <h2><span>Pour vous,</span> quel symbole résonne le plus avec cette situation ?</h2>
            <p className="selection-hint">Un, deux ou trois symboles.</p>
          </div>}
        </div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">{phase === 'brewing' ? 'Les symboles se rencontrent. Une perspective va apparaître.' : selected.length ? selected.map(a => a.name).join(', ') : 'Choisissez un à trois symboles sur le disque.'}</p>
      {phase === 'revealed' && <div className="disk-tools">
        {!textOnly && !reducedMotion && <button type="button" className="motion-toggle" onClick={onTogglePause} aria-label={paused ? 'Animer la métaphore' : 'Mettre l’animation en pause'}><UiIcon name={paused ? 'play' : 'pause'} /></button>}
        <a className="reading-cue" href="#lecture" aria-label="Lire la métaphore"><UiIcon name="up" /></a>
        <button type="button" className="renew-icon" onClick={onRenew} aria-label="Faire émerger un autre pas de côté avec ces symboles"><UiIcon name="renew" /></button>
      </div>}
    </section>
  );
}
