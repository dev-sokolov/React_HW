import { configureStore } from "@reduxjs/toolkit";

import userReducer from './users/userSlice.js';

const store = configureStore({
    reducer: {
        users: userReducer,
    }
})

export default store;


