import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <Link href={"/"}>Kwidzy</Link>
      <Link href={"/"}>Profil</Link>
    </nav>
  );
}
