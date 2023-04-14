/**
 * Package Import
 */
import React from "react";

/**
 * Local Import
 */
import { classNames } from "./classNames";

enum TrianglePosition {
  Down = "down",
  SideLogo = "side-logo",
  SideBubble = "side-bubble",
}

interface TriangleProps {
  className?: string;
  position?: TrianglePosition;
}

/**
 * Component
 */
export const Triangle = ({
  className = "",
  position = TrianglePosition.Down,
}: TriangleProps) => {
  return (
    <div
      className={classNames(
        "w-0 h-0",
        position === TrianglePosition.Down
          ? "border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[100px] border-t-primary-color"
          : "",
        position === TrianglePosition.SideLogo
          ? "border-l-[30px] border-l-transparent border-r-[30px] border-r-primary-color border-b-[50px] border-b-primary-color transform rotate-0"
          : "",
        position === TrianglePosition.SideBubble
          ? "border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-tertiary-color"
          : "",
        className
      )}
    />
  );
};
