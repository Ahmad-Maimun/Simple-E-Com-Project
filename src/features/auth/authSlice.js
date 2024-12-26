import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    user: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.isLogin = true;
            state.user = action.payload;
        },
    }
})

export default authSlice.reducer;
export const { addUser } = authSlice.actions;