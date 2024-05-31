import {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {CarsComponent} from "../components/CarsComponent";
import {carService} from "../services/api.service";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import useAuth from "../hooks/useAuth.hook";
import {PaginationComponent} from "../components/PaginationComponent";


const CarsPage: FC = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const { isUserAuth } = useAuth();
    const [carsObjectWithPagination, setCarsObjectWithPagination] = useState<ICarPaginatedModel | undefined> ({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: [],
    });

    useEffect(() => {
        setQuery({page: '1'})
    }, []);

    useEffect(() => {
        if (isUserAuth) {
            carService.getCars(query.get('page') || '1').then(value => {
                if (value) {
                    setCarsObjectWithPagination(value)
                }
            });
        }
    }, [isUserAuth, query]);

    // const changePage = (action: string) => {
    //     switch (action) {
    //         case 'prev':
    //             setQuery({...carsObjectWithPagination.prev});
    //             break;
    //         case 'next':
    //             setQuery({...carsObjectWithPagination.next});
    //             break;
    //
    //     }
    // }


    return (
        <div>
            <CarsComponent cars={carsObjectWithPagination?.items}/>
            <PaginationComponent prev={carsObjectWithPagination.prev} next={carsObjectWithPagination.next} />
        </div>
    );
};

export {CarsPage};
