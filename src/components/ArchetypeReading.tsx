import type { MetaphorInspiration } from '../data/metaphors';
import { emojiSymbols } from '../data/metaphors';
import { VoicePlayer } from './VoicePlayer';

export function ArchetypeReading({ inspiration, onReturn, onRenew, onSpeaking }: {
  inspiration: MetaphorInspiration;
  onReturn: () => void;
  onRenew: () => void;
  onSpeaking: (playing: boolean) => void;
}) {
  return <article className="archetype-reading metaphor-reading" aria-labelledby="reading-title">
    <header className="reading-header">
      <p className="reading-emojis" aria-label={inspiration.archetype.name}><span aria-hidden="true">{emojiSymbols[inspiration.archetype.id]}</span></p>
      <p className="eyebrow">Le pas de côté métaphorique</p>
      <h2 id="reading-title" tabIndex={-1}>{inspiration.title}</h2>
      <VoicePlayer readingId={inspiration.id} paragraphs={[inspiration.title, inspiration.metaphor, inspiration.clinicalLink, ...inspiration.questions]} onPlayingChange={onSpeaking} />
    </header>
    <p className="metaphor-text">{inspiration.metaphor}</p>
    <section className="metaphor-link" aria-labelledby="clinical-link-title"><h3 id="clinical-link-title">Un lien possible avec la pratique</h3><p>{inspiration.clinicalLink}</p></section>
    <section className="metaphor-questions" aria-labelledby="questions-title">
      <h3 id="questions-title">Pour ouvrir l’échange</h3>
      <ol className="intervision-questions">{inspiration.questions.map((question, index) => <li key={question}>
        <span className="question-label">{index === 0 ? 'Ce que cela nous fait vivre' : 'Ce qui reste à entendre'}</span><p>{question}</p>
      </li>)}</ol>
    </section>
    <p className="reading-boundary">Gardez ce qui résonne, déplacez ou écartez le reste. Aucune image n’attribue un rôle au jeune ou à ses proches.</p>
    <div className="reading-end"><button type="button" className="renew-button" onClick={onRenew}>Un autre angle avec cet émoji <span aria-hidden="true">↻</span></button><button type="button" className="return-button" onClick={onReturn}>Choisir un autre émoji <span aria-hidden="true">↑</span></button></div>
  </article>;
}
