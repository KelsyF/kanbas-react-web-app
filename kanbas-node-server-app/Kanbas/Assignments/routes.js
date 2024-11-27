
import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        //console.log(`Server received request to delete assignment with ID: ${assignmentId}`);
        const status = assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    });
}