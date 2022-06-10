import { configureStore } from "@reduxjs/toolkit";
import {login} from '../reducers/LoginReducer'

export const store = configureStore({
    reducer: {
        user: login
    }
});