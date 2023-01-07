import React, {createContext, useState}  from 'react'
import store from './store';
import { SignUpFormData, SignInFormData, LabelsErrorInputs } from '../../utils/Constants';
import { ValidationSystem } from '../../utils/ValidationSystem';

export const LoginContext =  createContext(store);
const AuthProvider =  ({children}) => {

    const [IsSignup, setIsSignup] = useState(false);
    const [Values, setValues] = useState( {} );

    const setIsSignupFunc = booleano => {
        return setIsSignup(booleano)
    }


    const setValuesFunc = ({name, value}) => {        
        setValues({
            ...Values,
            [name]: value
          });
    }

    const resetValuesFunc = () => setValues({});
    

    const sayhello= (name=" fulanito ") =>{
        console.log(  `hola ${name}` ) ;
    return 
    }

    const SetValues = ({name,value}) => {

    }

    const SendValues = (...args) => {

            console.log( args , "==========SendValues===========");
    }
    const SetSession = () => {

    }

    const Goto = () => {

    }
51

    const state =  {
        sayhello,
        SetValues,
        SendValues,
        SetSession,
        Goto,
        ValidationSystem,
        setIsSignupFunc,
        setValuesFunc,
        resetValuesFunc,
        SignUpFormData,
        //Booleans
        IsSignup

    }


    return (
        <LoginContext.Provider value ={state}>
            {children}
        </LoginContext.Provider>
    )
}

export default AuthProvider;