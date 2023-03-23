/**
 * Package Import
 */
import React from "react";
import Link from "next/link";

/**
 * Local Import
 */
import { AiOutlineArrowLeft } from "react-icons/ai";
import Avatar from "@/components/atoms/Avatar";
import Logo from "@/components/atoms/Logo";

/**
 * Component
 */
export default function Navbar() {
  /**
   * Render - TEST
   */
  return (
    // Ne s'affiche pas sur la page de démarrage
    <nav className="flex justify-between items-center mb-7">
      <Link href={"/"} className="md:hidden">
        <AiOutlineArrowLeft />
      </Link>
      <Link href={"/"} className="hidden md:block">
        <Logo />
      </Link>
      <Link href={"/categories"} className="md:hidden">
        Catégories
      </Link>
      {/* Apparait seulement quand l'utilisateur est ajouté / connecté */}
      <Link href={"/profil"}>
        <Avatar />
      </Link>
    </nav>
  );
}
