import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class Parent extends Component {
    constructor() {
        super() // calling super class constructor
        console.log('Parent Constructor is called')
    }
    render() {
        console.log('Parent render is called')

        return <div>
                <Child/>
        </div>
    }
    componentDidMount() {
        console.log('Parent did Mount is called')
    }
}


class Child extends Component {
    constructor() {
        super() // calling super class constructor
        console.log('Child Constructor is called')
    }
    render() {
        console.log('Child render is called')

        return <div>

        </div>
    }
    componentDidMount() {
        console.log('Child did Mount is called')
    }
}

const App = () => <div>
    <Parent/>
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)     