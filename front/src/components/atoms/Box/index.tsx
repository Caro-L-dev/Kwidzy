/**
 * Package Import
 */
import React from "react";
import classnames from "classnames";

/**
 * Types
 */
interface BoxProps {
  bgColor: string;
  children: React.ReactNode;
}

/**
 * Component
 */
const Box = ({ bgColor, children }: BoxProps) => {
  return (
    <>
      <p
        className={classnames(
          ` ${bgColor} flex justify-center items-center tracking-widest
            h-[73px] p-4 font-bold text-xl rounded-2xl my-4
          `
        )}
      >
        {children}
      </p>
    </>
  );
};

export default Box;
