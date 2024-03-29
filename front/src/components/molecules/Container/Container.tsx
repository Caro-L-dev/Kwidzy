/**
 * Package Import
 */
import React, { ReactNode } from "react";

/**
 * Local Import
 */
import Navbar from "../Navbar/Navbar";

/**
 * Component
 */
export default function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col p-8 md:px-20 bg-gradient-to-b from-fuchsia-900 via-purple-600 to-[#2D30F0] w-full text-white">
        <Navbar />
        <div className="mx-auto md:w-min md:min-w-fit">
          <div className=" text-center justify-center">{children}</div>
          <div className="text-center mt-auto text-white">
            <p>Liard Caroline</p>
            <p>2023 - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </>
  );
}
