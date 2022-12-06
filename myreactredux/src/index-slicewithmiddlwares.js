import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import logger from 'redux-logger'
import "./list.css"
import './index.css';

//////////////////////////////////////////////////////////////////////////////////
const initialState = {
    value: 10
}
//action  =  'sliceName/reducerName'
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        }
    }
})
console.log(counterSlice)
//extract reducers,actions from the slice 
export const { increment, decrement, incrementByAmount } = counterSlice.actions
//const counterReducer = counterSlice.reducer


const appStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
    //we have already predefined middlwares, now i want to add new middleware as well = existingmiddleware + new Middleware
    middleware: (getDefaultMiddleware) => {
        //console.log('Default Middlewares => ',getDefaultMiddleware())
        return getDefaultMiddleware().concat(logger)
    }
})


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
