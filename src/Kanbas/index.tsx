import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import {Provider, useSelector} from "react-redux";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import "./styles.css";
import store from "./store";

function KanbasInner() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({});
    const [enrolling, setEnrolling] = useState<boolean>(false);
    const findCoursesForUser = async () => {
        const allCourses = await courseClient.fetchAllCourses();
        const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);

        const enrolledCourseIds = new Set(enrolledCourses.map((course: any) => course._id));

        const coursesWithEnrollment = allCourses
            .map((course: any) => ({
                ...course,
                enrolled: enrolledCourseIds.has(course._id),
            }))
            .filter((course: any) => course.enrolled);

        setCourses(coursesWithEnrollment);
    };
    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            await userClient.enrollIntoCourse(currentUser._id, courseId);
        } else {
            await userClient.unenrollFromCourse(currentUser._id, courseId);
        }
        setCourses(
            courses.map((course) => {
                if (course._id === courseId) {
                    return { ...course, enrolled: enrolled };
                } else {
                    return course;
                }
            })
        );
    };

    const fetchCourses = async () => {
        try {
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
            const courses = allCourses.map((course: any) => {
                const isEnrolled = enrolledCourses.some((c: any) => c._id === course._id);
                return { ...course, enrolled: isEnrolled }; // Always set enrolled
            });
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const addNewCourse = async () => {
        const newCourse = await courseClient.createCourse(course);
        setCourses([...courses, newCourse]);
    };
    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
                if (c._id === course._id) { return course; }
                else { return c; }
            })
        );
    };

    useEffect(() => {
        if (enrolling) {
            fetchCourses();
        } else {
            findCoursesForUser();
        }
    }, [currentUser, enrolling]);

    return (
        <div id="wd-kanbas">
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route
                        path="/Dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    enrolling={enrolling}
                                    setEnrolling={setEnrolling}
                                    updateEnrollment={updateEnrollment}
                                />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/Courses/:cid/*"
                        element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>}
                    />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default function Kanbas() {
    return (
        <Provider store={store}>
            <Session>
                <KanbasInner />
            </Session>
        </Provider>
    );
}