
import React, { useState } from "react";
import { Question } from "./types";

export default function TrueFalseEditor({
                                            question,
                                            onSave,
                                            onCancel,
                                        }: {
    question: Question;
    onSave: (updatedQuestion: Question) => void;
    onCancel: () => void;
}) {
    const [localQuestion, setLocalQuestion] = useState<Question>({
        ...question,
        correctAnswer: question.correctAnswer ?? false, // Default to false if undefined
    });

    const handleSave = () => {
        onSave(localQuestion); // Only call onSave when explicitly saving
    };

    return (
        <div>
            <input
                type="text"
                className="form-control mb-2"
                value={localQuestion.title}
                onChange={(e) =>
                    setLocalQuestion({ ...localQuestion, title: e.target.value })
                }
                placeholder="Question Title"
            />
            <textarea
                className="form-control mb-2"
                value={localQuestion.questionText || ""}
                onChange={(e) =>
                    setLocalQuestion({ ...localQuestion, questionText: e.target.value })
                }
                placeholder="Question Text"
            />
            <div>
                <h5>Correct Answer</h5>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="true"
                        name="correctAnswer"
                        checked={localQuestion.correctAnswer === true}
                        onChange={() =>
                            setLocalQuestion({ ...localQuestion, correctAnswer: true })
                        }
                    />
                    <label className="form-check-label" htmlFor="true">
                        True
                    </label>
                </div>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="false"
                        name="correctAnswer"
                        checked={localQuestion.correctAnswer === false}
                        onChange={() =>
                            setLocalQuestion({ ...localQuestion, correctAnswer: false })
                        }
                    />
                    <label className="form-check-label" htmlFor="false">
                        False
                    </label>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-secondary" onClick={onCancel}>
                    Cancel
                </button>
                <button className="btn btn-success" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
}