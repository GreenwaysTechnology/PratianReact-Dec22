import React from 'react';
import ReactDOM from 'react-dom/client';

//Every component is pure function, props are read only 
const Profile = props => {
    //props.city = 'Delhi' 
    return <div>
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.city}</p>

    </div>
}
const App = () => {
    const profile = {
        id: 1,
        name: 'Subramanian',
        city: 'Coimbatore'

    }
    return <Profile id={profile.id} name={profile.name} city={profile.city} />
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);