import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/AuthSlice';

const store = configureStore({
    reducer: authReducer,
});

export default store;