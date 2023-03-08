import { motion, useAnimation } from "framer-motion";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";

import "./styles.scss";

interface Props {
  type?: "success" | "error";
  message: string;
  open: boolean;
}

export function Modal({ message, open, type = "success" }: Props) {
  const animateControl = useAnimation();
  const [modal, setModal] = useState(false);

  function handleCloseModal() {
    setModal(false);
  }

  useEffect(() => {
    if (open) {
      setModal(true);
      animateControl.start({
        x: 0,
      });

      setTimeout(() => {
        setModal(false);
      }, 3000);
    }
  }, [open]);
  return (
    <motion.div
      animate={animateControl}
      initial={{
        x: 200,
      }}
      className={`modal ${modal && "active"} ${
        type === "error" ? "modal--error" : ""
      }`}
    >
      <button className="btn-modal-close" onClick={handleCloseModal}>
        <X fill="bold"></X>
      </button>
      <p>{message}</p>
      <div className="progress-bar"></div>
    </motion.div>
  );
}
