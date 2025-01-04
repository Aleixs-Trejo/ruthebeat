// React-Router
import { useNavigate } from 'react-router-dom';

// Components
import Keyboard from '../components/keyboard/Keyboard';

// CSS

const KeyboardPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="section__keyboard__page">
      <button className="btn btn__back" onClick={handleGoBack}>Go Back</button>
      <Keyboard />
    </section>
  );
};

export default KeyboardPage