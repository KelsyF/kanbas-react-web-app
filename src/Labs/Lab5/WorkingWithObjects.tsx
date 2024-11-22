
import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

    const [module, setModule] = useState({
        id: "mod1", name: "NodeJS Module",
        description: "Full intro into NodeJS",
        course: "CS5610"
    });
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

    return(
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <h5>Assignment</h5>
            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                   defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })
            }/>
            <br/>
            <a id="wd-update-assignment-score"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input className="form-control w-75" id="wd-assignment-score" type="number"
                   value={assignment.score} onChange={(e) =>
                setAssignment({ ...assignment, score: Number(e.target.value) })
            }/>
            <br/>
            <a id="wd-update-assignment-completed"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <input className="w-75" id="wd-assignment-completed" type="checkbox"
                   checked={assignment.completed} onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked })
            }/>
            <h5 className="mt-2">Module</h5>
            <a id="wd-update-module-name"
               className="btn btn-primary float-end"
               href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                   defaultValue={module.name} onChange={(e) =>
                setModule({ ...module, name: e.target.value })
            }/>
            <br/>
            <a id="wd-update-module-description"
               className="btn btn-primary float-end"
               href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <input className="form-control w-75" id="wd-module-description"
                   defaultValue={module.description} onChange={(e) =>
                setModule({ ...module, description: e.target.value })
            }/>
            <hr/>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary me-2"
            href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            <a id="wd-retrieve-module" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a>
            <hr/>
            <h4>Retrieving Properties</h4>
            < a id="wd-retrieve-assignment-title" className="btn btn-primary me-2"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}
            >
                Get Title
            </a>
            < a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}
            >
                Get Module Name
            </a>
            <hr/>
        </div>
    )
}