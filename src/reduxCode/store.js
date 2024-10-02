import { createStore } from 'redux';
import { incDecReducer } from './reducers';




export const store = createStore(
    incDecReducer,
    // Redux DevTools extension for easier debugging
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
