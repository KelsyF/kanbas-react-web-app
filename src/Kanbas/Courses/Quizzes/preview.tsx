
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchQuestionsForQuiz } from "./questions/client";

export default function QuizPreview() {
    const { qid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const navigate = useNavigate();

    const [questions, setQuestions] = useState<any[]>([]);
    const [answers, setAnswers] = useState<{ [key: string]: any }>({});
    const [error, setError] = useState<string | null>(null);

    const fetchQuestions = async () => {
        try {
            const fetchedQuestions = await fetchQuestionsForQuiz(qid as string);
            setQuestions(fetchedQuestions);
        } catch (e) {
            console.error("Failed to fetch quiz questions:", e);
            setError("Failed to load the quiz. Please try again later.");
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [qid]);

    const handleAnswerChange = (questionId: string, value: any) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleSubmit = () => {
        // For students: Submit the answers
        if (!currentUser || currentUser.role !== "Student") {
            setError("Only students can submit quiz answers.");
            return;
        }

        console.log("Submitted answers:", answers);
        alert("Your answers have been submitted!");
        navigate(-1); // Navigate back after submission
    };

    return (
        <div id="wd-quiz-preview">
            <h1>Quiz Preview</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {questions.length === 0 && !error && <p>Loading quiz questions...</p>}

            {questions.length > 0 && (
                <form>
                    {questions.map((question, index) => (
                        <div key={question._id} className="mb-4">
                            <h4>
                                {index + 1}. {question.title}
                            </h4>
                            <p>{question.questionText}</p>
                            {question.type === "Multiple Choice" && (
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
                                                disabled={currentUser.role !== "Student"}
                                            />
                                            <label className="form-check-label">
                                                {choice.text}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {question.type === "True/False" && (
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
                                            disabled={currentUser.role !== "Student"}
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
                                            disabled={currentUser.role !== "Student"}
                                        />
                                        <label className="form-check-label">False</label>
                                    </div>
                                </div>
                            )}
                            {question.type === "Fill in the Blank" && (
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your answer"
                                    value={answers[question._id] || ""}
                                    onChange={(e) =>
                                        handleAnswerChange(question._id, e.target.value)
                                    }
                                    disabled={currentUser.role !== "Student"}
                                />
                            )}
                        </div>
                    ))}

                    {currentUser.role === "Student" && (
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    )}
                </form>
            )}
        </div>
    );
}
