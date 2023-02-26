import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="w-full md:w-[247px] p-2 cursor-pointer rounded-full bg-[#F4B24F] border-r-[5px] border-b-[5px] border-[#DA8505]">
      {children}
    </button>
  );
};

export default Button;
