import { HiArrowCircleLeft } from "react-icons/hi";
import Title from "@/components/atoms/Title";
import React from "react";
import Link from "next/link";
import Box from "@/components/atoms/Box";
import { MainBtn } from "@/components/atoms/Button";

export default function index() {
  return (
    <div>
      <div className="hidden md:flex md:mb-4 md:items-center">
        <span className="mr-4 text-4xl cursor-pointer">
          <Link href={"/categories"}>
            <HiArrowCircleLeft />
          </Link>
        </span>
        <Title Title="Numérique" />
      </div>

      <div className="flex flex-col justify-between">
        <div className="md:flex md:mb-10">
          <div>
            <div className="h-[73px] md:h-full md:w-[580px] p-4 font-bold text-xl rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center"></div>
          </div>
          <div className="md:w-full md:ml-12">
            <div className="mb-32">
              <Box bgColor="bg-tertiary-color">Facile</Box>
              <Box bgColor="bg-secondary-color">15 questions</Box>
            </div>
            <MainBtn>
              <Link href={"/quiz"}>Commencer</Link>
            </MainBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
