import React from "react";
import ReactDOM from "react-dom/client";

//master compoent 
const ProfileMaster = props => <div>
    {/*passing the entire properties to child compoent  */}
    {/* <ProfileDetails id={props.id} name={props.name} status={props.status} address={props.address} /> */}
    {/* Property rethrow: you dont need to pass each and every property manually */}
    <ProfileDetails {...props} title="Profile Details" />
</div>

//details component
const ProfileDetails = props => <div>
    <h1>{props.title}</h1>
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

export const App = () => {
    const address = {
        street: '10th street',
        city: 'Coimbatore',
        state: 'Tamil Nadu'
    }
    return <ProfileMaster id={1} name="Subramanian" status={true} address={address} />
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)