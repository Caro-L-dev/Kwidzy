export type AnswerState = {
  text: string;
  isCorrect: boolean;
};

export type QuestionState = {
  id: number;
  questionNumber: string;
  question: string;
  answers: AnswerState[];
};
