import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TodoList.css";

const TodoList = (completado) => {
  const [todos, setTodos] = useState([]);
  const [newLista, setNewLista] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/todos")
      .then((response) => {
        setTodos(response.data);
        setNewLista(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // const toggleTodo = (id) => {
  //   setNewLista(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };

  // React.useEffect(() => {
  //   listaToDoPrioridade();
  //   console.log(newLista);
  //   console.log(parametrosFiltro.prioridade);
  // }, [parametrosFiltro.prioridade]);

  // React.useEffect(() => {}, [parametrosFiltro.name]);

  // React.useEffect(() => {
  //   listaToDoCompletado();
  //   console.log(parametrosFiltro.completado);
  // }, [parametrosFiltro.completado]);

  // function listaToDoCompletado() {
  //   let filteredList = [...todos];
  //   // if (!parametrosFiltro.completado){
  //   //   filteredList - newLista.filter((todo) => )

  //   // }
  //   if (
  //     parametrosFiltro.name != "" ||
  //     (parametrosFiltro.prioridade != "todos" && parametrosFiltro.completado)
  //   ) {
  //     filteredList = newLista.filter((todo) => todo.completed);
  //   } else {
  //     filteredList = todos.filter((todo) => todo.completed);
  //   }
  //   setNewLista(filteredList);
  // }

  // function listaToDoPrioridade() {
  //   let filteredList = [...todos];
  //   if (parametrosFiltro.name != "" || parametrosFiltro.completado != "todos") {
  //     filteredList = newLista.filter(
  //       (todo) => todo.priority == parametrosFiltro.prioridade
  //     );
  //   } else {
  //     filteredList = todos.filter(
  //       (todo) => todo.priority == parametrosFiltro.prioridade
  // }
  //     );
  //   setNewLista(filteredList);
  //   }

  React.useEffect(() => {
    let newListTodos = todos.filter(
      (todo) => todo.completed == completado.completado
    );
    setNewLista(newListTodos);
  }, [completado.completado]);

  React.useEffect(() => {
    let newListTodos = todos.filter(
      (todo) => todo.title.toLowerCase().startsWith(completado.name.toLowerCase())
    );
    setNewLista(newListTodos);
  }, [completado.name]);

  React.useEffect(() => {
    if (completado.prioridade == "todos") {
      setNewLista(todos);
    } else {
      let newListTodos = todos.filter(
        (todo) => todo.priority == completado.prioridade
      );
      setNewLista(newListTodos);
    }
  }, [completado.prioridade]);

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
