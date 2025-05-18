import { createSlice } from "@reduxjs/toolkit";

import { getQuote } from "./quotes-thunks";

const initialState = {
    currentQuote: "",
    author: "",
    loading: false,
    error: null,
}

const pending = (store) => {
    store.loading = true;
    store.error = null;
}

const rejected = (store, { payload }) => {
    store.loading = false;
    store.error = payload;
}

const quoteSlice = createSlice({
    name: "quotes",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getQuote.pending, pending)
            .addCase(getQuote.rejected, rejected)
            .addCase(getQuote.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.currentQuote = payload.q;
                store.author = payload.a;
            })
    }
})

export default quoteSlice.reducer;