/**
 * Package Import
 */
import React, { useState } from "react";

export default function ScoreAtom(datas: any) {
  /**
   * Hooks
   */
  const [questionNumber, setQuestionNumber] = useState(3);

  /**
   * Datas
   */
  const scoreDatas = [
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
