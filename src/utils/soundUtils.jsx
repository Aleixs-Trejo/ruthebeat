import * as Tone from "tone";

const playNote = (note, octave) => {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(`${note}${octave}`, "8n");
};

export default playNote;