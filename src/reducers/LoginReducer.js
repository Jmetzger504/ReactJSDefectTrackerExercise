import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    role: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state,action) {
            state.loggedIn = true;
            state.role = action.payload;
        }
    }
})

export default userSlice.reducer;