
export default function AssignmentDelete({ assignmentId, deleteAssignment, closeDelete }:
                                             { assignmentId: string; deleteAssignment: (assignmentID: string) => void; closeDelete: () => void; }) {

    return (
        <div id="wd-delete-assignment-dialog" className="modal fade show" style={{
            display: 'block',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1040
        }}
             aria-labelledby="staticBackdropLabel" aria-hidden="false" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Delete Assignment
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeDelete}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this assignment?</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-danger" onClick={() => deleteAssignment(assignmentId)}>
                            Yes
                        </button>
                        <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeDelete}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}