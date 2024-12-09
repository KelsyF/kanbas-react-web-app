
export type QuestionType = "CHOICE" | "TRUEFALSE" | "BLANK";

export interface Choice {
    text: string;
    isCorrect: boolean;
}

export interface Question {
    _id?: string;
    type: QuestionType;
    title: string;
    points: number;
    questionText?: string;
    choices?: Choice[];
    correctAnswer?: boolean;
    correctAnswers?: string[];
}