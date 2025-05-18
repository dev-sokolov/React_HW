import { createAsyncThunk } from "@reduxjs/toolkit";

import { getQuotesApi } from "../../api/quotes-api";

export const getQuote = createAsyncThunk(
    "quote/fetch",
    async (_, {rejectWithValue}) => {
        try {
            const data = getQuotesApi();
            return data;
        } catch (error) {
            return rejectWithValue(error?.responce?.data?.message)
        } 
    }
)