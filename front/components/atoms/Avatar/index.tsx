/**
 * Package Import
 */
import React from "react";
import Image from "next/image";

/**
 * Local Import
 */
import avatar from "../../../public/assets/images/avatar.png";

/**
 * Component
 */
const Avatar: any = () => {
  return (
    <>
      <Image
        src={avatar}
        height="100"
        alt="ananavatar"
        className="rounded-full"
      />
    </>
  );
};

export default Avatar;
