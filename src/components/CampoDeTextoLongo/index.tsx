import type { ComponentProps } from "react";
import "./campo-de-texto-longo.styles.css";

type CampoDeTextoLongoProps = ComponentProps<"textarea">;

export function CampoDeTextoLongo(props: CampoDeTextoLongoProps) {
  return <textarea {...props} className="campo-texto-longo-form" />;
}
