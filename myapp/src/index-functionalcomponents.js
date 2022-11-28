import React from 'react'
import ReactDOM from 'react-dom/client';

// function Greeter() {
//     return <h1>Greeter</h1>
// }

// const Greeter = () => {
//     return <h1>Greeter</h1>
// }
const Greeter = () => <h1>Greeter</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeter />);
