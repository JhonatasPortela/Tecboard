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
      tema: TEMAS[0],
      img: "https://codingweek.org/wp-content/uploads/2023/09/chris-ried-ieic5Tq8YMk-unsplash-1536x1025.jpg",
      data: new Date(2025, 9, 31),
      titulo: "Front do front",
      descricao: "aushaushasuahsuashaush",
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
      <section className="container">
        {TEMAS.filter((tema) =>
          eventos.some((evento) => evento.tema.id === tema.id)
        ).map((tema) => (
          <section key={tema.id}>
            <Tema tema={tema} />
            <div className="eventos">
              {eventos
                .filter((evento) => evento.tema.id === tema.id)
                .map((evento, index) => (
                  <CardEvento evento={evento} key={index} />
                ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}

export default App;
