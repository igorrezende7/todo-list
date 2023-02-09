import React,{useState} from 'react';
import PropTypes from 'prop-types'
NewTodo.prototype = {
  onNewTodo: PropTypes.func,
}
export default function NewTodo({onNewTodo}) {


  const [value, setvalue] = useState('');
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
    if(onNewTodo){
      onNewTodo(value)
      eraser();
    }
  }

  return (
    <input className='new-todo'
    placeholder='O que precisa ser feito'
    value={value}
    onChange={onchange}
    onKeyDown={onKeyDown}
    />

  )
}
