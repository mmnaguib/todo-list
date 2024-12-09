"use client";
import React, { Children, ReactNode, useRef } from "react";

export interface IFormProps {
  children: ReactNode;
  action: (formData: FormData) => void;
  onSubmit?: () => void;
  className?: string;
}
const Form = ({ children, action, onSubmit, className }: IFormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={`m-auto ${className}`}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
      onSubmit={onSubmit}
      ref={ref}
    >
      {children}
    </form>
  );
};

export default Form;
