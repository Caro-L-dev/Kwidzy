import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <Link href={"/"}>Kwidzy</Link>
      {/* <Link href={"/register"}>S'inscrire</Link> */}
      <Link href={"/categories"}>Catégories</Link>
      <Link href={"/quizdetail"}>QuizDetail</Link>
      <Link href={"/quiz"}>Quiz</Link>
      <Link href={"/score"}>Score</Link>
      <Link href={"/profil"}>Profil</Link>
    </nav>
  );
}
