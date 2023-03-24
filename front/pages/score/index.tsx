/**
 * Package Import
 */
import React from "react";
import router from "next/router";

/**
 * Local Import
 */
import { SubTitle, Button, Bubble, Score } from "@/src/components/atoms";

/**
 * Page
 */
export default function scorePage() {
  /**
   * Actions
   */
  const handleClick = (path: string) => {
    if (path === "/") {
      console.log("Je me rends sur la page Kwidzy");
      router.push(path);
    }
  };

  return (
    <>
      <SubTitle name="Score" />
      <div className="mt-4">
        <p>Pas mal !</p>
        <p>Vous avez obtenu :</p>
        <Score datas={[]} />

        <div className="flex flex-col justify-center items-center">
          <p>Vous débloquez :</p>
          <div className="h-7 w-7 bg-white rounded-lg mt-4" />
        </div>

        <Bubble>Que diriez vous de faire mieux la prochaine fois ?</Bubble>
        <Button
          rounded
          className={"mb-4"}
          type={"button"}
          variant={"primary"}
          onClick={() => handleClick("/")}
        >
          Rejouer
        </Button>
      </div>
    </>
  );
}
