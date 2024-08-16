import instance from "./axios";
import { checkAuth } from "../redux/reducers/authReducer";

export const login = async (credentials) => {
    try {
        const response = await instance.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await instance.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await instance.post('/auth/logout', {}, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error during logout:', error);
        throw error;
    }
};

export const check = async (dispatch) => {
    try {
        const response = await instance.get('/auth/protected', { withCredentials: true });
        if (response.data) {
            dispatch(checkAuth(response.data));
        }
    } catch (error) {
        console.error('Error during checkAuth:', error);
        throw error;
    }

};
