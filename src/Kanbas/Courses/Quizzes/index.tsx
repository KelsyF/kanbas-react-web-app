
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchQuizzesForCourse, updateQuiz } from "./client";
import { setQuizzes, deleteQuiz } from "./reducer";
import QuizControls from "./quizControls";
import FacultyContent from "../../Account/FacultyContent";
import QuizDelete from "./quizDelete";
import {FaCheckCircle} from "react-icons/fa";

export default function Quizzes() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const dispatch = useDispatch();

    const [quizToDelete, setQuizToDelete] = useState<any>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [searchTerm, setSearchterm] = useState("");

    const fetchQuizzes = async () => {
        const quizzes = await fetchQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };

    useEffect(() => {
        fetchQuizzes();
    }, [cid]);

    const handleDeleteClick = (quiz: any) => {
        setQuizToDelete(quiz);
        setIsDeleteOpen(true);
    }

    const handleDeleteQuiz = async (quizId: string) => {
        await deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
        setIsDeleteOpen(false);
        setQuizToDelete(null);
    };

    const handleCloseDelete = () => {
        setIsDeleteOpen(false);
        setQuizToDelete(null);
    }

    const togglePublish = async (quiz: any) => {
        const updatedQuiz = { ...quiz, published: !quiz.published };
        await updateQuiz(updatedQuiz);
        dispatch(setQuizzes(
            quizzes.map((q: any) =>
                q._id === quiz._id ? updateQuiz : q
            )
        ));
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchterm(event.target.value.toLowerCase());
    }

    const filteredQuizzes = quizzes.filter((quiz: any) =>
        quiz.title.toLowerCase().includes(searchTerm)
    )

    return (
        <div id="wd-quizzes">
            <FacultyContent>
                <QuizControls  onSearch={handleSearch}/>
                <hr />
            </FacultyContent>
            {filteredQuizzes.length === 0 && !searchTerm ? (
                <p className="text-center">No quizzes yet. Click the + Quiz button to create one.</p>
            ) : (
                <>
                    {filteredQuizzes.length === 0 && searchTerm && (
                        <p className="text-center">No quizzes match your search.</p>
                    )}
                    <ul className="list-group">
                        {filteredQuizzes.map((quiz: any) => (
                            <li key={quiz._id} className="list-group-item">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <Link
                                            to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                                            className="text-decoration-none"
                                        >
                                            {quiz.title}
                                        </Link>
                                        <div className="text-muted">
                                            <small>
                                                {quiz.published
                                                    ? "✅ Published"
                                                    : "🚫 Unpublished"}
                                            </small>
                                            <br />
                                            <small>Points: {quiz.points}</small>
                                            <br />
                                            <small>
                                                Due: {quiz.dueDate || "No due date"}
                                            </small>
                                        </div>
                                    </div>
                                    <FacultyContent>
                                        <div className="d-flex align-items-center">
                                            <span
                                                className={'me-2'}
                                                onClick={() => togglePublish(quiz)}
                                            >
                                                {quiz.published
                                                    ? <FaCheckCircle className="text-success" />
                                                    : <FaCheckCircle className="text-success-emphasis" />}
                                            </span>
                                            <button
                                                className="btn btn-danger me-2"
                                                onClick={() => handleDeleteClick(quiz)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </FacultyContent>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {isDeleteOpen && quizToDelete && (
                <QuizDelete
                    quizId={quizToDelete._id}
                    quizTitle={quizToDelete.title}
                    deleteQuiz={handleDeleteQuiz}
                    closeDelete={handleCloseDelete}
                />
            )}
        </div>
    );
}

