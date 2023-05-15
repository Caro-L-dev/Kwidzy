/**
 * Package Import
 */
import React from "react";

/**
 * Type
 */
interface BubbleProps {
  children?: React.ReactNode;
}

/**
 * Component
 */
const Bubble = ({ children }: BubbleProps) => {
  return (
    <div className="relative my-6">
      <p className="p-4 bg-tertiary-color rounded-full mb-6 tracking-wide text-sm z-30">
        {children}
      </p>
    </div>
  );
};

export default Bubble;
