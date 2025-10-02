import "./botao.styles.css";

export function Botao({ children }: { children: string }) {
  return <button className="botao">{children}</button>;
}
