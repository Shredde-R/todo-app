import React from 'react'
import unchecked_icon from '../Icons/unchecked-icon.png'
import check_icon from '../Icons/check-icon.jpeg'

const Todo_list = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <>
      <div className='flex  mt-2'  >
        <div className='w-[35px]  mt-0'>
        <button onClick={() =>{toggle(id)}}>  
        <img className='w-[20px] mt-1' src={isComplete? check_icon : unchecked_icon} />
        </button>
        </div>
        <div className='flex  w-[80%] mr-2'>
        <p className={`${isComplete? 'line-through' : ''}`}>{text}</p>
        </div>
        <div className='solid '>
          <button onClick={()=>{deleteTodo(id)}}
          className='w-[70px] h-[30px] rounded-full
           text-white bg-red-600 pb-[2px]'>
            Delete
          </button>
        </div>
      </div>
      
      </>  
  )
}

export default Todo_list
