import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.tsx';
import FloatChartPage from "../pages/FloatChartPage.tsx";
import MorrisChartPage from "../pages/MorrisChartPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import Dashboard from "../pages/Dashboard.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'float', element: <FloatChartPage /> },
            { path: 'morris', element: <MorrisChartPage /> },
        ],
    },
]);

export default router;