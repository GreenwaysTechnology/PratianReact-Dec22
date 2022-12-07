import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


const Home = () => {
    return <h1>Home</h1>
}

const App = () => <div style={styles.container}>
    <h1 style={{ textAlign: 'center' }}>React Router Integration</h1>
    <BrowserRouter>
            <Home/>
    </BrowserRouter>
</div>

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

const styles = {
    container: { margin: 50, padding: 50, backgroundColor: 'ButtonFace' }
}