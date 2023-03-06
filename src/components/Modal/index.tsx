import * as Dialog from "@radix-ui/react-dialog";

import "./styles.scss";

export interface Project {
  name: string;
  description: string;
  main_image: string;
  images: string[];
}

export function Modal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="modal__overlay" />
      <Dialog.Content className="modal__content">
        <Dialog.Title>Modal Title</Dialog.Title>
        <Dialog.Description></Dialog.Description>
        <Dialog.Close asChild>
          <button aria-label="Close">X</button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
