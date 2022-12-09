import { useState, useEffect } from "react"
import Link from 'next/link';
import { useRouter } from "next/router"

//error Component
const ErrorMessage = props => <div>
    {props.error}
</div>
const Spinner = props => <div>
    <h2>Loading....</h2>
</div>

const Todos = props => {
    const [items, setItems] = useState({
        error: null, // error 
        isLoaded: false, // spinner/loader
        todos: [] // data
    })
    const router = useRouter()
    //componentDidMount
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        fetch(url)
            .then(response => response.json())
            .then(todos => {
                //Change this code in simple way
                setItems(previousState => {
                    return {
                        ...previousState,
                        todos: previousState.todos.concat(todos),
                        isLoaded: true
                    };
                });

            }).catch(err => {
                console.log(err)
            })

    }, [])

    const { error, isLoaded, todos } = items;
    if (error) {
        return <ErrorMessage error={error} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <div>
            {
                todos.map(todo => <div key={todo.id}>
                    <Link href={`${router.pathname}/${todo.id}`}>
                        <span>{todo.title}</span>
                    </Link>
                </div>)
            }
        </div>
    }
}
export default Todos
