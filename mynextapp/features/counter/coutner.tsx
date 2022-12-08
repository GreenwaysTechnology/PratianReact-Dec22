import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = props => {

    const value = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return <>
        <h1>Counter Increment Value : {value}</h1>
        <button onClick={() => {
            dispatch(increment())
        }}>Increment</button>
        <button onClick={() => {
            dispatch(decrement())
        }}>Decrement</button>
        <button onClick={() => {
            dispatch(incrementByAmount(2))
        }}>IncrementByAmount</button>
    </>
}

export { Counter }