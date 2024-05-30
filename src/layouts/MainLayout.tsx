import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {HeaderComponent} from "../components/HeaderComponent";
import {AuthProvider} from "../context/auth.context";


const MainLayout: FC = () => {

    return (
        <div>
            <AuthProvider>
                <HeaderComponent/>
                <Outlet/>
            </AuthProvider>
        </div>
    );
};

export {MainLayout};

