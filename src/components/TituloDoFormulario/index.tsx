import "./titulo-formulario.styles.css";

export function TituloDoFormulario({ children }: { children: string }) {
  return <h2 className="titulo-form">{children}</h2>;
}
