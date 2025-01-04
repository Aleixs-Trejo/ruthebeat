// Components
import CardLink from '../components/shared/CardLink'

// IMG
import keyboardImg from "../assets/img/keyboard-home.webp";
import drumsImg from "../assets/img/drums-home.webp";

// CSS
import "../css/Home.css"

const Home = () => {
  return(
    <section className="section__home">
      <div className="home__container">
        <div className="container home__title">
          <h1>Welcome to
            <span className="span__title"> &quot;Are U Beat?&quot;</span>
          </h1>
          <span className="span__subtitle">
            A musical instruments collection developed by: 
            <a
              href="https://github.com/Aleixs-Trejo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alesis😺
            </a>
          </span>
        </div>
        <div className="container instruments">
          <ul className="instruments__container">
            <li className="instrument">
              <CardLink
                path="/keyboard"
                img={keyboardImg}
                title="Keyboard"
              />
            </li>
            <li className="instrument">
              <CardLink
                path="/drums"
                img={drumsImg}
                title="Drums"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home