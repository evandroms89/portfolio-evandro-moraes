import "./ContactMe.css"
import{BsLinkedin, BsGithub} from "react-icons/bs"

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <form className="contact--form--container">
        <div className="contact--form--text">
          <h2 className="contact--section--heading"><span>&#91;</span> entre-em-contato <span>&#93;</span></h2>
          <p className="contact--section--description">
            Fique à vontade para me enviar uma mensagem, responderei o mais breve possível.
          </p>
        </div>
        <div className="container">
          <div className="contact--inputs">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">Nome</span>
              <input
                type="text"
                className="contact--input"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Telefone</span>
              <input
                type="number"
                className="contact--input"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
        <div className="contact--message">
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Mensagem</span>
            <textarea
              className="contact--input"
              id="message"
              rows="7"
              placeholder="Digite sua mensagem..."
            />
          </label>
        </div>
        </div>
        <div className="contact--form--btn">
          <button className="btn btn-outline-primary">Enviar</button>
        </div>
      </form>
      <div className="contact--icons">
        <a href="https://www.linkedin.com/in/evandro-moraes/" target="_blank">
          < BsLinkedin />
        </a>
        <a href="https://github.com/evandroms89" target="_blank">
          < BsGithub />
        </a>
      </div>
    </section>
  );
}
