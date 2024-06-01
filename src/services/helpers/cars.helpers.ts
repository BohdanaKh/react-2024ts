import {Dispatch, SetStateAction} from "react";
import { AxiosError } from 'axios';
import {NavigateFunction} from "react-router-dom";

import {authService, carService} from "../api.service";
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";

interface IFetchCarsArgs {
    query: URLSearchParams;
    setCarsObjectWithPagination:  Dispatch<SetStateAction<ICarPaginatedModel>>;
}

interface IRefreshArgs extends IFetchCarsArgs {
    signIn: () => void;
    signOut: () => void;
    navigate: NavigateFunction;
}
export const fetchAndSetCarsState  = async ({query, setCarsObjectWithPagination}: IFetchCarsArgs): Promise<void> => {
    const response = await carService.getCars(query.get('page') || '1');
    if (response) {
        setCarsObjectWithPagination(response);
    }
}

export const refresh = async ({query, setCarsObjectWithPagination, signIn, signOut, navigate}: IRefreshArgs)=> {
    try {
        await authService.refresh().then(value => signIn());
        await fetchAndSetCarsState({query, setCarsObjectWithPagination});
    } catch (e) {
        const axiosError = e as AxiosError;
        if (axiosError && axiosError?.response?.status === 401) {
            signOut();
            return navigate('/');
        }
    }
}