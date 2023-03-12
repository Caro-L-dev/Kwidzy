/**
 * Package Import
 */
import React from "react";
import router from "next/router";

/**
 * Local Import
 */
import { SubTitle, Button, Bubble, Score } from "../../components/atoms";

export default function index() {
  const handleClick = (path: string) => {
    if (path === "/") {
      console.log("Je me rends sur la page Kwidzy");
      router.push(path);
    }
  };

  return (
    <>
      <SubTitle subtitle="Score" />
      <div>
        <p>Pas mal !</p>
        <p>Vous avez obtenu :</p>
        <Score />

        <div className="flex flex-col justify-center items-center">
          <p>Vous débloquez :</p>
          <div className="h-7 w-7 bg-white rounded-lg" />
        </div>

        <Bubble>Que diriez vous de faire mieux la prochaine fois ?</Bubble>
        <Button
          rounded
          className={""}
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
