
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    userRole: null,
};
const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
           if (action.payload === null) {
               state.currentUser = null;
               state.userRole = null;
           } else {
               state.currentUser = action.payload.user;
               state.userRole = action.payload.role;
           }
        },
    },
});

export const { setCurrentUser } = accountSlice.actions;

export default accountSlice.reducer;