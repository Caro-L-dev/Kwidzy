/**
 * Package Import
 */
import React, { useEffect, useMemo, useState } from "react";

/**
 * Local Import
 */
import { Score, Timer } from "../../components/atoms";
import { Quiz } from "../../components/molecules";

/**
 * Datas Import
 */
import quizData from "../../data/quizData";

export default function index() {
  /**
   * State
   */
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 Brouette");

  /**
   * Datas
   */
  const scoreDatas = useMemo(
    () =>
      [
        { id: 1, amount: "1 Brouette" },
        { id: 2, amount: "2 Brouettes" },
        { id: 3, amount: "3 Brouettes" },
        { id: 4, amount: "4 Brouettes" },
        { id: 5, amount: "5 Brouettes" },
        { id: 6, amount: "6 Brouettes" },
        { id: 7, amount: "7 Brouettes" },
        { id: 8, amount: "8 Brouettes" },
        { id: 9, amount: "9 Brouettes" },
        { id: 10, amount: "10 Brouettes" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        scoreDatas.find((money) => money.id === questionNumber - 1)?.amount ??
          "0 Brouette"
      );
  }, [scoreDatas, questionNumber]);

  return (
    <>
      <div className="relative">
        {/* Condition qui affiche le score */}
        {stop ? (
          <h2>Vous avez gagné : {earned}</h2>
        ) : (
          <>
            <div className="absolute top-[-15px] right-[-10px] md:relative md:flex md:justify-center z-10">
              <Timer setStop={setStop} questionNumber={questionNumber} />
            </div>
            <Score datas={scoreDatas} />
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
