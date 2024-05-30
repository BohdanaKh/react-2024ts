import {FC} from 'react';
import {Link} from "react-router-dom";


const HeaderComponent: FC = () => {

    return (
        <div>

            <div>
                <Link to={'/'}>Login</Link>
            </div>
            <div>
                <Link to={'cars'}>Cars</Link>
            </div>
        </div>
    );
};

export {HeaderComponent};
