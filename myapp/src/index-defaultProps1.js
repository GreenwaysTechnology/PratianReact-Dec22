import React from 'react';
import ReactDOM from 'react-dom/client';


class Profile extends React.Component {

    render() {
        return <div>
            <h1>Id : {this.props.id}</h1>
            <p>Name : {this.props.name}</p>
            <p>Status : {this.props.status ? "Available" : "Not Available"}</p>
            <p>Address</p>
            <address>
                <p>{this.props.address.street}</p>
                <p>{this.props.address.city}</p>
                <p>{this.props.address.state}</p>
            </address>
        </div>
    }
}
//default Props 
Profile.defaultProps = {
    id: 0,
    name: 'default',
    status: false,
    address: {
        street: 'street',
        city: 'city',
        state: 'state'
    }
}


//Parent Component
const App = () => {
    const address = {
        street: '10th street',
        city: 'Coimbatore',
        state: 'Tamil Nadu'
    }
    return <div>
        <Profile />
        <Profile id={1} name="Subramanian" status={true} address={address} />
        <Profile id={2} name="Ram" status={true} />

    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


