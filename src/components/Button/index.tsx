import "../../styles/button.scss";

interface ButtonProps {
  text: string;
  link: string;
}

export function Button({ text, link }: ButtonProps) {
  return (
    <a href={link} className="btn-action">
      {text}
    </a>
  );
}
