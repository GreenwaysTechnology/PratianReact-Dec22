import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import produce from 'immer';
/////////////////////////////////////////////////////////////////////////////////////
const profile = {
    id: 1,
    name: 'Subramanian',
    address: {
        state: 'Tamil Nadu',
        city: 'coimbatore',
        pincode: '6111 111'

    },
    skill: {
        ui: {
            subject: 'react',
            points: 10
        }
    }
};
const ProfileReducer = (state = profile, action) => {
    switch (action.type) {
        case 'profile/update':
            //state.address.city ='Delhi'
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         city: action.payload
            //     }
            // }
            return produce(state, draft => {
                console.log(draft)
                draft.address.city = action.payload
            })
        case 'profile/like':
            // return {
            //     ...state,
            //     skill: {
            //         ...state.skill,
            //         ui: {
            //             ...state.skill.ui,
            //             points: state.skill.ui.points + 2
            //         }
            //     }
            // }
            return produce(state, draft => {
                draft.skill.ui.points++
            })

        default:
            return state;
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
    console.log(profile.skill.ui.points)

    //Get the Dispatcher
    const dispatch = useDispatch()


    return <div>
        <h1>Profile Information</h1>
        <div>
            <p>Id {profile.id}</p>
            <p>Name {profile.name}</p>
            <p>City {profile.address.city}</p>
            <h2>Skill</h2>
            <p>Subject {profile.skill.ui.subject}</p>
            <p>Points {profile.skill.ui.points}</p>

        </div>
        <button onClick={() => {
            dispatch({ type: 'profile/update', payload: 'Chennai' })
        }}>UpdateCity</button>
        <button onClick={() => {
            dispatch({ type: 'profile/like' })
        }}>Likes</button>
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
