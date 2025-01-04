import { useState } from 'react'

const useOctave = () => {
  const [octave, setOctave] = useState(4);

  const changeOctave = newOctave => {
    if (newOctave >= 0 && newOctave <= 8) {
      setOctave(newOctave);
      console.log("New Octave: ", newOctave);
    }
  };

  return [octave, changeOctave];
};

export default useOctave