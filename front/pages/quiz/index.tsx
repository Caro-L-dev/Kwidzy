/**
 * Package Import
 */
import React, { useState } from "react";

/**
 * Local Import
 */
import { Score, Timer } from "../../components/atoms";
import { Quiz } from "../../components/molecules";

export default function index() {
  /**
   * Hooks
   */
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 Brouette");

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

  const data = [
    {
      id: 1,
      questionNumber: "Q1. ",
      question: "Qui a conçu Facebook ?",
      answers: [
        {
          letter: "A.",
          text: "Bill Gates",
          correct: false,
        },
        {
          letter: "B.",
          text: "Marc Zuckerberg",
          correct: true,
        },
        {
          letter: "C.",
          text: "Johny Hallyday",
          correct: false,
        },
        {
          letter: "D.",
          text: "Mr Charlie",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      questionNumber: "Q2. ",
      question: "Q'est ce qu'un composant ?",
      answers: [
        {
          letter: "A.",
          text: "Réponse 01",
          correct: false,
        },
        {
          letter: "B.",
          text: "Réponse 02",
          correct: false,
        },
        {
          letter: "C.",
          text: "Réponse 03",
          correct: true,
        },
        {
          letter: "D.",
          text: "Réponse 04",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      questionNumber: "Q3. ",
      question: "Q'est ce qu'un projet Agile ?",
      answers: [
        {
          letter: "A.",
          text: "Réponse 01",
          correct: false,
        },
        {
          letter: "B.",
          text: "Réponse 02",
          correct: false,
        },
        {
          letter: "C.",
          text: "Réponse 03",
          correct: false,
        },
        {
          letter: "D.",
          text: "Réponse 04",
          correct: true,
        },
      ],
    },
  ];
  return (
    <>
      <div className="relative">
        {/* Condition qui affiche le score */}
        {stop ? (
          <h2>Vous avez gagné : {earned}</h2>
        ) : (
          <>
            <div className="absolute top-[-15px] right-[-10px] md:relative md:flex md:justify-center z-10">
              <Timer />
            </div>
            <Score datas={scoreDatas} />
            <Quiz
              data={data}
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
