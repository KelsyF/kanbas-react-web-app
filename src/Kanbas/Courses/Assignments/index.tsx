
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { LuFileSignature } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import FacultyContent from "../../Account/FacultyContent";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteAssignment, setAssignments } from "./reducer";
import AssignmentDelete from "./AssignmentDelete";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch()
    // console.log(assignments); // Debugging

    const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const handleDeleteClick = (assignment: any) => {
        setAssignmentToDelete(assignment);
        setIsDeleteOpen(true);
    }

    const handleDeleteAssignment = async (assignmentId: any) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
        setIsDeleteOpen(false);
        setAssignmentToDelete(null);
    };

    const handleCloseDelete = () => {
        setIsDeleteOpen(false);
        setAssignmentToDelete(null);
    }

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        // console.log("Fetch assignments list:", assignments);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, [cid]);

    return (
        <div id="wd-assignments">
            <br/>
            <br/>
            <FacultyContent>
                <AssignmentsControls />
            </FacultyContent>
            <br/>
            <br/>
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 fw-bold bg-secondary-subtle fs-3">
                        <FacultyContent>
                            <BsGripVertical className="me-2" />
                        </FacultyContent>
                        <IoMdArrowDropdown className="text-secondary" />
                        ASSIGNMENTS
                        <FacultyContent>
                            <AssignmentControlButtons />
                        </FacultyContent>
                    </div>
                {assignments
                    .map((assignment: any) => (
                        <li
                            key={assignment._id}
                            className="wd-lesson d-flex justify-content-between align-items-center list-group-item p-3 ps-1"
                        >
                            <div className="d-flex align-items-center">
                                <FacultyContent>
                                    <BsGripVertical className="me-2 fs-3" />
                                </FacultyContent>
                                <LuFileSignature className="me-2 fs-3 text-success" />
                                <div className="d-flex flex-column">
                                    <div className="ms-2">
                                        <Link
                                            className="wd-assignment-link text-decoration-none text-dark"
                                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            <span className="fw-bold fs-3">{assignment.title}</span>
                                        </Link>
                                    </div>
                                    <div className="ms-2">
                                        <span className="text-danger">Multiple Modules</span>
                                        <span className="fw-bold ms-1">| Available From </span>
                                        <span className="ms-1">{assignment.availableDate} |</span>
                                        <div>
                                            <span className="fw-bold">Due </span>
                                            <span className="ms-1">{assignment.dueDate} | {assignment.points} pts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FacultyContent>
                                <button
                                    className="btn btn-danger me-2"
                                    onClick={() => handleDeleteClick(assignment)}
                                >
                                    <FaTrash />
                                </button>
                            </FacultyContent>
                        </li>
                    ))}
                </li>
            </ul>
            {isDeleteOpen && assignmentToDelete && (
            <AssignmentDelete
                assignmentId={assignmentToDelete._id}
                deleteAssignment={handleDeleteAssignment}
                closeDelete={handleCloseDelete}
            />
            )}
        </div>
    );
}