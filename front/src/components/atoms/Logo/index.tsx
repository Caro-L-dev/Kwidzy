/**
 * Package Import
 */
import React from "react";
import Image from "next/image";

/**
 * Local Import
 */
import logo from "@/public/assets/images/Logo.svg";

/**
 * Component
 */
const Logo = ({}) => {
  return (
    <>
      <Image src={logo} height="100" alt="Kwidzy logo" />
    </>
  );
};

export default Logo;
