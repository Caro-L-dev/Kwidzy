/**
 * Package Import
 */
import React from "react";

interface SubTitleProps {
  subtitle: React.ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ subtitle }) => {
  return (
    <h2 className="text-lg tracking-wide md:text-3xl md:font-bold">
      {subtitle}
    </h2>
  );
};

export default SubTitle;
