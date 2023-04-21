/**
 * Package Import
 */
import React, { useState, useEffect } from "react";
import router from "next/router";

/**
 * Local Import
 */
import { Bubble, Button, SubTitle, Timer } from "@/src/components/atoms";
import { Quiz } from "@/src/components/molecules";
import styles from "./index.module.css";

/**
 * Page
 */
export default function quizPage() {
  /**
   * State
   */
  const [questionNumber, setQuestionNumber] = useState(1);
  const [endGame, setEndGame] = useState(false);
  const [earned, setEarned] = useState(0);

  /**
   * Lifecycle WIP BUG
   */
  useEffect(() => {
    questionNumber > 1 && setEarned(earned + 1);
  }, [questionNumber]);

  /**
   * Actions
   */
  const handleClick = (path: string) => {
    if (path === "/categories") {
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

  let wordScore = "Point";
  if (earned > 0) {
    wordScore += "s";
  }

  return (
    <>
      <div className="relative">
        {endGame ? (
          <>
            <SubTitle name="Score" />
            <div className="mt-4">
              <p>{scoreMsg}</p>
              <p className="mb-2">Vous avez obtenu :</p>

              <div className={styles.bgImg}>
                <p className={styles.bgImgText}>
                  {earned + 0} {wordScore}
                </p>
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
              <Timer setStop={setEndGame} questionNumber={questionNumber} />
            </div>
            <Quiz
              setStop={setEndGame}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </>
        )}
      </div>
    </>
  );
}
