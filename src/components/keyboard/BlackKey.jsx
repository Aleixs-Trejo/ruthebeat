// Utils
import playNote from "../../utils/soundUtils";

// CSS

// eslint-disable-next-line react/prop-types
const BlackKey = ({ note, octave, eKey }) => {
  return(
    <div
      className="key key__black"
      onClick={() => playNote(note, octave)}
    >
      <div className="key__content">
        <span>{eKey}</span>
        <span>{note}</span>
      </div>
    </div>
  );
};

export default BlackKey;