import { createSlice } from '@reduxjs/toolkit';
import AuthService from '../services/AuthService';
import {jwtDecode} from 'jwt-decode'
import axios from "axios";
import {API_URL} from "../http";

const initialState = {
    userRole: null,
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    // mutations
    reducers: {
        setUserRole: (state, action) => {
            state.userRole = action.payload;
        },

        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },

        logout: (state) => {
            state.userRole = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUserRole, setAuth, logout } = authSlice.actions;

// async actions
export const loginUser = async (credentials, dispatch) => {
    try {
        const response = await AuthService.authenticate(credentials);

        const { accessToken } = response.data;
        localStorage.setItem('token', accessToken)

        dispatch(setAuth('True'));
        dispatch(setUserRole(jwtDecode(accessToken)['roles'][0]))

    } catch (error) {
        console.error('Login failed:', error.data?.message);
    }
};

export const checkAuth = async (dispatch) => {
    try {
        console.log(123)
        // const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true});
        // console.log(response)
        // const { accessToken } = response.data;
        // localStorage.setItem('token', accessToken)
        //
        // dispatch(setAuth('True'));
        // dispatch(setUserRole(jwtDecode(accessToken)['roles'][0]))

    } catch (error) {
        console.error('Login failed:', error);
    }
};

// export const registerUser = (email, username, password, role) => async (dispatch) => {
//     try {
//         await AuthService.signup(email, username, password, role);
//
//         // For simplicity, assume successful registration means the user is logged in
//         dispatch(setUser({ role }));
//     } catch (error) {
//         console.error('Registration failed:', error);
//     }
// };
//
export const userLogout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logout());
};

export const selectUserRole = (state) => state.userRole;
export const selectIsAuth = (state) => state.isAuth;
export default authSlice.reducer;
