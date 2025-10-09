import type { TemaType } from "../../types/TemaType";
import "./tema.styles.css";

export function Tema({ tema }: { tema: TemaType }) {
  return <h3 className="tema-titulo">{tema.nome}</h3>;
}
