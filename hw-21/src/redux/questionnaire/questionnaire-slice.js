import { createSlice } from "@reduxjs/toolkit";

import { questionsArr } from "../../data/questionsArr";

const initialState = {
    questions: questionsArr,
    score: 0
}

const questionnaireSlice = createSlice({
    name: "questionnaire",
    initialState,
    reducers: {
        answerQuestion: (store, { payload }) => {
            const question = store.questions.find(item => item.id === payload.id);
            if (question) question.userAnswer = payload.userAnswer; 
        },
        submitAnswers: (store) => {
            store.score = store.questions.filter(item => item.userAnswer === item.answer).length;
        },
    }
})

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;




