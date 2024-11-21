
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import CircleBackslash from "./CircleBackslash";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls(
    { moduleName, setModuleName, addModule }:
        { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }
) {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-add-module-btn" className="btn btn-md btn-danger me-1 float-end"
                    data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </button>
            <div className="dropdown d-inline me-1 float-end">
                <button id="wd-publish-all-btn" className="btn btn-md btn-secondary dropdown-toggle"
                        type="button" data-bs-toggle="dropdown">
                    <GreenCheckmark />
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <span id="wd-publish-all-modules-and-items-btn" className="dropdown-item">
                            <GreenCheckmark />
                            Publish all modules and items
                        </span>
                    </li>
                    <li>
                        <span id="wd-publish-modules-only-button" className="dropdown-item">
                            <GreenCheckmark />
                            Publish modules only
                        </span>
                    </li>
                    <li>
                        <span id="wd-unpublish-all-modules-and-items-btn" className="dropdown-item">
                            <CircleBackslash />
                            Unpublish all modules and items
                        </span>
                    </li>
                    <li>
                        <span id="wd-unpublish-modules-only-btn" className="dropdown-item">
                            <CircleBackslash />
                            Unpublish modules only
                        </span>
                    </li>
                </ul>
            </div>
            <button id="wd-collapse-all-btn" className="btn btn-md btn-secondary me-1 float-end"
                    type="button">
                Collapse All
            </button>
            <button id="wd-view-progress-btn" className="btn btn-md btn-secondary me-1 float-end"
                    type="button">
                View Progress
            </button>
            <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
                          setModuleName={setModuleName} addModule={addModule} />
        </div>
    );
}