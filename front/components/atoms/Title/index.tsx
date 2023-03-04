import React from "react";

interface TitleProps {
  children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="hidden md:block md:text-4xl md:font-bold">{children}</h1>
  );
};

export default Title;
