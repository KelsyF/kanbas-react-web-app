
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Question } from "./types";
import MultipleChoiceEditor from "./mulitpleChoice";
import TrueFalseEditor from "./trueFalse";
import FillInTheBlankEditor from "./blank";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function QuestionsEditor({
                        quizId,
                        courseId,
                        points,
                        setQuizPoints,
                    }: {
        quizId: string;
        courseId: string;
        points: number;
        setQuizPoints: (points: number) => void;
    }) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [newQuestionType, setNewQuestionType] = useState<any>(null);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [error, setError] = useState<string>("");

    const fetchQuestions = async () => {
        try {
            const {data} = await axios.get(`${REMOTE_SERVER}/api/quizzes/${quizId}/questions`);
            setQuestions(data);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const handleAddQuestion = (type: "CHOICE" | "TRUEFALSE" | "BLANK" ) => {
        const newQuestion: Question = {
            type,
            title: `New ${type === "CHOICE" ? "Multiple Choice" : type === "TRUEFALSE" ? "True/False" : "Fill in the Blank"} Question`,
            points: 1,
            ...(type === "TRUEFALSE" && { correctAnswer: false }),
            ...(type === "CHOICE" && { choices: [] }),
            ...(type === "BLANK" && { correctAnswers: [] }),
        };
        setQuestions((prev) => [...prev, newQuestion]);
        setQuizPoints(points + 1);
        setEditingIndex(questions.length);
    };

    const handleEditQuestion = (index: number) => {
        setEditingIndex(index);
    };

    const handleSaveQuestion = (updatedQuestion: Question) => {
        setQuestions((prev) =>
            prev.map((q, i) => (i === editingIndex ? updatedQuestion : q))
        );
        setQuizPoints(questions.reduce((sum, q) => sum + q.points, 0));
        setEditingIndex(null);
    };

    const handleCancelEdit = () => {
        setEditingIndex(null);
    };

    const handleDeleteQuestion = (index: number) => {
        const questionPoints = questions[index].points;
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
        setQuizPoints(points - questionPoints);
    };

    const handleSaveQuestions = async () => {
        try {
            await axios.post(`${REMOTE_SERVER}/api/quizzes/${quizId}/questions`, { questions });
        } catch (error) {
            console.error("Error saving questions:", error);
            setError("Failed to save questions.");
        }
    };

    return (
        <div>
            <h2>Questions</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="dropdown mb-3">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="newQuestionDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    New Question
                </button>
                <ul className="dropdown-menu" aria-labelledby="newQuestionDropdown">
                    <li>
                        <button
                            className="dropdown-item"
                            onClick={() => handleAddQuestion("CHOICE")}
                        >
                            Multiple Choice
                        </button>
                    </li>
                    <li>
                        <button
                            className="dropdown-item"
                            onClick={() => handleAddQuestion("TRUEFALSE")}
                        >
                            True/False
                        </button>
                    </li>
                    <li>
                        <button
                            className="dropdown-item"
                            onClick={() => handleAddQuestion("BLANK")}
                        >
                            Fill in the Blank
                        </button>
                    </li>
                </ul>
            </div>
            <ul className="list-group">
                {questions.map((question, index) => (
                    <li key={index} className="list-group-item">
                        {editingIndex === index ? (
                            <>
                                {question.type === "CHOICE" && (
                                    <MultipleChoiceEditor
                                        question={question}
                                        onSave={handleSaveQuestion}
                                        onCancel={handleCancelEdit}
                                    />
                                )}
                                {question.type === "TRUEFALSE" && (
                                    <TrueFalseEditor
                                        question={question}
                                        onSave={handleSaveQuestion}
                                        onCancel={handleCancelEdit}
                                    />
                                )}
                                {question.type === "BLANK" && (
                                    <FillInTheBlankEditor
                                        question={question}
                                        onSave={(updatedQuestion) => {
                                            setQuestions((prev) =>
                                                prev.map((q, i) => (i === editingIndex ? updatedQuestion : q))
                                            );
                                            setEditingIndex(null);
                                        }}
                                        onCancel={() => setEditingIndex(null)}
                                    />
                                )}
                            </>
                        ) : (
                            <div className="d-flex justify-content-between align-items-center">
                                <span>
                                    {question.title} - {question.points} pts
                                </span>
                                <div>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => setEditingIndex(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDeleteQuestion(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className="mt-3">
                <strong>Total Points: {points}</strong>
            </div>
            <button className="btn btn-success mt-3" onClick={handleSaveQuestions}>
                Save All Questions
            </button>
        </div>
    );
}