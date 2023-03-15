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

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

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
            className={"mb-2"}
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
