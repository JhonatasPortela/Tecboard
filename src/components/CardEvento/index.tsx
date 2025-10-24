import "./card-evento.styles.css";
import type { EventoType } from "../../types/EventoType";

export function CardEvento({ evento }: { evento: EventoType }) {
  return (
    <div className="card-evento">
      <img src={evento.img} alt={evento.titulo} />
      <div className="card-evento-corpo">
        <p className="card-evento-badge">{evento.tema.nome}</p>
        <p className="card-evento-data">
          {evento.data.toLocaleDateString("pt-BR")}
        </p>
        <h4 className="card-evento-titulo">{evento.titulo}</h4>
        <p className="card-evento-descricao">{evento.descricao}</p>
      </div>
    </div>
  );
}
