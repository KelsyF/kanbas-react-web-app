
import React, { useState } from "react";
import { Question } from "./types";

export default function MultipleChoiceEditor({
                                                 question,
                                                 onSave,
                                                 onCancel,
                                             }: {
    question: Question;
    onSave: (updatedQuestion: Question) => void;
    onCancel: () => void;
}) {
    // Local state to manage edits
    const [localQuestion, setLocalQuestion] = useState<Question>({
        ...question,
        choices: question.choices || [],
    });

    const handleChoiceChange = (index: number, updatedChoice: { text: string; isCorrect: boolean }) => {
        setLocalQuestion((prev) => ({
            ...prev,
            choices: (prev.choices || []).map((choice, i) => (i === index ? updatedChoice : choice)),
        }));
    };

    const handleAddChoice = () => {
        setLocalQuestion((prev) => ({
            ...prev,
            choices: [...(prev.choices || []), { text: "New Choice", isCorrect: false }],
        }));
    };

    const handleDeleteChoice = (index: number) => {
        setLocalQuestion((prev) => ({
            ...prev,
            choices: (prev.choices || []).filter((_, i) => i !== index),
        }));
    };

    const handleSave = () => {
        onSave(localQuestion);
    };

    return (
        <div>
            <h3>Editing Multiple Choice Question</h3>
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
                    setLocalQuestion({
                        ...localQuestion,
                        questionText: e.target.value,
                    })
                }
                placeholder="Question Text"
            />
            <div className="mb-3">
                <h5>Choices</h5>
                <ul>
                    {(localQuestion.choices || []).map((choice, index) => (
                        <li key={index} className="d-flex align-items-center mb-2">
                            <input
                                type="radio"
                                name={`correct-choice-${localQuestion._id}`}
                                checked={choice.isCorrect}
                                onChange={() =>
                                    handleChoiceChange(index, { ...choice, isCorrect: true })
                                }
                            />
                            <input
                                type="text"
                                className="form-control d-inline-block w-auto ms-2"
                                value={choice.text}
                                onChange={(e) =>
                                    handleChoiceChange(index, { ...choice, text: e.target.value })
                                }
                                placeholder="Choice Text"
                            />
                            <button
                                className="btn btn-danger btn-sm ms-2"
                                onClick={() => handleDeleteChoice(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <button className="btn btn-primary" onClick={handleAddChoice}>
                    Add Choice
                </button>
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={onCancel}>
                    Cancel
                </button>
                <button className="btn btn-success" onClick={handleSave}>
                    Save Question
                </button>
            </div>
        </div>
    );
}