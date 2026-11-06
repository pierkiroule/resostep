import { useRef } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import type { Archetype } from '../data/archetypes';
import { archetypes } from '../data/archetypes';
import { emojiSymbols } from '../data/metaphors';
import { artDirection } from '../data/artDirection';

export function ResonanceDisk({ selected, onSelect, onGenerate, onClear }: {
  selected: Archetype | null; onSelect: (item: Archetype) => void; onGenerate: () => void; onClear: () => void;
}) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const palette = artDirection[selected?.id ?? 'noeud'];
  const colors = { '--disk-color-a': palette[0], '--disk-color-b': palette[1], '--disk-color-c': palette[2] } as CSSProperties;
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
    <p id="picker-hint">Un seul émoji pour déplier une métaphore. Touchez un autre émoji pour changer de choix.</p>
    <div className={`emoji-orbit ${selected ? 'has-choices' : ''}`} style={colors}>
      <div className="bubble-disk" aria-hidden="true">
        <div className="bubble-field" key={selected?.id ?? 'idle'}>
          {selected && <div className="selection-bloom">
            <i className="pigment-cloud cloud-a" /><i className="pigment-cloud cloud-b" />
            <i className="light-ribbon" />
            {[0, 1, 2].map(index => <i className="selection-ripple" key={index} style={{ animationDelay: `${index * .3}s` }} />)}
            {Array.from({ length: 12 }, (_, index) => <i className="selection-spark" key={`spark-${index}`} style={{
              '--spark-x': `${Math.cos(index * Math.PI / 6) * 75}px`,
              '--spark-y': `${Math.sin(index * Math.PI / 6) * 75}px`,
              animationDelay: `${index * .06}s`,
            } as CSSProperties} />)}
          </div>}
          {Array.from({ length: 20 }, (_, index) => <span className="disk-bubble" key={index} style={{
            '--bubble-left': `${8 + (index * 31) % 80}%`,
            '--bubble-top': `${8 + (index * 23) % 78}%`,
            '--bubble-size': `${8 + (index * 7) % 21}%`,
            '--bubble-duration': `${7 + index % 6}s`,
            '--bubble-delay': `${-index * 1.3}s`,
            '--bubble-drift': `${index % 2 ? 12 : -12}px`,
          } as CSSProperties} />)}
        </div>
        <div className="bubble-center"><span>Un pas de côté</span><span className="bubble-sign">•°</span><span>Une image pour penser</span></div>
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
    <p className="selection-message" role="status" aria-live="polite">{selected ? `${selected.name} : votre image pour réfléchir.` : 'Choisissez un émoji pour commencer.'}</p>
    <button type="button" className="generate-button" disabled={!selected} onClick={onGenerate}>Inspirer un pas de côté <span aria-hidden="true">→</span></button>
  </section>;
}
