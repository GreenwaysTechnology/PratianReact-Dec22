import React, { useState } from "react";
import ReactDOM from "react-dom/client";


const Counter = props => {
    //state = { counter:{ inc:0,dec:0} }
    const [counter, setCounter] = useState({ inc: 0, dec: 100 })

    const onIncrement = () => {
        //
        // setCounter(counter => {
        //     return { ...counter, inc: counter.inc + 1 }
        // })
        // setCounter(counter =>({ ...counter, inc: counter.inc + 1 }))
        setCounter(({ ...counter, inc: counter.inc + 1 }))

    }

    return <div>
        <h1>Counter App</h1>
        <h2>Increment: {counter.inc} Decrement {counter.dec}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => setCounter(({ ...counter, dec: counter.dec - 1 }))
        }>-</button>


    </div>
}


const App = () => <div>
    <Counter />
</div>
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />) 