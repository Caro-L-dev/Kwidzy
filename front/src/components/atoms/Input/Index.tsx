/**
 * Package Import
 */
import React from "react";
import classnames from "classnames";

/**
 * Types
 */
interface InputProps {
  bgColor: string;
  children?: React.ReactNode;
}

/**
 * Component
 */
const Input = ({ bgColor, children }: InputProps) => {
  return (
    <>
      <input
        className={classnames(
          `${bgColor} flex justify-center items-center tracking-widest h-[73px] p-4 font-bold text-sm rounded-2xl my-4`
        )}
      >
        {children}
      </input>
    </>
  );
};

export default Input;
