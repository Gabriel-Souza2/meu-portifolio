import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { WhatIDo } from "./sections/WhatIDo";
import { OtherServices } from "./sections/OtherServices";
import { Portifolio } from "./sections/Portifolio";
import { Contact } from "./sections/Contact";

export function App() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <WhatIDo />
      <OtherServices />
      <Portifolio />
      <Contact />
    </main>
  );
}
