import { PaperPlaneTilt } from "phosphor-react";
import { useState } from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./styles.scss";

const schema = yup
  .object({
    name: yup
      .string()
      .required("Digite seu nome para eu poder retorna sua mensagem!"),
    phone: yup
      .string()
      .required(
        "Informe seu telefone para conseguirmos retornar o mais breve possivel!"
      ),
    mail: yup
      .string()
      .email("Insira um email valido!")
      .required(
        "Informe seu email para conseguirmos retornar o mais breve possivel! Não enviaremos nenhum spam!"
      ),
    subject: yup
      .string()
      .required("Coloque aqui o assunto que deseja que resolvemos para você!"),
    message: yup
      .string()
      .required("Informe o serviço, duvida ou idea para que possamos avaliar!"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [activeLoadingButton, setActiveLoadingButton] = useState(false);

  const buttonLoadingActive = activeLoadingButton ? "active" : "";

  function onSubmit(data: FormData) {
    setActiveLoadingButton(true);
    console.log(data);
  }

  return (
    <div id="contact-form" className="contact__form">
      <form id="form" action="POST" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <span className="contact__form__input-name">Nome(*):</span>
          <input
            type="text"
            placeholder="Ex: Gabriel De Souza"
            id="name"
            {...register("name")}
          />
          <span className="contact__form--error">{errors.name?.message}</span>
        </label>

        <label htmlFor="phone">
          <span className="contact__form__input-name">Telefone(*):</span>
          <input
            type="phone"
            placeholder="Ex: (11)99999-0000"
            id="phone"
            {...register("phone")}
          />
          <span className="contact__form--error">{errors.phone?.message}</span>
        </label>

        <label htmlFor="mail">
          <span className="contact__form__input-name">Email(*):</span>
          <input
            type="mail"
            placeholder="Ex: seu.email@mail.com"
            id="mail"
            {...register("mail")}
          />
          <span className="contact__form--error">{errors.mail?.message}</span>
        </label>

        <label htmlFor="subject">
          <span className="contact__form__input-name">Assunto(*):</span>
          <input
            type="text"
            placeholder="Ex: Criação de sites"
            id="subject"
            {...register("subject")}
          />
          <span className="contact__form--error">
            {errors.subject?.message}
          </span>
        </label>

        <label htmlFor="message">
          <span className="contact__form__input-name">Mensagem(*):</span>
          <textarea
            placeholder="Ex: Desejo criar um site para minha loja..."
            id="message"
            {...register("message")}
          ></textarea>
          <span className="contact__form--error">
            {errors.message?.message}
          </span>
        </label>

        <button
          type="submit"
          className="btn-action contact__btn-submit"
          disabled={activeLoadingButton}
        >
          <span
            className={`btn-action__loading  ${buttonLoadingActive}`}
          ></span>

          <span className="btn-action__text">
            Enviar
            <PaperPlaneTilt size={28} />
          </span>
        </button>
      </form>

      <div className="contact__form__modal-success js-modal-form-success">
        <button className="btn-modal-close">
          <i className="ph-x-bold"></i>
        </button>
        <p>Seu formulario foi enviado com sucesso!</p>
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}
