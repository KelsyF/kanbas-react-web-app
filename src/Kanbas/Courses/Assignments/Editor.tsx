
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";


export default function AssignmentEditor( ) {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [assignment, setAssignment] = useState<any>({
        title:"",
        description:"",
        points: 0,
        dueDate:"",
        availableDate:"",
        availableUntil:"",
    });
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (aid && aid !== "new") {
            const existingAssignment = assignments.find((a: any) => a._id === aid);
            if (existingAssignment) {
                setAssignment(existingAssignment);
            } else {
                setAssignment(assignment);
            }
        } else {
            setAssignment(assignment);
        }
    }, [aid, assignments]);

    const validateAssignment = () => {
        if (!assignment.title.trim() || assignment.points <= 0 || !assignment.dueDate) {
            setError("Please complete all required fields (Title, Points, and Due Date).");
            return false;
        }
        return true;
    }

    const handleSave = async () => {
        if (!validateAssignment()) return;
        try {
            if (aid === "new") {
                const newAssignment = {...assignment, _id: String(Date.now()), course: cid}
                const createAssignment = await coursesClient.createAssignmentForCourse(cid as string , newAssignment);
                // console.log("Dispatched createAssignment:", createAssignment); // Debugging
                dispatch(addAssignment(createAssignment));
            } else {
                const updatedAssignment = {...assignment, _id: aid};
                const saveAssignment = await assignmentsClient.updateAssignment(updatedAssignment);
                dispatch(updateAssignment(saveAssignment));
                // console.log("Dispatching updateAssignment:", updatedAssignment);  // Debugging
            }
            navigate(`/Kanbas/Courses/${cid}/Assignments`)
        } catch (error) {
            setError("Failed to save assignment. Please try again.")
            console.log("Save failed error:", error);
        }
    };


    return (
      <div id="wd-assignments-editor">
          <div id="wd-assignment-editor" className="col mb-3 me-3">
              <label htmlFor="wd-name" className="form-label text-secondary fw-bold mt-3 mb-3">
                  Assignment Name
              </label>
              <input
                  type="text"
                  id="wd-name"
                  className="form-control mb-3"
                  value={assignment.title}
                     onChange={(e) => setAssignment({...assignment, title: e.target.value})}
                     placeholder="Assignment Title"
              />
              <textarea
                  id="wd-description"
                  className="form-control mb-3"
                  cols={50}
                  rows={9}
                  value={assignment.description}
                  onChange={(e) => setAssignment({...assignment, description: e.target.value})}
                  placeholder="Assignment Description"/>
          </div>
          <div className="row mb-3 d-flex align-items-center">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label text-secondary fw-bold text-end">
                    Points
                </label>
              <div className="col-sm-10">
                  <input
                      id="wd-points"
                      defaultValue={assignment.points}
                      type="number"
                      className="form-control"
                      onChange={(e) => setAssignment({...assignment, points: Number(e.target.value)})}
                      placeholder="Assignment Points"/>
              </div>
          </div>
          {/*
          <div className="row mb-3 d-flex align-items-center">
              <label htmlFor="wd-group" className="col-sm-2 col-form-label text-secondary fw-bold text-end">
                  Assignment Group
              </label>
              <div className="col-sm-10">
                  <select className="form-select" id="wd-group">
                      <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                      <option value="ASSIGNMENTS2">ASSIGNMENTS2</option>
                      <option value="ASSIGNMENTS3">ASSIGNMENTS3</option>
                      <option value="ASSIGNMENTS4">ASSIGNMENTS4</option>
                  </select>
              </div>
          </div>
          <div className="row mb-3 d-flex align-items-center">
              <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label text-secondary fw-bold text-end">
                  Display Grade as
              </label>
              <div className="col-sm-10" id="wd-display-grade-as">
                  <select className="form-select">
                      <option value="PERCENTAGE">Percentage</option>
                      <option value="LETTER">Letter</option>
                  </select>
              </div>
          </div>
          <div className="row mb-3 d-flex">
              <div className="col-sm-2 text-end">
                  <label htmlFor="wd-submission-type" className="col-form-label text-secondary fw-bold">
                      Submission Type
                  </label>
              </div>
              <div className="col-sm-10 border rounded p-2">
                  <div className="col-sm-10" id="wd-submission-type">
                      <select className="form-select">
                          <option value="ONLINE">Online</option>
                          <option value="LINK">Link</option>
                          <option value="DOC">Document</option>
                      </select>
                  </div>
                  <div className="col-sm-10 m-2">
                      <label htmlFor="wd-submission-type" className="col-form-label text-secondary fw-bold">
                          Online Entry Options
                      </label>
                      <div className="form-check m-2">
                          <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                          <label className="form-check-label" htmlFor="wd-text-entry">
                              Text Entry
                          </label>
                      </div>
                      <div className="form-check m-2">
                          <input className="form-check-input" type="checkbox" id="wd-website-url" />
                          <label className="form-check-label" htmlFor="wd-website-url">
                              Website URL
                          </label>
                      </div>
                      <div className="form-check m-2">
                          <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                          <label className="form-check-label" htmlFor="wd-media-recordings">
                              Media Recordings
                          </label>
                      </div>
                      <div className="form-check m-2">
                          <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                          <label className="form-check-label" htmlFor="wd-student-annotation">
                              Student Annotation
                          </label>
                      </div>
                      <div className="form-check m-2">
                          <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                          <label className="form-check-label" htmlFor="wd-file-upload">
                              File Upload
                          </label>
                      </div>
                  </div>
              </div>
          </div>
          */}
          <div className="row mb-3 d-flex">
              <div className="col-sm-2 text-end">
                  <label htmlFor="wd-assign" className="col-form-label text-secondary fw-bold">
                      Assign
                  </label>
              </div>
              <div className="col-sm-10 border rounded p-2">
                  {/*
                  <div>
                      <label htmlFor="wd-assign-to" className="col-form-label text-secondary fw-bold">
                          Assign To
                      </label>
                      <div className="input-group mb-3">
                          <input id="wd-assign-to" value="Everyone" className="form-control" />
                      </div>
                  </div>
                  */}
                  <div className="mb-3">
                      <label htmlFor="wd-due-date" className="col-sm-2 col-form-label text-secondary fw-bold">
                          Due
                      </label>
                      <div className="col-sm-10">
                          <input
                              type="date"
                              id="wd-due-date"
                              value={assignment.dueDate}
                              className="form-control"
                              onChange={(e) => setAssignment({...assignment, dueDate: e.target.value})} />
                      </div>
                  </div>
                  <div className="row mb-3">
                      <div className="col-sm-5 me-5">
                          <label htmlFor="wd-available-from" className="col-form-label text-secondary fw-bold">
                              Available From
                          </label>
                          <div className="col-sm-10">
                              <input
                                  type="date"
                                  id="wd-available-from"
                                  value={assignment.availableDate}
                                  className="form-control"
                                  onChange={(e) => setAssignment({...assignment, availableDate: e.target.value})} />
                          </div>
                      </div>
                      <div className="col-sm-5 me-5">
                          <label htmlFor="wd-available-until" className="col-sm-2 col-form-label text-secondary fw-bold">
                              Until
                          </label>
                          <div className="col-sm-10">
                              <input
                                  type="date"
                                  id="wd-available-until"
                                  value={assignment.availableUntil}
                                  className="form-control"
                                  onChange={(e) => setAssignment({...assignment, availableUntil: e.target.value})} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {error && <div className="alert alert-danger">
              {error}
          </div>}
          <hr />
          <div className="d-flex justify-content-end">
              <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
              >Cancel</button>
              <button type="button"
                      className="btn btn-danger"
                      onClick={handleSave}
              >Save</button>
          </div>
      </div>
    );
}