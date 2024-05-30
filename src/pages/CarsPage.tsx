import {FC, useEffect, useState} from 'react';

import {CarsComponent} from "../components/CarsComponent";
import {carService} from "../services/api.service";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";


const CarsPage: FC = () => {
    const [carsObjectWithPagination, setCarsObjectWithPagination] = useState<ICarPaginatedModel | undefined> ({
        total_items: 0,
        total_pages: 0,
        prev: '',
        next: '',
        items: [],
    });

    useEffect(() => {
        carService.getCars().then(value => setCarsObjectWithPagination(value));
    }, []);

    return (
        <div>
            <CarsComponent cars={carsObjectWithPagination?.items}/>
        </div>
    );
};

export {CarsPage};
