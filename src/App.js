
import {  React , useState } from 'react'
import {TodoForm , Todo } from './componets/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  let [todos , setTodos ] = useState([]);
  const addTodo = (todo) => {
    setTodos([todo , ...todos])
  }

  return (
  
    <div >
      <TodoForm onSubmit={addTodo} />
    </div>
  
  )
}
  
export default App





