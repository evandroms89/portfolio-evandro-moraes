import "./AboutMe.css"

export default function AboutMe() {

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div id="aboutGrain" className="about--section--box">
        <div className="about--section--content">
          <h1 className="about--section--heading"><span>./</span>sobre-mim</h1>
          <p className="about--section-description">
            Olá, meu nome é Evandro Moraes. Sou um Desenvolvedor Front-End e atualmente estou fazendo uma graduação em Análise e Desenvolvimento de Sistemas. Também possuo formação em Design. Estou focado sempre em aprender e entender novas tecnologias para melhor utilizá-las em prol de uma experiência do usuário satisfatória.
          </p>
          <p className="about--section-description">
            Comunicação clara, empatia, trabalho em equipe, resiliência frente a desafios, e busca por aperfeiçoamento são pontos que considero muito importantes no meu desenvolvimento enquanto profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
