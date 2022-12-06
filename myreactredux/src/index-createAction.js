import React from 'react';
import { configureStore, createAction } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import produce from 'immer';
import "./list.css"
import './index.css';

/////////////////////////////////////////////////////////////////////////////////////

const products = [{
    id: 1,
    name: 'IPhone',
    qty: 10
},
{
    id: 2,
    name: 'Google Pixel',
    qty: 40
}

]

const cartincrement = createAction('cart/incrementqty')
const { type } = cartincrement()
//console.log('cart',cartincrement())

const CartReducer = (state = products, action) => {
    switch (action.type) {
        case type:
            return produce(state, draft => {
                draft[action.payload].qty += 1
            })
        case 'cart/decrementqty':
            return produce(state, draft => {
                if (draft[action.payload].qty > 1) {
                    draft[action.payload].qty -= 1
                }
            })
        default:
            return state
    }
}
//create Store object .
const appStore = configureStore({
    reducer: {
        cart: CartReducer
    },
    devTools: true // default is true
})

//React

const Cart = props => {

    const cart = useSelector(appState => {
        return appState.cart
    })

    //Get the Dispatcher
    const dispatch = useDispatch()


    return <div>
        <h1>Cart</h1>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Qty</th>
                <th>CartAction</th>
            </tr>
            <tbody>
                {
                    cart.map((product, index) => {
                        return <>
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.qty}</td>
                                <td style={{ paddingLeft: 40 }}>
                                    <button onClick={() => {
                                        dispatch({ type: 'cart/incrementqty', payload: index })
                                    }}>+</button>
                                    <button onClick={() => {
                                        dispatch({ type: 'cart/decrementqty', payload: index })
                                    }}>-</button>
                                </td>

                            </tr>
                        </>
                    })
                }
            </tbody>
        </table>

    </div>

}


/////////////////////////////////////////////////////////////////////////////////////
const App = () => <div style={{ margin: 50, padding: 50, backgroundColor: 'ButtonFace' }}>
    <Provider store={appStore}>
        <h1 style={{ textAlign: 'center' }}>React Redux Integration App</h1>
        <Cart />
    </Provider>

</div>
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
