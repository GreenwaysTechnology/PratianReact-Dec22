import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import produce from 'immer';
import "./list.css"
import './index.css';
/////////////////////////////////////////////////////////////////////////////////

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
const CartReducer = (state = products, action) => {
    switch (action.type) {
        case 'cart/incrementqty':
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
    }
})
////
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



const Home = props => {
    return <h1>{props.title}</h1>
}
//default Props
Home.defaultProps = {
    title: 'Home'
}
const UserList = () => {
    return <div>
        <h2>User List</h2>
    </div>
}
const App = () => <div style={styles.container}>
    <h1 style={{ textAlign: 'center' }}>React Router Integration</h1>
    <Provider store={appStore}>
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Routes>
                {/* Map Urls aginst compoents */}
                <Route path="/" element={<Home title="MyShopping App" />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </Provider>
</div>

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

const styles = {
    container: { margin: 50, padding: 50, backgroundColor: 'ButtonFace' }
}