
import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const existingEnrollment = enrollments.some(
        (enrollment) => enrollment.user === userId && enrollment.course === courseId
    )
    console.log(existingEnrollment);
    if (!existingEnrollment) {
        const newEnrollment = {
            _id: Date.now().toString(),
            user: userId,
            course: courseId,
        };
        enrollments.push(newEnrollment);
        return newEnrollment; // Return the newly created enrollment
    } else {
        return null; // Indicate no new enrollment was created
    }
}

export function unerollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const enrollmentIndex = enrollments.findIndex(
        (enrollment) => enrollment.user === userId && enrollment.course === courseId
    );
    if (enrollmentIndex !== -1) {
        enrollments.splice(enrollmentIndex, 1);
    } else {
        return { message: "Enrollment not found" };
    }
}