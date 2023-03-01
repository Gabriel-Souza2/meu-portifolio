import { Form } from "../../components/Form";
import "./styles.scss";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="sections-title sections-title--white">Contatos</h2>

      <div className="contact__avatar">
        <img src="./eu.jpeg" />
      </div>

      <div className="contact__titles">
        <h1 className="contact__titles--main">Gabriel de Souza Gomes</h1>

        <h3 className="contact__titles--thirdtitle">
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
      <div className="contact__info-wrapper">
        <a href="#" className="info">
          <img src="./whatsapp.png" />
          <span>(11) 94514-6976</span>
        </a>
        <a href="#" className="info">
          <img src="./mail.png" />
          <span>gabriel.souza2@hotmail.com.br</span>
        </a>
      </div>
      <div className="contact__social">
        <h3>Redes Sociais</h3>
        <div className="contact__social__links">
          <a target="_blank" href="https://www.instagram.com/gabrielgomes1061">
            <img src="./instagram.png" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/gabrielsouza2/">
            <img src="./linkedin.png" />
          </a>
          <a target="_blank" href="https://github.com/Gabriel-Souza2">
            <img src="./github.png" />
          </a>
        </div>
      </div>
    </section>
  );
}
