import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import Avatar from "@/components/atoms/Avatar";

export default function Navbar() {
  // Basic render
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

  // Mobile Render
  // Ne s'affiche pas sur la page d'acceuil et start
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

  // Desktop Render
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
