import TodoList from './Components/TodoList'
import { Header, Title } from './Components/Style.jsx'
import './App.css'
const Titulo = Title
const Cabecalho = Header

function Form() {
  const [to, setTo] = useState('')
}

function handleSubmit(e) {
  e.preventDefault();
}

export default function App() {
  return (
    <>
    <Cabecalho>
    <Title>My Todo List</Title>
    <label >Completed</label>
    <input type="checkbox" id="completed" value="completed" />
    <label for="Priority">Priority</label>
    <select id="prioridade" name="Prioriry">
      <option value=""></option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>

    <input type="text" id="fname" name="fname"/>
    <button id="Filter">Filter</button>
    </Cabecalho>
    <TodoList />
    </>
  )
}