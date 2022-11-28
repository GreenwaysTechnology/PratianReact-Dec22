import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ProductRecommendations } from './products/productrecommendation';
// import { ProductList } from './products/products-list';
import { ProductList, ProductRecommendations } from './products'; //here
import { CustomerList } from './customers';

const Header = () => <div>
    <h1>Header</h1>
</div>

const Footer = () => <div>
    <h1>Footer</h1>
</div>
const Body = () => <div>
    <section>
        <h2>Products</h2>
        <ProductList />
    </section>
    <hr />
    <section>
        <h2>Todays Deals</h2>
        <ProductRecommendations />
    </section>
    <hr />
    <section>
        <h2>Customers Who Bought</h2>
        <CustomerList />
    </section>
</div>

//component Composition
const Layout = () => <div>
    <Header />
    <Body />
    <Footer />
</div>

const App = () => {
    return <Layout />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


