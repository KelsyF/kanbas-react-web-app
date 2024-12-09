
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function QuizStart() {
    const { qid } = useParams();
    const navigate = useNavigate();

    const [quiz, setQuiz] = useState<any>(null);
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchQuizData = async () => {
        try {
            const { data: quizData } = await axios.get(`${REMOTE_SERVER}/api/quizzes/${qid}`);
            setQuiz(quizData);
            const { data: questionData } = await axios.get(`${REMOTE_SERVER}/api/quizzes/${qid}/questions`);
            setQuestions(questionData);
        } catch (error) {
            console.error("Error fetching quiz or questions:", error);
        }
    };

    useEffect(() => {
        fetchQuizData();
    }, [qid]);

    if (!quiz || questions.length === 0) {
        return <p>Loading quiz...</p>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    const goToNextQuestion = () => {
        setCurrentQuestionIndex((prev) => prev + 1);
    };

    const goToPreviousQuestion = () => {
        setCurrentQuestionIndex((prev) => prev - 1);
    };

    const handleSubmitQuiz = async () => {
        setIsSubmitting(true);
        try {
            const attempt = {
                quizId: qid,
                studentId: "currentStudentId",
                answers: questions.map((question: any) => ({
                    questionId: question._id,
                    selectedAnswer: answers[question._id],
                    isCorrect: question.correctAnswers.includes(answers[question._id]),
                })),
            };

            const { data: attemptResult } = await axios.post(`${REMOTE_SERVER}/api/attempts`, attempt);
            navigate(`/Kanbas/Courses/${quiz.courseId}/Quizzes/${qid}/Result`, { state: { score: attemptResult.score } });
        } catch (error) {
            console.error("Error submitting quiz:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mt-4">
            <h1>{quiz.title}</h1>
            <hr />
            <h3>
                Question {currentQuestionIndex + 1} of {questions.length}
            </h3>
            <p>{currentQuestion.questionText}</p>
            {currentQuestion.type === "Multiple Choice" &&
                currentQuestion.choices.map((choice: any, index: number) => (
                    <div key={index} className="form-check">
                        <input
                            type="radio"
                            id={`choice-${currentQuestion._id}-${index}`}
                            name={`question-${currentQuestion._id}`}
                            value={choice.text}
                            checked={answers[currentQuestion._id] === choice.text}
                            onChange={() => {setAnswers({
                                ...answers,
                                [currentQuestion._id]: choice.text,
                            })}}
                            className="form-check-input"
                        />
                        <label
                            htmlFor={`choice-${currentQuestion._id}-${index}`}
                            className="form-check-label"
                        >
                            {choice.text}
                        </label>
                    </div>
                ))}
            {currentQuestion.type === "True/False" && (
                <div>
                    <div className="form-check">
                        <input
                            type="radio"
                            id={`true-${currentQuestion._id}`}
                            name={`question-${currentQuestion._id}`}
                            value="true"
                            checked={answers[currentQuestion._id] === "true"}
                            onChange={(e) => {setAnswers({
                                ...answers,
                                [currentQuestion._id]: e.target.value,
                            })}}
                            className="form-check-input"
                        />
                        <label
                            htmlFor={`true-${currentQuestion._id}`}
                            className="form-check-label"
                        >
                            True
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            id={`false-${currentQuestion._id}`}
                            name={`question-${currentQuestion._id}`}
                            value="false"
                            checked={answers[currentQuestion._id] === "false"}
                            onChange={(e) => {setAnswers({
                                ...answers,
                                [currentQuestion._id]: e.target.value,
                            })}}
                            className="form-check-input"
                        />
                        <label
                            htmlFor={`false-${currentQuestion._id}`}
                            className="form-check-label"
                        >
                            False
                        </label>
                    </div>
                </div>
            )}
            {currentQuestion.type === "Fill in the Blank" && (
                <input
                    type="text"
                    value={answers[currentQuestion._id] || ""}
                    onChange={(e) => {setAnswers({
                        ...answers,
                        [currentQuestion._id]: e.target.value,
                    })}}
                    className="form-control mt-3"
                    placeholder="Type your answer here"
                />
            )}
            <div className="d-flex justify-content-between mt-4">
                <button
                    className="btn btn-secondary"
                    onClick={goToPreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                >
                    Previous
                </button>
                {currentQuestionIndex < questions.length - 1 ? (
                    <button className="btn btn-primary"
                        onClick={goToNextQuestion}
                    >
                        Next
                    </button>
                ) : (
                    <button className="btn btn-success"
                        onClick={handleSubmitQuiz}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit Quiz"}
                    </button>
                )}
            </div>
        </div>
    );
}