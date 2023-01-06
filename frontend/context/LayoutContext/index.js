import React, {createContext, useState}  from 'react';

export const LayoutContext =  createContext({});

const LayoutProvider =  ({children, IsMobile}) => {
    
    const [IsSignup, setIsSignup] = useState(false);

    const [setIsSignupFunc] = useState( (boleano) => setIsSignup(boleano) );
    
    const state ={
        IsMobile,
        setIsSignupFunc,
        IsSignup,
    }
        
    return (
        <LayoutContext.Provider value ={state}>
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider;




