/**
 * Package Import
 */
import React from "react";
import Link from "next/link";

/**
 * Local Import
 */
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Logo } from "@/src/components/atoms";

/**
 * Component
 */
export default function Navbar() {
  /**
   * Render
   */
  return (
    <nav className="flex justify-between items-center mb-7">
      <>
        <Link href={"/"} className="md:hidden">
          <AiOutlineArrowLeft />
        </Link>
        <Link href={"/"} className="hidden md:block">
          <Logo />
        </Link>

        <div className="flex items-center">
          <Link href={"/profil"}>
            <div
              className="bg-tertiary-color h-14 w-14 rounded-full mb-2 border-4 border-secondary-color flex justify-center items-center"
              aria-hidden="true"
            >
              <span>K</span>
            </div>
          </Link>
        </div>
      </>
    </nav>
  );
}
