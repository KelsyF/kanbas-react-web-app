
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchQuestionsForQuiz } from "./client";
import { setQuestions, deleteQuestion } from "./reducer";
import FacultyContent from "../../../Account/FacultyContent";

export default function QuestionsList() {
    const { qid } = useParams();
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const dispatch = useDispatch();

    const fetchQuestions = async () => {
        const questions = await fetchQuestionsForQuiz(qid as string);
        dispatch(setQuestions(questions));
    };

    useEffect(() => {
        fetchQuestions();
    }, [qid]);

    const handleDeleteQuestion = async (questionId: string) => {
        await deleteQuestion(questionId);
        dispatch(deleteQuestion(questionId));
    };

    return (
        <div>
            <h1>Questions</h1>
            <ul className="list-group">
                {questions.map((question: any) => (
                    <li
                        key={question._id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <h5>{question.title}</h5>
                            <p>{question.questionText}</p>
                        </div>
                        <FacultyContent>
                            <div>
                                <Link
                                    to={`/Kanbas/Courses/${qid}/Questions/${question._id}`}
                                    className="btn btn-primary me-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteQuestion(question._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </FacultyContent>
                    </li>
                ))}
            </ul>
        </div>
    );
}