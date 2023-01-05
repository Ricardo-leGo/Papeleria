import React, {createContext}  from 'react'
import store from './store';

export const LoginContext =  createContext(store);


const AuthProvider =  ({children}) => {

    const sayhello= (name=" fulanito ") =>{
        console.log(  `hola ${name}` ) ;
    return 
    }

    const SetValues = ({name,value}) => {

    }

    const SendValues = () => {

    }

    const SetSession = () => {

    }

    const Goto = () => {

    }


    const state =  {
        sayhello,
        SetValues,
        SendValues,
        SetSession,
        Goto,
    }


    return (
        <LoginContext.Provider value ={state}>
            {children}
        </LoginContext.Provider>
    )
}

export default AuthProvider;