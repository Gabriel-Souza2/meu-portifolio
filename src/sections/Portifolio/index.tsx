import { Carrosel } from "../../components/Carrosel";
import "./styles.scss";

export function Portifolio() {
  return (
    <section id="portifolio" className="portifolio">
      <div className="portifolio__header">
        <h2 className="sections-title">Portifólio</h2>
      </div>
      <div className="container">
        <Carrosel />
      </div>
      <div className="icon icon--1"></div>
      <div className="icon icon--2"></div>
      <div className="icon icon--3"></div>
    </section>
  );
}
