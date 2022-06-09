import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../reducers/LoginReducer'

export const store = configureStore({
    reducer: {
        user: userReducer
    }
});