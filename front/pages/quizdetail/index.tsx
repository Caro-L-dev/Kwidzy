import { MainBtn } from "@/components/atoms/Button";
import { HiArrowCircleLeft } from "react-icons/hi";
import Title from "@/components/atoms/Title";
import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <div className="hidden md:flex md:mb-4 md:items-center">
        <span className="mr-4 text-4xl cursor-pointer">
          <Link href={"/categories"}>
            <HiArrowCircleLeft />
          </Link>
        </span>
        <Title>Numérique</Title>
      </div>

      <div className="flex flex-col justify-between">
        <div className="md:flex md:mb-10">
          <div>
            <div className="h-[73px] md:h-full md:w-[580px] p-4 font-bold text-4xl rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center"></div>
          </div>
          <div className="md:w-full md:ml-12">
            <p className="h-[73px] bg-tertiary-color p-4 font-bold text-4xl rounded-2xl my-4">
              Facile
            </p>
            <p className="h-[73px] bg-secondary-color p-4 font-bold text-4xl rounded-2xl mb-28">
              15 Questions
            </p>
            <MainBtn>
              <Link href={"/quiz"}>Commencer</Link>
            </MainBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
