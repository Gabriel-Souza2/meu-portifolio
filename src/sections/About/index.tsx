import "./styles.scss";

export function About() {
  return (
    <section id="about" className="about">
      <h2 className="sections-title">Sobre Mim</h2>
      <div className="about__content">
        <div className="about__informations">
          <ul>
            <li>
              <p className="about__informations--title">Nome:</p>
              <p className="about__informations--text">
                Gabriel de Souza Gomes
              </p>
            </li>
            <li>
              <p className="about__informations--title">Nascimento:</p>
              <p className="about__informations--text">03/03/1998</p>
            </li>
            <li>
              <p className="about__informations--title">Localização:</p>
              <p className="about__informations--text">Mogi das Cruzes - SP</p>
            </li>
            <li>
              <p className="about__informations--title">Formação:</p>
              <p className="about__informations--text">Analista de Sistemas</p>
            </li>
          </ul>
        </div>
        <div className="about__my">
          <p>
            Olá, eu sou Gabriel, um desenvolvedor full-stack apaixonado por
            tecnologia e resolução de problemas. Com habilidades sólidas em
            HTML, CSS, JavaScript, React, React Native e PHP, posso garantir
            soluções eficientes e inovadoras para o seu projeto. Estou
            constantemente buscando expandir meus conhecimentos e habilidades,
            tendo como prova meu atual curso de Análise e Desenvolvimento de
            Sistemas. Atuo como freelancer na área de desenvolvimento web,
            oferecendo soluções personalizadas e de alta qualidade.
          </p>
          <div className="about__quote">
            <h4>Citação:</h4>
            <blockquote>
              <i className="ph-quotes-fill"></i>
              <span>
                Faça o teu melhor, na condição que você tem, enquanto você não
                tem condições melhores, para fazer melhor ainda!
              </span>
            </blockquote>
            <p>- Mario Sergio Cortella</p>
          </div>
        </div>
      </div>
    </section>
  );
}
