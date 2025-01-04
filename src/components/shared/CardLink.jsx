import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const CardLink = ({ path, img, title }) => {
  return(
    <Link to={path} className="instrument__link">
      <div className="instrument__container">
        <figure className="instrument__figure">
          <img
            src={img}
            alt="Instrument-Image"
            className="instrument__img"
          />
        </figure>
        <h3 className="instrument__title">{title}</h3>
      </div>
    </Link>
  );
};

export default CardLink