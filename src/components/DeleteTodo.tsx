import React from "react";
import Form from "./Form";
import Button from "./Button";
import Input from "./Input";
import { todo } from "./ChangeTodo";
import { DeleteEidtAction } from "@/actions";

const DeleteTodo = ({ todo }: { todo: todo }) => {
  return (
    <>
      <Form action={DeleteEidtAction}>
        <div className="flex gap-2">
          <Input
            type="hidden"
            name="titleId"
            placeholder="Add Todo Here ...."
            value={todo.id}
          />
          <Button
            type="submit"
            text={<i className="fa-solid fa-trash"></i>}
            actionButton
            bgColor="bg-red-400"
          />
        </div>
      </Form>
    </>
  );
};

export default DeleteTodo;
