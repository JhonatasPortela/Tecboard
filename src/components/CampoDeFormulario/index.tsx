import "./campo-de-formulario.styles.css";

export function CampoDeFormulario({ children }: { children: React.ReactNode }) {
  return <fieldset className="campo-form">{children}</fieldset>;
}
