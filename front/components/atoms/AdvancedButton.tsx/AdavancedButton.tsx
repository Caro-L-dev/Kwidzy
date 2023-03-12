import React from "react";
import PropTypes from "prop-types";
import { classNames } from "./classNames";

export const Button = ({
  id,
  type,
  className,
  children,
  rounded,
  variant,
  onClick,
  ...props
}: {
  id: string;
  type: "submit" | "reset" | "button";
  className: string;
  children: React.ReactNode;
  rounded: boolean;
  variant: string;
  onClick?: React.MouseEventHandler;
}) => (
  <button
    type={type || "button"}
    id={id}
    onClick={onClick}
    className={classNames(
      "px-4 py-2 cursor-pointer shadow-md border-r-[5px] border-b-[5px] text-sm md:text-lg tracking-widest",
      rounded ? "rounded-2xl" : "",
      variant === "primary"
        ? "bg-primary-color border-darker-primary-color"
        : "",
      variant === "secondary"
        ? "bg-secondary-color border-darker-secondary-color"
        : "",
      variant === "tertiary"
        ? "bg-tertiary-color border-darker-tertiary-color"
        : "",
      variant === "correct"
        ? "bg-correct-color border-darker-correct-color"
        : "",
      variant === "mistake"
        ? "bg-mistake-color border-darker-mistake-color"
        : "",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  rounded: false,
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  rounded: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "correct",
    "mistake",
  ]),
};
