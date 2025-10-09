import { FormularioDeEventos } from "./components/FormularioDeEventos";
import "./App.css";
import { Tema } from "./components/Tema";
import { Banner } from "./components/Banner";
import { CardEvento } from "./components/CardEvento";
import type { TemaType } from "./types/TemaType";
import type { EventoType } from "./types/EventoType";

const TEMAS: TemaType[] = [
  { id: 1, nome: "front-end" },
  { id: 2, nome: "back-end" },
  { id: 3, nome: "devops" },
  { id: 4, nome: "inteligência artificial" },
  { id: 5, nome: "data science" },
  { id: 6, nome: "cloud" },
];

const evento: EventoType = {
  img: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
  badge: TEMAS[0].nome,
  data: new Date(),
  titulo: "Mulheres no Front",
  descricao:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo" />
      </header>
      <Banner />
      <FormularioDeEventos />
      {TEMAS.map((tema) => (
        <section key={tema.id}>
          <Tema tema={tema} />
          <CardEvento evento={evento} />
        </section>
      ))}
    </main>
  );
}

export default App;
