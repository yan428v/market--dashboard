import {createBrowserRouter, Navigate} from 'react-router-dom';
import Layout from '../Layout.tsx';
import FloatChartPage from "../../pages/FloatChartPage.tsx";
import MorrisChartPage from "../../pages/MorrisChartPage.tsx";
import ErrorPage from "../../pages/ErrorPage.tsx";
import Dashboard from "../../pages/Dashboard.tsx";
import Statistics from "../../components/tables/Statistics.tsx";
import {PrivateRoute} from "./PrivateRoute.tsx";
import {SignUp} from "../../pages/SignUp.tsx";
import {SignIn} from "../../pages/SignIn.tsx";

const router = createBrowserRouter([
    {

        path: '/',
        errorElement:<ErrorPage />,
        children: [
            {
                element: <PrivateRoute><Layout /></PrivateRoute>,
                children: [
                    { path: '/', element: <Dashboard /> },
                    { path: 'float', element: <FloatChartPage /> },
                    { path: 'morris', element: <MorrisChartPage /> },
                    { path: 'statistics', element: <Statistics /> },
                ]
            },
            { path: 'signin', element: <SignIn /> },
            { path: 'signup', element:<SignUp />},
            { path: '*', element: <Navigate to="/" /> }
        ],
    },
]);

export default router;
