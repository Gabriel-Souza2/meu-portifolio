import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useRef, useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";

import "./styles.scss";

export function Carrosel() {
  const [isDisabledButtonArrowLeft, setIsDisabledButtonArrowLeft] =
    useState(false);

  const [isDisabledButtonArrowRight, setIsDisabledButtonArrowRight] =
    useState(false);

  const carrosel = useRef<HTMLUListElement>({} as HTMLUListElement);

  const size = 450;

  function handlePrevious() {
    carrosel.current.scrollLeft -= size;
  }

  function handleNext() {
    carrosel.current.scrollLeft += size;
  }

  const projects = [
    {
      name: "Spotify Clone",
      description: "Clone da pagina do spotify",
      main_image: "./spotify_1.png",
      images: [],
    },

    {
      name: "Formularios de Stickers",
      description: "Desafio proposto para concorrer a uma vaga no Vagas.com",
      main_image: "./form_stickers.png",
      images: [],
    },
    {
      name: "Twitter Clone",
      description: "Clone do Twitter",
      main_image: "./twitter.png",
      images: [],
    },
    {
      name: "DT Money",
      description: "Controle de gastos",
      main_image: "./dt_money.png",
      images: [],
    },
  ];

  return (
    <>
      <button
        onClick={handlePrevious}
        className="btn-arrow arrow arrow--left js-btn-arrow-left"
        disabled={isDisabledButtonArrowLeft}
      >
        <ArrowLeft size={32} weight="bold" />
      </button>

      <ul ref={carrosel}>
        {projects.map((project, index) => {
          return (
            <li key={index} className="project">
              <img src={project.main_image} />
              <div className="overlay">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button className="btn-action">Ver mais</button>
                  </Dialog.Trigger>
                  <Modal />
                </Dialog.Root>
              </div>
            </li>
          );
        })}
      </ul>

      <button
        className="btn-arrow arrow arrow--right js-btn-arrow-right"
        onClick={handleNext}
        disabled={isDisabledButtonArrowRight}
      >
        <ArrowRight size={32} weight="bold" />
      </button>
    </>
  );
}
