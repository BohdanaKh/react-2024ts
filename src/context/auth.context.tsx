import React, {createContext, ReactNode, useState} from 'react';

type UserAuth = {
    isUserAuth: boolean,
    signIn: () => void,
    signOut: () => void
}

const defaultUserAuth: UserAuth = {
isUserAuth: false,
signIn: () => {},
signOut: () => {}
}
const AuthContext = createContext<UserAuth>(defaultUserAuth);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isUserAuth, setIsUserAuth] = useState(false);
    const signIn = () => {
        setIsUserAuth(true);
    };

    const signOut = () => {
        setIsUserAuth(false);
    };

    return (
    <AuthContext.Provider value={{ isUserAuth, signIn, signOut }}>
        {children}
    </AuthContext.Provider>
);
};

export { AuthProvider, AuthContext };