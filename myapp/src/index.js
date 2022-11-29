import React from "react";
import ReactDOM from "react-dom/client";
import { TODOS } from "./mock-data/todos";

// const TodoList = props => {
//     return <div>
//         <ul>
//             {
//                 props.todos.map(todo => {
//                     return <TodoDetails key={todo.id} title={todo.title} />
//                 })
//             }
//         </ul>
//     </div>
// }

const TodoList = props => {
    return <div>
        <ul>
            {
                props.todos.map(todo => <TodoDetails key={todo.id} title={todo.title} />)
            }
        </ul>
    </div>
}
const TodoDetails = ({ title }) => <li>{title}</li>

const App = () => <div>
    <TodoList todos={TODOS} />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)     