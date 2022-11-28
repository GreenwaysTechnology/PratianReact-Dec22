import React from 'react'
import ReactDOM from 'react-dom/client';

// es 6 class 
class Greeter extends React.Component {
    render() {
        return <h1>Greeter!!</h1>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeter />);
