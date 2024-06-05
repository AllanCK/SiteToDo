import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TodoList.css";

const TodoList = (parametrosFiltro) => {
  const [todos, setTodos] = useState([]);
  const [newLista, setNewLista] = useState(todos);
  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  setNewLista(todos);
  React.useEffect(() => {
    listaToDoCompletado();
    console.log(newLista);
  }, [parametrosFiltro.prioridade]);

  React.useEffect(() => {}, [parametrosFiltro.name]);

  React.useEffect(() => {}, [parametrosFiltro.completado]);

  function listaToDoCompletado() {
    if (parametrosFiltro.name != "" || parametrosFiltro.prioridade != "todos") {
      setNewLista(newLista.filter((todo) => todo.completed));
    } else {
      setNewLista(todos.filter((todo) => todo.completed));
    }
  }
  return (
    <div className="todo-list">
      <ul>
        {newLista.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.title}
            <span className="todo-priority">{todo.priority}</span>
            <span className="todo-status">
              {todo.completed ? "Completed" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
