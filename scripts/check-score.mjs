import assert from 'node:assert/strict';
import { musicPalettes, phraseEvents, midiFrequency } from '../src/audio/score.ts';
const pitchClasses=new Set([2,4,6,9,11]);
const signatures=new Set();
let events=0;
for(const [id,palette] of Object.entries(musicPalettes)) {
  signatures.add([palette.tempo,palette.motif.join(','),palette.harmonic.join(',')].join('|'));
  let previous=null;
  for(let phrase=0;phrase<12;phrase++) {
    const start=phrase*8*60/palette.tempo;
    const notes=phraseEvents(id,phrase,1234,start);
    assert.deepEqual(notes,phraseEvents(id,phrase,1234,start));
    assert(notes.some(note=>note.kind==='pad'));
    assert(notes.some(note=>note.kind==='melody'));
    for(const note of notes){
      assert(note.time>=start&&note.duration>0&&note.gain>0&&note.gain<.15);
      assert(note.midi>=45&&note.midi<=88);
      assert(pitchClasses.has(note.midi%12));
      assert(Math.abs(note.pan)<=1);
      assert(Number.isFinite(midiFrequency(note.midi)));events++;
    }
    if(previous) assert.notDeepEqual(notes.map(n=>[n.midi,n.gain,n.kind]),previous);
    previous=notes.map(n=>[n.midi,n.gain,n.kind]);
  }
}
assert.equal(signatures.size,12);
console.log(`Musique : 12 signatures distinctes, ${events} événements vérifiés, harmonie commune et phrases évolutives.`);
