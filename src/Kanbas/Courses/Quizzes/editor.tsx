
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import QuestionsEditor from "./questions/editor";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function QuizEditor({ quiz, onSave, onCancel }: {
    quiz: any,
    onSave: (updatedQuiz: any) => void;
    onCancel: () => void;
}) {
    const [editedQuiz, setEditedQuiz] = useState(quiz || {}); // Initialize with the passed quiz
    const [activeTab, setActiveTab] = useState<"details" | "questions">("details");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        setEditedQuiz(quiz); // Update editedQuiz when quiz prop changes
    }, [quiz]);

    const validateQuiz = () => {
        if (!editedQuiz.title?.trim()) {
            setError("Title is required.");
            return false;
        }
        return true;
    };

    const handleSave = async (publish = false) => {
        if (!validateQuiz()) {
            return;
        }

        try {
            const updatedQuiz = { ...editedQuiz, isPublished: publish };
            await axios.put(`${REMOTE_SERVER}/api/quizzes/${quiz._id}`, updatedQuiz);
            onSave(updatedQuiz); // Trigger the onSave prop with the updated quiz
        } catch (error) {
            console.error("Error saving quiz:", error);
            setError("Failed to save quiz.");
        }
    };

    return (
        <div className="container mt-4">
            <h1>Quiz Editor</h1>
            <div className="nav nav-tabs mb-4">
                <button
                    className={`nav-link ${activeTab === "details" ? "active" : ""}`}
                    onClick={() => setActiveTab("details")}
                >
                    Details
                </button>
                <button
                    className={`nav-link ${activeTab === "questions" ? "active" : ""}`}
                    onClick={() => setActiveTab("questions")}
                >
                    Questions
                </button>
            </div>

            {activeTab === "details" && (
                <div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <input
                        type="text"
                        value={editedQuiz.title || ""}
                        onChange={(e) => setEditedQuiz({ ...editedQuiz, title: e.target.value })}
                        placeholder="Quiz Title"
                        className="form-control mb-3"
                    />
                    <textarea
                        value={editedQuiz.description || ""}
                        onChange={(e) =>
                            setEditedQuiz({ ...editedQuiz, description: e.target.value })
                        }
                        placeholder="Quiz Description"
                        className="form-control mb-3"
                    />
                    <select
                        className="form-select mb-3"
                        value={editedQuiz.type || "Graded Quiz"}
                        onChange={(e) =>
                            setEditedQuiz({ ...editedQuiz, type: e.target.value })
                        }
                    >
                        <option value="Graded Quiz">Graded Quiz</option>
                        <option value="Practice Quiz">Practice Quiz</option>
                        <option value="Graded Survey">Graded Survey</option>
                        <option value="Ungraded Survey">Ungraded Survey</option>
                    </select>
                    <div className="mb-3">
                        <label>Points</label>
                        <input
                            type="number"
                            className="form-control"
                            value={editedQuiz.points || 0}
                            onChange={(e) =>
                                setEditedQuiz({
                                    ...editedQuiz,
                                    points: Number(e.target.value),
                                })
                            }
                        />
                    </div>
                    {/* Add other quiz fields here */}
                    <div className="d-flex justify-content-between mt-4">
                        <button className="btn btn-secondary" onClick={onCancel}>
                            Cancel
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleSave(false)}
                        >
                            Save
                        </button>
                        <button
                            className="btn btn-success"
                            onClick={() => handleSave(true)}
                        >
                            Save & Publish
                        </button>
                    </div>
                </div>
            )}

            {activeTab === "questions" && (
                <QuestionsEditor
                    quizId={quiz._id}
                    courseId={quiz.courseId}
                    points={editedQuiz.points || 0}
                    setQuizPoints={(points: number) =>
                        setEditedQuiz({ ...editedQuiz, points })
                    }
                />
            )}
        </div>
    );
};