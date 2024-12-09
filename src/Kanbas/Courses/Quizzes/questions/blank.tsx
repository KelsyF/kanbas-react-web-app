
import React, { useState } from "react";
import { Question } from "./types";

export default function FillInTheBlankEditor({
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
        correctAnswers: question.correctAnswers || [],
    });

    const handleAddBlank = () => {
        setLocalQuestion((prev) => ({
            ...prev,
            correctAnswers: [...(prev.correctAnswers || []), ""],
        }));
    };

    const handleRemoveBlank = (index: number) => {
        setLocalQuestion((prev) => ({
            ...prev,
            correctAnswers: (prev.correctAnswers || []).filter((_: any, i: any) => i !== index),
        }));
    };

    const handleUpdateBlank = (index: number, value: string) => {
        setLocalQuestion((prev) => ({
            ...prev,
            correctAnswers: (prev.correctAnswers || []).map((answer: any, i: any) =>
                i === index ? value : answer
            ),
        }));
    };

    const handleSave = () => {
        onSave(localQuestion);
    };

    return (
        <div>
            <h3>Editing Fill in the Blank Question</h3>
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
            <div className="mb-3">
                <h5>Correct Answers</h5>
                <ul className="list-group">
                    {(localQuestion.correctAnswers || []).map((answer: any, index: any) => (
                        <li key={index} className="list-group-item d-flex align-items-center">
                            <input
                                type="text"
                                className="form-control me-2"
                                value={answer}
                                onChange={(e) => handleUpdateBlank(index, e.target.value)}
                                placeholder="Possible Correct Answer"
                            />
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleRemoveBlank(index)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <button className="btn btn-primary mt-3" onClick={handleAddBlank}>
                    Add Correct Answer
                </button>
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