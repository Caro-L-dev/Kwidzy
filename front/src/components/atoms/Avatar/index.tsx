/**
 * Package Import
 */
import React from "react";
import Image, { StaticImageData } from "next/image";

/**
 * Local Import
 */
import { classNames } from "./classNames";

/**
 * Types
 */
interface AvatarProps {
  className: string;
  src: string | StaticImageData;
  alt: string;
  variant: string;
  size: string;
}

/**
 * Component
 */
const Avatar = ({ className, src, alt, variant, size }: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={classNames(
        `hover:border-2 hover:border-primary-color`,
        variant === "rounded" ? "rounded" : "",
        variant === "circular" ? "rounded-full" : "",
        size === "sm" ? "w-12 h-12" : "",
        size === "md" ? "w-14 h-14" : "",
        size === "lg" ? "w-15 h-15" : "",
        className
      )}
    />
  );
};

export default Avatar;
