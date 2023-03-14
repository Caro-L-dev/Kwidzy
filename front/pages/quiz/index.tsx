/**
 * Package Import
 */
import React from "react";

/**
 * Local Import
 */
import { Score, Timer } from "../../components/atoms";
import { Quiz } from "../../components/molecules";

export default function index() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-[-15px] right-[-10px] md:relative md:flex md:justify-center z-10">
          <Timer />
        </div>
      </div>
      <Score />

      <Quiz />
    </>
  );
}
