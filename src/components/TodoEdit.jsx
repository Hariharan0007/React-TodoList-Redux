import React, { useState,useEffect } from 'react'
import addTodo_img from './images/todo-trans.png';
import { useParams } from 'react-router-dom';
import { editTodo } from '../features/todo/todoSlices';
import { useSelector,useDispatch } from 'react-redux';

const TodoEdit = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    
    const Etodo = useSelector((state) => state.todo.todoList.find(item => item.id === id));

    const [title,setTitle] = useState(Etodo.title);
    const [desc,setDesc] = useState(Etodo.desc);
    

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

        const todo = {
            id:Etodo.id,
            title:title,
            desc:desc,
            timeline:timeline
        };
        

        dispatch(editTodo(todo));

        console.log("Updated Successfully !!!");

    }



  return (
    <div className="mt-10 flex justify-center">
        <form className="flex justify-center border rounded-lg bg-slate-200 border-black w-fit px-5 py-5" method="post" onSubmit={handleSubmit}>
            <section>
                <div className="flex justify-center font-bold text-2xl">
                    <p>Edit Your To-Do</p>
                    <img className="h-10 w-10 " src={ addTodo_img } alt="add-logo" />
                </div>
                <div className="flex">
                    <div className="flex flex-col my-4 mx-2">
                        <label className="font-semibold" htmlFor="title">Title</label>
                        <input id="title" className="border rounded-md outline-none px-2" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className="flex flex-col my-4 mx-2">
                        <label className="font-semibold" htmlFor="title">Description</label>
                        <input id="desc" className="border rounded-md outline-none px-2" type="text" onChange={(e) => setDesc(e.target.value)} value={desc}/>
                    </div>
                    <div className="flex justify-center mt-5 items-center mx-2">
                        <button className="bg-blue-400 hover:bg-blue-500 hover:font-bold rounded-md px-7 py-1 h-fit" type="submit">Update</button>
                    </div>
                </div>
            </section>
        </form>
    </div>
  )
}

export default TodoEdit