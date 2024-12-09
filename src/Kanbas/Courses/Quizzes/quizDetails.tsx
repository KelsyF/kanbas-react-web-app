
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import FacultyContent from "../../Account/FacultyContent";
import QuizEditor from "./editor";
import QuizPreview from "./preview";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();

    const [quiz, setQuiz] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isPreviewing, setIsPreviewing] = useState<boolean>(false);

    const fetchQuizDetails = async () => {
        try {
            const { data } = await axios.get(`${REMOTE_SERVER}/api/quizzes/${qid}`);
            setQuiz(data);
        } catch (error) {
            console.error("Error fetching quiz details: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuizDetails();
    }, [qid]);

    const handleSave = async (updatedQuiz: any) => {
        try {
            await axios.put(`${REMOTE_SERVER}/api/quizzes/${qid}`, updatedQuiz);
            setQuiz(updatedQuiz);
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving quiz: ", error);
        }
    };

    if (loading) {
        return <p>Loading quiz details...</p>;
    }

    if (!quiz) {
        return <p>Quiz not found.</p>;
    }

    if (isPreviewing) {
        return (
            <QuizPreview
                qid={qid!}
                cid={cid!}
                onBack={() => setIsPreviewing(false)}
            />
        );
    }

    return (
        <div className="container mt-4">
            {isEditing ? (
                <QuizEditor
                    quiz={quiz}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <>
                    <FacultyContent>
                        <div className="d-flex justify-content-center mb-1">
                            <button
                                className="btn btn-secondary me-2"
                                onClick={() => setIsEditing(true)} // Switch to editor
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => setIsPreviewing(true)} // Switch to preview
                            >
                                Preview
                            </button>
                        </div>
                        <hr />
                    </FacultyContent>
                    <div className="container mt-4">
                        <h1>{quiz.title}</h1>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Quiz Type:</div>
                            <div className="col-6">{quiz.type || "Graded Quiz"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Points:</div>
                            <div className="col-6">{quiz.points || "0"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Assignment Group:</div>
                            <div className="col-6">{quiz.assignmentGroup || "Quizzes"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Shuffle Answers:</div>
                            <div className="col-6">{quiz.shuffleAnswers ? "Yes" : "No"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Time Limit:</div>
                            <div className="col-6">{quiz.timeLimit || 20} minutes</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Multiple Attempts:</div>
                            <div className="col-6">{quiz.multipleAttempts ? "Yes" : "No"}</div>
                        </div>
                        {quiz.multipleAttempts && (
                            <div className="row">
                                <div className="col-6 text-end fw-bold">How Many Attempts:</div>
                                <div className="col-6">{quiz.maxAttempts || 1}</div>
                            </div>
                        )}
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Show Correct Answers:</div>
                            <div className="col-6">{quiz.showCorrectAnswers ? "Yes" : "No"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Access Code:</div>
                            <div className="col-6">{quiz.accessCode || "None"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">One Question at a Time:</div>
                            <div className="col-6">{quiz.oneQuestionAtATime ? "Yes" : "No"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Webcam Required:</div>
                            <div className="col-6">{quiz.webcamRequired ? "Yes" : "No"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Lock Questions After Answering:</div>
                            <div className="col-6">{quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Due Date:</div>
                            <div className="col-6">{quiz.dueDate || "Not set"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Available From:</div>
                            <div className="col-6">{quiz.availableDate || "Not set"}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end fw-bold">Available Until:</div>
                            <div className="col-6">{quiz.untilDate || "Not set"}</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}