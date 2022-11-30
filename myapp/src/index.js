import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//error Component
const ErrorMessage = props => <div>
    {props.error}
</div>
const Spinner = props => <div>
    <h2>Loading....</h2>
</div>

class Todos extends Component {
    //state to hold data
    state = {
        error: null, // error 
        isLoaded: false, // spinner/loader
        todos: [] // data
    }
    render() {
        //Conditional rendering:based on ui state we need to show component
        const { error, isLoaded, todos } = this.state;
        // Task for you : to organize this ui into separate components
        if (error) {
            return <ErrorMessage error={error} />
        } else if (!isLoaded) {
            return <Spinner />
        } else {
            return <div>
                {
                    todos.map(todo => <div key={todo.id}>
                        <span>{todo.title}</span>
                    </div>)
                }
            </div>
        }
    }
    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        try {
            const todos = await (await fetch(url)).json()
            this.setState({
                todos: todos,
                isLoaded: true
            })
        } catch (error) {
            this.setState({
                isLoaded: true,
                error
            });
        }

    }
}




const App = () => <div>
    <Todos />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)   