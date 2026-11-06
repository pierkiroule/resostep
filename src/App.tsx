import { useEffect, useRef, useState } from 'react';
import type { Archetype } from './data/archetypes';
import { ResonanceDisk } from './components/ResonanceDisk';
import { ArchetypeReading } from './components/ArchetypeReading';
import { UiIcon } from './components/UiIcon';
import { makeTale } from './data/tales';
import type { TaleInspiration } from './data/tales';
import { useAmbientMusic } from './hooks/useAmbientMusic';

export default function App() {
  const [selected, setSelected] = useState<Archetype[]>([]);
  const [inspiration, setInspiration] = useState<TaleInspiration | null>(null);
  const recent = useRef<string[]>([]);
  const [message, setMessage] = useState('');
  const [offline, setOffline] = useState(!navigator.onLine);
  const [cached, setCached] = useState(false);
  const help = useRef<HTMLDialogElement>(null);
  const music = useAmbientMusic();

  function toggleEmoji(item: Archetype) {
    setMessage('');
    if (selected.some(choice => choice.id === item.id)) {
      setSelected(selected.filter(choice => choice.id !== item.id));
    } else if (selected.length === 3) {
      setMessage('Vous avez déjà choisi 3 émojis. Retirez-en un pour en ajouter un autre.');
    } else {
      setSelected([...selected, item]);
    }
  }

  function generate(choices = selected) {
    if (choices.length === 0) return;
    const seed = window.crypto.getRandomValues(new Uint32Array(1))[0];
    const next = makeTale(choices, recent.current, seed);
    recent.current = [...recent.current, next.lensKey];
    setInspiration(next);
    setMessage('');
    music.playChoice(choices[0].id, seed);
  }

  useEffect(() => {
    if (!inspiration) return;
    const title = document.getElementById('reading-title');
    title?.focus({ preventScroll: true });
    title?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, [inspiration]);

  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    const ready = () => setCached(true);
    const unavailable = () => setCached(false);
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    window.addEventListener('pwa-ready', ready);
    window.addEventListener('pwa-error', unavailable);
    return () => {
      window.removeEventListener('online', update); window.removeEventListener('offline', update);
      window.removeEventListener('pwa-ready', ready); window.removeEventListener('pwa-error', unavailable);
    };
  }, []);

  function returnToPicker() {
    document.getElementById('disque')?.scrollIntoView({ behavior: 'instant', block: 'start' });
    document.querySelector<HTMLButtonElement>('.emoji-choice.is-selected, .emoji-choice')?.focus({ preventScroll: true });
  }

  return <div className="app">
    <a className="skip-link" href="#disque">Aller au choix des émojis</a>
    <header className="site-header"><a href="#disque" className="brand" aria-label="Aller au choix des émojis">•°</a><div className="header-actions">
      {inspiration && <button type="button" className={`music-button ${music.active ? 'is-playing' : ''}`} onClick={music.toggle} aria-pressed={music.active} aria-label={music.active ? 'Couper la musique' : 'Activer la musique'}><UiIcon name="music" /><span>Musique</span></button>}
      <button type="button" className="help-button" onClick={() => help.current?.showModal()}><UiIcon name="help" /><span>Guide</span></button>
    </div></header>
    <main>
      <section className="introduction" aria-labelledby="app-title"><p className="eyebrow">Un générateur pour l’intervision résonante</p><h1 id="app-title">La minute d’<em>Intervision Résonante</em><span className="app-subtitle">Le pas de côté métaphorique qui inspire<span aria-hidden="true">•°</span></span></h1><p className="journey-intro">Une situation à l’esprit. De 1 à 3 émojis.<br />Un autre regard et une histoire à inventer ensemble.</p></section>
      <ResonanceDisk selected={selected} onToggle={toggleEmoji} onGenerate={() => generate()} onClear={() => { setSelected([]); setMessage('Sélection effacée. Choisissez de 1 à 3 émojis.'); }} message={message} />
      {inspiration && selected.map(item => item.id).join() !== inspiration.archetypes.map(item => item.id).join() && <p className="selection-update" role="status">Votre sélection a changé. Générez une nouvelle piste pour l’utiliser ; le texte ci-dessous conserve ses émojis d’origine.</p>}
      <section id="lecture" className="reading-region" aria-label="Le pas de côté et le pas conté">{inspiration && <ArchetypeReading key={inspiration.id} inspiration={inspiration} onReturn={returnToPicker} onRenew={() => generate(inspiration.archetypes)} onSpeaking={music.setSpeaking} />}</section>
      {music.error && <p className="music-message" role="status">{music.error}</p>}
      <p className="app-note">Aucune situation clinique à saisir. Des récits composés localement, sans compte ni envoi de données.</p>
    </main>
    <dialog ref={help} className="help-dialog" aria-labelledby="help-title" onClick={event => { if (event.target === event.currentTarget) help.current?.close(); }}><div className="help-dialog-inner">
      <button type="button" className="dialog-close" onClick={() => help.current?.close()} aria-label="Fermer le guide"><UiIcon name="close" /></button><p className="eyebrow">À votre rythme</p><h2 id="help-title">Un pas de côté, un pas conté.</h2>
      <ol className="ritual-steps"><li><strong>Évoquer.</strong> Partagez une situation à l’oral, sans la saisir ici.</li><li><strong>Choisir.</strong> Retenez de 1 à 3 émojis. Touchez un émoji sélectionné pour le retirer.</li><li><strong>Se décaler.</strong> Le pas de côté propose un regard et des questions pour l’équipe.</li><li><strong>Conter.</strong> Le pas conté suggère deux titres et une trame à prolonger. Les images choisies habitent le même paysage.</li><li><strong>Revenir.</strong> Qu’est-ce que cette histoire change dans notre façon de raconter la situation ?</li></ol>
      <p className="help-boundary">Aucun émoji ne représente automatiquement une personne. Les métaphores peuvent être déplacées, discutées ou écartées. Elles ne posent pas de diagnostic et ne recommandent aucune conduite thérapeutique.</p>
      <details className="help-details"><summary>Comment les récits sont-ils composés ?</summary><p>Le générateur fonctionne sur l’appareil à partir de motifs écrits. Il les réunit dans une trame commune et varie le cadre, les titres et la fin. Il ne connaît pas la situation clinique et n’en propose aucune analyse. La variété est finie ; l’équipe invente la suite.</p></details>
      <details className="help-details"><summary>Lecture et ambiance sonore</summary><p>Une ambiance musicale commence lors de la génération, inspirée du premier émoji choisi. Le bouton Musique coupe ou reprend le son ; la lecture vocale en diminue le volume.</p><label className="volume-control" htmlFor="music-volume"><span>Volume musical <output>{Math.round(music.volume * 100)} %</output></span><input id="music-volume" type="range" min="0" max="100" value={Math.round(music.volume * 100)} onChange={event => music.changeVolume(Number(event.target.value) / 100)} /></label></details>
      {(offline || cached) && <p className="offline-indicator" role="status">{offline ? 'Hors ligne' : 'Disponible hors ligne'}</p>}
      <button type="button" className="dialog-done" onClick={() => help.current?.close()}>Choisir mes émojis <span aria-hidden="true">→</span></button>
    </div></dialog>
  </div>;
}
