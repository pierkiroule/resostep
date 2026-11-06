import type { TaleInspiration } from '../data/tales';
import { emojiSymbols } from '../data/tales';
import { VoicePlayer } from './VoicePlayer';

export function ArchetypeReading({ inspiration, onReturn, onRenew, onSpeaking }: { inspiration: TaleInspiration; onReturn: () => void; onRenew: () => void; onSpeaking: (playing: boolean) => void }) {
  const questions = [...new Set(inspiration.questions)];
  return <article className="archetype-reading flash-reading tale-reading" aria-labelledby="reading-title">
    <header className="reading-header"><p className="reading-emojis" aria-label={inspiration.archetypes.map(item => item.name).join(', ')}>{inspiration.archetypes.map(item => <span key={item.id} aria-hidden="true">{emojiSymbols[item.id]}</span>)}</p><p className="eyebrow">Une proposition à explorer ensemble</p><h2 id="reading-title" tabIndex={-1}>Le pas de côté & le pas conté</h2></header>
    <section className="side-step" aria-labelledby="side-step-title"><p className="eyebrow">01 · Le pas de côté</p><h3 id="side-step-title">Déplacer notre regard</h3><p>{inspiration.sideStep}</p><ul>{questions.map(question => <li key={question}>{question}</li>)}</ul></section>
    <section className="tale-step" aria-labelledby="tale-title"><p className="eyebrow">02 · Le pas conté</p><p className="tale-label">Un titre et une piste de conte à prolonger</p><h3 id="tale-title">{inspiration.title}</h3><p className="alternative-title"><strong>Autre titre possible :</strong> {inspiration.alternativeTitle}</p>
      <VoicePlayer readingId={inspiration.id} paragraphs={[inspiration.title, ...inspiration.paragraphs]} onPlayingChange={onSpeaking} />
      <div className="projective-prose flash-prose">{inspiration.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><p className="tale-invitation">{inspiration.invitation}</p>
    </section>
    <p className="reading-boundary">Ces images ouvrent une discussion ; elles n’expliquent ni le jeune ni sa famille et ne prescrivent aucune conduite.</p>
    <div className="reading-end"><button type="button" className="renew-button" onClick={onRenew}>Une autre piste avec ces émojis ↻</button><button type="button" className="return-button" onClick={onReturn}>Modifier mes émojis ↑</button></div>
  </article>;
}
