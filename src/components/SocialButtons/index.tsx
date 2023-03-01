import "./styles.scss";

export function SocialButtons() {
  return (
    <div className="social__buttons" data-anime="right">
      <a
        target="_blank"
        className="social__buttons__icon"
        href="https://github.com/Gabriel-Souza2"
      >
        <img src="/github.png" />
      </a>
      <a
        target="_blank"
        className="social__buttons__icon"
        href="https://www.instagram.com/gabrielgomes1061/"
      >
        <img src="/instagram.png" />
      </a>
      <a
        className="social__buttons__icon"
        target="_blank"
        href="https://www.linkedin.com/in/gabrielsouza2/"
      >
        <img src="/linkedin.png" />
      </a>
    </div>
  );
}
