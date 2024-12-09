import { getTodos } from "@/actions";
import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";
import { prisma } from "@/utils/prisma";
import { Fragment } from "react";

export default async function Home() {
  const todos = await getTodos();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-5xl sm:font-extrabold uppercase">Todo App</span>
      <h1 className="text-5xl sm:font-extrabold uppercase mb-5 text-center">
        <span className="lowercase">Server Actions</span>
      </h1>
      <div className="flex flex-col">
        <AddTodo />
        <div className="flex flex-col gap-5 justify-center items-center mt-10 w-screen">
          {todos.map((todo) => (
            <Fragment key={todo.id}>
              <Todo todo={todo} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
