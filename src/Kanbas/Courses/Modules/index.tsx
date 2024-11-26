
import ModulesControls from "./ModulesControls";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import FacultyContent from "../../Account/FacultyContent";
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
    const { cid } = useParams();
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const [moduleName, setModuleName] = useState("");
    const dispatch = useDispatch();
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    }
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    }
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    }
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModules();
    }, []);

    return (
        <div>
            <FacultyContent>
            <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={createModuleForCourse} />
            <br />
            <br />
            <br />
            </FacultyContent>
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
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
                                               saveModule({...module, editing: false});
                                           }
                                       }}
                                       value={module.name} />
                            )}
                            <FacultyContent>
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={(moduleId) => removeModule(moduleId)}
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