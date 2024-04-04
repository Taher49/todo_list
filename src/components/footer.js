import { useContext, useState } from "react"
import { DataContext } from "./dataProvider"

export default function Footer () {

  const [CheckAll , setCheckAll] =useState(false)
  const [todos , setTodos]= useContext(DataContext)

  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complete = !CheckAll
    })
    setTodos(newTodos)
    setCheckAll(!CheckAll)
  }

  const deleteTodo = () =>{
    const newTodos = todos.filter(todo =>{
      return todo.complete === false
    })
    setTodos(newTodos)
    setCheckAll(false)
  }
    return (
      <>
      {
            todos.length === 0 ? <h2> congratulations! Noyhings To Do</h2>
           :  <div className="row">
             <label htmlFor="all" >
             <input type="checkbox" name="all" id="all" 
              onClick={handleCheckAll} checked={CheckAll}  />
             ALL
             </label>
             <p>You have {todos.filter(todo => todo.complete === false ).length} to do</p>
             <button id="delete" onClick={deleteTodo}>Delete</button>
           </div>
      }
      </>
    )
}
