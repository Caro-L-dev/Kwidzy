/**
 * Package Import
 */
import React, { useEffect, useMemo, useState } from "react";
import router from "next/router";

/**
 * Local Import
 */
import { Bubble, Button, SubTitle, Timer } from "../../components/atoms";
import { Quiz } from "../../components/molecules";

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
    if (path === "/") {
      console.log("Je me rends sur la page Kwidzy");
      router.push(path);
    }
  };

  return (
    <>
      <div className="relative">
        {/* Condition qui affiche le score */}
        {stop ? (
          <>
            <SubTitle subtitle="Score" />
            <div className="mt-4">
              <p>Pas mal !</p>
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
              <div className="flex flex-col justify-center items-center">
                <p>Vous débloquez :</p>
                <div className="h-7 w-7 bg-white rounded-lg mt-4" />
              </div>
              <Bubble>
                Que diriez vous de faire mieux la prochaine fois ?
              </Bubble>
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
        ) : (
          <>
            <div className="absolute top-[-15px] right-[-10px] md:relative md:flex md:justify-center z-10">
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
