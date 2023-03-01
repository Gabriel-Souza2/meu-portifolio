import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useRef, useState } from "react";

import "./styles.scss";

export function Carrosel() {
  const [isDisabledButtonArrowLeft, setIsDisabledButtonArrowLeft] =
    useState(true);

  const carrosel = useRef<HTMLUListElement>({} as HTMLUListElement);

  function handlePrevious() {
    carrosel.current.scrollLeft -= 678;
    if (carrosel.current.scrollLeft <= 678) {
      setIsDisabledButtonArrowLeft(true);
    }
  }

  function handleNext() {
    carrosel.current.scrollLeft += 678;
    setIsDisabledButtonArrowLeft(false);
  }

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
        <li className="project">
          <img src="./spotify_1.png" />
        </li>
        <li className="project">
          <img src="./form_stickers.png" />
        </li>
        <li className="project">
          <img src="./spotify_1.png" />
        </li>
        <li className="project">
          <img src="./form_stickers.png" />
        </li>
        <li className="project">
          <img src="./spotify_1.png" />
        </li>
      </ul>

      <button
        className="btn-arrow arrow arrow--right js-btn-arrow-right"
        onClick={handleNext}
      >
        <ArrowRight size={32} weight="bold" />
      </button>
    </>
  );
}
