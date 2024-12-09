
import axios from "axios";
import {USERS_API} from "../../Account/client";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const fetchQuizzesForCourse = async (courseId: string) => {
    const { data } = await axios.get(`${QUIZZES_API}/courses/${courseId}`);
    return data;
};

export const findQuizById = async (id: string) => {
    const response = await axios.get(`${QUIZZES_API}/${id}`);
    return response.data;
};

export const createQuiz = async (quiz: any) => {
    const { data } = await axios.post(`${QUIZZES_API}/courses/${quiz.courseId}`, quiz);
    return data;
};

export const updateQuiz = async (quiz: any) => {
    const { data } = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return data;
};

export const deleteQuiz = async (quizId: string) => {
    const { data } = await axios.delete(`${QUIZZES_API}/${quizId}`);
    return data;
};