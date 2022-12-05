import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { appStore } from './app/store'
import { Comments } from './features/comments/comments';
import { Counter } from './features/counter/counter';

/////////////////////////////////////////////////////////////////////////////////////
const App = () => <div style={{ margin: 50, padding: 50, backgroundColor: 'ButtonFace' }}>
    <Provider store={appStore}>
        <h1 style={{ textAlign: 'center' }}>React Redux Integration App</h1>
        <Counter />
        <hr/>
        <Comments/>
    </Provider>
</div>
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
