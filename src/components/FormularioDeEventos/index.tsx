import type { EventoType } from "../../types/EventoType";
import type { TemaType } from "../../types/TemaType";
import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { CampoDeTextoLongo } from "../CampoDeTextoLongo";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloDoFormulario } from "../TituloDoFormulario";
import "./formulario-de-eventos.styles.css";

type FormularioDeEventosProps = {
  temas: TemaType[];
  aoSubmeter: (evento: EventoType) => void;
};

export function FormularioDeEventos({
  temas,
  aoSubmeter,
}: FormularioDeEventosProps) {
  function aoSubmit(formData: FormData) {
    console.log("fiz um submit");
    const novoEvento: EventoType = {
      img: formData.get("capa")?.toString() || "",
      titulo: formData.get("nomeDoEvento")?.toString() || "",
      data: new Date(
        formData.get("dataDoEvento")?.toString() + "T12:00:00" || ""
      ),
      badge:
        temas.find(
          (tema) =>
            tema.id.toString() === formData.get("temaDoEvento")?.toString()
        )?.nome || "",
      descricao: formData.get("descricao")?.toString() || "",
    };

    aoSubmeter(novoEvento);
  }

  return (
    <form className="form-evento" action={aoSubmit}>
      <TituloDoFormulario>Preencha para criar um evento:</TituloDoFormulario>
      <div className="camposDoFormulario">
        {/* Campo nomeDoEvento */}
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

        {/* Campo capa (link da imagem) */}
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

        {/* Campo dataDoEvento */}
        <CampoDeFormulario>
          <Label htmlFor="dataDoEvento">Data do evento?</Label>
          <CampoDeEntrada type="date" id="dataDoEvento" name="dataDoEvento" />
        </CampoDeFormulario>

        {/* Campo temaDoEvento */}
        <CampoDeFormulario>
          <Label htmlFor="temaDoEvento">Tema do evento</Label>
          <ListaSuspensa id="temaDoEvento" name="temaDoEvento" items={temas} />
        </CampoDeFormulario>

        {/* Campo descricao */}
        <CampoDeFormulario>
          <Label htmlFor="descricao">Descreva sobre o evento</Label>
          <CampoDeTextoLongo
            className="campoDeInputLongo"
            id="descricao"
            placeholder="O evento é voltado para..."
            name="descricao"
          />
        </CampoDeFormulario>

        <div className="acoes">
          <Botao>Criar evento</Botao>
        </div>
      </div>
    </form>
  );
}
