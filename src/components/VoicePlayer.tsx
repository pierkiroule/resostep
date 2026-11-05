import { useCallback, useEffect, useRef, useState } from 'react';
import { UiIcon } from './UiIcon';

/** Petits énoncés successifs : limite les interruptions des longs textes sur mobile. */
function voiceChunks(paragraphs: string[]): string[] {
  return paragraphs.flatMap(paragraph => {
    const sentences = paragraph.match(/[^.!?…]+[.!?…]*/g) ?? [paragraph];
    return sentences.flatMap(sentence => {
      const words = sentence.trim().split(/\s+/);
      const chunks: string[] = [];
      let chunk = '';
      words.forEach(word => {
        if (chunk.length + word.length > 190) { chunks.push(chunk); chunk = ''; }
        chunk += `${chunk ? ' ' : ''}${word}`;
      });
      if (chunk) chunks.push(chunk);
      return chunks;
    });
  });
}

export function VoicePlayer({ readingId, paragraphs, audioSrc, onPlayingChange }: { readingId: string; paragraphs: string[]; audioSrc?: string; onPlayingChange?: (playing: boolean) => void }) {
  const [playing, setPlaying] = useState(false);
  const [supported, setSupported] = useState(() => 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window);
  const [error, setError] = useState('');
  const [audioFailed, setAudioFailed] = useState(false);
  const serial = useRef(0);
  const audio = useRef<HTMLAudioElement | null>(null);
  const speaking = useRef(false);
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null);
  const voices = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    onPlayingChange?.(playing);
    return () => { if (playing) onPlayingChange?.(false); };
  }, [playing, onPlayingChange]);

  const stop = useCallback(() => {
    serial.current += 1;
    if (audio.current) { audio.current.pause(); audio.current.removeAttribute('src'); audio.current.load(); audio.current = null; }
    if (speaking.current && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    speaking.current = false;
    currentUtterance.current = null;
    setPlaying(false);
  }, []);

  useEffect(() => {
    const available = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    setSupported(available);
    if (!available) return;
    const update = () => { voices.current = window.speechSynthesis.getVoices(); };
    update();
    window.speechSynthesis.addEventListener('voiceschanged', update);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', update);
  }, []);

  useEffect(() => {
    setError(''); setAudioFailed(false);
    return stop;
  }, [readingId, stop]);

  useEffect(() => {
    // Une lecture ne se poursuit pas après avoir quitté la page.
    window.addEventListener('pagehide', stop);
    return () => window.removeEventListener('pagehide', stop);
  }, [stop]);

  function play() {
    if (playing) { stop(); return; }
    setError('');
    const token = ++serial.current;
    if (audioSrc && !audioFailed) {
      const player = new Audio(audioSrc);
      audio.current = player;
      const fail = () => {
        if (serial.current !== token) return;
        setPlaying(false); setAudioFailed(true);
        setError(supported ? 'L’enregistrement est indisponible. Relancez pour utiliser la voix du navigateur.' : 'Cet enregistrement ne peut pas être lu sur cet appareil.');
      };
      player.onended = () => { if (serial.current === token) setPlaying(false); };
      player.onerror = fail;
      setPlaying(true);
      void player.play().catch(fail);
      return;
    }
    if (!supported) return;
    const chunks = voiceChunks(paragraphs);
    const french = voices.current.filter(voice => /^fr(?:-|_)/i.test(voice.lang));
    const voice = french.find(v => v.localService && /fr[-_]FR/i.test(v.lang)) ?? french.find(v => v.localService) ?? french[0];
    setPlaying(true);
    speaking.current = true;
    let index = 0;
    function next() {
      if (serial.current !== token) return;
      if (index >= chunks.length) { speaking.current = false; currentUtterance.current = null; setPlaying(false); return; }
      const utterance = new SpeechSynthesisUtterance(chunks[index++]);
      utterance.lang = 'fr-FR'; utterance.rate = .87; utterance.pitch = 1;
      if (voice) utterance.voice = voice;
      currentUtterance.current = utterance;
      utterance.onend = next;
      utterance.onerror = event => {
        if (serial.current !== token || event.error === 'canceled' || event.error === 'interrupted') return;
        speaking.current = false; setPlaying(false);
        setError(event.error === 'network' ? 'La voix choisie nécessite une connexion. Une voix française installée sur l’appareil permet une lecture hors ligne.' : 'La lecture vocale est indisponible. Vérifiez les voix installées et le volume de l’appareil.');
      };
      window.speechSynthesis.speak(utterance);
    }
    window.speechSynthesis.cancel();
    next();
  }

  const available = supported || (!!audioSrc && !audioFailed);
  return <div className="voice-player">
    <button type="button" className={`voice-button ${playing ? 'is-playing' : ''}`} onClick={play} disabled={!available} aria-pressed={playing} aria-label={playing ? 'Arrêter la lecture' : 'Écouter l’inspiration'}>
      <UiIcon name={playing ? 'stop' : 'sound'} /><span>{playing ? 'Arrêter' : 'Écouter'}</span>
      {playing && <span className="voice-dots" aria-hidden="true"><i /><i /><i /></span>}
    </button>
    <span className="sr-only" role="status">{playing ? 'Lecture en cours' : ''}</span>
    {(!available || error) && <p className="voice-message" role="status">{error || 'La lecture vocale n’est pas disponible dans ce navigateur.'}</p>}
  </div>;
}
