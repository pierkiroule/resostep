import { useRef } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import type { Archetype } from '../data/archetypes';
import { archetypes } from '../data/archetypes';
import { emojiSymbols } from '../data/tales';

export function ResonanceDisk({ selected, onSelect, onGenerate, onClear }: {
  selected: Archetype | null; onSelect: (item: Archetype) => void; onGenerate: () => void; onClear: () => void;
}) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function move(event: KeyboardEvent<HTMLButtonElement>, position: number) {
    let next: number;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (position + 1) % archetypes.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (position + archetypes.length - 1) % archetypes.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = archetypes.length - 1;
    else return;
    event.preventDefault();
    onSelect(archetypes[next]);
    buttons.current[next]?.focus();
  }

  return <section id="disque" className="emoji-picker" aria-labelledby="picker-title">
    <div className="picker-heading"><div><p className="eyebrow">Une image de départ</p><h2 id="picker-title">Choisissez l’émoji qui résonne le plus pour vous avec la situation clinique du moment</h2></div></div>
    <p id="picker-hint">Un seul émoji, un seul fil pour le conte. Touchez un autre émoji pour changer de choix.</p>
    <div className={`emoji-orbit ${selected ? 'has-choices' : ''}`}>
      <div className="bubble-disk" aria-hidden="true">
        <div className="bubble-field" key={selected?.id ?? 'idle'}>
          {Array.from({ length: 20 }, (_, index) => <span className="disk-bubble" key={index} style={{
            '--bubble-left': `${8 + (index * 31) % 80}%`,
            '--bubble-top': `${8 + (index * 23) % 78}%`,
            '--bubble-size': `${8 + (index * 7) % 21}%`,
            '--bubble-duration': `${7 + index % 6}s`,
            '--bubble-delay': `${-index * 1.3}s`,
            '--bubble-drift': `${index % 2 ? 12 : -12}px`,
          } as CSSProperties} />)}
        </div>
        <div className="bubble-center"><span>Le pas de côté</span><span className="bubble-sign">•°</span><span>Le pas conté</span></div>
      </div>
      <div className="orbit-choices" role="radiogroup" aria-label="Choisir un seul émoji" aria-describedby="picker-hint">
        {archetypes.map((item, position) => {
          const active = selected?.id === item.id;
          const angle = (position * 30 - 90) * Math.PI / 180;
          const style = { left: `${50 + 41.4 * Math.cos(angle)}%`, top: `${50 + 41.4 * Math.sin(angle)}%` };
          return <button style={style} title={item.name} type="button" role="radio" key={item.id} ref={element => { buttons.current[position] = element; }} tabIndex={active || (!selected && position === 0) ? 0 : -1} className={`emoji-choice ${active ? 'is-selected' : ''}`} aria-checked={active} aria-label={item.name} onClick={() => onSelect(item)} onKeyDown={event => move(event, position)}>
            <span className="emoji-picture" aria-hidden="true">{emojiSymbols[item.id]}</span><span className="orbit-name">{item.name}</span>
            {active && <span className="emoji-check" aria-hidden="true">✓</span>}
          </button>;
        })}
      </div>
    </div>
    <div className="selection-tray"><p>Votre image <strong>{selected ? `— ${selected.name}` : '— à vous de choisir'}</strong></p>
      <div className="selected-emojis">{selected && <button type="button" onClick={() => { onClear(); buttons.current[0]?.focus(); }} aria-label={`Retirer ${selected.name}`}><span aria-hidden="true">{emojiSymbols[selected.id]}</span>{selected.name}<span aria-hidden="true"> ×</span></button>}</div>
    </div>
    <p className="selection-message" role="status" aria-live="polite">{selected ? `${selected.name} : votre image pour le conte.` : 'Choisissez un émoji pour commencer.'}</p>
    <button type="button" className="generate-button" disabled={!selected} onClick={onGenerate}>Inspirer un pas de côté et un pas conté <span aria-hidden="true">→</span></button>
  </section>;
}
