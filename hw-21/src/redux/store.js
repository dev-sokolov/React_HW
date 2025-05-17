import { configureStore } from "@reduxjs/toolkit";

import questionnarieReducer from './questionnaire/questionnaire-slice';

const store = configureStore({
    reducer: {
        questionnaire: questionnarieReducer
    }
});

export default store;

