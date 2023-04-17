/**
 * Package Import
 */
import React from "react";
import Link from "next/link";
// import { useAuth } from "../hooks/useAuth";

/**
 * Local Import
 */
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Logo, Avatar, Button } from "@/src/components/atoms";

/**
 * Image Import
 */
import avatarImg from "@/public/assets/images/avatar.png";

/**
 * Component
 */
export default function Navbar() {
  // const { user } = useAuth();

  /**
   * Render
   */
  return (
    <nav className="flex justify-between items-center mb-7">
      {/* {user && ( // condition pour afficher navbar si user connecté */}
      <>
        <Link href={"/"} className="md:hidden">
          <AiOutlineArrowLeft />
        </Link>
        <Link href={"/"} className="hidden md:block">
          <Logo />
        </Link>

        <div className="flex items-center">
          <Link href={"/profil"}>
            <Avatar
              src={avatarImg}
              alt="Ananas Funky"
              variant="circular"
              size="md"
              className={""}
            />
          </Link>
        </div>
      </>
      {/* )} */}
    </nav>
  );
}
