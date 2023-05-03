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
   * Lifecycle
   */
  useEffect(() => {
    questionNumber > 1 && setEarned(earned + 1);
  }, [questionNumber]);

  /**
   * Actions
   */
  const handleClick = (path: string) => {
    router.push(path);
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
  if (earned > 1) {
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
                  {earned} {wordScore}
                </p>
              </div>

              <div className="text-txt-tertiary-color">
                <Bubble>{scoreMsgBubble}</Bubble>
              </div>

              <Button
                rounded
                className={"mb-4 text-txt-primary-color"}
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
              <Timer
                setDelayTimerStop={setEndGame}
                nextQuestion={questionNumber}
              />
            </div>
            <Quiz
              setEndGame={setEndGame}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </>
        )}
      </div>
    </>
  );
}
