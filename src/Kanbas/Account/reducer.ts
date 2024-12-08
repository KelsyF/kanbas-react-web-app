
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null as any,
    userRole: null,
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
           } else {
               state.currentUser = action.payload;
               state.userRole = action.payload.role;
           }
        },
    },
});

export const { setCurrentUser } = accountSlice.actions;

export default accountSlice.reducer;