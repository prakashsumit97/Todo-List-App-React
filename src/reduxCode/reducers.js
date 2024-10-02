// reducers.js

import { INCREMENT, DECREMENT } from './action';

// Initial state
const initialState = {
    count: 0
};

export const incDecReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};
