import type { TemaType } from "./TemaType";

export interface EventoType {
  tema: TemaType;
  img: string;
  data: Date;
  titulo: string;
  descricao: string;
}
