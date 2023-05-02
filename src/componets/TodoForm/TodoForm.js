import React, { useState } from 'react'
import './TodoForm.css'
import { AiOutlinePlus  , AiOutlineArrowUp } from "react-icons/ai";
const TodoForm = () => {
    const [ value , setvalue ] = useState("")
    const hnadleSubmit = (e) => {
        e.preventDefault();

    }
  return (
    <>
    <form onSubmit={hnadleSubmit}>
        <input value={value} onChange={(e) => setvalue(e.target.value)} className='npt' placeholder='Add task' />
        <AiOutlinePlus className='plus' />
        <AiOutlineArrowUp className='Arrow' />
    </form>
    </>
  )
}

export default TodoForm
