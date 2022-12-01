import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class UserInput extends Component {
    state = {
        firstName: ''
    }
    // handleChange = evt => {
    //     //Get Text Box Reference
    //     const target = evt.target
    //     console.log(target.value)
    //     this.setState({
    //         text: evt.target.value
    //     })
    // }
    render() {
        return <div style={{ margin: 50 }}>
            <h1>{this.state.text}</h1>
            <div>
                {/* <input onChange={this.handleChange} /> */}
                {/* on+EventName=> onBlur onUpdate onLeave */}
                <input onChange={(evt) => {
                    const target = evt.target
                    console.log(target.value)
                    this.setState({
                        firstName: evt.target.value
                    })
                }} />
            </div>
            <button onClick={() => {

            }}>Save</button>
        </div>
    }

}



const App = () => <div>
    <UserInput />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)  