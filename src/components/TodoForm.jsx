import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import addTodo_img from './images/todo-trans.png';
import TodoList from './TodoList';

const TodoForm = ({addTodo}) => {

    // const nav = useNavigate();

    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
   
    const handleTitle = () => {
        const tit = document.getElementById("title").value;
        if(tit!=="")
        setTitle(tit);
    }

    const handleDesc = () => {
        const des = document.getElementById("desc").value;
        if(des!=="")
        setDesc(des);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !desc){
            alert("Enter all values");
            return;
        }

        const today = new Date();
        const hr = today.getHours();
        const min = today.getMinutes();
        const sec = today.getSeconds();
        const time = hr + ":" + min + ":" + sec;

        const yr = today.getFullYear();
        const mn = today.getMonth() + 1;
        const dt = today.getDate();
        const date = dt + "/" + mn + "/" + yr;

        const timeline = date + " " + time

        const todo = {title,desc,timeline};

        addTodo(todo);

        console.log("Added Successfully !!!");

        // nav('/all/',{ state:{todo}} );
    }



  return (
    <div className="mt-10 flex justify-center">
        <form className="flex justify-center border rounded-lg bg-slate-200 border-black w-fit px-5 py-5" method="post" onSubmit={handleSubmit}>
            <section>
                <div className="flex justify-center font-bold text-2xl">
                    <p>Add Your New To-Do</p>
                    <img className="h-10 w-10 " src={ addTodo_img } alt="add-logo" />
                </div>
                <div className="flex">
                    <div className="flex flex-col my-4 mx-2">
                        <label className="font-semibold" htmlFor="title">Title</label>
                        <input id="title" className="border rounded-md outline-none px-2" type="text" onChange={handleTitle} />
                    </div>
                    <div className="flex flex-col my-4 mx-2">
                        <label className="font-semibold" htmlFor="title">Description</label>
                        <input id="desc" className="border rounded-md outline-none px-2" type="text" onChange={handleDesc} />
                    </div>
                    <div className="flex justify-center mt-5 items-center mx-2">
                        <button className="bg-blue-400 hover:bg-blue-500 hover:font-bold rounded-md px-7 py-1 h-fit" type="submit">Add</button>
                    </div>
                </div>
            </section>
        </form>
    </div>
  )
}

export default TodoForm