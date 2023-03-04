import { MainBtn, ThirdBtn } from "@/components/atoms/Button";
import React from "react";

export default function index() {
  return (
    <div>
      <div className="relative">
        <div className="opacity-30 h-[73px] md:h-full md:w-[580px] p-4 rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center"></div>
        <p className="absolute top-4 bottom-0 right-0 left-0 text-3xl font-bold">
          0 Brouette
        </p>
        <div>timer</div>
      </div>
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
