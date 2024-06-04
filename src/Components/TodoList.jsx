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
    console.log(todos)

    return (
        <div className="todo-list">
            <ul>
                {todos.map(todo => (
                    <li
                      key={todo.id}
                      className={`todo-item ${todo.completed ? 'completed' : ''}`}
                      onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.title}
                        <span className="todo-priority">{todo.priority}</span>
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