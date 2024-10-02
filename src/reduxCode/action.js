// actions.js

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';



// Action Creators
export const increment = () => ({
    type: INCREMENT,
    payload: {
        type: "increment the value"
    },
});

// Action Creators
export const decrement = () => ({
    type: DECREMENT,
    payload: {
        type: "decrement the value"
    },
});