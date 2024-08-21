import {createBrowserRouter, Navigate} from 'react-router-dom';
import Layout from '../Layout.tsx';
import FloatChartPage from '../../pages/FloatChartPage.tsx';
import MorrisChartPage from '../../pages/MorrisChartPage.tsx';
import ErrorPage from '../../pages/ErrorPage.tsx';
import Dashboard from '../../pages/Dashboard.tsx';
import {SignUp} from '../../pages/SignUp.tsx';
import {SignIn} from '../../pages/SignIn.tsx';
import {PrivateRoute} from './PrivateRoute.tsx';
import Statistics from '../../pages/Statistics.tsx';

const router = createBrowserRouter([
    {
        errorElement:<ErrorPage />,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Layout /></PrivateRoute>,
                children: [
                    { path: '/', element: <Navigate to="/dashboard" /> },
                    { path: '/dashboard', element: <Dashboard /> },
                    { path: '/float', element: <FloatChartPage /> },
                    { path: '/morris', element: <MorrisChartPage /> },
                    { path: '/statistics', element: <Statistics/> },
                    { path: '/*', element: <Navigate to="/dashboard" /> }
                ]
            },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element:<SignUp />},
            { path: '/*', element: <Navigate to="/signin" /> }
        ],
    },
]);

export default router;
