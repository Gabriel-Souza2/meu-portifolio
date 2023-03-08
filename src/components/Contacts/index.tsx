import * as Tooltip from "@radix-ui/react-tooltip";
import { useState } from "react";

import "./styles.scss";

export function Contacts() {
  const [copied, setCopied] = useState(false);
  function handleEmailCopy() {
    navigator.clipboard.writeText("gabriel.souza2@hotmail.com.br");
    setCopied(true);
  }

  function handleHover() {
    setCopied(false);
  }
  return (
    <div className="contacts">
      <a
        href="https://api.whatsapp.com/send?phone=5511945146976"
        className="info"
      >
        <img src="./whatsapp.png" />
        <span>(11) 94514-6976</span>
      </a>

      <Tooltip.Provider>
        <Tooltip.Root open={copied}>
          <Tooltip.Trigger asChild>
            <button
              className="info"
              onClick={handleEmailCopy}
              onMouseLeave={handleHover}
            >
              <img src="./mail.png" />
              <span>gabriel.souza2@hotmail.com.br</span>
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent">
              Email copiado!
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}
