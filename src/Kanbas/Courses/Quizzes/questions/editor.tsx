
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion, updateQuestion } from "./reducer";
import { createQuestion, updateQuestion as updateQuestionAPI } from "./client";

export default function QuestionEditor() {
    const { qid, questionId } = useParams();
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [question, setQuestion] = useState<any>({
        title: "",
        type: "Multiple Choice", // Default type
        points: 1,
        questionText: "",
        choices: [{ text: "", isCorrect: false }],
    });
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (questionId && questionId !== "new") {
            const existingQuestion = questions.find((q: any) => q._id === questionId);
            if (existingQuestion) setQuestion(existingQuestion);
        }
    }, [questionId, questions]);

    const validateQuestion = () => {
        if (!question.title.trim() || question.points <= 0) {
            setError("Title and points are required.");
            return false;
        }
        if (question.type === "Multiple Choice" && question.choices.length < 2) {
            setError("Multiple Choice questions require at least two choices.");
            return false;
        }
        return true;
    };

    const handleSave = async () => {
        if (!validateQuestion()) return;

        try {
            if (questionId === "new") {
                const newQuestion = await createQuestion({ ...question, quizId: qid });
                dispatch(addQuestion(newQuestion));
            } else {
                const updatedQuestion = await updateQuestionAPI(question);
                dispatch(updateQuestion(updatedQuestion));
            }
            navigate(`/Kanbas/Courses/${qid}/Questions`);
        } catch (e) {
            console.error(e);
            setError("Failed to save question.");
        }
    };

    const handleAddChoice = () => {
        setQuestion({
            ...question,
            choices: [...question.choices, { text: "", isCorrect: false }],
        });
    };

    const handleChoiceChange = (index: number, key: string, value: any) => {
        const updatedChoices = question.choices.map((choice: any, i: number) =>
            i === index ? { ...choice, [key]: value } : choice
        );
        setQuestion({ ...question, choices: updatedChoices });
    };

    return (
        <div>
            <h1>Question Editor</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <input
                type="text"
                value={question.title}
                onChange={(e) => setQuestion({ ...question, title: e.target.value })}
                placeholder="Question Title"
                className="form-control mb-3"
            />
            <textarea
                value={question.questionText}
                onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
                placeholder="Question Text"
                className="form-control mb-3"
            />
            <select
                value={question.type}
                onChange={(e) => setQuestion({ ...question, type: e.target.value })}
                className="form-control mb-3"
            >
                <option value="Multiple Choice">Multiple Choice</option>
                <option value="True/False">True/False</option>
                <option value="Fill in the Blank">Fill in the Blank</option>
            </select>
            {question.type === "Multiple Choice" && (
                <div>
                    <h4>Choices</h4>
                    {question.choices.map((choice: any, index: number) => (
                        <div key={index} className="mb-2">
                            <input
                                type="text"
                                value={choice.text}
                                onChange={(e) =>
                                    handleChoiceChange(index, "text", e.target.value)
                                }
                                placeholder={`Choice ${index + 1}`}
                                className="form-control mb-1"
                            />
                            <label>
                                <input
                                    type="radio"
                                    checked={choice.isCorrect}
                                    onChange={() =>
                                        handleChoiceChange(index, "isCorrect", true)
                                    }
                                />
                                Correct
                            </label>
                        </div>
                    ))}
                    <button className="btn btn-secondary" onClick={handleAddChoice}>
                        Add Choice
                    </button>
                </div>
            )}
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                Cancel
            </button>
            <button className="btn btn-danger" onClick={handleSave}>
                Save
            </button>
        </div>
    );
}
