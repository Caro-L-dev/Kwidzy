/**
 * Package Import
 */
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

/**
 * Local Import
 */
import { Button } from "@/src/components/atoms";
import { QuestionState, AnswerState } from "./types";
import { Props, QuestionStateApi, AnswerStateApi } from "./interfaces";

/**
 * Datas
 */
const questionURL = process.env.NEXT_PUBLIC_QUESTION_URL ?? "default-url";
const answerURL = process.env.NEXT_PUBLIC_ANSWER_URL ?? "default-url";

/**
 * Component
 */
const QuizMolecule = ({
  setStop,
  questionNumber,
  setQuestionNumber,
}: Props) => {
  /**
   * State
   */
  const [question, setQuestion] = useState<QuestionState | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [questionApi, setQuestionApi] = useState<QuestionStateApi[] | null>(
    null
  );
  const [answerApi, setAnswerApi] = useState<AnswerStateApi[] | null>(null);
  const [variant, setVariant] = useState("primary");

  const quizDataBack: QuestionState[] = useMemo(() => {
    if (!questionApi || !answerApi) {
      return [];
    }
    return questionApi.map((questionObject) => {
      return {
        id: questionObject.id,
        questionNumber: `Q${questionObject.id}.`,
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
    setQuestion(quizDataBack[questionNumber - 1]);
  }, [quizDataBack, questionNumber]);

  /**
   * Fetch data
   */
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get<QuestionStateApi[]>(questionURL);
      setQuestionApi(response.data);
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchAnswers = async () => {
      const response = await axios.get<AnswerStateApi[]>(answerURL);
      setAnswerApi(response.data);
    };

    fetchAnswers();
  }, []);

  /**
   * Delay Function
   */
  const delay = (duration: number, callback: () => void | (() => void)) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  /**
   * Actions
   */
  const handleClick = (answer: AnswerState) => {
    setSelectedAnswer(answer.text);
    delay(1000, () => setVariant(answer.correct ? "correct" : "mistake"));
    delay(2000, () => {
      answer.correct
        ? (setQuestionNumber(
            // Go to the next question
            (currentQuestionNumber: number) => currentQuestionNumber + 1
          ),
          setSelectedAnswer(null))
        : setStop(true);
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
            <p>{answer.text}</p>
          </Button>
        ))}
      </div>
    </>
  );
};

export default QuizMolecule;
