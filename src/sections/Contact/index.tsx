import { Contacts } from "../../components/Contacts";
import { Form } from "../../components/Form";
import "./styles.scss";

import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="sections-title sections-title--white">Contatos</h2>

      <div className="contact__avatar">
        <img src="./eu.jpeg" />
      </div>

      <div className="titles contact__titles">
        <h1 className="titles--main">Gabriel de Souza Gomes</h1>

        <h3 className="titles--thirdtitle">
          Desenvolvedor Web . Design UI/UX . Freelancer
        </h3>
      </div>
      <p className="contact__message">
        Alguma duvida? Entre em contato que retornarei o mais breve possivel!
      </p>
      <Form />
      <p className="contact__message">
        Ou entre em contato direto pelo whatsapp ou email!
      </p>
      <Contacts />
      <div className="contact__social">
        <h3>Redes Sociais</h3>
        <div className="contact__social__links">
          <a target="_blank" href="https://www.instagram.com/gabrielgomes1061">
            <img src={Instagram} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/gabrielsouza2/">
            <img src={Linkedin} />
          </a>
          <a target="_blank" href="https://github.com/Gabriel-Souza2">
            <img src={Github} />
          </a>
        </div>
      </div>
    </section>
  );
}
