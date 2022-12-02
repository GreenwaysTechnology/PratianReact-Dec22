import { configureStore } from '@reduxjs/toolkit';
import { CommentsReducer } from '../features/comments/comments.reducer';
import { CounterReducer } from '../features/counter/counter.reducer';

export const appStore = configureStore({
    reducer: {
        counterReducer: CounterReducer,
        commentsReducer: CommentsReducer
    }
})
