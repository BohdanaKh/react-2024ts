import {FC, useEffect, useState} from 'react';

import {CarsComponent} from "../components/CarsComponent";
import {carService} from "../services/api.service";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import useAuth from "../hooks/useAuth.hook";


const CarsPage: FC = () => {
    const { isUserAuth } = useAuth();
    const [carsObjectWithPagination, setCarsObjectWithPagination] = useState<ICarPaginatedModel | undefined> ({
        total_items: 0,
        total_pages: 0,
        prev: '',
        next: '',
        items: [],
    });

    useEffect(() => {
        if (isUserAuth) {
            carService.getCars().then(value => setCarsObjectWithPagination(value));
        }
    }, [isUserAuth]);

    return (
        <div>
            <CarsComponent cars={carsObjectWithPagination?.items}/>
        </div>
    );
};

export {CarsPage};
