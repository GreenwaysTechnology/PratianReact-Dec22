import React from "react";
import ReactDOM from "react-dom/client";


const Link = props => {
    return <>
        {props.children}
    </>
}

const Header = props => {
    return <>
        <h1>{props.title}</h1>
        {props.children}
    </>
}
const Footer = props => {
    return <h1>Footer</h1>
}

const Page = props => <>
    {props.children}
</>

const MenuItems = props => <ul>
    <li><a href="#">profile</a></li>
    <li><a href="#">services</a></li>
    <li><a href="#">success stories</a></li>
</ul>

const App = () => <div>
    <Page>
        {/* here Header Component passed as prop */}
        <Header title="Customer Management">
         <hr/>
            <Link>
                <MenuItems />
            </Link>
        </Header>
        <Footer>

        </Footer>
    </Page>
</div>


const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)  