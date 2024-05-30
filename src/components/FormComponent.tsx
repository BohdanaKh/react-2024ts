import {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { ImSad } from "react-icons/im";

import {AuthDataModel} from "../models/AuthDataModel";
import {authService} from "../services/api.service";


const FormComponent: FC = () => {
   const { handleSubmit, register}  = useForm<AuthDataModel>({defaultValues: {username: 'userBK5121243', password: 'P5a1$$2w'}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async ( formData: AuthDataModel): Promise<void> =>  {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    };


    return (
        <div>
            <h3>Sign in</h3>
            <div>
                {
                    isAuthState ? <FaRegFaceSmileBeam /> : <ImSad />
                }
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')} />
                <input type="text" {...register('password')} />
                <button>Auth me</button>
            </form>
        </div>
    );
};

export {FormComponent};
