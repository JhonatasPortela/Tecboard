import type { TemaType } from "../../types/TemaType";
import "./lista-suspensa.styles.css";
import type { SelectHTMLAttributes } from "react";

type SelectPropsNativas = SelectHTMLAttributes<HTMLSelectElement>;
interface ListaSuspensaProps extends SelectPropsNativas {
  items: TemaType[];
}

export function ListaSuspensa({ items, ...rest }: ListaSuspensaProps) {
  return (
    <select {...rest} defaultValue="" className="lista-suspensa">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.nome}
        </option>
      ))}
    </select>
  );
}
