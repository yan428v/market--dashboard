import React from 'react';
import ReactDOM from 'react-dom/client';
import {Suspense} from 'react';
import Loader from './components/widgets/Loader.tsx';
import {RouterProvider} from 'react-router-dom';
import router from './app/routes/router.tsx';

import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/style.css';
import {AppWrapper} from "./pages/AppWrapper.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Suspense fallback={<Loader/>}>
        <AppWrapper>
            <RouterProvider router={router}/>
        </AppWrapper>
        </Suspense>
    </React.StrictMode>,
);
