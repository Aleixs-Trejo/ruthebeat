// React-Router
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// CSS

const DrumsPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="section__drums__page">
      <button className="btn btn__back" onClick={handleGoBack}>Go Back</button>
      <h2>Drums</h2>
      <p>Hola amigo curiosito, aún estoy chambeando en esta sección, por mientras puedes ir a: </p>
      <Link to="/keyboard">Keyboard</Link>
    </section>
  );
};

export default DrumsPage