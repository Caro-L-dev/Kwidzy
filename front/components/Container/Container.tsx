import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Container({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <div>
        <p>Liard Caroline</p>
        <p>2023 - Tous droits réservés</p>
      </div>
    </>
  );
}
