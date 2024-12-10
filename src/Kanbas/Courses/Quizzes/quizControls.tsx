
import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function QuizControls({ onSearch }: { onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
    const { cid } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleAddQuiz = async () => {
        if (!cid) {
            console.error("Course ID is missing");
            return;
        }

        const newQuiz = {
            title: "New Quiz",
            description: "",
            createdBy: "Admin", // Update fields based on your API's requirements
            published: false,
            points: 0,
        };

        setIsLoading(true);

        try {
            const response = await axios.post(`${REMOTE_SERVER}/api/quizzes/courses/${cid}`, newQuiz);
            const createdQuiz = response.data;

            if (createdQuiz && createdQuiz._id) {
                // Navigate directly to the newly created quiz
                navigate(`/Kanbas/Courses/${cid}/Quizzes/${createdQuiz._id}`);
            } else {
                console.error("Quiz ID is missing in the response:", createdQuiz);
            }
        } catch (error) {
            console.error("Error creating quiz:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="wd-quiz-controls" className="d-flex align-items-center text-nowrap">
            <div className="input-group border border-secondary-subtle rounded input-group-lg me-5">
                <span className="input-group-text text-secondary bg-white border-0">
                    <FaMagnifyingGlass />
                </span>
                <input
                    type="text"
                    id="wd-search-quiz"
                    className="form-control border-0 text-secondary"
                    placeholder="Search..."
                    onChange={onSearch}
                />
            </div>
            <button
                id="wd-add-quiz"
                className="btn btn-lg btn-danger me-1 float-end"
                type="button"
                onClick={handleAddQuiz}
                disabled={isLoading}
            >
                {isLoading ? "Adding..." : (
                    <>
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Quiz
                    </>
                )}
            </button>
        </div>
    );
}