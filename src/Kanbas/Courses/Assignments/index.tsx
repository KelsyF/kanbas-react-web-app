
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { LuFileSignature } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Assignments() {
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
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson d-flex justify-content-between align-items-center list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <LuFileSignature className="me-2 fs-3 text-success" />
                                <div className="d-flex flex-column">
                                    <div className="ms-2">
                                        <a className="wd-assignment-link text-decoration-none text-dark"
                                           href="#/Kanbas/Courses/1234/Assignments/123">
                                            <span className="fw-bold fs-3">A1</span>
                                        </a>
                                    </div>
                                    <div>
                                        <span className="text-danger">Multiple Modules</span>
                                        <span className="fw-bold ms-1">| Not available until </span>
                                        <span className="ms-1">May 6 at 12:00am |</span>
                                        <div>
                                            <span className="fw-bold">Due </span>
                                            <span className="ms-1">May 13 at 11:59pm | 100 pts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-3">
                                <LessonControlButtons />
                            </div>
                        </li>
                        <li className="wd-lesson d-flex justify-content-between align-items-center list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <LuFileSignature className="me-2 fs-3 text-success" />
                                <div className="d-flex flex-column">
                                    <div className="ms-2">
                                        <a className="wd-assignment-link text-decoration-none text-dark"
                                           href="#/Kanbas/Courses/1234/Assignments/123">
                                            <span className="fw-bold fs-3">A2</span>
                                        </a>
                                    </div>
                                    <div>
                                        <span className="text-danger">Multiple Modules</span>
                                        <span className="fw-bold ms-1">| Not available until </span>
                                        <span className="ms-1">May 13 at 12:00am |</span>
                                        <div>
                                            <span className="fw-bold">Due </span>
                                            <span className="ms-1">May 20 at 11:59pm | 100 pts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-3">
                                <LessonControlButtons />
                            </div>
                        </li>
                        <li className="wd-lesson d-flex justify-content-between align-items-center list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <LuFileSignature className="me-2 fs-3 text-success" />
                                <div className="d-flex flex-column">
                                    <div className="ms-2">
                                        <a className="wd-assignment-link text-decoration-none text-dark"
                                           href="#/Kanbas/Courses/1234/Assignments/123">
                                            <span className="fw-bold fs-3">A3</span>
                                        </a>
                                    </div>
                                    <div>
                                        <span className="text-danger">Multiple Modules</span>
                                        <span className="fw-bold ms-1">| Not available until </span>
                                        <span className="ms-1">May 20 at 12:00am |</span>
                                        <div>
                                            <span className="fw-bold">Due </span>
                                            <span className="ms-1">May 27 at 11:59pm | 100 pts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-3">
                                <LessonControlButtons />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}