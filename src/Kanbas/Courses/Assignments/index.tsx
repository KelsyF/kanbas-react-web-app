
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { LuFileSignature } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";

import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments">
            <br/>
            <br/>
            <AssignmentsControls />
            <br/>
            <br/>
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 fw-bold bg-secondary-subtle fs-3">
                        <BsGripVertical className="me-2" />
                        <IoMdArrowDropdown className="text-secondary" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson d-flex justify-content-between align-items-center list-group-item p-3 ps-1">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <LuFileSignature className="me-2 fs-3 text-success" />
                                    <div className="d-flex flex-column">
                                        <div className="ms-2">
                                            <Link className="wd-assignment-link text-decoration-none text-dark"
                                               to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                <span className="fw-bold fs-3">{assignment.title}</span>
                                            </Link>
                                        </div>
                                        <div className="ms-2">
                                            <span className="text-danger">Multiple Modules</span>
                                            <span className="fw-bold ms-1">| Not available until </span>
                                            <span className="ms-1">{assignment.available} |</span>
                                            <div>
                                                <span className="fw-bold">Due </span>
                                                <span className="ms-1">{assignment.due} | {assignment.points} pts</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    ))}
                </li>
            </ul>
        </div>
    );
}