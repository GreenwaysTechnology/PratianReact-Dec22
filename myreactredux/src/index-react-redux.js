import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
/////////////////////////////////////////////////////////////////////////////////////
//Redux
//1.reducer
// state= The reducer state- inital state
// action => the Request object {type:'counter/nameoftheaction'}
const CounterReducer = (state = { counter: 10 }, action) => {
    switch (action.type) {
        case 'counter/increment':
            //immutable logic 
            return { ...state, counter: state.counter + 1 }
        case 'counter/decrement':
            //immutable logic 
            return { ...state, counter: state.counter - 1 }
        default:
            return state; //default state//initali state would be render during inital render
    }
}
//create Store object .
const appStore = configureStore({
    reducer: {
        counterReducer: CounterReducer
    }
})

//React

const Counter = props => {
    //useSelect will filter state based on reducer
    //appState.reducer.state
    const counter = useSelector(appState => {
        console.log(appState.counterReducer)
        return appState.counterReducer.counter
    })
    //Get the Dispatcher
    const dispatch = useDispatch()

    const onIncrement = evt => {
        //trigger reducer biz logic
        const incrementAction = {
            type: 'counter/increment'
        }
        dispatch(incrementAction)
    }

    return <div>
        <h1>Counter {counter}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>
    </div>

}


/////////////////////////////////////////////////////////////////////////////////////
const App = () => <div style={{ margin: 50, padding: 50, backgroundColor: 'ButtonFace' }}>
    <Provider store={appStore}>
        <h1 style={{ textAlign: 'center' }}>React Redux Integration App</h1>
        <Counter />
    </Provider>

</div>
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
