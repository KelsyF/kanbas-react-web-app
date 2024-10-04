

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="col mb-3 me-3">
          <label htmlFor="wd-name" className="form-label text-secondary fw-bold mt-3 mb-3">
              Assignment Name
          </label>
          <input type="text"
                 id="wd-name"
                 className="form-control mb-3"
                 value="A1 - ENV + HTML"
          />
          <textarea
              id="wd-description"
              className="form-control mb-3"
              cols={50}
              rows={9}>
              The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
              The landing page should include the following: Your full name and section Links to each of the lab assignments.
              Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link
              to navigate back to the landing page.
          </textarea>
          <div className="row mb-3 d-flex align-items-center">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label text-secondary fw-bold text-end">
                    Points
                </label>
              <div className="col-sm-10">
                  <input id="wd-points" value={100} className="form-control" />
              </div>
          </div>
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
          <div className="row mb-3 d-flex">
              <div className="col-sm-2 text-end">
                  <label htmlFor="wd-assign" className="col-form-label text-secondary fw-bold">
                      Assign
                  </label>
              </div>
              <div className="col-sm-10 border rounded p-2">
                  <div>
                      <label htmlFor="wd-assign-to" className="col-form-label text-secondary fw-bold">
                          Assign To
                      </label>
                      <div className="input-group mb-3">
                          <input id="wd-assign-to" value="Everyone" className="form-control" />
                      </div>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="wd-due-date" className="col-form-label text-secondary fw-bold">
                          Due
                      </label>
                      <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
                  </div>
                  <div className="row mb-3">
                      <div className="col-sm-5 me-5">
                          <label htmlFor="wd-available-from" className="col-form-label text-secondary fw-bold">
                              Available From
                          </label>
                          <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
                      </div>
                      <div className="col-sm-5 me-5">
                          <label htmlFor="wd-available-until" className="col-form-label text-secondary fw-bold">
                              Until
                          </label>
                          <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                      </div>
                  </div>
              </div>
          </div>
          <hr />
          <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-secondary me-2">Cancel</button>
              <button type="submit" className="btn btn-danger">Save</button>
          </div>
      </div>
    );
}