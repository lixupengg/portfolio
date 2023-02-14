// Base imports
import ReactDOM from 'react-dom';

import { DashboardMetaContextProvider } from '@stonksfi/hooks';
import BaseRouter from './routes';
import { mainConfig } from './pages/DashboardPage/configs/main';

// Import css to remove margin
import './index.scss';

const app = (
    <DashboardMetaContextProvider initialDashboardConfig={mainConfig}>
        <BaseRouter />
    </DashboardMetaContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));
