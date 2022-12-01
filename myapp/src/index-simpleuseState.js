import React, { useState } from "react";
import ReactDOM from "react-dom/client";

class Counter__ extends React.Component {
    //component's data is encapsulated inside state variable
    state = {
        //data 
        counter: 0 // inital state /Current State
    }
    //event listener
    onIncrement = () => {

        this.setState((prvState) => {
            //return Object.assign({}, prvState, { counter: prvState.counter + 1 })
            return { ...prvState, counter: prvState.counter + 1 }
        })
    }

    render() {
        console.log(this.state)
        return <div>
            <h1>Counter App</h1>
            <h2>Counter Value {this.state.counter}</h2>
            <button onClick={this.onIncrement}>+</button>
        </div>
    }
}

//Functional Component using hooks:
const Counter = props => {
    //state declaration
    const [count, setCount] = useState(0)
    const onIncrement = () => {
        // setCount(count => {
        //     return count + 1
        // })
        setCount(count + 1)
    }

    return <div>
        <h1>Counter App</h1>
        <h2>Value : {count}</h2>
        <button onClick={onIncrement}>+</button>
    </div>
}


const App = () => <div>
    <Counter />
</div>
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />) 