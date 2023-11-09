import "./HeroSection.css"; 
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'react-lottie';
import { Link } from "react-scroll";
import computerAnimation from '../../assets/LottieJson/computerAnimation.json';
import { useEffect } from "react";

export default function HeroSection() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: computerAnimation
  }

  useEffect(() => {
    var options = {
      animate: true,
      patternWidth: 700,
      patternHeight: 700,
      grainOpacity: 0.1,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1
    };
    grained("#heroSection", options);
  }, [])

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <p className="hero--section-description">Seja bem vindo&#40;a&#41; ao meu portfolio de</p>
          <h1 className="hero--section--title">
            Desenvolvedor
            <br />
            Front-End
          </h1>
          <TypeAnimation
            sequence={[
              'Desenvolvido com HTML',
              2000,
              'Desenvolvido com CSS',
              2000,
              'Desenvolvido com JavaScript',
              2000,
              'Desenvolvido com React',
              2000
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: '22px', display: 'inline-block', color: '#858377' }}
            repeat={Infinity}
          />
        </div>
        <Link
              activeClass="navbar--active-content"
              smooth={true}
              offset={-45}
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
