import { CardData, Cards } from "../../components/Cards";
import "./styles.scss";

import UI from "../../assets/ui.svg";
import Notebook from "../../assets/notebook.svg";
import Celular from "../../assets/celular.svg";

export function WhatIDo() {
  const data: CardData[] = [
    {
      icon: UI,
      blob: 1,
      title: "Design UI/UX",
      content:
        "Melhore a aparência e funcionalidade de seu site com a ajuda de um freelancer especialista em UI/UX. Ofereço soluções personalizadas para atender às suas necessidades e elevar a experiência do usuário em seu site.",
    },
    {
      icon: Notebook,
      blob: 2,
      title: "Desenvolvedor Web",
      content:
        "Desenvolva seu site moderno e escalável com a ajuda de um freelancer qualificado. Ofereço soluções completas de desenvolvimento de sites e aplicativos web, utilizando as melhores tecnologias para garantir o sucesso do seu projeto.",
      middle: true,
    },
    {
      icon: Celular,
      blob: 3,
      title: "Desenvolvimento de Apps",
      content:
        "Ofereço serviços de desenvolvimento de apps personalizados e de alta qualidade. Utilizo tecnologias e recursos de ponta para criar soluções inovadoras.",
    },
  ];
  return (
    <section id="what-i-do" className="what-i-do">
      <h2 className="sections-title">O que eu faço?</h2>
      <Cards data={data} />
    </section>
  );
}
