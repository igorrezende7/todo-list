import React,{useState} from 'react'
import './App.css';
import {MdDelete} from 'react-icons/md'
const App = () =>{

const [value, setvalue] = useState('');
const [todos, setTodos]= useState([])
const enter = 13
const esc = 27


function onchange(e){
  setvalue(e.target.value)
}
function eraser(){
  setvalue('')
}

function onKeyDown(e){
  if(e.which === enter){
    handleSubmit();
  }
  else if(e.which === esc){
    eraser()
  }
}

function handleSubmit(){
  setTodos([
    ...todos,
      {
        id: new Date().getTime(),
        title:value,
        checked: false
      }
    ])
  eraser();
}

function toggle(todo){

  todos.map((obj)=>(obj.id === todo.id ? {...obj, checked:true} : obj));
  console.log('toggle', todo)
}

  return(
    <section id='app' className='container'>
      <header>
        <h1 className='title'>ToDo</h1>
      </header>
      <section className='main'>
      <input className='new-todo'
      placeholder='O que precisa ser feito'
      value={value}
      onChange={onchange}
      onKeyDown={onKeyDown}
      />

      <ul className='todo-list'>
        {todos.map((todo)=>(
          <li  key={todo.id.toString()}>
            <span
            onClick={()=> toggle(todo)}
            role='button'
            onKeyPress={()=> toggle(todo)}
            tabIndex={0}
            className='todo'>
              {todo.title}
            </span>
            <button className='remove' type='button'>
              <MdDelete size={28}/>
            </button>
          </li>
        )

        )}
      </ul>
      </section>
   </section>
  )
}


export default App;
