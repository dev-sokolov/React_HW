import { createSlice } from "@reduxjs/toolkit";

import userList from "../../data/userList";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    // reducers: {

    // }
})

export default userSlice.reducer;