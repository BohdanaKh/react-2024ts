import {FC} from 'react';

import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

interface IProps {
car: ICarWithAuthModel;
}

const CarComponent: FC<IProps> = ({car}) => {
    const { id, brand, year, price} = car;

    return (
        <div>
            <ul>
                <li>id: {id}</li>
                <li>brand: {brand}</li>
                <li>year: {year}</li>
                <li>price: {price}</li>
            </ul>
            <hr/>
        </div>
    );
};

export {CarComponent};
