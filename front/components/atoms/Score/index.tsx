/**
 * Package Import
 */
import React, { useState } from "react";

interface ScoreDatas {
  datas: {
    id: number;
    amount: number;
  }[];
}

export default function ScoreAtom(datas: ScoreDatas) {
  /**
   * Hooks
   */
  const [questionNumber, setQuestionNumber] = useState(3);

  /**
   * Datas
   */
  const scoreDatas = [
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
  ].reverse();

  return (
    <div className="relative">
      <div className="relative">
        <div className="opacity-30 h-[73px] md:w-full p-4 rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center" />
        {scoreDatas.map((score, index) => (
          <p
            key={index}
            className="absolute top-5 bottom-0 right-0 left-0 text-lg font-bold"
          >
            <span className={questionNumber === score.id ? "block" : "hidden"}>
              <span className="hidden">{score.id}</span>
              <span>{score.amount}</span>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
