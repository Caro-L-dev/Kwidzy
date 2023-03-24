/**
 * Package Import
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Local Import
 */
import { classNames } from "./classNames";

/**
 * Types
 */
interface TriangleProps {
  className: string;
  position: string;
}

/**
 * Component
 */
export const Triangle = ({ className, position }: TriangleProps) => {
  return (
    <div
      className={classNames(
        `w-0 h-0`,
        position === "down"
          ? "border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[100px] border-t-primary-color"
          : "",
        position === "side-logo"
          ? "border-l-[30px] border-l-transparent border-r-[30px] border-r-primary-color border-b-[50px] border-b-primary-color transform rotate-0"
          : "",
        position === "side-bubble"
          ? "border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-tertiary-color"
          : "",
        className
      )}
    />
  );
};

/**
 * Types
 */
Triangle.propTypes = {
  position: PropTypes.oneOf(["down", "side-logo", "side-bubble"]),
};
