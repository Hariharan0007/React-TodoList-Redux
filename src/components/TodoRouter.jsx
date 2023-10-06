import React from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoNavbar from './TodoNavbar';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const TodoRouter = () => {
  return (
       <Router>
        <TodoNavbar/>
        <Routes>
            <Route path='/' element={<TodoList/>}></Route>
        </Routes>
       </Router>
  )
}

export default TodoRouter