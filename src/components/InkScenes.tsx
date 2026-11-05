import { useId, useMemo } from 'react';
import type { ArchetypeId } from '../data/archetypes';
import { artDirection } from '../data/artDirection';
import { seededRandom } from '../data/resonance';

/** Scènes d’encre et de pigments. Le grain reste fixe : seuls les gestes et les flux bougent. */
export function InkScene({ id, paused, fixed = false, seed = 1 }: { id: ArchetypeId; paused: boolean; fixed?: boolean; seed?: number }) {
  const uid = useId().replace(/:/g, '');
  const ref = (name: string) => `${uid}-${name}`;
  const paint = (name: string) => `url(#${ref(name)})`;
  const [primary, secondary, light] = artDirection[id];
  const details = useMemo(() => {
    const random = seededRandom(seed);
    const branches = Array.from({ length: 10 }, (_, i) => {
      const angle = i / 10 * Math.PI * 2 + random() * .25;
      const radius = 62 + random() * 38;
      const x = 150 + Math.cos(angle) * radius;
      const y = 155 + Math.sin(angle) * radius * .74;
      const endX = x + Math.cos(angle + .65) * (20 + random() * 15);
      const endY = y + Math.sin(angle + .65) * 23;
      return { x, y, path: `M150 155C${150 + Math.cos(angle - .4) * 28} ${155 + Math.sin(angle - .4) * 29} ${x - Math.cos(angle) * 24} ${y - Math.sin(angle) * 34} ${x} ${y}`, twig: `M${x} ${y}Q${x + 13} ${y - 8} ${endX} ${endY}` };
    });
    return { branches, flecks: Array.from({ length: 22 }, () => ({ x: 38 + random() * 224, y: 65 + random() * 176, r: .4 + random() * 1.2 })) };
  }, [seed]);
  const knotA = 'M28 205C80 197 91 113 145 122C198 130 197 178 156 177C116 176 129 115 187 98L270 65';
  const knotB = 'M28 78C80 87 87 186 144 180C200 174 196 118 158 122C117 127 134 192 195 210L270 230';

  return <svg viewBox="0 0 300 300" className={`ink-scene scene-${id} ${paused ? 'is-paused' : ''} ${fixed ? 'is-still' : ''}`} aria-hidden="true">
    <defs>
      <radialGradient id={ref('wash')}><stop offset="0" stopColor={primary} stopOpacity=".34" /><stop offset=".6" stopColor={primary} stopOpacity=".13" /><stop offset="1" stopColor={primary} stopOpacity="0" /></radialGradient>
      <radialGradient id={ref('light')}><stop offset="0" stopColor={light} stopOpacity=".78" /><stop offset=".45" stopColor={light} stopOpacity=".28" /><stop offset="1" stopColor={light} stopOpacity="0" /></radialGradient>
      <linearGradient id={ref('pigment')} x1="0" y1="0" x2="1" y2="1"><stop stopColor={primary} stopOpacity=".7" /><stop offset=".45" stopColor={secondary} stopOpacity=".45" /><stop offset="1" stopColor={primary} stopOpacity=".8" /></linearGradient>
      <linearGradient id={ref('beam')}><stop stopColor={light} stopOpacity=".68" /><stop offset="1" stopColor={light} stopOpacity="0" /></linearGradient>
      <linearGradient id={ref('feather')} x1="0" y1="1" x2="1" y2="0"><stop stopColor={secondary} stopOpacity=".08" /><stop offset=".55" stopColor={primary} stopOpacity=".48" /><stop offset="1" stopColor="#fff" stopOpacity=".75" /></linearGradient>
      <filter id={ref('ink')} x="-8%" y="-8%" width="116%" height="116%"><feTurbulence type="fractalNoise" baseFrequency=".07" numOctaves="2" seed="7" result="grain" /><feDisplacementMap in="SourceGraphic" in2="grain" scale=".8" xChannelSelector="R" yChannelSelector="G" /></filter>
      <filter id={ref('paper')} x="-12%" y="-12%" width="124%" height="124%">
        <feTurbulence type="fractalNoise" baseFrequency=".13" numOctaves="3" seed={seed % 97 + 1} result="grain" />
        <feColorMatrix in="grain" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .2 0" result="faint" />
        <feComposite in="faint" in2="SourceGraphic" operator="in" result="paint-grain" />
        <feBlend in="SourceGraphic" in2="paint-grain" mode="multiply" />
      </filter>
      <filter id={ref('soft')} x="-35%" y="-35%" width="170%" height="170%"><feGaussianBlur stdDeviation="3" /></filter>
    </defs>
    <path d="M42 154c-9-51 63-94 117-84 63-17 115 40 104 94 18 52-58 89-115 78-55 13-112-31-106-88Z" fill={paint('wash')} className="scene-wash" filter={paint('paper')} />
    <g fill={primary} opacity=".13" className="pigment-flecks">{details.flecks.map((f, i) => <circle key={i} cx={f.x} cy={f.y} r={f.r} />)}</g>
    <g className="ink-lines" filter={paint('ink')}>
      {id === 'noeud' && <>
        <g className="knot-first"><path d={knotA} className="knot-a" stroke={primary} strokeWidth="8" opacity=".1" /><path d={knotA} className="knot-a knot-thread" /></g>
        <path d="M137 145q14-15 29 1-2 16-18 21-14-6-11-22Z" fill={secondary} fillOpacity=".65" stroke="none" className="knot-held" />
        <g className="knot-second"><path d={knotB} className="knot-b" stroke={secondary} strokeWidth="7" opacity=".12" /><path d={knotB} className="knot-b knot-thread" /></g>
        <path d="m145 146 11 13" stroke="#fff" strokeOpacity=".65" strokeWidth="1" className="knot-held" />
      </>}
      {id === 'barque' && <>
        <path d="M22 125q28-34 63-14 24-22 54-3 31-27 59-8 38-14 77 20l-2 12H23Z" fill={primary} fillOpacity=".12" stroke="none" filter={paint('paper')} />
        <path d="M13 169q55-23 101-5 44-13 88-3 41-9 87 12l-5 62H19Z" fill={paint('wash')} stroke="none" />
        <g className="water-current water-one" stroke={primary}><path d="M10 184q32-10 68 0t72 0 72 0 70 0M28 213q30-10 65 0t68 0 69 0 68 0" opacity=".4" /><path d="M18 198q37-9 74 0t75 0 76 0" opacity=".2" strokeWidth="3" /></g>
        <g className="water-current water-two" stroke={secondary}><path d="M7 191q35 10 69 0t70 0 70 0 70 0M40 225q40 9 75 0t74 0 75 0" opacity=".35" /></g>
        <g className="boat-rock">
          <path d="M94 168q51 11 112-5l-23 24q-35 9-70-1Z" fill={paint('pigment')} strokeWidth="1.4" filter={paint('paper')} />
          <path d="M100 173q47 9 98-4m-82 13q31 6 62 0" stroke="#fff" strokeOpacity=".55" strokeWidth=".8" />
          <path d="M148 163V73" strokeWidth="2" /><path d="M151 80q13 37 40 66l-40 9Z" fill="#eeeee5" fillOpacity=".95" strokeOpacity=".65" /><path d="m144 92-28 57 28 4Z" fill={primary} fillOpacity=".14" strokeOpacity=".5" />
          <path d="M152 93q14 28 26 42M109 172l-26 27" strokeOpacity=".45" strokeWidth=".8" />
        </g>
        <path d="M25 138q83-12 150-1t104 0" stroke="#fff" strokeWidth="15" strokeOpacity=".6" filter={paint('soft')} className="mist-drift" />
      </>}
      {id === 'roseau' && <>
        <path d="M39 235q105-18 225 1" strokeOpacity=".15" />
        <g className="reed-soft">
          <path d="M112 239Q110 161 103 78" strokeWidth="2" /><path d="M109 177q-35-11-39-34 26 1 38 25M111 204q34-16 40-41-30 8-40 33" fill={primary} fillOpacity=".23" />
          <path d="M101 109q-16-13-9-40 17 7 20 25" fill={secondary} fillOpacity=".46" strokeWidth="1.1" />
          <path d="m97 79 11 8m-13 0 15 8m-13 0 12 8" strokeOpacity=".4" strokeWidth=".8" />
        </g>
        <g className="reed-firm">
          <path d="M193 239q-5-83-2-166" strokeWidth="2" /><path d="M190 172q27-15 29-41-26 8-29 33m1 39q-33-8-38-32 26 5 38 24" fill={primary} fillOpacity=".25" />
          <path d="M189 105q-15-17-5-41 17 10 15 29" fill={secondary} fillOpacity=".45" strokeWidth="1.1" /><path d="m185 75 11 9m-13-1 14 10m-13-1 11 10" strokeWidth=".8" strokeOpacity=".4" />
        </g>
        <g className="wind-line" stroke={primary} strokeOpacity=".25" strokeWidth=".8"><path d="M22 120q48-15 99-4M153 140q64-16 123-7M35 155q34-9 57-2" /></g>
        <path d="M80 241q22-7 34-1m57 0q26-8 40 0" strokeOpacity=".3" strokeWidth=".8" />
      </>}
      {id === 'mycelium' && <>
        <ellipse cx="150" cy="155" rx="87" ry="66" fill={paint('light')} stroke="none" opacity=".36" />
        {details.branches.map((branch, i) => <g key={i} className={i % 2 ? 'mycelium-new' : 'mycelium-old'}>
          <path d={branch.path} pathLength="1" className="root-filament" stroke={i % 2 ? secondary : primary} strokeWidth={i % 3 ? 1.4 : 2.2} />
          <path d={branch.twig} strokeWidth=".9" strokeOpacity=".65" />
          <circle cx={branch.x} cy={branch.y} r={i % 3 === 0 ? 3 : 1.6} fill={i % 2 ? secondary : primary} stroke="none" />
        </g>)}
        <path d="M67 118q33-9 50 19t43 32 49-30M64 186q38 13 63-13t59-19 49 17" strokeWidth=".8" strokeOpacity=".23" className="mycelium-crossings" />
        <circle cx="150" cy="155" r="6" fill={primary} fillOpacity=".35" strokeWidth=".8" className="root-center" />
      </>}
      {id === 'graine' && <>
        <path d="M22 150q46-12 85-4t76-2 98 9l-4 96H24Z" fill={secondary} fillOpacity=".16" stroke="none" filter={paint('paper')} className="soil-wash" />
        <path d="M25 151q44-9 86-4t77-1 90 9" strokeOpacity=".22" strokeWidth="1" />
        <ellipse cx="172" cy="145" rx="92" ry="63" fill={paint('light')} stroke="none" className="seed-water" />
        <path d="M147 172q-7 13 3 26t-8 32m7-30 16 12m-20 8-10 8m15-35-10 7" stroke={primary} strokeWidth="1.5" className="seed-root" pathLength="1" />
        <path d="M130 145q14-14 36-1 6 29-13 38-22 0-23-37Z" fill={paint('pigment')} strokeOpacity=".65" filter={paint('paper')} />
        <path d="M151 146q-12 14-2 29m-14-26q5-6 12-5" stroke={light} strokeOpacity=".9" strokeWidth="1.3" />
        <g className="soil-specks" stroke={primary} strokeWidth=".8" strokeOpacity=".35"><path d="m51 181 9-3m29 31 11-4m96-29 7 3m27 38 7-2m-57 20 10 1m-73-42 5 2m-41 38 4-2m159-41 5 2" /></g>
      </>}
      {id === 'cage' && <>
        <ellipse cx="212" cy="132" rx="87" ry="106" fill={paint('light')} stroke="none" className="outside-light" />
        <ellipse cx="135" cy="237" rx="78" ry="9" fill={primary} fillOpacity=".1" stroke="none" filter={paint('soft')} />
        <path d="M61 225V116c0-89 147-89 147 0v109M61 116h147M56 226h158M64 232h143M131 51V40q7-10 13 0v11" strokeOpacity=".65" />
        <path d="M85 116V224M111 116V224M137 116V224M163 116V224M85 68v49m26-61v59m26-64v64m26-58v58m24-45v45" strokeOpacity=".3" strokeWidth="1.1" />
        <g className="cage-door"><path d="M163 119h44v104h-44Z" fill="#fff" fillOpacity=".35" /><path d="M178 120v101m15-101v101" strokeOpacity=".45" strokeWidth="1" /><circle cx="171" cy="173" r="2" strokeWidth=".8" /></g>
        <path d="M87 185h79" strokeOpacity=".55" />
        <g className="cage-bird"><path d="M112 168q-6-19 8-23 13-4 19 9l11 3-12 4q-4 20-23 13l-16 10 7-16Z" fill={primary} strokeOpacity=".45" /><path d="M114 158q1 11 13 12" stroke="#fff" strokeOpacity=".6" /><path d="M121 174v11m8-11v11" strokeWidth="1" /><circle cx="133" cy="152" r="1.3" fill="#fff" stroke="none" /></g>
      </>}
      {id === 'phare' && <>
        <path d="M20 230q16-25 42-22l26-15 39 17 21 25" fill={paint('pigment')} strokeOpacity=".3" filter={paint('paper')} />
        <path d="M74 212 84 100h27l13 112Z" fill="#e9e8df" strokeOpacity=".75" /><path d="m86 106-8 99 10 6 7-106" fill={primary} fillOpacity=".18" stroke="none" />
        <path d="M79 100h38V84H79ZM76 84l22-14 22 14M98 70V58M84 137h30M82 174h36M91 211v-21h14v21" strokeOpacity=".75" strokeWidth="1.2" />
        <g className="lighthouse-light"><path d="M112 92 285 32V185Z" fill={paint('beam')} stroke="none" /><path d="M112 92 285 59M112 92l175 59" stroke={light} strokeOpacity=".3" strokeWidth=".8" /></g>
        <g className="light-coast"><path d="M226 83q16-24 49-17l6 35" stroke={primary} strokeOpacity=".5" /></g>
        <g className="light-sail"><path d="M201 162v-37l-20 29h29m-34 10q19 8 37-2" fill={primary} fillOpacity=".16" strokeOpacity=".6" /></g>
        <g className="light-rock"><path d="m224 215 8-22 14 4 17 22" fill={secondary} fillOpacity=".4" strokeOpacity=".55" /></g>
        <path d="M132 213q57-10 133 1M149 233q57-7 113 0" stroke={primary} strokeOpacity=".3" strokeWidth="1" />
        <path d="M134 133q58-13 145 0" stroke="#fff" strokeOpacity=".55" strokeWidth="20" filter={paint('soft')} className="mist-drift" />
      </>}
      {id === 'riviere' && <>
        <path d="M25 37c62 4 57 79 116 103 57 23 74 67 135 98M275 39c-61 22-66 70-116 102-40 26-78 47-131 103" fill="none" stroke={primary} strokeWidth="29" strokeOpacity=".15" filter={paint('paper')} />
        <g className="river-flow river-first" stroke={primary} strokeOpacity=".65"><path d="M23 40c65 6 61 79 120 103 52 21 76 69 131 96M32 34c65 11 57 76 116 100 58 24 73 68 132 100M17 46c61 1 58 79 117 105 56 25 74 67 132 97" /></g>
        <g className="river-flow river-second" stroke={secondary} strokeOpacity=".6"><path d="M276 37c-61 22-69 70-119 102-41 26-80 50-131 104M284 43c-61 24-65 70-116 102-43 27-80 48-133 106M267 33c-62 20-68 67-117 99-41 28-77 49-132 105" /></g>
        <g className="river-swirl"><path d="M170 130c-37-31-70 12-41 34 27 22 56-13 34-27-16-10-31 10-14 18" stroke={primary} strokeOpacity=".65" strokeWidth="1.8" /><path d="M176 135c11 28-35 46-57 17" stroke={secondary} strokeOpacity=".35" strokeWidth=".8" /></g>
        <path d="M68 84q12 8 15 18m139 102 14 8" stroke={light} strokeWidth="5" strokeOpacity=".55" />
      </>}
      {id === 'cercles' && <>
        <g className="circle-first enso"><circle cx="116" cy="150" r="65" fill={primary} fillOpacity=".13" stroke="none" /><path d="M149 94C91 63 31 126 55 182c25 58 109 42 125-9 12-39-7-66-31-79" stroke={primary} strokeWidth="3.5" strokeOpacity=".85" /><path d="M68 104q-39 47-1 91" strokeWidth="7" strokeOpacity=".12" /><path d="M102 86q24-6 46 7" strokeWidth="1.2" strokeOpacity=".6" /></g>
        <g className="circle-second enso"><circle cx="184" cy="150" r="65" fill={secondary} fillOpacity=".13" stroke="none" /><path d="M216 94c-56-32-111 13-97 70 16 62 96 63 121 11 18-37 4-65-24-81" stroke={secondary} strokeWidth="3" strokeOpacity=".85" /><path d="M155 208q55 24 86-30" strokeWidth="6" strokeOpacity=".1" /></g>
      </>}
      {id === 'fissure' && <>
        <ellipse cx="154" cy="150" rx="58" ry="95" fill={paint('light')} stroke="none" className="crack-glow" />
        <ellipse cx="150" cy="239" rx="69" ry="8" fill={primary} fillOpacity=".09" stroke="none" filter={paint('soft')} />
        <g className="clay-left"><path d="M151 65c-52-9-89 29-91 79-4 62 42 100 92 83l-8-29 13-28-15-26 12-26-14-23Z" fill={paint('pigment')} strokeOpacity=".35" filter={paint('paper')} /><path d="M81 119q-21 58 28 85" stroke="#fff" strokeOpacity=".35" strokeWidth="3" /></g>
        <g className="clay-right"><path d="M155 65c53-3 85 35 83 82-1 47-29 82-82 80l-9-29 13-28-15-26 12-26-14-23Z" fill={paint('pigment')} strokeOpacity=".3" filter={paint('paper')} /><path d="M204 95q27 30 16 74" stroke={secondary} strokeOpacity=".45" strokeWidth="1" /></g>
        <path d="m150 75-9 20 14 23-12 26 15 26-13 28 9 27" stroke={light} strokeWidth="2.3" strokeOpacity=".88" className="crack-light" />
      </>}
      {id === 'plume' && <>
        <g className="wind-line" stroke={primary} strokeWidth=".8" strokeOpacity=".25"><path d="M20 135q37-11 66-2M213 177q33-12 64-2M37 203q26 8 50 1" /></g>
        <g className="feather-drift">
          <path d="M99 233q16-46 61-100 25-32 40-68c-42-2-75 22-86 59-11 34-10 50-4 67 42-3 63-27 74-61 9-24 13-42 16-65Z" fill={paint('feather')} stroke={primary} strokeOpacity=".7" strokeWidth="1.25" filter={paint('paper')} />
          <path d="M100 231q26-68 96-158" strokeOpacity=".65" strokeWidth="1.4" />
          <g stroke={primary} strokeWidth=".8" strokeOpacity=".52"><path d="m113 189 38-9m-33-5-5-21m12 6 42-9m-33-5-6-26m15 13 33-13m-24-1-1-22m9 10 24-15m-16-1 1-11m-58 116 28-4m-33-6-3-14" /></g>
          <path d="M123 142q15-36 42-48" stroke="#fff" strokeWidth="4" strokeOpacity=".3" />
        </g>
      </>}
      {id === 'pierres' && <>
        <ellipse cx="150" cy="242" rx="98" ry="9" fill={primary} fillOpacity=".13" stroke="none" filter={paint('soft')} />
        <g className="stone-bottom"><path d="M62 227c-6-15 17-29 56-32 40-4 99 10 112 25 16 21-43 26-82 25-39-1-79-2-86-18Z" fill={paint('pigment')} strokeOpacity=".45" filter={paint('paper')} /><path d="M80 219q57-20 118 0" stroke="#fff" strokeOpacity=".35" strokeWidth="2.5" /></g>
        <g className="stone-middle"><path d="M104 185c-20-14-8-35 19-42 25-7 67-1 80 15 15 19-12 35-41 38-28 3-44-1-58-11Z" fill={secondary} fillOpacity=".72" strokeOpacity=".45" filter={paint('paper')} /><path d="M119 157q29-12 57-3" stroke="#fff" strokeOpacity=".4" strokeWidth="2" /></g>
        <g className="stone-top"><path d="M133 134c-16-10-7-30 8-39 18-11 39-4 43 10 6 17-11 31-27 33-11 2-17 0-24-4Z" fill={light} fillOpacity=".85" strokeOpacity=".5" filter={paint('paper')} /><path d="M142 105q12-9 25-2" stroke="#fff" strokeOpacity=".5" strokeWidth="2" /></g>
        <path d="M38 247q108-5 224 0" strokeOpacity=".2" strokeWidth=".8" />
      </>}
    </g>
  </svg>;
}
