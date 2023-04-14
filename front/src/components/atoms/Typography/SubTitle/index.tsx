/**
 * Package Import
 */
import React from "react";

/**
 * Type
 */
interface SubTitleProps {
  name: string;
}

/**
 * Component
 */
const SubTitle = ({ name }: SubTitleProps) => {
  return (
    <h2 className="text-lg tracking-wide md:text-3xl md:font-bold">{name}</h2>
  );
};

export default SubTitle;
