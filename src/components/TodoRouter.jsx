import React from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoEdit from './TodoEdit';
import TodoNavbar from './TodoNavbar';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const TodoRouter = () => {
  return (
       <Router>
        <TodoNavbar/>
        <Routes>
            <Route path='/' element={<TodoForm/>}></Route>
            <Route path='/todo' element={<TodoList/>}></Route>
            <Route path='/todo-edit/:id' element={<TodoEdit/>}></Route>
        </Routes>
       </Router>
  )
}

export default TodoRouter