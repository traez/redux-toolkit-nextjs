import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
}

interface TodoState {
  todoList: Todo[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    resetTodo: (state) => {
      state.todoList = [];
    },  
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.todoList.findIndex((item) => item.id === id);
      if (todoIndex !== -1) {
        state.todoList[todoIndex].text = text;
      }
    },

  },
});

export const { addTodo, deleteTodo, resetTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
