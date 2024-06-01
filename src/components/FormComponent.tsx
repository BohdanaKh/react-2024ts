import { FC } from 'react';
import {useForm} from "react-hook-form";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { ImSad } from "react-icons/im";

import {AuthDataModel} from "../models/AuthDataModel";
import {authService} from "../services/api.service";
import useAuth from "../hooks/useAuth.hook";

const FormComponent: FC = () => {
    const { isUserAuth,signIn } = useAuth();

   const { handleSubmit, register}  = useForm<AuthDataModel>({defaultValues: {username: 'userBK5121243', password: 'P5a1$$2w'}});

    const authenticate = async ( formData: AuthDataModel): Promise<void> =>  {
        await authService.authentication(formData);
        signIn();
    };


    return (
        <div>
            <h3>Sign in</h3>
            <div>
                {
                    isUserAuth ? <FaRegFaceSmileBeam /> : <ImSad />
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
