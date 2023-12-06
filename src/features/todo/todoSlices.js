import { createSlice } from "@reduxjs/toolkit";
import { v4 as uid } from 'uuid';

const initialState = {
    todoList : []
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,actions) => {
            const newTodo = {
                id:uid(),
                ...actions.payload
            }
            state.todoList = [...state.todoList,newTodo]
        },
        deleteTodo:(state,actions) => {
            console.log(actions.payload);
            state.todoList = state.todoList.filter(todo => todo.id !== actions.payload)
        },
        editTodo:(state,actions) =>{
            const {id, title, desc, timeline } = actions.payload;
            console.log("ACTION PAYLOAD \n"+actions.payload +"\n");
            const exTodo = state.todoList.find(items => items.id === id);
            console.log("EXISTING PAYLOAD \n"+exTodo + "\n\n");
            if(exTodo){
                exTodo.title = title;
                exTodo.desc = desc;
                exTodo.timeline = timeline;
            }
        }
    }
})

export const { addTodo,deleteTodo,editTodo } = todoSlice.actions;

export default todoSlice.reducer;