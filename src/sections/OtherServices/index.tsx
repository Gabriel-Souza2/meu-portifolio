import { CardData, Cards } from "../../components/Cards";
import "./styles.scss";

import SEO from "../../assets/seo.svg";
import Acessibilidade from "../../assets/acessibilidade.svg";
import Performace from "../../assets/performace.svg";

export function OtherServices() {
  const data: CardData[] = [
    {
      icon: SEO,
      blob: 4,
      title: "SEO",
      content:
        "SEO é crucial para o sucesso de um site na internet, visando torná-lo mais visível aos motores de busca, aumentando sua posição nos resultados de pesquisa e, consequentemente, o tráfego.",
    },
    {
      icon: Acessibilidade,
      blob: 5,
      title: "Acessibilidade",
      content:
        "Acessibilidade é crucial para garantir a inclusão digital, satisfação dos usuários e credibilidade do site. Ao priorizá-la, todos os usuários terão acesso ao conteúdo e funcionalidades e terão uma boa experiência.",
    },
    {
      icon: Performace,
      blob: 6,
      title: "Performace",
      content:
        "A performance de um site é essencial para o sucesso da sua empresa na internet. Uma experiência de usuário lenta e frustrante pode afetar negativamente a imagem da sua marca e levar à perda de visitantes e receita.",
    },
  ];
  return (
    <section id="others-services" className="others-services">
      <h2 className="sections-title">Outros Serviços</h2>
      <Cards data={data} />
    </section>
  );
}
