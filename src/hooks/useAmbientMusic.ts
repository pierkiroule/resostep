import { useCallback, useEffect, useRef, useState } from 'react';
import type { ArchetypeId } from '../data/archetypes';
import { AmbientScore } from '../audio/score';

export function useAmbientMusic() {
  const engine = useRef<AmbientScore | null>(null);
  const current = useRef<{ id: ArchetypeId; seed: number } | null>(null);
  const muted = useRef(false);
  const serial = useRef(0);
  const [active, setActive] = useState(false);
  const [volume, setVolume] = useState(.64);
  const [error, setError] = useState('');
  const ducked = useRef(false);
  const level = useRef(.64);

  const playChoice = useCallback((id: ArchetypeId, seed: number) => {
    current.current = { id, seed };
    if (muted.current) return;
    const token = ++serial.current;
    setError('');
    try {
      if (!engine.current) engine.current = new AmbientScore();
      engine.current.setVolume(level.current); engine.current.setDucked(ducked.current);
      void engine.current.play(id, seed).then(() => {
        if (serial.current === token) setActive(true);
      }).catch(() => {
        if (serial.current !== token) return;
        engine.current?.stop(); engine.current = null; setActive(false);
        setError('La musique n’a pas pu démarrer. Touchez le bouton Musique pour réessayer.');
      });
    } catch {
      setActive(false); setError('L’ambiance sonore n’est pas disponible dans ce navigateur.');
    }
  }, []);

  const toggle = useCallback(() => {
    if (engine.current && !muted.current) {
      muted.current = true; serial.current++;
      engine.current.stop(); engine.current = null; setActive(false); setError('');
    } else {
      muted.current = false;
      if (current.current) playChoice(current.current.id, current.current.seed);
    }
  }, [playChoice]);

  const changeVolume = useCallback((value: number) => {
    level.current = value; setVolume(value); engine.current?.setVolume(value);
  }, []);
  const setSpeaking = useCallback((value: boolean) => {
    ducked.current = value; engine.current?.setDucked(value);
  }, []);

  useEffect(() => {
    const visibility = () => {
      void engine.current?.setVisible(!document.hidden).catch(() => {
        engine.current?.stop(); engine.current = null; setActive(false);
        setError('Touchez Musique pour reprendre l’ambiance sonore.');
      });
    };
    const stop = () => { serial.current++; engine.current?.stop(); engine.current = null; setActive(false); };
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('pagehide', stop);
    return () => { document.removeEventListener('visibilitychange', visibility); window.removeEventListener('pagehide', stop); stop(); };
  }, []);
  return { active, volume, error, playChoice, toggle, changeVolume, setSpeaking };
}
