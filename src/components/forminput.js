import { useContext, useEffect, useRef, useState } from "react"
import { DataContext } from "./dataProvider"

export default function Forminput () {
    const [todos, setTodos] = useContext(DataContext);
    const [ todoName, setTodoName] = useState('');
    const todoInput = useRef();

    const addTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}])
        setTodoName ('');
        todoInput.current.focus();
    }

    useEffect(()=> {
        todoInput.current.focus();
    },[])

     return (
        <form autoComplete="off" onSubmit={addTodo}>
        <input type="text" name="todos" id="todos" ref={todoInput}
        required placeholder="what needs to be done ?"
        value={todoName} onChange={e => setTodoName(e.target.value.toLowerCase())}
        />
        <button type="submit">Create</button>
          </form>
    
    )
}