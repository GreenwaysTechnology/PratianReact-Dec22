import React from 'react';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import "./list.css"
import './index.css';

//////////////////////////////////////////////////////////////////////////////////
//builder pattern
const initialState = {
    value: 10
}
const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction('counter/incrementByAmount')

const counterReducer = createReducer(initialState, builder => {
    //builder.addCase('counter/increment')
    builder
        .addCase(increment, (state, action) => {
            //biz logic:immer abstracted immutable logic
            state.value++
        })
        .addCase(decrement, (state, action) => {
            //biz logic:immer abstracted immutable logic
            state.value--
        })
        .addCase(incrementByAmount, (state, action) => {
            //biz logic:immer abstracted immutable logic
            state.value += action.payload
        })
        .addDefaultCase((state, action) => { })
})


const appStore = configureStore({
    reducer: {
        counter: counterReducer
    }
})


const Counter = props => {

    const value = useSelector(state => state.counter.value);
    const onIncrement = useDispatch();

    return <>
        <h1>Counter Increment Value : {value}</h1>
        <button onClick={() => {
            onIncrement(increment())
        }}>Increment</button>
        <button onClick={() => {
            onIncrement(decrement())
        }}>Decrement</button>
     <button onClick={() => {
            onIncrement(incrementByAmount(2))
        }}>IncrementByAmount</button>
    </>
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
