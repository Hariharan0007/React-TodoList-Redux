import React, { useState } from 'react'
import TodoForm from './TodoForm';
// import { useLocation } from 'react-router-dom'

const TodoList = () => {

  

  // const loc = useLocation()
  // const todo = loc.state?.todo;
  // const list = todo;

  const [todolist,setTodolist] = useState([]);

  const addTodo = (newTodo) => {
    console.log("Called Adding ToDo");
    setTodolist([...todolist,newTodo]);
    console.log(newTodo);
    console.log(todolist);
  }

  return (
    <div>
        <TodoForm addTodo={addTodo}/>
        {todolist.map((list) => (
        <section className="rounded-2xl border border-black mx-32 mt-5 p-5 bg-slate-200">
            <div>
                <p className="flex justify-center text-2xl font-extrabold">{list.title}</p>
                <p className="mt-3">{list.desc}</p>
                <div className="flex justify-end mt-3">
                    <p className="font-extralight italic px-3">Created at : {list.timeline}</p>
                    <p className="px-3 rounded-2xl bg-blue-400 hover:cursor-pointer hover:bg-blue-500 hover:font-semibold">Edit</p>
                    <p className=" mx-2 px-3 rounded-2xl bg-red-400 hover:cursor-pointer hover:bg-red-500 hover:font-semibold">Delete</p>
                </div>
            </div>
        </section>
        ))}
    </div>
  )
}

export default TodoList