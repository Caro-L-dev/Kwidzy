/**
 * Package Import
 */
import React, { useState, useEffect, useMemo } from "react";
import router from "next/router";

/**
 * Local Import
 */
import { Bubble, Button, SubTitle, Timer } from "@/src/components/atoms";
import { Quiz } from "@/src/components/molecules";

/**
 * Datas Import
 */
import quizData from "../../data/quizData";

/**
 * Page
 */
export default function quizPage() {
  /**
   * State
   */
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(0);

  /**
   * Datas
   */
  const scoreDatas = useMemo(
    () =>
      [
        { id: 1, amount: 1 },
        { id: 2, amount: 2 },
        { id: 3, amount: 3 },
        { id: 4, amount: 4 },
        { id: 5, amount: 5 },
        { id: 6, amount: 6 },
        { id: 7, amount: 7 },
        { id: 8, amount: 8 },
        { id: 9, amount: 9 },
        { id: 10, amount: 10 },
      ].reverse(),
    []
  );

  /**
   * Lifecycle
   */
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        scoreDatas.find((money) => money.id === questionNumber - 1)?.amount ?? 0
      );
  }, [scoreDatas, questionNumber]);

  /**
   * Actions
   */
  const handleClick = (path: string) => {
    if (path === "/categories") {
      console.log("Je me rends sur la page Catégories");
      router.push(path);
    }
  };

  let scoreMsg = "";
  if (earned < 3) {
    scoreMsg = "Aie aie, vous ferez mieux la prochaine fois !";
  } else if (earned >= 3 && earned <= 6) {
    scoreMsg = "Pas mal !";
  } else {
    scoreMsg = "Excellent !";
  }

  let scoreMsgBubble = "";
  if (earned < 3) {
    scoreMsgBubble = "Que diriez vous d'une revanche ?";
  } else if (earned >= 3 && earned <= 6) {
    scoreMsgBubble = "Allez ! une autre partie ?";
  } else {
    scoreMsgBubble = "C'est parti pour casser la baraque !";
  }

  return (
    <>
      <div className="relative">
        {stop ? (
          <>
            <SubTitle name="Score" />
            <div className="mt-4">
              <p>{scoreMsg}</p>
              <p>Vous avez obtenu :</p>
              <div className="relative">
                <div className="relative">
                  <div className="opacity-30 h-[73px] md:w-full p-4 rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center">
                    <p className="absolute top-5 bottom-0 right-0 left-0 text-lg font-bold">
                      {earned} Brouette
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col justify-center items-center">
                <p>Vous débloquez :</p>
                <div className="h-7 w-7 bg-white rounded-lg mt-4" />
              </div> */}
              <Bubble>{scoreMsgBubble}</Bubble>
              <Button
                rounded
                className={"mb-4"}
                type={"button"}
                variant={"primary"}
                onClick={() => handleClick("/categories")}
              >
                Rejouer
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="relative flex justify-center z-10 mb-4">
              <Timer setStop={setStop} questionNumber={questionNumber} />
            </div>
            <Quiz
              quizData={quizData}
              setStop={setStop}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </>
        )}
      </div>
    </>
  );
}
