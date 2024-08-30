import React from 'react';
import ReactDOM from 'react-dom/client';
import {Suspense} from 'react';
import Loader from './components/widgets/Loader.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/style.css';
import {AppSnackbarWrapper} from './pages/AppSnackbarWrapper.tsx';
import App from './app/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Suspense fallback={<Loader/>}>
            <AppSnackbarWrapper>
                <App>
                </App>
            </AppSnackbarWrapper>
        </Suspense>
    </React.StrictMode>,
);
