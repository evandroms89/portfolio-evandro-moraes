import "./ContactMe.css"
import{BsLinkedin, BsGithub} from "react-icons/bs"

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <form className="contact--form--container">
        <div>
          <h2 className="section--heading">Entre em contato</h2>
          <p className="text-md">
            Fique à vontade para me enviar uma mensagem, responderei o mais breve possível.
          </p>
        </div>
        <div className="container">
          <div className="contact--inputs">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">Nome</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Telefone</span>
              <input
                type="number"
                className="contact--input text-md"
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
              className="contact--input text-md"
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
        <a href="">
          < BsLinkedin />
        </a>
        <a href="">
          < BsGithub />
        </a>
      </div>
    </section>
  );
}
