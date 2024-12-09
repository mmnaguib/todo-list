import clsx from "clsx";
import React from "react";

export interface IButtonProps {
  type?: "button" | "reset" | "submit";
  text?: string | React.ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
}
const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        actionButton &&
          "text-white hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 outline-none",
        `${bgColor} hover:${bgColor} font-medium rounded-lg  text-sm px-5 py-2.5 me-2 outline-none `
      )}
    >
      {text}
    </button>
  );
};

export default Button;
