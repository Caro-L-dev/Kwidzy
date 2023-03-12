import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Container({ children }: any) {
  return (
    <>
      <div className="flex flex-col p-8 md:px-20 bg-gradient-to-b from-fuchsia-900 via-purple-600 to-indigo-500 w-full text-white">
        <Navbar />
        <div className="mx-auto md:w-min md:min-w-fit">
          <div className=" text-center justify-center">{children}</div>
          <div className="text-center mt-auto">
            <p>Liard Caroline</p>
            <p>2023 - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </>
  );
}
