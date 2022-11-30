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
    componentDidMount() {
        //api call to fetch data from the end point 
        // setTimeout(() => {
        //     const url = 'https://jsonplaceholder.typicode.com/todos'
        //     fetch(url)
        //         .then(response => response.json())
        //         .then(todos => {
        //             this.setState(previousState => {
        //                 return {
        //                     ...previousState,
        //                     todos: previousState.todos.concat(todos),
        //                     isLoaded: true
        //                 };
        //             });

        //         }).catch(err => {
        //             console.log(err)
        //         })
        // }, 5000)

        const url = 'https://jsonplaceholder.typicode.com/todos'
        fetch(url)
            .then(response => response.json())
            .then(todos => {
                this.setState(previousState => {
                    return {
                        ...previousState,
                        todos: previousState.todos.concat(todos),
                        isLoaded: true
                    };
                });

            }).catch(err => {
                console.log(err)
            })
    
}
}




const App = () => <div>
    <Todos />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)   