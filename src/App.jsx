import TodoList from './Components/TodoList'
import { Header, Title } from './Components/Style.jsx'
import './App.css'
const Titulo = Title
const Cabecalho = Header

export default function App() {
  return (
    <>
    <Cabecalho>
    <Title>My Todo List</Title>
    <label >Completed</label>
    <input type="checkbox" id="completed" value="completed" />
    <label for="Priority">Priority</label>
    <select id="cars" name="cars">
      <option value=""></option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
    <label for="fname">Title:</label>
    <input type="text" id="fname" name="fname"/>
    </Cabecalho>
    <TodoList />
    </>
  )
}