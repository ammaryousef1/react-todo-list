import React from 'react'
import { useSelector } from 'react-redux'
import './Todo.css'
const Todo = () => {
  const todos = useSelector(state => state.todo)
  const renderedtodos = todos.map(todo => (
    <section >
      <h3>{todo.text.substring(0 , 100)}</h3>
    </section>
  ))
  return (

     <div>{renderedtodos}</div>
  )
}

export default Todo