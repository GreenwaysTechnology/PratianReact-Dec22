import { createSlice } from '@reduxjs/toolkit';

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
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const counterReducer = counterSlice.reducer