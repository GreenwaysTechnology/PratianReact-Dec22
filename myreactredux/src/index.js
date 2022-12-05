import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
/////////////////////////////////////////////////////////////////////////////////////
const profile = {
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'coimbatore'
    }
};
const ProfileReducer = (state = profile, action) => {
    switch (action.type) {
        case 'profile/update':
             return null; 
        default:
            return state; //default state//initali state would be render during inital render
    }
}
//create Store object .
const appStore = configureStore({
    reducer: {
        profile: ProfileReducer
    }
})

//React

const Profile = props => {

    const profile = useSelector(appState => {
        return appState.profile
    })
    
    //Get the Dispatcher
    const dispatch = useDispatch()

    const onUpdate = evt => {
     
    }

    return <div>
        <h1>Profile Information</h1>
        <div>
            <p>Id {profile.id}</p>
            <p>Name {profile.name}</p>
            <p>City {profile.address.city}</p>


        </div>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>UpdateCity</button>
    </div>

}


/////////////////////////////////////////////////////////////////////////////////////
const App = () => <div style={{ margin: 50, padding: 50, backgroundColor: 'ButtonFace' }}>
    <Provider store={appStore}>
        <h1 style={{ textAlign: 'center' }}>React Redux Integration App</h1>
        <Profile />
    </Provider>

</div>
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
