import Bubble from "@/components/atoms/Bubble";
import { MainBtn } from "@/components/atoms/Button";
import Score from "@/components/atoms/Score";
import SubTitle from "@/components/atoms/SubTitle";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div>
      <SubTitle subtitle="Score" />
      <div>
        <p>Pas mal !</p>
        <p>Vous avez obtenu :</p>
        <Score />

        <div className="flex flex-col justify-center items-center">
          <p>Vous débloquez :</p>
          <div className="h-7 w-7 bg-white rounded-lg"></div>
        </div>

        <Bubble>Que diriez vous de faire mieux la prochaine fois ?</Bubble>
        <MainBtn>
          <Link href={"/"}>Rejouer</Link>
        </MainBtn>
      </div>
    </div>
  );
}
