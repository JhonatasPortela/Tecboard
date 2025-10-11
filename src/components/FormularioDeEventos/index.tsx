import type { TemaType } from "../../types/TemaType";
import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloDoFormulario } from "../TituloDoFormulario";
import "./formulario-de-eventos.styles.css";

export function FormularioDeEventos({ temas }: { temas: TemaType[] }) {
  return (
    <form className="form-evento">
      <TituloDoFormulario>Preencha para criar um evento:</TituloDoFormulario>
      <div className="camposDoFormulario">
        <CampoDeFormulario>
          <Label htmlFor="nomeDoEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            className="campoDeInput"
            type="text"
            id="nomeDoEvento"
            placeholder="Summer dev hits"
            name="nomeDoEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o link da imagem de capa?</Label>
          <CampoDeEntrada
            className="campoDeInput"
            type="text"
            id="capa"
            placeholder="https://..."
            name="capa"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataDoEvento">Data do evento?</Label>
          <CampoDeEntrada type="date" id="dataDoEvento" name="dataDoEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaDoEvento">Tema do evento</Label>
          <ListaSuspensa id="temaDoEvento" name="temaDoEvento" items={temas} />
        </CampoDeFormulario>

        <div className="acoes">
          <Botao>Criar evento</Botao>
        </div>
      </div>
    </form>
  );
}
