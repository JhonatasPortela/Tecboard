import type { InputHTMLAttributes } from "react";
import "./campo-de-entrada.styles.css";

type CampoDeEntradaProps = InputHTMLAttributes<HTMLInputElement>;

export function CampoDeEntrada(props: CampoDeEntradaProps) {
  return <input {...props} className="campo-entrada-form" />;
}
