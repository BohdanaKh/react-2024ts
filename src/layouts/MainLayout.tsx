import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {HeaderComponent} from "../components/HeaderComponent";


const MainLayout: FC = () => {

    return (
        <div>
          <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};

