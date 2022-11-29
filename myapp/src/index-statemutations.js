import React from "react";
import ReactDOM from "react-dom/client";

class Counter extends React.Component {
    //component's data is encapsulated inside state variable
    state = {
        //data 
        counter: 0 // inital state /Current State
    }
    //event listener
    onIncrement = () => {
        // console.log('onIncrement')
        // this.setState((prvState) => {
        //     //return immutable object(immutable state)
        //     return {
        //         counter: prvState.counter + 1
        //     }
        // })
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

const App = () => <div>
    <Counter />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)     