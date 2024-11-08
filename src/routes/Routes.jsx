import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllGadget from "../pages/AllGadget/AllGadget";
import GadgetCards from "../components/GadgetCards/GadgetCards";
import GadgetDeatils from "../pages/GadgetDeatils/GadgetDeatils";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Statistics from "../pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categoryName.json'),
                children: [
                    {
                        path: '/',
                        element: <GadgetCards></GadgetCards>,
                        loader: () => fetch('../categoryDetails.json'),
                    },
                    {
                        path: 'category/:categoryName',
                        element: <GadgetCards></GadgetCards>,
                        loader: () => fetch('../categoryDetails.json'),
                    }
                ]
            }

            ,
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: '/gadget',
                element: <AllGadget />,
                loader: () => fetch('../categoryDetails.json'),
            },
            {
                path: '/gadget/:gadgetId',
                element: <GadgetDeatils />,
                loader: () => fetch('../categoryDetails.json')
            },
            {
                path: '/statistics',
                element: <Statistics />,
                loader: () => fetch('../categoryDetails.json')

            }
        ],
    }
]);




export { router };