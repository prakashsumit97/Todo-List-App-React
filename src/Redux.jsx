import { increment, decrement } from './reduxCode/action';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './reduxCode/store';

function ReduxImplementation() {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();
    function incrementTheValue() {
        dispatch(increment());
    }
    function decrementTheValue() {
        dispatch(decrement());
    }
    return <div>
        <label>{count}</label>
        <button onClick={incrementTheValue}>Increment</button>
        <button onClick={decrementTheValue}>Decrement</button>
    </div>
}

// Wrap your App component with Redux Provider
export default function WrappedReduxImplementataion() {
    return (
        <Provider store={store}>
            <ReduxImplementation />
        </Provider>
    );
}