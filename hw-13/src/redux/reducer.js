import { SET_FILTER } from "./types";
import { nanoid } from "nanoid";

const initialStore = {
    usersList: [
        { id: nanoid(), name: "Anna" },
        { id: nanoid(), name: "Stefan" },
        { id: nanoid(), name: "John" },
        { id: nanoid(), name: "Andrey" },
        { id: nanoid(), name: "Igor" },
        { id: nanoid(), name: "Sofia" },
    ],
    filter: ""
}

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_FILTER:
            return { ...store, filter: action.payload };
        default:
            return store;
    }
};

export default reducer;