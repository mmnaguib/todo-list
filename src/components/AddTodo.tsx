import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { createTodo } from "@/actions";

const AddTodo = () => {
  return (
    <div dir="rtl" style={{ width: "600px", margin: "auto" }}>
      <Form action={createTodo}>
        <div className="flex gap-2">
          <Input type="text" name="title" placeholder="Add Todo Here ...." />
          <Button
            type="submit"
            text={<i className="fa-solid fa-plus"></i>}
            bgColor="bg-blue-600"
          />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
