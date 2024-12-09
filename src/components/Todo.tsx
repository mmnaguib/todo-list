import React from "react";
import ChangeTodo, { todo } from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import { FaTrash } from "react-icons/fa";

const Todo = ({ todo }: { todo: todo }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted ? "line-through" : "none",
    opacity: todo.isCompleted ? 0.5 : 1,
  };
  return (
    <div
      dir="rtl"
      style={todoStyle}
      className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 rounded-2xl px-0 sm:px-20"
    >
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase grow">{todo.title}</span>
      <div className="flex items-center mx-2">
        <EditTodo todo={todo} />
      </div>
      <div className="flex items-center mx-2">
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
