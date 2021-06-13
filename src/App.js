import React, {useEffect} from 'react'
import logo from './logo.svg';
import Todolist from './Todo/TodoList';
import Context from './context'
import AddTodo from './Todo/AddTodo'
import Loader from './Loader'


function App() {

const [todos, setTodos] = React.useState([])
const [loading, setLoading] = React.useState(true)

  /*
  {id: 1, completed: false, title: "Buy bread"}
  {id: 2, completed: true, title: "Buy butter"}
  {id: 3, completed: false, title: "Buy milk"}
*/



useEffect(  () => {
 fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
  .then(response => response.json())
  .then(todos => {
      setTimeout( () => {  
        setTodos(todos)
        setLoading(false)
      }, 2000)
  })

},  [])



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

function addTodo(title) {
     setTodos(todos.concat([{
       title,
       id: Date.now(),
       completed: false
     
     }]))
}

  return (
 <Context.Provider value={{ removeTodo }}>
    <div className="wrapper"> 
      <h1>React TodoList</h1>
        <AddTodo onCreate={addTodo} />

        {loading && <Loader />}
        {todos.length ?  (
           <Todolist todos={todos} onToggle={toggleTodo} /> 
           ) :   loading ? null  :  (      
            <p>No Todolist records!</p>   
           )}
     

       
    </div>
</Context.Provider> 
  
  );
}

export default App;
