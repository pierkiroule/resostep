import type { CSSProperties } from 'react';
import type { Archetype } from '../data/archetypes';
import { archetypes } from '../data/archetypes';
import { emojiSymbols } from '../data/tales';

export function ResonanceDisk({ selected, onToggle, onGenerate, onClear, message }: {
  selected: Archetype[]; onToggle: (item: Archetype) => void; onGenerate: () => void; onClear: () => void; message: string;
}) {
  return <section id="disque" className="emoji-picker" aria-labelledby="picker-title">
    <div className="picker-heading"><div><p className="eyebrow">Les images de départ</p><h2 id="picker-title">Choisissez les émojis qui résonnent le plus pour vous avec la situation clinique du moment</h2></div><span className="selection-count">{selected.length} / 3</span></div>
    <p id="picker-hint">De 1 à 3 émojis. Ils se rencontreront dans le même conte.</p>
    <div className={`emoji-orbit ${selected.length ? 'has-choices' : ''}`}>
      <div className="bubble-disk" aria-hidden="true">
        <div className="bubble-field" key={selected.map(item => item.id).join('-')}>
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
      <div className="orbit-choices" role="group" aria-label="Choisir de 1 à 3 émojis" aria-describedby="picker-hint">
      {archetypes.map((item, position) => {
        const index = selected.findIndex(choice => choice.id === item.id);
        const angle = (position * 30 - 90) * Math.PI / 180;
        const style = { left: `${50 + 41.4 * Math.cos(angle)}%`, top: `${50 + 41.4 * Math.sin(angle)}%` };
        return <button style={style} title={item.name} type="button" key={item.id} className={`emoji-choice ${index >= 0 ? 'is-selected' : ''}`} aria-pressed={index >= 0} aria-label={item.name} onClick={() => onToggle(item)}>
          <span className="emoji-picture" aria-hidden="true">{emojiSymbols[item.id]}</span><span className="orbit-name">{item.name}</span>
          {index >= 0 && <span className="emoji-check" aria-hidden="true">✓ {index + 1}</span>}
        </button>;
      })}
      </div>
    </div>
    <div className="selection-tray"><p>Votre sélection <strong>{selected.length === 0 ? '— à vous de choisir' : `— ${selected.length} image${selected.length > 1 ? 's' : ''}`}</strong></p>
      <div className="selected-emojis">{selected.map(item => <button key={item.id} type="button" onClick={() => onToggle(item)} aria-label={`Retirer ${item.name}`}><span aria-hidden="true">{emojiSymbols[item.id]}</span>{item.name}<span aria-hidden="true"> ×</span></button>)}</div>
      {selected.length > 0 && <button type="button" className="clear-selection" onClick={onClear}>Tout effacer</button>}
    </div>
    <p className="selection-message" role="status" aria-live="polite">{message || (selected.length === 3 ? 'Trois images choisies. Retirez-en une pour en choisir une autre.' : `${selected.length} émoji${selected.length > 1 ? 's' : ''} choisi${selected.length > 1 ? 's' : ''} sur 3.`)}</p>
    <button type="button" className="generate-button" disabled={selected.length === 0} onClick={onGenerate}>Inspirer un pas de côté et un pas conté <span aria-hidden="true">→</span></button>
  </section>;
}
