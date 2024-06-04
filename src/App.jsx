import { useState } from "react";
import TodoList from "./Components/TodoList";
import { Header, Title } from "./Components/Style.jsx";
import "./App.css";

const Titulo = Title;
const Cabecalho = Header;

export default function App() {
  const [titulo, setTitulo] = useState({
    name: "",
    completed: "",
    prioridade: "",
  });

  function handleNameChange(e) {
    setTitulo({
      ...titulo,
      name: e.target.value,
    });
    console.log(titulo);
  }

  function ToggleCompleted(e) {
    setTitulo({
      ...titulo,
      completed: titulo.completed !== "completed" ? "completed" : "",
    });
    console.log(titulo.completed);
  }

  function handlePriorityChange(e) {
    setTitulo({
      ...titulo,
      prioridade: e.target.value,
    });
    console.log(titulo.prioridade);
  }

  return (
    <>
      <Cabecalho>
        <Title>My Todo List</Title>
        <form>
          <label>Completed</label>
          <input
            type="checkbox"
            id="completed"
            value="completed"
            onClick={ToggleCompleted}
          />
          <label value="Priority">Priority</label>
          <label>
            <select onChange={handlePriorityChange}>
              <option value="todos">Todos</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>
          <label>
            Name:
            <input value={titulo.name} onChange={handleNameChange} />
          </label>
        </form>
      </Cabecalho>
      <TodoList orderBy={titulo} />
    </>
  );
}
