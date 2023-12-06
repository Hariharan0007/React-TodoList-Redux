import React from 'react'
import logo from './images/todo.jpg';
import { useNavigate } from 'react-router-dom';

const TodoNavbar = () => {

    const nav = useNavigate();

    const getAllTodo = () => {
        nav("/todo/");
    }
    
    const addNew = () => {
        nav("/");
    }

  return (
    <div>
        <header className="px-10 lg:px-64">
            <p className="flex justify-center font-bold text-3xl lg:text-8xl items-center">
            <img className="h-14 lg:h-32 w-14 lg:w-32" src={logo} alt="logo" />
            ToDo - List
            </p>
            <p className="font-semibold text-sm lg:text-lg flex justify-end"> - - Mark your work</p>
        </header>
        <nav className="mt-4 border border-black py-2 bg-slate-500">
            <ul className="flex justify-evenly">
                <li className=" px-3 py-3 rounded-full bg-gray-600 hover:bg-gray-700 hover:cursor-pointer text-white font-semibold">Todays Todo</li>
                <li onClick={addNew} className=" px-3 py-3 rounded-full bg-gray-600 hover:bg-gray-700 hover:cursor-pointer text-white font-semibold">Add Todo</li>
                <li onClick={getAllTodo} className=" px-3 py-3 rounded-full bg-gray-600 hover:bg-gray-700 hover:cursor-pointer text-white font-semibold">View All</li>
            </ul>
        </nav>
    </div>
  )
}

export default TodoNavbar