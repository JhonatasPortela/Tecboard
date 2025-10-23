import type { TemaType } from "./TemaType";

export interface EventoType {
  tema: TemaType;
  img: string;
  badge: string;
  data: Date;
  titulo: string;
  descricao: string;
}
