import React from "react";
import { MainBtn, ThirdBtn } from "@/components/atoms/Button";
import Score from "@/components/atoms/Score";
import Timer from "@/components/atoms/Timer";

export default function index() {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-[-15px] right-[-10px]">
          {/* au pire je place le timer en haut au centre */}
          <Timer />
        </div>
      </div>
      <Score />

      <ThirdBtn>Q1: Qui a conçu Facebook ?</ThirdBtn>
      <div>
        <MainBtn>
          <span className="mr-4">A.</span>
          <p>Georges Clooney</p>
        </MainBtn>
        <MainBtn>
          <span className="mr-4">B.</span>
          <p>Marc Zuckerberg</p>
        </MainBtn>
        <MainBtn>
          <span className="mr-4">C.</span>
          <p>Falbala</p>
        </MainBtn>
        <MainBtn>
          <span className="mr-4">D.</span>
          <p>Bill Gates</p>
        </MainBtn>
      </div>
    </div>
  );
}
