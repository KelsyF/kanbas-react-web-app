
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, updateQuiz } from "./reducer";
import { createQuiz, updateQuiz as updateQuizAPI } from "./client";

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [quiz, setQuiz] = useState<any>({ title: "", description: "", points: 0 });
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (qid && qid !== "new") {
            const existingQuiz = quizzes.find((q: any) => q._id === qid);
            if (existingQuiz) setQuiz(existingQuiz);
        }
    }, [qid, quizzes]);

    const validateQuiz = () => {
        if (!quiz.title.trim()  || quiz.points <= 0) {
            setError("Title and points are required.");
            return false;
        }
        return true;
    };

    const handleSave = async () => {
        if (!validateQuiz()) {
            return;
        }

        try {
            if(qid === "new") {
                const newQuiz = await createQuiz({ ...quiz, courseId: cid });
                dispatch(addQuiz(newQuiz));
            } else {
                const updatedQuiz = await updateQuizAPI(quiz);
                dispatch(updateQuiz(updatedQuiz));
            }
            navigate(`/Kanbas/Courses/${cid}/Quizzes`);
        } catch (e) {
            console.error(e);
            setError("Failed to save quiz.");
        }
    };

    return (
        <div>
            <h1>Quiz Editor</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <input
                type="text"
                value={quiz.title}
                onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
                placeholder="Quiz Title"
                className="form-control mb-3"
            />
            <textarea
                value={quiz.description}
                onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
                placeholder="Quiz Description"
                className="form-control mb-3"
            />
            <input
                type="number"
                value={quiz.points}
                onChange={(e) => setQuiz({ ...quiz, points: Number(e.target.value) })}
                placeholder="Points"
                className="form-control mb-3"
            />
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                Cancel
            </button>
            <button className="btn btn-danger" onClick={handleSave}>
                Save
            </button>
        </div>
    )
}