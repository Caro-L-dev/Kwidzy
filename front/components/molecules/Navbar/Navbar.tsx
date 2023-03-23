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

/**
 * Component
 */
export default function Navbar() {
  /**
   * Render - Mobile
   */
  return (
    <nav className="flex justify-between items-center mb-7">
      <Link href={"/"}>
        <AiOutlineArrowLeft />
      </Link>
      <Link href={"/register"}>S'inscrire</Link>
      <Link href={"/score"}>Score</Link>
      <p>Titre</p>
      <Link href={"/profil"}>
        <Avatar />
      </Link>
    </nav>
  );

  /**
   * Render - Desktop
   */
  // return (
  //   <nav className="flex justify-between mb-7">
  //     <Link href={"/"}>Kwidzy</Link>
  //     <Link href={"/register"}>S'inscrire</Link>
  //     <Link href={"/categories"}>Catégories</Link>
  //     <Link href={"/quizdetail"}>QuizDetail</Link>
  //     <Link href={"/quiz"}>Quiz</Link>
  //     <Link href={"/score"}>Score</Link>
  //     <Link href={"/profil"}>Profil</Link>
  //   </nav>
  // );
}
