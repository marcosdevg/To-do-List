import { useState } from "react";
import * as C from "./App.style";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { ResetStyles } from "./ResetStyles";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 2, name: "Comprar um bolo na padaria", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  };

  const removeTodo = (id: number) => {
    const uptadeTodos = list.filter((todo) => todo.id !== id);
    setList(uptadeTodos);
  };

  return (
    <C.Container>
      <ResetStyles />
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <div className="faaf"></div>
        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
            removeTodo={removeTodo}
          />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
