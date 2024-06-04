import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Components/TodoList'

export default function App() {
  return (
    <>
    <TodoList />
      <h1 style={{
      backgroundColor: 'black',
      color: 'white'
    }}>
        To Do List
        </h1>


    </>
  )
}