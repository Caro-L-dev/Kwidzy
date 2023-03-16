/**
 * Package Import
 */
import React, { useEffect, useState } from "react";

/**
 * Local Import
 */
import { Button } from "@/components/atoms";

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
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (answer: React.SetStateAction<null>) => {
    setSelectedAnswer(answer);
    setClassName("active");
  };

  return (
    <>
      {/* QUESTIONS */}
      <Button className={"mb-4"} type={"button"} variant={"tertiary"} rounded>
        {question?.questionNumber}
        {question?.question}
      </Button>

      {/* ANSWERS */}
      <div className="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4 md:mb-4">
        {question?.answers.map((answer: any) => (
          <Button
            className={selectedAnswer === answer ? className : ""}
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
