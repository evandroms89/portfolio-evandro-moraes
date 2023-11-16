import { useEffect, useState } from "react";
import "./ContactMe.css"
import{BsLinkedin, BsGithub, BsWhatsapp} from "react-icons/bs"
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser"

export default function ContactMe() {
  const[name, setName] = useState();
  const[email, setEmail] = useState();
  const[tel, setTel] = useState();
  const[message, setMessage] = useState();
  const[pageMessageSend, setPageMessageSend] = useState(false);

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
    }, (err) => {
      console.log("ERRO: ", err)
    })

    setPageMessageSend(true)
    setName("")
    setEmail("")
    setTel("")
    setMessage("")
    setTimeout(() => {
      setPageMessageSend(false)
    }, 2000)
  }

  return (
    !pageMessageSend ?
        (
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
              <a href="https://www.linkedin.com/in/evandro-moraes/" target="_blank" >
                < BsLinkedin className="btn--linkedin"/>
              </a>
              <a href="https://github.com/evandroms89" target="_blank" >
                < BsGithub className="btn--github"/>
              </a>
              <a href="https://wa.me/5511980129404" target="_blank" >
                < BsWhatsapp className="btn--whats"/>
              </a>
              <a href="mailto:evandroms89@gmail.com" target="_blank" >
                < SiGmail className="btn--gmail"/>
              </a>
            </div>
        </section>
        )
        :
        (
        <>
          <h2 className="contact--message--send"><span>&#91;</span> mensagem enviada com sucesso<span>&#93;</span></h2>
        </>
        ) 
  );
}
