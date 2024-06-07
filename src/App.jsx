import { useState } from "react";
import TodoList from "./Components/TodoList";
import { Header, Title, botaoInsert, formInsert } from "./Components/Style.jsx";
import "./App.css";

const Titulo = Title;
const Cabecalho = Header;
const FormInsert = formInsert;
const BotaoInsert = botaoInsert;

export default function App() {
  const [name, setName] = useState("");
  const [completado, setCompletado] = useState("todos");
  const [prioridade, setPrioridade] = useState("todos");
  const [insertName, setInsertName] = useState("");
  const [insertCompletado, setInsertCompletado] = useState(false);
  const [insertPrioridade, setInsertPrioridade] = useState("medium");
  const [newToDo, setNewToDo] = useState([]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleCompletedChange(e) {
    setCompletado(() => (e.target.value));
  }

  function handlePriorityChange(e) {
    setPrioridade(() => (e.target.value));
  }

  function handleInsertName(e) {
    setInsertName(e.target.value);
  }

  function handleInsertCompleted(e) {
    setInsertCompletado(() => (e.target.value));
  }

  function handleInsertPriority(e) {
    setInsertPrioridade(() => (e.target.value));
  }

  function handleButtonCreate() {
    if (insertName) {
      setNewToDo({
        id: 0,
        title: insertName,
        completed: insertCompletado,
        priority: insertPrioridade,
      });
    }
  }

  return (
    <>
      <Cabecalho>
        <form>
          <Titulo>My Todo List</Titulo>
          <label>Completado:</label>
          <label>
            <select onChange={handleCompletedChange}>
              <option value="todos">Todos</option>
              <option value="true">Completado</option>
              <option value="">Pendente</option>
            </select>
          </label>
          <label value="Priority">Prioridade:</label>
          <label>
            <select onChange={handlePriorityChange}>
              <option value="todos">Todos</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>
          <label>
            Nome:
            <input value={name} onChange={handleNameChange} />
          </label>
        </form>

        <FormInsert>
          <Titulo>Criar nova tarefa:</Titulo>
          <label>Completado:</label>
          <label>
            <select onChange={handleInsertCompleted}>
              <option value="">Pendente</option>
              <option value="true">Completado</option>
            </select>
          </label>
          <label value="Priority">Prioridade</label>
          <label>
            <select onChange={handleInsertPriority}>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </label>
          <label>
            Nome:
            <input value={insertName} onChange={handleInsertName} />
          </label>
          <BotaoInsert type={"button"} onClick={handleButtonCreate}>
            Criar
          </BotaoInsert>
        </FormInsert>
      </Cabecalho>
      <TodoList
        name={name}
        completado={completado}
        prioridade={prioridade}
        neToDo={newToDo}
      />
    </>
  );
}
