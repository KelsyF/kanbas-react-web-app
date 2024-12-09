
import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;

export const fetchQuestionsForQuiz = async (quizId: string) => {
    const { data } = await axios.get(`${QUESTIONS_API}/quiz/${quizId}`);
    return data;
};

export const createQuestion = async (question: any) => {
    const { data } = await axios.post(`${QUESTIONS_API}`, question);
    return data;
};

export const updateQuestion = async (question: any) => {
    const { data } = await axios.put(`${QUESTIONS_API}/${question._id}`, question);
    return data;
};

export const deleteQuestion = async (questionId: string) => {
    const { data } = await axios.delete(`${QUESTIONS_API}/${questionId}`);
    return data;
};