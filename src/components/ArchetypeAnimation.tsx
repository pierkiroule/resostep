import { useEffect, useRef, useState } from 'react';
import type { Archetype } from '../data/archetypes';
import { InkScene } from './InkScenes';

export function ArchetypeAnimation({ archetype, paused, reducedMotion, seed = 1 }: { archetype: Archetype; paused: boolean; reducedMotion: boolean; seed?: number }) {
  const [failed, setFailed] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => setFailed(false), [archetype.id]);
  const media = archetype.media;
  useEffect(() => {
    if (!video.current) return;
    if (paused || reducedMotion) video.current.pause();
    else void video.current.play().catch(() => setFailed(true));
  }, [paused, reducedMotion, archetype.id]);
  return (
    <div className="archetype-art" role="img" aria-label={archetype.animationDescription}>
      {!media || failed || (reducedMotion && (media.type === 'image' || !media.poster)) || (paused && media.type === 'image') ? (
        <InkScene id={archetype.id} paused={paused} fixed={reducedMotion} seed={seed} />
      ) : media.type === 'video' ? (
        reducedMotion ? <img src={media.poster} alt="" onError={() => setFailed(true)} /> :
          <video ref={video} key={media.src} src={media.src} poster={media.poster} autoPlay={!paused} loop muted playsInline preload="auto" onError={() => setFailed(true)} />
      ) : <img key={media.src} src={media.src} alt="" onError={() => setFailed(true)} />}
    </div>
  );
}
