"use client";
import React, { useState } from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { EditTodoAction } from "@/actions";
import { todo } from "./ChangeTodo";

const EditTodo = ({ todo }: { todo: todo }) => {
  const [editTodo, setEditTodo] = useState(false);
  const handleEdit = () => {
    if (todo.isCompleted) return;
    setEditTodo(!editTodo);
  };
  return (
    <>
      <Button
        text={<i className="fa-solid fa-pen-to-square"></i>}
        actionButton
        onClick={handleEdit}
        bgColor="bg-yellow-400"
      />
      {editTodo ? (
        <Form action={EditTodoAction} onSubmit={handleEdit}>
          <div className="flex gap-2">
            <Input
              type="hidden"
              name="titleId"
              placeholder="Add Todo Here ...."
              value={todo.id}
            />
            <Input
              type="text"
              name="edit-title"
              placeholder="Add Todo Here ...."
              //value={todo.title}
            />
            <Button
              type="submit"
              text={<i className="fa-solid fa-floppy-disk"></i>}
              bgColor="bg-blue-600"
            />
          </div>
        </Form>
      ) : null}
    </>
  );
};

export default EditTodo;
