import { Button } from "../Button";
import "./styles.scss";

interface CardsProps {
  data: CardData[];
}

type blobNumber = 1 | 2 | 3 | 4 | 5 | 6;

export interface CardData {
  icon: string;
  blob: blobNumber;
  title: string;
  content: string;
  middle?: boolean;
}

export function Cards({ data }: CardsProps) {
  return (
    <div className="cards">
      {data.map((card, index) => {
        return (
          <>
            <div
              key={`header-${card.blob}`}
              className={`card__header ${card.middle === true ? "middle" : ""}`}
            >
              <div className={`blob blob--${card.blob}`}>
                <img src={card.icon} />
              </div>
              <h3 key={`title-${card.blob}`} className="card__title">
                {card.title}
              </h3>
            </div>

            <div
              key={`content-${card.blob}`}
              className={`card__content ${
                card.middle === true ? "middle" : ""
              }`}
            >
              <p>{card.content}</p>
            </div>
            <div
              key={`footer-${card.blob}`}
              className={`card__footer ${card.middle === true ? "middle" : ""}`}
            >
              <Button text="Entrar em contato" link="#contact-form" />
            </div>
          </>
        );
      })}
    </div>
  );
}
