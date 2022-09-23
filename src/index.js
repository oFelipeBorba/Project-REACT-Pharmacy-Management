import ReactDOM from 'react-dom/client';
import { LoginProvider } from './contexts/useLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginProvider>
    <App />
    </LoginProvider>
);


