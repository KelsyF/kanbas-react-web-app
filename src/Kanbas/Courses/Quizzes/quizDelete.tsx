
import React from "react";

interface QuizDeleteProps {
    quizId: string;
    quizTitle: string;
    deleteQuiz: (quizId: string) => void;
    closeDelete: () => void;
}

export default function QuizDelete({
                                       quizId,
                                       quizTitle,
                                       deleteQuiz,
                                       closeDelete,
                                   }: QuizDeleteProps) {
    const handleDelete = () => {
        deleteQuiz(quizId); // Call the parent-provided delete function
        closeDelete(); // Close the modal after deletion
    };

    return (
        <div className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-danger">Delete Quiz</h5>
                        <button type="button" className="btn-close" onClick={closeDelete}></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            Are you sure you want to delete the quiz <strong>{quizTitle}</strong>?
                        </p>
                        <p className="text-muted">
                            This action cannot be undone.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeDelete}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}