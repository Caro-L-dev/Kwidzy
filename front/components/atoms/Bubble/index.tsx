import React from "react";

interface BubbleProps {
  children?: React.ReactNode;
}

const Bubble: React.FC<BubbleProps> = ({ children }) => {
  return (
    <div className="relative my-6">
      {/* Triangle Shape */}
      <div className="absolute right-0 top-0 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-tertiary-color" />
      <p className="p-4 bg-tertiary-color rounded-full mb-6 tracking-wide text-sm z-30">
        {children}
      </p>
    </div>
  );
};

export default Bubble;
