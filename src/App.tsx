import { useEffect, useRef, useState } from 'react';
import type { Archetype } from './data/archetypes';
import { ResonanceDisk } from './components/ResonanceDisk';
import { ArchetypeReading } from './components/ArchetypeReading';
import { UiIcon } from './components/UiIcon';
import { makeMetaphor } from './data/metaphors';
import type { MetaphorInspiration } from './data/metaphors';
import { useAmbientMusic } from './hooks/useAmbientMusic';

export default function App() {
  const [selected, setSelected] = useState<Archetype | null>(null);
  const [inspiration, setInspiration] = useState<MetaphorInspiration | null>(null);
  const recent = useRef<string[]>([]);
  const [offline, setOffline] = useState(!navigator.onLine);
  const [cached, setCached] = useState(false);
  const help = useRef<HTMLDialogElement>(null);
  const music = useAmbientMusic();

  function generate(choice = selected) {
    if (!choice) return;
    const seed = window.crypto.getRandomValues(new Uint32Array(1))[0];
    const next = makeMetaphor(choice, recent.current, seed);
    recent.current = [...recent.current, next.lensKey];
    setInspiration(next);
    music.playChoice(choice.id, seed);
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
    const choice = document.querySelector<HTMLButtonElement>('.emoji-choice.is-selected')
      ?? document.querySelector<HTMLButtonElement>('.emoji-choice');
    choice?.focus({ preventScroll: true });
  }

  return <div className="app">
    <a className="skip-link" href="#disque">Aller au choix de l’émoji</a>
    <header className="site-header"><a href="#disque" className="brand" aria-label="Aller au choix de l’émoji">•°</a><div className="header-actions">
      {inspiration && <button type="button" className={`music-button ${music.active ? 'is-playing' : ''}`} onClick={music.toggle} aria-pressed={music.active} aria-label={music.active ? 'Couper la musique' : 'Activer la musique'}><UiIcon name="music" /><span>Musique</span></button>}
      <button type="button" className="help-button" onClick={() => help.current?.showModal()}><UiIcon name="help" /><span>Guide</span></button>
    </div></header>
    <main>
      <section className="introduction" aria-labelledby="app-title"><p className="eyebrow">Un générateur pour l’intervision résonante</p><h1 id="app-title">La minute de l’<em>Intervision Résonante</em> :<span className="app-subtitle">Le pas de côté métaphorique !</span></h1><p className="journey-intro">Une situation à l’esprit. Un seul émoji.<br />Une métaphore pour regarder la situation autrement et se questionner ensemble.</p></section>
      <ResonanceDisk selected={selected} onSelect={setSelected} onGenerate={() => generate()} onClear={() => setSelected(null)} />
      {inspiration && selected?.id !== inspiration.archetype.id && <p className="selection-update" role="status">Votre choix a changé. Proposez une métaphore pour cette image. Le texte ci-dessous garde son émoji d’origine.</p>}
      <section id="lecture" className="reading-region" aria-label="La métaphore et les questions">{inspiration && <ArchetypeReading key={inspiration.id} inspiration={inspiration} onReturn={returnToPicker} onRenew={() => generate(inspiration.archetype)} onSpeaking={music.setSpeaking} />}</section>
      {music.error && <p className="music-message" role="status">{music.error}</p>}
      <p className="app-note">Aucune situation clinique à saisir. Des métaphores proposées localement, sans compte ni envoi de données.</p>
    </main>
    <dialog ref={help} className="help-dialog" aria-labelledby="help-title" onClick={event => { if (event.target === event.currentTarget) help.current?.close(); }}><div className="help-dialog-inner">
      <button type="button" className="dialog-close" onClick={() => help.current?.close()} aria-label="Fermer le guide"><UiIcon name="close" /></button><p className="eyebrow">À votre rythme</p><h2 id="help-title">Une image pour ouvrir le regard.</h2>
      <ol className="ritual-steps"><li><strong>Évoquer.</strong> Partagez la situation à l’oral, sans la saisir ici.</li><li><strong>Choisir.</strong> Retenez un seul émoji qui résonne avec la situation.</li><li><strong>Déplier l’image.</strong> Lisez la métaphore et son lien possible avec la pratique.</li><li><strong>Échanger.</strong> Deux questions courtes invitent à regarder les éprouvés de l’équipe et la situation autrement.</li></ol>
      <p className="help-boundary">Aucun émoji ne représente automatiquement une personne. Les métaphores peuvent être déplacées, discutées ou écartées. Elles ne posent pas de diagnostic et ne recommandent aucune conduite thérapeutique.</p>
      <details className="help-details"><summary>Comment les métaphores sont-elles proposées ?</summary><p>Chaque émoji propose quatre métaphores filées, sans répétition avant un nouveau cycle. L’image se prolonge sans personnage ni intrigue. Les liens avec la pratique et les questions suivent l’angle affiché. Tout fonctionne sur l’appareil ; l’application ne connaît pas la situation évoquée.</p></details>
      <details className="help-details"><summary>Lecture et ambiance sonore</summary><p>Une ambiance musicale commence lors de la génération, inspirée de l’émoji choisi. Le bouton Musique coupe ou reprend le son ; la lecture vocale en diminue le volume.</p><label className="volume-control" htmlFor="music-volume"><span>Volume musical <output>{Math.round(music.volume * 100)} %</output></span><input id="music-volume" type="range" min="0" max="100" value={Math.round(music.volume * 100)} onChange={event => music.changeVolume(Number(event.target.value) / 100)} /></label></details>
      {(offline || cached) && <p className="offline-indicator" role="status">{offline ? 'Hors ligne' : 'Disponible hors ligne'}</p>}
      <button type="button" className="dialog-done" onClick={() => help.current?.close()}>Choisir mon émoji <span aria-hidden="true">→</span></button>
    </div></dialog>
  </div>;
}
