/**
 * Package Import
 */
import React from "react";

/**
 * Type
 */
interface TitleProps {
  name: string;
}

/**
 * Component
 */
const Title = ({ name }: TitleProps) => {
  return <h1 className="hidden md:block md:text-4xl md:font-bold">{name}</h1>;
};

export default Title;
