// Hooks
import { useEffect } from "react";
import useOctave from "../../hooks/useOctave";

// Components
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";

// Utils
import playNote from "../../utils/soundUtils";

// CSS
import "../../css/Keyboard.css";

const Keyboard = () => {
  const [octave, changeOctave] = useOctave();

  const keyMap = {
    "a": "C",
    "w": "C#",
    "s": "D",
    "e": "D#",
    "d": "E",
    "f": "F",
    "t": "F#",
    "g": "G",
    "y": "G#",
    "h": "A",
    "u": "A#",
    "j": "B"
  };

  const handleKeyDown = e => {
    const key = e.key.toLowerCase();
    if (!isNaN(key)) {
      changeOctave(Number(key));
    } else if (keyMap[key]) {
      playNote(keyMap[key], octave);
    }
  };

  const incrementOctave = () => {
    if (octave < 8) changeOctave(octave + 1);
  }

  const decrementOctave = () => {
    if (octave > 0) changeOctave(octave - 1);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [octave]);
  
  return(
    <section className="section__keyboard">
      <div className="keyboard__container">
        <div className="keyboard__header">
          <div className="keyboard__controls">
            <button onClick={decrementOctave} disabled={octave === 0}>-</button>
            <h3>Octava: {octave}</h3>
            <button onClick={incrementOctave} disabled={octave === 8}>+</button>
          </div>
        </div>
        <article className="keyboard__keys">
          <div className="keys__container">
            <WhiteKey eKey="A" note="C" octave={octave} />
            <BlackKey eKey="W" note="C#" octave={octave} />
            <WhiteKey eKey="S" note="D" octave={octave} />
            <BlackKey eKey="E" note="D#" octave={octave} />
            <WhiteKey eKey="D" note="E" octave={octave} />
            <WhiteKey eKey="F" note="F" octave={octave} />
            <BlackKey eKey="T" note="F#" octave={octave} />
            <WhiteKey eKey="G" note="G" octave={octave} />
            <BlackKey eKey="Y" note="G#" octave={octave} />
            <WhiteKey eKey="H" note="A" octave={octave} />
            <BlackKey eKey="U" note="A#" octave={octave} />
            <WhiteKey eKey="J" note="B" octave={octave} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Keyboard;