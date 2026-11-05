import type { ReactNode } from 'react';
import type { Archetype, ArchetypeId } from '../data/archetypes';

/** Une même écriture d’encre pour les douze glyphes. */
const glyphs: Record<ArchetypeId, ReactNode> = {
  noeud: <>
    <path d="M5 37c9-1 9-22 22-21 12 1 11 16 1 16-10 0-9-14 3-18L43 8" />
    <path d="M5 10c10 2 10 23 23 22 12-1 10-16 1-16-10 0-8 16 4 20l10 4" />
    <path d="m7 36 5-3m25-21 5-3" strokeWidth="3" opacity=".2" />
  </>,
  barque: <>
    <path d="M8 31q15 4 33-1l-7 9q-11 3-20-1Z" strokeWidth="1.7" />
    <path d="M23 30V6m3 3 11 17-11 1M20 12l-9 15h9" />
    <path d="M5 43q9-3 17-1t20-1" strokeWidth="1.1" opacity=".5" />
  </>,
  roseau: <>
    <path d="M17 43q1-19-5-31M32 43q-1-19 2-32M16 33Q6 28 5 22q11 2 11 9m16 2q9-6 10-12-8 2-10 9" />
    <path d="M12 15q-6-5-4-11 6 2 7 9M34 14q-4-6 0-11 5 4 3 9" fill="currentColor" strokeWidth=".8" />
  </>,
  mycelium: <>
    <path d="m24 24-9-7-8 3-4-6m12 3-2-9 6-5m5 21 8-9 10-3m-10 3-1-9m-7 18 13 7 8-3M24 24l-3 12-9 7m9-7 9 8M7 20 5 31l7 6m25-6 2 9" />
    <path d="m15 17 6 19m11-21 5 16M7 20l17 4" strokeWidth="1" opacity=".5" />
    <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="13" cy="8" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="39" cy="40" r="1.3" fill="currentColor" stroke="none" />
  </>,
  graine: <>
    <path d="M15 19Q24 5 35 14q2 17-11 19-12-1-9-14Z" />
    <path d="M29 15q-11 8-6 18l3 5-3 7m2-7-6 3m5-9 7 5" strokeWidth="1.35" />
    <path d="m7 34 5-1m23 8 5-1" strokeWidth="1" opacity=".4" />
  </>,
  cage: <>
    <path d="M7 39V19C7 0 33 0 33 19v20M7 19h26M5 40h30M19 6V2m-3 0h6M13 20v18m7-18v18" />
    <path d="m33 20 10-5v20l-10 4M12 31h16" strokeWidth="1.4" />
    <path d="M17 26q-1-7 4-7 4 0 5 4l4 1-5 2q-3 7-8 0l-4 3" fill="currentColor" strokeWidth=".5" />
  </>,
  phare: <>
    <path d="m16 42 3-26h10l4 26M12 43h25M17 16V9h14v7M15 9l9-5 10 5M24 4V1M19 26h12M22 41v-6h5v6" />
    <path d="m12 12-9-3m9 7-8 2M36 12l9-3m-9 7 8 2" strokeWidth="1.2" opacity=".65" />
  </>,
  riviere: <>
    <path d="M10 4c24 11-7 16 10 29 6 4 13 4 13 11M22 4c23 11-9 16 9 29 6 4 10 5 10 11" />
    <path d="M16 4c25 11-8 16 10 29 6 4 11 5 11 11" strokeWidth=".9" opacity=".4" />
    <path d="M5 29q4 5 9 7M35 8l4 4" strokeWidth="1.2" opacity=".5" />
  </>,
  cercles: <>
    <path d="M24 13C14 4 1 14 5 27c4 12 22 12 23-2 1-5-1-9-4-12Z" strokeWidth="1.9" />
    <path d="M28 10c-13 0-18 17-7 24 10 7 24-2 22-13-1-6-7-11-15-11Z" strokeWidth="1.5" />
    <path d="M6 18q-3 12 8 16" strokeWidth="3.5" opacity=".15" />
  </>,
  fissure: <>
    <path d="M20 5C7 6 3 18 7 31c3 11 21 16 30 7 10-10 8-27-4-31-4-2-8-2-13-2Z" />
    <path d="m25 6-5 9 7 8-6 7 5 12m-5-12-5-2" strokeWidth="1.6" />
    <path d="M9 34q5 10 20 9" strokeWidth="2.7" opacity=".16" />
  </>,
  plume: <>
    <path d="M12 44q3-12 15-26L39 3c-17 0-29 13-27 31 16-1 23-13 27-31" />
    <path d="m18 30 13-17m-10 12-1-9m4 6 9-3m-17 13 8-1m4-15V9" strokeWidth="1.1" opacity=".7" />
  </>,
  pierres: <>
    <path d="M6 39c-1-6 7-9 17-9 11-1 21 4 20 9-2 6-35 6-37 0Z" />
    <path d="M13 26c-6-6 1-12 10-12 8 0 16 4 14 9-2 6-20 8-24 3Z" />
    <path d="M21 12c-5-2-3-9 2-10 5-1 10 2 8 6-1 5-7 6-10 4Z" />
  </>,
};

export function ArchetypeSymbol({ archetype }: { archetype: Archetype }) {
  return (
    <svg viewBox="0 0 48 48" className="symbol-drawing" aria-hidden="true">
      <g className="glyph-pigment" stroke="none">
        <path d="M9 17q2-11 13-8 12-5 17 8 8 11-4 18-8 10-20 2-14-3-6-20Z" fill="#c78d73" opacity=".2" />
        <path d="M11 19q7-12 19-6 10 2 8 14-3 13-17 10Q5 35 11 19Z" fill="#9db8bc" opacity=".18" />
      </g>
      <g className="glyph-ink">{glyphs[archetype.symbol]}</g>
    </svg>
  );
}
