import {createBrowserRouter, Navigate} from 'react-router-dom';
import Layout from '../Layout.tsx';
import ErrorPage from '../../pages/ErrorPage.tsx';
import Dashboard from '../../pages/Dashboard.tsx';
import {SignUp} from '../../pages/SignUp.tsx';
import {SignIn} from '../../pages/SignIn.tsx';
import {PrivateRoute} from './PrivateRoute.tsx';
import Statistics from '../../pages/Statistics.tsx';
import Settings from '../../pages/Settings.tsx';


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
                    { path: '/statistics', element: <Statistics/> },
                    { path: '/settings', element: <Settings/> },
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
