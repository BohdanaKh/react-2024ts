import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {NotFoundPage} from "../pages/NotFoundPage";
import {AuthPage} from "../pages/AuthPage";
import {CarsPage} from "../pages/CarsPage";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <NotFoundPage/>,
        children: [
            { index: true, element: <AuthPage/>},
            { path: 'cars', element: <CarsPage/> },
        ]

    }
])