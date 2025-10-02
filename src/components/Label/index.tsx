import "./label.styles.css";

export function Label({
  children,
  htmlFor,
}: {
  children: string;
  htmlFor: string;
}) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
