import React, { createContext, useEffect, useReducer } from 'react';
import { Appearance, AppState } from 'react-native';
import { userReducer } from './userReducer';
import { darkTheme, lightTheme } from '../../theme/theme';
import { ThemeState } from '../../interfaces/themeState';

export type Pet = {
    name: string,
    race: string | null,
    lastHairdresser: Date;
};
export type UserState = {
    name: string;
    pets: Pet[];
};

interface UserContextProps {
    user: UserState; 
    getUser: () => void;
    setUser: (user: UserState) => void;
}

const initialUser: UserState = {
    name: '', 
    pets: [
        { name: '', race: null, lastHairdresser: new Date() }
    ]
};


export const UserContext = createContext({} as UserContextProps );


export const UserProvider = ({ children }: any ) => {

    const [ user, dispatch ] = useReducer( 
        userReducer, 
        initialUser
    );

    useEffect(() => {
         getUser();
    }, []);

    const setUser = (user: UserState) => {
        dispatch({ type: 'set_user', payload: user });
    }

    const getUser = () => {
        dispatch({ type: 'get_user' });
    }

    return (
        <UserContext.Provider value={{
            user,
            getUser,
            setUser,
        }}>
            { children }
        </UserContext.Provider>
    )
}
