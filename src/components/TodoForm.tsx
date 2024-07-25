"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import TodoLists from "./TodoLists";
import { addTodo, editTodo } from "@/redux/TodoSlice";
import { RootState, AppDispatch  } from "../redux/store";

const TodoForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [todoinput, setTodoinput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const todoList = useSelector((state: RootState) => state.todo.todoList);

  const saveTodo = () => {
    if (todoinput === "") {
      toast.error("Please enter your todo!");
    } else if (editingId !== null) {
      dispatch(editTodo({
        id: editingId,
        text: todoinput,
      }));
      toast.success("Todo edited successfully");
      setEditingId(null);
    } else {
      const newTodo = {
        id: Math.random(),
        text: todoinput,
      };
      dispatch(addTodo(newTodo));
      toast.success("Todo added successfully");
    }
    setTodoinput("");
  };

  const handleEditTodo = (id: number) => {
    const todoToEdit = todoList.find((item) => item.id === id);
    if (todoToEdit) {
      setEditingId(id);
      setTodoinput(todoToEdit.text);
    }
  };

  return (
    <main className="py-10 max-w-screen-2xl mx-auto px-4">
      <div className="max-w-2xl mx-auto bg-white text-slate-950 py-10 px-6 rounded-md shadow-lg shadow-slate-400">
        <div className="w-full flex items-center gap-x-3 h-10">
          <div className="h-full w-full border-slate-400 relative">
            <input
              className="border  w-full h-full rounded-md outline-none px-4 focus-visible:border-green-600 text-base font-medium placeholder:font-normal"
              type="text"
              placeholder="enter your todo here"
              onChange={(e) => setTodoinput(e.target.value)}
              value={todoinput}
            />
            {todoinput.length > 0 && (
              <span
                onClick={() => setTodoinput("")}
                className="absolute right-2 top-3 text-lg text-red-600 hover:text-red-700 duration-200 cursor-pointer"
              >
                <IoClose />
              </span>
            )}
          </div>
          <button
            onClick={saveTodo}
            className="bg-slate-800 text-slate-200 px-7 h-full rounded-md hover:bg-black hover:text-white duration-200"
          >
            {editingId !== null ? "Update" : "Add"}
          </button>
        </div>
        <TodoLists onEdit={handleEditTodo} />
      </div>
      <Toaster />
    </main>
  );
};

export default TodoForm;
