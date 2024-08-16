import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.status = 'succeeded';
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.status = 'idle';
        },
        loginFailure(state, action) {
            state.status = 'failed';
            state.error = action.payload.error;
        },
        checkAuth(state, action) {
            state.isAuthenticated = true;
            state.status = 'succeeded';
        }
    },
});

export const { loginSuccess, logout, loginFailure, checkAuth } = authSlice.actions;
export default authSlice.reducer;
