export interface QuestionStateApi {
  questionId: number;
  question: string;
  answers: [AnswerStateApi];
}

export interface AnswerStateApi {
  text: string;
  isCorrect: boolean;
}

export interface Props {
  setStop: React.Dispatch<React.SetStateAction<boolean>> | Function;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
}
