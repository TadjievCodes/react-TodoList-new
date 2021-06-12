import React from 'react'
import logo from './logo.svg';
import Todolist from './Todo/TodoList';
import Context from './context'



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


 function removeTodo(id) {
     setTodos(todos.filter(todo => todo.id !== id))
 }  

  return (
 <Context.Provider value={{ removeTodo }}>
    <div className="wrapper"> 
      <h1>React TodoList</h1>
        {todos.length ?  (
           <Todolist todos={todos} onToggle={toggleTodo} /> 
           ) : (   
            <p>No Todolist records!</p>   
           )}
     

       
    </div>
</Context.Provider> 
  
  );
}

export default App;
