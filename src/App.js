import React from 'react'
import logo from './logo.svg';
import Todolist from './Todo/TodoList';


function App() {

const [todos, setTodos] = React.useState([
  
  {id: 1, completed: false, title: "Buy bread"},
  {id: 2, completed: true, title: "Buy butter"},
  {id: 3, completed: false, title: "Buy milk"}

])



 function toggleTodo(id) {
      
    setTodos(
       todos.map( todo => {
       if (todo.id === id){
           todo.completed = !todo.completed
       }
          return todo
       })
     )
 }


  return (
  <div className="wrapper"> 
    <h1>React TodoList</h1>
      <Todolist todos={todos} onToggle={toggleTodo}/>
  </div>
  
  );
}

export default App;
