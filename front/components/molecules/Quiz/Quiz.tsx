/**
 * Package Import
 */
import React, { useEffect, useState } from "react";

/**
 * Local Import
 */
import { Button } from "@/components/atoms";

interface QuestionState {
  questionNumber: number;
  question: string;
  answers: answerState[];
}

interface answerState {
  letter: string;
  text: string;
  correct: boolean;
}

export default function QuizMolecule({
  data,
  setTimeOut,
  questionNumber,
  setQuestionNumber,
}: {
  data: any;
  setTimeOut: any;
  questionNumber: number;
  setQuestionNumber: any;
}) {
  /**
   * Hooks
   */
  const [question, setQuestion] = useState<QuestionState | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [activeClassName, setActiveClassName] = useState("");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (answer: answerState) => {
    setSelectedAnswer(answer.text);
    setActiveClassName("bg-secondary-color");
  };
  console.log({ selectedAnswer });
  return (
    <>
      {/* QUESTIONS */}
      <Button className={"mb-4"} type={"button"} variant={"tertiary"} rounded>
        {question?.questionNumber}
        {question?.question}
      </Button>

      {/* ANSWERS */}
      <div className="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4 md:mb-4">
        {question?.answers.map((answer) => (
          <Button
            className={selectedAnswer === answer.text ? activeClassName : ""}
            onClick={() => handleClick(answer)}
            type={"button"}
            variant={"primary"}
            rounded
          >
            <span className="mr-4">{answer.letter}</span>
            <p>{answer.text}</p>
          </Button>
        ))}
      </div>
    </>
  );
}
