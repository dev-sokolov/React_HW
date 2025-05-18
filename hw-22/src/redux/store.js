import { configureStore } from '@reduxjs/toolkit';

import quotesReducer from './quote/quotes-slice';

const store = configureStore({
    reducer: {
        quotes: quotesReducer
    }
});

export default store;