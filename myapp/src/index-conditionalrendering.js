import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//error Component
const ErrorMessage = props => <div>
    {props.error}
</div>
const Spinner = props => <div>
    <h2>Loading....</h2>
</div>

const style = {
    cursor: 'pointer'
}
class Todos extends Component {
    //state to hold data
    state = {
        error: null, // error 
        isLoaded: false, // spinner/loader
        todos: [], // data
        todo: null
    }
    onSelected = async (id) => {
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`
        try {
            const todo = await (await fetch(url)).json() // 
            this.setState({
                todo: todo,
            })
            console.log(todo)
        } catch (error) {
            this.setState({
                isLoaded: true,
                error
            });
        }
    }

    render() {
        //Conditional rendering:based on ui state we need to show component
        const { error, isLoaded, todos, todo } = this.state;
        // Task for you : to organize this ui into separate components
        if (error) {
            return <ErrorMessage error={error} />
        } else if (!isLoaded) {
            return <Spinner />
        } else {
            return <div style={{ marginLeft: 150 }}>
                <div style={{ backgroundColor: 'yellow' }}>
                    {todo ? <>
                        <h1>Todo Details</h1>
                        <p>id: {todo.id}</p>
                        <p>title: {todo.title}</p>
                        <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
                    </> : ''}
                </div>
                <hr />
                {
                    todos.map(todo => <div key={todo.id}>
                        <span onClick={() => {
                            this.onSelected(todo.id)
                        }} style={style}>{todo.title}</span>
                        <hr />
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