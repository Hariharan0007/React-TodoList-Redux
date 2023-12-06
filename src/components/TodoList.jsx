import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlices';

const TodoList = () => {

  const nav = useNavigate();

  const todolist = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  console.log(todolist);

  const handleEdit = (id) => {
      console.log("You are editing.... " + id);
      nav(`/todo-edit/${id}`)
  }

  return (
    <div>
        {todolist.map((list) => (
        <section key={list.id} className="rounded-2xl border border-black mx-32 mt-5 p-5 bg-slate-200">
            <div>
                <p className="flex justify-center text-2xl font-extrabold">{list.title}</p>
                <p className="mt-3">{list.desc}</p>
                <div className="flex justify-end mt-3">
                    <p className="font-extralight italic px-3">Created at : {list.timeline}</p>
                    <button onClick={() => {handleEdit(list.id)}} className="px-3 rounded-2xl bg-blue-400 hover:cursor-pointer hover:bg-blue-500 hover:font-semibold">Edit</button>
                    <button onClick={() => dispatch(deleteTodo(list.id))}  className=" mx-2 px-3 rounded-2xl bg-red-400 hover:cursor-pointer hover:bg-red-500 hover:font-semibold">Delete</button>
                </div>
            </div>
        </section>
         ))} 
    </div>
  )
}

export default TodoList