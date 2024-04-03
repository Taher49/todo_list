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
    return (
        <div className="row">
        <label htmlFor="all" >
        <input type="checkbox" name="all" id="all" />
        ALL
        </label>
        <p>You have 0 to do</p>
        <button id="delete">Delete</button>
      </div>
    )
}
