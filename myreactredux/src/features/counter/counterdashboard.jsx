import { decrementAction, incrementAction, incrementByAmount } from "./counter.actions";
import { useDispatch } from 'react-redux';


const CounterDashBoard = props => {
    const dispatch = useDispatch()
    const onIncrement = () => {
        dispatch({ type: incrementAction })
    }
    return <div>
        <h1>Counter {props.counter}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: decrementAction })
        }}>-</button>

        <button onClick={() => {
            dispatch({ type: incrementByAmount, payload: 2 })
        }}>IncrementBy2</button>
    </div>
}
export { CounterDashBoard }