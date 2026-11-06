import type { TaleInspiration } from '../data/tales';
import { emojiSymbols } from '../data/tales';
import { VoicePlayer } from './VoicePlayer';

export function ArchetypeReading({ inspiration, onReturn, onRenew, onSpeaking }: {
  inspiration: TaleInspiration;
  onReturn: () => void;
  onRenew: () => void;
  onSpeaking: (playing: boolean) => void;
}) {
  const wordCount = inspiration.paragraphs.join(' ').trim().split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.round(wordCount / 180));
  return (
    <article className="archetype-reading tale-reading" aria-labelledby="reading-title">
      <section className="tale-step" aria-labelledby="reading-title">
        <header className="reading-header">
          <p className="reading-emojis" aria-label={inspiration.archetype.name}>
            <span aria-hidden="true">{emojiSymbols[inspiration.archetype.id]}</span>
          </p>
          <p className="eyebrow">Le pas conté · une histoire à rencontrer</p>
          <h2 id="reading-title" tabIndex={-1}>{inspiration.title}</h2>
          <p className="reading-duration">Environ {readingMinutes} min de lecture · une fin à laisser ouverte</p>
          <VoicePlayer readingId={inspiration.id} paragraphs={[inspiration.title, ...inspiration.paragraphs]} onPlayingChange={onSpeaking} />
        </header>
        <div className="tale-prose">{inspiration.paragraphs.map((paragraph, index) => <p className={index === inspiration.paragraphs.length - 1 ? 'tale-ending' : undefined} key={paragraph}>{paragraph}</p>)}</div>
        <details className="story-workshop">
          <summary>Prolonger ou renommer le conte</summary>
          <p><strong>Autre titre possible</strong><br />{inspiration.alternativeTitle}</p>
          <p>{inspiration.storyInvitation}</p>
        </details>
      </section>

      <section className="side-step" aria-labelledby="side-step-title">
        <p className="eyebrow">Le pas de côté · du conte à la clinique</p>
        <h3 id="side-step-title">{inspiration.sideStepTitle}</h3>
        <p className="bridge-intro">Un lien possible, à discuter ensemble.</p>
        <dl className="clinical-bridge">
          <div><dt>Dans le conte</dt><dd>{inspiration.clinicalBridge.image}</dd></div>
          <div><dt>Dans la pratique</dt><dd>{inspiration.clinicalBridge.practice}</dd></div>
          <div className="bridge-example"><dt>Un exemple fictif en pédopsychiatrie</dt><dd>{inspiration.clinicalBridge.example}</dd></div>
        </dl>
        <ol className="intervision-questions">
          {inspiration.questions.map((question, index) => <li key={question}>
            <span className="question-label">{index === 0 ? 'Ce que cela nous fait vivre' : 'Ce qui reste à entendre'}</span>
            <p>{question}</p>
          </li>)}
        </ol>
        <div className="return-to-situation"><h4>Revenir à la situation</h4><p>{inspiration.invitation}</p></div>
      </section>
      <p className="reading-boundary">Gardez ce qui résonne, déplacez ou écartez le reste. Aucune image n’attribue un rôle au jeune ou à ses proches.</p>
      <div className="reading-end">
        <button type="button" className="renew-button" onClick={onRenew}>Une autre piste avec cet émoji <span aria-hidden="true">↻</span></button>
        <button type="button" className="return-button" onClick={onReturn}>Choisir un autre émoji <span aria-hidden="true">↑</span></button>
      </div>
    </article>
  );
}
