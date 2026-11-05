import { useEffect, useRef, useState } from 'react';
import type { Archetype } from './data/archetypes';
import { ResonanceDisk } from './components/ResonanceDisk';
import { ArchetypeReading } from './components/ArchetypeReading';
import { UiIcon } from './components/UiIcon';
import type { EmergencePhase } from './components/ResonanceEmergence';
import { makeInspiration } from './data/resonance';
import type { ResonanceInspiration } from './data/resonance';

function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(query.matches);
    query.addEventListener('change', change);
    return () => query.removeEventListener('change', change);
  }, []);
  return reduced;
}

export default function App() {
  const [selected, setSelected] = useState<Archetype[]>([]);
  const [inspiration, setInspiration] = useState<ResonanceInspiration | null>(null);
  const [pending, setPending] = useState<ResonanceInspiration | null>(null);
  const [phase, setPhase] = useState<EmergencePhase>('idle');
  const [seed, setSeed] = useState(0);
  const [revision, setRevision] = useState(0);
  const recentPerspectives = useRef<string[]>([]);
  const [collective, setCollective] = useState(false);
  const [textOnly, setTextOnly] = useState(false);
  const [paused, setPaused] = useState(false);
  const [offline, setOffline] = useState(!navigator.onLine);
  const [cached, setCached] = useState(false);
  const help = useRef<HTMLDialogElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!selected.length) { setPhase('idle'); setInspiration(null); setPending(null); return; }
    const nextSeed = window.crypto.getRandomValues(new Uint32Array(1))[0];
    const next = makeInspiration(selected, recentPerspectives.current, nextSeed);
    setSeed(nextSeed);
    setPhase('brewing');
    setInspiration(null);
    setPending(next);
  }, [selected, revision]);

  useEffect(() => {
    if (!pending) return;
    const reveal = () => {
      recentPerspectives.current = [...recentPerspectives.current, pending.lensKey].slice(-64);
      setInspiration(pending);
      setPhase('revealed');
      setPending(null);
    };
    if (reducedMotion || textOnly) { reveal(); return; }
    const timeout = window.setTimeout(reveal, 2200);
    return () => window.clearTimeout(timeout);
  }, [pending, reducedMotion, textOnly]);

  function chooseSymbol(symbol: Archetype) {
    setPhase('brewing');
    setInspiration(null);
    setPending(null);
    setSelected(previous => previous.some(a => a.id === symbol.id)
      ? previous.filter(a => a.id !== symbol.id)
      : [...previous.slice(-2), symbol]);
    setPaused(false);
  }

  function renew() {
    document.getElementById('disque')?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
    setPhase('brewing');
    setInspiration(null);
    setPending(null);
    setRevision(value => value + 1);
    setPaused(false);
  }

  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    const ready = () => setCached(true);
    const unavailable = () => setCached(false);
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    window.addEventListener('pwa-ready', ready);
    window.addEventListener('pwa-error', unavailable);
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      void navigator.serviceWorker.ready.then(() => setCached(true));
    }
    return () => {
      window.removeEventListener('online', update); window.removeEventListener('offline', update);
      window.removeEventListener('pwa-ready', ready); window.removeEventListener('pwa-error', unavailable);
    };
  }, []);

  function returnToDisk() {
    const button = document.querySelector<HTMLButtonElement>('.archetype-choice.is-selected');
    document.getElementById('disque')?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
    button?.focus({ preventScroll: true });
  }

  return (
    <div className={`app ${collective ? 'collective-mode' : ''} ${textOnly ? 'text-mode' : ''}`}>
      <a className="skip-link" href="#disque">Aller au disque des résonances</a>
      <header className="site-header">
        <a href="#disque" className="brand" aria-label="Intervision résonante, aller au disque">
          <svg viewBox="0 0 42 42" fill="none" aria-hidden="true"><circle cx="17" cy="23" r="12" /><circle cx="25" cy="15" r="8" /><circle cx="17" cy="23" r="4" /></svg>
        </a>
        <button type="button" className="help-button" onClick={() => help.current?.showModal()} aria-label="Ouvrir le guide d’utilisation en staff"><UiIcon name="help" /></button>
      </header>

      <main>
        <section className="introduction" aria-labelledby="app-title">
          <h1 id="app-title"><span>La minute</span> d’<em>Intervision Résonante</em><span className="title-sign" aria-hidden="true">•°</span></h1>
          <p className="flash-edition">Version flash métaphorique</p>
        </section>

        <ResonanceDisk selected={selected} onSelect={chooseSymbol} onRenew={renew} phase={phase} seed={seed} paused={paused} onTogglePause={() => setPaused(value => !value)} reducedMotion={reducedMotion} textOnly={textOnly} />

        <section id="lecture" className="reading-region" aria-label="Le texte de la métaphore">
          {inspiration && <ArchetypeReading key={inspiration.id} inspiration={inspiration} onReturn={returnToDisk} onRenew={renew} />}
        </section>
      </main>

      <dialog ref={help} className="help-dialog" aria-labelledby="help-title" onClick={event => { if (event.target === event.currentTarget) help.current?.close(); }}>
        <div className="help-dialog-inner">
          <button type="button" className="dialog-close" onClick={() => help.current?.close()} aria-label="Fermer le guide"><UiIcon name="close" /></button>
          <p className="eyebrow">Un rituel, à votre rythme</p>
          <h2 id="help-title">Une minute pour rouvrir le regard.</h2>
          <p className="help-intro">Quand l’équipe se sent bloquée dans une situation complexe, un tirage d’images peut ouvrir une autre façon de la regarder. Aucun récit clinique n’est saisi.</p>
          <ol className="ritual-steps">
            <li><strong>Déposer.</strong> Un professionnel évoque une situation, sans saisir de donnée dans l’application.</li>
            <li><strong>Résonner.</strong> Chacun partage ce que cela lui fait éprouver, imaginer ou penser.</li>
            <li><strong>Choisir.</strong> Un, deux ou trois symboles attirent l’attention. Aucun consensus n’est nécessaire.</li>
            <li><strong>Rencontrer.</strong> Les symboles se relient. Des bulles font émerger une scène et une inspiration.</li>
            <li><strong>Se décaler.</strong> Une question ouvre l’échange. Un autre tirage renouvelle l’angle.</li>
            <li><strong>Revenir.</strong> Retrouver la situation. Qu’est-ce qui a changé dans notre manière de la regarder ?</li>
          </ol>
          <p className="help-boundary">La métaphore explore nos résonances de professionnels. Elle n’interprète ni le jeune ni sa famille et ne prescrit aucune conduite.</p>
          <details className="help-details display-options"><summary>Affichage</summary>
            <div className="view-controls" role="group" aria-label="Confort de lecture">
              <button type="button" className={`view-control ${collective ? 'is-active' : ''}`} aria-pressed={collective} onClick={() => setCollective(value => !value)}>Grands caractères</button>
              <button type="button" className={`view-control ${textOnly ? 'is-active' : ''}`} aria-pressed={textOnly} onClick={() => setTextOnly(value => !value)}>Sans animation</button>
            </div>
          </details>
          <details className="help-details"><summary>Le jeu des possibles</summary><p>Un symbole déjà choisi se retire au toucher. Un quatrième remplace le plus ancien. La flèche circulaire fait émerger un autre angle avec les mêmes symboles.</p><p>Les textes croisent des perspectives écrites et des rencontres métaphoriques composées pour les impasses d’équipe. Les derniers angles rencontrés sont écartés avant d’ouvrir un nouveau cycle. La scène et le halo varient avec le tirage. L’application n’analyse pas la situation évoquée.</p></details>
          <details className="help-details"><summary>Quelques repères</summary><p>Résonance et indisponibilité chez Hartmut Rosa ; jeu et espace potentiel chez Donald Winnicott ; relations et circularité chez Gregory Bateson. Ces inspirations ouvrent des perspectives, sans donner aux symboles une signification universelle.</p><p>Les scènes SVG sont procédurales et remplaçables par vos médias artistiques. La lecture à voix haute dépend des voix disponibles sur l’appareil. Hors ligne, elle nécessite une voix installée localement.</p></details>
          {(offline || cached) && <p className="offline-indicator" role="status">{offline ? 'Hors ligne' : 'Disponible hors ligne'}</p>}
          <button type="button" className="dialog-done" onClick={() => help.current?.close()}>Rencontrer le disque <UiIcon name="arrow" /></button>
        </div>
      </dialog>
    </div>
  );
}
