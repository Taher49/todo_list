import { useContext } from "react"
import { DataContext } from "./dataProvider"
import ListItem from "./listItem"
export default function List () {

  const [todos, setTodos] = useContext(DataContext);

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if(index === id) {
        todo.name = editValue
      }
    })
  }


  const switchComplete = id => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if(index === id) {
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }
    return (
        <ul>

        {
          todos.map((todo, index) =>(
            <ListItem todo={todo} key={index} id={index}
            checkComplete={switchComplete} handleEditTodos={handleEditTodos}
            />
          ))
        }
        
    
        </ul>
    )
}
