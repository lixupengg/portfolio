// Base imports
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Canvas } from '@react-three/fiber';
import BaseRouter from './routes';
import { fakeData } from './DATA/fake';
import 'rsuite/dist/rsuite.min.css';
// Import css to remove margin
import './index.scss';

const app = <BaseRouter />;

ReactDOM.render(app, document.getElementById('root'));
