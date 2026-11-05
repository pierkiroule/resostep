import { useId } from 'react';
import type { ArchetypeId } from '../data/archetypes';

/** Boucles CSS périodiques de 6 à 8 s. Aucune image distante ni boucle JS. */
export function InkScene({ id, paused, fixed = false }: { id: ArchetypeId; paused: boolean; fixed?: boolean }) {
  const uid = useId().replace(/:/g, '');
  const wash = `${uid}-wash`;
  const glow = `${uid}-glow`;
  const grain = `${uid}-grain`;
  return (
    <svg viewBox="0 0 300 300" className={`ink-scene scene-${id} ${paused ? 'is-paused' : ''} ${fixed ? 'is-still' : ''}`} aria-hidden="true">
      <defs>
        <radialGradient id={wash}>
          <stop offset="0" stopColor="#b7cbd0" stopOpacity=".28" />
          <stop offset=".65" stopColor="#cedad9" stopOpacity=".16" />
          <stop offset="1" stopColor="#f7f9f8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={glow}>
          <stop offset="0" stopColor="#d9b08b" stopOpacity=".6" />
          <stop offset="1" stopColor="#ead5b9" stopOpacity="0" />
        </radialGradient>
        <filter id={grain} x="-12%" y="-12%" width="124%" height="124%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency=".055" numOctaves="3" seed="8" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.35" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <ellipse cx="150" cy="157" rx="130" ry="100" fill={`url(#${wash})`} className="scene-wash" />
      <g filter={`url(#${grain})`} className="ink-lines">
        {id === 'noeud' && <>
          <path d="M32 211C75 202 82 118 143 123C200 127 196 182 159 181C115 180 128 110 188 99L270 68" className="knot-thread knot-first" />
          <path d="M31 81C80 92 87 183 143 179C206 173 194 116 158 120C113 124 135 191 197 206L271 221" className="knot-thread knot-second" />
          <path d="M136 150q12-14 28 0l-7 15-17-2Z" fill="#b9896e" fillOpacity=".7" stroke="none" className="knot-held" />
          <path d="M46 210c26 1 35-28 47-43M213 96l44-20" strokeOpacity=".22" strokeWidth="7" />
        </>}
        {id === 'barque' && <>
          <path d="M24 177q35-16 68 0t70 0 70 0 65 0M9 204q40-17 78 0t80 0 80 0 70 0" className="water-current water-one" strokeOpacity=".35" />
          <path d="M-5 188q35 16 71 0t74 0 74 0 74 0M31 221q35 12 65 0t65 0 65 0" className="water-current water-two" strokeOpacity=".18" />
          <g className="boat-rock">
            <path d="M101 162q46 11 99-3l-18 24q-29 9-63-1Z" fill="#596b6d" fillOpacity=".8" strokeWidth="1.3" />
            <path d="M148 158V79M151 84q13 40 32 60l-31 5" fill="#b2c1be" fillOpacity=".5" />
            <path d="m144 95-24 52 24 4" fill="#e4e7de" fillOpacity=".8" strokeOpacity=".5" />
            <path d="M104 165q47 8 91-3" stroke="#edf0e9" strokeOpacity=".8" />
          </g>
          <path d="M40 121q27-18 54-6M205 105q28-10 46 2" strokeOpacity=".1" strokeWidth="11" />
        </>}
        {id === 'roseau' && <>
          <path d="M61 236q91-10 183 0" strokeOpacity=".13" />
          <g className="reed-soft">
            <path d="M119 235Q113 161 112 81M116 175q-35-13-39-31 34 4 38 22M117 199q29-20 35-39-29 9-36 30" />
            <path d="M111 106q-13-13-9-36 16 7 18 27" strokeWidth="4" stroke="#9c8f6c" strokeOpacity=".7" />
          </g>
          <g className="reed-firm">
            <path d="M191 235q-2-81-7-153M189 177q25-15 25-35-23 8-26 27M190 202q-26-9-32-29 27 8 31 21" />
            <path d="M184 105q-12-14-7-35 15 7 16 26" strokeWidth="4" stroke="#9c8f6c" strokeOpacity=".7" />
          </g>
          <path d="M28 129q61-18 116-4M155 139q65-14 115-6" strokeOpacity=".12" className="wind-line" />
        </>}
        {id === 'mycelium' && <>
          <g className="mycelium-base" strokeOpacity=".35">
            <path d="M150 164 119 140 91 151 61 128 32 131M119 140l-4-35-24-17M150 164l28-35 33-4 27-28 24 2M178 129l-9-40 15-25M150 164l-9 41-33 19-7 27M141 205l33 18 17 26M150 164l44 19 34-8 34 17M91 151l-14 35-37 6M211 125l21 21 32-3" />
          </g>
          <g className="mycelium-old">
            <path d="m61 128 11-32 19-8 4-26M77 186l21 5 18-18 34-9M194 183l-6 30-14 10" />
            <circle cx="72" cy="96" r="3" fill="#647e7f" stroke="none" />
          </g>
          <g className="mycelium-new" stroke="#9a7765">
            <path d="m91 151 7 40 10 33M119 140l37-26 22 15M211 125l-17 58 22 38 24 10M141 205l-25-32-27-1M178 129l38-38 28-19" />
            <circle cx="156" cy="114" r="3" fill="#9a7765" stroke="none" />
            <circle cx="216" cy="221" r="3" fill="#9a7765" stroke="none" />
          </g>
          <circle cx="150" cy="164" r="5" fill="#60777a" fillOpacity=".5" stroke="none" />
        </>}
        {id === 'graine' && <>
          <path d="M29 158q38-12 71-3t64 0 62 4 47-5L272 244H28Z" fill="#c5b3a1" fillOpacity=".11" stroke="none" className="soil-wash" />
          <path d="M30 157q38-12 70-3t64 0 62 4 47-5" strokeOpacity=".2" />
          <path d="M143 172q-4 18 8 28t-2 25m2-25 13 9m-15 7-10 6" className="seed-root" stroke="#a28b70" />
          <path d="M137 151q16-10 29 2-2 27-19 22-13-5-10-24Z" fill="#88755f" fillOpacity=".85" strokeWidth="1" />
          <path d="M151 154q-5 9-2 16" stroke="#d4bea2" strokeOpacity=".65" />
          <g className="soil-specks" strokeOpacity=".22">
            <path d="m58 185 8-2m28 34 7-3m102-31 8 3m19 31 6-3m-58 21 8 2m-53-45 5 2" />
          </g>
          <ellipse cx="184" cy="165" rx="76" ry="54" fill={`url(#${wash})`} stroke="none" className="seed-water" />
        </>}
        {id === 'cage' && <>
          <ellipse cx="204" cy="134" rx="90" ry="98" fill={`url(#${glow})`} stroke="none" className="outside-light" />
          <path d="M66 222h146V116c0-86-146-86-146 0ZM66 116h146M62 228h154M131 52V40q7-10 14 0v12" strokeOpacity=".55" />
          <path d="M89 115V219M115 115V219M141 115V219" strokeOpacity=".34" />
          <path d="M83 64v158M189 72v43M167 58v58" strokeOpacity=".2" />
          <g className="cage-door">
            <path d="M165 118h44v101h-44Z" fill="#fff" fillOpacity=".2" />
            <path d="M180 119v99m15-99v99" strokeOpacity=".4" />
          </g>
          <path d="M91 184h75" strokeOpacity=".65" />
          <g className="cage-bird">
            <path d="M116 166q-6-18 7-22 12-3 17 7l12 3-12 4q-3 22-24 16l-12 7 5-14Z" fill="#5d7072" stroke="none" />
            <path d="M125 175v9m6-9v9" strokeWidth="1" /><circle cx="134" cy="150" r="1" fill="#fff" stroke="none" />
          </g>
        </>}
        {id === 'phare' && <>
          <g className="lighthouse-light"><path d="M112 105 276 39V173Z" fill="#d4c19b" fillOpacity=".28" stroke="none" /></g>
          <path d="M42 233q15-29 48-20l30-8 28 31" fill="#9caaaa" fillOpacity=".3" strokeOpacity=".25" />
          <path d="M76 215 85 106h27l10 109Z" fill="#e3e7e2" fillOpacity=".8" />
          <path d="M80 105h37V89H80ZM78 89l20-13 21 13M98 76V63M88 141h28M85 173h34M91 212v-20h12v20" strokeOpacity=".6" />
          <g className="light-rock"><path d="m221 212 7-21 12 4 14 20" strokeOpacity=".45" /></g>
          <g className="light-sail"><path d="M200 160v-36l-18 29h28m-32 8q18 10 34-1" strokeOpacity=".55" /></g>
          <path d="M228 97q14-25 44-17v13" className="light-coast" strokeOpacity=".4" />
          <path d="M127 201q60-10 133 0M143 230q53-7 115-1" strokeOpacity=".12" />
        </>}
        {id === 'riviere' && <>
          <path d="M25 47q61 1 81 54t74 77 95 71M271 43q-67 13-77 68t-86 72-83 66" strokeWidth="24" strokeOpacity=".07" />
          <path d="M26 45q71 12 81 58t76 71 91 72M35 40q74 16 79 61t71 64 95 76M18 52q70 9 80 55t76 76 88 69" className="river-flow river-first" strokeOpacity=".44" />
          <path d="M268 43q-65 14-75 68t-86 73-80 64M278 45q-65 20-78 72t-84 75-82 61M257 40q-62 13-72 66t-87 70-80 64" className="river-flow river-second" stroke="#9c8170" strokeOpacity=".4" />
          <g className="river-swirl"><path d="M164 129c-39-26-62 18-33 36 24 16 50-13 30-26-15-10-28 11-13 15" strokeOpacity=".55" /></g>
          <path d="M55 85q12 7 13 16M225 207l13 8" strokeOpacity=".1" strokeWidth="7" />
        </>}
        {id === 'cercles' && <>
          <g className="circle-first">
            <circle cx="114" cy="150" r="66" strokeWidth="2.5" strokeOpacity=".7" fill="#7d969a" fillOpacity=".07" />
            <path d="M71 102q41-37 80 2" strokeWidth="5" strokeOpacity=".12" />
          </g>
          <g className="circle-second">
            <circle cx="186" cy="150" r="66" stroke="#a7806a" strokeWidth="2" strokeOpacity=".65" fill="#bc9a85" fillOpacity=".07" />
            <path d="M138 194q47 40 90-4" stroke="#a7806a" strokeWidth="5" strokeOpacity=".12" />
          </g>
        </>}
        {id === 'fissure' && <>
          <ellipse cx="154" cy="163" rx="52" ry="95" fill={`url(#${glow})`} stroke="none" className="crack-glow" />
          <g className="clay-left"><path d="M154 68q-65-8-87 44-22 57 9 101 28 34 79 17l-9-32 12-25-14-29 11-23-13-25Z" fill="#c0a392" fillOpacity=".5" strokeOpacity=".35" /></g>
          <g className="clay-right"><path d="M157 68q62 3 77 56 18 54-19 87-25 26-57 19l-9-32 12-25-14-29 11-23-13-25Z" fill="#c6ab98" fillOpacity=".42" strokeOpacity=".3" /></g>
          <path d="m150 76-7 20 13 25-11 23 14 29-12 25 10 25" stroke="#c6986b" strokeWidth="1.3" strokeOpacity=".7" />
          <path d="M79 237q76 9 147-3" strokeOpacity=".11" />
        </>}
        {id === 'plume' && <>
          <path d="M20 147q35-13 61-3M218 181q30-10 59-2" className="wind-line" strokeOpacity=".12" />
          <g className="feather-drift">
            <path d="M103 225q11-43 55-97 25-33 38-59-51 4-70 41-24 40-16 73 49-9 64-42 15-33 22-72" fill="#b2bfc0" fillOpacity=".4" strokeWidth="1.3" />
            <path d="m113 190 54-89M123 166l-2-29m8 19 34-11m-24-5-2-25m10 14 29-17m-19-1 1-16m-43 83 30-4" strokeOpacity=".35" />
          </g>
        </>}
        {id === 'pierres' && <>
          <path d="M43 244q111-6 215 0" strokeOpacity=".18" />
          <g className="stone-bottom"><path d="M77 233c-6-17 14-31 50-34 38-3 88 10 96 25 9 19-46 22-79 21-36-1-62-1-67-12Z" fill="#879697" fillOpacity=".65" strokeOpacity=".35" /></g>
          <g className="stone-middle"><path d="M108 189c-16-14-3-35 19-40 21-6 64-1 77 13 17 18-12 35-39 37-27 2-45-1-57-10Z" fill="#b4b8ac" fillOpacity=".8" strokeOpacity=".4" /></g>
          <g className="stone-top"><path d="M135 139c-15-10-7-31 7-39 14-9 33-6 40 7 8 15-4 31-19 35-12 3-19 2-28-3Z" fill="#ba9680" fillOpacity=".63" strokeOpacity=".4" /></g>
        </>}
      </g>
    </svg>
  );
}
