import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import {Provider, useSelector} from "react-redux";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import "./styles.css";
import store from "./store";

function KanbasInner() {
    const [myCourses, setMyCourses] = useState<any[]>([]);
    const [allCourses, setAllCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });
    const fetchCourses = async () => {
        try {
            const myCourses = await userClient.findMyCourses();
            const allCourses = await client.fetchAllCourses();
            console.log("My Courses:", myCourses);
            console.log("All Courses:", allCourses);
            setMyCourses(myCourses);
            setAllCourses(allCourses);
        } catch (error) {
            console.error(error);
        }
    };

    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setMyCourses([...myCourses, newCourse]);
    };
    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId)
        setMyCourses(myCourses.filter((course) => course._id !== courseId));
    };
    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setMyCourses(myCourses.map((c) => {
                if (c._id === course._id) { return course; }
                else { return c; }
            })
        );
    };

    // Redux selector to get the current user
    const currentUser = useSelector((state: any) => state.accountReducer.currentUser);

    useEffect(() => {
        if (currentUser) {
            fetchCourses();
        }
    }, [currentUser]);


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
                                    myCourses={myCourses}
                                    allCourses={allCourses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/Courses/:cid/*"
                        element={<ProtectedRoute><Courses courses={myCourses} /></ProtectedRoute>}
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