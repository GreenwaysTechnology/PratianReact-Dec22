import React, { useState } from "react";
import ReactDOM from "react-dom/client";


const Counter = props => {
    //state declaration => state = {inc:0,dec:100}
    const [inc, setInc] = useState(0)
    const [dec, setDec] = useState(100)
    //listener
    const onIncrement = () => {
        setInc(inc + 1)
    }
    const onIncrementByValue = (value) => {
        setInc(inc + value)
    }
    return <div>
        <h1>Counter App</h1>
        <h2>Increment: {inc} Decrement {dec}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => setDec(dec - 1)}>-</button>
        <button onClick={() => onIncrementByValue(2)}>DoubleIt</button>

    </div>
}


const App = () => <div>
    <Counter />
</div>
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />) 