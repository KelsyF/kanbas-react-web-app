
import AssignmentEditor from "./Editor";
import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

export default function AssignmentsControls() {
    const dispatch = useDispatch();
    const assignment = useSelector((state: any) => state.assignmentsReducer)
    const handleAddAssignment = () => {
        const newAssignment = {
            title: "",
            course: "",
            description: "",
            availableDate: "",
            availableUntil: '',
            dueDate: '',
            points: 0,
        };
    };

    return (
        <div id="wd-assignments-controls" className="d-flex align-items-center text-nowrap">
            <div className="input-group border border-secondary-subtle rounded input-group-lg me-5">
                <span className="input-group-text text-secondary bg-white border-0">
                    <FaMagnifyingGlass />
                </span>
                <input type="text"
                       id="wd-search-assignment"
                       className="form-control border-0 text-secondary"
                       placeholder="Search..."
                />
            </div>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end"
                    type="button">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
                Group
            </button>
            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end"
                    type="button" onClick={handleAddAssignment}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
                Assignment
            </button>
        </div>
    );
}