
import { createSlice } from '@reduxjs/toolkit';

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {quizzes: []},
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, {payload: quiz}) => {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                ...quiz,
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        updateQuiz: (state, {payload: quiz}) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quiz._id ? quiz : q
            ) as any;
        },
        deleteQuiz: (state, {payload: quizId}) => {
            state.quizzes = state.quizzes.filter(
                (q: any) => q._id !== quizId);
        },
    },
});


export const { setQuizzes, addQuiz, updateQuiz, deleteQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
