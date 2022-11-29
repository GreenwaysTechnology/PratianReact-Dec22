import React from 'react';
import ReactDOM from 'react-dom/client';

const Profile = props => {
    return <div>
        <h1>Id : {props.id}</h1>
        <p>Name : {props.name}</p>
        <p>Status : {props.status ? "Available" : "Not Available"}</p>
        <p>Address</p>
        <address>
            <p>{props.address.street}</p>
            <p>{props.address.city}</p>
            <p>{props.address.state}</p>
        </address>
    </div>
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




//using object destructuring
// const Profile = props => {
//     const { id, name, status, address: { city, street, state } } = props
//     return <div>
//         <h1>Id : {id}</h1>
//         <p>Name : {name}</p>
//         <p>Status : {status ? "Available" : "Not Available"}</p>
//         <p>Address</p>
//         <address>
//             <p>{street}</p>
//             <p>{city}</p>
//             <p>{state}</p>
//         </address>
//     </div>
// }

// const Profile = ({ id, name, status, address: { city, street, state } }) => <div>
//     <h1>Id : {id}</h1>
//     <p>Name : {name}</p>
//     <p>Status : {status ? "Available" : "Not Available"}</p>
//     <p>Address</p>
//     <address>
//         <p>{street}</p>
//         <p>{city}</p>
//         <p>{state}</p>
//     </address>
// </div>


//Parent Component
const App = () => {
    const address = {
        street: '10th street',
        city: 'Coimbatore',
        state: 'Tamil Nadu'
    }
    return <div>
        {/* <Profile id={1} name="Subramanian" status={true} address={address} /> */}
        <Profile />
        <Profile id={1} name="Subramanian" status={true} address={address} />
        <Profile id={2} name="Ram" status={true} />

    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


