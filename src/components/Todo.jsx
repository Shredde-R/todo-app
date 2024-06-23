import React, { useRef, useState, useEffect } from 'react'
import todo_icon from '../Icons/todo-icon.jpeg'
import Todo_list from './Todo_list'

const Todo = () => {

 
const [todoList, setTodoList] = useState(localStorage.getItem('todos')?
 JSON.parse(localStorage.getItem('todos')) : []);

const inputRef = useRef();

const add = () =>{
    const inputText = inputRef.current.value.trim();

    if(inputText===''){
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList((prev)=> [...prev, newTodo]);
    inputRef.current.value='';
}

const deleteTodo = (id) => {
    setTodoList((prevTodos) =>{
      return prevTodos.filter((todo) => todo.id !==id)
    })
}

const toggle = (id) =>{
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
}

useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]
)

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md
    flex flex-col p-7 min-h-[550px] rounded-xl'>
      
      <div className='flex items-center '>
        <img src={todo_icon} alt='' className='size-[30px] mr-[15px]'/>
          <p className='text-[25px] font-semibold '>Your To-Dos</p>
          <button className='ml-auto bg-yellow-500 w-[55px] text-white
          rounded-full pb-[2px]'>
            +New
          </button>
      </div>
      <div className='mt-[20px] h-[40px] rounded-[20px] flex items-center bg-gray-300'>
          <input ref={inputRef} className='outline-0 ml-4 mr-[10px] bg-gray-300 w-[70%]' type='text' placeholder='Add your task' />
          <button onClick={add} className='bg-orange-400  h-[40px] w-[100px] rounded-[20px]
            text-white'>
            ADD
          </button>
      </div>
      <div className=' min-h-[377px] mt-6'>
        {todoList.map((item, index)=>{
          return <Todo_list key={index} text={item.text}
           id={item.id} isComplete={item.isComplete}
           deleteTodo = {deleteTodo} toggle={toggle} />
        })}
      </div>
    </div>
  )
}

export default Todo
