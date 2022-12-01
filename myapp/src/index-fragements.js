import React  from "react";
import ReactDOM from "react-dom/client";

const Greeter = props => {
    return <div>
        {/* element is closed */}
        <h1>hello</h1>
        {/* jsx:comments self closing */}
        <img />
    </div>
}

// const Hello = props => {
//     return <React.Fragment>
//         <p>Hello</p>
//         <p>Hai</p>
//     </React.Fragment>
// }

// const Hello = props => {
//     return <Fragment>
//         <p>Hello</p>
//         <p>Hai</p>
//     </Fragment>
// }

const Hello = props => {
    return <>
        <p>Hello</p>
        <p>Hai</p>
    </>
}
const App = () => <>
    <Hello />
</>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)  