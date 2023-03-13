/**
 * Package Import
 */
import React from "react";

/**
 * local Import
 */
import { Triangle } from "../index";

interface BubbleProps {
  children?: React.ReactNode;
}

// Corriger position Triangle
const Bubble: React.FC<BubbleProps> = ({ children }) => {
  return (
    <div className="relative my-6">
      <Triangle
        className={"absolute right-[-2px] top-0"}
        position={"side-bubble"}
      />
      <p className="p-4 bg-tertiary-color rounded-full mb-6 tracking-wide text-sm z-30">
        {children}
      </p>
    </div>
  );
};

export default Bubble;
