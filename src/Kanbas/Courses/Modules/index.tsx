
import ModulesControls from "./ModulesControls";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import FacultyContent from "../../Account/FacultyContent";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function Modules() {
    const { cid } = useParams();
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const [moduleName, setModuleName] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <FacultyContent>
            <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {
                dispatch(addModule({ name: moduleName, course: cid }));
                setModuleName("");
            }} />
            <br />
            <br />
            <br />
            </FacultyContent>
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <FacultyContent><BsGripVertical className="me-2 fs-3" /></FacultyContent>
                            {!module.editing && module.name}
                            {module.editing && (
                                <input className="form-control w-50 d-inline-block"
                                       onChange={(e) =>
                                           dispatch(updateModule({...module, name: e.target.value}))
                                        }
                                       onKeyDown={(e) => {
                                           if (e.key === "Enter") {
                                               dispatch(updateModule({...module, editing: false}));
                                           }
                                       }}
                                       defaultValue={module.name} />
                            )}
                            <FacultyContent>
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={(moduleId) => {
                                        dispatch(deleteModule(moduleId));
                                    }}
                                    editModule={(moduleId) =>
                                        dispatch(editModule(moduleId))} />
                            </FacultyContent>
                        </div>
                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: any) => (
                                    <li className="wd-lesson list-group-item p-3 ps-1">
                                        <FacultyContent><BsGripVertical className="me-2 fs-3" /></FacultyContent>
                                        {lesson.name}
                                        <FacultyContent><LessonControlButtons /></FacultyContent>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}