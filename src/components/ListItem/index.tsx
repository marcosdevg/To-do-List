import * as C from "./styles";
import { Item } from "../../types/Item";
import imagem from "../../assets/icon-lixeira.svg";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
  removeTodo: (id: number) => void;
};

export const ListItem = ({ item, onChange, removeTodo }: Props) => {
  return (
    <C.Container done={item.done}>
      <div>
        <input
          type="checkbox"
          checked={item.done}
          onChange={(e) => onChange(item.id, e.target.checked)}
        />
        <label>{item.name}</label>
      </div>
      <div onClick={() => removeTodo(item.id)}>
        <img className="imagem-svg" src={imagem} alt="lixeira" />
      </div>
    </C.Container>
  );
};
