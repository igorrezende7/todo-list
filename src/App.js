import React,{useState} from 'react'
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App = () =>{


const [todos, setTodos]= useState([])

const onNewTodo = (value) =>{
  setTodos([
    ...todos,
      {
        id: new Date().getTime(),
        title:value,
        checked: false
      }
    ])
}

function Toggle(todo){

  const newTodos = todos.map((obj)=>(obj.id === todo.id ? {...obj, checked:!todo.checked} : obj));
  setTodos(newTodos)
}

function onRemove(todo){
  const newTodos = todos.filter((obj)=>obj.id !== todo.id)
  setTodos(newTodos)
}


  return(
    <section id='app' className='container'>
      <header>
        <h1 className='title'>ToDo</h1>
      </header>
      <section className='main'>
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} Toggle={Toggle} onRemove={onRemove} />

      </section>
   </section>
  )
}


export default App;
