import React from "react";
import ReactDOM from "react-dom/client";

class Counter extends React.Component {
    state = {
        //data 
        counter: 10 // inital state /Current State
    }
    //event listener
    onIncrement = () => {
        this.setState((prvState) => {
            return { ...prvState, counter: prvState.counter + 1 }
        })
    }

    render() {
        return <CounterDashBoard counter={this.state.counter} onIncrement={this.onIncrement} />
    }
}

//child component
export const CounterDashBoard = props => {
    return <div>
        <h1>Counter App</h1>
        <h2>Counter Value {props.counter}</h2>
        <button onClick={props.onIncrement}>+</button>
    </div>
}

const App = () => <div>
    <Counter />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)     