import type { ResonanceInspiration } from '../data/resonance';
import { VoicePlayer } from './VoicePlayer';
import { UiIcon } from './UiIcon';

export function ArchetypeReading({ inspiration, onReturn, onRenew, onSpeaking }: { inspiration: ResonanceInspiration; onReturn: () => void; onRenew: () => void; onSpeaking: (playing: boolean) => void }) {
  return (
    <article className="archetype-reading flash-reading" aria-labelledby="reading-title" key={inspiration.id}>
      <header className="reading-header">
        <p className="reading-combination">{inspiration.archetype.name}</p>
        <h2 id="reading-title" tabIndex={-1}>{inspiration.title}</h2>
        <VoicePlayer readingId={inspiration.id} paragraphs={[inspiration.title, ...inspiration.paragraphs, inspiration.question, inspiration.invitation]} onPlayingChange={onSpeaking} />
      </header>
      <div className="projective-prose flash-prose">
        {inspiration.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <section className="flash-question" aria-label="Une question pour l’équipe">
        <p>{inspiration.question}</p>
      </section>
      <p className="final-invitation"><span aria-hidden="true">•°</span>{inspiration.invitation}</p>
      <div className="reading-end">
        <button type="button" className="renew-button" onClick={onRenew}><UiIcon name="renew" />Un autre pas de côté</button>
        <button type="button" className="return-button" onClick={onReturn}><UiIcon name="up" />Revenir au disque</button>
      </div>
    </article>
  );
}
