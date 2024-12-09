"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  if (!title.trim()) return;
  await prisma.todo.create({
    data: {
      title,
    },
  });

  revalidatePath("/");
}

export async function changeTodo(formData: FormData) {
  const titleId = formData.get("titleId") as string;
  if (!titleId.trim()) return;
  const foundedTodo = await prisma.todo.findUnique({
    where: {
      id: titleId,
    },
  });

  const updateStatus = !foundedTodo?.isCompleted;
  await prisma.todo.update({
    where: {
      id: titleId,
    },
    data: {
      isCompleted: updateStatus,
    },
  });

  revalidatePath("/");
}

export async function EditTodoAction(formData: FormData) {
  const titleId = formData.get("titleId") as string;
  const newTitle = formData.get("edit-title") as string;
  if (!newTitle.trim()) return;

  await prisma.todo.update({
    where: {
      id: titleId,
    },
    data: {
      title: newTitle,
    },
  });

  revalidatePath("/");
}

export async function DeleteEidtAction(formData: FormData) {
  const titleId = formData.get("titleId") as string;

  await prisma.todo.delete({
    where: {
      id: titleId,
    },
  });

  revalidatePath("/");
}

export async function getTodos() {
  const todos = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return todos;
}
