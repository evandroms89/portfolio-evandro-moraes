import "./HeroSection.css"; 
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'react-lottie';
import computerAnimation from '../../assets/LottieJson/computerAnimation.json';

export default function HeroSection() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: computerAnimation
  }

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <p className="hero--section-description"><span>&#123;</span> Seja bem vindo&#40;a&#41; ao meu portfolio de <span>&#125;</span></p>
          <h1 className="hero--section--title">
            Desenvolvedor
            <br />
            Front-End
          </h1>
          <TypeAnimation
            sequence={[
              '"Desenvolvido com HTML"',
              2000,
              '"Desenvolvido com CSS"',
              2000,
              '"Desenvolvido com JavaScript"',
              2000,
              '"Desenvolvido com React"',
              2000
            ]}
            wrapper="span"
            speed={25}
            style={{ fontSize: '23px', display: 'inline-block', color: '#c77546' }}
            repeat={Infinity}
          />
        </div>
        <Link
              activeClass="navbar--active-content"
              smooth={true}
              offset={-20}
              duration={500}
              to="MyPortfolio"
              className="btn hero--section-btn-primary"
            >
              Meus Projetos
            </Link>
      </div>
      <div className="hero--section--animation">
        <Lottie options={defaultOptions} />
      </div>
    </section>
  );
}
