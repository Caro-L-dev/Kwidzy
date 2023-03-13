/**
 * Package Import
 */
import React from "react";
import classnames from "classnames";

// ajout type text, email input

function Input({
  bgColor,
  children,
}: {
  bgColor: string;
  children?: React.ReactNode;
}) {
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
}

export default Input;
