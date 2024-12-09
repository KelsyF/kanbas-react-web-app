
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function QuizPreview({
    qid,
    cid,
    onBack,
}: {
    qid: string;
    cid: string;
    onBack: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [questions, setQuestions] = useState<any[]>([]);
    const [answers, setAnswers] = useState<{ [key: string]: any }>({});
    const [previousAttempt, setPreviousAttempt] = useState<any>(null);
    const [score, setScore] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch questions and faculty's previous attempt
    const fetchQuizData = async () => {
        try {
            const questionsResponse = await axios.get(`${REMOTE_SERVER}/api/quizzes/${qid}/questions`);
            console.log(questionsResponse);
            setQuestions(questionsResponse.data);

            // Fetch faculty's previous attempt
            const attemptResponse = await axios.get(
                `${REMOTE_SERVER}/api/attempts/${qid}/user/${currentUser._id}`
            );
            if (attemptResponse.data) {
                setPreviousAttempt(attemptResponse.data);
                setAnswers(
                    attemptResponse.data.answers.reduce((acc: any, ans: any) => {
                        acc[ans.questionId] = ans.selectedAnswer;
                        return acc;
                    }, {})
                );
                setScore(attemptResponse.data.score);
            }
        } catch (e) {
            console.error("Failed to fetch quiz data:", e);
            setError("Failed to load the quiz. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuizData();
    }, [qid]);

    const handleAnswerChange = (questionId: string, value: any) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleSubmit = async () => {
        try {
            const attemptData = {
                quizId: qid,
                userId: currentUser._id,
                answers: questions.map((question: any) => ({
                    questionId: question._id,
                    selectedAnswer: answers[question._id] || "",
                    isCorrect:
                        question.type === "CHOICE" ||
                        question.type === "TRUEFALSE"
                            ? question.choices.some(
                                (choice: any) => choice.text === answers[question._id] && choice.isCorrect
                            )
                            : question.correctAnswers.includes(answers[question._id]),
                })),
            };

            const correctCount = attemptData.answers.filter((ans: any) => ans.isCorrect).length;
            const totalQuestions = questions.length;

            const attemptResponse = await axios.post(`${REMOTE_SERVER}/api/attempts`, {
                ...attemptData,
                score: correctCount,
            });

            setScore(correctCount);
            alert(`Quiz submitted! You scored ${correctCount} out of ${totalQuestions}.`);
        } catch (e) {
            console.error("Failed to submit quiz:", e);
            setError("Failed to submit the quiz. Please try again.");
        }
    };

    if (loading) {
        return <p>Loading quiz preview...</p>;
    }

    return (
        <div id="wd-quiz-preview">
            <h1>Quiz Preview</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {questions.length === 0 && !error && <p>No questions available for this quiz.</p>}

            {questions.length > 0 && (
                <form>
                    {questions.map((question, index) => (
                        <div key={question._id} className="mb-4">
                            <h4>
                                {index + 1}. {question.title}
                            </h4>
                            <p>{question.questionText}</p>
                            {question.type === "CHOICE" && (
                                <div>
                                    {question.choices.map((choice: any, i: number) => (
                                        <div key={i} className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name={question._id}
                                                value={choice.text}
                                                checked={answers[question._id] === choice.text}
                                                onChange={() =>
                                                    handleAnswerChange(question._id, choice.text)
                                                }
                                            />
                                            <label className="form-check-label">{choice.text}</label>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {question.type === "TRUEFALSE" && (
                                <div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name={question._id}
                                            value="True"
                                            checked={answers[question._id] === "True"}
                                            onChange={() =>
                                                handleAnswerChange(question._id, "True")
                                            }
                                        />
                                        <label className="form-check-label">True</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name={question._id}
                                            value="False"
                                            checked={answers[question._id] === "False"}
                                            onChange={() =>
                                                handleAnswerChange(question._id, "False")
                                            }
                                        />
                                        <label className="form-check-label">False</label>
                                    </div>
                                </div>
                            )}
                            {question.type === "BLANK" && (
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your answer"
                                    value={answers[question._id] || ""}
                                    onChange={(e) =>
                                        handleAnswerChange(question._id, e.target.value)
                                    }
                                />
                            )}
                        </div>
                    ))}

                    <div className="d-flex justify-content-between mt-4">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onBack}
                        >
                            Back to Quiz Details
                        </button>
                        {currentUser.role === "FACULTY" && (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Submit Preview
                            </button>
                        )}
                    </div>
                </form>
            )}

            {score !== null && (
                <div className="alert alert-info mt-4">
                    <strong>Last Attempt Score:</strong> {score} out of {questions.length}
                </div>
            )}
        </div>
    );
}
