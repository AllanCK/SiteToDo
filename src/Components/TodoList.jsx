import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TodoList.css";

const TodoList = ({name, completado, prioridade, neToDo}) => {
  const [todos, setTodos] = useState([]);
  const [newLista, setNewLista] = useState([]);
  const [newToDo, setNewToDo] = useState([])

  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/todos")
      .then((response) => {
        setTodos(response.data);
        setNewLista(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setNewLista(
      newLista.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  React.useEffect(() => {
    let lista = todos
    lista = listaToDoCompletado(lista);
    lista = listaToDoPrioridade(lista);
    lista = listaToDoName(lista);
    setNewLista(lista)
  }, [name, prioridade, completado]);

  React.useEffect(() => {
    if (!!neToDo.title){
    neToDo.id = Number(todos.length+1)
    setNewToDo(neToDo)
    todos.push(neToDo)
    console.log(neToDo)
    console.log(todos)
    }
  }, [neToDo])

  function listaToDoCompletado(listaTemp) {
    if (completado != 'todos'){  
      return listaTemp.filter((todo) => todo.completed == !!completado)
    }else{
      return listaTemp
    }
  }

  function listaToDoPrioridade(listaTemp) {
    if (prioridade != 'todos'){  
      return listaTemp.filter((todo) => todo.priority == prioridade)
    }else{
      return listaTemp
    }
  }

  function listaToDoName(listaTemp) {
    return listaTemp.filter((todo) => todo.title.toUpperCase().startsWith(name.toUpperCase()))
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
