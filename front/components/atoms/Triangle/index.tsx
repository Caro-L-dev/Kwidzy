/**
 * Package Import
 */
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "./classNames";

export const Triangle = ({
  className,
  position,
  ...props
}: {
  className: string;
  position: string;
}) => (
  <div
    className={classNames(
      `w-0 h-0`,
      position === "down"
        ? "border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[100px] border-t-primary-color"
        : "",
      position === "side-logo"
        ? "border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-tertiary-color"
        : "",
      position === "side-bubble"
        ? "border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-tertiary-color"
        : "",
      className
    )}
    {...props}
  />
);

Triangle.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(["down", "side-logo", "side-bubble"]),
};
