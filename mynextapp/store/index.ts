import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../features/counter/counterSlice'

export const appStore = configureStore({
    reducer: {
        counter: counterReducer
    }
})