import React, { useState } from "react"; 
// import DeleteIcon from "@material-ui/icons/Delete"; 
// import { Delete } from '@mui/icons-material'; 
import { AddOutlined, DeleteOutlined } from "@mui/icons-material"; 
 
import "./App.css"; 
const TodoList = () => { 
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(""); 
 
  const addTodo = () => { 
    if (newTodo.trim() !== "") { 
      const newId = todos.length + 1; 
      const newTodoItem = { id: newId, text: newTodo }; 
      setTodos([...todos, newTodoItem]); 
      setNewTodo(""); 
    } 
  }; 
 
  const deleteTodo = (id) => { 
    const updatedTodos = todos.filter((todo) => todo.id !== id); 
    setTodos(updatedTodos); 
  }; 
 
  return ( 
    <div className="whole"> 
      <div> 
        <h1 className="title">Todo List</h1> 
      </div> 
      <div className="addplace"> 
        <div style={{paddingRight:"7px"}}> 
          <input 
            className="input" 
            type="text" 
            placeholder="   Add a new task" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
          /> 
        </div> 
 
        <div> 
          <button onClick={addTodo} className="button"> 
        <AddOutlined /> 
          </button> 
        </div> 
      </div> 
      <div> 
        {todos.map((todo) => ( 
          <div key={todo.id} className="tile"> 
            <div className="text">{todo.text}</div> 
            <button onClick={() => deleteTodo(todo.id)} className="delete"> 
              <DeleteOutlined /> 
            </button> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
}; 
 
export default TodoList;