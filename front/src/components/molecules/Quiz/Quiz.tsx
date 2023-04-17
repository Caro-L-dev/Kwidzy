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
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [question, setQuestion] = useState<QuestionState | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [questionApi, setQuestionApi] = useState<QuestionStateApi[] | null>(
    null
  );
  const [variant, setVariant] = useState("primary");

  const quizDataBack: QuestionState[] = useMemo(() => {
    if (!questionApi) {
      return [];
    }
    return questionApi.map((questionObject, index) => {
      return {
        id: questionObject.questionId,
        questionNumber: `Q${index + 1}.`,
        question: questionObject.question,
        answers: questionObject.answers,
      };
    });
  }, [questionApi]);

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
      let categoryName = router.query.category;
      const finalQuestionUrl = questionURL + "?category=" + categoryName;
      const response = await axios.get<QuestionStateApi[]>(finalQuestionUrl);
      setQuestionApi(response.data);
    };

    fetchQuestions();
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
    delay(500, () => setVariant(answer.isCorrect ? "correct" : "mistake"));
    delay(1500, () => {
      answer.isCorrect
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
