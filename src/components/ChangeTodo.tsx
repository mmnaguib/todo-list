import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { changeTodo } from "@/actions";
import { FaCheckCircle } from "react-icons/fa";
export interface todo {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt?: Date;
}
const ChangeTodo = ({ todo }: { todo: todo }) => {
  return (
    <>
      <Form action={changeTodo}>
        <div className="flex gap-2">
          <Input
            type="hidden"
            name="titleId"
            placeholder="Add Todo Here ...."
            value={todo.id}
          />
          <Button
            type="submit"
            text={<i className="fa-solid fa-check"></i>}
            actionButton
            bgColor={todo.isCompleted ? "bg-green-400" : "bg-blue-500"}
          />
        </div>
      </Form>
    </>
  );
};

export default ChangeTodo;
