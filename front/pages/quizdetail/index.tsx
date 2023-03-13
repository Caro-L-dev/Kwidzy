/**
 * Package Import
 */
import React from "react";
import router from "next/router";
import Link from "next/link";

/**
 * Local Import
 */
import { Title, Box, Button } from "../../components/atoms";
import { HiArrowCircleLeft } from "react-icons/hi";

export default function index() {
  const handleClick = (path: string) => {
    if (path === "/quiz") {
      console.log("Je me rends sur la page Quiz");
      router.push(path);
    }
  };

  return (
    <>
      <div className="hidden md:flex md:mb-4 md:items-center">
        <span className="mr-4 text-4xl cursor-pointer">
          <Link href={"/quiz"}>
            <HiArrowCircleLeft />
          </Link>
        </span>
        <Title Title="Numérique" />
      </div>

      <div className="flex flex-col justify-between">
        <div className="md:flex md:mb-10">
          <div>
            <div className="h-[73px] md:h-full md:w-[580px] p-4 font-bold text-xl rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center" />
          </div>
          <div className="md:w-full md:ml-12">
            <div className="mb-32">
              <Box bgColor="bg-tertiary-color">Facile</Box>
              <Box bgColor="bg-secondary-color">15 questions</Box>
            </div>
            <Button
              rounded
              className={"mb-4"}
              type={"button"}
              variant={"primary"}
              onClick={() => handleClick("/quiz")}
            >
              Commencer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
