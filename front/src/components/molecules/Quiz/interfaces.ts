export interface QuestionStateApi {
  id: number;
  category_id: number;
  question_text: string;
}

export interface AnswerStateApi {
  id: number;
  question_id: number;
  answer_text: string;
  is_correct: boolean;
}

export interface Props {
  setStop: React.Dispatch<React.SetStateAction<boolean>> | Function;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
}
