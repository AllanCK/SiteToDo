import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://dummyapi.online/api/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div className="todo-list">
            <h1>My Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li
                      key={todo.id}
                      className={`todo-item ${todo.completed ? 'completed' : ''}`}
                      onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.title}
                        <span className="todo-status">
                            {todo.completed ? 'Completed' : 'Pending'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;