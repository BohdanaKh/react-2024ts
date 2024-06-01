import {FC, useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";

import {CarsComponent} from "../components/CarsComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import useAuth from "../hooks/useAuth.hook";
import {PaginationComponent} from "../components/PaginationComponent";
import {fetchAndSetCarsState, refresh} from "../services/helpers/cars.helpers";



const CarsPage: FC = () => {

    const [query] = useSearchParams();
    const navigate = useNavigate();
    const { isUserAuth, signIn, signOut } = useAuth();

    const [carsObjectWithPagination, setCarsObjectWithPagination] = useState<ICarPaginatedModel> ({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: [],
    });

    // useEffect(() => {
    //         const getCarsData = async () => {
    //             try {
    //                 const response = await carService.getCars(query.get('page') || '1');
    //             if (response) {
    //                 setCarsObjectWithPagination(response);
    //             }
    //             } catch (e) {
    //                const axiosError = e as AxiosError;
    //                if (axiosError && axiosError?.response?.status === 401) {
    //                    try {
    //                        await authService.refresh();
    //                    } catch (e) {
    //                        return navigate('/');
    //                    }
    //                    const response = await carService.getCars(query.get('page') || '1');
    //                    if (response) {
    //                        setCarsObjectWithPagination(response);
    //                    }
    //                }
    //             }
    //         }
    //         getCarsData();
    //
    // }, [query]);

    useEffect( () => {
        const getCarsData = async () => {
        if (isUserAuth) {
            try {
                await fetchAndSetCarsState({query, setCarsObjectWithPagination})
            } catch (e) {
             await refresh({query, setCarsObjectWithPagination, signIn, signOut, navigate})

            }
        } else {
            await refresh({query, setCarsObjectWithPagination, signIn, signOut, navigate})
        }

    }
    getCarsData();


    }, [isUserAuth, query])

    return (
        <div>
            <CarsComponent cars={carsObjectWithPagination?.items}/>
            <PaginationComponent prev={carsObjectWithPagination.prev} next={carsObjectWithPagination.next} />
        </div>
    );

}

export {CarsPage};
