import React from 'react';
import ReactDOM from 'react-dom/client';

//Child component
//all parameters are received by a component as a single literal object which is called property or props
const Greeter = (props) => {
    console.log(props)
    return <h1>{props.message} {props.name}</h1>
}

//Parent Component
const App = () => {
    //imperative style:Not recommended to call function like this 
    // return Greeter('Subramanian')
    //jsx syntax: declartive style
    return <div>
        <Greeter name="Subramanian" message="Hello" />
        <Greeter name="Karthik" message="Hi" />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


