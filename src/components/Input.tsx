import React from "react";

export interface IPropsInput {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}
const Input = ({ name, type, placeholder, value }: IPropsInput) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      className="block w-full p-4 mx-2 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
    />
  );
};

export default Input;
