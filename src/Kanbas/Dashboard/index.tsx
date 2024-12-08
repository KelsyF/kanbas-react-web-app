import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FacultyContent from "../Account/FacultyContent";
import StudentContent from "../Account/StudentContent";
import * as accountClient from "../Account/client";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment}: {
        courses: any[]; course: any;
        setCourse: (course: any) => void;
        addNewCourse: () => void;
        deleteCourse: (course: any) => void;
        updateCourse: () => void;
        enrolling: boolean;
        setEnrolling: (enrolling: boolean) => void;
        updateEnrollment: (courseId: string, enrolled: boolean) => void;
    })
{
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const[showAllCourses, setShowAllCourses] = useState(false);

    const emptyCourse = { name: "", description: ""};

    const handleAddCourse = () => {
        addNewCourse();
        setCourse(emptyCourse);
    }

    const handleUpdateCourse = () => {
        updateCourse();
        setCourse(emptyCourse);
    }

    const toggleEnrollments = () => {
        setEnrolling(!enrolling);
    };

    const handleCourseClick = (cid: string) => {
        const selectedCourse = courses.find((course) => course._id === cid);
        if (selectedCourse.enrolled) {
            navigate(`/Kanbas/Courses/${cid}/Home`);
        } else {
            alert("You are not enrolled in this course.");
            navigate("/Kanbas/Dashboard");
        }
    };

    return (
        <div id="wd-dashboard">
            <div className="p-4" id="wd-dashboard">
                <StudentContent>
                    <button className="btn btn-primary float-end"
                            id="wd-enrollments"
                            onClick={toggleEnrollments}>
                        {enrolling ? "Enrollments" : "All Courses"}
                    </button>
                </StudentContent>
                <h1 id="wd-dashboard-title">Dashboard</h1>
                <hr/>
                <FacultyContent>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                                id="wd-add-new-course-click"
                                onClick={handleAddCourse}> Add </button>
                        <button className="btn btn-warning float-end me-2"
                                onClick={handleUpdateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <br/>
                    <input value={course.name} className="form-control mb-2"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })}/>
                    <textarea value={course.description} className="form-control"
                                onChange={(e) => setCourse({ ...course, description: e.target.value })}/>
                    <hr/>
                </FacultyContent>
                <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
                <hr/>
                <div className="row" id="wd-dashboard-courses">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {courses.map((course) => (
                            <div key={course._id} className="col" style={{width: "300px"}}>
                                <div className="card diflex flex-column h-100 rounded-3 overflow-hidden">
                                    <span className="wd-dashboard-course-link text-decoration-none text-dark"
                                          onClick={() => handleCourseClick(course._id)}>
                                        <img src="/images/reactjs.jpg" width="100%" height={160}  alt={course.name}/>
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="wd-dashboard-course-title card-title text-primary-emphasis">
                                                    {enrolling && (
                                                        <button onClick={(event) => {
                                                            event.stopPropagation();
                                                            updateEnrollment(course._id, !course.enrolled);
                                                        }}
                                                                className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                            {course.enrolled ? "Unenroll" : "Enroll"}
                                                        </button>
                                                    )}
                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100}}>
                                                {course.description}
                                            </p>
                                            <div className="mt-auto d-flex justify-content-between">
                                                <button className="btn btn-primary">Go</button>
                                                <FacultyContent>
                                                    <div className="d-flex">
                                                        <button id="wd-edit-course-click"
                                                                onClick={(event) => {
                                                                    event.stopPropagation();
                                                                    setCourse(course);
                                                                }}
                                                                className="btn btn-warning me-2">
                                                            Edit
                                                        </button>
                                                        <button onClick={(event) => {
                                                            event.stopPropagation();
                                                            deleteCourse(course._id);
                                                        }} className="btn btn-danger"
                                                                id="wd-delete-course-click">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </FacultyContent>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}