/**
 * Package Import
 */
import React, { useEffect, useState } from "react";

/**
 * Local Import
 */
import { Button } from "@/src/components/atoms";

/**
 * Types
 */
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

/**
 * Component
 */
export default function QuizMolecule({
  quizData,
  setStop,
  questionNumber,
  setQuestionNumber,
}: {
  quizData: any;
  setStop: any;
  questionNumber: number;
  setQuestionNumber: any;
}) {
  /**
   * State
   */
  const [question, setQuestion] = useState<QuestionState | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [className, setClassName] = useState("");
  const [variant, setVariant] = useState("primary");

  /**
   * Lifecycle
   */
  useEffect(() => {
    setQuestion(quizData[questionNumber - 1]);
  }, [quizData, questionNumber]);

  /**
   * Delay Function
   */
  const delay = (duration: number, callback: any) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  /**
   * Actions
   */
  const handleClick = (answer: answerState) => {
    setSelectedAnswer(answer.text);
    setClassName(
      "bg-secondary-color border-darker-secondary-color border-r-[5px] border-b-[5px]"
    );
    delay(1000, () => setVariant(answer.correct ? "correct" : "mistake"));
    delay(2000, () => {
      if (answer.correct) {
        // Go to the next question
        setQuestionNumber(
          (currentQuestionNumber: number) => currentQuestionNumber + 1
        );
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    });
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
        {question?.answers.map((answer, index) => (
          <Button
            key={index}
            onClick={() => handleClick(answer)}
            type={"button"}
            variant={selectedAnswer === answer.text ? variant : "primary"}
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
