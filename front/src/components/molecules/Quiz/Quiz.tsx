/**
 * Package Import
 */
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

/**
 * Local Import
 */
import { Button } from "@/src/components/atoms";

/**
 * Types
 */
interface QuestionState {
  id: number;
  letter: string;
  questionNumber: number;
  question: string;
  answers: answerState[];
}

interface QuestionStateApi {
  id: number;
  category_id: number;
  question_text: string;
}

interface answerState {
  letter: string;
  text: string;
  correct: boolean;
}

interface answerStateApi {
  id: number;
  question_id: number;
  answer_text: string;
  is_correct: boolean;
}

/**
 * Datas
 */
const questionURL = "http://localhost:3030/question";
const answerURL = "http://localhost:3030/answer";

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

  const [questionApi, setQuestionApi] = useState<QuestionStateApi[] | null>(
    null
  );
  const [answerApi, setAnswerApi] = useState<answerStateApi[] | null>(null);

  const [className, setClassName] = useState("");
  const [variant, setVariant] = useState("primary");

  const quizData2: QuestionState[] = useMemo(() => {
    if (!questionApi || !answerApi) {
      return [];
    }
    return questionApi.map((questionObject) => {
      return {
        id: questionObject.id,
        questionNumber: `Q${questionObject.id}. `,
        question: questionObject.question_text,
        answers: answerApi
          .filter((answerObject) => {
            return answerObject.question_id === questionObject.id;
          })
          .map((answerObject) => {
            return {
              text: answerObject.answer_text,
              correct: answerObject.is_correct,
            };
          }),
      };
    });
  }, [questionApi, answerApi]);

  /**
   * Lifecycle
   */
  useEffect(() => {
    setQuestion(quizData2[questionNumber - 1]);
  }, [quizData2, questionNumber]);

  /**
   * Fetch datas
   */
  React.useEffect(() => {
    axios.get(questionURL).then((response) => {
      setQuestionApi(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get(answerURL).then((response) => {
      setAnswerApi(response.data);
    });
  }, []);

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
            className={""}
          >
            <span className="mr-4">{answer.letter}</span>
            <p>{answer.text}</p>
          </Button>
        ))}
      </div>
    </>
  );
}
