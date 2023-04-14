export type AnswerState = {
  text: string;
  correct: boolean;
};

export type QuestionState = {
  id: number;
  questionNumber: string;
  question: string;
  answers: AnswerState[];
};
