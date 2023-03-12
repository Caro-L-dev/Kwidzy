/**
 * Package Import
 */
import React from "react";

interface TitleProps {
  Title: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ Title }) => {
  return <h1 className="hidden md:block md:text-4xl md:font-bold">{Title}</h1>;
};

export default Title;
