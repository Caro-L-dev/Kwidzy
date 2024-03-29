/**
 * Package Import
 */
import React from "react";

/**
 * Local Import
 */
import { classNames } from "./classNames";

/**
 * Types
 */
type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "correct"
  | "mistake";

interface ButtonProps {
  id?: string;
  type?: "submit" | "reset" | "button";
  className?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  variant?: ButtonVariant | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Component
 */
export const Button: React.FC<ButtonProps> = ({
  id,
  type = "button",
  className = "",
  children,
  rounded = false,
  variant = "primary",
  onClick,
  ...props
}) => {
  const buttonClasses = classNames(
    "px-4 py-2 cursor-pointer shadow-md border-r-[5px] border-b-[5px] text-sm md:text-lg tracking-widest flex justify-center items-center mx-auto w-full h-[70px] md:h-[90px]",
    rounded ? "rounded-2xl" : "",
    variant === "primary" ? "bg-primary-color border-darker-primary-color" : "",
    variant === "secondary"
      ? "bg-secondary-color border-darker-secondary-color"
      : "",
    variant === "tertiary"
      ? "bg-tertiary-color border-darker-tertiary-color"
      : "",
    variant === "correct" ? "bg-correct-color border-darker-correct-color" : "",
    variant === "mistake" ? "bg-mistake-color border-darker-mistake-color" : "",
    className
  );

  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};
