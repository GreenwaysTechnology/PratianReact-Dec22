import { incrementAction, decrementAction, incrementByAmount } from "./counter.actions";


const CounterReducer = (state = { counter: 10 }, action) => {
    switch (action.type) {
        case incrementAction:
            //immutable logic 
            return { ...state, counter: state.counter + 1 }
        case decrementAction:
            //immutable logic 
            return { ...state, counter: state.counter - 1 }
        case incrementByAmount:
            //immutable logic 
            return { ...state, counter: state.counter + action.payload }
        default:
            return state; //default state//initali state would be render during inital render
    }
}
export { CounterReducer }