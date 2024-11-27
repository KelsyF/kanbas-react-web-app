
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database"

const loadEnrollments = (userID: string | null) => {
    if(enrollments) {
        return enrollments.filter((enrollment: any) => enrollment.user === userID);
    }
    return [];
}

const saveEnrollments = (userID: string, enrollments: any[]) => {
    localStorage.setItem(`enrollments-${userID}`, JSON.stringify(enrollments));
}

const initialState = {
    currentUser: null as any,
    userRole: null,
    enrollments: [] as any,
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            // console.log("Payload in setCurrentUser:", action.payload);
           if (action.payload === null) {
               state.currentUser = null;
               state.userRole = null;
               state.enrollments = [];
           } else {
               state.currentUser = action.payload;
               state.userRole = action.payload.role;
               const storedEnrollments = localStorage.getItem(`enrollments-${action.payload._id}`);
               state.enrollments = storedEnrollments ? JSON.parse(storedEnrollments) : loadEnrollments(action.payload._id);
           }
        },

        updateEnrollments: (state, action) => {
            const {cid, isEnrolled} = action.payload;
            if(state.currentUser) {
                if (isEnrolled) {
                    state.enrollments.push({
                        user: state.currentUser._id,
                        course: cid,
                    });
                } else {
                    state.enrollments = state.enrollments.filter(
                        (enrollment: any) => enrollment.course !== cid
                    );
                }
                saveEnrollments(state.currentUser._id, state.enrollments);
            } else {
                console.warn("No current user found. Cannot update enrollments.")
            }
        }
    },
});

export const { setCurrentUser, updateEnrollments } = accountSlice.actions;

export default accountSlice.reducer;