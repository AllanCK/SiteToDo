import { useState } from "react";
import TodoList from "./Components/TodoList";
import { Header, Title } from "./Components/Style.jsx";
import "./App.css";

const Titulo = Title;
const Cabecalho = Header;

export default function App() {
  const [name, setName] = useState("");
  const [completado, setCompletado] = useState(false);
  const [prioridade, setPrioridade] = useState("todos");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function ToggleCompleted(e) {
    setCompletado(!completado);
  }

  function handlePriorityChange(e) {
    setPrioridade(e.target.value);
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
            <input value={name} onChange={handleNameChange} />
          </label>
        </form>
      </Cabecalho>
      <TodoList completado={completado} prioridade={prioridade} name={name} />
    </>
  );
}
