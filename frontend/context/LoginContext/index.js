import React, {createContext, useState}  from 'react'
import store from './store';
import { SignUpFormData, LabelErrorPassword } from '../../utils/Constants';
import { ValidationSystem } from '../../utils/ValidationSystem';

export const LoginContext =  createContext(store);
const AuthProvider =  ({children}) => {

    const [IsSignup, setIsSignup] = useState(false);
    const [Values, setValues] = useState( {} );


    const [ SignInSchema ] = useState(ValidationSystem(false));
    const [ SignupSchema ] = useState(ValidationSystem(true));


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

  

    const SendValues = (...args) => {

            console.log( args , "==========SendValues===========");
    }
    const SetSession = () => {

    }

    const Goto = () => {

    }


    const validateName = (value) => {
            let error 
        
            
            if (!value) {
              error = 'Name is required'
            } else if (value.toLowerCase() !== 'naruto') {
              error = "Jeez! You're not a fan 😱"
            }
            
            if(!error){
                SendValues(value);
            return
            }
            console.log( value, "=>", "===" , error);

            return error
    }
51

    const state =  {
        sayhello,
        SendValues,
        SetSession,
        Goto,
        ValidationSystem,
        validateName,
        setIsSignupFunc,
        setValuesFunc,
        resetValuesFunc,
        
        SignUpFormData,
        LabelErrorPassword,
        //Booleans

        IsSignup,

        SignInSchema,
        SignupSchema,

    }


    return (
        <LoginContext.Provider value ={state}>
            {children}
        </LoginContext.Provider>
    )
}

export default AuthProvider;