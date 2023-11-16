import { useState } from "react";
import "./ContactMe.css"
import{BsLinkedin, BsGithub} from "react-icons/bs"
import emailjs from "@emailjs/browser"

export default function ContactMe() {
  const[name, setName] = useState();
  const[email, setEmail] = useState();
  const[tel, setTel] = useState();
  const[message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    if(name === "") {
      alert("Preencha o nome")
      return
    } else if(email === "") {
      alert("Preencha o email")
      return
    } else if(message === "") {
      alert("Preencha a mensagem")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      tel: tel
    }

    emailjs.send("service_7ojtra7", "template_gc7k2c4", templateParams, "NFOOx6pss6Kd42uKc")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName("")
      setEmail("")
      setTel("")
      setMessage("")
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  return (
    <section id="Contact" className="contact--section">
      <form className="contact--form--container" onSubmit={sendEmail}>
        <div className="contact--form--text">
          <h2 className="contact--section--heading"><span>&#91;</span> entre-em-contato <span>&#93;</span></h2>
          <p className="contact--section--description">
            Fique à vontade para me enviar uma mensagem, responderei o mais breve possível.
          </p>
        </div>
        <div className="container">
          <div className="contact--inputs">
            <label htmlFor="name" className="contact--label">
              <span className="text-md">Nome</span>
              <input
                type="text"
                className="contact--input"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
               
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                onChange={(e) => setTel(e.target.value)}
                value={tel}
              />
            </label>
          </div>
        <div className="contact--message">
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Mensagem</span>
            <textarea
              className="contact--input"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
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
