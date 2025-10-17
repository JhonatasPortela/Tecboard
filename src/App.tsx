import { FormularioDeEventos } from "./components/FormularioDeEventos";
import "./App.css";
import { Tema } from "./components/Tema";
import { Banner } from "./components/Banner";
import { CardEvento } from "./components/CardEvento";
import type { TemaType } from "./types/TemaType";
import type { EventoType } from "./types/EventoType";
import { useState } from "react";

const TEMAS: TemaType[] = [
  { id: 1, nome: "front-end" },
  { id: 2, nome: "back-end" },
  { id: 3, nome: "devops" },
  { id: 4, nome: "inteligência artificial" },
  { id: 5, nome: "data science" },
  { id: 6, nome: "cloud" },
];

function App() {
  const [eventos, setEventos] = useState<EventoType[]>([
    {
      img: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      badge: TEMAS[0].nome,
      data: new Date(),
      titulo: "Mulheres no Front",
      descricao:
        "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
    },
  ]);

  function adicionarEvento(evento: EventoType) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo" />
      </header>
      <Banner />
      <FormularioDeEventos temas={TEMAS} aoSubmeter={adicionarEvento} />
      {TEMAS.map((tema) => (
        <section key={tema.id}>
          <Tema tema={tema} />
          {eventos.map((evento, index) => (
            <CardEvento evento={evento} key={index} />
          ))}
        </section>
      ))}
    </main>
  );
}

export default App;
