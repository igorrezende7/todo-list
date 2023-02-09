import React from 'react'
import {MdDelete} from 'react-icons/md'
import PropTypes from 'prop-types'

TodoList.protoTypes = {
  todos:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      title:PropTypes.string.isRequired,
      checked:PropTypes.bool.isRequired
    }).isRequired
  ) ,
  Toggle: PropTypes.func.isRequired,
  onRemove:PropTypes.func.isRequired

}

export default function TodoList({todos, Toggle, onRemove}) {




  return (
    <>
        <ul className='todo-list'>
        {todos.map((todo)=>(
          <li  key={todo.id.toString()}>
            <span
            onClick={()=> Toggle(todo)}
            role='button'
            onKeyPress={()=> Toggle(todo)}
            tabIndex={0}
            className={`${todo.checked  ? 'todo checked' : 'todo'}`}>
              {todo.title}
            </span>
            <button
            onClick={() => onRemove(todo)}
            className='remove' type='button'>
              <MdDelete size={28}/>
            </button>
          </li>
        )

        )}
      </ul>
    </>
  )
}
