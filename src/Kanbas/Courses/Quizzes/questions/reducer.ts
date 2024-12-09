
import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: "questions",
    initialState: {
        questions: [],
    },
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        addQuestion: (state, {payload: quiz}) => {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                ...quiz,
            };
            state.questions = [...state.questions, newQuiz] as any;
        },
        updateQuestion: (state, {payload: question}) => {
            state.questions = state.questions.map((q: any) =>
                q._id === question._id ? question : q
            ) as any;
        },
        deleteQuestion: (state, {payload: questionId}) => {
            state.questions = state.questions.filter(
                (q: any) => q._id !== questionId);
        },
    },
});

export const { setQuestions, addQuestion, updateQuestion, deleteQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;