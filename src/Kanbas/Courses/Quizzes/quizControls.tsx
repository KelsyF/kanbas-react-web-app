
import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function QuizControls({ onSearch }: { onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
    const { cid } = useParams();
    const navigate = useNavigate();

    const handleAddQuiz = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/new`);
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
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
            </button>
        </div>
    );
}